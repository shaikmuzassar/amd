
<template>
  <v-navigation-drawer location="left" permanent width="330">
    <v-img class="logo" src="./amd-logo.png"></v-img>

    <v-divider></v-divider>
    <v-list v-model:opened="open">
      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="list"
            prepend-icon="mdi-view-dashboard"
            v-bind="props"
            title="Dashboard"
          ></v-list-item>
        </template>

        <v-list-item
          class="items"
          prepend-icon="mdi-chart-bar"
          title="Data quality Report"
          value="data"
        ></v-list-item>
        <v-list-item
          class="items"
          title="Weekly Report"
          prepend-icon="mdi-chart-pie"
          value="weekly"
        ></v-list-item>
        <v-list-item
          class="items"
          prepend-icon="mdi-file-chart"
          title="Turin Weekly Report"
          value="turin"
        ></v-list-item>
        <v-list-item
          class="items"
          prepend-icon="mdi-file-chart"
          title="OPN Sweep Report"
          value="opn"
        ></v-list-item>
      </v-list-group>
      <result></result>
      <data-upload></data-upload>
      <bi-reporting></bi-reporting>

      <v-divider></v-divider>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        subtitle="Admin"
        title="S.Manikanta"
      ></v-list-item>
      <v-list-item
        class="items"
        to="/login"
        prepend-icon="mdi-logout-variant"
        title="Logout"
        value="logout"
      ></v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>
  
  
  <script>
import Results from './Results.vue'
import Data from './DataUpload.vue'
import BI from './BI.vue'

export default {
  components: {
    result: Results,
    'data-upload': Data,
    'bi-reporting': BI
  },
  data() {
    return {
      open: ['Users']
    }
  }
}
</script>
  
  
  <style scoped>
.logo {
  width: 50%;
  left: 5rem;
}

.items {
  margin: 0;
  right: 3rem;
}

.list:hover {
  color: #1977d3;
}
</style>