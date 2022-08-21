import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const getDataFromAPI = (url) => {
  let data = ref([]);
  onMounted(() => {
    axios
      .get(url)
      .then((result) => {
        data.value = result.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return {
    data,
  };
};
export default { getDataFromAPI };
