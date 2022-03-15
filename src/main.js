import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "@firebase/app";
import { initializeApp } from "firebase/app";


/* code from our Firebase console */
const firebaseConfig = {
  apiKey: "AIzaSyACpwL2U6Fbe5plNkJSl-mdYfCFyXLQKAs",

  authDomain: "blogweb-auth.firebaseapp.com",

  projectId: "blogweb-auth",

  storageBucket: "blogweb-auth.appspot.com",

  messagingSenderId: "845884950678",

  appId: "1:845884950678:web:543efad4989db138ca1ab7"


};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App);

app.use(router);

app.mount("#app");

