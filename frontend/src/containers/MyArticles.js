import React,{useState,useEffect,useContext} from 'react';
import axios from "axios";
import {Link,Route,useHistory,useRouteMatch} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import ls from "local-storage";

//components
import Articles from "../components/Articles.js";
import Tag from "../components/Tag.js";


//context
import {AppContext} from '../AppContext.js';




function MyArticles(props){

  let history=useHistory();

  const appCtx = useContext(AppContext);
  const [myArticles,setMyArticles] = useState([]);
  const [fetchedMyArticlesFromDb,setFetchedMyArticlesFromDb] = useState(ls.get("fetchedOtherArticlesFromDb") || false);
  const [articleCreation,setArticleCreation] = useState(false);

  const [articleHeadingInput,setArticleHeadingInput] = useState("");
  const [articleDescriptionInput,setArticleDescriptionInput] = useState("");
  const [articleTagsInput,setArticleTagsInput] = useState([]);

  
  let { path, url } = useRouteMatch();
  
  //fetch my articles
  const fetchMyArticlesFromDb = () => {
      axios.get("/user/my-articles").then((res) => {
        console.log(res.data);
        if(res.data!=false){
          let articles_temp_var = [...res.data];
          let fetchArticlesFromDb_temp_var = true;
  
          appCtx.articles.set(articles_temp_var);
          setMyArticles(articles_temp_var);
          setFetchedMyArticlesFromDb(fetchArticlesFromDb_temp_var);
          console.log(articles_temp_var);

        }

      });
    
    };

    const fetchTagsFromDb = () =>{
      axios.get("/topic/get-all-tags").then(res=>{
        const tags = [...res.data];
        appCtx.tags.set(tags);

      }); 

    }
  
  

   useEffect(fetchMyArticlesFromDb,[]);
   useEffect(fetchTagsFromDb,[]);

  // only run when articles change
  //  useEffect(fetchMyArticlesFromDb,[appCtx.articles.get]);
   
 


  const createArticle = (event) => {
      event.preventDefault();
      
      let formData = {
        heading: articleHeadingInput,
        description: articleDescriptionInput,
        tags: articleTagsInput
      };

      //this is to make it load faster instead of waiting for the response from the server!!so if anything
      //goes wrong then we can handle that in the post method callback

      let newlyCreatedArticle = { ...formData };
      let articles_temp_var = [...appCtx.articles.get, newlyCreatedArticle];
      let cur_state = [...appCtx.articles.get];

      appCtx.articles.set(articles_temp_var);
      setArticleCreation(false);
      history.goBack();

      // ls.set("articles", articles_temp_var);
      // ls.set("showArticleCreationForm", false);
      // ls.set("showCreateArticleButton", true);

      // let acfcb = document.getElementById(
      //   "articles-article-creation-form-create-button"
      // );

      // if (acfcb) acfcb.style.opacity = 0.7;

      axios.post("/user/new-article", formData).then((res) => {

        newlyCreatedArticle = { ...res.data };
        articles_temp_var = [...cur_state, newlyCreatedArticle];
        setArticleTagsInput([]);
        setArticleHeadingInput("");
        setArticleDescriptionInput("");

        if (res.data._id) {
            appCtx.articles.set(articles_temp_var)
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
      // console.log(history);
      history.push(`${url}/create-article`);
      setArticleCreation(true);
      // debugger;
    }

    const cancelButtonClickHandler = () => {
      
      setArticleCreation(false);
      history.goBack();
      // props.history.push('/my-articles');
      // ls.set("showArticleCreationForm", false);
      // ls.set("showCreateArticleButton", true);
    }; 


    

    const articleCreationForm = () => {

      return (
        <form
          name="createArticle"
          onSubmit={(e) => {
            createArticle(e);
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
          <div>
              {
                articleTagsInput.map((tag)=>(
                  <Tag tagName={tag}/>
                )) 
              }
          </div>
          <div>
            <Autocomplete
              onChange={(e) => {
                setArticleTagsInput([...articleTagsInput,e.target.innerText]);
              }}
              id="combo-box-demo"
              options={appCtx.tags.get}
              getOptionLabel={(option) => option.tagName}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Tags" variant="outlined" />}
            />
          </div>
          <button
            type="submit"
            onClick={(e)=>{createArticle(e)}}
            id=""
            className=""
          >
            Continue
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
          <h1>My Articles</h1>
          <div id="MyArticles__create-article">
            <button id="MyArticles__create-article-button" onClick={(e)=>createArticleButtonHandler(e)}>Create Article</button>
          </div>
          <>
          <Route path={`${path}/create-article`}>
            {articleCreationForm()}
          </Route>
          <Route path={`${path}`}>
            <Articles articles={appCtx.articles.get}/>
          </Route>
          </>
        </div>

      );

  
}


export default MyArticles;
