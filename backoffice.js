const url = "https://striveschool-api.herokuapp.com/api/movies";

const name = document.getElementById("name").value;
const description = document.getElementById("description").value;
const category = document.getElementById("category").value;
const imageUrl = document.getElementById("imageUrl").value;

const postData = async (movie) => {
    try {
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzQyMDQ0MDcsImV4cCI6MTY3NTQxNDAwN30.f-Azyjtp7_xVnv3LS7LCcPq4QWlwkgkhAWUI6X2NxF8"
            }
        });
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } 
};

const fetchActionMovies = async () => {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/movies/action", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzQyMDQ0MDcsImV4cCI6MTY3NTQxNDAwN30.f-Azyjtp7_xVnv3LS7LCcPq4QWlwkgkhAWUI6X2NxF8"
            }
        });
        let movies = await res.json();
        let movieTableBody = document.getElementById("movie-table-body");
        movies.forEach(movie => {
            let newRow = `<tr><td>${movie._id}</td><td>${movie.name}</td><td>${movie.category}</td><td>${movie.imageUrl}</td><td><img src="${movie.imageUrl}"></td><td><button type="submit" class="btn btn-primary">Delete</button><button type="submit" class="btn btn-primary">Edit</button><td></tr>`;
            movieTableBody.insertAdjacentHTML("beforeend", newRow);
        });
    } catch (error) {
        console.log(error);
    }
};

const fetchHorrorMovies = async () => {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/movies/horror", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzQyMDQ0MDcsImV4cCI6MTY3NTQxNDAwN30.f-Azyjtp7_xVnv3LS7LCcPq4QWlwkgkhAWUI6X2NxF8"
            }
        });
        let movies = await res.json();
        let movieTableBody = document.getElementById("movie-table-body");
        movies.forEach(movie => {
            let newRow = `<tr><td>${movie._id}</td><td>${movie.name}</td><td>${movie.category}</td><td>${movie.imageUrl}</td><td><img src="${movie.imageUrl}"></td><td><button type="submit" class="btn btn-primary">Delete</button><button type="submit" class="btn btn-primary">Edit</button><td></tr>`;
            movieTableBody.insertAdjacentHTML("beforeend", newRow);
        });
    } catch (error) {
        console.log(error);
    }
};

const fetchSciFiMovies = async () => {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/movies/sci-fi", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzQyMDQ0MDcsImV4cCI6MTY3NTQxNDAwN30.f-Azyjtp7_xVnv3LS7LCcPq4QWlwkgkhAWUI6X2NxF8"
            }
        });
        let movies = await res.json();
        let movieTableBody = document.getElementById("movie-table-body");
        movies.forEach(movie => {
            let newRow = `<tr><td>${movie._id}</td><td>${movie.name}</td><td>${movie.category}</td><td>${movie.imageUrl}</td><td><img src="${movie.imageUrl}"></td><td><button type="submit" class="btn btn-primary">Delete</button><button type="submit" class="btn btn-primary">Edit</button><td></tr>`;
            movieTableBody.insertAdjacentHTML("beforeend", newRow);
        });
    } catch (error) {
        console.log(error);
    }
};

const submitMovie = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const imageUrl = document.getElementById("imageUrl").value;
    
    const movie = {
        name,
        description,
        category,
        imageUrl
    }
    postData(movie);
};

fetchActionMovies();
fetchSciFiMovies();
fetchHorrorMovies();
