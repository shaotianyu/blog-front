
import React, { Component } from 'react';
import Link from 'next/link'
import { Icon } from 'antd';
import { withRouter } from 'next/router'

@withRouter

class SideList extends Component{


    render(){
        const {source, tagSource, classify, router} = this.props;
        return (
            <aside className="article-side pc-show"> 
                <div className="article-side-tags clearfix">
                        <Link href="/blog">
                            <a title="全部文章">
                                <span className={router.pathname == '/blog' ? 'link-active' : ''}>
                                    <Icon type="tag" />
                                    全部文章
                                </span>
                            </a>
                        </Link>
                    {
                        tagSource.map(item => (
                            <Link as={`/blog/classify/${item.name}`} href={`/classify?classify=${item.name}`} key={item._id}>    
                                <a title={item.name} >
                                    <span className={classify == item.name ? 'link-active' : ''}>
                                        <Icon type="tag" />
                                        {item.name}
                                    </span>
                                </a>
                            </Link>
                        ))
                    }
                </div>
                <article className="article-side-list">
                    <h1 className="a-title">推荐文章</h1>
                    <ul>
                        {
                            source.map(item => (
                                <li key={item._id}>
                                    <Link as={`/article/${item._id}`} href={`/detail?id=${item._id}`}>
                                        <a title={item.title}><i className='title-tag'>#</i>{item.title}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </article> 
            </aside>  
        )
    }
}


export default SideList