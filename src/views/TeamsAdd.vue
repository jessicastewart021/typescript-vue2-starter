<template>
  <team-input-form
    :onSubmit="onSubmit"
    :form="form"
    :edit="false"
  ></team-input-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Developer, TeamForm } from "@/types/entities";
import TeamInputForm from "@/components/TeamInputForm.vue";

export default Vue.extend({
  components: { TeamInputForm },
  name: "TeamsAdd",
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
      this.$store.commit("createTeam", this.form);
      this.$router.push("/teams");
    },
  },
});
</script>
