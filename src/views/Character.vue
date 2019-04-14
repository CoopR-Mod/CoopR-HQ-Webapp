<template>
  <v-tabs centered color="rgba(75,75,75,1)" dark icons-and-text>
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab href="#tab-1">
      Sgt. Spinelli
      <v-icon>account_box</v-icon>
    </v-tab>
    <v-tab href="#tab-2">
      Empty
      <v-icon>account_box</v-icon>
    </v-tab>
    <v-tab href="#tab-3">
      Empty
      <v-icon>account_box</v-icon>
    </v-tab>

    <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
      <v-layout column> 
        <v-container>
          <v-flex xs12>
            <v-avatar size="150" tile="true" color="rgba(85,85,85,1)">
              <v-icon size="50">perm_identity</v-icon>
            </v-avatar>
          </v-flex>
        </v-container>
        <v-container>
          <v-flex xs8>
            <v-card flat>
              <v-card-text>Content</v-card-text>
            </v-card>
          </v-flex>
        </v-container>
      </v-layout>
    </v-tab-item>
  </v-tabs>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Character extends Vue {}
</script>
