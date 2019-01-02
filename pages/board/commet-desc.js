import React, { Component } from 'react';

class CommetDesc extends Component{
    render(){
        return(
            <div className='board-side f-r'>
                <h3 className='title'>留言板说明：</h3>
                <p>1、头像是静态的，后期会优化，做成动态生成并支持缓存；</p>
                <p>2、内容支持markdown语法，但是需要手动输入对应语法，这个后期会改进为自动生成(javascript,html,css,shell)【我也不想造轮子】语法模板；</p>
                <p>3、上面都是废话，可以忽略</p>
            </div>
        )
    }
}


export default CommetDesc