<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
  import { ref } from 'vue';
  import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
  
  //import "firebase/auth";
  import { useRouter } from 'vue-router';// import router
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const errMsg = ref()
  const register = () => {
    
      createUserWithEmailAndPassword(getAuth(),email.value,password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.message);
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

              case 'auth/email-already-in-use':
                errMsg.value='Email already in use'
                break
                case 'auth/weak-password':
                  errMsg.value='Weak Password'
                  break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
  }
</script>