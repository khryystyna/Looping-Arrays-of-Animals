// Lesson 05.02 - FINAL
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
const animalPics = document.getElementById('animal-pics');

// get video player div
const videoPlayer = document.getElementById('video-player');

// 6. Output the name and description of the first animal immediately 
// on page load.
/* 
- the first array item is `animalsArr[0]`
- each array item is an object, so the name of the first animal 
// is `animalsArr[0].name`
*/

// get h2 for animal name
const h2 = document.querySelector('h2');
h2.textContent = animalsArr[0].name;

// get p tag for description
const p = document.querySelector('p');
p.textContent = animalsArr[0].desc;


// 7. Display the video for the first animal. 
/*
- the `iframe` for each video is identical, except for an 11-character code
- the code is stored as the object's `youTube` property 
- we access the property with `animalsArr[0].youTube` and concatenate that into the `iframe`:
*/

// display video for first animal
// videoPlayer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9jq8AD8M5po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

// 8. Make sure the html page is using START.js and reload the page in the browser. We should have the video and description at right, and an empty box at left.

// Now, to output the animal images to the `animal-pics` div, the empty box at left. Each image needs to be clickable to call a function to swap the video and description.

// 9. Set up a loop that iterates `animalsArr`. First thing to do in the loop is to save the current object to a variable:

for (let i = 0; i < animalsArr.length; i++) {
    let animal = animalsArr[i];
    let name = animal.name.replace(' ', '-');
    let tag = `<img src="images/${name}.jpg" alt="${animal.name}" onclick="swapAnimal(${i})">`;
    animalPics.innerHTML += tag;
}

// 10. Open the `images` folder. Notice that the two-word file names are hyphenated, whereas the animal names in the data have spaces--not hyphens:
/*
- FILE: american-bison.jpg, andean-bear.jpg
- DATA: 'American bison', 'Andean bear'

 We will use object names ('American bison') to concatenate image file paths, so we need to replace the spaces with hyphens.
*/
 
// 11. Using backticks, concatenate an entire `img` tag, using `${name}` to add the file name, dynamically:

// 12. We need each tag to be clickable to call the `swapAnimal()` function, so add that to the tag as an `onclick` event handler:

function swapAnimal(i) {
    h2.textContent = animalsArr[i].name;
    p.textContent = animalsArr[i].desc;

    videoPlayer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + animalsArr[i].youTube + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

// 13. The function needs to know which animal was clicked, so pass in the index, `i`, as the argument.

// 14. Output the `img` tag. Since this is an html tag, set the `innerHTML` rather than the `textContent`: 



// 15. Save and reload the page; the images should all be there although clicking them doesn't work since we have yet to write the `swapAnimal()` function. That's next.

// 16. Define the function. It has a parameter `i` which comes in when the function is called as the index of the clicked animal.


    // 16. Using the `i` argument, look up the animal in the array and set the heading and description to that animal's `name` and `desc` properties, respectively:

    // 17. Now for the big `iframe` tag for the video. Just slot in the chosen animal's 11-digit YouTube video code, which we access as `animalsArr[i].youTube`: 

// 18. Save and reload the page. Click an animal to load its video and description.

// END: Lesson 05.02
// NEXT: Lesson 05.03