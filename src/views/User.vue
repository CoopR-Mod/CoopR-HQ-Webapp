<template>
  <v-container grid-list-md>
    <v-layout>
      <v-flex xs6>
        <v-avatar size="150" color="rgba(85,85,85,1)">
          <v-icon size="60">perm_identity</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex xs8>
        <v-card dark>
          <v-list>
            <v-list-tile v-for="(character, index) in characters">
              <template v-if="typeof character.name !== 'undefined'">
                <v-avatar class="align-start" color="rgba(85,85,85,1)" size="40">
                  <v-icon size="30">perm_identity</v-icon>
                </v-avatar>
                <v-card-title>{{character.name}}</v-card-title>
              </template>
              <template v-else>
                <v-avatar class="align-start" size="40">
                  <v-icon size="30" color="rgba(255,255,255,0.2)">far fa-question-circle</v-icon>
                </v-avatar>
                <v-card-title>No Character</v-card-title>
              </template>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row class="py-5">
      <v-flex xs3>
        <v-layout column align-start>
          <v-card-title>edit</v-card-title>
          <v-card-title>account_circle</v-card-title>
          <v-card-title>alarm</v-card-title>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout column align-center>
          <v-btn fab color="rgba(150,150,150,1)">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn fab color="rgba(150,150,150,1)">
            <v-icon>account_circle</v-icon>
          </v-btn>
          <v-btn fab color="rgba(150,150,150,1)">
            <v-icon>alarm</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs3>
        <v-layout column align-end>
          <v-card-title>edit</v-card-title>
          <v-card-title>account_circle</v-card-title>
          <v-card-title>alarm</v-card-title>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({components: {}})
    export default class User extends Vue {

        private characters: object[] = [
            {
                name: "Sgt.Spinelli",
                class: "Group Leader",
                reputation: 100
            },
            {
                name: "Mr.Nice",
                class: "Medic",
                reputation: 50
            },
            {}
        ];

    }

</script>

<style scoped>

</style>
