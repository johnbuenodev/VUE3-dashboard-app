<template>
   
    <div class="container-list">

        <CTable striped >
  <CTableHead style="position: sticky; top: 0; z-index: 1;">
    <CTableRow>
      <CTableHeaderCell scope="col">ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">NOME</CTableHeaderCell>
      <CTableHeaderCell scope="col" style="width: 800px;">DESCRIÇÃO</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody v-if="this.produtos.length > 0">
    
    <CTableRow v-for="prod in this.produtos" :key="prod.id">
      <CTableHeaderCell scope="row">{{prod.id}}</CTableHeaderCell>
      <CTableDataCell>{{ prod.title }}</CTableDataCell>
      <CTableDataCell  style="width: 800px; overflow-y: hidden;
  overflow-x: hidden;">{{ prod.body }}</CTableDataCell>
    </CTableRow>
    
  </CTableBody>
</CTable>
    
    </div>

</template>

<script>

import { CTable, CTableHead, CTableRow, CTableBody, CTableDataCell, CTableHeaderCell } from '@coreui/vue';
import axios from 'axios';
// export default {

// }

export default {
    
    name: 'ListComp',
    data() {
      return {
        produtos: Array,
      }
    },
    components: {
      CTable, CTableHead, CTableRow, CTableBody, CTableDataCell, CTableHeaderCell
    },
    //ciclo vida
    created() {
      this.getList();
    },
    methods: {
    async getList() { //fazendo fake dos produtos

      await axios.get("https://jsonplaceholder.typicode.com/posts").then(async (res) => {
       console.log(res.data);
       this.produtos = res.data;
       console.log("Chegou ate aqui");
 
      }).catch((err) => {
       console.log(err);
      }); 

    }
    }

}

</script>

<style lang="scss" scoped>

.container-list { //o comportamento está setado na div que é responsavel por renderizar a table
    width: 98%; //900px
    margin-left: 16px;
    background-color: white;
    border: 1px solid black;
    //padding: 16px;
    height: 82vh;

    overflow-y: auto;
    overflow-x: hidden;
}

.tableScroll { //não precisa somente em outros casos
   //overflow-y: scroll;
  //  height: 82vh;
  //  overflow: auto;
    // scroll-behavior: auto;
  //  overflow: auto;
  // overflow-y: auto;
  // overflow-x: hidden;
}

</style>