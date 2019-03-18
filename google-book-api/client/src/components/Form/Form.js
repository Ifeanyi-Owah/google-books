import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
    const bg = {backgroundColor:'#6a8dae', color:'#fff'};
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Enter Book Name"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button style={bg}
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form