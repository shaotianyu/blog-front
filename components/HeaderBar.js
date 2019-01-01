import Header from './Header'
import Link from 'next/link'
import React, {Component, Fragment} from 'react'
import {withRouter} from 'next/router'

@withRouter

class HeaderBar extends Component{


    render(){
        const {pathname} = this.props.router;
        const blogPath = ['/blog', '/detail', '/classify'];
        return  (
            <Fragment>
                <Header />
                <header className="head-wrap clearfix">
                    <div className="wrap-lg">
                        <Link href="/">
                            <a><img src="/static/home-logo.png" className="head-logo"/></a>
                        </Link>
                        <div className="head-cat">
                            <Link href="/blog">
                                <a className={blogPath.indexOf(pathname)>-1 ? 'link-active':''}>技术博客</a>
                            </Link>
                            <Link href="/life">
                                <a className={pathname == '/life' ? 'link-active':''}>生活记录</a>
                            </Link>
                            <Link href="/about">
                                <a className={pathname == '/about' ? 'link-active':''}>关于我</a>
                            </Link>
                            <Link href="/board">
                                <a className={pathname == '/board' ? 'link-active':''}>留言板</a>
                            </Link>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default HeaderBar