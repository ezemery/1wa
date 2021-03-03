import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface AppProps {
        name: string,
        username: string,
        email: string ,
        desc:string ,
        image:string,
        profile_pic:string,
        checked:boolean,
        setChecked:(value:string)=>void 
}

export const Card =  (props:AppProps) =>  {
        const {name, username, desc, image, profile_pic, checked, setChecked} = props;
        const { t } = useTranslation();
        let history = useHistory();
        const switchRoute  = (param:string) =>{
                history.push(`/profile/${param}`)
        }
        return (
        <div>
                <div className="bg-primary rounded rounded-t-lg overflow-hidden shadow w-full my-3 cursor-pointer" >
                        <LazyLoadImage effect="blur" src={image} className="w-full h-32 object-cover" alt="card_header" onClick={()=>switchRoute(username)}/>
                        <div className="grid grid-cols-3 gap-2 px-5">
                                <div className="flex -mt-8 justify-center">
                                        <LazyLoadImage effect="blur" src={profile_pic} className="w-28 h-28 object-cover rounded-full border-solid border-secondary border-2 -mt-3"  alt="profile_picture" onClick={()=>switchRoute(username)}/>		
                                </div>
                                <div className="col-span-2 pb-6 pt-2">
                                        <div className="flex justify-between">
                                        <h4 className="text-primary text-lg font-bold font-sans" onClick={()=>switchRoute(username)}>{name}</h4>
                                        <button type="submit" onClick={()=>setChecked(username)}className={checked  ? `group relative w-32 flex justify-between py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2`:
                                        `group relative w-32 flex justify-center py-2 px-4 border border-accent text-sm font-medium rounded-md text-accent bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2`}>
                                                <span>{checked? `${t('Following')}`:`${t('Follow')}`}</span>
                                                {checked && <span className="flex justify-center items-center">
                                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                </span>}
                                        </button>
                                        </div>
                                
                                        <span className="text-secondary text-sm font-light font-sans">@{username}</span>
                                        <p className="mt-2 font-sans font-light text-secondary">{desc}</p>
                                </div>
                        </div>
                        
                </div>
        </div>
)
}
