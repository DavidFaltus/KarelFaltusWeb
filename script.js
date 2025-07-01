let selectedProduct = "";

const productImages = {
  product1: [
    "foto/fotkyweb/spitfire/RESIZED/1.jpg",
    "foto/fotkyweb/spitfire/RESIZED/2.jpg",
    "foto/fotkyweb/spitfire/RESIZED/3.jpg",
    "foto/fotkyweb/spitfire/RESIZED/4.jpg",
    "foto/fotkyweb/spitfire/RESIZED/5.jpg",
    "foto/fotkyweb/spitfire/RESIZED/6.jpg",
    "foto/fotkyweb/spitfire/RESIZED/7.jpg",
    "foto/fotkyweb/spitfire/RESIZED/8.jpg",
    "foto/fotkyweb/spitfire/RESIZED/9.jpg",
    "foto/fotkyweb/spitfire/RESIZED/10.jpg",
    "foto/fotkyweb/spitfire/RESIZED/11.jpg",
    "foto/fotkyweb/spitfire/RESIZED/12.jpg",
    "foto/fotkyweb/spitfire/RESIZED/13.jpg"
  ],
  product2: [
    "foto/fotkyweb/vrtule/RESIZED/1.jpg",
    "foto/fotkyweb/vrtule/RESIZED/2.jpg",
    "foto/fotkyweb/vrtule/RESIZED/3.jpg",
    "foto/fotkyweb/vrtule/RESIZED/4.jpg",
    "foto/fotkyweb/vrtule/RESIZED/5.jpg",
    "foto/fotkyweb/vrtule/RESIZED/6.jpg",
    "foto/fotkyweb/vrtule/RESIZED/7.jpg",
    "foto/fotkyweb/vrtule/RESIZED/8.jpg",
    "foto/fotkyweb/vrtule/RESIZED/9.jpg"
  ],
  product3: [
    "foto/fotkyweb/alabtros/RESIZED/1.jpg",
    "foto/fotkyweb/alabtros/RESIZED/2.jpg",
    "foto/fotkyweb/alabtros/RESIZED/3.jpg",
    "foto/fotkyweb/alabtros/RESIZED/4.jpg",
    "foto/fotkyweb/alabtros/RESIZED/5.jpg",
    "foto/fotkyweb/alabtros/RESIZED/6.jpg",
    "foto/fotkyweb/alabtros/RESIZED/7.jpg",
    "foto/fotkyweb/alabtros/RESIZED/8.jpg",
    "foto/fotkyweb/alabtros/RESIZED/9.jpg",
    "foto/fotkyweb/alabtros/RESIZED/10.jpg",
    "foto/fotkyweb/alabtros/RESIZED/11.jpg",
    "foto/fotkyweb/alabtros/RESIZED/12.jpg",
    "foto/fotkyweb/alabtros/RESIZED/13.jpg"
  ],
  product4: [
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/1.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/2.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/3.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/4.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/5.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/6.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/7.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/8.jpg",
    "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/9.jpg"
  ]
};

const currentIndex = {
  product1: 0,
  product2: 0,
  product3: 0,
  product4: 0
};

const visibleCount = 7;

