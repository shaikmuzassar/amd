<template>
    <v-list-group value="Da">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file-chart"
              title="Data Upload"
            ></v-list-item>
          </template>
          <v-list-item
          to="/benchmark-template'"
            title="Benchmark Templates"
            class="items"
            prepend-icon="mdi-list-status"
            value="abc"
          ></v-list-item>
          <v-list-item
            title="Benchmark runs"
            class="items"
            prepend-icon="mdi-approximately-equal"
            value="def"
          ></v-list-item>
          <v-list-item
            title="management"
            class="items"
            prepend-icon="mdi-account-supervisor"
            value="ghi"
          ></v-list-item>
          <v-list-item
            title="Server pool"
            class="items"
            to="/server-pool"
            prepend-icon="mdi-semantic-web"
            value="jkl"
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

