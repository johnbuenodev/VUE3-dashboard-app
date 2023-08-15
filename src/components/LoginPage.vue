
<script setup>

 import router from "../router"; 

 function login() {
  //alert("Logar");

  //exemplos
  /*

    // route by route path
    this.$router.push('home')

    // object
    this.$router.push({ path: 'home' })

    // named route navigation with parameters
    this.$router.push({ name: 'user', params: { userId: '123' } })

    // with query params, resulting in /profile?info=some-info
    this.$router.push({ path: 'profile', query: { info: 'some-info' }

  */
  
  router.push({path:'/dashboard'});

 }

</script>

<template>
    <div class="container-login">
        <div class="form-login">

            <form class="form">

                <span style="font-size: 24px;color: white;">Acesso</span>

                <input class="inputCustom" placeholder="Informe o E-mail" type="email" required />
                
                <input class="inputCustom" placeholder="Informe a Senha" type="password" required />

                <input class="inputButton" type="submit" value="Entrar" @click.prevent="login()"/> <!-- @click="login()" -->
            
            </form>

        </div>
    </div>
</template>

<!-- <style lang="sass" src="./style.sass" scoped /> -->

<style lang="scss" scoped >

 
  .container-login {
    width: 100%;
    height: 100vh;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form-login {
    width: 600px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    background-color: #4169E1;
    border: 2px solid black;
    border-radius: 25px;
  }

  .form {
    width: 94.5%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-evenly;
  }

  .inputCustom {
   font-size: 18px;
   padding: 12px;
   text-align: start;
  }

  .inputButton {
   font-size: 18px;
   padding: 12px;
   text-align: center;
   border-radius: 25px;
   background-color: #32CD32;
   color: white;
   border: 2px solid green;
   transition: 0.3s;
  }

  .inputButton:hover{
   opacity: 0.7;
  }  

</style> 