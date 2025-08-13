import { createRouter, createWebHistory } from 'vue-router'
import Page1View from "@/views/Page1View.vue";
import Page2View from "@/views/Page2View.vue";
import Page3View from "@/views/Page3View.vue";
import Page4View from "@/views/Page4View.vue";
import Page5View from "@/views/Page5View.vue";
import Page6View from "@/views/Page6View.vue";
import Page7View from "@/views/Page7View.vue";
import Page8View from "@/views/Page8View.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1View,
      meta: {
        title: 'Page 1'
      }
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2View,
      meta: {
          title: 'Page 2'
      }
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3View,
      meta: {
        title: 'Page 3'
      }
    },
    {
      path: '/page4',
      name: 'page4',
      component: Page4View,
      meta: {
      title: 'Page 4'
      }
    },
    {
      path: '/page5',
      name: 'page5',
      component: Page5View,
      meta: {
        title: 'Page 5'
      }
    },
    {
      path: '/page6',
      name: 'page6',
      component: Page6View,
      meta: {
        title: 'Page 6'
      }
    },
    {
      path: '/page7',
      name: 'page7',
      component: Page7View,
      meta: {
        title: 'Page 7'
      }
    },
    {
      path: '/page8',
      name: 'page8',
      component: Page8View,
      meta: {
        title: 'Page 8'
      }
    }
  ],
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
