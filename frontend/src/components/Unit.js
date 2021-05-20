import React,{useState} from "react";
import axios from "axios";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import EditIcon from "@material-ui/icons/Edit";
// import CancelIcon from "@material-ui/icons/Cancel";
// import SaveIcon from "@material-ui/icons/Save";
// import ls from "local-storage";
import { Route, useHistory, useRouteMatch } from "react-router";
import {connect} from 'react-redux';


// components
import UnitModal from './UnitModal.js';

//css
import "./Unit.css";


import {setArticles} from '../redux/actions/app';


function Unit(props) {

    const {path,url} = useRouteMatch();
    const history = useHistory();

      // debugger;
      // modalDisplay: false,
      // let heading=
      //   (ls.get(props.unitId) && ls.get(props.unitId).heading) ||
      //   props.heading
      // let shortDescription=
      //   (ls.get(props.unitId) &&
      //     ls.get(props.unitId).shortDescription) ||
      //   props.shortDescription
      // let longDescription=
      //   (ls.get(props.unitId) &&
      //     ls.get(props.unitId).longDescription) ||
      //   props.longDescription
      // let priority=
      //   (ls.get(props.unitId) && ls.get(props.unitId).priority) ||
      //   props.priority
      // let complexity=
      //   (ls.get(props.unitId) && ls.get(props.unitId).complexity) ||
      //   props.complexity
      // unitDeleted:
      //   (ls.get(this.props.unitId) && ls.get(this.props.unitId).unitDeleted) ||
      //   false,
      // editUnitMode: false,
      const [headingInput,setHeadingInput] = useState("");
      const [shortDescriptionInput,setShortDescriptionInput] = useState("");
      const [longDescriptionInput,setLongDescriptionInput] = useState("");
      const [priorityInput,setPriorityInput] = useState("");
      const [complexityInput,setComplexityInput] = useState("");
      const [unitClicked,setUnitClicked] = useState(false);
      // headingEdit: false,
      // sdEdit: false,
      // ldEdit: false,
      // priorityEdit: false,
      // complexityEdit: false,
  


  // const onClickHandler = (event) => {
  //   this.setState({
  //     modalDisplay: !modalDisplay,
  //   });
  // }; //onClickHandler method end

  // const closeButtonHandler = () => {
  //   this.setState({
  //     modalDisplay: !modalDisplay,
  //   });
  // }; //closeButtonHandler method end

  const deleteUnitButtonHandler = () => {
    axios
      .delete(`/user/${props.articleId}/delete-unit/${props.unitId}`)
      .then((res) => {
        let articles_from_context = [...props.articles];
        articles_from_context[props.articleIndex].units[props.unitIndex]=null;
        props.setArticles(articles_from_context);
      });
  };

  const updateUnit = (event, input_name) => {
    event.preventDefault();

    // let cub = document.getElementById("Create-unit-button");
    // cub.style.opacity = 0.7;

    let formData = {
      heading: headingInput,
      shortDescription: shortDescriptionInput,
      longDescription: longDescriptionInput,
      priority: priorityInput,
      complexity: complexityInput,
    };

    axios
      .put(`/user/${props.articleId}/update-unit/${props.unitId}`,formData)
      .then((res) => {
        // this.setState({
        //   input_name: false,
        //   heading: formData.heading,
        //   shortDescription: formData.shortDescription,
        //   longDescription: formData.longDescription,
        //   priority: formData.priority,
        //   complexity: formData.complexity,
        // });

        // ls.set(this.props.unitId, {
        //   heading: formData.heading,
        //   shortDescription: formData.shortDescription,
        //   longDescription: formData.longDescription,
        //   priority: formData.priority,
        //   complexity: formData.complexity,
        // });

      });
  };

  const handleHeadingInput = (e) => {
    e.preventDefault();
    setHeadingInput(e.target.value);
  };
  const handleShortDescriptionInput = (e) => {
    e.preventDefault();
    setShortDescriptionInput(e.target.value);
  };
  const handleLongDescriptionInput = (e) => {
    e.preventDefault();
    setLongDescriptionInput(e.target.value);
  };
  const handlePriorityInput = (e) => {
    e.preventDefault();
    setPriorityInput(e.target.value);
  };
  const handleComplexityInput = (e) => {
    e.preventDefault();
    setComplexityInput(e.target.value);
  };

  const createModal = () => {
    return (
      <div id="">
        
      </div>
    );
  };

  const unitCreationForm = () => {
    return (
      <div>

      </div>
    );
  }; 

  // let unitBorderColor = {
  //   basic: "#cfc10a",
  //   easy: "#7dd943",
  //   medium: "#f07f1d",
  //   hard: "#f50525",
  // };

  // let border_color = {
  //   border: "1.1px solid " + unitBorderColor[complexity],
  // };

  const unitClickHandler=(e)=>{
    e.preventDefault();
   
    history.push(`${url}/${props.unitId}`);
  }

  return (
      <div id="Unit">
        <div onClick={(e)=>unitClickHandler(e)}>
          <h2 data-test='Unit__heading'>{props.heading}</h2>
          <h3 data-test='Unit__shortDescription'>{props.shortDescription}</h3>
        </div>
        { 
          <>
          <Route path={`${path}/${props.unitId}`}>
            <UnitModal 
                      articleType={props.articleType}
                      heading={props.heading}
                      shortDescription={props.shortDescription}
                      longDescription={props.longDescription}
                      priority={props.priority}
                      complexity={props.complexity}
                      articleId={props.articleId}
                      unitId={props.unitId}
                      uploaderUserName={props.uploaderUserName}
                      articleIndex={props.articleIndex}
                      unitIndex={props.unitIndex}
              />
          </Route>
          </>
        }
      </div>

    );
     
}

function mapStateToProps(state){
  return {
    articles: state.app.articles
  }
}

export default connect(mapStateToProps,{setArticles})(Unit);
