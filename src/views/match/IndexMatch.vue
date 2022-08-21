<template>
  <div>
    <label for="keyword" class="text-xl font-poppins text-slate-700">Search Match</label>
    <div class="form mt-3 pb-3 border-b border-solid border-slate-300">
      <div class="flex">
        <input v-model="keyword" class="form-control w-full mr-2" placeholder="Brentford vs Manchester United" id="keyword" autocomplete="off" required />
        <button class="btn btn-primary" @click="search">Search</button>
      </div>
    </div>
  </div>
  <div id="result">
    <div v-if="matchs.length != 0" v-for="(match, index) in matchs" class="border border-solid border-slate-400 rounded-md mt-3 hover:shadow-md transition-all">
      <img v-bind:src="match.strThumb" class="w-full" v-bind:alt="match.strEvent" />
      <div class="p-4 w-full">
        <div class="mb-3">
          <h1 class="font-poppins text-slate-800 text-xl font-semibold">{{ match.strEvent }}</h1>
          <p class="font-ssp text-lg">{{ match.strLeague }}</p>
          <p class="font-ssp mb-3">{{ match.strVenue }} -- {{ match.dateEvent }}</p>
          <div id="score" class="flex font-poppins text-center w-2/3 mx-auto">
            <div id="home">
              <p>{{ match.strHomeTeam }}</p>
              <p>{{ match.intHomeScore }}</p>
            </div>
            <div id="away" class="ml-auto">
              <p>{{ match.strAwayTeam }}</p>
              <p>{{ match.intAwayScore }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
  data() {
    return {
      keyword: '',
      matchs: [],
    };
  },
  methods: {
    search() {
      console.log(this.keyword);
      const route = useRoute();
      let match = ref([]);
      let data = ref([]);
      window.scrollTo(0, 0);
      axios
        .get(`https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${this.keyword}`)
        .then((result) => {
          match.value = result.data;
          console.log(match.value.event);
          this.matchs = match.value.event;
          // let elements = match.value;
          // this.matchs = elements.filter((el) => {});
          // console.log(match.value.player);
        })
        .catch((err) => {
          console.log(err.message);
        });
      return {};
    },
  },
  setup() {
    // const route = useRoute();
    // let matchs = ref([]);
    // onMounted(() => {
    //   window.scrollTo(0, 0);
    //   axios
    //     .get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${this.keyword}`)
    //     .then((result) => {
    //       players.value = result.data;
    //       console.log(typeof players.player);
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // });
    // return {
    //   players,
    // };
  },
};
</script>

<style lang="scss" scoped></style>
