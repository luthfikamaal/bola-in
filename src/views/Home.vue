<template>
  <div class="mb-3">
    <img src="@/assets/img/hero.jpg" class="w-full rounded-md" />
  </div>
  <div class="text-2xl font-poppins">Bingung mau diisi apa..</div>
</template>
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
  data() {
    return {
      data: 'Muhammad Luthfi Kamal',
    };
  },
  setup() {
    const route = useRoute();
    let players = ref([]);
    onMounted(() => {
      window.scrollTo(0, 0);
      axios
        .get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Mason`)
        .then((result) => {
          players.value = result.data;
          console.log(typeof players.player);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    return {
      players,
    };
  },
};
</script>
