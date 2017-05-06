import React from 'react';
import ListForm from './ListForm';

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

