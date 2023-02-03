import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from '../screens/MoviesScreen';
import MovieScreen from '../screens/MovieScreen';

const Stack = createNativeStackNavigator();

const MoviesStack = ( route ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MoviesList"
                component={MoviesScreen} 
                options={{  headerShown: false }} 
            />
            <Stack.Screen
                name="SingleMovie"
                component={MovieScreen}
                options={({route}) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    )
}

export default MoviesStack