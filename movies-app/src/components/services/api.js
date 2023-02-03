import { APP_KEY} from '../config/api_config'

// Get Movies Function

export const getMovies = async movieValue => {

    const apiKey = APP_KEY
    const value = movieValue

    const getMoviesUrl = `https://api.themoviedb.org/3/movie/${value}?api_key=${apiKey}`

    console.log(getMoviesUrl)

    const res = await fetch(getMoviesUrl);
    const data = await res.json()
    const results = data.results

    return results
    
}

// Search function 

export const getSearchResults = async (searchValue, searchType) => {

    const apiKey = APP_KEY
    const searchURL = `https://api.themoviedb.org/3/search/${searchType}?api_key=${apiKey}&query=${searchValue}`

    console.log(searchURL)

    const res = await fetch(searchURL);
    const data = await res.json()
    const results = data.results

    console.log(data)

    return results

}

// Get TV shows function

export const getTvShows = async tvShowValue => {

    const apiKey = APP_KEY

    const getTvShowsURL = `https://api.themoviedb.org/3/tv/${tvShowValue}?api_key=${apiKey}`

    console.log(getTvShowsURL)

    const res = await fetch(getTvShowsURL);
    const data = await res.json()
    const results = data.results

    return results
}

// Get Details Function

export const getDetails = async (value, id) => {

    const apiKey = APP_KEY

    const getDetailsURL = `https://api.themoviedb.org/3/${value}/${id}?api_key=${apiKey}`

    const res = await fetch(getDetailsURL)
    const data = await res.json()
    const results = data

    return results
}