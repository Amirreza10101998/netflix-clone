const url = "https://striveschool-api.herokuapp.com/api/movies";

const getData = async () => {
    try {
        let response = await fetch(url + "/" + `${query}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzQyMDQ0MDcsImV4cCI6MTY3NTQxNDAwN30.f-Azyjtp7_xVnv3LS7LCcPq4QWlwkgkhAWUI6X2NxF8"
            }
        });
        if(response.ok) {
            let data = await response.json();
            console.log(data);
            displayMovies(data);
        }
    } catch (error) {
        console.log(error);
    }
};

const displayMovies = (data) => {
    const movieImg = document.querySelectorAll("#new-movies-img");
    for (let i = 0; i < movieImg.length; i++) {
        movieImg[i].classList.add('card-img');
        movieImg[i].src = data[i].imageUrl;
    }
};

window.onload = () => {
    getData();

}



  

