<template>
  <v-container grid-list-xs text-xs-left>
    <v-layout row wrap>
      <v-flex lg3 xs12>
        <v-card v-for="n in 3" dark color="rgba(60,60,60,1)">
          <v-card-title class="my-3" primary-title>
            <h3 class="headline">News</h3>
          </v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</v-card-text>
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
