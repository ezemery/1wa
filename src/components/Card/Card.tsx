import React from 'react'

interface AppProps {
        name: string,
        username: string,
        email: string ,
        desc:string ,
        image:string,
        profile_pic:string    
}

export const Card =  (props:AppProps) =>  {
        const {name, username, email, desc, image, profile_pic} = props;
        return (
        <div>
                <div className="rounded rounded-t-lg overflow-hidden shadow w-full my-3">
                        <img src={image} className="w-full h-32 object-cover" alt="card_header"/>
                        <div className="grid grid-cols-3 gap-2 px-5">
                                <div className="flex -mt-8 justify-center">
                                        <img src={profile_pic} className="w-28 h-28 object-cover rounded-full border-solid border-white border-2 -mt-3"  alt="profile_picture"/>		
                                </div>
                                <div className="col-span-2 pb-6 pt-2">
                                        <div className="flex justify-between">
                                        <h3 className="text-black text-lg font-bold font-sans">{name}</h3>
                                        <button type="submit" className="group relative w-32 flex justify-between py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-blue focus:outline-none focus:ring-2 focus:ring-offset-2">
                                                <span>Following</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                </span>
                                        </button>
                                        </div>
                                
                                        <span className="text-black text-sm font-light font-sans">@{username}</span>
                                        <p className="mt-2 font-sans font-light text-grey-dark">{desc}</p>
                                </div>
                        </div>
                        
                </div>
        </div>
)
}
