<template>
    <v-container>
      <v-card>
        <v-card-text>
          <div class="table-wrapper">
            <v-table class="full-width-table">
              <thead>
                <tr class="table-header">
                  <th>Iteration</th>
                  <th>Base</th>
                  <th>Peak</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ formattedData.ittiration }}</td>
                  <td>{{ formattedData.base }}</td>
                  <td>{{ formattedData.peak }}</td>
                  <td>
                    <!-- Example Action Button -->
                    <v-icon
                      class="me-2"
                      size="small"
                      @click="performAction"
                    >
                      mdi-download
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {
      currentTestTableData: {
        type: Object,
        required: true,
      },
    },
    computed: {
      // Directly return the currentTestTableData since it's already in the correct structure
      formattedData() {
        return this.currentTestTableData;
      },
    },
    methods: {
      performAction() {
        // Example action for the button
        console.log("Action triggered for iteration:", this.formattedData.ittiration);
      },
    },
  };
  </script>
  
  <style scoped>
      .v-container {
max-width: 100% !important;
      }
  .table-wrapper {
    overflow-x: auto; /* Adds horizontal scrolling if table exceeds container width */
  }
  
  .full-width-table {
    width: 100% !important; /* Ensures the table spans the full width */
    border-collapse: collapse;
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
  </style>
  