<template>
  <div class="developers">
    <h1>This is the developers page</h1>
    <b-container>
      <b-row align-h="center">
        <b-col cols="8">
          <b-row align-h="end">
            <b-col cols="2">
              <router-link to="/developers/add/"
                ><b-button size="sm" variant="success"
                  >Add Developer</b-button
                ></router-link
              >
            </b-col>
          </b-row>
          <br />
          <b-container fluid>
            <data-table
              :tableItems="developers"
              :fields="fields"
              :editLink="`Developers`"
              :deleteFunction="deleteDeveloper"
            ></data-table>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Developer, Fields } from "@/types/entities";
import { mapGetters } from "vuex";
import DataTable from "@/components/DataTable.vue";

interface DataObjectInterface {
  fields: Fields[];
}

export default Vue.extend({
  components: { DataTable },
  data(): DataObjectInterface {
    return {
      fields: [
        {
          key: "firstName",
          label: "First name",
          sortDirection: "desc",
        },
        {
          key: "lastName",
          label: "Last name",
          sortDirection: "desc",
        },
        {
          key: "age",
          label: "Person age",
          class: "text-center",
        },
        {
          key: "skills",
          label: "Skills",
          sortDirection: "desc",
          formatter: (item: Developer) => {
            return item.toString();
          },
        },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  computed: {
    ...mapGetters(["developers"]),
  },
  methods: {
    deleteDeveloper(developer: Developer): void {
      this.$store.commit("deleteDeveloper", developer);
    },
  },
});
</script>

<style scoped>
.delete-button {
  margin-left: 10px;
}
</style>
