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
            output.innerHTML += `<div class="col-3 bg-light">
            ${element.Title} <br>
            ${element.Year} <br>
            <img src='${element.Poster}'>
            
            </div>`;
         });
      })
      .catch((error) => console.log(error));
});