document.addEventListener("DOMContentLoaded", () => {
  // Pokud nepoužíváte rotaci obrázků, můžete tento blok odstranit.
  Object.keys(productImages).forEach(productId => {
    currentIndex[productId] = 0;
    renderThumbnails(productId);
  });

  // Otevření overlay při kliknutí na "Objednat"
  document.querySelectorAll(".objednani").forEach(button => {
    button.addEventListener("click", () => {
      selectedProduct = button.dataset.product; // Např. "Spitfire" nebo "VrtulovyList"
      const overlay = document.getElementById("emailOverlay");
      if (overlay) {
        overlay.style.display = "block";
      }
    });
  });

  // Zavření overlay (křížek)
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const overlay = document.getElementById("emailOverlay");
      if (overlay) {
        overlay.style.display = "none";
      }
    });
  }

  // Odeslání objednávkového formuláře (produkty)
  const form = document.getElementById("emailForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      // Načteme hodnoty z formuláře
      const name = document.getElementById("name")?.value;
      const email = document.getElementById("email")?.value;
      const phone = document.getElementById("phone")?.value;
      const address = document.getElementById("adress")?.value;
      const notes = document.getElementById("text")?.value;

      // Vyčteme zvolenou podstavu, pokud je produkt VrtulovyList
      let podsviceniVrtulovyListText = "";
      if (selectedProduct === "VrtulovyList") {
        const podstavaEl = document.querySelector(".podstava");
        if (podstavaEl) {
          podsviceniVrtulovyListText = `Zvolená podstava: ${podstavaEl.options[podstavaEl.selectedIndex].text}`;
        }
      }

      let spitfireText = "";
      if (selectedProduct === "Spitfire") {
        const variantEl = document.getElementById("variantSelect");
        if (variantEl) {
          spitfireText = `Zvolená verze: ${variantEl.options[variantEl.selectedIndex].text}`;
        }
      }

      let podsviceniVrtule = "";
      if (selectedProduct === "Vrtule") {
        const podstavaEl = document.querySelector(".podstava");
        if (podstavaEl) {
          podsviceniVrtule = `Zvolená verze: ${podstavaEl.options[podstavaEl.selectedIndex].text}`;
        }
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a9633fac-5576-428c-a534-1bd779586890", 
          name,
          email,
          phone,
          address,
          notes,
          subject: `Nová objednávka pro produkt ${selectedProduct}`,
          message: `\nJméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\nAdresa: ${address}\nPoznámky: ${notes}\nProdukt: ${selectedProduct}\n${podsviceniVrtulovyListText}\n${spitfireText}\n${podsviceniVrtule}`
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            confirmOrderSuccess(form);
          } else {
            alert("Nastala chyba při odesílání emailu (data.success=false).");
          }
        })
        .catch(error => {
          console.error("Chyba:", error);
          alert("Nastala chyba při odesílání emailu (fetch error).");
        });
    });
  }

  // Kontaktní formulář na stránce kontakt.html
  const contactForm = document.getElementById("myForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("jmeno-prijmeni")?.value;
      const email = contactForm.querySelector('input[name="Email"]')?.value;
      const phone = contactForm.querySelector('input[name="Telefon"]')?.value;
      const dotaz = document.getElementById("dotaz")?.value;
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a9633fac-5576-428c-a534-1bd779586890",
          name,
          email,
          phone,
          dotaz,
          subject: "Nový kontakt z formuláře",
          message: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\nDotaz: ${dotaz}`
        })
      })
        .then(res => res.json())
        .then(data => {
          const msg = document.getElementById("successMessage");
          if (data.success) {
            if (msg) msg.style.display = "block";
            contactForm.reset();
            setTimeout(() => { if (msg) msg.style.display = "none"; }, 2000);
          } else {
            alert("Nastala chyba při odesílání dotazu.");
          }
        })
        .catch(() => alert("Nastala chyba při odesílání dotazu (fetch error)."));
    });
  }
});


function createThumbnail(src, productId) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("thumbnail");
  img.addEventListener("click", () => changeImage(src, productId));
  return img;
}

function renderThumbnails(productId) {
  const wrapper = document.getElementById(`thumbnailWrapper-${productId}`);
  const images = productImages[productId];
  if (!wrapper || !images) return;

  wrapper.innerHTML = "";
  for (let i = 0; i < visibleCount; i++) {
    const idx = (currentIndex[productId] + i) % images.length;
    wrapper.appendChild(createThumbnail(images[idx], productId));
  }
}

function moveThumbnail(productId, offset) {
  const length = productImages[productId]?.length;
  if (!length) return;
  currentIndex[productId] = (currentIndex[productId] + offset + length) % length;
  renderThumbnails(productId);
}

function nextThumbnail(productId) {
  moveThumbnail(productId, 1);
}

function prevThumbnail(productId) {
  moveThumbnail(productId, -1);
}

function changeImage(newSrc, productId) {
  const img = document.getElementById(`mainImage-${productId}`);
  const link = document.getElementById(`mainImageLink-${productId}`);
  if (img) img.src = newSrc;
  if (link) link.href = newSrc;
}

function openNavbar() {
  const nav = document.getElementById("sideNavbar");
  if (nav) nav.style.width = window.innerWidth < 754 ? "100%" : "55%";
}

function closeNavbar() {
  const nav = document.getElementById("sideNavbar");
  if (nav) nav.style.width = "0";
}

function switchLanguage(language) {
  localStorage.setItem("language", language);
  applyLanguage(language);
}

function applyLanguage(language) {
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop();
  if ((language === "cz" && !pageName.includes("EN")) || (language === "en" && pageName.includes("EN"))) {
    location.reload();
    return;
  }

  const target = language === "cz"
    ? pageName.replace("EN", "")
    : pageName.replace(".html", "EN.html");

  location.href = target;
}

const variantData = {
  STATIC: { desc: "maketa Supermarine Spitfire Mk.IX. je určena zejména k marketingovým účelům jako poutač před budovou, popřípadě zavěšena u stropu haly. Marking letounu lze na přání změnit, včetně úpravy do všech kamuflážních verzí dle daného místa bojového nasazení a časového období.", price: "Cena bez DPH: 1 710 000 Kč" },
  MOVIE: { desc: "maketa Supermarine Spitfire Mk.IX Verze MOVIE umožňuje návštěvníkům bezprostřední kontakt s letadlem. Usednutí do kokpitu, manipulaci s ovladači a odezvou do řídících ploch, doplněné zvukovými a kouřovými efekty. Součástí dodávky je i replika uniformy RAF pro případné pořízení památečních fotografií návštevníků v dobové uniformě. Ideální pro potřeby filmu a natáčení reklamních spotů!", price: "Cena bez DPH: 2 110 000 Kč" },
  PANORAMA: { desc: "maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je interaktivní exponát, kde po vhození mince či bankovky návštěvníkem do makety připojeného startovacího vozíku, začne letoun z reproduktorů umístěných v chladičích vydávat zvuky leteckého poplachu, startujícího motoru doprovázeného kouřem z výfuků a roztočením vrtule na 500 ot. /min. Chytrá volba pro moderní muzea a soukromé sběratele!", price: "Cena bez DPH: 2 510 000 Kč" }
}

document.addEventListener("DOMContentLoaded", () => {
  const variantSelect = document.getElementById("variantSelect")
  const variantDescription = document.getElementById("variantDescription")
  const variantPrice = document.getElementById("variantPrice")
  const updateVariant = () => {
    const { desc, price } = variantData[variantSelect.value]
    variantDescription.textContent = desc
    variantPrice.textContent = price
  }
  variantSelect.addEventListener("change", updateVariant)
  updateVariant()
})

document.addEventListener('DOMContentLoaded', () => {
  // 1) Reposition <select> based on window width
  document.querySelectorAll('.popis-produktu').forEach(desc => {
    const select = desc.querySelector('select');
    const priceEl = desc.querySelector('p.zakladni-cena');
    const header = desc.querySelector('h2');

    function reposition() {
      if (window.innerWidth < 980) {
        // mobil: za cenu
        desc.insertBefore(select, priceEl.nextSibling);
      } else {
        // desktop: těsně za nadpis
        desc.insertBefore(select, header.nextSibling);
      }
    }

    window.addEventListener('resize', reposition);
    reposition();
  });

  document.querySelectorAll('.popis-produktu').forEach(product => {
    const bigEl = product.querySelector('p.zakladni-cena big');
    if (!bigEl) return;
    const basePrice = parseInt(bigEl.textContent.replace(/\D/g, ''), 10);
    const select = product.querySelector('select');
    if (!select) return;

    const formatter = new Intl.NumberFormat('cs-CZ');

    function updatePrice() {
      const extra = parseInt(select.value, 10) || 0;
      const total = basePrice + extra;
      const formatted = formatter.format(total);
      bigEl.textContent = `Cena bez DPH: ${formatted} Kč`;
    }

    select.addEventListener('change', updatePrice);
    updatePrice();
  });
});

function confirmOrderSuccess(form, overlayId = "emailOverlay", messageId = "successMessage") {
  const overlay = document.getElementById(overlayId);
  const msg = document.getElementById(messageId);
  if (overlay) overlay.style.display = "none";
  if (msg) msg.style.display = "block";
  if (form) form.reset();
  setTimeout(() => {
    if (msg) msg.style.display = "none";
  }, 2000);
}
