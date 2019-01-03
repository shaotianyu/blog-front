import React from 'react'
import Link from 'next/link'
import IconFont from '../config/iconfont'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <main className='error-page wrap-lg'>
        <IconFont type="icon-icon-test" />
        页面好像走丢了，你可以去
        <Link href='/blog'><a className='link-home'>首页</a></Link>
        看看
        <style global jsx>{`
        .error-page{
            padding-top: 50px;
            text-align: center;
            min-height:500px;
        }
        .anticon{
            font-size:200px;
            display:block;
        }
        .link-home{
            font-size:16px;
            padding:0 10px;
        }
        `}</style>
      </main>
    )
  }
}
