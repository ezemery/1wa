 
import {useContext,useEffect} from 'react'
import {Header} from '../Header'
import {FetchStore} from '../../Context/store';
import { useTranslation } from "react-i18next";

import {Card} from '../Card'

interface AppProps {
    fetchData: () => void,
}

export const Home = (props:AppProps) => {
    const { t } = useTranslation();
    const { data } = useContext(FetchStore);
    const {fetchData} = props;

   
    useEffect(() => {
        fetchData();
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

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
                <div className=" max-w-7xl mx-auto py-6 sm:px-6  lg:px-8">
                <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {data &&  data.map((value,indx) =>  {
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
                        />
                    })}
                  
                </div>
                </div>
            </main>
        
        </div>
    )
}
