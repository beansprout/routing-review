import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ListFormFunc = ({ handleSubmit }) => (
      //handleSubmit is a redux form thing used at the end when form is submitted - its how reduxForm knows you are done. Doesn't do the actual 'submitting'
      // to actually submit you have to use the onSubmit prop
      <form onSubmit={ (...args) => {
        args[0].preventDefault();
        console.log(args)} }>
        <div>
          <label htmlFor="actionName">Do</label>
          <Field name="actionName" component="input" type="text"/>
        </div>

        <button type="submit">Submit</button>
      </form>
)


//Decorate the form
const ListForm = reduxForm({
  form: 'listForm' // a unique name for this form
})(ListFormFunc);

export default ListForm;

  // <div>
  //         <label htmlFor="actionObject">What</label>
  //         <Field name="actionObject" component="input" type="text"/>
  //       </div>
  //       <div>
  //         <label htmlFor="actionWhere">Where</label>
  //         <Field name="actionWhere" component="input" type="text"/>
  //       </div>
  //       <div>
  //         <label htmlFor="instructionData">instructions</label>
  //         <Field name="instructionData" component="input" type="text"/>
  //       </div>