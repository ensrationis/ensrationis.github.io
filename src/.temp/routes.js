export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/ens/git/gridsome-blog-template/src/templates/Tag.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/ens/git/gridsome-blog-template/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/ens/git/gridsome-blog-template/src/templates/Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/ens/git/gridsome-blog-template/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/ens/git/gridsome-blog-template/node_modules/gridsome/app/pages/404.vue")
  }
]

