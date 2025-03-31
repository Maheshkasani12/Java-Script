


const parentElement = document.getElementsByClassName("parent-container")[0]; // Access the first element
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// Creating card image element
const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");
cardImageElement.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQOM92M1BvWPnnCvMxb50I5s61Ny8t3E_rQ&s"); // Corrected 'scr' to 'src'
cardImageElement.setAttribute("alt", "travel-card");
cardContainer.appendChild(cardImageElement);

//create car text
const imageText= document.createElement("span");
imageText.innerText="This are beauty full days!<br>  "
cardContainer.appendChild(imageText);


parentElement.appendChild(cardContainer);


//defer: it first loaded the js and simulutinously html loaded and executed . afer that js is loaded
//async:it not see about wherer html is executed or not .first downlade the js and start execution whith out html is loaded or executed or not

//DOM (Document Object Model)
//Definition: The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each node corresponds to a part of the document (elements, attributes, text, etc.).


// BOM (Browser Object Model)
//Definition: The BOM is a collection of objects provided by the browser that allows interaction with the browser itself, rather than the document.



//window object: window objject is the gllobal object provided by the broweser object model .it reperesent the browser window

//global scope: it is a variable or function globally a property of the window object


//it provides the  browser related properties and methods such as url, navigation history
//methods like alert(),setTimeout(),console.log()

//dialog boxes
// alert();
// conform()
// prompt();
