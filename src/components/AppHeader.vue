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
  }
}

</script>


<template>
    <div class="app_header">
        <div class="container">
            <div class="row">
                <h1 class="app_title">Boolflix</h1>
                <div class="row">
                    <input type="text" class="search-text" placeholder="cerca un film o una serie tv" v-model="store.query" @keyup.enter="$emit('performSearch', searchQuery )">
                    <button @click="$emit('performSearch', searchQuery )" class="btn-search">
                        <font-awesome-icon icon="magnifying-glass" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.app_title{
    color: red ;
    font-weight: 100;
}

.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.app_header{
    background-color: black;
    padding: 20px;
}
.search-text{
    padding: 5px;
    width: 200px;
}

.btn-search{
    padding: 6px;
    background-color: white;
    border: black;
    
}


</style>