import React , { useContext } from 'react'
import {NavLink, Link} from "react-router-dom";
import Context from "../../Context";
import "./nav.css"


const Nav=()=> {

    const {submitSearch, setSearchCategory,search, setSearch} = useContext(Context)
    
    const openSearch =()=>{
        setSearch(!search);
    }

    let searchClass = "search-input ";
    searchClass += search ? "active": "";

    return (
        
        <nav>
            <h1 className="heading">The Tech Journal</h1>
            <div className="heading-bottom">
                <div className="nav-links">
                    <ul>
                        {/* <li key="blog" className="list-items"><NavLink activeClassName="link-active" ><NavLink></li> */}
                        <li key="post" className="list-items"><NavLink activeClassName="link-active" exact to="/blog">Blog</NavLink></li>
                        <li key="saved" className="list-items"><NavLink activeClassName="link-active" exact to="/saved">Saved</NavLink></li>
                        {/* <li key="contact" className="list-items"><NavLink activeClassName="link-active" exact to="/contact">Contact</NavLink></li> */}
                    </ul>
                </div>
                <div className="heading-bottom-right">
                    <form onSubmit={(e)=>submitSearch(e)} className="search-panel">
                        <input onChange={(e)=>setSearchCategory(e.target.value)} type="text" className={searchClass} placeholder="Search category... (e.g javascript / react...)"/>
                        <button onClick={openSearch}><i className="fas fa-search"></i></button>
                    </form>
                    <div className="user-icon">
                        <Link exact to="/home"><i className="fas fa-user-tie"></i></Link>
                        <div className="point"></div>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav;