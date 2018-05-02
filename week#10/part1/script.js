/** ⚡ DEMO: JS crash-course 🚓 */

let total = '123 dollars'; // variable declaration
total = 22; 

console.log(document.body); // print to the console + document object


/** EX #1: using DOM methods add the following elements in the HTML's body 
 * 
 * body
 *  .gallery
 *      img: src, alt
 *      img: src, alt
 *      img: src, alt
*/


/** 💻 Code #1 💻 */
let gallery = document.createElement("div");
gallery.setAttribute("class", "gallery");

let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");

img1.setAttribute("src", "https://files.gamebanana.com/img/ico/sprays/courage.gif");
img1.setAttribute("alt", "Courage");

img2.setAttribute("src", "https://i.pinimg.com/736x/80/f1/b5/80f1b55c2ef5252295aaf797d0e0ad2f--s-cartoons-muriel.jpg");
img2.setAttribute("alt", "Muriel");

img3.setAttribute("src", "https://vignette.wikia.nocookie.net/courage/images/6/6e/Eustace2.jpg");
img3.setAttribute("alt", "Eustace");

document.body.appendChild(gallery);

gallery.appendChild(img1);
gallery.appendChild(img2);
gallery.appendChild(img3);


/** ⚡ DEMO accessing the DOM & event listeners */

/** EX #2: 
 *   - add a click event listener on every image that prints a message to the console 
*/


/** 💻 Code  #2 💻  */
let images = document.getElementsByTagName("img");

for(let i = 0; i<images.length; i++) {
    images[i].addEventListener("click", function () {
        console.log("Ai dat click pe o imagine!");
    });
}

/** ⚡ DEMO removing event listeners */

/** EX #3:  add a click event listener on the gallery that prints a message to the console */


/** 💻 Code #3 💻 */
function onGalleryClick(e) {
    console.log("Am dat click pe galerie");
}

gallery.addEventListener("click", onGalleryClick);

// Removing an event:
// gallery.removeEventListener("click", onGalleryClick);


//  🤚 Q&A: which one triggered first? Bubble vs capture


/** ⚡ DEMO:  a more efficient way of handling multiple event listeners */

function efficientGalleryClick(e) {
    if(e.target.tagName === "IMG") {
        console.log("Am dat click pe o imagine!");
    } else {
        console.log("Am dat click pe galerie");
    }
}
