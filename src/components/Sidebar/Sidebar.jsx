import React from 'react'
import "./sidebar.css"
import Social from '../UI/SocialMedia/Social'
import NewestPosts from './NewestPosts'

export default function Sidebar(props) {
    return (
        <div style={{marginLeft: "10px"}} className="side-bar">
            {props.children}
            <Social />
           {/*  <NewestPosts /> */}
        </div>
    )
}
