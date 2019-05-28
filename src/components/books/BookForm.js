import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class BookForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  state = {
    title: '',
    author: '',
    imageUrl: '' 
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, author, imageUrl } = this.state;
    this.props.onSubmit(title, author, imageUrl);
    this.setState({ title: '', author: '', imageUrl: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, author, imageUrl } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={title} placeholder="Enter Title" onChange={this.handleChange} />
        <input name="author" value={author} placeholder="Enter Author" onChange={this.handleChange} />
        <input name="imageUrl" value={imageUrl} placeholder="Enter Url" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

