<template>
  <v-toolbar app dark color="rgba(75,75,75,1)">
    <v-avatar color="rgba(85,85,85,1)">
      <v-icon>perm_identity</v-icon>
    </v-avatar>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-layout justify-space-between>
      <router-link to="/">
        <v-icon>announcement</v-icon>
      </router-link>
      <v-icon>stars</v-icon>
      <router-link to="/characters">
        <v-icon>group</v-icon>
      </router-link>
      <v-icon>settings_applications</v-icon>
    </v-layout>
  </v-toolbar>
</template>

<script>
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({})
  export default class ToolBar extends Vue { }
</script>

<style scoped>

</style>
