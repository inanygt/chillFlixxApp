let search = document.getElementById("search");
let style = document.getElementById("style");
let currentTime = document.getElementById("currentTime");

const date = new Date();
currentTime.innerHTML = date;

search.addEventListener("click", function () {
   let input = document.getElementById("input").value;
   let url = "http://www.omdbapi.com/?s=" + input + "&apikey=bfc0d76f";
   fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
});
