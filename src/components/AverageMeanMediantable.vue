<template>
    <v-container>
      <v-card>
        <v-card-text>
          <!-- Table with full-width styling -->
          <v-table class="full-width-table">
            <thead>
              <tr class="table-header">
                <th>Measures</th>
                <th>Base</th>
                <th>Peak</th>
              </tr>
            </thead>
            <tbody>
              <!-- Iterate through the averageMeanMedianTableData array to render rows -->
              <tr v-for="(item, index) in formattedData" :key="index">
                <td>{{ item.measures }}</td>
                <td>{{ item.base }}</td>
                <td>{{ item.peak }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {
      averageMEanMEdianTableData: {
        type: Array,
        required: true,
      },
    },
    computed: {
      // Return the data directly since it's an array
      formattedData() {
        return this.averageMEanMEdianTableData;
      },
    },
    methods: {
      performAction(iteration) {
        // Example action for the button
        console.log("Action triggered for iteration:", iteration);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ensure the table spans the full width of the container */
  .full-width-table {
    width: 100%;
    border-collapse: collapse; /* Removes gaps between cells */
  }
  
  .table-header {
    background-color: black;
    color: white;
    text-align: left;
  }
  
  .v-table th,
  .v-table td {
    text-align: left;
    padding: 8px;
  }
  
  /* Ensure the container spans the full width of the screen */
  .v-container {
    width: 100%;
    max-width: 100%;
    padding: 0; /* Removes default container padding */
  }
  
  .v-card {
    width: 100%;
  }
  
  .v-card-text {
    padding: 0; /* Optional: Removes extra padding around the table */
  }
  </style>
  