const { useEffect } = React;

const SHOPIFY_DOMAIN = "TU_TIENDA.myshopify.com";

const products = [
  {
    name: "Beluga Reserve 30g",
    description: "Perfil mantequilloso y notas marinas elegantes.",
    price: "$3,900 MXN",
    handle: "beluga-reserve-30g",
    variantId: "12345678901234",
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ossetra Imperial 50g",
    description: "Textura firme y final avellanado.",
    price: "$4,800 MXN",
    handle: "ossetra-imperial-50g",
    variantId: "12345678901235",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kaluga Prestige 100g",
    description: "Intenso, cremoso y de larga persistencia.",
    price: "$8,900 MXN",
    handle: "kaluga-prestige-100g",
    variantId: "12345678901236",
    image:
      "https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=1200&q=80",
  },
];

function productUrl(handle) {
  return `https://${SHOPIFY_DOMAIN}/products/${handle}`;
}

function checkoutUrl(items) {
  const path = items.map((p) => `${p.variantId}:1`).join(",");
  return `https://${SHOPIFY_DOMAIN}/cart/${path}`;
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="noise"></div>

      <header className="hero" id="top">
        <div className="container nav-shell">
          <a className="brand" href="#top">SABOR &amp; ARTE GOURMET</a>
          <nav className="nav-links">
            <a href="#coleccion">Colección</a>
            <a href="#manifiesto">Manifiesto</a>
            <a href="#experiencia">Experiencia</a>
          </nav>
          <a className="btn ghost nav-buy" href="#coleccion">Comprar</a>
        </div>

        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="kicker">Private Reserve Caviar</p>
            <h1>Caviar de élite para mesas que no aceptan lo ordinario.</h1>
            <p className="lead">
              Curado de precisión, trazabilidad completa y servicio concierge para
              experiencias gastronómicas exclusivas.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#coleccion">Ver colección</a>
              <a className="btn ghost" href={checkoutUrl(products)} target="_blank" rel="noreferrer">
                Checkout directo
              </a>
            </div>
          </div>

          <aside className="hero-side reveal delay-1">
            <figure className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=1400&q=80"
                alt="Servicio gourmet de caviar en mesa premium"
                loading="eager"
              />
            </figure>
            <p className="side-label">Entrega y servicio</p>
            <div className="metric">
              <span>24-48h</span>
              <p>Cadena de frío certificada en todo momento.</p>
            </div>
            <div className="metric">
              <span>100%</span>
              <p>Trazabilidad de origen por lote y temporada.</p>
            </div>
            <div className="metric">
              <span>1:1</span>
              <p>Asistencia personal para maridaje y presentación.</p>
            </div>
          </aside>
        </div>

        <div className="ticker-wrap">
          <div className="ticker">
            <span>Beluga Reserve</span>
            <span>Ossetra Imperial</span>
            <span>Kaluga Prestige</span>
            <span>Ediciones Limitadas</span>
            <span>Alta Cocina</span>
            <span>Beluga Reserve</span>
            <span>Ossetra Imperial</span>
          </div>
        </div>
      </header>

      <main>
        <section id="manifiesto" className="manifesto container reveal">
          <p>Manifiesto</p>
          <h2>
            No vendemos un producto; orquestamos un ritual de sabor, diseño y
            precisión.
          </h2>
        </section>

        <section id="coleccion" className="products container reveal delay-1">
          <div className="section-head">
            <h2>Colección insignia</h2>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">Ir a tienda completa</a>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <article className="card reveal" key={p.variantId}>
                <figure className="card-image">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </figure>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p className="price">{p.price}</p>
                <div className="card-actions">
                  <a className="btn" href={productUrl(p.handle)} target="_blank" rel="noreferrer">Ver producto</a>
                  <a className="btn ghost" href={`https://${SHOPIFY_DOMAIN}/cart/${p.variantId}:1`} target="_blank" rel="noreferrer">
                    Comprar ahora
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="experience container reveal">
          <div>
            <p className="kicker">Experiencia de la casa</p>
            <h2>Asesoría privada para cenas, eventos y regalos ejecutivos</h2>
          </div>
          <a className="btn" href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
            Hablar por WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <span>© 2026 Sabor &amp; Arte Gourmet</span>
          <span>Desarrollado por AcidIA</span>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
