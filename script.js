let search = document.getElementById("search");
let style = document.getElementById("style");
// let currentTime = document.getElementById("currentTime");

// const date = new Date();
// currentTime.innerHTML = date;

// let output = document.getElementById("output");

let input = document.getElementById("input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
      
   document.getElementById("search").click();
  }
});

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
         output.innerHTML = " ";
         data.Search.forEach((element) => {
            
            output.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 ">
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