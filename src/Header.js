import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  var username = ' '

  //var atIndex = user.email.indexOf('@');
  
  var atIndex = !user ? 'Guest' : user.email.indexOf('@');
 // var username = user.email.substring(0, atIndex)
  var username = !user ? 'Guest' : user.email.substring(0, atIndex);

  username = username.charAt(0).toUpperCase()+ username.slice(1)
  

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className = "header">
        <Link to="/">
          <img className = "header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
         
        
        </Link>
        

        <div className="header__search">
            <input className='header_searchInput' type='text'/>
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
          <Link to={!user && '/login'}>
            
            <div onClick={handleAuthenticaton} className="header__option">
               <span className='header_optionLineOne'>
                
               Hello {!username ? 'Guest' : username}
               </span>
               <span className='header_optionLineTwo'>
                 {user ? 'Sign Out' : 'Sign In'}
               </span>
            </div>
          </Link>

            <div className="header__option">
            <span className='header_optionLineOne'>
                Returns
               </span>
               <span className='header_optionLineTwo'>
                & Orders
               </span>
               
            </div>

            <div className="header__option">
            <span className='header_optionLineOne'>
                Your
               </span>
               <span className='header_optionLineTwo'>
                Prime
               </span>
               
            </div>

            <Link to='/checkout'>
              <div className='header__basket'>
                <ShoppingCartIcon />
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>

              </div>
        

            </Link>

            
        </div>
    </div>
  )
}

export default Header