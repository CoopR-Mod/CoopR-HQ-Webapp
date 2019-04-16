<template>
  <v-app>
    <ToolBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import ToolBar from './components/ToolBar';
  import News from './views/News';
  import Footer from './components/Footer';

  @Component({
    components: {
      ToolBar, News, Footer
    },
  })
  export default class App extends Vue {}

</script>


<style>
 #app {
   background-color: rgba(130,130,130,1) ;


 }
</style>
