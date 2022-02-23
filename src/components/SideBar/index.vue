<template>
  <div>
    <el-menu
    :default-active="routeActive"
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

      <template v-for="item in menu" > 

        <template v-if="item.children && item.children.length > 0">
          <el-submenu :index="item.path" :key=item.path>

            <template slot="title">{{item.meta.title}}</template>

            <template v-for="sub in item.children">

              <template v-if="sub.children && sub.children.length > 0">
                <el-submenu :index="item.path + '/' + sub.path" :key="item.path + '/' + sub.path">

                  <template slot="title">{{sub.meta.title}}</template>
                  
                  <template v-for="child in sub.children">
                    <el-menu-item :index="item.path + '/' + sub.path + '/' + child.path" :key="item.path + '/' + sub.path + '/' + child.path">{{child.meta.title}}</el-menu-item>
                  </template>

                </el-submenu>
              </template>

              <template v-else>
                <el-menu-item :index="item.path + '/' + sub.path" :key="item.path + '/' + sub.path">{{sub.meta.title}}</el-menu-item>
              </template>

            </template>

          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item :index="item.path" :key=item.path> {{item.meta.title}} </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>
</template>

<script>
import {constantRouterMap} from "@/router/index"

export default {
  data(){
    return {

    }
  },
  computed: {
    menu(){
      return constantRouterMap
    },
    routeActive(){
      return this.$route.path
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>
/deep/.el-menu{
  border-right: none;
}
</style>