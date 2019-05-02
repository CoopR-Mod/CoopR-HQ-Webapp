<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="rgba(75,75,75,1)">
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Register as new account</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field v-model="steamID"
                        :rules="fieldRules"
                        :counter="20"
                        label="Steam ID"
                        required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
                  v-model="password"
                  :rules="fieldRules"
                  :counter="20"
                  label="Password"
                  required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-flex xs12 text-xs-center>
        <v-btn dark @click="create">Create Account</v-btn>
      </v-flex>
    </v-container>
  </v-form>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import axios from "axios";
    import store from "@/store";

    @Component({})
    export default class Register extends Vue {

        private valid: boolean = false;
        private steamID: string = "";
        private password: string = "";
        private fieldRules: ((value: string) => void)[] = [
            value => !!value || "Field is required",
            value => value.length <= 20 || "Field must be less than 10 characters"
        ];

        private create() {
            let newPlayer = JSON.stringify({steamid: this.steamID, password: this.password});

            axios.post("http://localhost:80/login", newPlayer, {
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
                .then(response => {
                  if (response.data.created == true) {
                    console.log("new player created")
                  } else {
                    console.error("new player was not created");
                    console.error("reason: " + response.data.reason);
                  }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
</script>

<style scoped>

</style>
