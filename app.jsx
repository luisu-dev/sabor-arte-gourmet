const { useEffect, useState } = React;

const SHOPIFY_DOMAIN = "TU_TIENDA.myshopify.com";

const promoSlides = [
  {
    eyebrow: "Caviar premium",
    title: "Selecciones de caviar para mesas, regalos y celebraciones.",
    copy:
      "Una portada comercial muy cercana a una tienda gourmet editorial: promociones visibles, entradas por categoría y compra rápida desde la home.",
    image:
      "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=1400&q=80",
    badge: "Entrega refrigerada",
  },
  {
    eyebrow: "Ediciones limitadas",
    title: "Latas, cofres y experiencias de servicio para ocasiones serias.",
    copy:
      "Curaduría de Beluga, Ossetra y Kaluga con asesoría personalizada y presentaciones listas para regalo ejecutivo.",
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=1400&q=80",
    badge: "Regalos premium",
  },
  {
    eyebrow: "Servicio concierge",
    title: "Compra por especie, gramaje, maridaje o tipo de evento.",
    copy:
      "Navegación clara para empujar conversión: categorías visuales, destacados, combos y cajas exclusivas.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=80",
    badge: "Asesoría 1:1",
  },
];

const categories = [
  {
    name: "Beluga",
    copy: "Notas mantequillosas y textura delicada.",
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ossetra",
    copy: "Perlas firmes con final avellanado.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kaluga",
    copy: "Intenso, cremoso y de larga persistencia.",
    image:
      "https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kits regalo",
    copy: "Caviar, blinis, mother of pearl y vodka.",
    image:
      "https://images.unsplash.com/photo-1612528443819-4f2482bb2d7e?auto=format&fit=crop&w=900&q=80",
  },
];

const collections = [
  {
    title: "Más vendidos",
    copy: "Selección rápida para primer compra o reposición.",
  },
  {
    title: "Para regalar",
    copy: "Presentaciones premium con montaje impecable.",
  },
  {
    title: "Para cenas privadas",
    copy: "Gramajes y maridajes pensados para compartir.",
  },
];

const featuredProducts = [
  {
    name: "Beluga Reserve 30g",
    description: "Perfil redondo, salinidad elegante y perla sedosa.",
    price: "$3,900 MXN",
    handle: "beluga-reserve-30g",
    variantId: "12345678901234",
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80",
    tag: "Top ventas",
  },
  {
    name: "Ossetra Imperial 50g",
    description: "Textura firme, notas de nuez y final largo.",
    price: "$4,800 MXN",
    handle: "ossetra-imperial-50g",
    variantId: "12345678901235",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    tag: "Favorito",
  },
  {
    name: "Kaluga Prestige 100g",
    description: "Boca cremosa y profundidad mineral persistente.",
    price: "$8,900 MXN",
    handle: "kaluga-prestige-100g",
    variantId: "12345678901236",
    image:
      "https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=900&q=80",
    tag: "Reserva",
  },
  {
    name: "Gift Box Signature",
    description: "Caviar, blinis, creme fraiche y cuchara nacarada.",
    price: "$6,200 MXN",
    handle: "gift-box-signature",
    variantId: "12345678901237",
    image:
      "https://images.unsplash.com/photo-1612528443819-4f2482bb2d7e?auto=format&fit=crop&w=900&q=80",
    tag: "Regalo",
  },
];

const reserveProducts = [
  {
    name: "Beluga Grand Cru 50g",
    description: "Lote especial para servicio de alta cocina.",
    price: "$6,900 MXN",
    handle: "beluga-grand-cru-50g",
    variantId: "12345678901238",
  },
  {
    name: "Ossetra Royal 100g",
    description: "Perla firme y final tostado de alta persistencia.",
    price: "$9,400 MXN",
    handle: "ossetra-royal-100g",
    variantId: "12345678901239",
  },
  {
    name: "Kaluga Estate 30g",
    description: "Acceso ideal al perfil Kaluga con gran balance.",
    price: "$3,450 MXN",
    handle: "kaluga-estate-30g",
    variantId: "12345678901240",
  },
  {
    name: "Colección Degustación",
    description: "Tres especies en formato comparativo para cata.",
    price: "$7,800 MXN",
    handle: "coleccion-degustacion",
    variantId: "12345678901241",
  },
];

