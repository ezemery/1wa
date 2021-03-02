import {useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom';
import {Header} from '../Header';
import { useTranslation } from "react-i18next";
import {SearchStore} from '../../Context/store';

interface ParamTypes {
    query: string
  }

interface AppProps {
    searchData: (query:string) => void,
}

export const  Profile = (props:AppProps) => {
    const {searchData} = props;
    const {query} = useParams<ParamTypes>();
    const { t } = useTranslation();
    const { data } = useContext(SearchStore);
    console.log(data)
    useEffect(() => {
        searchData(query)
          return () => {}
           // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [query])

    return (
        <div>
            <Header/>
            <header className="bg-secondary">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-primary">
                {t('friend_details')}
                </h1>
                </div>
            </header>
            <main className="bg-secondary min-h-screen">
                <div className=" max-w-7xl mx-auto py-6 sm:px-6  lg:px-8">
                    <div className="bg-primary shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-primary">
                        {t('information')}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-secondary">
                        {t('details')}
                        </p>
                    </div>
                    <div className="border-t border-secondary">
                        <dl>
                        <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-secondary">
                            {t('name')}
                            </dt>
                            <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                            {data.length > 0 && data[0].name}
                            </dd>
                        </div>
                        <div className="bg-primary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-secondary">
                            {t('username')}
                            </dt>
                            <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                            {data.length > 0 && data[0].username}
                            </dd>
                        </div>
                        <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-secondary">
                            {t('email')}
                            </dt>
                            <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                            {data.length > 0 && data[0].email}
                            </dd>
                        </div>
                        <div className="bg-primary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-secondary">
                            {t('about')}
                            </dt>
                            <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                            {data.length > 0 && data[0].desc}
                            </dd>
                        </div>
                        </dl>
                    </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
