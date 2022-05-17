import { Provider } from 'react-redux';

import store from './redux/store';
import MainRoutes from './routes';
import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainRoutes />
      </div>
    </Provider>
  );
}

export default App;

