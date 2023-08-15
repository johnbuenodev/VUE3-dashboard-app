<script setup>

import router from "../router"; 

function exitSystem() {
    router.push({path:'/'});
}

</script>

<template>
 <div class="container-navbar">
    <p><i class="fa fa-star"></i> NamePage</p> <!-- fa fa-sign-out   | fa-solid fa-arrow-right -->
    <button class="button-exit" @click.prevent="exitSystem()"><i class="fa fa-sign-out"></i></button>
 </div>
</template>

<style>
   .container-navbar {
    width: auto;
    height: 40px;
    max-height: 40px;
    background-color: cornflowerblue; /* SlateBlue	#6A5ACD */
    padding: 16px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
   }

   .button-exit {
     border:0px; 
     padding:8px;
     margin-right:16px;
     border-radius:10px;
     font-size:22px;
   }

</style>