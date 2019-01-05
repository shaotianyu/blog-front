import Header from './Header'
import Link from 'next/link'
import React, {Component, Fragment} from 'react'
import Router, {withRouter} from 'next/router'
import NProgress from 'nprogress'
import { connect } from 'react-redux';
import IconFont from '../config/iconfont'
import MobileSide from './MobileSide'
import {toggleDispatch, hideDispatch} from '../store/redux/menu-redux'

@withRouter

@connect(
	state => state.SideReducer,
	{toggleDispatch, hideDispatch}
)

class HeaderBar extends Component{

    toggleSide(){
        this.props.toggleDispatch()
    }

    progress(){
        //进度条
        Router.onRouteChangeStart = (url) => NProgress.start()
        Router.onRouteChangeComplete = () =>  {
            this.props.hideDispatch();
            NProgress.done();
        }
        Router.onRouteChangeError = () => NProgress.done()
    }

    render(){
        this.progress();
        const {pathname} = this.props.router;
        const blogPath = ['/blog', '/detail', '/classify'];
        const {sideShow} = this.props;
        return  (
            <Fragment>
                <Header />
                <MobileSide pathname={pathname} blogPath={blogPath} sideShow={sideShow} toggle={()=>this.toggleSide()}/>
                <header className="head-wrap clearfix">
                    <div className="wrap-lg">
                        <IconFont type="icon-webicon03" className='head-menu mobile-show' onClick={()=>this.toggleSide()}/>
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