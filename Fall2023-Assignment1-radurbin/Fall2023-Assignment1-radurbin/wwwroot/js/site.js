// changes the page when you hover over the cover art
const coverArtElement = document.getElementById("CoverArt");
const titleElement = document.getElementById("Title");
const originalPoster = "https://i.imgur.com/IZecVS6.jpg";
const altPoster = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/aftersun-2022-alternate-movie-poster-miranda-jackowski.jpg";

coverArtElement.addEventListener("mouseover", function () {
    coverArtElement.src = altPoster;
    document.body.style.backgroundColor = "#2f441d";
    titleElement.innerHTML = "aftersun";
    titleElement.style.letterSpacing = "0px";
});

coverArtElement.addEventListener("mouseout", function () {
    coverArtElement.src = originalPoster;
    document.body.style.backgroundColor = "#56849e";
    titleElement.innerHTML = "AFTERSUN";
    titleElement.style.letterSpacing = "12px";
});