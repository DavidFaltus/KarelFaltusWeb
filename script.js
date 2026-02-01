// Globální proměnné a konstanty
let selectedProduct = "";
const visibleCount = 7;

const baseProductImages = {
    product1: [
        "foto/fotkyweb/spitfire/1.jpg",
        "foto/fotkyweb/spitfire/2.jpg",
        "foto/fotkyweb/spitfire/3.jpg",
        "foto/fotkyweb/spitfire/4.jpg",
        "foto/fotkyweb/spitfire/5.jpg",
        "foto/fotkyweb/spitfire/6.jpg",
        "foto/fotkyweb/spitfire/7.jpg",
        "foto/fotkyweb/spitfire/8.jpg",
        "foto/fotkyweb/spitfire/9.jpg",
        "foto/fotkyweb/spitfire/10.jpg",
        "foto/fotkyweb/spitfire/11.jpg",
        "foto/fotkyweb/spitfire/12.jpg",
        "foto/fotkyweb/spitfire/13.jpg",
        "foto/fotkyweb/spitfire/14.jpg",
        "foto/fotkyweb/spitfire/15.jpg",
        "foto/fotkyweb/spitfire/16.jpg"
    ],
    product2: [
        "foto/fotkyweb/vrtule/1.jpg",
        "foto/fotkyweb/vrtule/2.jpg",
        "foto/fotkyweb/vrtule/3.jpg",
        "foto/fotkyweb/vrtule/4.jpg",
        "foto/fotkyweb/vrtule/5.jpg",
        "foto/fotkyweb/vrtule/6.jpg",
        "foto/fotkyweb/vrtule/7.jpg",
        "foto/fotkyweb/vrtule/8.jpg",
        "foto/fotkyweb/vrtule/9.jpg",
        "foto/fotkyweb/vrtule/10.jpg"
    ],
    product3: [
        "foto/fotkyweb/albatros/1.jpg",
        "foto/fotkyweb/albatros/2.jpg",
        "foto/fotkyweb/albatros/3.jpg",
        "foto/fotkyweb/albatros/4.jpg",
        "foto/fotkyweb/albatros/5.jpg",
        "foto/fotkyweb/albatros/6.jpg",
        "foto/fotkyweb/albatros/7.jpg",
        "foto/fotkyweb/albatros/8.jpg",
        "foto/fotkyweb/albatros/9.jpg",
        "foto/fotkyweb/albatros/10.jpg",
        "foto/fotkyweb/albatros/11.jpg",
        "foto/fotkyweb/albatros/12.jpg",
        "foto/fotkyweb/albatros/13.jpg",
        "foto/fotkyweb/albatros/14.jpg",
        "foto/fotkyweb/albatros/15.jpg"
    ],
    product4: [
        "foto/fotkyweb/světlo vrtule (stojan)/1.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/2.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/3.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/4.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/5.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/6.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/7.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/8.jpg"
    ]
};

let productImages = { ...baseProductImages };

