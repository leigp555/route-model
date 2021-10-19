<template>
  <div>
    <div class="link">
      <a href="#1" @click="change">去1号组件</a>
      <a href="#2" @click="change">去二号组件</a>
      <a href="#3" @click="change">去三号组件</a>
      <a href="#4" @click="change">去四号组件</a>
    </div>
    <div>
      <Component1 v-if="show==='Component1'"/>
      <Component2 v-if="show==='Component2'"/>
      <Component3 v-if="show==='Component3'"/>
      <Component4 v-if="show==='Component4'"/>
      <Component404 v-if="show==='Component404'"/>
    </div>
  </div>
</template>
<script>
import component1 from "./components/component1";
import component2 from "./components/component2";
import component3 from "./components/component3";
import component4 from "./components/component4";
import component404 from "./components/404.vue"

const RouteTable = {
  "#1": "Component1",
  "#2": "Component2",
  "#3": "Component3",
  "#4": "Component4"
}
let path = window.location.hash || "#1"
let Component = RouteTable[path.toString()]
if (!Component) {
  Component = 'Component404'
}
export default {
  components: {
    Component1: component1,
    Component2: component2,
    Component3: component3,
    Component4: component4,
    Component404: component404
  },
  data() {
    return {
      show: Component,

    }
  },
  methods: {
    route() {
      path = window.location.hash
      console.log(path)
      Component = RouteTable[path.toString()]
      if (!Component) {
        this.show = 'Component404'
      } else {
        this.show = RouteTable[path.toString()]
      }
    },
    change() {
      //先移除之前的事件监听再重新监听事件这样就不会把事件弄得越来越多
      window.removeEventListener("hashchange", this.route,false)
      window.addEventListener("hashchange", this.route,false)
    }
  }
}
</script>
<style scoped>
.link > a {
  margin-left: 20px
}
</style>