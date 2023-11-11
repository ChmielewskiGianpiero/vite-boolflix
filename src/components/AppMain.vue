<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default  {
  components: {
    AppCard
},
    data (){
      return {
        store:store
    }
  }
}

</script>


<template>
  <div v-for="(movie,i) in store.movies" :key="i">
    <AppCard 
    :title="movie.title"
    :originalTitle="movie.original_title"
    :language="movie.original_language"
    :vote="movie.vote_average"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>