import React, { useState } from "react";

export const IssueForm = () => {
  const [des, setDes] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");
  const [submittedIssue, setSubmittedIssue] = useState(null);
  const [showIssueTracker, setShowIssueTracker] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set the submitted issue details
    setSubmittedIssue({ description: des, priority, assignedTo });
    // Hide the issue tracker
    setShowIssueTracker(false);
    // Reset the form fields
    setDes("");
    setAssignedTo("");
    setPriority("Low");
  };

  return (
    <div>
      {showIssueTracker ? (
        <div className="jumbotron">
          <h4>Add New Issue Details</h4>
          <form id="issueInputForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="issueDecInput">
                Description <span className="text-danger">*</span>
              </label>
              <input
                id="issueDecInput"
                className="form-control"
                type="text"
                placeholder="Please Add Description ...."
                value={des}
                onChange={event => setDes(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="issuePriorityInput">
                Priority <span className="text-danger">*</span>
              </label>
              <select
                id="issuePriorityInput"
                className="form-control"
                value={priority}
                onChange={event => setPriority(event.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="issueAssignInput">
                Assigned To <span className="text-danger">*</span>
              </label>
              <input
                id="issueAssignInput"
                className="form-control"
                type="text"
                placeholder="Assigned To ...."
                value={assignedTo}
                onChange={event => setAssignedTo(event.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </form>
        </div>
      ) : (
        <div className="alert alert-success">
          <h4>Issue Submitted</h4>
          <p><strong>Description:</strong> {submittedIssue.description}</p>
          <p><strong>Priority:</strong> {submittedIssue.priority}</p>
          <p><strong>Assigned To:</strong> {submittedIssue.assignedTo}</p>
        </div>
      )}
    </div>
  );
};