const benefits = [
  "Envío nacional en cadena de frío",
  "Checkout directo a Shopify",
  "Asesoría por WhatsApp",
  "Sets de regalo corporativo",
];

function productUrl(handle) {
  return `https://${SHOPIFY_DOMAIN}/products/${handle}`;
}

function directCartUrl(variantId) {
  return `https://${SHOPIFY_DOMAIN}/cart/${variantId}:1`;
}

function checkoutUrl(items) {
  const path = items.map((p) => `${p.variantId}:1`).join(",");
  return `https://${SHOPIFY_DOMAIN}/cart/${path}`;
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

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
      { threshold: 0.16 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % promoSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activePromo = promoSlides[activeSlide];

  return (
    <>
      <div className="page-glow"></div>

      <header className="site-header" id="top">
        <div className="top-strip">
          <div className="container top-strip-content">
            <span>Envío gratis arriba de $5,000 MXN</span>
            <span>Entrega refrigerada 24-48h</span>
            <span>Compra directa desde la home</span>
          </div>
        </div>

        <div className="container utility-bar">
          <a className="utility-link" href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
            Tienda completa
          </a>
          <span className="brand">SABOR &amp; ARTE CAVIAR</span>
          <a className="utility-link" href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="container nav-shell">
          <nav className="nav-links">
            <a href="#categorias">Categorías</a>
            <a href="#destacados">Destacados</a>
            <a href="#reservas">Reservas</a>
            <a href="#regalos">Regalos</a>
            <a href="#asesoria">Asesoría</a>
          </nav>

          <div className="search-shell" aria-label="Búsqueda simulada">
            <span>Buscar caviar, gramajes, cajas regalo...</span>
          </div>

          <div className="nav-actions">
            <a className="nav-pill" href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver Shopify
            </a>
            <a className="btn" href={checkoutUrl(featuredProducts)} target="_blank" rel="noreferrer">
              Comprar selección
            </a>
          </div>
        </div>

        <div className="container hero-grid">
          <section className="hero-copy reveal">
            <p className="eyebrow">{activePromo.eyebrow}</p>
            <h1>{activePromo.title}</h1>
            <p className="lead">{activePromo.copy}</p>

            <div className="hero-actions">
              <a className="btn" href="#destacados">
                Comprar ahora
              </a>
              <a className="btn ghost" href="#categorias">
                Explorar categorías
              </a>
            </div>

            <div className="hero-notes">
              {benefits.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <aside className="hero-card reveal delay-1">
            <div className="hero-media">
              <img src={activePromo.image} alt={activePromo.title} loading="eager" />
              <span className="hero-badge">{activePromo.badge}</span>
            </div>

            <div className="hero-card-foot">
              <div>
                <strong>Compra gourmet</strong>
                <p>Promociones, especies y kits curados desde la portada.</p>
              </div>

              <div className="hero-dots">
                {promoSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeSlide ? "is-active" : ""}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="promo-row">
          <div className="container promo-grid reveal">
            <article>
              <strong>Promoción semanal</strong>
              <p>Ossetra Imperial + blinis artesanales a precio especial.</p>
            </article>
            <article>
              <strong>Cajas de regalo</strong>
              <p>Sets listos para entrega corporativa o celebración privada.</p>
            </article>
            <article>
              <strong>Maridajes</strong>
              <p>Vodka, champagne y servicio con mother of pearl.</p>
            </article>
            <article>
              <strong>Atención concierge</strong>
              <p>Selección guiada según evento, mesa o presupuesto.</p>
            </article>
          </div>
        </section>

        <section id="categorias" className="categories container reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Compra por especie</p>
              <h2>Categorías destacadas</h2>
            </div>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver todo
            </a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.name}>
                <img src={category.image} alt={category.name} loading="lazy" />
                <div className="category-copy">
                  <h3>{category.name}</h3>
                  <p>{category.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="collection-strip container reveal">
          {collections.map((collection) => (
            <article key={collection.title}>
              <strong>{collection.title}</strong>
              <p>{collection.copy}</p>
            </article>
          ))}
        </section>

        <section id="destacados" className="featured container reveal delay-1">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Lo más pedido</p>
              <h2>Caviar destacado</h2>
            </div>
            <a href={checkoutUrl(featuredProducts)} target="_blank" rel="noreferrer">
              Comprar selección
            </a>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article className="product-card reveal" key={product.variantId}>
                <figure className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span>{product.tag}</span>
                </figure>

                <div className="product-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong className="price">{product.price}</strong>
                </div>

                <div className="card-actions">
                  <a className="btn" href={productUrl(product.handle)} target="_blank" rel="noreferrer">
                    Ver producto
                  </a>
                  <a className="btn ghost" href={directCartUrl(product.variantId)} target="_blank" rel="noreferrer">
                    Comprar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="regalos" className="gift-banner container reveal">
          <div className="gift-copy">
            <p className="eyebrow">Regalos y experiencias</p>
            <h2>Kits listos para impresionar desde la primera apertura.</h2>
            <p>
              Cofres con caviar premium, acompañamientos clásicos y presentación de
              alto impacto para cenas, clientes y aniversarios.
            </p>
            <a className="btn" href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver gift boxes
            </a>
          </div>

          <div className="gift-panel">
            <article>
              <h3>Signature Box</h3>
              <p>Beluga Reserve, blinis, creme fraiche y cuchara nacarada.</p>
            </article>
            <article>
              <h3>Corporate Box</h3>
              <p>Formato premium para clientes, directivos y hospitalidad ejecutiva.</p>
            </article>
            <article>
              <h3>Dinner Experience</h3>
              <p>Selección pensada para maridar con champagne o vodka helado.</p>
            </article>
          </div>
        </section>

        <section id="reservas" className="reserves container reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Reserva privada</p>
              <h2>Selecciones especiales</h2>
            </div>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver más reservas
            </a>
          </div>

          <div className="reserve-grid">
            {reserveProducts.map((product) => (
              <article className="reserve-card" key={product.variantId}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <strong>{product.price}</strong>
                <div className="reserve-links">
                  <a href={productUrl(product.handle)} target="_blank" rel="noreferrer">
                    Ver producto
                  </a>
                  <a href={directCartUrl(product.variantId)} target="_blank" rel="noreferrer">
                    Comprar ahora
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="asesoria" className="service-strip container reveal">
          <div>
            <p className="eyebrow">Asesoría personalizada</p>
            <h2>Te ayudamos a elegir caviar por especie, gramaje, maridaje y ocasión.</h2>
          </div>
          <div className="service-actions">
            <a className="btn" href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
              Pedir recomendación
            </a>
            <a className="btn ghost" href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ir a tienda
            </a>
          </div>
        </section>

        <section className="newsletter container reveal">
          <div>
            <p className="eyebrow">Novedades</p>
            <h2>Lotes nuevos, cajas exclusivas y promociones privadas.</h2>
          </div>
          <a className="btn" href="mailto:hola@saboryarte.com">
            Suscribirme
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <span className="brand">SABOR &amp; ARTE CAVIAR</span>
            <p>Home comercial aterrizada por completo a caviar premium, regalos y servicio concierge.</p>
          </div>
          <div>
            <strong>Categorías</strong>
            <a href="#categorias">Beluga</a>
            <a href="#categorias">Ossetra</a>
            <a href="#categorias">Kaluga</a>
          </div>
          <div>
            <strong>Compra</strong>
            <a href="#destacados">Destacados</a>
            <a href="#reservas">Reservas</a>
            <a href="#regalos">Regalos</a>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Shopify
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
