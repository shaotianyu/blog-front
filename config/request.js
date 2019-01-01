import REQUEST_HOST from './host'

//文章列表
export const BlogListRequest = `${REQUEST_HOST}/article/list`;
//文章详情
export const BlogDetailRequest = id => `${REQUEST_HOST}/article/detail/${id}`;
//文章标签列表
export const TagsListRequest = `${REQUEST_HOST}/article/tag`;
//特定文章标签列表
export const TagsSpecRequest  = `${REQUEST_HOST}/article/tag/classify`;
//生活文章列表
export const LifeListRequest = `${REQUEST_HOST}/article/life`;
//留言板发布
export const BoardPublishRequest = `${REQUEST_HOST}/board/publish`;
//留言板列表
export const BoardListRequest = `${REQUEST_HOST}/board/list`;