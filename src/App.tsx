import React,{ useEffect ,useState} from 'react';
import {Home} from './components/Home'
import {Profile} from './components/Profile'
import {FetchStore} from './Context/store';
import {useFetch} from "./Hooks/fetch.hook";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const fetchContext = useFetch();

  // useEffect(()=> {
  //   window.localStorage.setItem("options", JSON.stringify(["Hello"]));
  // })

  const fetchData:() => void = () => {
    fetchContext.fetchDataAsync()
  }
  
  return (
    <FetchStore.Provider value={fetchContext}>
      <Switch>
          <Route exact path="/">
            <Home fetchData={fetchData}/>
          </Route>
          <Route path="/profile/:query">
            <Profile/>
          </Route>
        </Switch>
      
    </FetchStore.Provider>
   
  );
}

export default App;
