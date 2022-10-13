<template>
  <div>
    <developer-input-form
      :form="form"
      :edit="false"
      :teamIds="teamIds"
    ></developer-input-form>
    <b-form-group
      id="input-group-1"
      label="Add to team:"
      label-for="input-1"
      class="padding"
    >
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="teamIds"
        :options="teams"
        text-field="name"
        name="teamNames"
        value-field="id"
        class="mb-3"
      ></b-form-checkbox-group>
    </b-form-group>

    <div class="centre-text">
      <b-button
        @click="onSubmit"
        type="submit"
        variant="primary"
        class="mt-5 centre-text"
        >Submit</b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DeveloperForm } from "@/types/entities";
import DeveloperInputForm from "@/components/DeveloperInputForm.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: { DeveloperInputForm },
  name: "DevelopersAdd",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        age: null,
        skills: [],
      } as DeveloperForm,
      teamIds: [],
    };
  },
  methods: {
    onSubmit() {
      let payload = { teamIds: this.teamIds, developer: this.form };
      this.$store.commit("createDeveloper", this.form);
      this.$store.commit("addDevToTeam", payload);
      this.$router.push("/developers");
    },
  },
  computed: {
    ...mapGetters(["teams"]),
  },
});
</script>
