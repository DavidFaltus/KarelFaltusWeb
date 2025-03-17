const fs = require("fs");

const ODESLAT = document.getElementById("btnOdeslat")

ODESLAT.addEventListener("click", function(){
const JMENO = document.getElementById("jmeno-prijmeni").innerText;
const EMAIL = document.getElementById("email").innerText;
const TELEFON = document.getElementById("telefon").innerText;

const user = {
    Jmeno: JMENO,
    Email: EMAIL,
    Telefon: TELEFON,
  };
  
fs.readFile("formular.json", "utf8", (error, data) => {
    if (error) {
      throw error;
    }
  
    let users = [];
  
  if (data) {
      users = JSON.parse(data);
    }
  
  users = Array.isArray(users) ? users : [];
  
  users.push(user);
  
  fs.writeFile("formular.json", JSON.stringify(users, null, 2), (error) => {
      if (error) {
        throw error;
      }
  
    console.log("Nový záznam byl úspěšně zapsán do souboru formular.json.");
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
  
  document.addEventListener("DOMContentLoaded", function() {
    // Načteme uložený jazyk z localStorage
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
      applyLanguage(savedLanguage);
    } else {
      applyLanguage('cz');  // Výchozí jazyk
    }
  });

  function switchLanguage(language) {
    // Uložíme zvolený jazyk do localStorage
    localStorage.setItem('language', language);
    applyLanguage(language);
  }
  
  function switchLanguage(language) {
    // Uložíme zvolený jazyk do localStorage
    localStorage.setItem('language', language);
    applyLanguage(language);
  }
  
  function applyLanguage(language) {
    const currentPath = window.location.pathname;
  
    // Získání názvu stránky bez cesty
    let pageName = currentPath.split('/').pop();
  
    // Kontrola, zda uživatel není už na požadované stránce
    if ((language === 'cz' && !pageName.includes('EN')) || 
        (language === 'en' && pageName.includes('EN'))) {
      // Uživatel již je na správné stránce, nedělej nic
      window.location.reload();
      return;
    }
  
    // Přesměrování podle zvoleného jazyka
    if (language === 'cz') {
      // Nahrazení anglické verze (EN) českou verzí
      const czPage = pageName.replace('EN', ''); 
      window.location.href = czPage;
    } else if (language === 'en') {
      // Přidání "EN" do názvu české verze stránky pro anglickou verzi
      const enPage = pageName.replace('.html', 'EN.html');
      window.location.href = enPage;
    }
  }
  
  document.getElementById('myForm').addEventListener('submit', function(e) {
    // Obnovíme stránku okamžitě po stisknutí tlačítka odeslání
    window.location.reload();
  });

  function changeImage(imageSrc, productId) {
    // Najdeme hlavní obrázek pro daný produkt pomocí jeho ID
    const mainImage = document.getElementById('mainImage-' + productId);
    if (mainImage) {
      mainImage.src = imageSrc;
    }
  }

  
  