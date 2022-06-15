console.log('Hola mundo');

const URL_API = 'https://api.thecatapi.com/v1/images/search?limit=4';

async function recargar2 (){
    try {
        const response = await fetch(URL_API);  // Llamado a la API
        const data = await response.json();      // Conversion a sintaxis que JS entienda
        console.log(data);
        const img1 = document.getElementById('cat-1'); // Llamado a elementos HTML
        const img2 = document.getElementById('cat-2');
        const img3 = document.getElementById('cat-3');
        const img4 = document.getElementById('cat-4');
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
        img4.src = data[3].url;
    } catch (error){
        console.error(error);
    }
}
recargar2()

/* Con Promesas */
// function recargar () {
//     fetch(URL_API)
//         .then(response => response.json())
//         .then(data => {
//             const img = document.getElementById('img-cat');
//             img.src = data[0].url;
//         })
// }

// recargar()