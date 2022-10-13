<template>
  <div class="teams">
    <h1>This is the Teams page</h1>
    <b-container>
      <b-row align-h="center">
        <b-col cols="8">
          <b-row align-h="end">
            <b-col cols="2">
              <router-link to="/teams/add/"
                ><b-button size="sm" variant="success"
                  >Add Team</b-button
                ></router-link
              >
            </b-col>
          </b-row>
          <br />
          <b-container fluid>
            <data-table
              :tableItems="formattedTeams"
              :fields="fields"
              :editLink="`Teams`"
              :deleteFunction="deleteTeam"
            ></data-table>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Team, Fields, Developer } from "@/types/entities";
import { mapGetters } from "vuex";
import DataTable from "@/components/DataTable.vue";

interface DataObjectInterface {
  fields: Fields[];
  developers: Developer[];
}

export default Vue.extend({
  components: { DataTable },
  data(): DataObjectInterface {
    return {
      fields: [
        {
          key: "name",
          label: "Team name",
          sortDirection: "desc",
        },
        {
          key: "devNames",
          label: "Developers",
          sortDirection: "desc",
          formatter: (item: any) => {
            return item.join(", ");
          },
        },
        { key: "actions", label: "Actions" },
      ],
      developers: [],
    };
  },
  methods: {
    deleteTeam(team: Team): void {
      this.$store.commit("deleteTeam", team);
    },
  },
  computed: {
    ...mapGetters(["teams"]),
    formattedTeams(): string[] {
      return this.teams.map((team: Team) => {
        let devNames: string[];
        devNames = team.developers.map((developer: Developer) => {
          return developer.firstName;
        });
        return {
          ...team,
          devNames,
        };
      });
    },
  },
});
</script>
