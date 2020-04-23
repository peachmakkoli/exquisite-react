import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({ submission, revealPoem }) => {
  if (!submission || revealPoem) { // if submission is null, the code on line 11 will throw a TypeError
    return null;
  } else {
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">The {submission.adj1} {submission.noun1} {submission.adv} {submission.verb} the {submission.adj2} {submission.noun2}.</p>
      </div>
    );
  };
};

export default RecentSubmission;
