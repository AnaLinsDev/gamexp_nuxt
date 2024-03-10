<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="transparent" dark v-bind="attrs" v-on="on" elevation="0">
        <v-icon class="mr-2"> mdi-filter-outline </v-icon>
        <div>
          Filter
        </div>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Filters</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                :items="data"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                :items="data"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                :items="data"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="data"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="data"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "FilterGame",

  data() {
    return {
      dialog: false,

      data: [
        "Skiing",
        "Ice hockey",
        "Soccer",
        "Basketball",
        "Hockey",
        "Reading",
        "Writing",
        "Coding",
        "Basejump",
      ],
    };
  },
};
</script>

<style></style>
