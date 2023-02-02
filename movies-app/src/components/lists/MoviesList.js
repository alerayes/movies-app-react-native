import { FlatList } from "native-base"
import { APP_KEY } from "../config/api_config"
import MoviesCard from "../listItems/MoviesCard"

const MoviesList = ({movies}) => {

  
    const getImage = (id) => {

        const imageURL = `https://api.themoviedb.org/3/movie${id}/images?api_key=${APP_KEY}`
        
        return imageURL

    }

    return (
    <FlatList
        data={movies}
        renderItem={({item}) => (
            <MoviesCard
                title={item.original_title} 
                image={item.poster_path}
                popularity={item.popularity}
                releaseDate={item.release_date}
            />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} 
    />
  )
}

export default MoviesList
