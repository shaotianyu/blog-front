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
				<div className="icp-content">
					<p>Copyright© 邵天宇</p>
					<p><a href="http://beian.miit.gov.cn/" target='_blank'>皖ICP备18006906号</a></p>
				</div>
			</main>
			<style global jsx>{`
			.head-wrap,
			.common-footer {
				display:none;
			}
			.icp-content {
				color: whitesmoke;
				position: absolute;
				bottom: 20px;
				right: 0;
				left: 0;
				margin: auto;
				width: fit-content;
				text-align: center;
			}
			.icp-content p {
				margin-bottom: 5px;
				font-size: 12px;
			}
			.icp-content p a {
				color: #fff;
			}
			`}</style>
		</Fragment>
)

export default Index