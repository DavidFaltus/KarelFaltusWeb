window.addEventListener("DOMContentLoaded", () => {
  Object.keys(productImages).forEach(productId => {
    currentIndex[productId] = 0;
    renderThumbnails(productId);
  });
  const buttons = document.querySelectorAll(".produkt-btn");
  const detailniPopisy = document.querySelectorAll(".detailni-popis");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const detail = detailniPopisy[index];
      if (detail.classList.contains("hidden")) {
        detail.classList.remove("hidden");
        button.textContent = "Méně";
      } else {
        detail.classList.add("hidden");
        button.textContent = "Více";
      }
    });
  });
  document.querySelectorAll(".objednani").forEach(button => {
    button.addEventListener("click", () => {
      selectedProduct = button.getAttribute("data-product");
      document.getElementById("emailOverlay").style.display = "block";
    });
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("emailOverlay").style.display = "none";
  });
  document.getElementById("emailForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("adress").value;
    const notes = document.getElementById("text").value;
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
        subject: "Nová objednávka pro produkt " + selectedProduct,
        message: `
          Jméno: ${name}
          Email: ${email}
          Telefon: ${phone}
          Adresa: ${address}
          Poznámky: ${notes}
          Produkt: ${selectedProduct}
        `
      })
    })
    .then(r => r.json())
    .then(data => {
      if (data.success) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("emailForm").reset();
        setTimeout(() => {
          document.getElementById("emailOverlay").style.display = "none";
          document.getElementById("successMessage").style.display = "none";
        }, 2000);
      } else {
        alert("Nastala chyba při odesílání emailu.");
      }
    })
    .catch(error => {
      console.error("Chyba:", error);
      alert("Nastala chyba při odesílání emailu.");
    });
  });
});

function openNavbar() {
  if (window.innerWidth < 754) {
    document.getElementById("sideNavbar").style.width = "100%";
  } else {
    document.getElementById("sideNavbar").style.width = "55%";
  }
}

function closeNavbar() {
  document.getElementById("sideNavbar").style.width = "0";
}

function switchLanguage(language) {
  localStorage.setItem("language", language);
  applyLanguage(language);
}

function applyLanguage(language) {
  const currentPath = window.location.pathname;
  let pageName = currentPath.split("/").pop();
  if ((language === "cz" && !pageName.includes("EN")) || (language === "en" && pageName.includes("EN"))) {
    window.location.reload();
    return;
  }
  if (language === "cz") {
    const czPage = pageName.replace("EN", "");
    window.location.href = czPage;
  } else if (language === "en") {
    const enPage = pageName.replace(".html", "EN.html");
    window.location.href = enPage;
  }
}

function changeImage(newSrc, productId) {
  const mainImage = document.getElementById(`mainImage-${productId}`);
  const mainLink = document.getElementById(`mainImageLink-${productId}`);
  if (mainImage) mainImage.src = newSrc;
  if (mainLink) mainLink.href = newSrc;
}

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
    "foto/fotkyweb/vrtule/RESIZED/8.jpg"
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

let currentIndex = {
  product1: 0,
  product2: 0,
  product3: 0,
  product4: 0
};

const visibleCount = 7;

function createThumbnail(src, productId) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("thumbnail");
  img.addEventListener("click", () => {
    changeImage(src, productId);
  });
  return img;
}

function renderThumbnails(productId) {
  const wrapper = document.getElementById(`thumbnailWrapper-${productId}`);
  const images = productImages[productId];
  wrapper.innerHTML = "";
  let start = currentIndex[productId];
  for (let i = 0; i < visibleCount; i++) {
    let idx = (start + i) % images.length;
    if (idx < 0) idx = images.length + idx;
    wrapper.appendChild(createThumbnail(images[idx], productId));
  }
}

function moveThumbnail(productId, offset) {
  const length = productImages[productId].length;
  currentIndex[productId] = (currentIndex[productId] + offset + length) % length;
  renderThumbnails(productId);
}

function nextThumbnail(productId) {
  moveThumbnail(productId, 1);
}

function prevThumbnail(productId) {
  moveThumbnail(productId, -1);
}

let selectedProduct = "";
