import request from '@/router/axios'

export function getUserData(query) {
    return request({
        url: '/admin/user/allUser',
        method: 'get',
        params: query
    })
}
export const getUserInfo = () => {
    return request({
        url: '/admin/user/info',
        method: 'get',
    })
}
/**
 * 添加用户
 * @param params
 */
export function add(params) {
    return request({
        url: '/admin/user/add' ,
        method: 'post',
        data: params
    })
}
/**
 * 修改用户
 * @param params
 */
export function edit(params) {
    return request({
        url: '/admin/user/edit' ,
        method: 'post',
        data: params
    })
}
export const RefeshToken = () => {
    return new Promise((resolve) => {
        resolve({ data: new Date().getTime() });
    })
}

