import { Icon } from 'antd';
import Link from 'next/link'
import IconFont from '../config/iconfont'

const Side = () => (
    <aside id="common-side">
        <div className="avator-box">
            <img src="/static/avator.jpg" />
        </div>
        <p className="name-box">邵天宇的个人网站</p>
        <div className="side-cat">
            <ul>
                <li>
                    <a href="javascript:void(0);" className="link-active">主页</a>
                </li>
                <li className='mobile-show'>
                    <Link href="/blog"><a>技术博客</a></Link>
                </li>
                <li className='mobile-show'>
                    <Link href="/life"><a>生活记录</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>关于我</a></Link>
                </li>
                <li>
                    <Link href="/board"><a>留言板</a></Link>
                </li>
            </ul>
        </div>
        <div className="person-link">
            <a href="https://github.com/shaotianyu" target="_blank" title="我的github"><Icon type="github" /></a>
            <a href="https://blog.csdn.net/qq_35087256" target="_blank" title="我的csdn"><IconFont type="icon-CN_csdnnet" /></a>
        </div>
    </aside>
)
  
export default Side