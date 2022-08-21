<template>
  <div v-for="(player, index) in player.player">
    <div class="">
      <img v-bind:src="player.strThumb" class="rounded-md mb-3" />
      <div id="detail-player">
        <h1 class="font-poppins text-3xl font-semibold">{{ player.strPlayer }}</h1>
        <p class="font-poppins text-lg">{{ player.strPosition }}</p>
        <p class="text-slate-600 font-poppins">{{ player.strNationality }} - {{ player.strTeam }}</p>
        <div class="my-3">
          <h1 class="text-xl font-semibold font-poppins mb-1">Agent</h1>
          <p class="font-poppins text-slate-700">{{ player.strAgent }}</p>
        </div>
        <div class="my-3">
          <h1 class="text-xl font-semibold font-poppins mb-1">Place of birth</h1>
          <p class="font-poppins text-slate-700">{{ player.strBirthLocation }}</p>
        </div>
        <div class="my-3">
          <h1 class="text-xl font-semibold font-poppins mb-1">Date of birth</h1>
          <p class="font-poppins text-slate-700">{{ player.dateBorn }}</p>
        </div>
        <div id="description" class="my-3">
          <h1 class="text-xl font-semibold font-poppins mb-1">Description</h1>
          <p class="font-poppins text-slate-700">{{ player.strDescriptionEN }}</p>
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
      player: [],
    };
  },
  methods: {},
  setup() {
    const route = useRoute();
    let player = ref([]);
    onMounted(() => {
      window.scrollTo(0, 0);
      axios
        .get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${route.params.name}`)
        .then((result) => {
          player.value = result.data;
          player = player.value.player.filter((p) => {
            return p.idPlayer == route.params.id;
          });
          console.log(player[0].idPlayer);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    return {
      player,
    };
  },
};
</script>

<style lang="scss" scoped></style>
