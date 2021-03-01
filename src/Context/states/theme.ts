export interface ThemeInterface {
    theme:string,
    setTheme:React.Dispatch<React.SetStateAction<string>>,
}

const ThemeState:ThemeInterface = {
    theme:'light',
    setTheme:()=> {},
}

export default ThemeState;