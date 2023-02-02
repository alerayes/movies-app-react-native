import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import TVShowsContainer from '../containers/TVShowsContainer';
import MoviesScreen from '../screens/MoviesScreen';
// import SearchScreen from '../screens/SearchScreen';


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
      {/* <Tab.Screen 
        name="Search" 
        // component={SearchScreen}
      />
      <Tab.Screen 
        name="TV Show" 
        // component={TVShowsContainer}
      /> */}
    </Tab.Navigator>
  );
}