<template>
  <div>
    <SideNav />
    <ToggleButton />
    <router-view />
  </div>
</template>

<script>
import ToggleButton from './components/ToggleButton'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav,
    ToggleButton
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  .container {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
</style>
