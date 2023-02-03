import { StatusBar } from 'expo-status-bar';
import Header from './src/components/layout/Header';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/components/navigation/AppTabs';




const App = () => {
  return ( 
    <NativeBaseProvider>
      <Header />
      <AppTabs />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}


export default App
