<script>
import { store } from '../store';


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
    
  }
}

</script>


<template>
    <div class="app_header">
        <div class="container">
            <input type="text" class="search-text" placeholder="cerca un film o una serie tv" v-model="store.query" @keyup.enter="$emit('performSearch', searchQuery )">
            <button @click="$emit('performSearch', searchQuery )" class="btn-search">cerca</button>
        </div>
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