// Konfigurace obrázků pro jednotlivé varianty
const variantImages = {
    product1: { // Spitfire
        "STATIC": [
            "foto/fotkyweb/spitfire/1.jpg",
            "foto/fotkyweb/spitfire/2.jpg",
            "foto/fotkyweb/spitfire/3.jpg",
            "foto/fotkyweb/spitfire/4.jpg",
            "foto/fotkyweb/spitfire/5.jpg",
            "foto/fotkyweb/spitfire/6.jpg",
            "foto/fotkyweb/spitfire/7.jpg",
            "foto/fotkyweb/spitfire/8.jpg",
            "foto/fotkyweb/spitfire/9.jpg",
            "foto/fotkyweb/spitfire/10.jpg",
            "foto/fotkyweb/spitfire/11.jpg",
            "foto/fotkyweb/spitfire/12.jpg",
            "foto/fotkyweb/spitfire/13.jpg",
            "foto/fotkyweb/spitfire/16.jpg"
        ],
        "MOVIE": [
            "foto/fotkyweb/spitfire/16.jpg",
            "foto/fotkyweb/spitfire/2.jpg",
            "foto/fotkyweb/spitfire/3.jpg",
            "foto/fotkyweb/spitfire/4.jpg",
            "foto/fotkyweb/spitfire/5.jpg",
            "foto/fotkyweb/spitfire/6.jpg",
            "foto/fotkyweb/spitfire/7.jpg",
            "foto/fotkyweb/spitfire/8.jpg",
            "foto/fotkyweb/spitfire/9.jpg",
            "foto/fotkyweb/spitfire/10.jpg",
            "foto/fotkyweb/spitfire/11.jpg",
            "foto/fotkyweb/spitfire/12.jpg",
            "foto/fotkyweb/spitfire/13.jpg",
            "foto/fotkyweb/spitfire/1.jpg"
        ],
        "PANORAMA": [
            "foto/fotkyweb/spitfire/14.jpg",
            "foto/fotkyweb/spitfire/2.jpg",
            "foto/fotkyweb/spitfire/3.jpg",
            "foto/fotkyweb/spitfire/4.jpg",
            "foto/fotkyweb/spitfire/5.jpg",
            "foto/fotkyweb/spitfire/6.jpg",
            "foto/fotkyweb/spitfire/7.jpg",
            "foto/fotkyweb/spitfire/8.jpg",
            "foto/fotkyweb/spitfire/9.jpg",
            "foto/fotkyweb/spitfire/10.jpg",
            "foto/fotkyweb/spitfire/11.jpg",
            "foto/fotkyweb/spitfire/12.jpg",
            "foto/fotkyweb/spitfire/13.jpg",
            "foto/fotkyweb/spitfire/1.jpg",
            "foto/fotkyweb/spitfire/15.jpg",
            "foto/fotkyweb/spitfire/16.jpg",
            "foto/fotkyweb/spitfire/14.jpg",
            "foto/fotkyweb/spitfire/18.mp4",
            "foto/fotkyweb/spitfire/IMG_7386.mp4"
        ]
    },
    product2: { // Vrtule
        "BEZ_PODSVICENI": [
            "foto/fotkyweb/vrtule/1.jpg",
            "foto/fotkyweb/vrtule/2.jpg",
            "foto/fotkyweb/vrtule/3.jpg",
            "foto/fotkyweb/vrtule/4.jpg",
            "foto/fotkyweb/vrtule/5.jpg",
            "foto/fotkyweb/vrtule/10.jpg",
            "foto/fotkyweb/vrtule/13.jpg",
            "foto/fotkyweb/vrtule/14.jpg"
        ],
        "SE_STOJANEM": [
            "foto/fotkyweb/vrtule/11.jpg",
            "foto/fotkyweb/vrtule/2.jpg",
            "foto/fotkyweb/vrtule/3.jpg",
            "foto/fotkyweb/vrtule/4.jpg",
            "foto/fotkyweb/vrtule/5.jpg",
            "foto/fotkyweb/vrtule/10.jpg",
            "foto/fotkyweb/vrtule/13.jpg",
            "foto/fotkyweb/vrtule/14.jpg"
        ],
        "S_UCHYCENIM_NA_ZED": [
            "foto/fotkyweb/vrtule/2.jpg",
            "foto/fotkyweb/vrtule/1.jpg",
            "foto/fotkyweb/vrtule/3.jpg",
            "foto/fotkyweb/vrtule/4.jpg",
            "foto/fotkyweb/vrtule/5.jpg",
            "foto/fotkyweb/vrtule/6.jpg",
            "foto/fotkyweb/vrtule/10.jpg",
            "foto/fotkyweb/vrtule/13.jpg",
            "foto/fotkyweb/vrtule/14.jpg",
            "foto/fotkyweb/vrtule/15.jpg"
        ],
        "S_UCHYCENIM_NA_ZED_A_PODSVICENI": [
            "foto/fotkyweb/vrtule/9.jpg",
            "foto/fotkyweb/vrtule/2.jpg",
            "foto/fotkyweb/vrtule/3.jpg",
            "foto/fotkyweb/vrtule/4.jpg",
            "foto/fotkyweb/vrtule/5.jpg",
            "foto/fotkyweb/vrtule/6.jpg",
            "foto/fotkyweb/vrtule/7.jpg",
            "foto/fotkyweb/vrtule/8.jpg",
            "foto/fotkyweb/vrtule/1.jpg",
            "foto/fotkyweb/vrtule/10.jpg",
            "foto/fotkyweb/vrtule/13.jpg",
            "foto/fotkyweb/vrtule/14.jpg"
        ]
    },
    product4: { // Vrtulový list
        "BEZ_PODSVICENI": [
            "foto/fotkyweb/světlo vrtule (stojan)/1.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/3.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/4.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/6.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/7.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/8.jpg"
        ],
        "S_PODSVICENIM": [
            "foto/fotkyweb/světlo vrtule (stojan)/9.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/1.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/2.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/3.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/4.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/5.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/6.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/7.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/8.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/10.jpg"


        ]
    }
};

