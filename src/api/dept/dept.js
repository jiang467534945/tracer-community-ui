import request from '@/router/axios'

/**
 * 部门分页查询
 * @param query
 * @constructor
 */
export function GetDeptData(query) {
    return request({
        url: '/admin/dept/pageList',
        method: 'get',
        params: query
    })
}

/**
 * 部门树结构
 * @param query
 */
export function fetchTree(query) {
    return request({
        url: '/admin/dept/tree',
        method: 'get',
        params: query
    })
}

/**
 * 查询部门详情
 * @param id
 */
export function getObj(id) {
    return request({
        url: '/admin/dept/' + id,
        method: 'get'
    })
}

/**
 * 新增部门
 * @param params
 */
export function addDept(params) {
    return request({
        url: '/admin/dept/add',
        method: 'post',
        data: params
    })
}

/**
 * 删除部门
 * @param id
 */
export function delDept(id) {
    return request({
        url: '/admin/dept/' + id,
        method: 'delete'
    })
}

/**
 * 修改部门
 * @param params
 */
export function editDept(params) {
    return request({
        url: '/admin/dept/edit',
        method: 'put',
        data: params
    })
}

