<template>
  <v-app dark>
    <Menu />
    <v-main>
      <v-container>
        <Nuxt class="mt-14" />
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- 

TODO: 

- Menu superior com: 
    - Home
    - Lista de games 
    - Dashboard

- Filtro por: 
    - category

- Page com detalhes do jogo com uma área para dar a nota e favoritar

- Page com lista de favoritos

- Page de Error personalizada

- Add footer com nossa info

-->

<script>
import Menu from "@/components/Common/Menu.vue";

export default {
  name: "DefaultLayout",

  components: { Menu },

  data() {
    return {};
  },
};
</script>
