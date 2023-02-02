import { HStack, Image, Text, VStack, Box, Button } from "native-base"

const MoviesCard = props => {
  const {title, image, popularity, releaseDate} = props

  return (
    <HStack width='100%' borderBottomWidth='.2' borderBottomColor='gray.400' mt='5' alignSelf='center'>
        <Box>
          <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w300${image}` }} size={'xl'} maxH={110} resizeMode='center' />
        </Box>
        <VStack >
          <Box alignItems='end'>
            <Text fontSize='sm' fontWeight='semibold'>
              {title}
            </Text>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {releaseDate}</Text>
            <Button width='90%' fontWeight='bold'>
              More Details
            </Button>
          </Box>
        </VStack>
    </HStack >
  )
}
export default MoviesCard