const currentIndex = { product1: 0, product2: 0, product3: 0, product4: 0 };
const variantData = {
    STATIC: { desc: "Maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je určena zejména k marketingovým účelům jako poutač před budovou, popřípadě zavěšena u stropu haly. Kamufláž letounu lze na přání změnit, včetně úpravy do všech kamuflážních verzí dle daného místa bojového nasazení a časového období.", price: "Základní cena: 2 070 000 Kč" },
    MOVIE: { desc: "Maketa Supermarine Spitfire Mk.IX v měřítku 1:1 umožňuje návštěvníkům bezprostřední kontakt s letadlem. Usednutí do kokpitu, manipulaci s ovladači a odezvou do řídících ploch. Ideální pro potřeby filmu a natáčení reklamních spotů!", price: "Základní cena: 2 560 000 Kč" },
    PANORAMA: { desc: "Maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je interaktivní exponát. Letoun z reproduktorů umístěných v chladičích může vydávat zvuky leteckého poplachu nebo i startujícího motoru což je doprovázeno kouřem z výfuků a roztočením vrtule na 500 ot. /min. Letoun disponuje i osvětlením kokpitu a pozičních světel. Chytrá volba pro moderní muzea a soukromé sběratele!", price: "Základní cena: 3 040 000 Kč" }
};

const variantDataVrtule = {
    BEZ_PODSVICENI: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze skkolaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku.", price: "92 000 Kč" },
    SE_STOJANEM: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze skkolaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku. Součástí je i stojan z dřevényho masivu, díky kterému můžete vrtuli umístit kamkoliv jen budete chtít.", price: "98 000 Kč" },
    S_UCHYCENIM_NA_ZED: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklokaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku. Součástí této konfiguace je i speciální přípravek pro uchycení na zeď.", price: "98 000 Kč" },
    S_UCHYCENIM_NA_ZED_A_PODSVICENI: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklokaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku. Jednotlivé listy jsou osvětleny LED pásky, které jsou vždy umístěny na zadní straně jednotlivých listů. Všechna světla můžete ovládat pomocí dálkového ovladače, který je součástí balení. Součástí této konfiguace je i speciální přípravek pro uchycení na zeď.", price: "104 000 Kč" }
};

const variantDataVrtulovyList = {
    BEZ_PODSVICENI: { desc: "Maketa vrtulobého listu v originálním měřítku s unašečem, veškerými popisky a pojízdným podstavcem na kterém jsou zobrazeny některé ze známých symbolů, které se vyskytovali i na původních letadlech.", price: "23 000 Kč" },
    S_PODSVICENIM: { desc: "Maketa vrtulobého listu v originálním měřítku s unašečem, veškerými popisky a pojízdným podstavcem na kterém jsou zobrazeny některé ze známých symbolů, které se vyskytovali i na původních letadlech. Součástí je i LED podsvícení, které je připevněné k listu v jeho zadní části. Ovládá se pomocí ovladače, který je součástí balení.", price: "31 000 Kč" }
};

// English Translations
const variantDataEn = {
    STATIC: { desc: "Full-size model of Supermarine Spitfire Mk.IX is intended mainly for marketing purposes as an eye-catcher in front of a building, or suspended from a hall ceiling. The aircraft markings can be changed on request, including modification to all camouflage versions according to the given place of combat deployment and time period.", price: "Base price: 85 700 Euro" },
    MOVIE: { desc: "Full-size model of Supermarine Spitfire Mk.IX allows visitors immediate contact with the aircraft. Sitting in the cockpit, manipulating controls with response to control surfaces. Ideal for film needs and shooting commercials!", price: "Base price: 106 000 Euro" },
    PANORAMA: { desc: "Full-size model of Supermarine Spitfire Mk.IX in 1:1 scale is an interactive exhibit. The aircraft can emit air raid or starting engine sounds from speakers in radiators, accompanied by smoke from exhausts and propeller spinning at 500 rpm. The aircraft also features cockpit lighting and position lights. A smart choice for modern museums and private collectors!", price: "Base price: 125 900 Euro" }
};

