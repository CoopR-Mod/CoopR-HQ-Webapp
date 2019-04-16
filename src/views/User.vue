<template>
  <v-container grid-list-md>
    <v-layout column>
      <v-flex xs12>
        <v-layout class="pt-2 mb-2" justify-center>
          <v-avatar size="150" color="rgba(85,85,85,1)">
            <v-icon size="60">perm_identity</v-icon>
          </v-avatar>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-card dark color="rgba(75,75,75,1)">
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Steam-ID</v-list-tile-content>
              <v-list-tile-content class="align-end">{{account.steamID}}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row class="pt-3">
      <v-flex xs12>
        <v-layout column align-center justify-space-between>
          <router-link class="no-underline" to="/userdetails">
            <v-btn fab large color="rgba(150,150,150,1)">
              <v-icon>account_circle</v-icon>
            </v-btn>
          </router-link>
          <router-link class="no-underline" to="/characters">
            <v-btn fab large color="rgba(150,150,150,1)">
              <v-icon>group</v-icon>
            </v-btn>
          </router-link>
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

        private account: object = {
            steamID: 123131,
            email: "jean.baptiste@degrenue.com"
        }

    }

</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
