<!-- ServerPool.vue -->
<template>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="start"
        color="deep-purple-accent-4"
      >
      
        <v-tab value="one">SYTEM UNDER TEST</v-tab>
        <v-tab value="two">LOAD TESTING SERVER (CLIENT)</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <ServerUnderTest></ServerUnderTest>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Two
        </v-tabs-window-item>

     
      </v-tabs-window>
    </v-card>
  </template>
  <script>
import ServerUnderTest from './ServerUnderTest.vue';

    export default {
        name: 'ServerPool',
        components: {
            ServerUnderTest
  },
      data: () => ({
        tab: null,
      }),
    }
  </script>
  

  