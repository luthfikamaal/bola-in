<template>
  <div>
    <label for="keyword" class="text-xl font-poppins text-slate-700">Search Player</label>
    <div class="form mt-3 pb-3 border-b border-solid border-slate-300">
      <div class="flex">
        <input v-model="keyword" class="form-control w-full mr-2" placeholder="Harry Maguire" id="keyword" autocomplete="off" required />
        <button class="btn btn-primary" @click="search">Search</button>
      </div>
    </div>
    <!-- <div v-for="(player, index) in players">1</div> -->
  </div>
  <div id="result">
    <div v-if="players.length != 0" v-for="(player, index) in players" class="flex border border-solid border-slate-400 rounded-md mt-3 hover:shadow-md transition-all">
      <img v-bind:src="player.strThumb" class="w-1/3" v-bind:alt="player.strPlayer" />
      <div class="p-4 w-full">
        <div class="mb-3">
          <h1 class="font-poppins text-slate-800 text-xl font-semibold">{{ player.strPlayer }}</h1>
          <p class="font-ssp text-lg">{{ player.strPosition }}</p>
          <p class="text-slate-600 font-ssp leading-normal">{{ player.strNationality }} - {{ player.strTeam }}</p>
        </div>
        <div class="flex justify-end">
          <router-link :to="{ name: 'detailPlayer', params: { id: player.idPlayer, name: player.strPlayer } }" class="btn btn-primary bottom-0 inset-x-0">Details</router-link>
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
      players: [],
    };
  },
  methods: {
    search() {
      console.log(this.keyword);
      const route = useRoute();
      let players = ref([]);
      let data = ref([]);
      window.scrollTo(0, 0);
      axios
        .get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${this.keyword}`)
        .then((result) => {
          players.value = result.data;
          let elements = players.value.player;
          this.players = elements.filter((el) => {
            return el.strSport == 'Soccer' || el.strSport == 'American Football' || el.strSport == 'Australian Football';
          });
          console.log(players.value.player);
        })
        .catch((err) => {
          console.log(err.message);
        });
      return {
        data,
      };
    },
  },
  setup() {
    // const route = useRoute();
    // let players = ref([]);
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
