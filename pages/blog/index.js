import React, {Component} from 'react';
import Link from 'next/link'
import axios from 'axios';
import { Pagination } from 'antd';
import Router, {withRouter} from 'next/router'
import { BlogListRequest, TagsListRequest } from '../../config/request'
import ArticleList from './list'
import SideList from './side'

@withRouter

class Blog extends Component{

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
		Router.push(`/blog/${page}`);
	}

	paginationRender(page, type, originalElement){

		if (type === 'prev') {
			return <a title="上一页">上一页</a>;
		} else if (type === 'next') {
			return <a title="下一页">下一页</a>;
		}
			
		return (
			<Link as={`/blog/${page}`} href={`/blog?page=${page}`}>
				<span>{page}</span>
			</Link>
		)
	}

	render(){
		const { currentPage, recommendData, tagData, router, isEmpty } =  this.props;
		if(isEmpty){
			router.push(`/blog`); 
			return false;
		}
		const { list, total } = this.props.articleData;
		const articleList = list;
		const totalPage = total;
		const { pageSize} = this.state;

		return(
			<main className="home-main-wrap wrap-lg">
				<div className="home-main-content clearfix">
					<ArticleList source={articleList} />
					<SideList source={recommendData} tagSource={tagData} />
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
					padding-top: 30px;
				}
				`}</style>
			</main>
		)
	}

}

Blog.getInitialProps = async function(context) {
	const {page} = context.query;
	const initPagination = {
		pageSize: 5,
		currentPage: page || 1,
		cat: 'technology'
	}
	const articleList = await axios.post(BlogListRequest, initPagination);
	const recommendList = await axios.post(BlogListRequest, {type: 'recommend', cat: 'technology'});
	const tagList = await axios.get(TagsListRequest);
	
	if(articleList.data.code){
        return {
			articleData: articleList.data,
			currentPage: Number(page),
			recommendData: recommendList.data.list || [],
			tagData: tagList.data.list || []
		}
    }else{
        return {
            isEmpty: true
        }
    }
}

export default Blog