import React ,{useState} from 'react';
import{BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './components/HomePage/Home';
import Contact from './components/Contact/Contact';
import Nav from './components/Navigation/Nav';
import Blog from './components/BlogPage/Blog';
import Saved from './components/Saved/Saved';
/* import articles from "./articles.json"; */
import articles from "./articles";
import Context from "./Context";
import DisplayArticle from './components/BlogPost/DisplayArticle';
import UserSearch from './components/UserSearch/UserSearch';


function App() {
  const [articlesList, setArticlesList] = useState([...articles])
  const [search, setSearch] = useState(false);
  const [searchCategory, setSearchCategory] = useState("")
  const [userSearch, setUserSearch] = useState([]);
  const [pinned, setPinned] = useState(false);
  const [savePinned, setSavePinned] = useState([])
  const [newArticle, setNewArticle] =useState({
    "id":"",
    "title": "",
    "author": "",
    "category": "",
    "preview": "",
    "image":"",
    "firstParagraph": "",
    "secondParagraph": "",
    "postedOn":""
  })

  const saveNewArticle =(e)=>{
    e.preventDefault();
   setArticlesList([...articlesList,{
       "id": new Date().toDateString(),
       "title": newArticle.title,
       "author": newArticle.author,
       "category": newArticle.category,
       "image": "./images/"+newArticle.image.name,
       "firstParagraph": newArticle.firstParagraph,
       "preview": newArticle.preview,
       "postedOn": new Date().toLocaleDateString()
   }])
  
}

const submitSearch=(e)=>{
  e.preventDefault();
  /* const searchForAuthor = articlesList.filter(article=>article.author.startsWith(searchCategory)); */
  const searchForCategory = articlesList.filter(article=> article.category.startsWith(searchCategory));
  setUserSearch(searchForCategory);
}
  return (
    <div className="main-container">
      <Context.Provider value={{savePinned, setSavePinned,pinned, setPinned,userSearch,articlesList,setArticlesList,newArticle,setNewArticle,saveNewArticle, search, setSearch,searchCategory, setSearchCategory, submitSearch}}>
        <Router>
          <Nav />
          {userSearch.length !== 0? <Redirect path="/*" to ="/userSearch"/>: null}
            <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/home" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/saved" exact component={Saved} />
            <Route path="/contact" component={Contact} />
            <Route path="/article/:article" exact component={DisplayArticle} />
            <Route path="/userSearch" exact component={UserSearch} />
          </Switch>
        </Router>
      </Context.Provider>  
    </div>
  );
}

export default App;
