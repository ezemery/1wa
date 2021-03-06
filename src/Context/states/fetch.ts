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

export interface FetchInterface {
    data:Data[],
    error:boolean,
    isLoading:boolean,
}

const FetchState:FetchInterface = {
    data:[],
    error:false,
    isLoading: false,
}

export default FetchState;