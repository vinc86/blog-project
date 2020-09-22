import React from 'react'
import"./blog.css"
import BlogPost from '../BlogPost/BlogPost'
import Sidebar from '../Sidebar/Sidebar'

export default function Blog() {
    return (
        <section className="container">
            <BlogPost/>
            <Sidebar />
        </section>
    )
}
