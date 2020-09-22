import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import Card from '../UI/Card/Card'
import "./saved.css"
import Context from "../../Context";
import Empty from '../UI/EmptyList/Empty';
import Sidebar from '../Sidebar/Sidebar';





export default function Saved() {

    const{savePinned,pinned} = useContext(Context);
    const pinnedArticle = savePinned.map(data=>{
        return (
            <div className="margin">
            <Card key={data.id}>
            
            <Link to={{pathname:`/article/${data.id}`, articleData:data}}>
                <div className="pinned-container ">
                    <h2 className="pinned-title">{data.title}</h2>
                    <img className="pinned-image" src={data.image} alt="img"></img>
                </div>
            </Link>
        </Card>
        </div>
        )
    }) 

    return (
            <div className="container">
            <div className="saved-posts-container">
                <div className="pinned-posts">
                    {pinned?pinnedArticle:<Empty/>}
                </div>    
            </div>
            <Sidebar>
                {
                    pinned && (
                    <Card>
                        <p className="articles-count">Saved articles: <strong>{savePinned.length}</strong></p>
                    </Card>
                    )
                }
                
            </Sidebar>
            </div>
        
    )
}
