<template>
  <v-app>
    <Banner/>
    <News/>
  </v-app>
</template>

<script>
  import Banner from './components/Banner'
  import News from './components/News'

  export default {
    name: 'App',
    components: {
      Banner,
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
