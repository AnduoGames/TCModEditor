import "./App.css";
import Manifest from "./components/manifest";
import MyNav from "./components/mynav";
import Dialogues from "./components/Dialogues";
import { React, Component, createRef } from "react";
import DialoguePopup from "./components/DialoguePopup";
import DialogueDetail from "./components/DialogueDetail";
import DialogueDeletePopup from "./components/DialogueDeletePopup";
import Triggers from "./components/Triggers";
import Conditions from "./components/Conditions";

var current = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: {
        manifest: true,
        dialogue: false,
        dialogueDetail: false,
        showPopup: false,
        showDeletePopup: false,
        triggers: false,
        conditions: false
      },
      data: {
        manifest: {},
        dialogues: [
          {
            name: "test",
            lines: [
              {
                lineID: "line_0",
                text: "Hello I am text",
                speaker: "Jenna",
                eyebrows: "Happy",
                eyes: "Happy",
                mouth: "Happy",
                cg: "",
                expandedOptions: true,
                savekeys : [
                  
                ],
                commands: [

                ],
                choices: [
                ]
              },
              {
                lineID: "line_1",
                text: "Hello I am text 2",
                speaker: "Jewel",
                eyebrows: "Idle",
                eyes: "Idle",
                mouth: "Idle",
                cg: "",
                expandedOptions: false,
                savekeys : [
                  
                ],
                commands: [

                ],
                choices: [
                ]
              },
            ],
            description: "default dialogue for now."
          },
        ],
        triggers: [

        ],
        conditions: [

        ]
      },
      manifest: {
        modName: "Bear's supermod ♥",
        authorName: "Bear c:",
        version: "1.0.4f2",
        url: "https://patreon.com/anduogames",
        savekey: "bearmod",
      },
      currentDialogue: {},
      toDeleteDialogue: {},
    };
    this.OnNavigationSelectionChange = this.OnNavigationSelectionChange.bind(
      this
    );
  }

  OnShowPopup = () => {
    var newNavigation = this.state.navigation;
    newNavigation.showPopup = true;
    this.setState({
      navigation: newNavigation,
    });
  };

  OnAddDialogue = (e) => {
    e.preventDefault();
    var newdata = this.state.data;
    newdata.dialogues.push({
      name: e.target.Name.value,
      lines: [],
      description: e.target.description.value,
    });
    var newNavigation = this.state.navigation;
    newNavigation.showPopup = false;
    this.setState({
      data: newdata,
      navigation: newNavigation,
    });
  };

  OnDeleteDialogue = (dialogue) => {
    var newNavigation = this.state.navigation;
    newNavigation.showDeletePopup = true;
    this.setState({
      navigation: newNavigation,
      toDeleteDialogue: dialogue,
    });
  };

  OnDeleteDialoguePopupConfirmed = (dialogue) => {
    var newNavigation = this.state.navigation;
    newNavigation.showDeletePopup = false;

    var newdata = this.state.data;
    var filtered = newdata.dialogues.filter(function (value, index, arr) {
      return dialogue.name !== value.name;
    });
    newdata.dialogues = filtered;

    this.setState({
      navigation: newNavigation,
      data: newdata,
    });
  };

  OnDeleteDialogueAbortClicked = () => {
    var newNavigation = this.state.navigation;
    newNavigation.manifest = false;
    newNavigation.dialogue = true;
    newNavigation.dialogueDetail = false;
    newNavigation.showPopup = false;
    newNavigation.showDeletePopup = false;
    this.setState({
      navigation: newNavigation,
    });
  };

  OnCreateDialogueAbortClicked = () => {
    var newNavigation = this.state.navigation;
    newNavigation.manifest = false;
    newNavigation.dialogue = true;
    newNavigation.dialogueDetail = false;
    newNavigation.showPopup = false;
    this.setState({
      navigation: newNavigation,
    });
  };

  OnEditDialogue = (dialogue) => {
    var newNavigation = this.state.navigation;
    newNavigation.manifest = false;
    newNavigation.dialogue = false;
    newNavigation.dialogueDetail = true;
    this.setState({
      navigation: newNavigation,
      currentDialogue: dialogue,
    });
  };

  OnEditDialogueSaveChanges = (dialogue) => {
    var customData = this.state.data;
    customData.dialogues = customData.dialogues.map(function(item) { return item.name == dialogue.name ? dialogue : item; });
    this.setState({
      data : customData
    });
  }

  OnBackClickedInEditDialogue = () => {
    var newNavigation = this.state.navigation;
    newNavigation.manifest = false;
    newNavigation.dialogue = true;
    newNavigation.dialogueDetail = false;
    this.setState({
      navigation: newNavigation,
    });
  };

  onManifestSaved = (e) => {
    e.preventDefault();
    var newManifest = this.state.manifest;
    newManifest.modName = e.target.Name.value;
    newManifest.authorName = e.target.Author.value;
    newManifest.version = e.target.Version.value;
    newManifest.url = e.target.Url.value;
    newManifest.savekey = e.target.SaveKey.value;
    this.setState({
      manifest: newManifest,
    });
  };

  OnNavigationSelectionChange = (e) => {
    var newNavigation = this.state.navigation;
    newNavigation.manifest = e == "manifest";
    newNavigation.dialogue = e == "dialogues";
    newNavigation.triggers = e == "triggers";
    newNavigation.conditions = e == "conditions";
    newNavigation.dialogueDetail = false;
    this.setState({
      navigation: newNavigation,
    });
  };

  OnTriggersChanged = (triggers) => {
    var data = this.state.data;
    data.triggers = triggers;
    this.setState({
      data: data
    });
  };

  OnConditionsChanged = (conditions) => {
    var data = this.state.data;
    data.conditions = conditions;
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <>
        <MyNav onNavSelectionChanged={this.OnNavigationSelectionChange} />

        <div className="ScrollDiv">
          {this.state.navigation.manifest ? (
            <Manifest
              onManifestSubmit={this.onManifestSaved}
              manifest={this.state.manifest}
            />
          ) : null}
          {this.state.navigation.dialogue ? (
            <Dialogues
              dialogues={this.state.data.dialogues}
              OnShowPopup={this.OnShowPopup}
              OnEditDialogue={this.OnEditDialogue}
              OnDeleteDialogue={this.OnDeleteDialogue}
            />
          ) : null}
          {this.state.navigation.dialogueDetail ? (
            <DialogueDetail
              dialogue={this.state.currentDialogue}
              OnBackClicked={this.OnBackClickedInEditDialogue}
              OnSaved={this.OnEditDialogueSaveChanges}
            />
          ) : null}
          {this.state.navigation.showPopup ? (
            <DialoguePopup
              OnAddDialogue={this.OnAddDialogue}
              OnAbortClicked={this.OnCreateDialogueAbortClicked}
            />
          ) : null}
          {this.state.navigation.showDeletePopup ? (
            <DialogueDeletePopup
              dialogue={this.state.toDeleteDialogue}
              OnDeleteDialogueConfirmed={this.OnDeleteDialoguePopupConfirmed}
              OnAbortClicked={this.OnDeleteDialogueAbortClicked}
            />
          ) : null}
          {this.state.navigation.triggers ? (
            <Triggers
              triggers={this.state.data.triggers}
              OnTriggersChanged={this.OnTriggersChanged}
            />
          ) : null}
          {this.state.navigation.conditions ? (
            <Conditions
              conditions={this.state.data.conditions}
              OnConditionsChanged={this.OnConditionsChanged}
            />
          ) : null}
        </div>
      </>
    );
  }
}
