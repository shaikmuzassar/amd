<template>
    <v-container>
      <v-card>
        <v-card-text>
          <!-- Ensure the table stretches to 100% width -->
          <v-table class="full-width-table">
            <thead>
              <tr class="table-header">
                <th>Key</th>
                <th>Value</th>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in formattedData" :key="index">
                <td>{{ row.key1 }}</td>
                <td>{{ row.value1 }}</td>
                <td>{{ row.key2 }}</td>
                <td>{{ row.value2 }}</td>
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
      systemInfo: {
        type: Object,
        required: true,
      },
    },
    computed: {
      formattedData() {
        const allEntries = [];
        // Flatten the nested objects
        for (const [section, details] of Object.entries(this.systemInfo)) {
          for (const [key, value] of Object.entries(details)) {
            allEntries.push({ key, value });
          }
        }
  
        // Group into rows with four cells (key-value-key-value)
        const formatted = [];
        for (let i = 0; i < allEntries.length; i += 2) {
          formatted.push({
            key1: allEntries[i]?.key || "",
            value1: allEntries[i]?.value || "",
            key2: allEntries[i + 1]?.key || "",
            value2: allEntries[i + 1]?.value || "",
          });
        }
        return formatted;
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
    max-width: 100%; /* Prevents unintended width restrictions */
    padding: 0; /* Removes default container padding */
  }
  
  .v-card {
    width: 100%;
  }
  
  .v-card-text {
    padding: 0; /* Optional: Removes extra padding around the table */
  }
  </style>
  