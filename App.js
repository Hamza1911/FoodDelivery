import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from "./Navigation/index"
import{Provider} from "react-redux"
import store from './store';

export default function App() {
  return (
   <Provider store={store}>
   <Navigation/>
   </Provider>
  );
}


