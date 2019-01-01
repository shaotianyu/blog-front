import React, { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';
import moment from 'moment'
import { Fragment } from 'react';
import { BlogDetailRequest } from '../../config/request'
import { Icon } from 'antd';
import marked from 'marked'
import hljs from 'highlight.js';

hljs.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
})
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_984288_zfefog30yj.js',
});

class Detail extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }

  render(){

    const { content, title, date, _id, tag } = this.props.articleData;
    const output = marked(content);
    return(
        <main className="blog-detail-main">
          <div className="blog-detail-head">
            <h1 className="blog-detail-title">{title}</h1>
            <p className="blog-detail-info">
              <span><IconFont type="icon-shijian" />{date}</span>
              <span>
                【{tag.length ? tag.join(' | ') : '个人博客'}】
              </span>
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: output }} />
        </main>
    )
  }

}

Detail.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await axios.get(BlogDetailRequest(id));
  return {
    articleData: res.data.data
  }
}

export default Detail