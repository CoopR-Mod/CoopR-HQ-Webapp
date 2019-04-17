<template>
  <v-footer app dark color="rgba(75,75,75,1)" height="auto">
    <v-layout row justify-space-around wrap>
      <template v-for="social in socialLinks">
        <v-flex xs2 text-xs-center>
          <a class="no-underline" target="_blank" :href="social.url">
            <v-icon class="pt-2" size="2em">{{ social.icon }}</v-icon>
          </a>
        </v-flex>
      </template>
      <v-flex xs2 text-xs-center>
        <router-link class="no-underline" to="/discord">
          <v-icon class="pt-2" size="2em">fab fa-discord</v-icon>
        </router-link>
      </v-flex>
      <v-flex xs12 class="pl-2"> alpha-v{{version}}-{{build}} </v-flex>
    </v-layout>
  </v-footer>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({})
    export default class Footer extends Vue {
        private version: string = "0.0.1";
        private build: number = process.env.VUE_APP_BUILD;
        private socialLinks: object[] = [
            {
                url: "https://www.youtube.com/watch?v=rsItYfsK0qo&list=PLk6AE-7-HXP5CUk7Wtg8bqSjD0D2DVAa8",
                icon: "fab fa-youtube",
            },
            {
                url: "https://www.instagram.com/cooprmod/",
                icon: "fab fa-instagram"
            },
            {
                url: "https://github.com/CoopR-Mod/CoopR-Mod",
                icon: "fab fa-github"
            }
        ]
    }
</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
