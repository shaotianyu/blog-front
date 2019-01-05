import React, { Component } from 'react';
import axios from 'axios';
import { BlogDetailRequest } from '../../config/request'
import dynamic from 'next/dynamic'

const Detail = dynamic(import('./detail'))

class Index extends Component{
    render(){
        const {articleData} = this.props;
        return(
            <Detail articleData={articleData}/>
        )
    }
}

Index.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await axios.get(BlogDetailRequest(id));
  return {
    articleData: res.data.data
  }
}

export default Index
