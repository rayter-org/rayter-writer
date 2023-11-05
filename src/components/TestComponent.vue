<template>
    <div class="test">
        Hello World
        <span class="ojoj">Ojoj</span>
    </div>
</template>

<script>
    export default {

    }
</script>

<!--<style lang="css">
    .test {
        color: red;
    }
</style>-->

<!--<style lang="sass">
    .test
        color: red
        font-size: 40px
</style>-->


<!--<style lang="sass">
    .test
        margin-left: 100px
</style>-->

<style lang="scss">
    $primary-color: red;

    .test {
        color: $primary-color;
        .ojoj {
            color: blue;
        }
    }
</style>

