import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box
    handleUserInput(e){
        console.log(this);
        this.setState({
            newNoteContent: e.target.value, //value of the text input
        })
    }
    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" 
                placeholder="Write a new note ..."
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}/>
                <button className="noteButton">Add Note</button>
            </div>
        );
    }
}

export default NoteForm