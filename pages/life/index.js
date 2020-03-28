import React, {Component, Fragment} from 'react';
import Link from 'next/link'
import axios from 'axios';
import Router, {withRouter} from 'next/router'
import { LifeListRequest } from '../../config/request'

@withRouter

class Life extends Component{
	
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
		const { isEmpty } =  this.props;
		if(isEmpty){
			return false;
		}
		return(
			<Fragment>
				<div className='home-main-wrap wrap-lg clearfix'>
					<div className='life-main'>
						作者很懒，并没有留下什么～～
					</div>
				</div>
			</Fragment>
		)
	}

}


Life.getInitialProps = async function(context) {
	const {page} = context.query;
	const initPagination = {
		pageSize: 3,
		currentPage: page || 1,
		cat: 'life'
	}
	const articleList = await axios.post(LifeListRequest, initPagination);
	
	if(articleList.data.list.length){
        return {
			articleData: articleList.data,
			currentPage: Number(page)
		}
    }else{
        return {
            isEmpty: true
        }
    }
}


export default Life