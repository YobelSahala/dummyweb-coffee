export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Artisanal coffee, <span>crafted for you.</span></h1>
                    <p>Experience the perfect balance of ethically sourced beans, masterfully roasted to bring out extraordinary flavors. Welcome to your new daily ritual.</p>
                    <div className="hero-actions">
                        <button className="btn-primary">View Menu</button>
                        <button className="btn-secondary">Find a Cafe</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/potrait-hero-image.avif" alt="Premium Latte Art" style={{ objectPosition: 'center 20%' }} />
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <h3>Ethically Sourced</h3>
                    <p>We work directly with farmers to ensure fair wages and sustainable agricultural practices for a better tomorrow.</p>
                    <img src="/blend-photo.avif" alt="Coffee beans blend" className="feature-image" />
                </div>
                <div className="feature-card">
                    <h3>Masterfully Roasted</h3>
                    <p>Our small-batch roasting process brings out the unique tasting notes and characteristics of every single bean.</p>
                    <img src="/master-blend.avif" alt="Coffee beans blend" className="feature-image" />
                </div>
                <div className="feature-card">
                    <h3>Expertly Brewed</h3>
                    <p>Our baristas are trained in the science and art of coffee extraction to deliver the perfect cup, every time.</p>
                    <img src="/glass-coffee.avif" alt="Coffee beans blend" className="feature-image" />
                </div>
            </section>
        </>
    );
}
