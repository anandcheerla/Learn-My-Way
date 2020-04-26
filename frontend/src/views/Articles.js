import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '.././App.css';
import Article from './Article.js';
// import Unit from './Unit.js';

class Articles extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articles: [...this.props.articles],
      showArticleCreationForm: false
    };
  }

  componentDidMount(){
    console.log("articles component mounted");
  }


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
            showArticleCreationForm: false
          });

        }
    });
}


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
      </form>

      );

  }


  render(){

    let reverseDirectionForArticlesArray={
          "display": "flex",
          "flex-direction": "column-reverse"
    };

    let articleStyle={
      "margin-bottom": "15px",
      "border": "2px solid grey"
    }
    return (
       <div>
          <h2>My Articles</h2>
         <div> 
          <button onClick={()=>this.setState({showArticleCreationForm:true})} className="btn btn-primary">New Article</button>
         </div>
         {this.state.showArticleCreationForm ? this.articleCreationForm() : null}
          <ul className="list-group" style={reverseDirectionForArticlesArray}>
             {
              this.state.articles.map(element=>(
                <li className="list-group-item" style={articleStyle}><Article dbId={element._id} heading={element.heading} description={element.description} units={element.units}></Article></li>
              ))
             }
          </ul>
       </div>
    );
  }
}

export default Articles;