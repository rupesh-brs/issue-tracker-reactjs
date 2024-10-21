import React, { useState } from "react";

export const IssueForm = () => {
  let [des, setDes] = useState("");

  return (
    <div className="jumbotron">
      <h4>Add New Issue Details</h4>
      <form id="issueInputForm">
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
            onChange={event => {
              setDes(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="issuePriorityInput">
            Priority <span className="text-danger">*</span>
          </label>
          <select id="issuePriorityInput" className="form-control">
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
            placeholder="Assiged To ...."
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

