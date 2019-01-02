import React, {Component} from 'react';
import Link from 'next/link'
import axios from 'axios';
import { Pagination } from 'antd';
import Router, {withRouter} from 'next/router'
import { BlogListRequest, TagsListRequest } from '../../config/request'
import ArticleList from '../blog/list'
import SideList from '../blog/side'

@withRouter

class Classify extends Component{

	constructor(props){
		super(props)
		this.state = {
			totalPage: 0,
			pageSize: 3,
			currentPage: 1,
			currentList: []
		}
	}

	paginationChange(page){
        const { classify } =  this.props;
		Router.push(`/blog/classify/${classify}/${page}`);
	}

	paginationRender(page, type, originalElement){

        const { classify } =  this.props;

		if (type === 'prev') {
			return <a title="上一页">上一页</a>;
		} else if (type === 'next') {
			return <a title="下一页">下一页</a>;
		}
			
		return (
			<Link as={`/blog/classify/${classify}/${page}`} href={`/classify?classify=${classify}&page=${page}`}>
				<span>{page}</span>
			</Link>
		)
    }


	render(){
        const { currentPage, recommendData, tagData, classify, isEmpty, router } =  this.props;
        if(isEmpty){
            router.push(`/blog/classify/${classify}`); 
            return false;
        }
		const { list, total } = this.props.articleData;
        const articleList = list;
        const totalPage = total;
		const { pageSize} = this.state;

		return(
			<main className="home-main-wrap wrap-lg">
				<div className="home-main-content clearfix">
					<ArticleList source={articleList} classify={classify}/>
					<SideList source={recommendData} tagSource={tagData} classify={classify} tagHandleClick={(val)=>this.tagHandleFun(val)}/>
				</div>
				<div className='pagination-wrap'>
					<Pagination 
						total={totalPage} 
						current={currentPage || 1}
						defaultPageSize={pageSize}
						onChange={this.paginationChange.bind(this)}
						itemRender={this.paginationRender.bind(this)}
					/>
				</div>
				<style global jsx>{`
				.ant-pagination{
					padding-top:30px;
				}
                .home-main-content{
                    margin-top: 0;
                }
				`}</style>
			</main>
		)
	}

}

Classify.getInitialProps = async function(context) {
	const {page, classify} = context.query;
	const initPagination = {
		pageSize: 3,
        currentPage: page || 1,
        classify
	}
    const classifyArticleList  = await axios.post(BlogListRequest, initPagination);
	const recommendList = await axios.post(BlogListRequest, {type: 'recommend'});
    const tagList = await axios.get(TagsListRequest);
    if(classifyArticleList.data.list.length){
        return {
            articleData: classifyArticleList.data,
            currentPage: Number(page),
            recommendData: recommendList.data.list || [],
            tagData: tagList.data.list || [],
            classify
        }
    }else{
        return {
            isEmpty: true,
            classify
        }
    }
    
}

export default Classify