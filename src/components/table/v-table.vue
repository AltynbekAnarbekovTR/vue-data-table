<template lang="">
    <div class="v-table">
        <div class="v-table__header">
            <p>Name</p>
            <p>Earned</p>
            <p>Spent</p>
            <p>Reg date</p>
        </div>
        <div class="v-table__body">

        </div>
    </div>
</template>
<script>
export default {
    name: "v-table",
    props: {
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
    
}
</script>
<style lang="">
    .v-table {
        
        max-width: 900px;
        margin: 0 auto;
    }

    .v-table__header {
        display: flex;
        justify-content: space-around;
    }
</style>