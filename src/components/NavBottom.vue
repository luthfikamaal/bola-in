<template>
  <div class="fixed inset-x-0 bottom-0 bg-white border border-solid border-t-slate-300 flex max-w-lg w-full py-1 mx-auto font-poppins">
    <div class="mx-auto text-center grid grid-cols-3 gap-x-2">
      <router-link :to="{ name: 'home' }" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white"> <i class="bi bi-house-door-fill mr-2"></i>HOME </router-link>
      <router-link :to="{ name: 'match' }" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white"><i class="bi bi-circle-fill mr-2"></i>MATCH </router-link>
      <RouterLink :to="{ name: 'player' }" class="px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white"><i class="bi bi-person-fill mr-2"></i> PLAYER </RouterLink>
      <!-- <a href="#" class="px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white"><i class="bi bi-house-door-fill mr-2"></i> Liga </a> -->
    </div>
  </div>
</template>
