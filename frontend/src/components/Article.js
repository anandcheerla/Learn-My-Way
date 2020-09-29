import React,{useState} from "react";
import axios from "axios";
import ls from "local-storage";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


//components
import Unit from "./Unit.js";

//css
import "./Article.css";



function Article(props){
  
    // this.state = {
    //   dbId: this.props.dbId,
    //   heading:
    //     (ls.get(this.props.dbId) && ls.get(this.props.dbId).heading) ||
    //     this.props.heading,
    //   description:
    //     (ls.get(this.props.dbId) && ls.get(this.props.dbId).description) ||
    //     this.props.description,
    //   units:
    //     (ls.get(this.props.dbId) && ls.get(this.props.dbId).units) ||
    //     this.props.units,
    //   filteredUnits:
    //     (ls.get(this.props.dbId) && ls.get(this.props.dbId).filteredUnits) ||
    //     this.props.units,
    //   showArticleCreationForm: false,
    //   showUnitCreationForm: false,
    //   articleClicked: false,
    //   articleDeleted:
    //     (ls.get(this.props.dbId) && ls.get(this.props.dbId).articleDeleted) ||
    //     false,
    //   articleDeleteButtonClicked: true,
  // const [unitHeading,setUnitHeading] = useState("");
  // const [unitShortDescription,setUnitShortDescription] = useState("");
  // const [unitLongDescription,setUnitLongDescription] = useState("");
  // const [unitPriority,setUnitPriority] = useState("");
  // const [unitComplexity,setUnitComplexity] = useState("");


  // const areYouSureModal = () => {};

  // //add unit api call to /add-unit route and append the unit to units property of state
  // const createUnit = (event) => {
  //   //to prevent the default behaviour of the event
  //   event.preventDefault();

  //   // let acub = document.getElementById("article-create-unit-button");
  //   // acub.style.opacity = 0.7;

  //   let priority_l = 5;
  //   let complexity_l = "easy";

  //   if (unitPriority) {
  //     priority_l = Number(unitPriority);
  //   }

  //   if (unitComplexity) complexity_l = unitComplexity;

  //   let formData = {
  //     heading: unitHeading,
  //     shortDescription: unitShortDescription,
  //     longDescription: unitLongDescription,
  //     priority: priority_l,
  //     complexity: complexity_l,
  //   };

  //   let currentState = [...units];
  //   let units_temp = [...currentState, formData];

  //   // let complexity = document.getElementById("complexity-dropdown-filter-id")
  //   //   .value;
  //   // let importance = document.getElementById("importance-dropdown-filter-id")
  //   //   .value;

  //   if (
  //     (complexity === "all" || formData.complexity === complexity) &&
  //     (importance === "all" || formData.priority === importance)
  //   ) {
  //     this.setState({
  //       units: units_temp,
  //       filteredUnits: units_temp,
  //     });

  //     ls.set(this.props.dbId, {
  //       units: units_temp,
  //       filteredUnits: units_temp,
  //     });
  //   } else {
  //     this.setState({
  //       units: units_temp,
  //     });

  //     ls.set(this.props.dbId, {
  //       units: units_temp,
  //     });
  //   }

  //   this.setState({
  //     unitPriority: "",
  //     unitComplexity: "",
  //     unitHeading: "",
  //     unitShortDescription: "",
  //     unitLongDescription: "",
  //   });

  //   axios.post("/add-unit/" + dbId, formData).then((res) => {
  //     // debugger;

  //     let units_temp_var = [...currentState, res.data];

  //     let complexity = document.getElementById("complexity-dropdown-filter-id")
  //       .value;
  //     let importance = document.getElementById("importance-dropdown-filter-id")
  //       .value;

  //     if (
  //       (complexity == "all" || formData.complexity == complexity) &&
  //       (importance == "all" || formData.priority == importance)
  //     ) {
  //       this.setState({
  //         units: units_temp_var,
  //         filteredUnits: units_temp_var,
  //       });

  //       ls.set(this.props.dbId, {
  //         units: units_temp_var,
  //         filteredUnits: units_temp_var,
  //       });
  //     } else {
  //       this.setState({
  //         units: units_temp_var,
  //       });

  //       ls.set(this.props.dbId, {
  //         units: units_temp_var,
  //       });
  //     }
  //     acub.style.opacity = 1;
  //   });
  // }; //createUnit method end


  // const filterByDifficulty = (event) => {
  //   event.preventDefault();
  //   let complexity = event.target.value;
  //   let importance = document.getElementById("importance-dropdown-filter-id")
  //     .value;

  //   let units = [...units];
  //   let required_units = [];

  //   for (let i = 0; i < units.length; i++) {
  //     if (
  //       (complexity == "all" || units[i].complexity == complexity) &&
  //       (importance == "all" || units[i].priority == Number(importance))
  //     )
  //       required_units.push(units[i]);
  //   }
  //   // debugger;
  //   this.setState({
  //     filteredUnits: required_units,
  //   });
  // };



  // const filterByImportance = (event) => {
  //   event.preventDefault();
  //   let importance = event.target.value;

  //   let complexity = document.getElementById("complexity-dropdown-filter-id")
  //     .value;

  //   let units = [...units];
  //   let required_units = [];

  //   for (let i = 0; i < units.length; i++) {
  //     if (
  //       (importance == "all" || units[i].priority == Number(importance)) &&
  //       (complexity == "all" || units[i].complexity == complexity)
  //     )
  //       required_units.push(units[i]);
  //   }
  //   // debugger;
  //   this.setState({
  //     filteredUnits: required_units,
  //   });
  // };


  // const articleSettings = (event) => {
  //   event.preventDefault();
  //   event.persist();

  //   let setting = event.target.value;
  //   // debugger;
  //   if (setting === "delete_article") {
  //     this.setState({
  //       articleDeleteButtonClicked: true,
  //     });
  //     this.deletearticleHandler();
  //   } else if (setting === "post_article") {
  //     if (event.target.selectedOptions[0].label === "Make private") {
  //       axios
  //         .post("/settings/article-visibility/" + this.props.dbId, {
  //           visibility: "private",
  //         })
  //         .then((res) => {
  //           if (res.data === "success")
  //             event.target.selectedOptions[0].label = "Make public";
  //         });
  //     } else {
  //       axios
  //         .post("/settings/article-visibility/" + this.props.dbId, {
  //           visibility: "public",
  //         })
  //         .then((res) => {
  //           if (res.data === "success")
  //             event.target.selectedOptions[0].label = "Make private";
  //         });
  //     }
  //   }
  // };



  // const unitheadingInputHandler = (e) => {
  //   e.preventDefault();
  //   setUnitHeading(e.target.value);

  // };

  // const unitShortDescriptionInputHandler = (e) => {
  //   e.preventDefault();
  //   setUnitShortDescription(e.target.value);
  // };

  // const unitLongDescriptionInputHandler = (e) => {
  //   e.preventDefault();
  //   setUnitLongDescription(e.target.value);
  // };

  // const unitPriorityInputHandler = (e) => {
  //   e.preventDefault();
  //   setUnitPriority(e.target.value);
  // };

  // const unitComplexityInputHandler = (e) => {
  //   e.preventDefault();
  //   setUnitComplexity(e.target.value);
  // };

  // //this function will return the form for unit creation
  // const unitCreationForm = () => {

  //   return (
  //     <div className="">
  //       <div className="">
  //         <TextareaAutosize
  //           className=""
  //           id=""
  //           onChange={(e)=>{unitheadingInputHandler(e)}}
  //           value={unitHeading}
  //           name="heading"
  //           placeholder="Heading"
  //         />
  //       </div>
  //       <div className="">
  //         <TextareaAutosize
  //           className=""
  //           id=""
  //           name="shortDescription"
  //           rowsMin={3}
  //           onChange={(e)=>{unitShortDescriptionInputHandler(e)}}
  //           value={unitShortDescription}
  //           placeholder="Short description"
  //         />
  //       </div>
  //       <div className="">
  //         <TextareaAutosize
  //           className=""
  //           id=""
  //           name="longDescription"
  //           rowsMin={3}
  //           placeholder=""
  //           onChange={(e)=>{unitLongDescriptionInputHandler(e)}}
  //           value={unitLongDescription}
  //           placeholder="Long description"
  //         />
  //       </div>
  //       <div className="">
  //         <select
  //           className=""
  //           id=""
  //           onChange={(e)=>{unitPriorityInputHandler(e)}}
  //           value={unitPriority}
  //         >
  //           <option value="priority">Priority</option>
  //           <option value="1">1</option>
  //           <option value="2">2</option>
  //           <option value="3">3</option>
  //           <option value="4">4</option>
  //           <option value="5">5</option>
  //         </select>
  //       </div>
  //       <div className="">
  //         <select
  //           className=""
  //           id=""
  //           onChange={(e)=>{unitComplexityInputHandler(e)}}
  //           value={unitComplexity}
  //         >
  //           <option value="complexity">Complexity</option>
  //           <option value="basic">Basic</option>
  //           <option value="easy">Easy</option>
  //           <option value="medium">Medium</option>
  //           <option value="hard">Hard</option>
  //         </select>
  //       </div>
  //       <div>
  //         <button
  //           type="button"
  //           onClick={(e) => {
  //             createUnit(e);
  //           }}
  //           className=""
  //           id=""
  //         >
  //           Create
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  // const articleClickHandler = () => {
  //   // console.log("article click handler is called");
  //   let non_filtered_units = [...units];
  //   if (articleClicked) {
  //     this.setState({
  //       articleClicked: false,
  //       filteredUnits: non_filtered_units,
  //     });
  //   } else {
  //     this.setState({ articleClicked: true, showUnitCreationForm: true });
  //   }
  // }; //articleClickHandler end

  // const deletearticleHandler = () => {
  //   axios.delete("/article-delete/" + this.props.dbId).then((res) => {
  //     this.setState({ articleDeleted: true });
  //     ls.set(this.props.dbId, { articleDeleted: true });
  //   });
  // };

    // let currentTs = new Date();
    // let articleTs = new Date(this.props.lastUpdatedTime);
    // let diff = currentTs - articleTs;
    // let minutes = diff / (1000 * 60); //1000 is for milli seconds and 60 for seconds

    // let uploadedTime;
    // if (Math.floor(minutes / 60) > 0) {
    //   if (Math.floor(minutes / (60 * 24)) > 0) {
    //     uploadedTime = Math.floor(minutes / (60 * 24));
    //     if (uploadedTime === 1) uploadedTime += " day ago";
    //     else uploadedTime += " days ago";
    //   } else {
    //     uploadedTime = Math.floor(minutes / 60);
    //     if (uploadedTime === 1) uploadedTime += " hour ago";
    //     else uploadedTime += " hours ago";
    //   }
    // } else {
    //   uploadedTime = Math.floor(minutes);
    //   if (uploadedTime >= 0 && uploadedTime < 3) uploadedTime = "Just now";
    //   else uploadedTime += " minutes ago";
    // }

    // let uploader_info_style = {
    //   border: "1px solid grey",
    //   borderRadius: "10px",
    //   padding: "5px",
    //   backgroundColor: "#aab3ad",
    //   float: "right",
    // };

 // {unitCreationForm()}
    return (
      <div id="Article">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
        {
          props.units.map((unit)=>(
            <Unit 
            heading={unit.heading} 
            shortDescription={unit.shortDescription} 
            longDescription={unit.longDescription}
            priority={unit.priority}
            complexity={unit.complexity}
            />
          ))
        }
       
      </div>
    );

} 

export default Article;
