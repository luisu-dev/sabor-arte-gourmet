const { useEffect, useState } = React;

const SHOPIFY_DOMAIN = "TU_TIENDA.myshopify.com";

const promoSlides = [
  {
    eyebrow: "Caviar premium",
    title: "Selecciones de caviar para mesas, regalos y celebraciones.",
    copy:
      "Curaduría de especies premium con entrega refrigerada, asesoría personalizada y kits listos para regalo ejecutivo.",
    image:
      "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=1400&q=80",
    badge: "Entrega refrigerada",
  },
  {
    eyebrow: "Ediciones limitadas",
    title: "Latas, cofres y experiencias para ocasiones serias.",
    copy:
      "Beluga, Ossetra y Kaluga con presentaciones listas para cenas privadas y hospitalidad de alto nivel.",
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=1400&q=80",
    badge: "Regalos premium",
  },
  {
    eyebrow: "Servicio concierge",
    title: "Compra por especie, gramaje, maridaje o evento.",
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

/* ============================================
   PROMO BANNER — aparece sólo en la primera visita
   ============================================ */
function PromoBanner({ onClose }) {
  return (
    <div
      className="promo-overlay"
      onClick={(e) => e.target.classList.contains("promo-overlay") && onClose()}
    >
      <div className="promo-modal">
        <button className="promo-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <div className="promo-deco"></div>

        <p className="eyebrow">Oferta de bienvenida</p>
        <h2 className="promo-title">10% en tu primera compra</h2>
        <p className="promo-copy">
          Selecciona tu caviar favorito y aplica el código al finalizar tu pedido. Válido en toda la tienda.
        </p>

        <div className="promo-code-box">
          <span className="promo-code-label">Tu código exclusivo</span>
          <span className="promo-code-value">BIENVENIDO10</span>
        </div>

        <div className="promo-actions">
          <a className="btn" href="#destacados" onClick={onClose}>
            Ver selección ahora
          </a>
          <button className="btn ghost" onClick={onClose}>
            Continuar sin descuento
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   APP PRINCIPAL
   ============================================ */
function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  // Banner: sólo en la primera visita
  useEffect(() => {
    const hasVisited = localStorage.getItem("sac_visited");
    if (!hasVisited) {
      const t = setTimeout(() => setShowBanner(true), 1200);
      localStorage.setItem("sac_visited", "1");
      return () => clearTimeout(t);
    }
  }, []);

  // Scroll reveal
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
      { threshold: 0.14 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  // Hero carousel auto-rotate
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % promoSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const activePromo = promoSlides[activeSlide];
  const closeBanner = () => setShowBanner(false);

  return (
    <>
      {showBanner && <PromoBanner onClose={closeBanner} />}

      <header className="site-header" id="top">
        {/* Top strip */}
        <div className="top-strip">
          <div className="container top-strip-content">
            <span>Envío gratis arriba de $5,000 MXN</span>
            <span>Entrega refrigerada 24–48h</span>
            <span>Compra directa desde la home</span>
          </div>
        </div>

        {/* Utility bar */}
        <div className="container utility-bar">
          <a className="utility-link" href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
            Tienda completa
          </a>
          <span className="brand">SABOR &amp; ARTE</span>
          <a className="utility-link" href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        {/* Sticky nav */}
        <nav className="nav-shell">
          <div className="container nav-inner">
            <div className="nav-links">
              <a href="#categorias">Categorías</a>
              <a href="#destacados">Destacados</a>
              <a href="#contacto">Contacto</a>
            </div>

            <div className="search-shell" aria-label="Búsqueda simulada">
              <span>Buscar caviar, gramajes, cajas regalo…</span>
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
        </nav>

        {/* Hero */}
        <div className="hero-grid">
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
        {/* Promo row */}
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

        {/* Categories */}
        <section id="categorias" className="categories container reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Compra por especie</p>
              <h2>Categorías destacadas</h2>
            </div>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver todo →
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

        {/* Collections */}
        <div className="collection-strip container reveal">
          {collections.map((collection) => (
            <article key={collection.title}>
              <strong>{collection.title}</strong>
              <p>{collection.copy}</p>
            </article>
          ))}
        </div>

        {/* Featured products */}
        <section id="destacados" className="featured container reveal delay-1">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Lo más pedido</p>
              <h2>Caviar destacado</h2>
            </div>
            <a href={checkoutUrl(featuredProducts)} target="_blank" rel="noreferrer">
              Comprar selección →
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

        {/* Gift banner */}
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

        {/* Reserves */}
        <section id="reservas" className="reserves container reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Reserva privada</p>
              <h2>Selecciones especiales</h2>
            </div>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver más reservas →
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

        {/* Service strip */}
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

        {/* Newsletter */}
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

      <footer className="footer" id="contacto">
        <div className="container footer-grid">
          <div>
            <span className="brand">SABOR &amp; ARTE</span>
            <p>Caviar premium, regalos gourmet y servicio concierge para mesas, clientes y celebraciones.</p>
            <div className="footer-social">
              <a className="social-btn whatsapp" href="https://wa.me/5210000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a className="social-btn instagram" href="https://instagram.com/saboryarte" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
              <a className="social-btn facebook" href="https://facebook.com/saboryarte" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a className="social-btn tiktok" href="https://tiktok.com/@saboryarte" target="_blank" rel="noreferrer" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                TikTok
              </a>
            </div>
          </div>
          <div>
            <strong>Categorías</strong>
            <a href="#categorias">Beluga</a>
            <a href="#categorias">Ossetra</a>
            <a href="#categorias">Kaluga</a>
            <a href="#categorias">Kits regalo</a>
          </div>
          <div>
            <strong>Compra</strong>
            <a href="#destacados">Destacados</a>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">Tienda completa</a>
            <a href="mailto:hola@saboryarte.com">hola@saboryarte.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
