<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs12>
        <v-card dark>
          <v-card-title class="title justify-center"><strong>Role</strong></v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-item-group>
      <v-layout wrap class="pt-1">
        <v-flex xs4 lg2 v-for="(value, key) in roleIcons">
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
    <v-layout row class="pt-3">
      <v-flex xs12>
        <v-card dark>
          <v-card-title class="title justify-center"><strong>Traits</strong></v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-item-group>
      <v-layout wrap class="pt-1">
        <v-flex xs4 lg2 v-for="(value, key) in roleIcons">
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

    <v-layout class="pt-4" row wrap>
      <v-flex xs12>
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    </v-flex>
    <v-flex xs12 class="text-xs-center">
      <v-btn dark @click="submit">Create</v-btn>
    </v-flex>
  </v-layout>

  </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

@Component({components: {}})
export default class NewCharacter extends Vue {
    
    private toggle: boolean = false;
    
    private roleIcons: object = {
        "leader": "group-leader-256-white.png",
        "marksman": "designated-marksman-256-white.png",
        "engineer": "engineer-256-white.png",
        "medic": "medic-256-white.png",
        "lmg": "mg-gunner-256-white.png",
        "radioman": "radioman-256-white.png"
    };
    
    private name: string = "";
    private email: string = "";
    private checkbox: boolean = false;
    
}

</script>

<style scoped>
  .no-underline {
    text-decoration: none;
  }
</style>
