export interface Data {
    id: number,
    name: string,
    username: string,
    email: string,
    desc:string,
    image:string,
    profile_pic:string,
    checked:boolean  
}

export interface SearchInterface {
    data:Data[],
    error:boolean,
    isLoading:boolean,
}

const SearchState:SearchInterface = {
    data:[],
    error:false,
    isLoading: false,
}

export default SearchState;