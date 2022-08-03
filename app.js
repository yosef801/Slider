//
const homePageLink = document.getElementById("homeLink");
const aboutPageLink = document.getElementById("aboutLink");
const homeDiv = document.getElementById("homePage");
const aboutDiv = document.getElementById("aboutPage");
homePageLink.addEventListener("click", function () {
  console.log("clicked");
  homeDiv.style.display = "block";
  aboutDiv.style.display = "none";
});
aboutPageLink.addEventListener("click", function () {
  console.log("clicked about");
  homeDiv.style.display = "none";
  aboutDiv.style.display = "block";
});
//
