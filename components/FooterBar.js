
import React, {Component} from 'react'

class FooterBar extends Component{
    render(){
        return  (
           <footer className="common-footer">
                Design by Shaotianyu&nbsp; &nbsp;皖ICP备18006906号-1
                <style global jsx>{`
                .common-footer {
                    margin-top: 80px;
                    padding-bottom:30px;
                    text-align:center;
                    color:#888;
                }
                `}</style>
           </footer>
        )
    }
}

export default FooterBar