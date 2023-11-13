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
        <ul class="row">
            <li> <b>Titolo:</b> {{ item.name }} </li>
            <li> <b>Titolo originale:</b> {{ item.original_name }} </li>
            <li> <b>Lingua: </b>
                <img class="flag" v-if="store.flags[item.original_language]" :src="store.flags[item.original_language]" alt="">    
                <p v-else>{{ item.original_language }}</p>  
            </li>
            <li> <b>Voto:</b> {{ item.vote_average }} </li>
        </ul>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

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