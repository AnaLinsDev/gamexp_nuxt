<template>
  <v-card class="pa-10">
    <v-row>
      <v-col>
        <v-img :width="450" :src="data.thumbnail"></v-img>

        <div v-for="(item, index) in data" :key="index">
          <div v-if="!doNotShow.includes(index)" class="pa-4">
            <span class="key_info pa-2"> {{ index }}: </span>
            <span class="value_info ml-5">
              {{ item }}
            </span>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <v-btn @click="goToSite(data.game_url)" color="primary">
            Go to Site
          </v-btn>
        </div>

        <div v-if="data.minimum_system_requirements" class="my-10">
          <div class="mb-4">Minimum requirements</div>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr
                  v-for="(item, index) in data.minimum_system_requirements"
                  :key="index"
                >
                  <td class="key_info">{{ index }}</td>
                  <td>{{ item }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DetailsId",

  data() {
    return {
      data: {},

      rating: 0,

      doNotShow: [
        "id",
        "thumbnail",
        "description",
        "game_url",
        "freetogame_profile_url",
        "minimum_system_requirements",
        "screenshots",
      ],
    };
  },

  methods: {
    ...mapActions("game", ["getGameById"]),

    goToSite(path) {
      window.open(path, "_blank");
    },
  },

  created() {
    this.getGameById(this.$route.params.id).then((resp) => {
      this.data = { ...resp };
    });
  },
};
</script>

<style>
.key_info {
  text-transform: capitalize;
}

.value_info {
  text-align: justify;
}
</style>
