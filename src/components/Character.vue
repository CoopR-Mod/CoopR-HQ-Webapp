<template>
  <v-tab :href="'#tab-' + index">
    {{character.name}}
    <v-icon>{{icon}}</v-icon>
  </v-tab>

  <v-tab-item>
    <v-container>
      <v-layout column align-center >
        <v-flex xs12>
          <v-avatar class="align-end" size="150" color="rgba(85,85,85,1)">
            <v-icon size="50">perm_identity</v-icon>
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-card dark color="rgba(75,75,75,1)">
            <v-card-title><h4>Details</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile v-for="(value,key) in character" >
                <v-list-tile-content>{{key}}</v-list-tile-content>
                <v-list-tile-content class="align-end">{{value}}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-tab-item>

</template>

<script>
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Character extends Vue {
    @Prop(Number) index!: number;
    @Prop(Object) character!: object;
    @Prop(String) icon!: string;
}

</script>

<style scoped>

</style>
