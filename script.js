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

  // Odeslání formuláře
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
      let podstavaText = "";
      if (selectedProduct === "VrtulovyList") {
        const podstavaEl = document.querySelector(".podstava");
        if (podstavaEl) {
          podstavaText = `Zvolená podstava: ${podstavaEl.options[podstavaEl.selectedIndex].text}`;
        }
      }

      // Vyčteme zvolenou verzi Spitfire, pokud je produkt Spitfire
      let spitfireText = "";
      if (selectedProduct === "Spitfire") {
        const variantEl = document.getElementById("variantSelect");
        if (variantEl) {
          spitfireText = `Zvolená verze: ${variantEl.options[variantEl.selectedIndex].text}`;
        }
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a9633fac-5576-428c-a534-1bd779586890", // Nahraďte vlastním klíčem, pokud se liší
          name,
          email,
          phone,
          address,
          notes,
          subject: `Nová objednávka pro produkt ${selectedProduct}`,
          message: `
            Jméno: ${name}
            Email: ${email}
            Telefon: ${phone}
            Adresa: ${address}
            Poznámky: ${notes}
            Produkt: ${selectedProduct}

            ${podstavaText}
            ${spitfireText}
          `
        })
      })
      .then(res => res.json())
      .then(data => {
        // Najdeme overlay a hlášku
        const overlay = document.getElementById("emailOverlay");
        const msg = document.getElementById("successMessage");

        if (data.success) {
          // Zavřeme overlay
          if (overlay) overlay.style.display = "none";

          // Zobrazíme hlášku o úspěchu
          if (msg) {
            msg.style.display = "block";
          }

          // Reset formuláře
          form.reset();

          // Po 2s schováme hlášku
          setTimeout(() => {
            if (msg) {
              msg.style.display = "none";
            }
          }, 2000);

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
  KIT: { desc: "maketa Supermarine Spitfire Mk.IX. ve veri kit je určena zejména k marketingovým účelům jako poutač před budovou, popřípadě zavěšena u stropu haly. Marking letounu lze na přání změnit, včetně úpravy do všech kamuflážních verzí dle daného místa bojového nasazení a časového období.", price: "Cena bez DPH: 970 000 Kč" },
  STATIC: { desc: "maketa Supermarine Spitfire Mk.IX. ve veri STATIC je určena zejména k marketingovým účelům jako poutač před budovou, popřípadě zavěšena u stropu haly. Marking letounu lze na přání změnit, včetně úpravy do všech kamuflážních verzí dle daného místa bojového nasazení a časového období.", price: "Cena bez DPH: 1 560 000 Kč" },
  MOVIE: { desc: "maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je interaktivní exponát, kde po vhození mince či bankovky návštěvníkem do makety připojeného startovacího vozíku, začne letoun z reproduktorů umístěných v chladičích vydávat zvuky leteckého poplachu, startujícího motoru doprovázeného kouřem z výfuků a roztočením vrtule na 500 ot. /min. Chytrá volba pro moderní muzea a soukromé sběratele!", price: "Cena bez DPH: 1 980 000 Kč" },
  PANORAMA: { desc: "maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je interaktivní exponát, kde po vhození mince či bankovky návštěvníkem do makety připojeného startovacího vozíku, začne letoun z reproduktorů umístěných v chladičích vydávat zvuky leteckého poplachu, startujícího motoru doprovázeného kouřem z výfuků a roztočením vrtule na 500 ot. /min. Chytrá volba pro moderní muzea a soukromé sběratele!", price: "Cena bez DPH: 2 380 000 Kč" }
}

document.addEventListener("DOMContentLoaded",()=>{
  const variantSelect = document.getElementById("variantSelect")
  const variantDescription = document.getElementById("variantDescription")
  const variantPrice = document.getElementById("variantPrice")
  const updateVariant = () => {
    const {desc, price} = variantData[variantSelect.value]
    variantDescription.textContent = desc
    variantPrice.textContent = price
  }
  variantSelect.addEventListener("change", updateVariant)
  updateVariant()
})

window.addEventListener("DOMContentLoaded",()=>{
  const s=document.getElementById("variantSelect")
  const p=document.getElementById("variantPrice")
  const n=document.querySelector(".produkt-nazev-verze")
  const c=document.querySelector(".popis-produktu")
  const r=()=>{window.innerWidth<980?c.insertBefore(s,p.nextSibling):n.appendChild(s)}
  window.addEventListener("resize",r)
  r()
 })

 document.addEventListener("DOMContentLoaded", () => {
  const zakladniCenaVrtulovyList = 18400;
  const selectPodstava = document.querySelector('.podstava');
  const cenaVrtulovyList = document.querySelector('.zakladni-cena big');

  function prepocitatCenu() {
    const hodnotaPodstavce = parseInt(selectPodstava.value, 10);
    const novaCena = zakladniCenaVrtulovyList + hodnotaPodstavce;
    cenaVrtulovyList.textContent = `Cena bez DPH: ${novaCena} Kč`;
  }

  // Při změně hodnoty v <select> přepočti cenu
  selectPodstava.addEventListener('change', prepocitatCenu);

  // Spočítej rovnou i po načtení stránky:
  prepocitatCenu();
});