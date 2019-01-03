import App, {Container} from 'next/app';
import Router, {withRouter} from 'next/router'
import {Provider} from 'react-redux'
import NProgress from 'nprogress'
import withReduxStore from '../store/with-redux-store'
import FrontLayout from '../components/FrontLayout';

@withReduxStore
@withRouter

class MyApp extends App {
	
  constructor(props) {
    super(props);
    const { Component, pageProps, router } = props;
    this.state = { Component, pageProps, router };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.Component !== prevState.Component
      || nextProps.pageProps !== prevState.pageProps
      || nextProps.router !== prevState.router) {
      return {
        Component: nextProps.Component,
        pageProps: nextProps.pageProps,
        router: nextProps.router
      };
    }
    return null;
  }

  componentDidMount(){
    let reallyDocumentTitle
    document.addEventListener('visibilitychange', event => {
      if (event.target.hidden || event.target.webkitHidden) {
        reallyDocumentTitle = document.title
        document.title = '你若盛开，清风自来'
      } else {
        document.title = reallyDocumentTitle
      }
    }, false)
  }

  
  render () {

    //进度条
    Router.onRouteChangeStart = (url) => {
      NProgress.start()
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()

    const { Component, pageProps, router, reduxStore } = this.props;
    return (
      <Container>
				<Provider store={reduxStore}>
					<FrontLayout>
						<Component {...pageProps} />
					</FrontLayout>
				</Provider>
      </Container>
    );
  }
  
}

export default MyApp
