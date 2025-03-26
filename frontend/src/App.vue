<script setup>
  import { watch } from 'vue';
  import AddCard from './components/AddCard.vue';
  import Card from './components/Card.vue';
  import {getAllUsers} from './hooks/useFetch.js';

  const {data, fetchData} = getAllUsers();

  watch(data, () => {
      fetchData()
  }, {immediate: true})

</script>

<template>
  <div>
    <div class="search-container">
      <AddCard/>
    </div>

    <div class="container-usuarios">
      <Card 
        v-for="usuario in data"
        :key="usuario.id"
        :usuario="usuario"
      />
    </div>
  </div>

</template>

<style scoped>
  .search-container {
    display: flex;
    justify-content: center;
    /* margin: 10px; */
    border-bottom: 5px solid #005E81;
  }

  .container-usuarios {
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
  }

</style>
