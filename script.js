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
    document.getElementById("sideNavbar").style.width = "450px";
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

  function applyLanguage(language) {
    const currentPath = window.location.pathname;

    // Přesměrování podle zvoleného jazyka
    if (language === 'cz' && !currentPath.includes('index.html')) {
      window.location.href = 'index.html';  // Čeština verze
    } else if (language === 'en' && !currentPath.includes('indexEN.html')) {
      window.location.href = 'indexEN.html';  // Anglická verze
    }
  }