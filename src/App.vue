<template>
  <v-app>
    <ToolBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import ToolBar from "./components/ToolBar";
    import News from "./views/News";
    import Footer from "./components/Footer";
    import axios from "axios";
    import store from "@/store";

    @Component({
        components: {
            ToolBar, News, Footer
        },
    })
    export default class App extends Vue {
        private mounted() {
            axios.post("http://localhost:80/login", {}, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.data.authenticated == true) {
                        axios.get("http://localhost:80/api/v0.1/player/fetch/" + response.data.steamid)
                            .then(response => {
                                store.state.user = response.data;
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }

                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

</script>


<style>
  #app {
    background-color: rgba(130, 130, 130, 1);


  }
</style>
