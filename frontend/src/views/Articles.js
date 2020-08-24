import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ls from 'local-storage';

//user defined packages or files
import '.././App.css';
import Article from './Article.js';
// import Unit from './Unit.js';

class Articles extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // articles: ls.get("articles") || [...this.props.articles],
      articles: [...this.props.articles],
      showArticleCreationForm: false,
      showCreateArticleButton: true,
      articleHeadingInput: "",
      articleDescriptionInput: "",
    };
  }//constructor end

  componentDidMount(){
    // console.log("articles component mounted");
  }


  //create article api call to /new-article route and append newly created articles to articles property of state
  createArticle=(event)=>{
      event.preventDefault();
      let formData={
        heading: this.state.articleHeadingInput,
        description: this.state.articleDescriptionInput
      }

      //this is to make it load faster instead of waiting for the response from the server!!so if anything
      //goes wrong then we can handle that in the post method callback

      let newlyCreatedArticle={...formData};
      let articles_temp_var=[...this.state.articles,newlyCreatedArticle];

      this.setState({
              articles: articles_temp_var,
              showArticleCreationForm: false,
              showCreateArticleButton: true
            });
      ls.set("articles",articles_temp_var);
      ls.set("showArticleCreationForm",false);
      ls.set("showCreateArticleButton",true);

      


      let acfcb = document.getElementById("articles-article-creation-form-create-button");

      if(acfcb)
        acfcb.style.opacity=0.7;

      axios.post("/new-article",formData).then(res=>{
        // debugger;
          newlyCreatedArticle={...res.data};
          articles_temp_var=[...this.state.articles,newlyCreatedArticle];

          if(res.data._id){
            this.setState({
              articles: articles_temp_var,
              showArticleCreationForm: false,
              showCreateArticleButton: true
            });
            ls.set("articles",articles_temp_var);
            ls.set("showArticleCreationForm",false);
            ls.set("showCreateArticleButton",true);

            // console.log(ls.get("articles"));
          }
      });
  }//createArticle method end

  cancelButtonClickHandler=()=>{
    this.setState({showArticleCreationForm:false,showCreateArticleButton:true});
    ls.set("showArticleCreationForm",false);
    ls.set("showCreateArticleButton",true);
  }//cancelButtonClickHandler method end


  unitsHandlerFromArticle=(units)=>{

    // this.setState({});

  }

  articleHeadingInputHandler=(e)=>{
    e.preventDefault();
    this.setState({
      articleHeadingInput: e.target.value
    });

  }
  articleDescriptionInputHandler=(e)=>{
    e.preventDefault();
    this.setState({
      articleDescriptionInput: e.target.value
    });

  }

  //this method is to create and return the article creation form
  articleCreationForm=()=>{
      return (
        <form name="createArticle" onSubmit={(e)=>{this.createArticle(e)}}>
            <div className="form-group">
              <label htmlFor="heading">Name</label>
              <input type="text" className="form-control" id="articleHeading" onChange={(e)=>{this.articleHeadingInputHandler(e)}} name="heading" placeholder="heading" value={this.state.articleHeadingInput} required/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea type="textarea" className="form-control" id="description" onChange={(e)=>{this.articleDescriptionInputHandler(e)}} name="description" placeholder="description" value={this.state.articleDescriptionInput} required/>
            </div>
            <button type="submit" id="articles-article-creation-form-create-button" className="btn btn-primary">Create</button>
            <span> <button onClick={this.cancelButtonClickHandler} className="btn btn-primary">Cancel</button></span>
        </form>
        );
    }//articleCreationForm end


    createArticleButtonClickHandler=(event)=>{
        event.preventDefault();
        event.target.style.opacity=0.7;

        this.setState({showArticleCreationForm:true,showCreateArticleButton:false});

    }//createArticleButtonClickHandler method end


    render(){
      //inline properties or variables
      let reverseDirectionForArticlesArray={
            "display": "flex",
            "flexDirection": "column-reverse"
      };


      let newArticleButtonStyle={
          "position":"fixed",
          "top":"30",
          "right":"0"
      }



      return (
        <div id="articles-articles">

          <div id="articles-articles-article-creation">
          {
              this.props.sectionName==="myArticles"
              &&
              (
                !this.state.showArticleCreationForm
                ?
                (this.state.articles.length>0 ? <h2>My Articles</h2> : <h3>No Articles<h5>create one by clicking the New Article Button in the right</h5></h3>)
                :
                <h2>Create Article</h2>
              )
          }
          {
            this.props.sectionName==="myArticles"
            &&
            (
              this.state.showCreateArticleButton
              ?
              <button 
                style={newArticleButtonStyle} 
                onClick={this.createArticleButtonClickHandler} 
                className="btn btn-outline-primary">
                New Article
              </button>
              :
              null
            )
          }

          {
              this.state.showArticleCreationForm
              ?
              this.articleCreationForm()
              :
              null
          }

          </div>


          <div id="articles-all-articles">
            <div style={reverseDirectionForArticlesArray}>
              {
                !this.state.showArticleCreationForm
                &&
                this.state.articles.map(element=>(
                        <Article 
                          key={element._id}
                          dbId={element._id} 
                          heading={element.heading} 
                          description={element.description} 
                          units={element.units}
                          unitAdd={this.unitsHandlerFromArticle} 
                          sectionName={this.props.sectionName}
                          lastUpdatedTime={element.lastUpdatedTime}
                          uploaderFirstName={element.uploaderFirstName}
                          visibility={element.visibility}
                          >
                        </Article>
                    
                ))
              }
            </div>
          </div>


        </div>
      );
    }//render method end
}//class Articles end

export default Articles;