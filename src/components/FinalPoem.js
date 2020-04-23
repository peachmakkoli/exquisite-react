import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({submissions, onButtonClickCallback, revealPoem}) => {
  const finalPoem = submissions.map(submission => <p key={submission.key}>The {submission.adj1} {submission.noun1} {submission.adv} {submission.verb} the {submission.adj2} {submission.noun2}.</p>);

  return (
    <div className="FinalPoem">
      <section className={revealPoem ? "FinalPoem__poem" : "FinalPoem__hide"}>
        <h3>Final Poem</h3>
        {finalPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={onButtonClickCallback}
          />
      </div>
    </div>
  );
}

export default FinalPoem;
