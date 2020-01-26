
const gallery = document.querySelector('.gallery');
const proxy = 'https://cors-anywhere.herokuapp.com/';

const query = 'games of thrones';
const per_page = 50;

const url = `${proxy}//api.giphy.com/v1/gifs/search?api_key=NrCOaFKwV1pChh3acIc1oVGxJVPODKt5&q=${query}&limit=${per_page}&offset=0&rating=G&lang=en`;

fetch(url)     // Funktionen fetch körs direkt
.then(function(response) {
    // Den här koden körs när servern svarar
    return response.json();  // ett promise, gör om svaret till ett objekt
})
.then(function(data) {  // objekt
    // Den här koden körs när svaret gjorts om till ett objekt
    let obj = data.data;
    Object.keys(obj).forEach(function(key) {
        console.log(obj[key].images.fixed_height_small);
        let image = document.createElement('img');
        image.setAttribute('src', obj[key].images.fixed_height_small.url);
        image.setAttribute('alt', query);
        gallery.appendChild(image); 
    });
    console.log(gallery);

}).catch(function(error) {
    console.error(error); // Denna kod körs om det blir fel exempelvis att servern inte svarar
});




