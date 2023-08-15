<script setup>

</script>

<template>
    <div class="container-sidebar">
        
        <div style="padding-top:36px; margin-bottom: 36px;">
            <i class="fa-solid fa-user" style="font-size:36px; background-color: white; padding: 16px;">
            </i>
            <p style="margin-top:16px;">John Bueno</p>
        </div>

        <!-- style="height: 300px; border: 1px solid red; display: flex; flex-direction:column; justify-content: space-evenly" -->
        <ul class="menu">
            <router-link class="routerLinkCustom" to="/home"><i class="fa fa-home iconCustom"></i>Home</router-link> 
            <router-link class="routerLinkCustom" to="/produtos"><i class="fa fa-box iconCustom"></i>Produtos</router-link>
            <router-link class="routerLinkCustom" to="/vendas"><i class="fa fa-store iconCustom"></i>Vendas</router-link> 
            <router-link class="routerLinkCustom" to="/relatorios"><i class="fa fa-chart-bar iconCustom"></i>Relatórios</router-link>  
        </ul>
 
        <div style>
        </div>    
    </div>
</template>

<style lang="scss" >

  .container-sidebar {
    height: 100vh;
    display: flex;
    flex-direction: column;

  }

  .routerLinkCustom {
    margin-bottom: 4px;
    width: 100%;
    /* border-bottom: 1px solid black; */
    border: 1px solid black;
    background-color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    text-decoration: none;
    text-align: start;
  }

  .iconCustom {
      margin-left: 16px;
      margin-right: 16px;
  }

  .menu {
    height: 300px; 
    /* border: 1px solid red; */ 
    display: flex; 
    flex-direction:column; 
    align-items: center;
  }

</style>