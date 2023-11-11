<script>
import { store } from '../store';
import axios from 'axios'


export default  {
    props: {
        searchQuery: String
    },
    data (){
      return {
        store: store
    }
  },
  methods:{
    // searchText(){
    //     axios.get('https://api.themoviedb.org/3/search/movie', {
    //         params: {
    //             api_key: store.API_KEY,
    //             query: store.query
    //         }
    //     }).then(res => {
    //         const movies = res.data.results;
    //         this.store.movies = movies
    //         console.log(store.movies)
    //     })
    //     console.log(store.query)
    // }
  }
}

</script>


<template>
    <div class="container">
        <input type="text" class="search-text" placeholder="cerca un film o una serie tv" v-model="store.query" @keyup.enter="$emit('performSearch', searchQuery )">
        <button @click="$emit('performSearch', searchQuery )" class="btn-search">cerca</button>
    </div>
</template>

<style lang="scss" scoped>
.search-text{
margin-top: 50px;
padding: 5px;
width: 500px;
}

.btn-search{
    padding: 20px;
    margin-left: 20px;
}
</style>