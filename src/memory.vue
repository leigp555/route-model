<template>
  <div>
    <div class="link">
      <a href="/1" @click.prevent="change">去1号组件</a>
      <a href="/2" @click.prevent="change">去二号组件</a>
      <a href="/3" @click.prevent="change">去三号组件</a>
      <a href="/4" @click.prevent="change">去四号组件</a>
    </div>
    <div>
      <Component1 v-if="user==='Component1'"/>
      <Component2 v-if="user==='Component2'"/>
      <Component3 v-if="user==='Component3'"/>
      <Component4 v-if="user==='Component4'"/>
      <Component404 v-if="user==='Component404'"/>
    </div>
  </div>
</template>
<script>
import component1 from "./components/component1";
import component2 from "./components/component2";
import component3 from "./components/component3";
import component4 from "./components/component4";
import component404 from "./components/404.vue"
console.log("我是memory模式")
const RouteTable = {
  "/1": "Component1",
  "/2": "Component2",
  "/3": "Component3",
  "/4": "Component4"
}
let path = window.localStorage.getItem("xxx") || "/1"
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
      user: Component,

    }
  },
  methods: {
    change(e) {
      window.localStorage.setItem("xxx",e.target.getAttribute("href"))
      path = window.localStorage.getItem("xxx")
      Component = RouteTable[path.toString()]
      if (!Component) {
        this.user = 'Component404'
      } else {
        this.user = RouteTable[path.toString()]
      }
    },
  }
}


</script>
<style scoped>
.link > a {
  margin-left: 20px
}
</style>