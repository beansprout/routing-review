import React from 'react';
import { Field, reduxForm } from 'redux-form';

const submit = (values) =>  {
  console.log('submit inside form')
  console.log('values: ', values);
};

// outside your render() method
// renderField checks the input and if user touched the inputfield and there is an error say error in span element.
const renderField = ({ input, meta: { touched, error } }) => (
    <div className="input-row">
      <label>[label]</label>
      <input {...input} type="text"/>
      {touched && error &&
       <span className="error">{error}</span>}
    </div>

// inside your render() method
//<Field name="myField" component={renderField}/>

const ListFormFunc = ({ handleSubmit }) => (
      <form onSubmit={ handleSubmit(submit) }>
        <div>
          <label htmlFor="actionName">Do</label>
          <Field name="actionName" component="renderField" type="text"/>
        </div>
        <div>
          <label htmlFor="actionObject">What</label>
          <Field name="actionObject" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="actionWhere">Where</label>
          <Field name="actionWhere" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="instructionData">instructions</label>
          <Field name="instructionData" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
)

//Decorate the form
const ListForm = reduxForm({
  form: 'listForm',
  // a unique name for this form
})(ListFormFunc);

export default ListForm;