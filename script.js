// Globální proměnné a konstanty
let selectedProduct = "";
const visibleCount = 7;

const baseProductImages = {
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
        "foto/fotkyweb/spitfire/RESIZED/13.jpg",
        "foto/fotkyweb/spitfire/RESIZED/14.jpg",
        "foto/fotkyweb/spitfire/RESIZED/15.jpg",
        "foto/fotkyweb/spitfire/RESIZED/16.jpg"
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
        "foto/fotkyweb/vrtule/RESIZED/9.jpg",
        "foto/fotkyweb/vrtule/RESIZED/10.jpg"
    ],
    product3: [
        "foto/fotkyweb/albatros/RESIZED/1.jpg",
        "foto/fotkyweb/albatros/RESIZED/2.jpg",
        "foto/fotkyweb/albatros/RESIZED/3.jpg",
        "foto/fotkyweb/albatros/RESIZED/4.jpg",
        "foto/fotkyweb/albatros/RESIZED/5.jpg",
        "foto/fotkyweb/albatros/RESIZED/6.jpg",
        "foto/fotkyweb/albatros/RESIZED/7.jpg",
        "foto/fotkyweb/albatros/RESIZED/8.jpg",
        "foto/fotkyweb/albatros/RESIZED/9.jpg",
        "foto/fotkyweb/albatros/RESIZED/10.jpg",
        "foto/fotkyweb/albatros/RESIZED/11.jpg",
        "foto/fotkyweb/albatros/RESIZED/12.jpg",
        "foto/fotkyweb/albatros/RESIZED/13.jpg"
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
        "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/9.jpg",
    ]
};

let productImages = { ...baseProductImages };

// Konfigurace obrázků pro jednotlivé varianty
const variantImages = {
    product1: { // Spitfire
        "STATIC": [
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
            "foto/fotkyweb/spitfire/RESIZED/13.jpg",
            "foto/fotkyweb/spitfire/RESIZED/16.jpg"
        ],
        "MOVIE": [
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
            "foto/fotkyweb/spitfire/RESIZED/13.jpg",
            "foto/fotkyweb/spitfire/RESIZED/16.jpg"
        ],
        "PANORAMA": [
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
            "foto/fotkyweb/spitfire/RESIZED/13.jpg",
            "foto/fotkyweb/spitfire/RESIZED/14.jpg",
            "foto/fotkyweb/spitfire/RESIZED/15.jpg",
            "foto/fotkyweb/spitfire/RESIZED/16.jpg"
        ]
    },
    product2: { // Vrtule
        "BEZ_PODSVICENI": [
            "foto/fotkyweb/vrtule/RESIZED/1.jpg",
            "foto/fotkyweb/vrtule/RESIZED/2.jpg",
            "foto/fotkyweb/vrtule/RESIZED/3.jpg",
            "foto/fotkyweb/vrtule/RESIZED/4.jpg",
            "foto/fotkyweb/vrtule/RESIZED/5.jpg",
            "foto/fotkyweb/vrtule/RESIZED/10.jpg",

        ],
        "SE_STOJANEM": [
            "foto/fotkyweb/vrtule/RESIZED/1.jpg",
            "foto/fotkyweb/vrtule/RESIZED/2.jpg",
            "foto/fotkyweb/vrtule/RESIZED/3.jpg",
            "foto/fotkyweb/vrtule/RESIZED/4.jpg",
            "foto/fotkyweb/vrtule/RESIZED/5.jpg",
            "foto/fotkyweb/vrtule/RESIZED/10.jpg",
        ],
        "S_UCHYCENIM_NA_ZED": [
            "foto/fotkyweb/vrtule/RESIZED/1.jpg",
            "foto/fotkyweb/vrtule/RESIZED/2.jpg",
            "foto/fotkyweb/vrtule/RESIZED/3.jpg",
            "foto/fotkyweb/vrtule/RESIZED/4.jpg",
            "foto/fotkyweb/vrtule/RESIZED/5.jpg",
            "foto/fotkyweb/vrtule/RESIZED/6.jpg",
            "foto/fotkyweb/vrtule/RESIZED/10.jpg",
        ],
        "S_UCHYCENIM_NA_ZED_A_PODSVICENI": [
            "foto/fotkyweb/vrtule/RESIZED/1.jpg",
            "foto/fotkyweb/vrtule/RESIZED/2.jpg",
            "foto/fotkyweb/vrtule/RESIZED/3.jpg",
            "foto/fotkyweb/vrtule/RESIZED/4.jpg",
            "foto/fotkyweb/vrtule/RESIZED/5.jpg",
            "foto/fotkyweb/vrtule/RESIZED/6.jpg",
            "foto/fotkyweb/vrtule/RESIZED/7.jpg",
            "foto/fotkyweb/vrtule/RESIZED/8.jpg",
            "foto/fotkyweb/vrtule/RESIZED/9.jpg",
            "foto/fotkyweb/vrtule/RESIZED/10.jpg",
        ]
    },
    product4: { // Vrtulový list
        "BEZ_PODSVICENI": [
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/5.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/6.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/7.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/9.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/1.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/3.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/4.jpg"
        ],
        "S_PODSVICENIM": [
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/5.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/6.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/7.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/8.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/9.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/1.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/2.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/3.jpg",
            "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/4.jpg"
        ]
    }
};

