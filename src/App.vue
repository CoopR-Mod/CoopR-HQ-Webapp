<template>
  <v-app>
    <ToolBar/>
    <v-content>
      <News/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import ToolBar from './components/ToolBar'
  import News from './components/News'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      ToolBar,
      News,
      Footer
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
   background-color: rgba(100,100,100,1) ;


 }
</style>