const variantDataVrtuleEn = {
    BEZ_PODSVICENI: { desc: "The propeller replica is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail.", price: "3 850 Euro" },
    SE_STOJANEM: { desc: "The propeller replica is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail. Includes a solid wood stand, allowing you to place the propeller anywhere you want.", price: "4 100 Euro" },
    S_UCHYCENIM_NA_ZED: { desc: "The propeller replica is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail. This configuration includes a special wall mount fixture.", price: "4 100 Euro" },
    S_UCHYCENIM_NA_ZED_A_PODSVICENI: { desc: "The propeller replica is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail. Individual blades are illuminated by LED strips placed on the back of each blade. All lights can be controlled via the included remote control. This configuration includes a special wall mount fixture.", price: "4 300 Euro" }
};

const variantDataVrtulovyListEn = {
    BEZ_PODSVICENI: { desc: "Propeller blade replica in original scale with spinner, all markings, and a movable base featuring some of the famous symbols found on original aircraft.", price: "950 Euro" },
    S_PODSVICENIM: { desc: "Propeller blade replica in original scale with spinner, all markings, and a movable base featuring some of the famous symbols found on original aircraft. Includes LED backlighting attached to the rear of the blade. Controlled via the included remote.", price: "1 300 Euro" }
};

// Obecná funkce pro aktualizaci varianty produktu
function updateProductVariant(productId, dataSource, selectId, descId, priceId) {
    const select = document.getElementById(selectId);
    const desc = document.getElementById(descId);
    const price = document.getElementById(priceId);

    if (!select || !desc || !price) return;

    const selectedVariant = select.value;
    const data = dataSource[selectedVariant];

    // Aktualizace textů
    desc.textContent = data ? data.desc : "";
    price.textContent = data ? data.price : "";

    // Aktualizace obrázků podle varianty
    if (variantImages[productId] && variantImages[productId][selectedVariant] && variantImages[productId][selectedVariant].length > 0) {
        productImages[productId] = variantImages[productId][selectedVariant];
    } else {
        productImages[productId] = baseProductImages[productId];
    }

    // Aktualizace skryté galerie pro Lightbox
    if (typeof setupLightboxGallery === 'function') {
        setupLightboxGallery(productId, productImages[productId]);
    }

    currentIndex[productId] = 0;
    renderThumbnails(productId);
    // Zkontrolujeme, zda pole obrázků není prázdné před voláním changeImage
    if (productImages[productId] && productImages[productId].length > 0) {
        let imgSrc = productImages[productId][0];
        // Fix for EN pages path
        if (window.location.pathname.includes('/EN/') && !imgSrc.startsWith('../') && !imgSrc.startsWith('http') && !imgSrc.startsWith('/')) {
            imgSrc = '../' + imgSrc;
        }
        changeImage(imgSrc, productId);
    }
}

// Původní logika pro Spitfire přesunuta do DOMContentLoaded a sjednocena pod updateProductVariant


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
        let imgSrc = images[idx];
        // Fix for EN pages path
        if (window.location.pathname.includes('/EN/') && !imgSrc.startsWith('../') && !imgSrc.startsWith('http') && !imgSrc.startsWith('/')) {
            imgSrc = '../' + imgSrc;
        }
        wrapper.appendChild(createThumbnail(imgSrc, productId));
    }
}

function moveThumbnail(productId, offset) {
    const length = productImages[productId]?.length;
    if (!length) return;
    currentIndex[productId] = (currentIndex[productId] + offset + length) % length;
    renderThumbnails(productId);
}

function nextThumbnail(productId) { moveThumbnail(productId, 1); }
function prevThumbnail(productId) { moveThumbnail(productId, -1); }

