import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { RouteName } from '@/enums/router'
import Layout from '@/layout/Layout.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'panoramic',
                name: RouteName.Panoramic,
                component: () => import('@/pages/panoramic.vue'),
                meta: {
                    title: '全景大数据系统'
                }
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'class',
                name: RouteName.Class,
                component: () => import('@/pages/class.vue'),
                meta: {
                    title: '班级大数据'
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;