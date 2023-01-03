<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <!-- 動態屬性添加方法 -->
            <router-link :to="{ name: '新增頁面' }" class="nav-link">新增頁面</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" style="height: 300vh">
    <router-view />
  </div>
  <router-link to="/newPage/routerNavigation">導覽路由</router-link>
</template>

<style lang="scss">
body {
  padding-top: 80px
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
  }
}
</style>
