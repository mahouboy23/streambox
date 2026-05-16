const movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        watched: true,
        poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        description: "A thief enters dreams to plant one powerful idea."
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        watched: true,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A hacker discovers that his world is not what it seems."
    },
    {
        title: "Parasite",
        year: 2019,
        genre: "Drama",
        rating: 8.6,
        watched: false,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "Two families become connected by secrets and survival."
    },
    {
        title: "Knives Out",
        year: 2019,
        genre: "Comedy",
        rating: 7.9,
        watched: true,
        poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        description: "A detective investigates a strange family mystery."
    },
    {
        title: "Get Out",
        year: 2017,
        genre: "Thriller",
        rating: 7.7,
        watched: false,
        poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        description: "A weekend visit turns into something much darker."
    },
    {
        title: "La La Land",
        year: 2016,
        genre: "Drama",
        rating: 8.0,
        watched: true,
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        description: "A musician and an actor chase love and their dreams."
    },
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

const catalog = document.querySelector("#movie-catalog");

function createMovieCard(movie) {
    const card = document.createElement("article");
    card.classList.add("card");

    const poster = document.createElement("img");
    poster.src = movie.poster;
    poster.alt = movie.title;

    const title = document.createElement("h4");
    title.textContent = movie.title;

    const details = document.createElement("p");
    details.textContent = `${movie.year} - ${movie.genre} - ${movie.rating}/10`;

    const description = document.createElement("p");
    description.textContent = movie.description;

    const watched = document.createElement("p");
    watched.classList.add("watch-status");
    watched.textContent = movie.watched ? "Watched" : "Not watched yet";

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(details);
    card.appendChild(description);
    card.appendChild(watched);

    return card;
}

function showMovies() {
    const genres = [];

    movies.forEach(movie => {
        if (!genres.includes(movie.genre)) {
            genres.push(movie.genre);
        }
    });

    genres.forEach(genre => {
        const genreSection = document.createElement("section");
        genreSection.classList.add("genre-section");

        const heading = document.createElement("h3");
        heading.textContent = genre;

        const movieGrid = document.createElement("div");
        movieGrid.classList.add("movie-grid");

        const genreMovies = movies.filter(movie => movie.genre === genre);

        genreMovies.forEach(movie => {
            movieGrid.appendChild(createMovieCard(movie));
        });

        genreSection.appendChild(heading);
        genreSection.appendChild(movieGrid);
        catalog.appendChild(genreSection);
    });
}

if (catalog) {
    showMovies();
}

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");

if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
        navList.style.display = navList.style.display === "flex" ? "none" : "flex";
    });
}
