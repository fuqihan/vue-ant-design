<template>
  <div id="app">
    <!-- <router-view/> -->
    <f-button type="primary" :onClick="aaa">fuqihan</f-button>
  </div>
</template>

<script>
import button from './components/button/button'
export default {
  name: 'App',
  data() {
    return {
      test: 'fuqihan'
    }
  },
  components: {
    'f-button': button
  },
  methods: {
    aaa() {
      console.log(this.test)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
