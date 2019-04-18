<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs12>
        <v-card dark>
          <v-card-title class="title justify-center"><strong>Select Class</strong></v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-item-group>
      <v-layout wrap class="pt-1">
        <v-flex xs4 lg2 v-for="(value, key) in classIcons">
          <v-item>
            <v-card dark slot-scope="{active, toggle}"
                    :color="active ? 'primary' : ''"
                    @click="toggle"
            >
              <v-card-title class="justify-center">
                <v-img :src="require('../assets/' + value)"></v-img>
              </v-card-title>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-item-group>

  </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({components: {}})
    export default class NewCharacter extends Vue {

        private toggle: boolean = false;

        private classIcons: object = {
            "leader": "group-leader-256-white.png",
            "marksman": "designated-marksman-256-white.png",
            "engineer": "engineer-256-white.png",
            "medic": "medic-256-white.png",
            "lmg": "mg-gunner-256-white.png",
            "radioman": "radioman-256-white.png"
        };

    }

</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
