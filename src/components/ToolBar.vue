<template>
  <v-toolbar v-ripple app dark color="rgba(75,75,75,1)">
    <router-link class="no-underline" @click.stop="drawer = !drawer" to="/user">
      <v-avatar v-ripple color="rgba(85,85,85,1)">
        <v-icon>perm_identity</v-icon>
      </v-avatar>
    </router-link>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-layout justify-space-between>
      <router-link class="no-underline" to="/">
        <v-icon>announcement</v-icon>
      </router-link>
      <v-icon>stars</v-icon>
      <router-link class="no-underline" to="/characters">
        <v-icon>group</v-icon>
      </router-link>
      <v-icon>settings_applications</v-icon>
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
