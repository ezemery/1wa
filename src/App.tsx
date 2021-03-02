import {Home} from './components/Home'
import {Profile} from './components/Profile'
import {FetchStore} from './Context/store';
import {SearchStore} from './Context/store';
import {useFetch} from "./Hooks/fetch.hook";
import {useSearch} from "./Hooks/search.hook";

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const fetchContext = useFetch();
  const SearchContext = useSearch();

  // useEffect(()=> {
  //   window.localStorage.setItem("options", JSON.stringify(["Hello"]));
  // })

  const fetchData:() => void = () => {
    fetchContext.fetchDataAsync()
  }

  const searchData:(query:string) => void = (query) => {
    SearchContext.searchDataAsync(query)
  }

  return (
    
    <FetchStore.Provider value={fetchContext}>
      <SearchStore.Provider value={SearchContext}>
      <Switch>
          <Route exact path="/">
            <Home fetchData={fetchData}/>
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
