<template>
  <v-tabs centered color="rgba(75,75,75,1)" dark icons-and-text>
    <v-tabs-slider color="white"></v-tabs-slider>

    <template v-for="(character, index) in characters">
      <character-tab v-if="!emptyObject(character)" :index="index" :name="character.name" icon="account_box"/>
      <character-tab v-else :index="index" :name="empty.name" icon="far fa-question-circle"/>
    </template>

    <v-tab-item v-for="(character, index) in characters" :key="index" :value="'tab-' + index">
      <template v-if="!emptyObject(character)">
        <v-container>
          <v-layout column align-center>
            <v-flex xs12>
              <v-avatar class="align-end" size="150" color="rgba(85,85,85,1)">
                <v-icon size="50">perm_identity</v-icon>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card dark color="rgba(75,75,75,1)">
                <v-card-title><h4>Details</h4></v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-list dense dark class="forced-grey">
                <v-list-tile  v-for="(value,key) in character">
                  <v-list-tile-content >{{key}}</v-list-tile-content>
                  <v-list-tile-content>{{value}}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <template v-else>
        <v-container>
          <v-layout dark column align-center>
            <v-flex xs12>
              <v-avatar class="align-end" size="150" color="rgba(85,85,85,1)">
                <v-icon size="50">far fa-question-circle</v-icon>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout dark column align-center>
            <v-flex xs12>
              <v-btn dark color="rgba(75,75,75,1)">Create New Character</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <character-menu></character-menu>
    </v-tab-item>
  </v-tabs>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import CharacterTab from "@/components/CharacterTab.vue";
    import CharacterMenu from "@/components/CharacterMenu.vue";

    @Component({components: {CharacterTab, CharacterMenu}})
    export default class Characters extends Vue {

        private empty: object = {
            name: "empty"
        };

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

        private emptyObject(obj: object): boolean {
            return Object.entries(obj).length === 0 && obj.constructor === Object;
        }

    }
</script>

<style scoped>
  .forced-grey {
    background-color: rgba(85,85,85,1)
  }
</style>
