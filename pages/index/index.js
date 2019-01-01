import Link from 'next/link'
import { Fragment } from 'react';
import { Icon } from 'antd';
import Side from '../../components/Side'

const Index = () => (
		<Fragment>
			<Side />
			<main className="home-content">
				<div className="home-btngroup">
					<Link href="/blog"><a className="blog-btn"><Icon type="edit" />技术博客</a></Link>
					<Link href="/life"><a className="life-btn">生活记录<Icon type="swap-right" /></a></Link>
				</div>
			</main>
			<style global jsx>{`
			.head-wrap,
			.common-footer {
				display:none;
			}
			`}</style>
		</Fragment>
)

export default Index