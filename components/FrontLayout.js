import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'
import { BackTop } from 'antd';
import '../assets/styles.less'

const FrontLayout = (props) => (
  <div>
    <HeaderBar />
    <main id="home-wrap">
      {props.children}
		</main>
    <FooterBar />
    <BackTop />
  </div>
)

export default FrontLayout