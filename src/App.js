import {Provider} from 'react-redux';
import store from './store';
import {RestaurantScreen} from './pages/RestaurantScreen';

function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}

export default App;
