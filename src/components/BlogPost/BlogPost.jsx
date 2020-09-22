import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import "./blogPost.css"
import Card from '../UI/Card/Card'
import Context from "../../Context";

export default function BlogPost() {
    
    const {articlesList,savePinned, setSavePinned,pinned, setPinned} = useContext(Context);

    let buttonClass = "save-to-favorite-btn ";
    buttonClass += pinned && "crimson"; 

    const article = articlesList.map(article=>{
        
        const pinnArticle =(article)=>{ 
          setPinned(!pinned);
            if(pinned===false){
                alert("saved to favorite")
                setSavePinned([...savePinned,article])  
            }
        }
        
        
        return (
        <Card key={article.id}>
                <div className="post-container">
                    <div className="post-header">
                        <h2 className="post-title">{article.title}</h2>
                        <button onClick={()=>pinnArticle(article)} className={buttonClass}><i class="fas fa-bookmark"></i></button>
                    </div>
                    <p className="author">{article.author} | {article.postedOn} | {article.category}</p>
                    <Link to={{pathname:`/article/${article.id}`, articleData:article}}>
                        <img className="post-image" src={article.image} alt={article.image}></img>
                        <h3 className="post-preview">{article.preview}</h3>    
                    </Link>
                </div>
        </Card>
        )
    })
    

    return (
        
        <div className="blog-post">
          {article}
        </div> 
       
    )
}
