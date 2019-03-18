import request from '@/router/axios'

/**
 * 所有菜单树机构查询
 * @param query
 */
export function fetchMenuTree(query) {
    return request({
        url: '/admin/menu/menuTree',
        method: 'get',
        params: query
    })
}

/**
 * 当前权限菜单树结构查询
 * @param query
 */
export function permessionTree(query) {
    return request({
        url: '/admin/menu/permessionTree',
        method: 'get',
        params: query
    })
}

/**
 * 根据ID查询菜单详情
 * @param id
 */
export function getObj(id) {
    return request({
        url: '/admin/menu/' + id,
        method: 'get'
    })

}

/**
 * 添加菜单
 * @param params
 */
export function addMenu(params) {
    return request({
        url: '/admin/menu/add' ,
        method: 'post',
        data: params
    })
}

/**
 *  修改菜单方法
 * @param params 菜单参数
 */
export function editMenu(params) {
    return request({
        url: '/admin/menu/edit',
        method: 'put',
        data: params
    })}
    /**
     *  修改菜单方法
     * @param params 菜单参数
     */
    export function delMenu(id) {
        return request({
            url: '/admin/menu/'+id,
            method: 'delete',
        })
}
