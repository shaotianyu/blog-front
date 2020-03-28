import Link from 'next/link'
import React, {Component, Fragment} from 'react'
import IconFont from '../config/iconfont'


class MobileSide extends Component{


  render(){

    const {pathname, blogPath, sideShow, toggle} = this.props;

    return  (
        <Fragment>
            <main className={`mobile-memu-wrap ${sideShow ? 'menu-display' : ''}`}>
                <div className='menu-mask mobile-show' onClick={toggle}></div>
                <aside className='mobile-menu mobile-show'>
                    <ul>
                        <li>
                            <Link href="/">
                                <a><IconFont type="icon-home"/>HOME</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className={blogPath.indexOf(pathname)>-1 ? 'link-active':''}><IconFont type="icon-demo"/>技术博客</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/life">
                                <a className={pathname == '/life' ? 'link-active':''}><IconFont type="icon-life"/>生活记录</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={pathname == '/about' ? 'link-active':''}><IconFont type="icon-guanyuwo"/>关于我</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/board">
                                <a className={pathname == '/board' ? 'link-active':''}><IconFont type="icon-liuyanban"/>留言板</a>
                            </Link>
                        </li>
                    </ul>
                </aside>
            </main>
        </Fragment>
    )
  }
}

export default MobileSide