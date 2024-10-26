import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './TaskContext';
import TaskComponent from './components/TaskComponent';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store, persistor } from '../src/store/store.js'; 
import {Provider} from 'react-redux';
import ProductList from '../src/pages/ProductList.js';
import ProductDetails from '../src/pages/ProductDetails.js';
import Cart from '../src/pages/Cart.js';

const App = () => {
  return(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  </PersistGate>
</Provider>
  );
};


//       <TaskProvider>
// <div>
//   <h1>Task Manager</h1>
//   <TaskComponent/>
// </div>
//       </TaskProvider>

export default App;
