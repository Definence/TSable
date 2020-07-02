import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

import rest from '../../utils/rest'

type RouteParams = {
  id: string,
}

interface IPost {
  title?: string,
  body?: string,
}

type PostState = {
  post: IPost,
}

class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
  state = {
    post: {
      title: '',
      body: '',
    },
  }

  async componentDidMount() {
    const id = this.props.match.params.id || '';

    const post = await rest<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    this.setState({ post })
  }

  render() {
    const { post } = this.state;
    const { title, body } = post;

    return (
      <section>
        <h1>Post</h1>
        <article>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      </section>
    );
  }
};

export default Post;
