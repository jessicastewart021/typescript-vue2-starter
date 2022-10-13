<template>
  <b-table
    :items="tableItems"
    :fields="fields"
    stacked="md"
    show-empty
    small
    striped
    hover
  >
    <template #cell(actions)="row">
      <b-button size="sm" @click="viewFunction(row.item)" variant="success">
        View
      </b-button>
      <b-button
        size="sm"
        class="delete-button"
        variant="primary"
        :to="{
          name: `${editLink}Update`,
          params: { updateItem: row.item },
        }"
      >
        Edit
      </b-button>
      <b-button
        size="sm"
        class="delete-button"
        @click="deleteFunction(row.item)"
        variant="danger"
      >
        Delete
      </b-button>
    </template>
  </b-table>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DataTable",
  props: {
    tableItems: Array,
    fields: Array,
    editLink: String,
    deleteFunction: Function,
    viewFunction: Function,
  },
});
</script>

<style scoped>
.delete-button {
  margin-left: 10px;
}
</style>
