import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

import ls from "local-storage";

//user defined packages or files
import Articles from "../components/Articles.js";



function MyArticles(props){

      const [myArticles,setMyArticles] = useState([]);
      const [fetchedMyArticlesFromDb,setFetchedMyArticlesFromDb] = useState(ls.get("fetchedOtherArticlesFromDb") || false);
      const [articleCreation,setArticleCreation] = useState(false);

      const [articleHeadingInput,setArticleHeadingInput] = useState("");
      const [articleDescriptionInput,setArticleDescriptionInput] = useState("");

  //fetch my articles
  const fetchMyArticlesFromDb = () => {
      axios.get("/articles").then((res) => {
        let articles_temp_var = [...res.data];
        let fetchArticlesFromDb_temp_var = true;

        setMyArticles(articles_temp_var);
        setFetchedMyArticlesFromDb(fetchArticlesFromDb_temp_var);

        //local storage
        // ls.set("articles", articles_temp_var);
        // ls.set("fetchedMyArticlesFromDb", fetchArticlesFromDb_temp_var);
      });
    };
  
  useEffect(fetchMyArticlesFromDb,[]);
 


const createArticle = (event) => {
    event.preventDefault();
    
    let formData = {
      heading: articleHeadingInput,
      description: articleDescriptionInput,
    };

    //this is to make it load faster instead of waiting for the response from the server!!so if anything
    //goes wrong then we can handle that in the post method callback

    let newlyCreatedArticle = { ...formData };
    let articles_temp_var = [...myArticles, newlyCreatedArticle];
    let cur_state = [...myArticles];

    setMyArticles(articles_temp_var);
    setArticleCreation(false);

    // ls.set("articles", articles_temp_var);
    // ls.set("showArticleCreationForm", false);
    // ls.set("showCreateArticleButton", true);

    // let acfcb = document.getElementById(
    //   "articles-article-creation-form-create-button"
    // );

    // if (acfcb) acfcb.style.opacity = 0.7;

    axios.post("/new-article", formData).then((res) => {

      newlyCreatedArticle = { ...res.data };
      articles_temp_var = [...cur_state, newlyCreatedArticle];

      if (res.data._id) {
          setMyArticles(articles_temp_var)
          setArticleCreation(false);
        // ls.set("articles", articles_temp_var);
        // ls.set("showArticleCreationForm", false);
        // ls.set("showCreateArticleButton", true);
      }

    });

  }; 


  const articleHeadingInputHandler = (e) => {
    e.preventDefault();
    setArticleHeadingInput(e.target.value);

  };
  const articleDescriptionInputHandler = (e) => {
     e.preventDefault();
     setArticleDescriptionInput(e.target.value);
  };

  const createArticleButtonHandler=(e)=>{
    e.preventDefault();
    // console.log(props.history.location.pathname="/c");
    props.history.push('/my-articles/create-article');
    setArticleCreation(true);
    // debugger;
  }

  const cancelButtonClickHandler = () => {
    
    setArticleCreation(false);
    // ls.set("showArticleCreationForm", false);
    // ls.set("showCreateArticleButton", true);
  }; 


  const articleCreationForm = () => {
    debugger;
    return (
      <form
        name="createArticle"
        onSubmit={(e) => {
          this.createArticle(e);
        }}
      >
        <div className="">
          <label htmlFor="heading">Name</label>
          <input
            type="text"
            className=""
            id="articleHeading"
            onChange={(e) => {
              articleHeadingInputHandler(e);
            }}
            name="heading"
            placeholder="heading"
            value={articleHeadingInput}
            required
          />
        </div>
        <div className="">
          <label htmlFor="description">Description</label>
          <textarea
            type="textarea"
            className=""
            id="description"
            onChange={(e) => {
              articleDescriptionInputHandler(e);
            }}
            name="description"
            placeholder="description"
            value={articleDescriptionInput}
            required
          />
        </div>
        <button
          type="submit"
          onClick={(e)=>{createArticle(e)}}
          id=""
          className=""
        >
          Create
        </button>

          <button
            onClick={cancelButtonClickHandler}
            className=""
          >
            Cancel
          </button>

      </form>
    );
  }; 

  return (

      <div className="MyArticles">
        <h1>my articles</h1>
        <div id="MyArticles__create-article">
          <button id="MyArticles__create-article-button" onClick={(e)=>createArticleButtonHandler(e)}>Create Article</button>
        </div>

        {
          articleCreation
          ?
          articleCreationForm()
          :
          <Articles articles={myArticles}/>
        }
        
      </div>

    );

  
}


export default MyArticles;
