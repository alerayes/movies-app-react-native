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
    
    
    // console.log(results)
    // console.log('PAGES', data.page)
    // console.log(data.results[0])
    // console.log(data.dates)

   
}