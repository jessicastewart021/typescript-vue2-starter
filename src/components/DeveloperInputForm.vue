<template>
  <div class="developers">
    <h1 class="centre-text">This is the developers page</h1>
    <b-container>
      <b-form>
        <b-row align-h="center">
          <b-col cols="6">
            <b-row>
              <b-form-group
                id="input-group-1"
                :label="edit ? 'Edit First Name' : 'First Name'"
                label-for="input-1"
                label-align-md="left"
                class="padding"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.firstName"
                  placeholder="Enter First Name"
                  required
                ></b-form-input>
              </b-form-group>
            </b-row>
            <b-form-group
              id="input-group-2"
              :label="edit ? 'Edit Last Name' : 'Last Name'"
              label-for="input-2"
              class="padding"
            >
              <b-form-input
                id="input-2"
                v-model="form.lastName"
                placeholder="Enter Last Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              :label="edit ? 'Edit Age' : 'Age'"
              label-for="input-3"
              class="padding"
            >
              <b-form-input
                id="input-3"
                v-model="form.age"
                placeholder="Enter age"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="edit ? 'Edit Skills' : 'Skills'"
              label-for="input-4"
              class="padding"
            >
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="form.skills"
                :options="options"
                name="skills"
                class="mb-3"
              ></b-form-checkbox-group>
            </b-form-group>

            <!-- <b-form-group
              v-if="!edit"
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
          </b-col>
        </b-row>
        <div class="centre-text">
          <b-button type="submit" variant="primary" class="mt-5 centre-text"
            >Submit</b-button
          >
        </div> -->
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Skills } from "@/types/entities";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "DeveloperInputForm",
  props: {
    form: Object,
    edit: Boolean,
    teamIds: Array,
  },
  data() {
    return {
      options: Skills,
    };
  },
  computed: {
    ...mapGetters(["teams"]),
  },
});
</script>

<style scoped>
.developers {
  text-align: left;
}

.centre-text {
  text-align: center;
}

.padding {
  padding-bottom: 20px;
}
</style>
