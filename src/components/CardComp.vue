<script>

 export default {
  name:'CardComp',
    props: {
     porcentagem: String,
     qtd: String,
     title: String,
     iconProps: String,
     backgroundCustom: String,
     colorText: String
    }
  }

</script>

<template>
  <div class="cardCustom" :style="backgroundCustom">
    
    <div class="contentCustom topCustom">
      <h3 style="font-size: 18px;" :style="colorText">{{title}}</h3>
      <p class="percentage" style="font-size: 18px;" :style="colorText">{{porcentagem}}%</p>
    </div>

    <div class="contentCustom footerCustom">
      <!-- <i class="fa fa-chart-bar" style="font-size: 18px;"></i> -->
      <i :class="['fa ico', iconProps]" style="font-size: 18px;" :style="colorText"></i>
      <p style="font-size: 18px;" :style="colorText">{{qtd}}</p>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>
   
   .cardCustom {
    display: flex;
    flex-direction: column;
    width: 300px;
    /* background-color: #FF8C00; */  
    /* #E9967A  #4169E1 #FF8C00 */
    border: 1px solid black;
    border-radius: 25px;
    padding: 16px;
    height: 110px; // 80px antes do boostrap
   }

   .contentCustom {
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: white;
   }

   .topCustom {
     height: 50px;
   }

   .footerCustom {
    height: 50px;
   }

</style>