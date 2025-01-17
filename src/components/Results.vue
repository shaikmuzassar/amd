<template>
    <v-list-group value="Res">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-check-circle-outline"
              title="Results"
            ></v-list-item>
          </template>
          <v-list-item
            title="Benchmark Templates"
            to="/benchmark-template"
            prepend-icon="mdi-list-status"
            class="items"
            value="785"
          ></v-list-item>
          <v-list-item
            title="Benchmark runs"
          
            prepend-icon="mdi-approximately-equal"
            class="items"
            value="000"
          ></v-list-item>
          <v-list-item
            title="User Management"
            class="items"
            prepend-icon="mdi-account-supervisor"
            value="111"
          ></v-list-item>
          <v-list-item
            title="Server pool"
            to="/server-pool"
            class="items"
            prepend-icon="mdi-semantic-web"
            value="5555"
          ></v-list-item>
        </v-list-group>
</template>

<script>

</script>

<style scoped>
.items {
  margin: 0;
  right: 3rem;
}
</style>
