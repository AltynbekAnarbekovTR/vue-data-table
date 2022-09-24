<template lang="">
    <div class="v-table-row">
        <div class="row__name"></div>
        <div class="row__earned"></div>
        <div class="row__spent"></div>
        <div class="row__dte"></div>
    </div>
</template>
<script>
export default {
    name: "v-table",
    props: {
        row__data: {
            type: Object,
            default: () => {return {}}
        }
    }
}
</script>
<style lang="">
    .v-table-row {
        display: flex;
        justify-content: space-around;
    }
</style>