import {createContext} from 'react';
import FetchState from "./states/fetch";
import ThemeState from "./states/theme";
import SearchState from "./states/search";
export const FetchStore = createContext(FetchState);
export const ThemeContext = createContext(ThemeState);
export const SearchStore = createContext(SearchState);