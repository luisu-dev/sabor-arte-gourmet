const SHOPIFY_DOMAIN = "TU_TIENDA.myshopify.com";

const products = [
  {
    name: "Beluga Reserve 30g",
    description: "Perfil mantequilloso y notas marinas elegantes.",
    price: "$3,900 MXN",
    handle: "beluga-reserve-30g",
    variantId: "12345678901234",
  },
  {
    name: "Ossetra Imperial 50g",
    description: "Textura firme y final avellanado.",
    price: "$4,800 MXN",
    handle: "ossetra-imperial-50g",
    variantId: "12345678901235",
  },
  {
    name: "Kaluga Prestige 100g",
    description: "Intenso, cremoso y de larga persistencia.",
    price: "$8,900 MXN",
    handle: "kaluga-prestige-100g",
    variantId: "12345678901236",
  },
];

const productGrid = document.getElementById("productGrid");
const shopLink = document.getElementById("shopLink");
const goCheckout = document.getElementById("goCheckout");

function productUrl(handle) {
  return `https://${SHOPIFY_DOMAIN}/products/${handle}`;
}

function checkoutUrl(items) {
  const path = items.map((p) => `${p.variantId}:1`).join(",");
  return `https://${SHOPIFY_DOMAIN}/cart/${path}`;
}

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (p) => `
        <article class="card reveal">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <p class="price">${p.price}</p>
          <div class="card-actions">
            <a class="btn" href="${productUrl(p.handle)}" target="_blank" rel="noreferrer">Ver producto</a>
            <a class="btn ghost" href="https://${SHOPIFY_DOMAIN}/cart/${p.variantId}:1" target="_blank" rel="noreferrer">Comprar ahora</a>
          </div>
        </article>
      `
    )
    .join("");
}

function wireShopifyLinks() {
  const checkout = checkoutUrl(products);
  goCheckout.href = checkout;
  goCheckout.target = "_blank";
  goCheckout.rel = "noreferrer";
  shopLink.href = `https://${SHOPIFY_DOMAIN}`;
}

function initRevealAnimations() {
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

  nodes.forEach((node) => observer.observe(node));
}

renderProducts();
wireShopifyLinks();
initRevealAnimations();
