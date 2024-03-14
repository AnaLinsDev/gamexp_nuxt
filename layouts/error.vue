<template>
  <v-app dark>
    <div>
      <v-col>
        <v-card class="cardError d-flex flex-wrap mx-auto my-10 pa-10 h-100">
          <v-col>
            <v-row align="center" justify="center">
              <div class="title_game" v-if="error.statusCode === 404">
                {{ pageNotFound }}
              </div>
              <div v-else>
                {{ otherError }}
              </div>
            </v-row>
            <v-row class="mt-10" align="center" justify="center">
              <NuxtLink to="/home"> Home page </NuxtLink>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}

.cardError {
  width: calc(100vw - 100px);
}

.h-100 {
  max-height: 100% !important;
}
</style>
