import { Box, Container, Heading, Text, VStack, Image } from "native-base"
import { useEffect, useState } from "react"
import { getDetails } from "../services/api"


const SingleContainer = ({navigation, route}) => {
  const {title, id, isMovie } = route.params

  const [details, setDetails] = useState({})

  const value = isMovie ? 'movie' : 'tv'

 
  useEffect(() => {
    getDetails(value, id).then(
      details => {
        setDetails(details)
      },
      error => {
        alert('Error', `Something went wrong ${error}`)
        console.log(error)
      }
    )
  }, [])
      
  console.log(details)
  console.log(details.adult)


  return (
    <Container width='100%' marginX='auto'  centerContent>
      <Heading textAlign='center' fontSize='xl' mt='6'>
        {title}
      </Heading>
      <Box px={20}>
          <Image 
            alt={title} 
            source={{ uri: `https://image.tmdb.org/t/p/w300${details.poster_path}` }} 
            size={'2xl'} 
            height={200}
            mt={5}
             />
        </Box>
        <VStack>
          <Text textAlign='center' mt='5'>
            {details.overview}
          </Text>
          <Text mt='12' fontSize='xs' textAlign='center'>
            Popularity: {details.popularity} | Release Date: {details.release_date ? details.release_date : details.first_air_date}
          </Text>
        </VStack>
    </Container>
  )
}

export default SingleContainer
