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
      showCreateArticleButton: true
    };
  }//constructor end

  componentDidMount(){
    // console.log("articles component mounted");
  }


  //create article api call to /new-article route and append newly created articles to articles property of state
  createArticle=(event)=>{
      event.preventDefault();
      let formData={
        heading: event.target.heading.value,
        description: event.target.description.value
      }

      axios.post("/new-article",formData).then(res=>{
        // debugger;
          let newlyCreatedArticle={...res.data};
          let articles_temp_var=[...this.state.articles,newlyCreatedArticle];

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

  //this method is to create and return the article creation form
  articleCreationForm=()=>{
      return (
        <form name="createArticle" onSubmit={this.createArticle}>
            <div className="form-group">
              <label htmlFor="heading">Name</label>
              <input type="text" className="form-control" id="articleHeading" name="heading" placeholder="heading" required/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea type="textarea" className="form-control" id="description" name="description" placeholder="description" required/>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
            <span> <button onClick={this.cancelButtonClickHandler} className="btn btn-primary">Cancel</button></span>
        </form>
        );
    }//articleCreationForm end


    createArticleButtonClickHandler=()=>{
        this.setState({showArticleCreationForm:true,showCreateArticleButton:false});

    }//createArticleButtonClickHandler method end


    render(){
      //inline properties or variables
      let reverseDirectionForArticlesArray={
            "display": "flex",
            "flexDirection": "column-reverse"
      };

      let articleStyle={
        "marginBottom": "25px", 
         "background": "#e6edf0"
      }
      let newArticleButtonStyle={
          "position":"fixed",
          "top":"30",
          "right":"0"
      }

      let articlesStyle={
        "marginLeft": "30%",
        "marginTop": "5%",
        "width":"70%"
        
      }

      return (
        <div id="articles" style={articlesStyle}>
          <div>
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
          </div>
          {
            this.state.showArticleCreationForm
            ?
            this.articleCreationForm()
            :
            null
          }
          <ul className="list-group" style={reverseDirectionForArticlesArray}>
            {
              !this.state.showArticleCreationForm
              &&
              this.state.articles.map(element=>(
                  <div key={element._id}>
                    <li className="list-group-item" style={articleStyle}>
                      <Article 
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
                    </li>
                  </div>
              ))
            }
          </ul>
        </div>
      );
    }//render method end
}//class Articles end

export default Articles;