import { HStack, Image, Text, VStack, Box, Button } from "native-base"
import { useNavigation } from '@react-navigation/native';

const MoviesCard = props => {
  const {title, 
         image, 
         popularity, 
         releaseDate, 
         name, 
         navigation, 
         firstAirDate,
         id,
         isMovie,
         isSearch} = props

  return (
    <HStack width='100%' borderBottomWidth='.2' borderBottomColor='gray.400' mt='5' alignSelf='center'>
        <Box>
          <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w300${image}` }} size={'xl'} height={135} resizeMode='center' />
        </Box>
        <VStack >
          <Box alignItems='end' w="85%">
            <Text fontSize='sm' fontWeight='semibold' noOfLines='2'>
              {title ? title : name}
            </Text>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {releaseDate ? releaseDate : firstAirDate}</Text>
            <Button
                size='md' 
                mb='8' 
                px={3}
                onPress={() => {
                  if (isMovie) {
                    navigation.navigate('SingleMovie', {
                      title,
                      id,
                      isMovie
                    })
                  } else if (isSearch){
                    navigation.navigate('SearchDetails', {
                      title,
                      id,
                      isMovie
                    })
                  } else {
                    navigation.navigate('TvShowDetails', {
                      title,
                      id,
                      isMovie
                    })
                  }
                }}
            >
              More Details
            </Button>
          </Box>
        </VStack>
    </HStack >
  )
}
export default MoviesCard