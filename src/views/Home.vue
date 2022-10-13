<template>
  <div class="home">
    <img alt="Logo" src="../assets/deloitte.png" />
    <HelloWorld
      class="pt-5"
      msg="Welcome to Zsolt's Developer Management System!"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
  // you need to define the return types for all component methods, use interfaces (preferably) or in-place object definitions like here
  // data(): { field: string } {
  //   return {
  //     field: "field",
  //   };
  // },
  // methods: {
  //   getField(): string {
  //     return this.field;
  //   },
  // },
  // computed: {
  //   getFieldComp(): string {
  //     return this.field;
  //   },
  // },
});
</script>
