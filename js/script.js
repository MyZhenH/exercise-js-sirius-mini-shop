//1. Byt namn på första hoodien från Ash till Potato.

const changeNameOnFirstHoodie = document.querySelector("h3");
const h3Text = changeNameOnFirstHoodie.textContent;
changeNameOnFirstHoodie.textContent = "Potato";


//2. Byt namn på Home till Start.

const aHome = document.querySelector("a");
const changeNameOnHome = aHome.textContent;
aHome.textContent = "Start"

//3. Byt namn på Contact till Mail Us.

//Ändrad i nav 
const aContact = document.querySelector('nav a:nth-child(3)'); //`nav a:nth-child(3)' = selects the third child element inside the parent
const changeNameOnContact = aContact.textContent;
aContact.textContent = "Mail Us";

//Ändrad i footer
const articleMenu = document.querySelector(`footer a:nth-child(4)`);
// const changeContact = articleMenu.textContent; //Behövs ej
articleMenu.textContent = "Mail Us";


//4. Byt ut informationen om Sinus Hoodie - Fire.

const art2 = document.querySelector(".art-2");

const changeInfo = art2.querySelector("p");
const infoOnHoodieFire = changeInfo.textContent;
changeInfo.textContent = `A soft and comfortable hoodie in the color red. Logo and text on the back. Unisex, size: L`

//5. Byt bakgrundsfärg och text på en knapp.

const art3Btn = document.querySelector(".art-3 button")
// const changeBtn = art3Btn.textContent; //Behövs ej
art3Btn.textContent = "399 kr";
art3Btn.style.backgroundColor = "blue";

//6. Byt bakgrundsfärg på någon av produkterna.

const art1 = document.querySelector(".art-1 figure");
art1.style.backgroundColor = "violet";

//7. Byt ut adressen på sidan.

const adress = document.querySelector("footer article p");
adress.textContent = "Kalkstensvägen 3, 224 78 Lund"

//8. Byt färg på samtliga <p>.

const changeColorOnAllP = document.querySelectorAll("p");
changeColorOnAllP.forEach(p => p.style.color = "brown");


//9. Ändra text på samtliga knappar till add to cart.

const allBtn = document.querySelectorAll("button");
allBtn.forEach(button => button.textContent = "Add to cart");

//10. Lägg till classen active på menyalternativet home.

const footer = document.querySelector("footer a");
footer.classList.add("active");

//11. Ta bort classen logo på logotypen.

const classLogo = document.querySelector(".logo");
classLogo.classList.remove("logo")

//12. Lägg till ett nytt menyalternativ.
const nav = document.querySelector("nav");
const account = document.createElement("a")
account.innerText = "Account";
// nav.appendChild(account); //alternativ 1
nav.insertAdjacentElement("afterbegin", account); //alternativ 2

//13. Lägg till en ny produkt med följande info.
/*el	beskrivning
img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.*/

const main = document.querySelector("main");
const newArticle = document.createElement("article") //Skapa <article>

newArticle.classList.add("art-4"); //Skapa Class
main.insertAdjacentElement("beforeend", newArticle); //Lägga till Class i <main>, sist med hjälp av "beforeend"

const art4 = document.querySelector(".art-4");

const figure = document.createElement("figure"); //Skapa <figure>
art4.appendChild(figure)

const img = document.createElement("img"); //Skapa img som ska in i <figure>
const addImg = document.querySelector(".art-4 figure")
img.src = "img/hoodie-forrest.png";
img.alt = "A green Sinus Hoodie";
addImg.appendChild(img);

const h2Tag = document.createElement("h2"); //Skapa h2
h2Tag.innerText = "Sinus Hoodie";
art4.appendChild(h2Tag);

const h3Tag = document.createElement("h3"); //Skapa h3
h3Tag.innerText = "Forest";
art4.appendChild(h3Tag);

const pTag = document.createElement("p"); //Skapa p
pTag.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";
art4.appendChild(pTag);

const btnTag = document.createElement("button"); //Skapa button
btnTag.innerText = "Add to cart";
art4.appendChild(btnTag);

//14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";

const addClassLogo = document.querySelector("header");
addClassLogo.classList.add("logo") //La till classen .logo igen eftersom vi hade tagit bort den

const click = document.querySelector(".logo");
click.addEventListener("click", (event) => {
    console.log("Found you!")
});

//15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

const clickOnArticle1 = document.querySelector(".art-1"); //Product 1
const article1 = document.querySelector(".art-1 h3");
const productNameOnArt1 = article1.innerText;
clickOnArticle1.addEventListener("click", (event) => {
    console.log("Hi, I´m article " + productNameOnArt1);
});

const clickOnArticle2 = document.querySelector(".art-2"); //Product 2
const article2 = document.querySelector(".art-2 h3");
const productNameOnArt2 = article2.innerText;
clickOnArticle2.addEventListener("click", (event) => {
    console.log("Hi, I´m article " + productNameOnArt2);
});

const clickOnArticle3 = document.querySelector(".art-3"); //Product 3
const article3 = document.querySelector(".art-3 h3");
const productNameOnArt3 = article3.innerText;
clickOnArticle3.addEventListener("click", (event) => {
    console.log("Hi, I´m article " + productNameOnArt3);
});

const clickOnArticle4 = document.querySelector(".art-4"); //Product 4
const article4 = document.querySelector(".art-4 h3");
const productNameOnArt4 = article4.innerText;
clickOnArticle4.addEventListener("click", (event) => {
    console.log("Hi, I´m article " + productNameOnArt4);
});

