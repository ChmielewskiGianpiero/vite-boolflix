<script>
import AppCardMovies from './AppCardMovies.vue';
import AppCardSeries from './AppCardSeries.vue';
import { store } from '../store';

export default  {
  components: {
    AppCardMovies, AppCardSeries
},
    data (){
      return {
        store:store
    }
  },
  methods:{
    
  }
}

</script>


<template>
    <div class="app_main">
        <div class="row">
            
            <div class="col-2" v-for="(movie, i) in store.movies" :key="i">
                <div class="card">
                    <AppCardMovies :item="movie"/>
                </div>
            </div>

            <div class="col-2" v-for="(serie, i) in store.series" :key="i">
                <div class="card">
                    <AppCardSeries :item="serie"/>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.col-2{
	flex-basis: calc((100% / 12) * 2);
}

.app_main{
    flex-grow: 1;
    background-color: $bg_AppMain_color ;
}

.row{
    display: flex;
    flex-wrap: wrap;
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