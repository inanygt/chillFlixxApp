let search = document.getElementById("search");
let style = document.getElementById("style");
let input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
   // If the user presses the "Enter" key on the keyboard
   if (event.key === "Enter") {
      document.getElementById("search").click();
   }
});

let title = document.getElementById("title");
let releaseDate = document.getElementById("releaseDate");
let poster = document.getElementById("poster");

let modal = document.getElementById("modal-details");
let modalPoster = document.getElementById("modal-poster");
let modalInfo = document.getElementById("modal-info");
let modalFooter = document.getElementById("modal-footer");
let modalTitle = document.getElementById("modal-title");

search.addEventListener("click", function () {
   let input = document.getElementById("input").value;
   let url = "http://www.omdbapi.com/?s=" + input + "&apikey=bfc0d76f";
   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         console.log(data.Search);
         let output = document.getElementById("output");
         output.innerHTML = " ";
         data.Search.forEach((element) => {
            output.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="box bg-dark rounded-3"> 
            <div class="title"> ${element.Title} </div>
            
            <div class="year">   ${element.Year} </div>
            <img src='${element.Poster}' width="100%"> <br>
            <button data-bs-toggle="modal"
                  data-bs-target="#reg-modal" class="btn btn-light m-3 btn-details" onClick="getDetails('${element.imdbID}')">Details</button> <br>
            </div>
            </div>`;
         });
      })
      .catch((error) => console.log(error));
});

function getDetails(id) {
   fetch("http://www.omdbapi.com/?i=" + id + "&apikey=bfc0d76f")
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         modalTitle.innerHTML = `
         <div class="white"> ${data.Title} </div>`;
         modalPoster.innerHTML = `<img src='${data.Poster}'">`;
         modalInfo.innerHTML = `<div class="white">
         <h1> ${data.Year} </h1>
         ${data.Genre} <br> <br>
         <h3> <i class="fa-solid fa-star"></i> ${data.imdbRating} </h3> <br> <br>
         Actors: ${data.Actors}
         </div>`;
         modalFooter.innerHTML = `
         <div class="white" id="bigInfo"> ${data.Plot}</div>
         `;
      })
      .catch((error) => console.log(error));
}
