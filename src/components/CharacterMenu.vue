<template>
  <v-container grid-list-md>
    <v-layout row >
      <v-flex xs4>
          <v-card v-ripple dark> <v-card-title><v-icon class="pl-3"large>edit</v-icon></v-card-title> </v-card>
      </v-flex>
      <v-flex xs4>
          <v-card v-ripple dark> <v-card-title ><v-icon class="pl-3"large>shield</v-icon></v-card-title> </v-card>
      </v-flex>
      <v-flex xs4>
          <v-card v-ripple dark> <v-card-title><v-icon class="pl-3"large>phone</v-icon></v-card-title> </v-card>
      </v-flex>
    </v-layout>
    <v-layout row >
      <v-flex xs4>
        <v-card v-ripple dark> <v-card-title><v-icon class="pl-3"large>person</v-icon></v-card-title> </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card v-ripple dark> <v-card-title ><v-icon class="pl-3"large>group</v-icon></v-card-title> </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card v-ripple dark> <v-card-title><v-icon class="pl-3"large>star</v-icon></v-card-title> </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({})
    export default class CharacterMenu extends Vue {
    }
</script>

<style scoped>

</style>