import request from '@/router/axios'

/**
 * 查看角色列表分页查询
 * @param query
 * @constructor
 */
export function GetRolePage(query) {
    return request({
        url: '/admin/role/pageList',
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
        url: '/admin/role/' + id,
        method: 'get'
    })

}

/**
 * 添加角色
 * @param params
 */
export function add(params) {
    return request({
        url: '/admin/role/add' ,
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
        url: '/admin/role/' + id,
        method: 'delete'
    })
}

/**
 * 修改角色
 * @param params
 */
export function edit(params) {
    return request({
        url: '/admin/role/edit' ,
        method: 'put',
        data: params
    })
}

/**
 * 根据角色名查询菜单
 * @param roleName
 */
export function fetchRoleTree(roleName) {
    return request({
        url: '/admin/menu/roleTree/' + roleName,
        method: 'get'
    })
}

/**
 * 权限赋值
 * @param roleId
 * @param menuIds
 */
export function permissionUpd(roleId, menuIds) {
    return request({
        url: '/admin/role/roleMenuUpd',
        method: 'put',
        params: {
            roleId: roleId,
            menuIds: menuIds
        }
    })
}
