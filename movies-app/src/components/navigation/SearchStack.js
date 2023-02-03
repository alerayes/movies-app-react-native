import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchDetailsScreen from '../screens/SearchDetailsScreen';
import SearchScreen from '../screens/SearchScreen';


const Stack = createNativeStackNavigator();

const MoviesStack = ( route ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SearchList"
                component={SearchScreen} 
                options={{  headerShown: false }} 
            />
            <Stack.Screen
                name="SearchDetails"
                component={SearchDetailsScreen}
                options={({route}) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    )
}

export default MoviesStack