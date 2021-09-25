const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector('.main')
const form = document.querySelector('.form')
const search = document.querySelector('.search')

getMovies(APIURL)

async function getMovies(url){
    const res = await fetch(url)
    const resData = await res.json()

    console.log(resData)
   showMovie(resData)
}

function showMovie(movies) {
    //clear main
    main.innerHTML = '';
     
    movies.results.forEach(movie => {
      
        const movieObj = document.createElement('div')
        movieObj.classList.add('movie')
        movieObj.innerHTML = `
        <img src="${IMGPATH + movie.poster_path}"
        alt="${movie.original_title}"
        />
        <div class="movie-info">
            <h3>${movie.original_title}</h3>
            <span style="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="overview">
        <h4>Overview</h4>
            ${movie.overview}
        </div>
        `
        
        main.appendChild(movieObj)
    })
}

function getClassByRate(rate) {

    if(rate < 5) {
        return "color:red"
    }
    else if (rate < 8) {
        return "color:yellow"
    }
    else {
        return "color:green"
    }

}

form.addEventListener('submit', e=> {
    e.preventDefault()

    const searchMovie = search.value
    
    if(searchMovie) {
        getMovies(SEARCHAPI + searchMovie)

        search.value = ''
    }

})

