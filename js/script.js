//1. Byt namn på första hoodien från Ash till Potato.

const changeNameOnFirstHoodie = document.querySelector("h3");
const h3Text = changeNameOnFirstHoodie.textContent;
changeNameOnFirstHoodie.textContent = "Potato";


//2. Byt namn på Home till Start.

const aHome = document.querySelector("a");
const changeNameOnHome = aHome.textContent;
aHome.textContent = "Start"

//3. Byt namn på Contact till Mail Us.
const aContact = document.querySelector('nav a:nth-child(3)'); //`nav a:nth-child(3)' = selects the third child element inside the parent
const changeNameOnContact = aContact.textContent;
aContact.textContent = "Mail Us";



//4. Byt ut informationen om Sinus Hoodie - Fire.
const art2 = document.querySelector(".art-2");

const changeInfo = art2.querySelector("p");
const infoOnHoodieFire = changeInfo.textContent;
changeInfo.textContent = `A soft and comfortable hoodie in the color red. Logo and text on the back. Unisex, size S-XXXL`

//5. Byt bakgrundsfärg och text på en knapp.


//6. Byt bakgrundsfärg på någon av produkterna.

//7. Byt ut adressen på sidan.

//8. Byt färg på samtliga <p>.


//9. Ändra text på samtliga knappar till add to cart.

//10. Lägg till classen active på menyalternativet home.


//11. Ta bort classen logo på logotypen.

