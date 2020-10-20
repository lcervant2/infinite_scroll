// Unplash API
// This is my api
const count = 10;
const apikey = 'eDfzHE04fys3S92WbcRW-Bv_Ys-RTU7tKvelPesM1s0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
    // Catch Erro Here   
    }
}

// On Load - We are running the fucntion 
getPhotos();