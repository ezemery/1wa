import {Home} from './components/Home'
import {Profile} from './components/Profile'
import {FetchStore} from './Context/store';
import {SearchStore} from './Context/store';
import {useFetch} from "./Hooks/fetch.hook";
import {useSearch} from "./Hooks/search.hook";
import {Data} from './Context/states/fetch'

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const fetchContext = useFetch();
  const SearchContext = useSearch();

  

  const fetchData:() => void = () => {
    fetchContext.fetchDataAsync()
  }

  const setData:(value:Data[], data:Data[]) => void = (value, data) => {
    fetchContext.setDataAsync(value, data)
  }

  const searchData:(query:string) => void = (query) => {
    SearchContext.searchDataAsync(query)
  }

  return (
    
    <FetchStore.Provider value={fetchContext}>
      <SearchStore.Provider value={SearchContext}>
      <Switch>
          <Route exact path="/">
            <Home fetchData={fetchData} setData={setData}/>
          </Route>
          <Route path="/profile/:query">
            <Profile searchData={searchData}/>
          </Route>
        </Switch>
        </SearchStore.Provider>
    </FetchStore.Provider>
   
   
  );
}

export default App;
