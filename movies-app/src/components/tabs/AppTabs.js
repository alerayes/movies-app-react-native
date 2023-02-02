import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TVShowContainer from '../containers/TVShowContainer';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'regular',
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'hotpink'
        }
      }}
    >
      <Tab.Screen 
        name="Movies" 
        component={MoviesScreen}
        />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
      />
      <Tab.Screen 
        name="TV Show" 
        component={TVShowContainer}
      /> 
    </Tab.Navigator>
  );
}