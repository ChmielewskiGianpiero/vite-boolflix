<script>
import { store } from '../store';

export default {
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    data () {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
        <ul  class="row overlay_card">
            <li v-if="item.title"> <b>Titolo:</b> {{ item.title }}</li>
            <li v-else="item.name"> <b>Titolo:</b> {{ item.name }} </li>
            <li v-if="item.original_title"> <b>Titolo originale:</b> {{ item.original_title }} </li>
            <li v-else="item.original_name"> <b>Titolo originale:</b> {{ item.original_name }} </li>
            <li> <b>Lingua: </b>
                <img class="flag" v-if="store.flags[item.original_language]" :src="store.flags[item.original_language]" alt="">    
                <p v-else>{{ item.original_language }}</p>  
            </li>
            <li> <b>Voto:</b> {{ Math.round(item.vote_average) / 2 }} </li>
        </ul>
    </div>
        
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.overlay_card {
    position: absolute;
    opacity: 0;
    top: 0;
    bottom: 0;
    font-size: 20px;
    padding: 70px;
    text-align: center;
}

.card{
    position: relative;
    background-color: $bg-primary-color;
    color: $main_color_text;
    border: 2px solid white;

    &:hover{
        .overlay_card {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.658);
        }
    }
}


.flag{
    width: 11%;
}

.row{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
}
</style>