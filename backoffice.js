const url = "https://striveschool-api.herokuapp.com/api/movies";

const postData = async (movie) => {
    console.log(movie); 
    try {
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzYxYWU3MzczODAwMTUzNzQzN2EiLCJpYXQiOjE2NzQyMDQ0MDcsImV4cCI6MTY3NTQxNDAwN30.f-Azyjtp7_xVnv3LS7LCcPq4QWlwkgkhAWUI6X2NxF8"
            }
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




