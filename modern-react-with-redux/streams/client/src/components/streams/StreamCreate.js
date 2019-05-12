import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input, label, meta }) {

    return (
        <div className='field'>
          <label>{label}</label>
          <input type='text' {...input} />
          <div>{meta.error}</div>
        </div>
    )
  }

  onSubmit(formValues) {

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
        <Field 
          name='stream_title' 
          component={this.renderInput} 
          label='Enter Title' 
        />
        <Field 
          name='stream_description' 
          component={this.renderInput} 
          label='Enter Description' 
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }

}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.stream_title) {
    errors.stream_title = 'You must enter a title'
  }

  if (!formValues.stream_description) {
    errors.stream_description = 'You must enter a description'
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);