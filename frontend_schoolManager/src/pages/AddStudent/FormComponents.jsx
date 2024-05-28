// FormComponents.jsx

import React from 'react';

const FormInput = ({ label, name, value, onChange,error }) => (
  <div className="col-md-4">
    <label htmlFor={name} className="form-label">{label}</label>
    <input type="text" className={`form-control ${error ? 'is-invalid' : ''}`} id={name} name={name} value={value} onChange={onChange} />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default FormInput;


const FormRadio = ({ label, name, options, value, onChange }) => (
  <div className="col-md-6 d-flex my-3">
    <label className="form-label me-5">{label}</label>
    {options.map((option, index) => (
      <div className="form-check me-4" key={index}>
        <input className="me-2" type="radio" name={name} id={`${name}-${option}`} value={option} checked={value === option} onChange={onChange} />
        <label className="form-check-label" htmlFor={`${name}-${option}`}>
          {option}
        </label>
      </div>
    ))}
  </div>
);

export { FormInput, FormRadio };