function changeImage(newSrc, productId) {
    const img = document.getElementById(`mainImage-${productId}`);
    const link = document.getElementById(`mainImageLink-${productId}`);
    if (img) {
        img.src = newSrc;
    }
    if (link) {
        link.href = newSrc;
    }
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
    let pageName = currentPath.split("/").pop();
    if (pageName === "") pageName = "index.html";

    const isCurrentlyEn = pageName.includes("EN");

    if (language === "en" && !isCurrentlyEn) {
        const newFileName = pageName.replace(".html", "EN.html");
        location.href = "EN/" + newFileName;
    }
    else if (language === "cz" && isCurrentlyEn) {
        const newFileName = pageName.replace("EN.html", ".html");
        location.href = "../" + newFileName;
    }
}

function confirmOrderSuccess(form, overlayId = "emailOverlay", messageId = "successMessage") {
    const overlay = document.getElementById(overlayId);
    const msg = document.getElementById(messageId);
    if (overlay) overlay.style.display = "none";
    if (msg) msg.style.display = "flex";
    if (form) form.reset();
    setTimeout(() => { if (msg) msg.style.display = "none"; }, 10000);
}

function updateYear() {
    const yearSpan = document.getElementById("yearSpan");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

document.addEventListener("DOMContentLoaded", updateYear);
updateYear();

// --- HLAVNÍ SPUŠTĚCÍ BLOK PO NAČTENÍ STRÁNKY ---
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("successMessage");
    const closeBtn = document.getElementById("closeSuccessBtn");

    function closeModal() {
        if (modal) {
            modal.style.display = "none";
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.endsWith('nabidka.html')) {
        const productImageLinks = [
            { imgId: 'mainImage-product1', url: 'spitfire.html' },
            { imgId: 'mainImage-product2', url: 'vrtule.html' },
            { imgId: 'mainImage-product3', url: 'albatros.html' },
            { imgId: 'mainImage-product4', url: 'vrtulovyList.html' }
        ];
        productImageLinks.forEach(({ imgId, url }) => {
            const img = document.getElementById(imgId);
            if (img) {
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => { window.location.href = url; });
            }
        });
    }

    Object.keys(productImages).forEach(productId => {
        currentIndex[productId] = 0;
        renderThumbnails(productId);
    });

    // 3. Formuláře (objednávky a kontakt)
    document.querySelectorAll(".objednani").forEach(button => {
        button.addEventListener("click", () => {
            selectedProduct = button.dataset.product;
            const overlay = document.getElementById("emailOverlay");
            if (overlay) overlay.style.display = "block";
        });
    });

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            const overlay = document.getElementById("emailOverlay");
            if (overlay) overlay.style.display = "none";
        });
    }

    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.addEventListener("submit", event => {
            event.preventDefault();
            const name = document.getElementById("name")?.value;
            const email = document.getElementById("email")?.value;
            const phone = document.getElementById("phone")?.value;
            const address = document.getElementById("adress")?.value;
            const notes = document.getElementById("text")?.value;
            let podsviceniVrtulovyListText = "";
            if (selectedProduct === "VrtulovyList") {
                const podstavaEl = document.querySelector(".podstava");
                if (podstavaEl) podsviceniVrtulovyListText = `Zvolená podstava: ${podstavaEl.options[podstavaEl.selectedIndex].text}`;
            }
            let spitfireText = "";
            if (selectedProduct === "Spitfire") {
                const variantEl = document.getElementById("variantSelect");
                if (variantEl) spitfireText = `Zvolená verze: ${variantEl.options[variantEl.selectedIndex].text}`;
            }
            let podsviceniVrtule = "";
            if (selectedProduct === "Vrtule") {
                const podstavaEl = document.querySelector(".podstava");
                if (podstavaEl) podsviceniVrtule = `Zvolená verze: ${podstavaEl.options[podstavaEl.selectedIndex].text}`;
            }
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "efccdcd4-c9cc-48e0-8628-8f0e111b6dae", name, email, phone, address, notes,
                    subject: `Nová objednávka pro produkt ${selectedProduct}`,
                    message: `\nJméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\nAdresa: ${address}\nPoznámky: ${notes}\nProdukt: ${selectedProduct}\n${podsviceniVrtulovyListText}\n${spitfireText}\n${podsviceniVrtule}`
                })
            }).then(res => res.json()).then(data => {
                if (data.success) confirmOrderSuccess(emailForm);
                else alert("Nastala chyba při odesílání emailu.");
            }).catch(() => alert("Nastala chyba při odesílání emailu."));
        });
    }

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
                    access_key: "efccdcd4-c9cc-48e0-8628-8f0e111b6dae", name, email, phone, dotaz,
                    subject: "Nový kontakt z formuláře",
                    message: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\nDotaz: ${dotaz}`
                })
            }).then(res => res.json()).then(data => {
                const msg = document.getElementById("successMessage");
                if (data.success) {
                    if (msg) msg.style.display = "flex";
                    contactForm.reset();
                    setTimeout(() => { if (msg) msg.style.display = "none"; }, 10000);
                } else {
                    alert("Nastala chyba při odesílání dotazu.");
                }
            }).catch(() => alert("Nastala chyba při odesílání dotazu."));
        });
    }

    // 4. Logika pro jednotlivé produktové stránky
    // 4. Logika pro jednotlivé produktové stránky
    const setupVariantHandler = (productId, data, selectId, descId, priceId) => {
        const select = document.getElementById(selectId);
        if (select) {
            const handler = () => updateProductVariant(productId, data, selectId, descId, priceId);
            select.addEventListener("change", handler);
            handler(); // Inicializace
        }
    };

    const isEn = window.location.pathname.includes('/EN/');

    if (document.getElementById("vrtuleVariantSelect")) {
        const data = isEn ? variantDataVrtuleEn : variantDataVrtule;
        setupVariantHandler('product2', data, 'vrtuleVariantSelect', 'vrtuleVariantDescription', 'vrtuleVariantPrice');
    }

    if (document.getElementById("variantSelect")) {
        const bodyHtml = document.body.innerHTML;
        if (bodyHtml.includes('Supermarine Spitfire Mk.IX') || bodyHtml.includes('Supermarine Spitfire Mk.IX')) {
            const data = isEn ? variantDataEn : variantData;
            setupVariantHandler('product1', data, 'variantSelect', 'variantDescription', 'variantPrice');
        } else if (bodyHtml.includes('Vrtulový list letadla Spitfire') || bodyHtml.includes('Propeller Blade Spitfire')) {
            const data = isEn ? variantDataVrtulovyListEn : variantDataVrtulovyList;
            setupVariantHandler('product4', data, 'variantSelect', 'variantDescription', 'variantPrice');
        }
    }

    // 5. Repozicování selectu a přepočet ceny


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
            bigEl.textContent = `Cena bez DPH: ${formatter.format(total)} Kč`;
        }
        select.addEventListener('change', updatePrice);
        updatePrice();
    });
});

// --- LIGHTBOX A GALERIE ---

/**
 * Vytvoří nebo aktualizuje skrytou galerii odkazů pro Lightbox.
 */
function setupLightboxGallery(groupId, images) {
    let galleryContainer = document.getElementById(`lightbox-gallery-${groupId}`);
    if (!galleryContainer) {
        galleryContainer = document.createElement('div');
        galleryContainer.id = `lightbox-gallery-${groupId}`;
        galleryContainer.style.display = 'none';
        document.body.appendChild(galleryContainer);
    }

    galleryContainer.innerHTML = ''; // Vyčistit staré odkazy

    images.forEach((src, index) => {
        const link = document.createElement('a');

        // Fix cesty pro EN verze
        let finalSrc = src;
        if (window.location.pathname.includes('/EN/') && !src.startsWith('../') && !src.startsWith('http') && !src.startsWith('/')) {
            finalSrc = '../' + src;
        }

        link.href = finalSrc;
        link.setAttribute('data-lightbox', groupId);
        link.setAttribute('data-title', '');
        link.setAttribute('data-index', index);
        galleryContainer.appendChild(link);
    });
}

/**
 * Otevře Lightbox na konkrétním obrázku ze skryté galerie.
 */
function openLightboxGallery(groupId, index) {
    const galleryContainer = document.getElementById(`lightbox-gallery-${groupId}`);
    if (galleryContainer) {
        const links = galleryContainer.querySelectorAll('a');
        if (index >= 0 && index < links.length) {
            links[index].click();
        }
    }
}

// Inicializace galerií produktů
function initProductGalleries() {
    Object.keys(productImages).forEach(productId => {
        setupLightboxGallery(productId, productImages[productId]);
    });
}

// Inicializace galerií zkušeností
function initExperienceGalleries() {
    Object.keys(experienceImages).forEach(expId => {
        setupLightboxGallery(expId, experienceImages[expId]);
    });
}

// --- GALERIE ZKUŠENOSTÍ DATOVÁ STRUKTURA ---
const experienceImages = {
    spitfire: [
        "foto/maketa spitfire/1.jpg",
        "foto/maketa spitfire/2.JPG",
        "foto/maketa spitfire/3.JPG"
    ],
    baron: [
        "foto/rudy baron/1.jpg",
        "foto/rudy baron/2.JPG",
        "foto/rudy baron/3.JPG"
    ],
    eagle: [
        "foto/eagle/1.jpg",
        "foto/eagle/2.jpg"
    ],

    lambada: [
        "foto/lambada a samba/1.jpg",
        "foto/lambada a samba/2.jpg",
        "foto/lambada a samba/3.jpg",
        "foto/lambada a samba/4.jpg",
        "foto/lambada a samba/5.jpg"
    ],

    phoenix: [
        "foto/phoenix/1.jpg",
        "foto/phoenix/2.JPG"
    ],

    lyze: [
        "foto/lyze/1.jpg",
        "foto/lyze/2.JPG",
        "foto/lyze/3.jpg"
    ],

    motyl: [
        "foto/motyl/1.jpg",
        "foto/motyl/2.jpg",
        "foto/motyl/3.jpg"
    ]
};

// Store current indices for experience carousels
const expCurrentIndex = { spitfire: 0, baron: 0, eagle: 0, lambada: 0, phoenix: 0, lyze: 0, motyl: 0 };

function changeExpImage(expId, offset) {
    if (!experienceImages[expId]) return;

    const count = experienceImages[expId].length;
    expCurrentIndex[expId] = (expCurrentIndex[expId] + offset + count) % count;

    let newSrc = experienceImages[expId][expCurrentIndex[expId]];

    // Fix pro EN
    if (window.location.pathname.includes('/EN/') && !newSrc.startsWith('../') && !newSrc.startsWith('http')) {
        newSrc = '../' + newSrc;
    }

    const imgElement = document.getElementById(`img-${expId}`);
    const linkElement = document.getElementById(`link-${expId}`);

    if (imgElement) {
        // Simple fade effect
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.src = newSrc;
            imgElement.style.opacity = 1;
        }, 200);
    }

    if (linkElement) {
        linkElement.href = newSrc;
    }
}

// --- HLAVNÍ INITIALIZACE GALERIÍ PO NAČTENÍ DOM ---
document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializace skrytých galerií
    initProductGalleries();
    initExperienceGalleries();

    // 2. Navázání kliknutí na hlavní obrázky produktů (přesměrování na Lightbox)
    Object.keys(productImages).forEach(productId => {
        const mainLink = document.getElementById(`mainImageLink-${productId}`);
        if (mainLink) {
            mainLink.removeAttribute('data-lightbox'); // Stop native single open

            mainLink.addEventListener('click', (e) => {
                e.preventDefault();
                const imgElement = document.getElementById(`mainImage-${productId}`);
                if (!imgElement) return;

                const currentImgSrc = imgElement.getAttribute('src');
                let foundIndex = -1;
                const images = productImages[productId];

                // Hledáme index aktuálního obrázku
                for (let i = 0; i < images.length; i++) {
                    if (decodeURIComponent(currentImgSrc).endsWith(images[i])) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex === -1) foundIndex = 0;

                openLightboxGallery(productId, foundIndex);
            });
        }
    });

    // 3. Navázání kliknutí na obrázky zkušeností
    Object.keys(experienceImages).forEach(expId => {
        const link = document.getElementById(`link-${expId}`);
        if (link) {
            link.removeAttribute('data-lightbox'); // Stop native single open
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const currentIndex = expCurrentIndex[expId];
                openLightboxGallery(expId, currentIndex);
            });
        }
    });
});
