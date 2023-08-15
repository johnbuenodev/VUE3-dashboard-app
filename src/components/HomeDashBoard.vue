<script>

import DashBoardPage from './DashBoardPage.vue';
import CardComp from './CardComp.vue';

export default {
    components: {
        DashBoardPage,
        CardComp
    }
}


</script>

<template>
        <DashBoardPage>
            <template v-slot:pages>
      
                <span style="text-align: start;margin-bottom:16px;">Home</span>
                
                <div class="container-cards"> 
                    <CardComp :colorText="'color:white;'" :backgroundCustom="'background-color:#FF8C00;'" :porcentagem="'11'" :qtd="'10'" :title="'Usuarios'" :iconProps="'fa-users'"/>
                    <CardComp :colorText="'color:black;'" :backgroundCustom="'background-color:#00FF7F;'" :porcentagem="'22'" :qtd="'20'" :title="'Produtos'" :iconProps="'fa-box'"/>
                    <CardComp :colorText="'color:black;'" :backgroundCustom="'background-color:#00FFFF;'" :porcentagem="'33'" :qtd="'30'" :title="'Vendas'" :iconProps="'fa-store'"/>
                    <CardComp :colorText="'color:white;'" :backgroundCustom="'background-color:#B22222;'" :porcentagem="'44'" :qtd="'40'" :title="'Relatorios'" :iconProps="'fa-chart-bar'"/>
                </div>

            </template>
        </DashBoardPage>
</template>

<style>

    .container-cards {
       display: flex; 
       flex-wrap: wrap; 
       width: auto; 
       justify-content: space-around; 
       /* border: 1px solid red; */
    }

</style>