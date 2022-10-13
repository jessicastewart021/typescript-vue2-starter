<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project is using Vue 2, Typescript and
      <a href="https://bootstrap-vue.org/docs" target="_blank" rel="noopener"
        >BootstrapVue</a
      >
      as a UI component library.
    </p>
    <h3>Tasks</h3>
    <b-row align-h="center" class="todoList">
      <b-col cols="4" class="text-left">
        <ul>
          <li>Create types considering the right properties and their types</li>
          <li>Set up the Vuex store and introduce types (optional)</li>
          <li>
            Create the necessary reusable components e.g. DataTable component,
            Form component (optional)
          </li>
          <li>
            Implement the typical CRUD operations (Create, Read, Update and
            Delete). No need to persist data, just use Vuex as temporary
            storage.
          </li>
          <li>Add routing and interaction to call-to-action buttons</li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
li {
  margin: 10px 0;
}
a {
  color: #42b983;
}
.todoList {
  text-align: left;
}
</style>
