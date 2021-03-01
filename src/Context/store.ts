import {createContext} from 'react';
import FetchState from "./states/fetch";
import ThemeState from "./states/theme";
export const FetchStore = createContext(FetchState);
export const ThemeContext = createContext(ThemeState);