<template>
  <v-card>
    <template v-slot:text>
      <div class="options">
        <v-select
          v-model="itemsPerPage"
          class="items-per-page"
          density="compact"
          :items="[5, 10, 15, 20]"
          label="Records per page"
          variant="outlined"
        ></v-select>
        <v-text-field
          density="compact"
          class="textarea-width date-input"
          width="40"
          type="date"
          v-model="startDate"
          label="Select Start Date"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          density="compact"
          v-model="endDate"
          width="40"
          class="textarea-width date-input"
          type="date"
          label="Select End Date"
          variant="outlined"
        ></v-text-field>
        <v-row>
          <v-col cols="5">
            <v-text-field
              v-model="search"
              density="compact"
              label="Search key words"
              variant="outlined"
              clearable
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn width="180" color="black" @click="performSearch">
              <v-icon left>mdi-magnify</v-icon>
              Search
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </template>

    <v-data-table
      :headers="headers"
      :items="filteredDesserts"
      :items-per-page="itemsPerPage"
      class="main-data-table"
      header-class="custom-header"
      density="comfortable"
      hide-default-footer
    >
      <!-- Add template for action column -->
      <template v-slot:item.actions="props">
        <v-icon
          size="small"
          class="me-2"
          @click="viewItem(props.item)"
          color="primary"
        >
          mdi-eye
        </v-icon>
        <v-icon size="small" @click="confirmDelete(props.item)" color="error">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <!-- View Item Dialog -->
    <v-dialog v-model="viewDialog" max-width="1200">
      <v-card>
        <v-card-title class="text-h10 bg-black text-white pa-3">
          Scheduled Test
        </v-card-title>
        <v-card-text class="pa-4">
          <div class="container-flex">
            <div class="dialog-container-1">
              <div class="dialog-values-container">
                <v-list v-if="selectedItem" density="compact">
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Test Name</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Test Type</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Workload</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >SUT</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Created Date</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Scheduled Date</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </div>
              <div class="dialog-value-keys-container">
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.name }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.testType }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.workload }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.sut }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.date }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.date }}</v-list-item-subtitle
                  >
                </v-list-item>
              </div>
            </div>
            <div class="dialog-container-2">
              <div class="dialog-values-container">
                <v-list v-if="selectedItem" density="compact">
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Group Name</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >CPU Model</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Workload Tool</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >LTS</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-grey-darken-1"
                      >Initiated By</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </div>
              <div class="dialog-value-keys-container">
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.groupName }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.workloadTool }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.workloadTool }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.workloadTool }}</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle
                    ><span class="spaced-colon">:</span>
                    {{ selectedItem.initiatedBy }}</v-list-item-subtitle
                  >
                </v-list-item>
              </div>
            </div>
          </div>

          <div>
            <v-divider class="border-opacity-50"></v-divider>
          </div>

          <div>
            <h3 class="text-grey-darken-1">Run Configurations:</h3>
          </div>

          <v-data-table
            :headers="parameterHeaders"
            :items="transformedParameters"
            hide-default-footer
            density="compact"
            class="parameters-table"
          ></v-data-table>


        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="viewDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Confirm Delete</v-card-title>
        <v-card-text> Are you sure you want to delete this item? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" text @click="deleteItem">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar for notifications -->
    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
      {{ snackbarText }}
    </v-snackbar>
  </v-card>
</template>
    
