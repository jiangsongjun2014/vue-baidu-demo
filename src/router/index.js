import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/index';
import AppMain from "@/components/AppMain/index"

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/base',
    name: 'base',
    component: Layout,
    redirect: '/base/mapcreate',
    meta: { title: '地图基础' },
    children: [
      {
        path: 'mapcreate',
        name: 'mapcreate',
        component: AppMain,
        meta: { title: '地图创建' },
        children: [
          {
            path: 'mapcreateGL',
            name: 'mapcreateGL',
            component: () => import('@/views/base/mapcreate/mapcreateGL/index'),
            meta: { title: '创建GL地图' }
          },
          {
            path: 'mapcreateTwo',
            name: 'mapcreateTwo',
            component: () => import('@/views/base/mapcreate/mapcreateTwo/index'),
            meta: { title: '创建两个GL地图' }
          },
          {
            path: 'mapcreateCity',
            name: 'mapcreateCity',
            component: () => import('@/views/base/mapcreate/mapcreateCity/index'),
            meta: { title: '创建GL地图城市为中心' }
          }
        ]
      },
      {
        path: 'mapattribute',
        name: 'mapattribute',
        component: AppMain,
        meta: { title: '地图属性' },
        children: [
          {
            path: 'mapattributeLevel',
            name: 'mapattributeLevel',
            component: () => import('@/views/base/mapattribute/mapattributeLevel/index'),
            meta: { title: '地图级别' }
          },
          {
            path: 'mapattributeLevelLimit',
            name: 'mapattributeLevelLimit',
            component: () => import('@/views/base/mapattribute/mapattributeLevelLimit/index'),
            meta: { title: '地图级别限制' }
          },
          {
            path: 'mapattributeCenter',
            name: 'mapattributeCenter',
            component: () => import('@/views/base/mapattribute/mapattributeCenter/index'),
            meta: { title: '地图中心点' }
          },
          {
            path: 'mapattribute3DView',
            name: 'mapattribute3DView',
            component: () => import('@/views/base/mapattribute/mapattribute3DView/index'),
            meta: { title: '地图3D视角' }
          },
          {
            path: 'mapattributePOI',
            name: 'mapattributePOI',
            component: () => import('@/views/base/mapattribute/mapattributePOI/index'),
            meta: { title: '地图POI' }
          },
          {
            path: 'mapattributeElement',
            name: 'mapattributeElement',
            component: () => import('@/views/base/mapattribute/mapattributeElement/index'),
            meta: { title: '地图元素' }
          },
          {
            path: 'mapattributeLuwang',
            name: 'mapattributeLuwang',
            component: () => import('@/views/base/mapattribute/mapattributeLuwang/index'),
            meta: { title: '地图地球路网' }
          },
          {
            path: 'mapattributeSkyBg',
            name: 'mapattributeSkyBg',
            component: () => import('@/views/base/mapattribute/mapattributeSkyBg/index'),
            meta: { title: '地图天空颜色' }
          }
        ]
      },
      {
        path: 'mapcontrol',
        name: 'mapcontrol',
        component: AppMain,
        meta: { title: '地图控件' },
        children: [
          {
            path: 'mapcontrolScale',
            name: 'mapcontrolScale',
            component: () => import('@/views/base/mapcontrol/mapcontrolScale/index'),
            meta: { title: '缩放控件' }
          },
          {
            path: 'mapcontrol3D',
            name: 'mapcontrol3D',
            component: () => import('@/views/base/mapcontrol/mapcontrol3D/index'),
            meta: { title: '3D控件' }
          },
          {
            path: 'mapcontrolPosition',
            name: 'mapcontrolPosition',
            component: () => import('@/views/base/mapcontrol/mapcontrolPosition/index'),
            meta: { title: '定位控件' }
          },
          {
            path: 'mapcontrolCity',
            name: 'mapcontrolCity',
            component: () => import('@/views/base/mapcontrol/mapcontrolCity/index'),
            meta: { title: '城市控件' }
          },
          {
            path: 'mapcontrolOther',
            name: 'mapcontrolOther',
            component: () => import('@/views/base/mapcontrol/mapcontrolOther/index'),
            meta: { title: '第三方控件' }
          },
          {
            path: 'mapcontrolCustom',
            name: 'mapcontrolCustom',
            component: () => import('@/views/base/mapcontrol/mapcontrolCustom/index'),
            meta: { title: '自定义控件' }
          }
        ]
      },
    ]
  },
  {
    path: '/overlay',
    name: 'overlay',
    component: Layout,
    meta: { title: '覆盖物' },
    redirect: '/overlay/overlaypublic',
    children: [
      {
        path: 'overlaypublic',
        name: 'overlaypublic',
        component: AppMain,
        meta: { title: '通用属性' },
        children: [
          {
            path: 'overlaypublicAddDel',
            name: 'overlaypublicAddDel',
            component: () => import('@/views/overlay/overlaypublic/overlaypublicAddDel/index'),
            meta: { title: '添加删除' },
          }
        ]
      },
      {
        path: 'overlaypoint',
        name: 'overlaypoint',
        component: AppMain,
        meta: { title: '点覆盖物' },
        children: [
          {
            path: 'overlaypointAdd',
            name: 'overlaypointAdd',
            component: () => import('@/views/overlay/overlaypoint/overlaypointAdd/index'),
            meta: { title: '点标注添加' },
          },
          {
            path: 'overlaypointDrag',
            name: 'overlaypointDrag',
            component: () => import('@/views/overlay/overlaypoint/overlaypointDrag/index'),
            meta: { title: '点标注物拖拽' },
          },
          {
            path: 'overlaypointCustomIcon',
            name: 'overlaypointCustomIcon',
            component: () => import('@/views/overlay/overlaypoint/overlaypointCustomIcon/index'),
            meta: { title: '点标注自定义图标' },
          },
          {
            path: 'overlaypointEvent',
            name: 'overlaypointEvent',
            component: () => import('@/views/overlay/overlaypoint/overlaypointEvent/index'),
            meta: { title: '点标注添加事件' },
          },
          {
            path: 'overlaypointHeight',
            name: 'overlaypointHeight',
            component: () => import('@/views/overlay/overlaypoint/overlaypointHeight/index'),
            meta: { title: '点标注带高度' },
          },
          {
            path: 'overlaypointHeightIcon',
            name: 'overlaypointHeightIcon',
            component: () => import('@/views/overlay/overlaypoint/overlaypointHeightIcon/index'),
            meta: { title: '点标注带高度图标' },
          },
          {
            path: 'overlaypointLabel',
            name: 'overlaypointLabel',
            component: () => import('@/views/overlay/overlaypoint/overlaypointLabel/index'),
            meta: { title: '点标注文本' },
          }
        ]
      },
      {
        path: 'overlayvector',
        name: 'overlayvector',
        component: AppMain,
        meta: { title: '矢量图形覆盖物' },
        children: [
          {
            path: 'overlayvectorLouKong',
            name: 'overlayvectorLouKong',
            component: () => import('@/views/overlay/overlayvector/overlayvectorLouKong/index'),
            meta: { title: '镂空面覆盖物' },
          },
          {
            path: 'overlayvectorUpdate',
            name: 'overlayvectorUpdate',
            component: () => import('@/views/overlay/overlayvector/overlayvectorUpdate/index'),
            meta: { title: '线面圆编辑' },
          },
          {
            path: 'overlayvectorBezierCurve',
            name: 'overlayvectorBezierCurve',
            component: () => import('@/views/overlay/overlayvector/overlayvectorBezierCurve/index'),
            meta: { title: '贝赛尔曲线' },
          }
        ]
      },
    ]
  },
  {
    path: '/mapvdata',
    name: 'mapvdata',
    component: Layout,
    meta: { title: '地图可视化' },
    redirect: '/mapvdata/mapvdatapoint',
    children: [
      {
        path: 'mapvdatapoint',
        name: 'mapvdatapoint',
        component: AppMain,
        meta: { title: '点图层' },
        children:[
          // {
          //   path: 'mapvdatapointsimple',
          //   name: 'mapvdatapointsimple',
          //   component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimple/index'),
          //   meta: { title: '简单点图' },
          // },
          {
            path: 'mapvdatapointchina',
            name: 'mapvdatapointchina',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointchina/index'),
            meta: { title: '全国点图' },
          },
          {
            path: 'mapvdatapointsimpleone',
            name: 'mapvdatapointsimpleone',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimpleone/index'),
            meta: { title: '普通点图一' },
          },
          {
            path: 'mapvdatapointsimpletwo',
            name: 'mapvdatapointsimpletwo',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimpletwo/index'),
            meta: { title: '普通点图二' },
          },
          {
            path: 'mapvdatapointsimplethree',
            name: 'mapvdatapointsimplethree',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimplethree/index'),
            meta: { title: '普通点图三' },
          },
          {
            path: 'mapvdatapointsimplefour',
            name: 'mapvdatapointsimplefour',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimplefour/index'),
            meta: { title: '普通点图四' },
          },
          {
            path: 'mapvdatapointsimplefive',
            name: 'mapvdatapointsimplefive',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimplefive/index'),
            meta: { title: '普通点图五' },
          },
          {
            path: 'mapvdatapointsimplesix',
            name: 'mapvdatapointsimplesix',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointsimplesix/index'),
            meta: { title: '普通点图六' },
          },
          {
            path: 'mapvdatapointicon',
            name: 'mapvdatapointicon',
            component: () => import('@/views/mapvdata/mapvdatapoint/mapvdatapointicon/index'),
            meta: { title: '图标点图' },
          },
        ]
      },
      {
        path: 'mapvdataline',
        name: 'mapvdataline',
        component: AppMain,
        meta: { title: '线图层' },
        children: [
          {
            path: 'mapvdatalinetwo',
            name: 'mapvdatalinetwo',
            component: () => import('@/views/mapvdata/mapvdataline/mapvdatalinetwo/index'),
            meta: { title: '轨迹飞线' },
          }
        ]
      }
    ]
  }
]


const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

export default router
