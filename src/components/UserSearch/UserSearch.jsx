import React,{useContext} from 'react'
import Context from "../../Context";
import Card from '../UI/Card/Card';
import {Link} from "react-router-dom";

export default function UserSearch() {
    const {userSearch} = useContext(Context);
    /* const {title,id,category,image,author,postedOn,preview } = userSearch; */
    const article = userSearch.map(data=>{
        return (
            <>
            <Card key={data.id}>
                <Link to={{pathname:`/article/${data.id}`, articleData:data}}>
                <div className="post-container">
                    <h2 className="post-title">{data.title}</h2>
                    <p className="author">{data.author} | {data.postedOn} | {data.category}</p>
                    <img className="post-image" src={data.image} alt="img"></img>
                    <h3 className="post-preview">{data.preview}</h3>    
                </div>
                </Link>
            </Card>
            </>
        )
    })

    return(
        <div>
            {article}
        </div>
    )
    
}
