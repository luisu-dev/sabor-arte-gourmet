const { useEffect, useState } = React;

const SHOPIFY_DOMAIN = "sabor-y-arte-6.myshopify.com";

const promoSlides = [
  {
    eyebrow: "Caviar premium",
    title: "Caviar de autor para restaurantes, hoteles y distribuidores.",
    copy:
      "Selecciones de Beluga, Oscetra y Baerii con entrega refrigerada directa a tu negocio. Precios de proveedor y gramajes a escala.",
    image: "./hero/caviar.png",
    badge: "Entrega refrigerada",
  },
  {
    eyebrow: "Pato de especialidad",
    title: "Confit, magret y foie gras para cocinar con carácter.",
    copy:
      "Pato en sus cortes más nobles: confit de pierna, magret sellado y foie gras de producción artesanal para tu cocina o carta.",
    image: "./hero/pato.png",
    badge: "Producto fresco",
  },
  {
    eyebrow: "Trufa negra de invierno",
    title: "Tuber melanosporum. Intensidad aromática en su máxima expresión.",
    copy:
      "Trufa entera seleccionada a mano, origen Italia, Francia y España. Enviada para conservar su máxima frescura. Venta por gramo.",
    image: "./hero/trufa.png",
    badge: "Temporada",
  },
  {
    eyebrow: "Hongos gourmet",
    title: "Morillas, porcini y setas silvestres de temporada.",
    copy:
      "Hongos secos, frescos y en conserva para elevar cualquier receta: trufa negra, shiitake, boletus y más.",
    image: "./hero/hongos.png",
    badge: "De temporada",
  },
];

const categories = [
  {
    name: "Caviar",
    copy: "Beluga, Oscetra y Baerii en presentaciones de 30 g, 50 g y 100 g.",
    image: "./hero/caviar.png",
    handle: "caviar",
  },
  {
    name: "Pato",
    copy: "Foie gras, magret, confit y más cortes de pato nacional e importado.",
    image:
      "https://cdn.shopify.com/s/files/1/0719/5197/4444/files/productos_sabor_arte6.png?v=1775222363",
    handle: "Pato",
  },
  {
    name: "Hongos",
    copy: "Morilla, porcini, shiitake, setas frescas y mezclas deshidratadas.",
    image: "./hero/hongos.png",
    handle: "hongo",
  },
  {
    name: "Trufa",
    copy: "Trufa negra de invierno Tuber melanosporum. Aroma profundo, terroso y complejo.",
    image: "./hero/trufa.png",
    handle: "trufa",
  },
];

const collections = [
  {
    title: "Más vendidos",
    copy: "Los productos de caviar, pato y hongos con más salida entre nuestros clientes.",
  },
  {
    title: "Temporada",
    copy: "Hongos frescos, trufas y cortes de pato disponibles según la temporada.",
  },
  {
    title: "Volumen y mayoreo",
    copy: "Precios especiales para pedidos regulares, restaurantes y distribuidores.",
  },
];

const featuredProducts = [
  {
    name: "Caviar Oscetra 30g",
    description: "Notas a nuez y mantequilla, textura firme y cremosa. Origen esturión Oscetra.",
    price: "$2,145 MXN + IVA",
    handle: "caviar-oscetra",
    variantId: "VARIANT_ID_AQUI",
    image: "https://cdn.shopify.com/s/files/1/0719/5197/4444/files/productos_sabor_arte2.png?v=1775221380",
    tag: "Caviar",
  },
  {
    name: "Magret Natural Importado",
    description: "Pechuga de pato 700g–1kg. Exterior crujiente, interior jugoso. Sabor intenso.",
    price: "$1,000 MXN + IVA",
    handle: "magret-natural-importado",
    variantId: "VARIANT_ID_AQUI",
    image: "https://cdn.shopify.com/s/files/1/0719/5197/4444/files/productos_sabor_arte_26.png?v=1775361945",
    tag: "Pato",
  },
  {
    name: "Hongo Morilla Deshidratado",
    description: "1 kg. Sabor profundo e intenso, altamente valorado en alta cocina.",
    price: "$10,920 MXN + IVA",
    handle: "hongo-morilla-deshidratado",
    variantId: "VARIANT_ID_AQUI",
    image: "https://cdn.shopify.com/s/files/1/0719/5197/4444/files/productos_sabor_arte_7.png?v=1775359490",
    tag: "Hongos",
  },
  {
    name: "Foie Gras Torchon",
    description: "235g listo para cortar y servir. Textura delicada, sabor refinado y profundo.",
    price: "$725 MXN + IVA",
    handle: "foie-gras-torchon",
    variantId: "VARIANT_ID_AQUI",
    image: "https://cdn.shopify.com/s/files/1/0719/5197/4444/files/FoieGrasTorchon-Duck-BellaBellaGourmet.png?v=1775223140",
    tag: "Foie gras",
  },
];

