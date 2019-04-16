<template>
  <v-flex xs4>
    <v-layout class="pt-2" row justify-center>
      <v-tab :href="'#tab-' + index">
        {{name}}
        <v-icon>{{icon}}</v-icon>
      </v-tab>
    </v-layout>
  </v-flex>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({})
    export default class CharacterTab extends Vue {
        @Prop() private index!: number;
        @Prop() private name!: object;
        @Prop() private icon!: string;
    }

</script>

<style scoped>

</style>
