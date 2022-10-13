<template>
  <div class="teams">
    <h1 class="centre-text">This is the Teams page</h1>
    <b-container>
      <b-form @submit="onSubmit">
        <b-row align-h="center">
          <b-col cols="6">
            <b-row>
              <b-form-group
                id="input-group-1"
                :label="edit ? 'Edit Team Name' : 'Team Name'"
                label-for="input-1"
                label-align-md="left"
                class="padding"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  placeholder="Enter Team Name"
                  required
                ></b-form-input>
              </b-form-group>
            </b-row>
            <b-form-group
              id="input-group-2"
              :label="edit ? 'Edit Developers' : 'Developers'"
              label-for="input-2"
              class="padding"
            >
              <b-form-checkbox
                v-for="developer in developers"
                v-model="form.developers"
                :key="developer.id"
                :value="developer"
                name="flavour-4a"
                inline
              >
                {{ developer.firstName + " " + developer.lastName }}
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
        <div class="centre-text">
          <b-button type="submit" variant="primary" class="mt-5 centre-text"
            >Submit</b-button
          >
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Skills } from "@/types/entities";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "TeamInputForm",
  props: {
    onSubmit: Function,
    form: Object,
    edit: Boolean,
  },
  data() {
    return {
      options: Skills,
    };
  },
  computed: {
    ...mapGetters(["developers"]),
  },
});
</script>

<style scoped>
.teams {
  text-align: left;
}

.centre-text {
  text-align: center;
}

.padding {
  padding-bottom: 20px;
}
</style>
