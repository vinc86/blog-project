import React, { useContext } from 'react'
import Card from '../UI/Card/Card'
import Sidebar from '../Sidebar/Sidebar';
import Context from "../../Context";
import {Link} from "react-router-dom";

export default function DisplayArticle(props) {
   const {articlesList} = useContext(Context); 
   const {title, author, id, postedOn,category,image,firstParagraph,secondParagraph } = props.location && props.location.articleData;
   const authorMatch = articlesList.filter(article=>article.author===author)
   const articlesId = authorMatch.filter(article=>article.id !== id)
   
   const authorRelated = articlesId.map(data=>{
       return(
           
        <Card key={data.id}>
            
            <Link to={{pathname:`/article/${data.id}`, articleData:data}}>
                <div className="related-container">
                    <h2 className="related-title">{data.title}</h2>
                    <img className="related-image" src={data.image} alt="img"></img>
                </div>
            </Link>
        </Card>
       )
   })
    return (
        <div className="container">
            
        <Card>
           <div className="post-container">
                <h2 className="post-title">{title}</h2>
                <p className="author">{author} | {postedOn} | {category}</p>
                <img className="post-image" src={image} alt="img"></img>
                <p className="paragraph">{firstParagraph}</p>
                <p className="paragraph">{secondParagraph}</p>
            </div>
        </Card>
        {
            authorRelated.length>0 ?(
                <Sidebar>
                    
                    <div className="related-header">
                        <h3>More from this author</h3>
                        <i class="fas fa-hand-point-down"></i>
                    </div>
                    
                    <div className="sidebar-related-posts">
                        {authorRelated}
                    </div>
                </Sidebar>

            ): <Sidebar></Sidebar>
        }
        
        </div>
    )
}