<script>
export default {
  data() {
    return {
      search: "",
      itemsPerPage: 10,
      startDate: "",
      endDate: "",
      dialogParameterName: [],
      parameterHeaders: [
        { key: 'parameter', title: 'Parameter' },
        { key: 'value', title: 'Value' }
      ],

      headers: [
        { key: "groupName", title: "Group Name" },
        { key: "name", title: "Name" },
        { key: "testType", title: "Test Type" },
        { key: "workload", title: "Workload" },
        { key: "workloadTool", title: "Workload Tool" },
        { key: "sut", title: "SUT" },
        { key: "date", title: "Date" },
        { key: "initiatedBy", title: "Initiated By" },
        { key: "actions", title: "Action" },
      ],
      desserts: [],
      filteredDesserts: [],
      viewDialog: false,
      selectedItem: null,
      deleteDialog: false,
      itemToDelete: null,
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
    };
  },
  computed: {
    transformedParameters() {
      if (!this.selectedItem || !this.dialogParameterName) {
        return [];
      }
      
      // Find the matching parameter object
      const paramObj = this.dialogParameterName.find(param => param.id === this.selectedItem.id);
      
      if (!paramObj) return [];
      
      // Transform the object into an array of parameter-value pairs
      return Object.entries(paramObj)
        .filter(([key]) => key !== 'id') // Exclude the id field
        .map(([key, value]) => ({
          parameter: key,
          value: value || 'N/A' // Handle null/undefined values
        }));
    },
    filteredDialogParameters() {
      if (!this.selectedItem || !this.dialogParameterName) {
        return [];
      }
      // Return only the parameter object that matches the selected item's ID
      return this.dialogParameterName.filter(
        (param) => param.id === this.selectedItem.id
      );
    },
  },
  methods: {
    fetchFirebaseData() {
      fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/benchmark-runs-header.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o"
      )
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              groupName: data[id].BenchmarkTest,
              name: data[id].BenchMarkName,
              testType: data[id].TestType,
              workload: data[id].Workload,
              workloadTool: data[id].WorkloadTool,
              sut: data[id].sut,
              date: data[id].date,
              initiatedBy: data[id].initiatedBy,
            });
          }
          this.filteredDesserts = results;
          this.desserts = results;
        });
      fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/benchmark-runs-header.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o"
      )
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const parameters = [];
          for (const id in data) {
            parameters.push({
              id: id,
              ansible_setup: data[id].ansible_setup,
              server_setup: data[id].server_setup,
              noOfiterations: data[id].noOfiterations,
              size: data[id].size,
              runtime: data[id].runtime,
              numjobs: data[id].numjobs,
              iodepth: data[id].iodepth,
              ramp_time: data[id].ramp_time,
              disk: data[id].disk,
              mode: data[id].mode,
              blocksize: data[id].blocksize,
            });
          }
          this.dialogParameterName = parameters;
        });
    },
    isDateInRange(itemDate) {
      if (!this.startDate && !this.endDate) return true;

      const date = new Date(itemDate);
      const start = this.startDate ? new Date(this.startDate) : null;
      const end = this.endDate ? new Date(this.endDate) : null;

      if (start && end) {
        return date >= start && date <= end;
      } else if (start) {
        return date >= start;
      } else if (end) {
        return date <= end;
      }
      return true;
    },
    performSearch() {
      let filtered = [...this.desserts];

      // Filter by date range
      filtered = filtered.filter((item) => this.isDateInRange(item.date));

      // Filter by search term
      if (this.search.trim()) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      this.filteredDesserts = filtered;
    },
    viewItem(item) {
      this.selectedItem = item;
      this.viewDialog = true;
    },
    confirmDelete(item) {
      console.log("Confirming delete for item:", item);
      this.itemToDelete = item;
      this.deleteDialog = true;
    },
    deleteItem() {
      console.log("Starting delete for item:", this.itemToDelete);

      if (!this.itemToDelete || !this.itemToDelete.id) {
        console.error("Invalid item to delete:", this.itemToDelete);
        this.showSnackbar("Error: Invalid item to delete", "error");
        return;
      }

      fetch(
        `https://amd-demo-3c3b6-default-rtdb.firebaseio.com/benchmark-runs-header/${this.itemToDelete.id}.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log("Delete response:", response);
          if (!response.ok) {
            throw new Error("Delete operation failed");
          }
          // Remove item from local arrays
          this.desserts = this.desserts.filter(
            (item) => item.id !== this.itemToDelete.id
          );
          this.filteredDesserts = this.filteredDesserts.filter(
            (item) => item.id !== this.itemToDelete.id
          );
          this.showSnackbar("Item Deleted Successfully", "success");
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
          this.showSnackbar("Error deleting item", "error");
        })
        .finally(() => {
          this.deleteDialog = false;
          this.itemToDelete = null;
        });
    },
    showSnackbar(text, color = "success") {
      this.snackbarText = text;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
  mounted() {
    // Call fetchFirebaseData instead of resetting filteredDesserts
    this.fetchFirebaseData();
  },
};
</script>
    
  
  <style scoped>
.container-flex {
  display: flex;
  gap: none; /* Add space between columns */
  /* Adjust alignment */
}

.list-item {
  display: flex;
  justify-content: space-between; /* Pushes items apart */
  align-items: space-between;
  gap: none; /* Adds space between title & subtitle */
}

.v-list-item-title {
  flex-shrink: 0; /* Prevents title from shrinking */
}

.v-list-item-subtitle {
  flex-grow: 1; /* Allows subtitle to expand */
  text-align: left; /* Aligns subtitle to the right */
}

.dialog-values-container {
  width: 35%; /* Equal width for both */
}

.search-icon {
  padding-right: 1rem;
}
.options {
  width: 90vmax;
  display: flex;
  flex-direction: row;
}
.textarea-width {
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 250px !important; /* Adjust width */
  min-width: 200px !important;
}
.items-per-page {
  padding-right: 1rem;
  max-width: 150px !important; /* Adjust width */
  min-width: 100px !important; /* Ensure it's not too small */
}
.date-input :deep(.v-field__input) {
  position: relative;
}

.date-input :deep(.v-field__input)::-webkit-calendar-picker-indicator {
  position: absolute;
  right: 0;
  margin-right: 8px;
}
:deep(.main-data-table) thead th {
  background-color: black !important;
  color: white !important;
}

/* Dialog parameters table - transparent background */
:deep(.parameters-table) thead th {
  background-color: transparent !important;
  color: grey !important;
}
.spaced-colon {
  margin-right: 15px; /* Adjust as needed */
}
.dialog-container-1 {
  width: 50%;
  display: flex;
  flex-direction: row;
}
.dialog-container-2 {
  width: 50%;
  display: flex;
  flex-direction: row;
  padding-left: 5rem;
}
.dialog-value-keys-container {
  margin-top: 0.5rem;
}
h3 {
  margin-top: 1rem;
}
</style>
    