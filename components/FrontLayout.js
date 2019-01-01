import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'
import '../assets/styles.less'

const FrontLayout = (props) => (
  <div>
    <HeaderBar />
    <main id="home-wrap">
      {props.children}
		</main>
    <FooterBar />
  </div>
)

export default FrontLayout