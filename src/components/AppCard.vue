<script>

export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number
    }
}

</script>


<template>
        <ul class="row">
            <li> <b>Titolo:</b> {{ title }} </li>
            <li> <b>Titolo originale:</b>  {{ originalTitle }} </li>
            <li> <b>Lingua:</b>  {{ language }} </li>
            <li> <b>Voto:</b> {{ vote }} </li>
        </ul>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

// .card{
//     background-color: $bg-primary-color;
//     color: $main_color_text;
//     padding: 20px;
//     border: 2px solid white;
// }

.row{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
}
</style>