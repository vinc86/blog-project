import React,{ useContext, useState} from 'react'
import "./home.css";
import Context from "../../Context";
import Sidebar from '../Sidebar/Sidebar';
import Card from '../UI/Card/Card';

const Home=()=> {
    
    const [author, setAuthor]= useState(false)
    const [category, setCategory]= useState(false)
    const [description, setDescription]= useState(false);
    const [image, setImage]= useState(false);
    const [openFeatures, setOpenFeatures] = useState(false);

    const {newArticle, setNewArticle, saveNewArticle }= useContext(Context);
  
    const features =()=>{
        let featuresMenu = "add-features ";
        featuresMenu += openFeatures && "scale";
        return(
            <div className={featuresMenu}>
                <button className="features-btn" onClick={()=>setAuthor(!author)}><i className="fas fa-feather"></i> </button>
                <button className="features-btn" onClick={()=>setCategory(!category)}><i className="fas fa-layer-group"></i></button>
                <button className="features-btn" onClick={()=>setDescription(!description)}><i className="far fa-list-alt"></i></button>
                <label htmlFor="file">
                <i className="fas fa-camera-retro features-btn"></i>
                        <input onChange={(e)=>setNewArticle({...newArticle, "image": e.target.files[0]})} type="file" id="file" name="image"/>
                </label> 
            </div>
        )
    }
    

    return (
        
        <section className="container">
            <Card>
                <form onSubmit={saveNewArticle} className="form-container">
                    <input onChange={(e)=>setNewArticle({...newArticle, "title": e.target.value})} type="text" name="title" placeholder="Title..."/>
                    <div className="menu-container">
                    <button onClick={()=>setOpenFeatures(!openFeatures)} className="features-menu"><i className="fas fa-plus-circle"></i></button>
                        <div className="sub-container">
                            {console.log(features)}
                        </div>
                    </div>
                    {author &&<input onChange={(e)=>setNewArticle({...newArticle, "author": e.target.value})} type="text" name="author" placeholder="Author..."/>}
                    {category && <input onChange={(e)=>setNewArticle({...newArticle, "category": e.target.value.toLowerCase()})} type="text" name="category" placeholder="Category (e.g. Javascript, React..)"/>}
                    {description && <input onChange={(e)=>setNewArticle({...newArticle, "preview": e.target.value})} type="text" name="preview" placeholder="Description..."/>}
                    <textarea onChange={(e)=>setNewArticle({...newArticle, "firstParagraph": e.target.value})} name="paragraph" placeholder="Tell your story..."></textarea>
                    <button type="submit">Save</button>
                </form>
                </Card>
                <Sidebar />
                </section>
        
    )
}

export default Home;