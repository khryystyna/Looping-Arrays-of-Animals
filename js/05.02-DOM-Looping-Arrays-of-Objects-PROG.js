// Lesson 05.02 - PROG
// looping an array of objects
// making a video player interface

// 1. Open `05.02-Looping-Arrays-of-Objects.html` and preview it in the browser.

// 2. Click an animal picture to swap the video and description. 

// 3. Open `animals.js` and have a look. The file contains one variable, an array called `animalsArr`. 
/* 
Each array item is an object of six properties:
    - `name` ('giraffe', 'ostrich', etc.) 
    - `class` ('mammal', 'bird', 'reptile') 
    - `herbivore` (boolean: true or false)
    - `continent` ('Asia', 'Africa', etc.)
    - `youTube` (YouTube video embed code) 
    - `desc` (description of the animal)
*/

// 4. Switch to the lesson file's JS file, `05.02-Looping-Arrays-of-Objects-START.js`.

// To make the application, we will loop through the animals array:
/*
- Each time through the loop, we will concatenate an `img` tag.
- The `img` tag will have an `onclick` event that calls a function called `swapImage(i)`.
- The `i` argument is the index of the current item.
- The argument `i` tells the function which video and description it needs to load.
- The YouTube video is embedded with an `iframe` tag, which is the same for each video, except for an 11-character code specific to that particular video.
*/

// 5. First, get all the elements that we need for the output:

// get animals pic div to hold images
const animalPicsDiv = document.getElementById('animal-pics');
// get video player div
const videoPlayerDiv = document.getElementById('video-player');
// get the iframe video player
const iframe = document.querySelector('iframe');
// get h2 for animal name
const h2 = document.querySelector('h2');
// get p tag for description
const p = document.querySelector('p');

// 6. Output the name and description of the first animal immediately on page load.
/* 
- the first array item is `animalsArr[0]`
- each array item is an object, so the name of the first animal is `animalsArr[0].name`
*/
h2.textContent = animalsArr[0].name;
p.textContent = animalsArr[0].desc;
// iframe.src = `https://www.youtube.com/embed/${animalsArr[1].youTube}`;

// 7. Display the video for the first animal. 
/*
- the `iframe` for each video is identical, except for an 11-character code
- the code is stored as the object's `youTube` property 
- we access the property with `animalsArr[0].youTube` and concatenate that into the `iframe`:
*/

// display video for first animal
// videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animalsArr[0].youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

// 8. Make sure the html page is using START.js and reload the page in the browser. We should have the video and description at right, and an empty box at left.

// Now, to output the animal images to the `animal-pics` div, the empty box at left. Each image needs to be clickable to call a function to swap the video and description.

// 9. Set up a loop that iterates `animalsArr`. First thing to do in the loop is to save the current object to a variable:

// 10. Open the `images` folder. Notice that the two-word file names are hyphenated, whereas the animal names in the data have spaces--not hyphens:
/*
- FILE: american-bison.jpg, andean-bear.jpg
- DATA: 'American bison', 'Andean bear'

 We will use object names ('American bison') to concatenate image file paths, so we need to replace the spaces with hyphens.
*/

for (animal of animalsArr) {

    // 11. Make an image object dynamically:
    let picFile = animal.name.replace(' ', '-').toLowerCase() + '.jpg';

    // 11B. ake an image object: 
    const pic = new Image();

    // 11C. Set pic src to the picFile path:
    pic.src = `images/${picFile}`;

    // 12. Tell pic to call swapAnimal function on click:
    // the way to pass a param to the listener callback function is to wrap the function
    // in another function: outer func is anonymous and not called until event (click) occurs; inner func is then called when outer func is called; therefore inner func can
    // have param () without calling func instantly -- the outer wrapper func "stops" inner 
    // func from just running immediately

    // pass animal object to var, so that it has scope to make it all the way into the inner-inner function of the listener callback;
    const obj = animal;

    // three ways to swap animal:
    // 1. assign data props to pic so that in the swapAnimal func we can
    // get the data as this.prop:
    // pic.animalName = animal.name;
    // pic.desc = animal.desc;
    // pic.youTube = animal.youTube;
    // call function w no params; this requires properties attached to img which are available as 'this' inside function:
    // pic.addEventListener('click', swapAnimal);

    // 2. 
    // OR: listener callback doesn't need to be a separate, named func
    // code is so short, just run it inline
    // 'animal' from for-of loop needs to be passed to var to give it scope inside func:
    // pic.addEventListener('click', function() {
    //     h2.textContent = obj.name;
    //     p.textContent = obj.desc;
    //     iframe.src = "https://www.youtube.com/embed/" + obj.youTube;
    // });

    // 3. 
    // OR: call a func from listener, but pass obj as arg
    // need outer wrapper func to pass param
    // 'animal' from for-of loop needs to be passed to var to give it scope inside func:
    pic.addEventListener('click', function() {
       getAnimal(obj);
    });

    // 12B. Assign the animal properties to the img so that in the function calls   
    // when that the image clicked, we can get all the data for the animal
    // pic.animalName = animal.name;
    // pic.desc = animal.desc;
    // pic.youTube = animal.youTube;
    
    // 13. Append the pic to the "animals-pic" div (animalPicsDiv)
    animalPicsDiv.appendChild(pic);
}

// #2 is probably the best way to go, because: 
//     - doesn't require a new named func
//     - doesn't require animal be assigned properties in loop


// 13. The function needs to know which animal was clicked, so pass in the index, `i`, as the argument.

// 14. Output the `img` tag. Since this is an html tag, set the `innerHTML` rather than the `textContent`: 


// 15. Save and reload the page; the images should all be there although clicking them doesn't work since we have yet to write the `swapAnimal()` function. That's next.

// 16. Define the function. It has a parameter `i` which comes in when the function is called as the index ) {
function swapAnimal() {

    // Get the img properties as this. and output animal name and desc:
    h2.textContent = this.animalName;
    p.textContent = this.desc;

    // concat the youTubeCode into the iframe for the embedded You Tube video:
    iframe.src = `https://www.youtube.com/embed/${this.youTube}`;
}

function getAnimal(obj) {
    console.log('param obj:', obj); // the pic that got clicked to call the function

    // Get the img properties as this. and output animal name and desc:
    h2.textContent = obj.name;
    p.textContent = obj.desc;

    // concat the youTubeCode into the iframe for the embedded You Tube video:
    iframe.src = `https://www.youtube.com/embed/${obj.youTube}`;
}
// challenge: 
// get just the animal name from this long file path
// replace the hyphen w space to get animal name
// log the result

let fullSrc = `///Users/n/Documents/-_-_-_-_Noble-JavaScript-Bootcamp-Feb2024/05-LOOPS/05.02-Looping-Arrays-of-Animals/images/american-bison.jpg`;

// expected result: american bison
// hint: up to 3 string methods may be needed

// // 2 solutions: split() and lastIndexOf()
let pathArr = fullSrc.split('/');
let animName = pathArr.slice(-1)[0].replace('-', ' '); // incl file ext
animName = animName.slice(0, animName.indexOf('.')); // no file ext
console.log('animName split():', animName);

let animalName = fullSrc.slice(fullSrc.lastIndexOf('/')+1, fullSrc.lastIndexOf('.')).replace('-', ' ');
console.log('animalName lastIndexOf():', animalName);

