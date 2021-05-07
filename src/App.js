import './css/main.css';
import { BusinessSearchResults, Login, Signup, ForgotPassword} from './screens/Screens.tsx';
import { Footer } from './components/navigations/Footer';
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
  

  return (

    <div className="App">
      <header className="App-header">
        
      </header>
      <div className='content'>
        
        <Switch>
          <Route path='/signin' render={()=><Login /> } /> 
          <Route path='/signup' render={()=><Signup /> } /> 
          <Route path='/forgotpassword' render={()=><ForgotPassword /> } /> 
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
