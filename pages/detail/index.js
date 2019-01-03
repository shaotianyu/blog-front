import React, { Component } from 'react';
import axios from 'axios';
import { BlogDetailRequest } from '../../config/request'
import dynamic from 'next/dynamic'

const MarkEditor = dynamic(import('./detail'))

class Index extends Component{
    render(){
        const {articleData} = this.props;
        return(
            <div>
                <div className='mark-edit-wrap'>
                    <MarkEditor articleData={articleData}/>
                </div>
            </div>
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
