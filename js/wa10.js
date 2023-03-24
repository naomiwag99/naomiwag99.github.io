const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArrays = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */

const alts = ['a childs eye','an artistic sand area','some pretty flowers','egyptian hieroglyphics','a moth']

/* Looping through images */


for(const image of imgArrays) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `/img/wa10images/${image}`);
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {displayedImage.src = e.target.src});
}

/* Wiring up the Darken/Lighten button */


