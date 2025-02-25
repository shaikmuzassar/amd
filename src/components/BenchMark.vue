<!-- BenchMark.vue -->
<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
    :search="search"
    class="custom-table"
  >
  <template v-slot:item.index="{ index }">
      {{ index + 1 }}
    </template>
    <!-- Add status column template -->
    <template v-slot:item.status="{ item }">
      <span class="status-text">{{ item.status }}</span>
    </template>
    <template v-slot:top>
      <v-toolbar flat class="white-background">
        <v-toolbar-title>Benchmark Template</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <!-- Search Field -->
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
          class="mr-3"
          style="max-width: 300px"
        ></v-text-field>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn
              class="new-item-btn"
              @click="navigateToStart"
              dark
              v-bind="props"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="showDetails(item)">
        mdi-account-details
      </v-icon>
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="navigateToSchedule(item)"> mdi-play </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
  <!-- New Details Dialog -->
  <v-dialog v-model="detailsDialog" max-width="1200">
    <v-card>
      <v-card-title class="text-h5">
        {{ selectedItem?.name }} Details
      </v-card-title>

      <v-card-text>
        <v-container v-if="selectedItem">
          <!-- Basic Info Section -->
          <v-row>
            <v-col cols="12">
              <h3 class="text-h6">Basic Information</h3>
              <v-divider class="mb-4"></v-divider>
            </v-col>
            <v-col cols="6">
              <strong>Name:</strong> {{ selectedItem.name }}
            </v-col>
            <v-col cols="6">
              <strong>Benchmark Type:</strong> {{ selectedItem.benchmark }}
            </v-col>
            <v-col cols="6">
              <strong>Category:</strong> {{ selectedItem.category }}
            </v-col>
            <v-col cols="6">
              <strong>Status:</strong> {{ selectedItem.status }}
            </v-col>
            <v-col cols="12">
              <strong>Config Name:</strong> {{ selectedItem.configName }}
            </v-col>
          </v-row>

          <!-- Dynamic Details Section -->
          <v-row v-if="getItemSpecificDetails">
            <v-col cols="12">
              <h3 class="text-h6 mt-4">System Requirements</h3>
              <v-divider class="mb-4"></v-divider>
              <pre>{{ selectedItem.systemInfo }}</pre>
            </v-col>
            <v-col cols="12">
              <h3 class="text-h6 mt-4">Run Parameters Summary</h3>
              <v-divider class="mb-4"></v-divider>
            </v-col>
            <v-col cols="12">
              <div v-html="getItemSpecificDetails"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="closeDetails">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
<script>
export default {
  name: "BenchMark",
  data: () => ({
    detailsDialog: false,
    selectedItem: null,

    //   routingMap: {
    //   '1': '/Nginx',
    //   '2': '/FFMPEG',
    //   'TCO-H_ORACLE': '/database-config',
    //   // Add more mappings as needed
    // },

    dialog: false,
    dialogDelete: false,
    headers: [
      { title: "#", key: "index", align: "start", sortable: false },
      { title: "Name", key: "name" },
      { title: "Benchmark", key: "benchmark" },
      { title: "Category", key: "category" },
      { title: "Status", key: "status" },
      { title: "Date", key: "date" },
      { title: "Actions", key: "actions", sortable: false },
    ],

    itemSpecificDetails: {
      Nginx: {
        // Add more Nginx specific fields as needed
      },
      FFMPEG: {
        // You can add FFMPEG specific details here later
        // Add more FFMPEG specific fields as needed
      },
    },

    desserts: [],
    search: "",
    editedIndex: -1,
    editedItem: {
      name: "",
      benchmark: 0,
      category: 0,
      status: 0,
      date: 0,
    },
    defaultItem: {
      name: "",
      benchmark: 0,
      category: 0,
      status: 0,
      date: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    getItemSpecificDetails() {
      if (!this.selectedItem) return null;

      const details = this.itemSpecificDetails[this.selectedItem.name];
      if (!details) return null;

      // Convert the details object to HTML
      return Object.entries(details)
        .map(
          ([key, value]) => `
          <div class="mb-2">
            <strong>${key}:</strong> ${value}
          </div>
        `
        )
        .join("");
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    fetchNginxData() {
      fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/nginx-run-parameters-dialog.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o"
      )
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => {
          console.log("Fetched Data:", data);

          // Store fetched data inside itemSpecificDetails.Nginx
          this.itemSpecificDetails.Nginx = data;
        })
        .catch((error) => console.error("Error fetching data:", error));
    },
    fetchFFMEPGData() {
      fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/ffmpeg-run-parameters-dialog.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o"
      )
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => {
          console.log("Fetched Data:", data);

          // Store fetched data inside itemSpecificDetails.Nginx
          this.itemSpecificDetails.FFMPEG = data;
        })
        .catch((error) => console.error("Error fetching data:", error));
    },
    showDetails(item) {
      this.fetchNginxData();
      this.fetchFFMEPGData();
      this.selectedItem = item;
      this.detailsDialog = true;
    },

    closeDetails() {
      this.detailsDialog = false;
      this.selectedItem = null;
    },

    navigateToSchedule(item) {
      this.$router.replace({
        path: "/Schedule_Test",
        query: {
          configName: item.configName,
          name: item.name,
          description: item.description,
        },
      });
    },

    initialize() {
      this.desserts = [
        {
          id: 1,
          name: "Nginx",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
          configName: "Benchmark_Test_Nginx_439210",
          description: "Nginx Micro-Benchmark",
          systemInfo: `AMD EPYC 7713 64-Core Processor
Total RAM: 15983 MB
OS Name: Ubuntu
OS Version: 23.10 (Mantic Minotaur)
Socket(s): 1
NUMA node(s): 1
NUMA node0 CPU(s): 0-7`,
        },
        {
          id: 2,
          name: "FFMPEG",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
          configName: "Benchmark_Test_FFMPEG_843010",
          description: "Benchmark for FFMPEG",
          systemInfo: `AMD EPYC 7713 64-Core Processor
Total RAM: 15983 MB
OS Name: Ubuntu
OS Version: 23.10 (Mantic Minotaur)
Socket(s): 1
NUMA node(s): 1
NUMA node0 CPU(s): 0-7`,
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
        {
          name: "TCO-H_ORACLE",
          benchmark: "H_ORACLE",
          category: "Database",
          status: "APPROVED",
          date: "Jan/21/2025",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

  <style>
.status-text {
  color: #4CAF50; /* Green color */
}
.new-item-btn {
  background-color: black;
  color: white;
}
.custom-header {
  background-color: black;
  color: white;
  text-align: left;
  padding: 8px;
  font-weight: bold;
}
.white-background {
  background-color: white;
  color: black; /* Ensure text is readable */
}
</style>