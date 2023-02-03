import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TVShowScreen from '../screens/TVShowScreen';
import TvShowDetailsScreen from '../screens/TvShowDetailsScreen';
import SingleScreen from '../screens/SingleScreen';

const Stack = createNativeStackNavigator();

const MoviesStack = ( route ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="TvShowsList"
                component={TVShowScreen} 
                options={{  headerShown: false }} 
            />
            <Stack.Screen
                name="TvShowDetails"
                component={TvShowDetailsScreen}
                options={({route}) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    )
}

export default MoviesStack