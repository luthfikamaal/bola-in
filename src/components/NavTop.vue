<template>
  <div class="flex items-center bg-blue-500 text-white p-3 fixed max-w-lg w-full text-2xl font-poppins font-semibold">
    <router-link :to="{ name: 'player' }" v-if="$route.name == 'detailPlayer'"><i class="bi bi-chevron-left"></i></router-link>
    <router-link :to="{ name: 'home' }" v-if="$route.name == 'player'"><i class="bi bi-house-door-fill"></i></router-link>
    <router-link :to="{ name: 'home' }" v-if="$route.name == 'match'"><i class="bi bi-house-door-fill"></i></router-link>
    <div class="mx-auto">Bola-In</div>
    <i class="bi bi-trash text-blue-500"></i>
  </div>
</template>
