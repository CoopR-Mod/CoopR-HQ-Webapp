<template>
  <v-app>
    <ToolBar/>
    <News/>
  </v-app>
</template>

<script>
  import ToolBar from './components/ToolBar'
  import News from './components/News'

  export default {
    name: 'App',
    components: {
      ToolBar,
      News
    },
    data() {
      return {
        //
      }
    }
  }
</script>


<style>
 #app {
   background-color: rgba(85,85,85,1) ;


 }
</style>
