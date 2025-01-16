<template>
    <v-list-group value="BI">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file-chart"
              title="BI & Reporting"
            ></v-list-item>
          </template>
          <v-list-item
            title="Benchmark Templates"
            class="items"
            prepend-icon="mdi-list-status"
            value="123"
          ></v-list-item>
          <v-list-item
            title="Benchmark runs"
            class="items"
            prepend-icon="mdi-approximately-equal"
            value="456"
          ></v-list-item>
          <v-list-item
            title="management"
            class="items"
            prepend-icon="mdi-account-supervisor"
            value="789"
          ></v-list-item>
          <v-list-item
            title="Server pool"
            class="items"
            prepend-icon="mdi-semantic-web"
            value="101"
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

