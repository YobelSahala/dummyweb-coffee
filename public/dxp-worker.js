console.log('DXP Loaded service worker!');
var redirectLink = '#';
var closeLink = '#';
var isHasAction = true;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('push', (e) => {
  e.waitUntil(
    (async () => {
      try {
        const data = e.data.json();
        if (!data || !data.title) {
          self.registration.showNotification('Notification', { body: 'You have a new message.' });
          return;
        }

        var notifAction = [];
        var actionButtons = data.actionButtons || [];

        if (actionButtons.length > 0) {
          actionButtons.map((item, index) => {
            notifAction.push({
              title: item.text,
              action: index == 0 ? 'yes' : 'no',
            });
            if (index == 0) redirectLink = item.action;
            else closeLink = item.action;
          });
        } else {
          isHasAction = false;
          redirectLink = data.link || '#';
        }

        var options = {
          body: data.message || data.body || '',
          icon: data.icon || undefined,
          actions: notifAction,
        };

        if (data.layout === 'banner' && data.bannerImage) {
          options.image = data.bannerImage;
        } else if (data.image) {
          options.image = data.image;
        }

        await self.registration.showNotification(data.title, options);
      } catch (err) {
        console.error('Push handler error:', err);
        self.registration.showNotification('Notification', { body: 'You have a new message.' });
      }
    })()
  );
});

self.addEventListener('notificationclick', (event) => {
  const eventAction = event.action;
  console.log('message event fired! event action is:', `'${eventAction}'`);
  // if (eventAction === 'no') {
  //   return;
  // }

  let url = eventAction === 'no' ? closeLink : redirectLink;

  if (!isHasAction) url = redirectLink;

  event.notification.close(); // Android needs explicit close.
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    }),
  );
});
