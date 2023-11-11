<script>
import { store } from '../store';

export default  {
  components: {

  },
    data (){
      return {

    }
  },
    created (){
      
  }
}

</script>


<template>
    <div class="container">
        <input type="text" class="search-text" placeholder="cerca un film o una serie tv">
        <button class="btn-search">cerca</button>
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