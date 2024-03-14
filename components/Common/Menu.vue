<template>
  <v-app-bar absolute color="dray darken-4" dark elevation="0">
    <span
      class="link_menu"
      elevation="0"
      height="100%"
      @click="goTo(enumRoutes.HOME)"
    >
      Home
    </span>
    <v-spacer></v-spacer>
    <span
      class="link_menu"
      elevation="0"
      height="100%"
      @click="goTo(enumRoutes.GAMES)"
    >
      Games
    </span>
    <span
      class="link_menu"
      elevation="0"
      height="100%"
      @click="goTo(enumRoutes.STATISTICS)"
    >
      Dashboard
    </span>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    enumRoutes: {
      HOME: "/home",
      GAMES: "/",
      STATISTICS: "/dashboard",
      FAVORITE: "/favorite",
    },
  }),

  methods: {
    goTo(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
.link_menu {
padding: 30px;
}

.link_menu:hover {
cursor: pointer;
color: rgb(157, 241, 190);
}

</style>
