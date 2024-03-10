export default {
  getGame({ commit }, genres) {
    if (genres && genres.length > 0) {
      var auxGenres = "";

      for (var prop of genres) {
        auxGenres = auxGenres + prop.toLowerCase().replace(" ", "-") + ".";
      }

      auxGenres = auxGenres ? auxGenres.slice(0, -1) : "";

      return this.$axios.$get(`/api/filter?tag=${auxGenres}`, {
        headers: getHeaders(),
      });
      v;
    }

    return this.$axios.$get(`/api/games`, {
      headers: getHeaders(),
    });
  },

  getGameById({ commit }, id) {
    return this.$axios.$get(`/api/game?id=${id}`, {
      headers: getHeaders(),
    });
  },
};

const getHeaders = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  };
};
