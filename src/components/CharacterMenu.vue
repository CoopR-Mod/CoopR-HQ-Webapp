<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <template v-for="menu in menuIcons">
        <v-flex xs4 >
          <v-card v-ripple dark>
            <v-card-title class="justify-center">
              <v-icon large>{{menu.icon}}</v-icon>
            </v-card-title>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({})
    export default class CharacterMenu extends Vue {


        private menuIcons: object[] = [
            {
                icon: "phone",
                url: ""
            },
            {
                icon: "assignment_turned_in",
                url: ""
            },
            {
                icon: "alarm_on",
                url: ""
            },
            {
                icon: "autorenew",
                url: ""
            },
            {
                icon: "person",
                url: ""
            },
            {
                icon: "shield",
                url: ""
            },

        ]
    }
</script>

<style scoped>

</style>