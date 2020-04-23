import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({ submission, revealPoem }) => {
  if (!submission || revealPoem) {
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
