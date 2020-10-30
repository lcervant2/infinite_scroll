// First Image Container
const imageContainer = document.getElementById('image-container');
// Second Loader
const loader = document.getElementById('loader');
// Photos array = global variable - We are using let, because the value within our photos array is going to change ever time we make a request
// Instead of a constant we are going to use let within our photos array because is going to change
let photosArray = [];


// Unplash API
// This is my api
const count = 10;
const apikey = 'eDfzHE04fys3S92WbcRW-Bv_Ys-RTU7tKvelPesM1s0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// Helper Function to set attribubes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray - Calls a function for each array element
  // We're gonna pass in our variable name
  // for each => - arrow function
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    // Create a blank achor element
    // Open a new window
    // Pass in a string
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    // item is going to be the parenet our image, so we append a child
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Get photos from Unsplash API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      // console.log(data); delete - Also, delete const data
      // console.log(photosArray); Remove it now
      displayPhotos();
    } catch (error) {
    // Catch Erro Here   
    }
}

// On Load - We are running the fucntion 
getPhotos();