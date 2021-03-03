 
import {useContext,useEffect, useState} from 'react'
import {Header} from '../Header'
import {FetchStore} from '../../Context/store';
import { useTranslation } from "react-i18next";
import {Data} from '../../Context/states/fetch'

import {Card} from '../Card'

interface AppProps {
    fetchData: () => void,
    setData:(value:Data[], data:Data[])=>void,
}

export const Home = (props:AppProps) => {
    const { t } = useTranslation();
    const { data } = useContext(FetchStore);
    const  [state, updateState] = useState<Data[]>([])
    const {fetchData,setData} = props;

    useEffect(()=> {
        fetchData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

  
   useEffect(()=> {
    const options  = window.localStorage.getItem("friendsList");
    console.log("state",data)
    console.log("data",data)
    if(options){
        const parse:Data[] = JSON.parse(options)
        if(parse.length > 0){
            updateState(parse);
        }else{
            updateState(data);
            window.localStorage.setItem("friendsList", JSON.stringify(data));
        }
    }else{
        updateState(data);
         window.localStorage.setItem("friendsList", JSON.stringify(data));
    }
  },[data])


    const setChecked = (value:string)=> {
        const filter = data.filter((item) => {
            return item.username  === value;
        })
        filter[0].checked = !filter[0].checked;
        updateState([...data,...filter])
        setData(filter, data)
    }
    return (
        <div className="App">
            <Header/>
            <header className="bg-secondary">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-primary">
                {t('friends_list')}
                </h1>
                </div>
            </header>
            <main className="bg-secondary min-h-screen">
                <div className="container px-4 max-w-7xl mx-auto py-6 sm:px-6  lg:px-8">
                <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {state &&  state.map((value,indx) =>  {
                        const {name, username, email, desc, image, profile_pic,checked} = value;
                        return <Card 
                        key={indx} 
                        name={name}  
                        username={username} 
                        email={email} 
                        desc={desc} 
                        image={image} 
                        profile_pic={profile_pic} 
                        checked={checked}
                        setChecked={setChecked}
                        />
                    })}
                  
                </div>
                </div>
            </main>
        
        </div>
    )
}
