import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


//user defined packages or files
import '.././App.css';
import Article from './Article.js';
// import Unit from './Unit.js';

class Articles extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articles: [...this.props.articles],
      showArticleCreationForm: false,
      showCreateArticleButton: true
    };
  }//constructor end

  componentDidMount(){
    console.log("articles component mounted");
  }


  //create article api call to /new-article route and append newly created articles to articles property of state
  createArticle=(event)=>{
      event.preventDefault();
      let formData={
        heading: event.target.heading.value,
        description: event.target.description.value
      }
      axios.post("/new-article",formData).then(res=>{
          let newlyCreatedArticle={...res.data};
          if(res.data._id){
            this.setState({
              articles: [...this.state.articles,newlyCreatedArticle],
              showArticleCreationForm: false,
              showCreateArticleButton: true
            });
          }
      });
  }//createArticle method end

  cancelButtonClickHandler=()=>{
    this.setState({showArticleCreationForm:false,showCreateArticleButton:true});
  }//cancelButtonClickHandler method end


  //this method is to create and return the article creation form
  articleCreationForm=()=>{
      return (
        <form name="createArticle" onSubmit={this.createArticle}>
            <div className="form-group">
              <label htmlFor="heading">Name</label>
              <input type="text" className="form-control" id="articleHeading" name="heading" placeholder="heading"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea type="textarea" className="form-control" id="description" name="description" placeholder="description"/>
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
            "flex-direction": "column-reverse"
      };

      let articleStyle={
        "margin-bottom": "15px", 
      }
      let newArticleButtonStyle={
          "position":"fixed",
          "top":"30",
          "right":"0"
      }

      return (
        <div>
          <div>
            {
              !this.state.showArticleCreationForm ?
              <h2>My Articles</h2> : <h2>Create Article</h2>
            }
            {
              this.state.showCreateArticleButton ?
              <button style={newArticleButtonStyle} onClick={this.createArticleButtonClickHandler} className="btn btn-outline-primary">New Article</button>
              :
              null
            }
          </div>
          {this.state.showArticleCreationForm ? this.articleCreationForm() : null}
          <ul className="list-group" style={reverseDirectionForArticlesArray}>
           {
            !this.state.showArticleCreationForm &&
            this.state.articles.map(element=>(
              <li className="list-group-item" style={articleStyle}><Article dbId={element._id} heading={element.heading} description={element.description} units={element.units}></Article></li>
            ))
           }
          </ul>
        </div>
      );
    }//render method end
}//class Articles end

export default Articles;