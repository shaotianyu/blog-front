import React, { Component } from 'react';
import SimpleMDEEditor from 'yt-simplemde-editor';
import marked from 'marked';
import { Button, Input, Alert, notification } from 'antd';
import hljs from 'highlight.js';
import moment from 'moment'
import axios from 'axios';
import { BoardPublishRequest } from '../../config/request'
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

class MdEditor extends Component {
  state = {
    value: '',
    isWarning: false,
    warnMsg:'留言信息不完整'
  };

  renderMarkdown = text => marked(text, { breaks: true });

  async handleSubmit(){

    const {value, userName} = this.state;

    if(!value.replace(/^\s+|\s+$/g,"") || !userName.replace(/^\s+|\s+$/g,"")){

      this.setState({
        isWarning: true,
        warnMsg:'留言信息不完整'
      })

    }else{

      this.setState({
        isWarning: false
      });

      const data = {
        date: moment().format("YYYY-DD-MM HH:mm:ss"),
        value: this.state.value,
        username: this.state.userName
      }
      
      const res = await axios.post(BoardPublishRequest, data);
      if(res.data.code){
        notification['success']({
          message: '留言成功^~^',
          description: '放心吧，作者看到会回复你的',
        });
        this.setState({
          value: '',
          userName: ''
        });
        location.reload();
      }else{
        this.setState({
          isWarning: true,
          warnMsg: res.data.msg
        })
      }

    }
  }

  emitEmpty = () => {
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  render () {

    const editorProps = {
      value: this.state.value,
      getMdeInstance: simplemde => {
        this.simplemde = simplemde;
      },
      onChange: value => {
        this.setState({ value })
      },
      options: {
        autofocus:true,
        spellChecker: false,
        forceSync: true,
        previewRender: this.renderMarkdown,
        tabSize: 4,
        placeholder:'写点什么吧',
        toolbar: [
          'code',
          'link',
          'image',
          'preview'
        ],
        status:false
      }
    };

    const { userName, isWarning, warnMsg } = this.state;

    return (
      <div>
        <img src="/static/commet-avator.png" className='board-p-avator'/>
        <Input
          placeholder="写下你的名字吧"
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => this.userNameInput = node}
          className='board-name'
        />
        <SimpleMDEEditor {...editorProps} />
        <Alert message={warnMsg} type="warning" className={isWarning ? 'board-warning' : ''}/>
        <Button type='primary' className='f-r' onClick={()=>this.handleSubmit()}>留个言吧</Button>
        
        <style global jsx>{`
        button{
          margin-top: 10px;
        }
				`}</style>
      </div>
    )
  }
}

export default MdEditor