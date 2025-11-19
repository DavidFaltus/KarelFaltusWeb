// Globální proměnné a konstanty
let selectedProduct = "";
const visibleCount = 7;

//TODO PŘIDAT ROZLIŠOVÁNÍ PRODUKTŮ PODLE VERZÍ
const productImages = {
    product1: [
        "foto/fotkyweb/spitfire/RESIZED/1.jpg", "foto/fotkyweb/spitfire/RESIZED/2.jpg",
        "foto/fotkyweb/spitfire/RESIZED/3.jpg", "foto/fotkyweb/spitfire/RESIZED/4.jpg",
        "foto/fotkyweb/spitfire/RESIZED/5.jpg", "foto/fotkyweb/spitfire/RESIZED/6.jpg",
        "foto/fotkyweb/spitfire/RESIZED/7.jpg", "foto/fotkyweb/spitfire/RESIZED/8.jpg",
        "foto/fotkyweb/spitfire/RESIZED/9.jpg", "foto/fotkyweb/spitfire/RESIZED/10.jpg",
        "foto/fotkyweb/spitfire/RESIZED/11.jpg", "foto/fotkyweb/spitfire/RESIZED/12.jpg",
        "foto/fotkyweb/spitfire/RESIZED/13.jpg", "foto/fotkyweb/spitfire/RESIZED/14.jpg",
        "foto/fotkyweb/spitfire/RESIZED/15.jpg", "foto/fotkyweb/spitfire/RESIZED/16.jpg"
    ],
    product2: [
        "foto/fotkyweb/vrtule/RESIZED/1.jpg", "foto/fotkyweb/vrtule/RESIZED/2.jpg",
        "foto/fotkyweb/vrtule/RESIZED/3.jpg", "foto/fotkyweb/vrtule/RESIZED/4.jpg",
        "foto/fotkyweb/vrtule/RESIZED/5.jpg", "foto/fotkyweb/vrtule/RESIZED/6.jpg",
        "foto/fotkyweb/vrtule/RESIZED/7.jpg", "foto/fotkyweb/vrtule/RESIZED/8.jpg",
        "foto/fotkyweb/vrtule/RESIZED/9.jpg", "foto/fotkyweb/vrtule/RESIZED/10.jpg"
    ],
    product3: [
        "foto/fotkyweb/albatros/RESIZED/1.jpg", "foto/fotkyweb/albatros/RESIZED/2.jpg",
        "foto/fotkyweb/albatros/RESIZED/3.jpg", "foto/fotkyweb/albatros/RESIZED/4.jpg",
        "foto/fotkyweb/albatros/RESIZED/5.jpg", "foto/fotkyweb/albatros/RESIZED/6.jpg",
        "foto/fotkyweb/albatros/RESIZED/7.jpg", "foto/fotkyweb/albatros/RESIZED/8.jpg",
        "foto/fotkyweb/albatros/RESIZED/9.jpg", "foto/fotkyweb/albatros/RESIZED/10.jpg",
        "foto/fotkyweb/albatros/RESIZED/11.jpg", "foto/fotkyweb/albatros/RESIZED/12.jpg",
        "foto/fotkyweb/albatros/RESIZED/13.jpg"
    ],
    product4: [
        "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/1.jpg", "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/2.jpg",
        "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/3.jpg", "foto/fotkyweb/světlo vrtule (stojan)/RESIZED/4.jpg"
    ]
};

const currentIndex = { product1: 0, product2: 0, product3: 0, product4: 0 };

const variantData = {
    STATIC: { desc: "Maketa Supermarine Spitfire Mk.IX. je určena zejména k marketingovým účelům jako poutač před budovou, popřípadě zavěšena u stropu haly. Marking letounu lze na přání změnit, včetně úpravy do všech kamuflážních verzí dle daného místa bojového nasazení a časového období.", price: "Cena bez DPH: 1 710 000 Kč" },
    MOVIE: { desc: "Maketa Supermarine Spitfire Mk.IX umožňuje návštěvníkům bezprostřední kontakt s letadlem. Usednutí do kokpitu, manipulaci s ovladači a odezvou do řídících ploch. Součástí dodávky je i replika uniformy RAF pro případné pořízení památečních fotografií návštevníků v dobové uniformě. Ideální pro potřeby filmu a natáčení reklamních spotů!", price: "Cena bez DPH: 2 110 000 Kč" },
    PANORAMA: { desc: "Maketa Supermarine Spitfire Mk.IX. v měřítku 1:1 je interaktivní exponát. Letoun z reproduktorů umístěných v chladičích může vydávat zvuky leteckého poplachu nebo i startujícího motoru což je doprovázeno kouřem z výfuků a roztočením vrtule na 500 ot. /min. Letoun disponuje i osvětlením kokpitu a pozičních světel. Chytrá volba pro moderní muzea a soukromé sběratele!", price: "Cena bez DPH: 2 510 000 Kč" }
};

