<template>
  <v-app>
    <ToolBar/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToolBar from '../components/ToolBar';
import Footer from '../components/Footer';

@Component({
  components: {
      ToolBar,
      Footer
  },
})
export default class Character extends Vue {}
</script>
