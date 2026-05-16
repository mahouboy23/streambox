const movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, watched: true },
    { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7, watched: true },
    { title: "Parasite", year: 2019, genre: "Drama", rating: 8.6, watched: false },
    { title: "Knives Out", year: 2019, genre: "Comedy", rating: 7.9, watched: true },
    { title: "Get Out", year: 2017, genre: "Thriller", rating: 7.7, watched: false },
    { title: "La La Land", year: 2016, genre: "Drama", rating: 8.0, watched: true },
];

console.log("StreamBox catalog loaded:", movies.length, "movies");

movies.forEach(movie => {
    console.log(movie.title);
});

const dramas = movies.filter(movie => movie.genre === "Drama");
console.log("Drama movies:", dramas);

const topRating = Math.max(...movies.map(movie => movie.rating));
const bestMovie = movies.find(movie => movie.rating === topRating);
console.log("Top pick:", bestMovie.title);

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");

if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
        navList.style.display = navList.style.display === "flex" ? "none" : "flex";
    });
}
