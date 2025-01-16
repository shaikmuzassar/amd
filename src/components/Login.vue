<template>
    <div class="container">
      <v-sheet class="sheet" :elevation="2" :height="370" :width="500" rounded>
        <v-img class="amd-logo" src="./amd-logo.png" />
        <v-text-field
          class="input"
          clearable
          label="Enter NTID (Ex:jsmith)"
          prepend-inner-icon="mdi-minus-box"
          density="compact"
          variant="outlined"
        >
          <template #append-inner>
            <span>@amd.com</span>
          </template>
        </v-text-field>
  
        <v-text-field
          class="input"
          label="Enter Password"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          @click:append-inner="visible = !visible"
          variant="outlined"
          clearable
        ></v-text-field> 
        <div id="btn-space">
          <button class="btn" @click="navigateToDashboard">LOGIN</button>
          <button class="btn">OKTA LOGIN</button>
          <button class="btn">OKTA LOGOUT</button>
        </div>
      </v-sheet>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      navigateToDashboard() {
        this.$router.push('/benchmark-template');
      }
    }
  };
  </script>
  
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .amd-logo {
    width: 40%;
    left: 9rem;
  }
  .input {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
  }
  .input span {
    opacity: 70%;
  }
  .btn {
    width: 100%;
    height: 3rem;
    background-color: black;
    color: azure;
  }
  .btn:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
  #btn-space {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  </style>