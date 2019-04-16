<template>
  <v-container>
    <v-layout row align-center>
      <v-flex xs12>
        <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
      </v-flex>
      <v-flex xs12>
        <v-layout column align-center justify-center>
          <v-flex xs4>
            <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
            <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
            <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout >
          <v-btn dark fab large depressed color="rgba(85,85,85,1)"><v-icon>shield</v-icon></v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({})
  export default class Loadout extends Vue {}
</script>

<style scoped>

</style>