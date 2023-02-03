import { VStack, Container, Center, Box, Text } from "native-base"
import { useState } from "react"
import SearchForm from "../forms/SearchForm"
import Loading from "../layout/Loading"
import MoviesList from "../lists/MoviesList"
import { getSearchResults } from "../services/api"


const SearchContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [searchType, setSearchType] = useState(null)
  const [searchValue, setSearchValue] = useState(null)

  const handleInputChange = value => {
    setSearchValue(value)
 }
 
  const handleOnValueChange = value => {
    setSearchType(value)
  }

  console.log(searchValue)
  console.log(searchType)

  const fetchSearchResults = () => {
      setIsLoading(true)
      getSearchResults(searchValue, searchType).then(
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
    <Container width='100%' marginX='9' centerContent>
      <Center>
        <SearchForm 
          onInputChange={handleInputChange}
          onValueChange={handleOnValueChange}
          fetchSearchResults={fetchSearchResults}
        />
        {
          isLoading ? <Loading /> :
          results.length > 0 ? <MoviesList results={results}/> :
          <Box>
            <Center>
              <Text fontWeight='bold' fontSize='xl' mt='40'>
                Please initiate a search
              </Text>
            </Center>
          </Box>
        }
      </Center>
    </Container>
  )



}
export default SearchContainer