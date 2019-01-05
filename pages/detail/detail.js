import React, { Component } from 'react';
import IconFont from '../../config/iconfont';
import marked from 'marked'
import { connect } from 'react-redux';
import hljs from 'highlight.js';
import MarkNav from 'markdown-navbar';
import {toggleDispatch} from '../../store/redux/title-redux'

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

@connect(
  state => null,
  {toggleDispatch}
)


class Detail extends Component {

  constructor(props){
    super(props)
  }

  componentWillUnmount(){
    this.props.toggleDispatch();
  }

  render(){

    const { content, title, date, tag } = this.props.articleData;
    this.props.toggleDispatch(title);
    const output = marked(content);
    
    return(
        <main className='blog-detail wrap-lg clearfix'>
          <div className="blog-detail-main">
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
          </div>
          <div className='mark-bar-sticky'>
            <MarkNav
            className="article-menu pc-show"
            source={content}
            headingTopOffset={80}
            />
          </div>
        </main>
    )
  }

}

export default Detail