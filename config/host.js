const dev = process.env.NODE_ENV !== 'production';
const LOCAL_HOST = "https://127.0.0.1:3000";
const LINE_HOST = "https://api.shaotianyu.com";

const REQUEST_HOST = dev ? LOCAL_HOST : LINE_HOST

export default REQUEST_HOST
