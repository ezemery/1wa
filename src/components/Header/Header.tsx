import React,{useState} from 'react'
import logo from '../../logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {ThemeContext} from '../../Context/store';

export const Header = () =>  {
    const [profileVisible, setProfileVisible] = useState(false);
    const { theme, setTheme } = React.useContext(ThemeContext);
    console.log(theme)

    function isDark() {
      return theme === "dark"
    }
    const toggleProfile = () => {
        setProfileVisible(!profileVisible);
    }

    return( 
<div>
  <nav className="bg-primary shadow">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <LazyLoadImage className="h-8 object-cover" src={logo} alt="Workflow"/>
          </div>
        </div>

        <div className="sm:flex mt-10 mx-10 sm:mt-0 sm:mx-0 relative">
            <input type="text" placeholder="Search " className="text-secondary bg-secondary w-96 h-12 p-5 sm:mb-0 mb-5 focus:outline-none rounded-lg"/>
                <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
                    <svg className="text-secondary h-4 w-4 fill-current"  version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966"
                        width="512px" height="512px">
                        <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.3a;8,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
    
        </div>
        
        <div>

        </div>


        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
          
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox"  checked={isDark()} onChange={e => setTheme(e.target.checked ? "dark" : "light")}  name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-4 appearance-none cursor-pointer"/>
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>

        <div className="relative inline-flex">
          <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
          <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-primary hover:border-gray-400 focus:outline-none appearance-none">
            <option>choose language</option>
            <option>en</option>
            <option>fr</option>
          </select>
        </div>
            
            <div className="ml-3 relative"  onClick={()=>toggleProfile()}>
              <div>
                <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary" id="user-menu" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <LazyLoadImage className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile"/>
                </button>
              </div>
              <div className={` ${profileVisible ? `block`: `hidden`} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-primary ring-1 ring-black ring-opacity-5`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          
          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="md:hidden" id="mobile-menu">
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <LazyLoadImage className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile"/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-primary">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          <a href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-primary hover:bg-gray-700">Your Profile</a>

          <a href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-primary hover:bg-gray-700">Settings</a>

          <a href="/#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-primary hover:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>

 
</div>
  
  )
}
