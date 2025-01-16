<template>
  <v-app>
    <template v-if="!$route.meta.hideNavbar">
 <SideBar/>
  <!-- <Home /> -->
 <v-app-bar app color="black" dark v-if="!$route.meta.hideNavbar"
      :style="{ 'background-color': 'rgb(37 41 44) !important' }">
      <v-app-bar-nav-icon class="drawer-icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title :style="{ width: '500px' }">
        <div>{{ $route.name }} </div>
      </v-app-bar-title>
      <div style="text-align: right;">
        <a class="conf-style" href="#" @click="openConfluence">[Confluence]</a>
        &nbsp;
        <a class="conf-style" href="#" @click="contactUs">[Contact Us]</a>
      </div>
 
    </v-app-bar>
    </template>
    <v-main>
        <!-- Breadcrumb -->
        <div v-if="!$route.meta.hideNavbar" class="breadcrumb-container">
      <v-breadcrumbs :items="breadcrumbItems">
        <template v-slot:title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>
    </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,SideBar ,Home
  },

  data: () => ({
    //
  }),
  computed: {
    breadcrumbItems() {
      // Generate breadcrumb items from matched routes
      return this.$route.matched.map(route => ({
        title: route.meta.breadcrumb || route.name,
        to: route.path !== this.$route.path ? route.path : null, // Add a link to previous breadcrumbs
      }));
    },
  },
}
</script>
