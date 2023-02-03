import { Container, Text } from 'native-base'
import { useState } from "react"
import TvShowForm from '../forms/TvShowForm'
import Loading from "../layout/Loading"
import { getTvShows } from '../services/api'
import MoviesList from '../lists/MoviesList'

const TVShowContainer = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [tvShowValue, setTvShowValue] = useState(null)

  const fetchTvShows = value => {
    console.log('itworks')

    setIsLoading(true)
    getTvShows(value).then(
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

  console.log(results)

  return(
    <Container width='100%' marginX='3' centerContent>
        <TvShowForm  fetchTvShows={fetchTvShows}/>
        { isLoading ? <Loading/> : <MoviesList results={results} navigation={navigation} /> } 
    </Container>

  )


}
export default TVShowContainer