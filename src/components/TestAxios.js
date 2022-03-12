import axios from 'axios';
import React from 'react';
import { ENTRYPOINT } from '../config/entrypoint';

export class TextAxios extends React.Component {
  state = {
    tags: []
  }

  componentDidMount(){
    axios.get(ENTRYPOINT+'/tags')
    .then(res => {
      console.log(res.data["hydra:member"])
      this.setState({ tags : res.data["hydra:member"]});
    })
  }

  render() {
      return (
      <ul>
        { this.state.tags.map(tag => 
          <li key={tag["@id"]}>{tag.name}</li>
        )}
      </ul>
      );
  }
} 