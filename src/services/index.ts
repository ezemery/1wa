import lists from '../friendsList.json';
import  {Data} from '../Context/states/fetch'
export const getFriends =  () => {
    return lists;
    
}

export const setFriends =  (data:Data[]) => {
    window.localStorage.setItem("friendsList", JSON.stringify(data));
    console.log(data)
    return data;
    
}

export const searchFriends = (search:string) => {
    return lists.filter((item) => {
        return item.username  === search;
    })
}

  // eslint-disable-next-line
            