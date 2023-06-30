import { View } from 'react-native';
import {Provider} from 'react-redux'
import MainComponent from './Main';
import {store} from './store/store'

export default function App() {
  return (
    <Provider store={store} >
      <View style={{backgroundColor : "#373F51" , alignItems : "center"}}>
        <MainComponent />
      </View>
    </Provider>
  );
}
