import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import moment from 'moment'
moment.locale('zh-cn');

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

class BoardList extends Component{
    render(){

        const {boardsData} =this.props;

        return(
            <div className='board-list'>
            {
                boardsData.map(board=>(
                    <div className='item' key={board._id}>
                        <img src="/static/commet-avator.png" className='board-p-avator'/>
                        <div className='item-main'>
                            <span className='name'>
                                {board.username}
                                <i className='date'>{moment(board.date, "YYYY-DD-MM HH:mm:ss").fromNow()}</i>
                            </span>
                            <div className='board-mark' dangerouslySetInnerHTML={{ __html: marked(board.value) }} />
                        </div>
                        {board.reply.length ? board.reply.map((inner,index)=>(
                            <div className='item-inner' key={index}>
                                <img src="/static/avator.jpg" className='board-p-avator'/>
                                <div className='item-main'>
                                    <span className='name'>
                                        <span className='inner-author'>作者</span>
                                        回复@{board.username}
                                        <i className='date'>{moment(inner.date, "YYYY-DD-MM HH:mm:ss").fromNow()}</i>
                                    </span>
                                    <div className='board-mark' dangerouslySetInnerHTML={{ __html: marked(inner.value) }} />
                                </div>
                            </div>
                        )) : '' }
                       
                    </div>
                ))
            }
            </div>
        )
    }
}

export default BoardList