<script>

import DashBoardPage from './DashBoardPage.vue';

export default {
    components: {
        DashBoardPage
    }
}

</script>

<template>
        <DashBoardPage>
            <template v-slot:pages>
                <span>Relatórios</span>
            </template>
        </DashBoardPage>
</template>

<style>

</style>