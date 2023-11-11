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
    <div class="app_main">
        <div class="row">
            <div v-for="(movie,i) in store.movies" :key="i" class="card">
                <AppCard 
                :title="movie.title"
                :originalTitle="movie.original_title"
                :language="movie.original_language"
                :vote="movie.vote_average"
                />
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.app_main{
    flex-grow: 1;
    background-color: $bg_AppMain_color ;
}

.row{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    gap: 15px;
}

.card{
    background-color: $bg-primary-color;
    color: $main_color_text;
    padding: 20px;
    border: 2px solid white;
}
</style>