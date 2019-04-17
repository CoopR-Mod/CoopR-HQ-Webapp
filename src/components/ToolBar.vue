<template>
  <v-toolbar app dark color="rgba(75,75,75,1)">
    <v-layout row align-center justify-space-around>
      <v-flex xs4>
        <router-link class="no-underline" to="/user">
          <v-avatar v-ripple color="rgba(85,85,85,1)">
            <v-img :src="require('../assets/bruders.jpg')" ></v-img>
          </v-avatar>
        </router-link>
      </v-flex>
      <v-flex xs2 text-xs-center>
        <router-link class="no-underline" to="/">
          <v-icon large>announcement</v-icon>
        </router-link>
      </v-flex>
      <v-flex xs2 text-xs-center>
        <router-link class="no-underline" to="/">
          <v-icon large>group</v-icon>
        </router-link>
      </v-flex>
      <v-flex xs2 text-xs-center>
        <router-link class="no-underline" to="/discord">
          <v-icon large>fab fa-discord</v-icon>
        </router-link>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({})
    export default class ToolBar extends Vue {
    }
</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
