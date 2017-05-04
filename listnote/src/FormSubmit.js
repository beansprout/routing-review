import React from 'react';
import Form from './Form';

export default class FormSubmit extends Component {

  submit = (values) =>  {
    console.log('values: ', values);
    }
  render() {
    return (
      <Form onSubmit={this.submit} />
      );
    }
  }

