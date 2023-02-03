import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MovieStack from './MoviesStack';
import SearchStack from './SearchStack';
import TvShowStack from './TvShowStack';

const Tab = createMaterialTopTabNavigator();

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'regular'
          },
          tabBarStyle:{
            backgroundColor: '#fff'
          },
          tabBarIndicatorStyle:{
            backgroundColor: 'hotpink'
          }
        }} 
      >
        <Tab.Screen 
          name='Movies'
          component={MovieStack}
          options={{
            headerShown: false
          }}
        />
        <Tab.Screen 
          name='Search'
          component={SearchStack}
        />
        <Tab.Screen 
          name='TV Show'
          component={TvShowStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppTabs