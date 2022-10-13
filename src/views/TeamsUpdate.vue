<template>
  <team-input-form
    name="edit-team"
    :onSubmit="onSubmit"
    :form="form"
    :edit="true"
  ></team-input-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Developer, TeamForm } from "@/types/entities";
import TeamInputForm from "@/components/TeamInputForm.vue";

export default Vue.extend({
  components: { TeamInputForm },
  name: "TeamsUpdate",
  props: {
    updateItem: Object,
  },
  created() {
    this.form = this.updateItem;
  },
  data() {
    return {
      form: {
        name: "",
        developers: [] as Developer[],
      } as TeamForm,
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("updateTeam", this.form);
      this.$router.push("/teams");
    },
  },
});
</script>
