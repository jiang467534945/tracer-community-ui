import request from '@/router/axios'

/**
 * 查看角色列表分页查询
 * @param query
 * @constructor
 */
export function GetPage(query) {
    return request({
        url: '/admin/adminSystem/pageList',
        method: 'get',
        params: query
    })
}

/**
 * 查看角色详情，根据ID查询
 * @param id
 */
export function getObj(id) {
    return request({
        url: '/admin/adminSystem/' + id,
        method: 'get'
    })

}

/**
 * 添加角色
 * @param params
 */
export function add(params) {
    return request({
        url: '/admin/adminSystem/add' ,
        method: 'post',
        data: params
    })
}

/**
 * 删除角色
 * @param id
 */
export  function  del(id) {
    return request({
        url: '/admin/adminSystem/' + id,
        method: 'delete'
    })
}

/**
 * 修改角色
 * @param params
 */
export function edit(params) {
    return request({
        url: '/admin/adminSystem/edit' ,
        method: 'put',
        data: params
    })
}



