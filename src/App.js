import './css/main.css';
import { BusinessSearchResults, Login} from './screens/Screens.tsx';
import { Footer } from './components/navigations/Footer';
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
  

  return (

    <div className="App">
      <header className="App-header">
        
      </header>
      <div className='content'>
        
        <Switch>
          <Route path='/login' render={()=><Login /> } /> 
          <Route path='/business-search' render={()=> <BusinessSearchResults />}/>  
          <Route path='/not-found'  />
          <Route path='/' exact />

          <Redirect to="/not-found" />
        </Switch>

      </div>
      {/* <BusinessSearchResults /> */}
      <Footer />    
    </div>
  );
}

export default App;
