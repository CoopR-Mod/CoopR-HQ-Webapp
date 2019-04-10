<template>
  <v-container grid-list-xs text-xs-left>
    <v-layout row wrap>
      <v-flex xl3 xs12>
        <v-card dark color="rgba(60,60,60,1)">
          <v-img :src="require('../assets/coopr_logo_1.png')" class="my-3" contain ></v-img>
          <v-card-title primary-title>
            <h3 class="headline mb-0">News</h3>
          </v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</v-card-text>
        </v-card>
        <v-card dark color="rgba(60,60,60,1)">
          <v-img :src="require('../assets/coopr_logo_1.png')" class="my-3" contain ></v-img>
          <v-card-title primary-title>
            <h3 class="headline mb-0">News</h3>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "News"
  }
</script>

<style scoped>

</style>
