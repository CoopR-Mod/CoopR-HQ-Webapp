<template>
  <v-tabs centered color="rgba(75,75,75,1)" dark icons-and-text>
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab v-for="(character, index) in characters" :href="'#tab-' + index">
      <template v-if="!emptyObject(character)">
        {{character.name}}
        <v-icon>account_box</v-icon>
      </template>
      <template v-else>
        {{empty.name}}
        <v-icon>far fa-question-circle</v-icon>
      </template>
    </v-tab>

    <v-tab-item v-for="(character, index) in characters" :key="index" :value="'tab-' + index">
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
  </v-tabs>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Characters extends Vue {
    
    private empty: object = {
        name: "No Character"
    };
    
    private characters: array = [
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
        {
        }
    ];
    private emptyObject(obj): boolean {
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }

}
</script>
