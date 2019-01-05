
import React, {Component, Fragment} from 'react';
import Link from 'next/link'
import IconFont from '../../config/iconfont';

class ArticleList extends Component{


    render(){
        const {source, classify} = this.props;
        return (
            <Fragment>  
                <article className="article-list">
                    <h1 className="a-title pc-show">{classify?classify:'全部文章'}</h1>
                    <ul>
                        {
                            source.map(item => (
                                <li key={item._id}>
                                    <Link as={`/p/${item._id}`} href={`/detail?id=${item._id}`}>
                                        <a className="article-head" title={item.title}>
                                            <span className="article-tag">
                                                {item.tag.length ? item.tag.map(val=>{
                                                    return <em key={val} className="tag-ele">{val}</em>
                                                }) : '个人博客'}
                                            </span>
                                            <h3 className="article-title">{item.title}</h3>
                                        </a>
                                    </Link>
                                    <div className="article-main">
                                        <p className="article-desc">
                                            <Link as={`/p/${item._id}`} href={`/detail?id=${item._id}`}>
                                                <a title={item.title}>
                                                    {item.description}
                                                </a>
                                            </Link>
                                        </p>
                                        {
                                            item.preview ? <img src={item.preview} className="article-preview" alt={item.title}/> : ''
                                        }
                                    </div>
                                    <div className="article-info">
                                        <span>
                                            <IconFont type="icon-shijian" />
                                            {item.date} 
                                        </span>
                                        <Link as={`/p/${item._id}`} href={`/detail?id=${item._id}`}>
                                            <a className="article-link" title={item.title}>阅读原文>></a>
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </article>
            </Fragment>  
        )
    }
}

export default ArticleList