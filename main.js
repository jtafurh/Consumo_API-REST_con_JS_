console.log('Hola mundo');

const URL_API = 'https://api.thecatapi.com/v1/images/search';


const recargar2 = async()=>{
    try {
        const response = await fetch(URL_API);
        const data = await response.json()
        const img = document.getElementById('img-cat');
        img.src = data[0].url;
    } catch (error){
        console.error(error);
    }
}
recargar2()

function recargar () {
    fetch(URL_API)
        .then(response => response.json())
        .then(data => {
            const img = document.getElementById('img-cat');
            img.src = data[0].url;
        })
}

//recargar()