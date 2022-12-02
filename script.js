let search = document.getElementById("search");
let style = document.getElementById("style");
let currentTime = document.getElementById("currentTime");

const date = new Date();
currentTime.innerHTML = date;

// let output = document.getElementById("output");

let title = document.getElementById("title");
let releaseDate = document.getElementById("releaseDate");
let poster = document.getElementById("poster");

search.addEventListener("click", function () {
   let input = document.getElementById("input").value;
   let url = "http://www.omdbapi.com/?s=" + input + "&apikey=bfc0d76f";
   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         console.log(data.Search);
         let output = document.getElementById("output");

         data.Search.forEach((element) => {
            output.innerHTML += `<div class="col-md ">
            <div class="bg-dark rounded-3"> 
            <div class="title"> ${element.Title} </div>
            
            <div class="year">   ${element.Year} </div>
            <img src='${element.Poster}' width="100%"> <br>
            <button class="btn btn-light m-3" onClick="getDetails('${element.imdbID}')">Details</button> <br>
            </div>
            </div>`;

         
         });
      }).catch((error) => console.log(error));
});

function getDetails(id) {
   fetch('http://www.omdbapi.com/?i=' + id + '&apikey=bfc0d76f').then(
   res => res.json()
   ).then(
      data => console.log(data)
   ).catch();
}