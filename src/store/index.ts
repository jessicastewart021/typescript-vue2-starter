import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { Developer, Team } from "@/types/entities";
import { State } from "@/types/Store";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

const localSessionStorageVuex = new VuexPersistence({
  storage: window.sessionStorage,
});

export default new Vuex.Store<State>({
  state: {
    teams: [],
    developers: [],
  },
  mutations: {
    createDeveloper(state: State, payload: Developer): void {
      state.developers.push({ ...payload, id: uuidv4() });
    },

    updateDeveloper(state: State, payload: Developer): void {
      const index = state.developers.findIndex((obj) => obj.id == payload.id);
      state.developers[index] = payload;
    },

    deleteDeveloper(state: State, payload: Developer): void {
      const index = state.developers.findIndex((obj) => obj.id == payload.id);
      state.developers.splice(index, 1);

      state.teams.forEach(function (o) {
        o.developers = o.developers.filter(
          (developer) => developer.id != payload.id
        );
      });
    },

    createTeam(state: State, payload: Team): void {
      state.teams.push({ ...payload, id: uuidv4() });
    },

    updateTeam(state: State, payload: Team): void {
      const index = state.teams.findIndex((obj) => obj.id == payload.id);
      state.teams[index] = payload;
    },

    addDevToTeam(
      state: State,
      payload: { teamIds: string[]; developer: Developer }
    ): void {
      payload.teamIds.forEach((teamId: string) =>
        state.teams[
          state.teams.findIndex((obj) => obj.id == teamId)
        ].developers.push(payload.developer)
      );
    },

    deleteTeam(state: State, payload: Team): void {
      const index = state.teams.findIndex((obj) => obj.id == payload.id);
      state.teams.splice(index, 1);
    },
  },
  actions: {},
  getters: {
    developers: (state: State): Developer[] => state.developers,

    teams: (state: State): Team[] => {
      return state.teams;
    },
  },
  modules: {},
  plugins: [localSessionStorageVuex.plugin],
});
