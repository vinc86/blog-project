import React,{ useContext } from 'react'
import Context from "../../Context"

export default function NewestPosts() {

   const { articlesList } = useContext(Context)
   const postsData = articlesList.map(article=>article.postedOn)
   const sortPosts = postsData.sort((a,b)=>b.date - a.date);

console.log(sortPosts)
   
    return (
        <div>
            <div className="related-header">
                <h3>Newest Posts</h3>
                <i className="fas fa-hand-point-down"></i>
            </div>
        </div>
    )
}
