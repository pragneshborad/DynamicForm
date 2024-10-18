import React, { useState } from 'react';

const DynamicForm = () => {
  // State to manage form fields
  const [fields, setFields] = useState([{ value: "" }]);

  // Handle adding new field
  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  // Handle removing a field
  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Handle input change for dynamic fields
  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data: ", fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Form</h2>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder={`Field ${index + 1}`}
            value={field.value}
            onChange={(e) => handleInputChange(index, e)}
            style={{ padding: '5px', width: '300px' }}
          />
          <button
            type="button"
            onClick={() => handleRemoveField(index)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddField}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Field
      </button>

      <button
        type="submit"
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
