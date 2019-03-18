import request from '@/router/axios';
import {getToken} from '@/util/auth'

var grant_type = 'password';
var client_id = 'tracer';
var client_secret = 'tracer';
var scope = 'server';
var refresh_token = getToken();

export const loginByUsername = (username, password) => request({
    url: '/auth/oauth/token',
    method: 'post',
    params: {username, password, grant_type, client_id, client_secret, scope}
})

export const getUserInfo = () => request({
    url: '/admin/user/info',
    method: 'get',
});

export const RefeshToken = () => request({
    url: '/auth/oauth/token',
    method: 'post',
    params: {refresh_token, grant_type, client_id, client_secret}
})

export const getMenu = (type) =>
    request(
    {
    url: '/admin/menu/userMenu',
    method: 'get',
        params: {type}
    });

export const getMenuAll = () => request({
    url: '/admin/menu/userMenu',
    method: 'get',
    data: {
        systemType: 0
    }
});

export const getTableData = (page) => request({
    url: '/user/getTable',
    method: 'get',
    data: {
        page
    }
});

export const logout = () => request({
    url: '/user/logout',
    method: 'get'
})
