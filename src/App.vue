<template>
  <v-table :users_data="USERS"/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex';
import vTable from "./components/table/v-table.vue"

export default {
  name: 'App',
  components: {
    HelloWorld, vTable
  },
  data: () => {return {}},
  computed: {
    ...mapGetters(["USERS"])
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"])
  },
  mounted() {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
