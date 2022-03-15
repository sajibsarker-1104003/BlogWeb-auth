<template>
  <div>
    <nav>      
         <router-link to="/"> Home </router-link> |
        <router-link to="/feed"> Feed </router-link> |
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
        <button @click="handleSignOut" v-if="isLoggedIn">Logout</button>
                          
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {onMounted,ref} from 'vue';
import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth';
const router = useRouter()
let auth;
let isLoggedIn=ref(false);
onMounted(()=>{
  auth=getAuth();
  console.log(auth.currentUser)
  onAuthStateChanged(auth,(user)=>{
    if(user){
      isLoggedIn.value=true;
    }else{
      isLoggedIn.value=false;
    }
  });
});
const handleSignOut=()=>{
  signOut(auth).then(()=>{
    console.log("Successfully !!")
    router.push("/");
  });
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
