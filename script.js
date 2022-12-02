let search = document.getElementById("search");
let style = document.getElementById("style");
let currentTime = document.getElementById("currentTime");

const date = new Date();
currentTime.innerHTML = date;

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

         title.innerHTML = data.Search[0].Title;
         releaseDate.innerHTML = data.Search[0].Year;
         let posterImage = data.Search[0].Poster;
         poster.src = posterImage;
      })
      .catch((error) => console.log(error));
});
