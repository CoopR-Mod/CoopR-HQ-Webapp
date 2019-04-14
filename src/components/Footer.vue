<template>
  <v-footer app dark color="rgba(75,75,75,1)" class="pa-3">
    <v-layout text-xs-center>
      <v-flex row xs12>
        <a class="no-underline" target="_blank"
           href="https://www.youtube.com/watch?v=rsItYfsK0qo&list=PLk6AE-7-HXP5CUk7Wtg8bqSjD0D2DVAa8">
          <v-icon>fab fa-youtube</v-icon>
        </a>
      </v-flex>
      <v-flex row xs12>
        <a class="no-underline" target="_blank" href="https://www.instagram.com/cooprmod/">
          <v-icon>fab fa-instagram</v-icon>
        </a>
      </v-flex>
      <v-flex row xs12>
        <a class="no-underline" target="_blank" href="https://github.com/CoopR-Mod/CoopR-Mod">
          <v-icon>fab fa-github</v-icon>
        </a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({})
  export default class Footer extends Vue {
  }
</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
