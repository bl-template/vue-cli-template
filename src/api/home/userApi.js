import request from "../../utils/axios"


/**
 * 获取文章列表
 * @param params
 * @returns {*}
 */
export const getArticles = (params) => request.request({
  api: '',
  method: 'get',
  params: params
});

/**
 * 获取指定文章
 * @param articleId 文章id
 * @returns {*}
 */
export const getArticle = (articleId) => request.request({
  api: '/' + articleId,
  method: 'get'
});

/**
 * 发布文章
 * @param params
 * @returns {*}
 */
export const addArticle = (params) => request.request({
  api: '',
  method: 'post',
  params: params
});

/**
 * 编辑文章
 * @param articleId 文章id
 * @param params
 * @returns {*}
 */
export const saveArticle = (articleId,params) => request.request({
  api: '/' + articleId,
  method: 'put',
  params: params
});
