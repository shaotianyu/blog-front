const dev = process.env.NODE_ENV !== 'production';
const LOCAL_HOST = "http://localhost:8081";
const LINE_HOST = "https://api.shaotianyu.com";

const REQUEST_HOST = dev ? LOCAL_HOST : LINE_HOST

export default REQUEST_HOST
