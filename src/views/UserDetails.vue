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
          <v-layout row align-baseline>
            <v-flex xs9>
              <v-card-title><h4>Profile Details</h4></v-card-title>
            </v-flex>
            <v-flex xs3 class="pl-3" >
              <v-btn dark fab small color="rgba(85,85,85,1)" >
                <v-icon>edit</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile v-for="(value,key) in profile">
              <v-list-tile-content>{{key}}</v-list-tile-content>
              <v-list-tile-content class="align-end">{{value}}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({components: {}})
    export default class UserDetails extends Vue {

        private profile: object = {
            steamID: 123131,
            email: "jean.baptiste@degrenue.com",
            squad: "Task Force Wolfcore",
        }

    }

</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
