<template>
  <button type="button" @click="getRoute">getRoute</button>

  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push () {
      this.$router.push('/about')
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({
        name: 'about'
      })
    },
    // 操作歷史紀錄
    go () {
      this.$router.go(-1)
    },
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      // 範例：this.$route.fullPath (目前網址)
      console.log(this.$route)
      // 呼叫路由的方法
      // 範例：this.$router.go(-1) (回到前一頁)
      console.log(this.$router)
    },
    // 延伸介紹
    addRoute () {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
