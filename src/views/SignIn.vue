<template>
  <h1>Sign-In</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
  import { ref } from 'vue';
  import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
  
  //import "firebase/auth";
  import { useRouter } from 'vue-router';// import router
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const errMsg = ref()
  const register = () => {
    
      signInWithEmailAndPassword(getAuth(),email.value,password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully login');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
  }
</script>
 