<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios'


export default  {
  components: {
    AppHeader, AppMain

  },
    data (){
      return {
        store: store
    }
  },
  methods:{
    fetchMovies(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: store.API_KEY,
          query: store.query
        }
      }).then(res => {
        const movies = res.data.results;
        const series =  res.data.results;
        this.store.movies = movies
        this.store.series = series
        console.log(store.movies)
      })
      store.query = ''
    }
  },
    created (){
      
  }
}

</script>


<template>
    <AppHeader
    @performSearch="fetchMovies"/>
    <AppMain/>
</template>

<style lang="scss">
@use './styles/general.scss';

#app{
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
