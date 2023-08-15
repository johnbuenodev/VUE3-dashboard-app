<script setup>

import SideBarComp from './SideBarComp.vue';
import NavBarComp from './NavBarComp.vue';

</script>

<template>
    <div class="main">
    
        <div class="sidebar">
            <SideBarComp />
        </div>

        <div class="content-right">
         
            <div class="content-navbar">  
                <NavBarComp />
            </div>

            <div class="container-pages">
             <slot name="pages">
                
             </slot>
            </div>

        </div>
    
    </div>
</template>

<style>

.main {
    display:flex;
    width: 100%;
    height: 100vh;
    background-color: white; /* $royal; */
}

.sidebar {
    width: 220px;
    height: 100vh;
    background-color: #4169E1;
    border-right: 1px solid black;
}

.content-right {
  /* width: 86%; */
  /* width: calc(100% - 240px);  */
  width: calc(100% - 220px); 
  height: 100vh;
  display:flex;
  flex-direction:column;
}

.content-navbar { /* Se o navbar virar componente remover o comportamento de flex para o componente especifico */
    /* width: auto;
    height: 40px;
    max-height: 40px;
    background-color: cornflowerblue; 
    padding: 16px; */
}

.container-pages {
  display: flex;
  flex-direction: column; 
  width: calc(100% - 40px); /* 60px - 80px*/
  padding: 16px;   
  justify-content: start;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
}


</style>