const currentIndex = { product1: 0, product2: 0, product3: 0, product4: 0 };

const variantData = {
    STATIC: { desc: "Maketa Supermarine Spitfire Mk.IX. je určena zejména k marketingovým účelům jako poutač před budovou, popřípadě zavěšena u stropu haly. Marking letounu lze na přání změnit, včetně úpravy do všech kamuflážních verzí dle daného místa bojového nasazení a časového období.", price: "Cena bez DPH: 1 710 000 Kč" },
    MOVIE: { desc: "Maketa Supermarine Spitfire Mk.IX umožňuje návštěvníkům bezprostřední kontakt s letadlem. Usednutí do kokpitu, manipulaci s ovladači a odezvou do řídících ploch. Ideální pro potřeby filmu a natáčení reklamních spotů!", price: "Cena bez DPH: 2 110 000 Kč" },
    PANORAMA: { desc: "Maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je interaktivní exponát. Letoun z reproduktorů umístěných v chladičích může vydávat zvuky leteckého poplachu nebo i startujícího motoru což je doprovázeno kouřem z výfuků a roztočením vrtule na 500 ot. /min. Letoun disponuje i osvětlením kokpitu a pozičních světel. Chytrá volba pro moderní muzea a soukromé sběratele!", price: "Cena bez DPH: 2 510 000 Kč" }
};

const variantDataVrtule = {
    BEZ_PODSVICENI: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku.", price: "Cena bez DPH: 76 020 Kč" },
    SE_STOJANEM: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku. Součástí je i stojan z dřevéného masivu, díky kterému můžete vrtuli umístit kamkoliv jen budete chtít.", price: "Cena bez DPH: 81 020 Kč" },
    S_UCHYCENIM_NA_ZED: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku. Součástí této konfiguace je i speciální přípravek pro uchycení na zeď.", price: "Cena bez DPH: 81 020 Kč" },
    S_UCHYCENIM_NA_ZED_A_PODSVICENI: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Jedná se o věrnou repliku v měřítku 1:1, která do posledního detailu ctí podobu originálního výrobku. Jednotlivé listy jsou osvětleny LED pásky, které jsou vždy umístěny na zadní straně jednotlivých listů. Všechna světla můžete ovládat pomocí dálkového ovladače, který je součástí balení. Součástí této konfiguace je i speciální přípravek pro uchycení na zeď.", price: "Cena bez DPH: 85 500 Kč" }
};

const variantDataVrtulovyList = {
    BEZ_PODSVICENI: { desc: "Maketa vrtulobého listu v originálním měřítku s unašečem, veškerými popisky a pojízdným podstavcem na kterém jsou zobrazeny některé ze známých symbolů, které se vyskytovali i na původních letadlech.", price: "Cena bez DPH: 18 400 Kč" },
    S_PODSVICENIM: { desc: "Maketa vrtulobého listu v originálním měřítku s unašečem, veškerými popisky a pojízdným podstavcem na kterém jsou zobrazeny některé ze známých symbolů, které se vyskytovali i na původních letadlech. Součástí je i LED podsvícení, které je připevněné k listu v jeho zadní části. Ovládá se pomocí ovladače, který je součástí balení.", price: "Cena bez DPH: 25 300 Kč" }
};

// English Translations
const variantDataEn = {
    STATIC: { desc: "Mockup Supermarine Spitfire Mk.IX is intended mainly for marketing purposes as an eye-catcher in front of a building, or suspended from a hall ceiling. The aircraft markings can be changed on request, including modification to all camouflage versions according to the given place of combat deployment and time period.", price: "Price without VAT: 1 710 000 CZK" },
    MOVIE: { desc: "Mockup Supermarine Spitfire Mk.IX allows visitors immediate contact with the aircraft. Sitting in the cockpit, manipulating controls with response to control surfaces. Ideal for film needs and shooting commercials!", price: "Price without VAT: 2 110 000 CZK" },
    PANORAMA: { desc: "Mockup Supermarine Spitfire Mk.IX in 1:1 scale is an interactive exhibit. The aircraft can emit air raid or starting engine sounds from speakers in radiators, accompanied by smoke from exhausts and propeller spinning at 500 rpm. The aircraft also features cockpit lighting and position lights. A smart choice for modern museums and private collectors!", price: "Price without VAT: 2 510 000 CZK" }
};

const variantDataVrtuleEn = {
    BEZ_PODSVICENI: { desc: "The propeller mockup is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail.", price: "Price without VAT: 76 020 CZK" },
    SE_STOJANEM: { desc: "The propeller mockup is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail. Includes a solid wood stand, allowing you to place the propeller anywhere you want.", price: "Price without VAT: 81 020 CZK" },
    S_UCHYCENIM_NA_ZED: { desc: "The propeller mockup is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail. This configuration includes a special wall mount fixture.", price: "Price without VAT: 81 020 CZK" },
    S_UCHYCENIM_NA_ZED_A_PODSVICENI: { desc: "The propeller mockup is ideal for advertising your company or as a decoration in your office or home. The propeller is made of fiberglass, so it is also suitable for outdoors. It is a faithful 1:1 scale replica, honoring the original product down to the last detail. Individual blades are illuminated by LED strips placed on the back of each blade. All lights can be controlled via the included remote control. This configuration includes a special wall mount fixture.", price: "Price without VAT: 85 500 CZK" }
};

