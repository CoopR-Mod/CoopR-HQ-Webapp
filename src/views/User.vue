<template>
  <v-container grid-list-md>
    <v-layout class="pb-5">
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
    <v-layout row class="pt-5">
      <v-flex xs2>
        <v-navigation-drawer height="100%"  class="pr-3 elevation-0" hide-overlay dark floating v-model="drawer" mini-variant>

          <v-list class="pt-0" dense>

            <v-list-tile v-for="item in items" :key="item.title" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-flex xs10>
        <v-layout column align-center justify-space-between>
          <v-btn fab large color="rgba(150,150,150,1)" @click.stop="drawer = !drawer">
            <v-icon>account_circle</v-icon>
          </v-btn>
          <v-btn fab large color="rgba(150,150,150,1)">
            <v-icon>group</v-icon>
          </v-btn>
          <v-btn fab large color="rgba(150,150,150,1)">
            <v-icon>fas fa-shield-alt</v-icon>
          </v-btn>
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

        private items: object[] = [
            {title: "Home", icon: "dashboard"},
            {title: "About", icon: "question_answer"},
            {title: "Home", icon: "dashboard"},
            {title: "About", icon: "question_answer"}
        ];

        private drawer = null;

    }

</script>

<style scoped>

</style>
