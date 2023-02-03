import { HStack, Image, Text, VStack, Box, Button } from "native-base"

const MoviesCard = props => {
  const {title, image, popularity, releaseDate, name} = props

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
            <Text>Release Date: {releaseDate}</Text>
            <Button size='md' mb='8' px={3}>
              More Details
            </Button>
          </Box>
        </VStack>
    </HStack >
  )
}
export default MoviesCard