const variantDataVrtulovyListEn = {
    BEZ_PODSVICENI: { desc: "Propeller blade mockup in original scale with spinner, all markings, and a movable base featuring some of the famous symbols found on original aircraft.", price: "Price without VAT: 18 400 CZK" },
    S_PODSVICENIM: { desc: "Propeller blade mockup in original scale with spinner, all markings, and a movable base featuring some of the famous symbols found on original aircraft. Includes LED backlighting attached to the rear of the blade. Controlled via the included remote.", price: "Price without VAT: 25 300 CZK" }
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

// Inicializace

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
        if (bodyHtml.includes('Maketa Supermarine Spitfire Mk.IX') || bodyHtml.includes('Mockup Supermarine Spitfire Mk.IX')) {
            const data = isEn ? variantDataEn : variantData;
            setupVariantHandler('product1', data, 'variantSelect', 'variantDescription', 'variantPrice');
        } else if (bodyHtml.includes('Vrtulový list letadla Spitfire') || bodyHtml.includes('Propeller Blade Spitfire')) {
            const data = isEn ? variantDataVrtulovyListEn : variantDataVrtulovyList;
            setupVariantHandler('product4', data, 'variantSelect', 'variantDescription', 'variantPrice');
        }
    }

    // 5. Repozicování selectu a přepočet ceny
    document.querySelectorAll('.popis-produktu').forEach(desc => {
        const select = desc.querySelector('select');
        const priceEl = desc.querySelector('p.zakladni-cena');
        const header = desc.querySelector('h2');
        if (!select || !priceEl || !header) return;

        function reposition() {
            if (window.innerWidth < 980) {
                desc.insertBefore(select, priceEl.nextSibling);
            } else {
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
            bigEl.textContent = `Cena bez DPH: ${formatter.format(total)} Kč`;
        }
        select.addEventListener('change', updatePrice);
        updatePrice();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const findImageDetails = (currentSrc) => {
        for (const productId in productImages) {
            const images = productImages[productId];
            const decodedSrc = decodeURIComponent(currentSrc);
            const foundIndex = images.findIndex(imgSrc => decodedSrc.endsWith(imgSrc));
            if (foundIndex !== -1) {
                return {
                    productId: productId,
                    images: images,
                    currentIndex: foundIndex
                };
            }
        }
        return null;
    };

    /**
     * Změní obrázek zobrazený v lightboxu.
     * @param {'prev'|'next'} direction - Směr, kterým se má obrázek změnit.
     */
    const changeLightboxImage = (direction) => {
        const lightboxImage = document.querySelector('.lb-image');
        if (!lightboxImage) return;

        const details = findImageDetails(lightboxImage.src);
        if (!details) return;

        const { images, currentIndex } = details;
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % images.length;
        } else {
            newIndex = (currentIndex - 1 + images.length) % images.length;
        }

        let newSrc = images[newIndex];

        // Fix for EN pages path
        if (window.location.pathname.includes('/EN/') && !newSrc.startsWith('../') && !newSrc.startsWith('http') && !newSrc.startsWith('/')) {
            newSrc = '../' + newSrc;
        }

        lightboxImage.src = newSrc;

        const numberDisplay = document.querySelector('.lb-number');
        if (numberDisplay) {
            numberDisplay.textContent = `Image ${newIndex + 1} of ${images.length}`;
        }
    };

    /**
     * Přidá vlastní navigační šipky do lightboxu.
     */
    const addLightboxArrows = () => {
        const lightboxImage = document.querySelector('.lb-image');
        if (!lightboxImage) return;

        // Check if the current image belongs to a managed product
        if (!findImageDetails(lightboxImage.src)) return;

        const lightboxContainer = document.querySelector('.lb-outerContainer');
        if (lightboxContainer && !lightboxContainer.querySelector('.custom-lb-prev')) {
            const prevArrow = document.createElement('span');
            prevArrow.className = 'custom-lb-arrow custom-lb-prev';
            prevArrow.innerHTML = '&#10094;';
            prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                changeLightboxImage('prev');
            });

            const nextArrow = document.createElement('span');
            nextArrow.className = 'custom-lb-arrow custom-lb-next';
            nextArrow.innerHTML = '&#10095;';
            nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                changeLightboxImage('next');
            });

            lightboxContainer.appendChild(prevArrow);
            lightboxContainer.appendChild(nextArrow);
        }
    };

    // Přidá posluchač kliknutí na všechny odkazy, které otevírají lightbox.
    document.querySelectorAll('a[data-lightbox]').forEach(link => {
        link.addEventListener('click', () => {
            // Krátké zpoždění zajistí, že se lightbox plně načte před přidáním šipek.
            setTimeout(addLightboxArrows, 100);
        });
    });
});
