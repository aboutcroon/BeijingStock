/**
 * Created by butiantong on 2020/5/13.
 * 侧边栏动态路由数据，包括权限
 */
import Layout from '@/layout'
import fa from 'element-ui/src/locale/lang/fa'

const sideBarRouter = {
  // 所有侧边栏数据在data中配置
  // 权限说明：0：超管
  data: [{
    path: '/',
    component: Layout,
    redirect: '/users/user',
    // hidden: true,
    permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/home'),
        name: 'home',
        meta: { title: '概览', icon: 'iconhome' },
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
        nav: { '0': 2, '1': 1, '2': 1, '3': 0, '4': 0, 'default': 0 }
      },
      {
        path: 'test',
        component: () => import('@/views/home/test'),
        name: 'test',
        meta: { title: '调试页' },
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true }
        // permission: { '0': false, '1': false, '2': false, '3': false, '4': false, 'default': true },
      },
      {
        path: 'Block_details',
        component: () => import('@/views/home/block'),
        name: 'block',
        hidden: true,
        meta: { title: '区块详情' },
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true }
      },
      {
        path: 'transaction_details',
        component: () => import('@/views/home/details'),
        name: 'details',
        hidden: true,
        meta: { title: '交易详情' },
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true }
      },
      {
        path: 'home-user',
        component: () => import('@/views/home/user'),
        name: 'home_user',
        hidden: true,
        meta: { title: '个人中心' },
        permission: { '0': false, '1': true, '2': true, '3': true, '4': true, 'default': true }
      },
      {
        path: 'home-node-info',
        component: () => import('@/views/home/node-info'),
        name: 'home_node_info',
        hidden: true,
        meta: { title: '节点信息管理' },
        permission: { '0': false, '1': true, '2': true, '3': true, '4': true, 'default': true }
      }
    ]
  }, {
    path: '/company',
    component: Layout,
    meta: { title: '登记托管', icon: 'iconsave' },
    hidden: true,
    permission: { '0': false, '1': false, '2': true, '3': false, '4': false, 'default': true },
    children: [
      {
        path: 'fetch',
        component: () => import('@/views/company/index'),
        name: 'company_fetch',
        meta: { title: '登记托管' },
        permission: { '0': false, '1': false, '2': true, '3': false, '4': false, 'default': true }
      }
    ]
  }, {
    path: '/users',
    redirect: '/users/admin',
    component: Layout,
    permission: { '0': true, '1': false, '2': false, '3': false, '4': false, 'default': true },
    hidden: true,
    meta: { title: '我的账号', icon: 'iconuser-guanli' },
    children: [
      {
        path: 'user',
        component: () => import('@/views/user/index'),
        name: 'user',
        permission: { '0': true, '1': true, '2': true, '3': true, '4': false, 'default': true },
        meta: { title: '我的账号' }
      }, {
        path: 'admin',
        component: () => import('@/views/admin/index'),
        name: 'admin',
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
        meta: { title: '我的账号' }
      }, {
        path: 'audit',
        component: () => import('@/views/audit/index'),
        name: 'audit',
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
        meta: { title: '登记审批' }
      }, {
        path: 'download',
        component: () => import('@/views/user/download'),
        name: 'user_download',
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
        meta: { title: '凭证下载' }
      }, {
        path: 'form-detail',
        component: () => import('@/views/user/form-detail'),
        name: 'user_form_detail',
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
        meta: { title: '我的申请单' }
      }, {
        path: 'form-detail-admin',
        component: () => import('@/views/admin/form-detail'),
        name: 'user_form_detail',
        permission: { '0': true, '1': true, '2': true, '3': true, '4': true, 'default': true },
        meta: { title: '他的申请单' }
      }
    ]
  }]
}

export default sideBarRouter
