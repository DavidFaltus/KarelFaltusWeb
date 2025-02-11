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