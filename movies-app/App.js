import { StatusBar } from 'expo-status-bar';
import Header from './src/components/layout/Header';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/components/tabs/AppTabs';



const App = () => {
  return ( 
      <NativeBaseProvider>
         <Header />
          <StatusBar style="light" />
          <NavigationContainer>
             <MyTabs />
          </NavigationContainer>
      </NativeBaseProvider>
  )
}


export default App
