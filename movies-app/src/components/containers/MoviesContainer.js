import { Center, Container, Text } from "native-base"
import { useState } from "react"
import DropdownForm from "../forms/DropdownForm"
import Loading from "../layout/Loading"
import MoviesList from "../lists/MoviesList"
import { getMovies } from "../services/api"


const MoviesContainer = ({navigation}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    const [movieValue, setMovieValue] = useState(null)

    const fetchMovies = value => {
        setIsLoading(true)
        getMovies(value).then(
            results => {
                setResults(results)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong ${error}`)
                console.log(error)
            }
        )
    }


    return (
        <Container width='100%' marginX='3' centerContent>
            <DropdownForm fetchMovies={fetchMovies} />

         
            { isLoading ? <Loading/> : <MoviesList results={results} navigation={navigation} /> } 
        </Container>
    )
}
export default MoviesContainer