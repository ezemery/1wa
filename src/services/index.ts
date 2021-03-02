import lists from '../friendsList.json'
export const getFriends =  () => {
    return lists;
}

export const searchFriends = (search:string) => {
    return lists.filter((item) => {
        return item.username  === search;
    })
}