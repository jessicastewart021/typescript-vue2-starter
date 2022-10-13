<template>
  <div>
    <developer-input-form
      name="editDeveloper"
      :form="form"
      :edit="true"
    ></developer-input-form>
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

export default Vue.extend({
  components: { DeveloperInputForm },
  name: "DevelopersUpdate",
  props: {
    updateItem: Object,
  },
  created() {
    this.form = this.updateItem;
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        age: null,
        skills: [],
      } as DeveloperForm,
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("updateDeveloper", this.form);
      this.$router.push({ name: "Developers" });
    },
  },
});
</script>