const variantDataVrtule = {
    BEZ_PODSVICENI: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Vrtule je vyrobena v měřítku 1:1 a je věrnou kopií originálního výrobku.", price: "Cena bez DPH: 76 020 Kč" },
    SE_STOJANEM: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Vrtule je vyrobena v měřítku 1:1 a je věrnou kopií originálního výrobku. Součástí je i stojan z dřevéného masivu, díky kterému můžete vrtuli umístit kamkoliv jen budete chtít.", price: "Cena bez DPH: 81 020 Kč" },
    S_UCHYCENIM_NA_ZED: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Vrtule je vyrobena v měřítku 1:1 a je věrnou kopií originálního výrobku. Součástí této konfiguace je i speciální přípravek pro uchycení na zeď.", price: "Cena bez DPH: 81 020 Kč" },
    S_UCHYCENIM_NA_ZED_A_PODSVICENI: { desc: "Maketa vrtule je ideální pro reklamu vaši firmy či jako dekorace ve vaší kanceláři nebo i doma. Vrtule je vyrobena ze sklolaminátu tudíž je vhodná i do exteriéru. Vrtule je vyrobena v měřítku 1:1 a je věrnou kopií originálního výrobku. Jednotlivé listy jsou osvětleny LED pásky, které jsou vždy umístěny na zadní straně jednotlivých listů. Všechna světla můžete ovládat pomocí dálkového ovladače, který je součástí balení. Součástí této konfiguace je i speciální přípravek pro uchycení na zeď.", price: "Cena bez DPH: 85 500 Kč" }
};

const variantDataVrtulovyList = {
    BEZ_PODSVICENI: { desc: "Maketa vrtulobého listu v originálním měřítku s unašečem, veškerými popisky a pojízdným podstavcem na kterém jsou zobrazeny některé ze známých symbolů, které se vyskytovali i na původních letadlech.", price: "Cena bez DPH: 18 400 Kč" },
    S_PODSVICENIM: { desc: "Maketa vrtulobého listu v originálním měřítku s unašečem, veškerými popisky a pojízdným podstavcem na kterém jsou zobrazeny některé ze známých symbolů, které se vyskytovali i na původních letadlech. Součástí je i LED podsvícení, které je připevněné k listu v jeho zadní části. Ovládá se pomocí ovladače, který je součástí balení.", price: "Cena bez DPH: 25 300 Kč" }
};

// --- FUNKCE ---

function updateVrtuleVariant() {
    const select = document.getElementById("vrtuleVariantSelect");
    const desc = document.getElementById("vrtuleVariantDescription");
    const price = document.getElementById("vrtuleVariantPrice");
    if (!select || !desc || !price) return;
    const data = variantDataVrtule[select.value];
    desc.textContent = data ? data.desc : "";
    price.textContent = data ? data.price : "";
}

function updateVrtulovyListVariant() {
    const select = document.getElementById("variantSelect");
    const desc = document.getElementById("variantDescription");
    const price = document.getElementById("variantPrice");
    if (!select || !desc || !price) return;
    const data = variantDataVrtulovyList[select.value];
    desc.textContent = data ? data.desc : "";
    price.textContent = data ? data.price : "";
}

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
                    access_key: "a9633fac-5576-428c-a534-1bd779586890", name, email, phone, address, notes,
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
                    access_key: "a9633fac-5576-428c-a534-1bd779586890", name, email, phone, dotaz,
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
    if (document.getElementById("vrtuleVariantSelect")) {
        const select = document.getElementById("vrtuleVariantSelect");
        select.addEventListener("change", updateVrtuleVariant);
        updateVrtuleVariant();
    }

    if (document.querySelector('body').innerHTML.includes('Vrtulový list letadla Spitfire')) {
        const select = document.getElementById("variantSelect");
        if (select) {
            select.addEventListener("change", updateVrtulovyListVariant);
            updateVrtulovyListVariant();
        }
    }

    const spitfireVariantSelect = document.getElementById("variantSelect");
    if (spitfireVariantSelect && typeof variantData !== 'undefined' && document.querySelector('body').innerHTML.includes('Maketa Supermarine Spitfire Mk.IX')) {
        const variantDescription = document.getElementById("variantDescription");
        const variantPrice = document.getElementById("variantPrice");
        const updateVariant = () => {
            const { desc, price } = variantData[spitfireVariantSelect.value];
            variantDescription.textContent = desc;
            variantPrice.textContent = price;
        };
        spitfireVariantSelect.addEventListener("change", updateVariant);
        updateVariant();
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
            const foundIndex = images.findIndex(imgSrc => currentSrc.endsWith(imgSrc));
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

        const newSrc = images[newIndex];
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
