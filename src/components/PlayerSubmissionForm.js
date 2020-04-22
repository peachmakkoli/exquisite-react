import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          <div>
            <span>{props.fields[0]}</span>
          </div>

          <div>
            <label htmlFor={props.fields[1].key}>{props.fields[1].placeholder}</label>
              <input 
                name={props.fields[1].key} 
                placeholder={props.fields[1].placeholder}
                value={props.fields[1].value}
              />
          </div>

          <div>
            <label htmlFor={props.fields[2].key}>{props.fields[2].placeholder}</label>
              <input 
                name={props.fields[2].key} 
                placeholder={props.fields[2].placeholder}
                value={props.fields[2].value}
              />
          </div>

          <div>
            <label htmlFor={props.fields[3].key}>{props.fields[3].placeholder}</label>
              <input 
                name={props.fields[3].key} 
                placeholder={props.fields[3].placeholder}
                value={props.fields[3].value}
              />
          </div>

          <div>
            <label htmlFor={props.fields[4].key}>{props.fields[4].placeholder}</label>
              <input 
                name={props.fields[4].key} 
                placeholder={props.fields[4].placeholder}
                value={props.fields[4].value}
              />
          </div>

          <div>
            <span>{props.fields[5]}</span>
          </div>

          <div>
            <label htmlFor={props.fields[6].key}>{props.fields[6].placeholder}</label>
              <input 
                name={props.fields[6].key} 
                placeholder={props.fields[6].placeholder}
                value={props.fields[6].value}
              />
          </div>

          <div>
            <label htmlFor={props.fields[7].key}>{props.fields[7].placeholder}</label>
              <input 
                name={props.fields[7].key} 
                placeholder={props.fields[7].placeholder}
                value={props.fields[7].value}
              />
          </div>

          <div>
            <span>{props.fields[8]}</span>
          </div>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