const reserveProducts = [
  {
    name: "Caviar Beluga 50g",
    description: "La variedad más exclusiva. Perla sedosa, sabor suave y mantecoso.",
    price: "$3,204 MXN + IVA",
    handle: "caviar-beluga",
    variantId: "VARIANT_ID_AQUI",
  },
  {
    name: "Foie Gras Torchon",
    description: "235g listo para cortar y servir. Textura delicada, sabor refinado.",
    price: "$725 MXN + IVA",
    handle: "foie-gras-torchon",
    variantId: "VARIANT_ID_AQUI",
  },
  {
    name: "Trufa Invierno",
    description: "Tuber melanosporum entera. Aroma terroso y complejo. Venta por gramo.",
    price: "Precio por gramo",
    handle: "trufa-invierno",
    variantId: "VARIANT_ID_AQUI",
  },
  {
    name: "Mezcla de Setas Deshidratadas",
    description: "1 kg. Combinación de hongos. Perfil complejo para risottos, pastas y salsas.",
    price: "$3,120 MXN + IVA",
    handle: "mezcla-de-setas-deshidratadas",
    variantId: "VARIANT_ID_AQUI",
  },
  {
    name: "Prosciutto de Pato",
    description: "Pechuga curada y añejada en seco. 400–600g. Levemente picante con notas dulces.",
    price: "$1,920 MXN + IVA",
    handle: "prosciutto-importado-de-pato",
    variantId: "VARIANT_ID_AQUI",
  },
  {
    name: "Yuzu Kosho",
    description: "80g. Condimento japonés. Perfil cítrico, picante y umami. Ideal para mariscos.",
    price: "$444 MXN + IVA",
    handle: "yuzu-kosho",
    variantId: "VARIANT_ID_AQUI",
  },
];

