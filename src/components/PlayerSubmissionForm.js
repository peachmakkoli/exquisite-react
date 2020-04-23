import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [ fieldInput, setFieldInput ] = useState(
    {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  );

  const onInputChange = (event) => {
    const { name, value } = event.target
    
    const newFieldInput = {
      ...fieldInput,
      [name]: value,
    };

    setFieldInput(newFieldInput);
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">

          <div>
            <span>The</span>
          </div>

          <div>
            <label htmlFor="adj1">adjective</label>
              <input 
                name="adj1" 
                placeholder="adjective"
                value={fieldInput.adj1}
                onChange={onInputChange}
              />
          </div>

          <div>
            <label htmlFor="noun1">noun</label>
              <input 
                name="noun1" 
                placeholder="noun"
                value={fieldInput.noun1}
                onChange={onInputChange}
              />
          </div>

          <div>
            <label htmlFor="adv">adverb</label>
              <input 
                name="adv" 
                placeholder="adverb"
                value={fieldInput.adv}
                onChange={onInputChange}
              />
          </div>

          <div>
            <label htmlFor="verb">verb</label>
              <input 
                name="verb" 
                placeholder="verb"
                value={fieldInput.verb}
                onChange={onInputChange}
              />
          </div>

          <div>
            <span>the</span>
          </div>

          <div>
            <label htmlFor="adj2">adjective</label>
              <input 
                name="adj2"
                placeholder="adjective"
                value={fieldInput.adj2}
                onChange={onInputChange}
              />
          </div>

          <div>
            <label htmlFor="noun2">noun</label>
              <input 
                name="noun2" 
                placeholder="noun"
                value={fieldInput.noun2}
                onChange={onInputChange}
              />
          </div>

          <div>
            <span>.</span>
          </div>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            value="Submit Line" 
            className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
