<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action" aria-current="true">
          元件 A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action" aria-current="true">
          元件 B
        </router-link>
        <router-link to="/newpage/namedView/a2c" class="list-group-item list-group-item-action" aria-current="true">
          命名路由 a2c
        </router-link>
        <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-action" aria-current="true">
          命名路由 a2b
        </router-link>
        <router-link to="/newpage/dynamicRouter/55061c0fa1fcddb7" class="list-group-item list-group-item-action" aria-current="true">
          動態路由 ($route)
        </router-link>
        <router-link to="/newpage/dynamicRouterByProps/55061c0fa1fcddb7" class="list-group-item list-group-item-action" aria-current="true">
          動態路由 (props)
        </router-link>
        <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action" aria-current="true">
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