const benefits = [
  "Envío nacional en cadena de frío",
  "Proveedor directo para negocios",
  "Precios de mayoreo disponibles",
  "Atención por WhatsApp",
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
   PROMO BANNER — aparece cada vez que se abre la página
   ============================================ */
function PromoBanner({ onClose }) {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí puedes conectar con tu backend, Formspree, etc.
    setSent(true);
  }

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

        {!showForm ? (
          <>
            <p className="eyebrow">Oferta de bienvenida</p>
            <h2 className="promo-title">10% en tu primera compra</h2>
            <p className="promo-copy">
              Productos de especialidad con descuento exclusivo en tu primer pedido. Reclama tu código y úsalo al finalizar tu compra.
            </p>

            <div className="promo-code-box">
              <span className="promo-code-label">Tu código exclusivo</span>
              <span className="promo-code-value">BIENVENIDO10</span>
            </div>

            <div className="promo-actions">
              <button className="btn" onClick={() => setShowForm(true)}>
                Reclamar descuento
              </button>
              <button className="btn ghost" onClick={onClose}>
                Continuar sin descuento
              </button>
            </div>
          </>
        ) : sent ? (
          <>
            <p className="eyebrow">¡Listo!</p>
            <h2 className="promo-title">Te contactamos pronto.</h2>
            <p className="promo-copy">
              Recibimos tus datos. En breve te enviamos tu código <strong style={{color:"var(--gold)"}}>BIENVENIDO10</strong> por WhatsApp o email.
            </p>
            <button className="btn" style={{width:"100%", borderRadius:"var(--r)"}} onClick={onClose}>
              Ir a la tienda
            </button>
          </>
        ) : (
          <>
            <p className="eyebrow">Reclamar descuento</p>
            <h2 className="promo-title" style={{fontSize:"clamp(1.5rem,3vw,2rem)", marginBottom:"1.2rem"}}>
              Déjanos tus datos
            </h2>

            <form className="promo-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pf-nombre">Nombre</label>
                <input
                  id="pf-nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pf-telefono">Teléfono</label>
                <input
                  id="pf-telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+52 55 0000 0000"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pf-email">Email</label>
                <input
                  id="pf-email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pf-mensaje">¿Algo específico que busques?</label>
                <textarea
                  id="pf-mensaje"
                  name="mensaje"
                  placeholder="Ej. busco un kit de regalo para una cena de 6 personas…"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <div className="promo-actions">
                <button className="btn" type="submit">
                  Enviar y reclamar código
                </button>
                <button className="btn ghost" type="button" onClick={() => setShowForm(false)}>
                  Volver
                </button>
              </div>
            </form>
          </>
        )}
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
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://${SHOPIFY_DOMAIN}/search?q=${encodeURIComponent(searchQuery.trim())}`, "_blank");
    }
  }

  // Banner: aparece cada vez que se carga la página
  useEffect(() => {
    const t = setTimeout(() => setShowBanner(true), 1200);
    return () => clearTimeout(t);
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

            <form className="search-shell" onSubmit={handleSearch} aria-label="Buscar productos">
              <input
                type="text"
                placeholder="Buscar caviar, gramajes, cajas regalo…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar"
              />
            </form>

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
                <strong>Proveedor gourmet</strong>
                <p>Caviar, pato y hongos de especialidad para tu negocio.</p>
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
              <strong>Caviar premium</strong>
              <p>Beluga, Ossetra y Kaluga con entrega refrigerada en 24–48h.</p>
            </article>
            <article>
              <strong>Pato gourmet</strong>
              <p>Confit, magret y foie gras de producción artesanal.</p>
            </article>
            <article>
              <strong>Hongos de especialidad</strong>
              <p>Trufas, boletus, morillas y setas frescas y secas.</p>
            </article>
            <article>
              <strong>Mayoreo y volumen</strong>
              <p>Precios especiales para pedidos regulares y distribuidores.</p>
            </article>
          </div>
        </section>

        {/* Categories */}
        <section id="categorias" className="categories container reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explora nuestra selección</p>
              <h2>Caviar, pato y hongos</h2>
            </div>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver todo →
            </a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <a
                className="category-card"
                key={category.name}
                href={`https://${SHOPIFY_DOMAIN}/collections/all?sort_by=title&filter.p.tag=${category.handle}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={category.image} alt={category.name} loading="lazy" />
                <div className="category-copy">
                  <h3>{category.name}</h3>
                  <p>{category.copy}</p>
                </div>
              </a>
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
              <h2>Productos destacados</h2>
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

        {/* Reserves */}
        <section id="reservas" className="reserves container reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">También te puede interesar</p>
              <h2>Más productos</h2>
            </div>
            <a href={`https://${SHOPIFY_DOMAIN}`} target="_blank" rel="noreferrer">
              Ver catálogo completo →
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
            <p className="eyebrow">Somos tu proveedor</p>
            <h2>Caviar, pato y hongos con precios de mayoreo para tu restaurante o negocio.</h2>
          </div>
          <div className="service-actions">
            <a className="btn" href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
              Cotizar por WhatsApp
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
            <h2>Nuevos productos, temporadas y precios de proveedor.</h2>
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
            <p>Proveedor de caviar, pato y hongos gourmet para restaurantes, hoteles y distribuidores.</p>
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
            <a href={`https://${SHOPIFY_DOMAIN}/collections/all?filter.p.tag=caviar`} target="_blank" rel="noreferrer">Caviar</a>
            <a href={`https://${SHOPIFY_DOMAIN}/collections/all?filter.p.tag=Pato`} target="_blank" rel="noreferrer">Pato</a>
            <a href={`https://${SHOPIFY_DOMAIN}/collections/all?filter.p.tag=hongo`} target="_blank" rel="noreferrer">Hongos</a>
            <a href={`https://${SHOPIFY_DOMAIN}/products/trufa-invierno`} target="_blank" rel="noreferrer">Trufa</a>
          </div>
          <div>
            <strong>Productos</strong>
            <a href={`https://${SHOPIFY_DOMAIN}/collections/all?filter.p.tag=caviar`} target="_blank" rel="noreferrer">Caviar</a>
            <a href={`https://${SHOPIFY_DOMAIN}/collections/all?filter.p.tag=Pato`} target="_blank" rel="noreferrer">Pato</a>
            <a href={`https://${SHOPIFY_DOMAIN}/collections/all?filter.p.tag=hongo`} target="_blank" rel="noreferrer">Hongos</a>
            <a href={`https://${SHOPIFY_DOMAIN}/products/trufa-invierno`} target="_blank" rel="noreferrer">Trufa</a>
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
