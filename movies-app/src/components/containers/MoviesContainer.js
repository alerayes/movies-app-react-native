import { Center, Container, Text } from "native-base"
import { useState } from "react"
import DropdownForm from "../forms/DropdownForm"
import Loading from "../layout/Loading"
import MoviesList from "../lists/MoviesList"
import { getMovies } from "../services/api"


const MoviesContainer = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [movieValue, setMovieValue] = useState(null)

    const fetchMovies = value => {
        setIsLoading(true)
        getMovies(value).then(
            movies => {
                setMovies(movies)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong ${error}`)
                console.log(error)
            }
        )
    }


    return (
        <Container width='100%' marginX='5' centerContent>
            <DropdownForm fetchMovies={fetchMovies} />

         
            { isLoading ? <Loading/> : <MoviesList movies={movies} /> } 
        </Container>
    )
}
export default MoviesContainer