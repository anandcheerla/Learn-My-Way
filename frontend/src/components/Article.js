import React from "react";
import axios from "axios";
import ls from "local-storage";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


//components
import Unit from "./Unit.js";



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
    //   unitHeading: "",
    //   unitShortDescription: "",
    //   unitLongDescription: "",
    //   unitPriority: "",
    //   unitComplexity: "",


  const areYouSureModal = () => {};

  //add unit api call to /add-unit route and append the unit to units property of state
  const createUnit = (event) => {
    //to prevent the default behaviour of the event
    event.preventDefault();

    let acub = document.getElementById("article-create-unit-button");
    acub.style.opacity = 0.7;

    let priority_l = 5;
    let complexity_l = "easy";

    if (this.state.unitPriority) {
      priority_l = Number(this.state.unitPriority);
    }

    if (this.state.unitComplexity) complexity_l = this.state.unitComplexity;

    let formData = {
      heading: this.state.unitHeading,
      shortDescription: this.state.unitShortDescription,
      longDescription: this.state.unitLongDescription,
      priority: priority_l,
      complexity: complexity_l,
    };

    let currentState = [...this.state.units];
    let units_temp = [...currentState, formData];

    let complexity = document.getElementById("complexity-dropdown-filter-id")
      .value;
    let importance = document.getElementById("importance-dropdown-filter-id")
      .value;

    if (
      (complexity === "all" || formData.complexity === complexity) &&
      (importance === "all" || formData.priority === importance)
    ) {
      this.setState({
        units: units_temp,
        filteredUnits: units_temp,
      });

      ls.set(this.props.dbId, {
        units: units_temp,
        filteredUnits: units_temp,
      });
    } else {
      this.setState({
        units: units_temp,
      });

      ls.set(this.props.dbId, {
        units: units_temp,
      });
    }

    this.setState({
      unitPriority: "",
      unitComplexity: "",
      unitHeading: "",
      unitShortDescription: "",
      unitLongDescription: "",
    });

    axios.post("/add-unit/" + this.state.dbId, formData).then((res) => {
      // debugger;

      let units_temp_var = [...currentState, res.data];

      let complexity = document.getElementById("complexity-dropdown-filter-id")
        .value;
      let importance = document.getElementById("importance-dropdown-filter-id")
        .value;

      if (
        (complexity == "all" || formData.complexity == complexity) &&
        (importance == "all" || formData.priority == importance)
      ) {
        this.setState({
          units: units_temp_var,
          filteredUnits: units_temp_var,
        });

        ls.set(this.props.dbId, {
          units: units_temp_var,
          filteredUnits: units_temp_var,
        });
      } else {
        this.setState({
          units: units_temp_var,
        });

        ls.set(this.props.dbId, {
          units: units_temp_var,
        });
      }
      acub.style.opacity = 1;
    });
  }; //createUnit method end


  const filterByDifficulty = (event) => {
    event.preventDefault();
    let complexity = event.target.value;
    let importance = document.getElementById("importance-dropdown-filter-id")
      .value;

    let units = [...this.state.units];
    let required_units = [];

    for (let i = 0; i < units.length; i++) {
      if (
        (complexity == "all" || units[i].complexity == complexity) &&
        (importance == "all" || units[i].priority == Number(importance))
      )
        required_units.push(units[i]);
    }
    // debugger;
    this.setState({
      filteredUnits: required_units,
    });
  };



  const filterByImportance = (event) => {
    event.preventDefault();
    let importance = event.target.value;

    let complexity = document.getElementById("complexity-dropdown-filter-id")
      .value;

    let units = [...this.state.units];
    let required_units = [];

    for (let i = 0; i < units.length; i++) {
      if (
        (importance == "all" || units[i].priority == Number(importance)) &&
        (complexity == "all" || units[i].complexity == complexity)
      )
        required_units.push(units[i]);
    }
    // debugger;
    this.setState({
      filteredUnits: required_units,
    });
  };


  const articleSettings = (event) => {
    event.preventDefault();
    event.persist();

    let setting = event.target.value;
    // debugger;
    if (setting === "delete_article") {
      this.setState({
        articleDeleteButtonClicked: true,
      });
      this.deletearticleHandler();
    } else if (setting === "post_article") {
      if (event.target.selectedOptions[0].label === "Make private") {
        axios
          .post("/settings/article-visibility/" + this.props.dbId, {
            visibility: "private",
          })
          .then((res) => {
            if (res.data === "success")
              event.target.selectedOptions[0].label = "Make public";
          });
      } else {
        axios
          .post("/settings/article-visibility/" + this.props.dbId, {
            visibility: "public",
          })
          .then((res) => {
            if (res.data === "success")
              event.target.selectedOptions[0].label = "Make private";
          });
      }
    }
  };



  const unitheadingInputHandler = (e) => {
    e.preventDefault();
    this.setState({
      unitHeading: e.target.value,
    });
  };

  const unitShortDescriptionInputHandler = (e) => {
    e.preventDefault();
    this.setState({
      unitShortDescription: e.target.value,
    });
  };

  const unitLongDescriptionInputHandler = (e) => {
    e.preventDefault();
    this.setState({
      unitLongDescription: e.target.value,
    });
  };

  const unitPriorityInputHandler = (e) => {
    e.preventDefault();
    this.setState({
      unitPriority: e.target.value,
    });
  };

  const unitComplexityInputHandler = (e) => {
    e.preventDefault();
    this.setState({
      unitComplexity: e.target.value,
    });
  };

  //this method will return the form for unit creation
  const unitCreationForm = () => {
    let align = {
      textAlign: "center",
    };

    return (
      <div className="article-unit-creation-form">
        <div className="">
          <TextareaAutosize
            className=""
            id="article-unit-creation-form-heading"
            name="heading"
            onChange={(e) => {
              this.unitheadingInputHandler(e);
            }}
            value={this.state.unitHeading}
            placeholder="Heading"
          />
        </div>
        <div className="">
          <TextareaAutosize
            className="article-unit-creation-form-text-area"
            id="shortDescription"
            name="shortDescription"
            rowsMin={3}
            onChange={(e) => {
              this.unitShortDescriptionInputHandler(e);
            }}
            value={this.state.unitShortDescription}
            placeholder="Short description"
          />
        </div>
        <div className="">
          <TextareaAutosize
            className="article-unit-creation-form-text-area"
            id="longDescription"
            name="longDescription"
            rowsMin={3}
            placeholder=""
            onChange={(e) => {
              this.unitLongDescriptionInputHandler(e);
            }}
            value={this.state.unitLongDescription}
            placeholder="Long description"
          />
        </div>
        <div className="">
          <select
            className=""
            id="priority"
            onChange={(e) => {
              this.unitPriorityInputHandler(e);
            }}
            value={this.state.unitPriority}
          >
            <option value="priority">Priority</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="">
          <select
            className=""
            id="complexity"
            onChange={(e) => {
              this.unitComplexityInputHandler(e);
            }}
            value={this.state.unitComplexity}
          >
            <option value="complexity">Complexity</option>
            <option value="basic">Basic</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div style={align}>
          <button
            type="button"
            onClick={(e) => {
              this.createUnit(e);
            }}
            className="btn btn-outline-primary"
            id="article-create-unit-button"
          >
            Create
          </button>
        </div>
      </div>
    );
  }; //unitCreationForm method end

  const articleClickHandler = () => {
    // console.log("article click handler is called");
    let non_filtered_units = [...this.state.units];
    if (this.state.articleClicked) {
      this.setState({
        articleClicked: false,
        filteredUnits: non_filtered_units,
      });
    } else {
      this.setState({ articleClicked: true, showUnitCreationForm: true });
    }
  }; //articleClickHandler end

  const deletearticleHandler = () => {
    axios.delete("/article-delete/" + this.props.dbId).then((res) => {
      this.setState({ articleDeleted: true });
      ls.set(this.props.dbId, { articleDeleted: true });
    });
  };

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

    return (
      <div id="Article">
        <h1>{props.heading}</h1>
      </div>
    );

} 

export default Article;
