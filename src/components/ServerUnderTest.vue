<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
    :search="search"
    class="custom-table"
  >
    <!-- Index Column -->
    <template v-slot:item.index="{ index }">
      {{ index + 1 }}
    </template>

    <!-- Top Bar -->
    <template v-slot:top>
      <v-toolbar flat class="white-background">
        <v-btn class="new-item-btn" dark @click="refreshData"> Refresh </v-btn>
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

        <!-- New Item Dialog -->
        <v-dialog v-model="dialog" max-width="1500px">
          <template v-slot:activator="{ props }">
            <v-btn class="new-item-btn" dark v-bind="props"> New </v-btn>
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
                      variant="outlined"
                      label="SUT Name"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" sm="6">
                    <v-switch
                      v-model="ex11"
                      color="primary"
                      label="Status"
                      value="primary"
                      hide-details
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" md="3" sm="6">
                    <v-switch
                      density="compact"
                      v-model="ex11"
                      color="primary"
                      label="IsAutoProvisioned"
                      value="primary"
                      hide-details
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" md="2" sm="6">
                    <v-switch
                      density="compact"
                      v-model="ex11"
                      color="primary"
                      label="Revered"
                      value="primary"
                      hide-details
                    ></v-switch>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-autocomplete
                      density="compact"
                      label="Autocomplete"
                      :items="[
                        'California',
                        'Colorado',
                        'Florida',
                        'Georgia',
                        'Texas',
                        'Wyoming'
                      ]"
                      variant="underlined"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <h3>OS Details</h3>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.calories"
                      variant="outlined"
                      label="Host"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.fat"
                      variant="outlined"
                      label="UserName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.carbs"
                      type="password"
                      variant="outlined"
                      label="Password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-autocomplete
                      density="compact"
                      label="OS Type"
                      :items="[
                        'California',
                        'Colorado',
                        'Florida',
                        'Georgia',
                        'Texas',
                        'Wyoming'
                      ]"
                      variant="outlined"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <h3>BMC Details</h3>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.calories"
                      variant="outlined"
                      label="Host"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.fat"
                      variant="outlined"
                      label="UserName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.carbs"
                      variant="outlined"
                      label="Password"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <h3>Location Details</h3>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.calories"
                      variant="outlined"
                      label="City"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.fat"
                      variant="outlined"
                      label="Lab"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      density="compact"
                      v-model="editedItem.carbs"
                      variant="outlined"
                      label="Country"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn class="new-item-btn" dark @click="save"> Add </v-btn>

              <v-btn class="new-item-btn" dark @click="close"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Delete Confirmation Dialog -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">
              Are you sure you want to delete this item?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
              >
                OK
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- Actions Column -->
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)"
        >mdi-pencil</v-icon
      >
      <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <!-- Assign me Column -->
    <template v-slot:item.assign="{ item }">
      <v-switch
        v-model="item.assign"
        :color="item.assign ? 'blue' : 'grey'"
        hide-details
        inset
      ></v-switch>
    </template>
    <!-- No Data -->
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
  
  <script>
export default {
  name: 'BenchMark',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: 'Name', key: 'name' },
      { title: 'City', key: 'city' },
      { title: 'Lab', key: 'lab' },
      { title: 'In Active?', key: 'isActive' },
      { title: 'In Use?', key: 'inUse' },
      { title: 'Supported bench Mark', key: 'supportedBenakMark' },
      { title: 'Occupied By', key: 'OccupiedBy' },
      { title: 'Actions', key: 'actions', sortable: false },
      { title: 'Assign To Me', key: 'assign', sortable: false }
    ],
    desserts: [],
    search: '',
    editedIndex: -1,
    editedItem: {
      name: '',
      benchmark: 0,
      category: 0,
      status: 0,
      date: 0
    },
    defaultItem: {
      name: '',
      benchmark: 0,
      category: 0,
      status: 0,
      date: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add New SUT' : 'Update SUT'
    }
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'HELLO_ORACLE',
          city: 'Benagluru',
          lab: 'Lab_Test',
          isActive: 'YES',
          inUse: 'NO',
          supportedBenakMark: 'H_ORACLE',
          OccupiedBy: 'OccupiedBy',
          assign: true
        },

        {
          name: 'HELLO_ORACLE',
          city: 'Benagluru',
          lab: 'Lab_Test',
          isActive: 'YES',
          inUse: 'NO',
          supportedBenakMark: 'H_ORACLE',
          OccupiedBy: 'OccupiedBy',
          assign: false
        },

        {
          name: 'HELLO_ORACLE',
          city: 'Benagluru',
          lab: 'Lab_Test',
          isActive: 'YES',
          inUse: 'NO',
          supportedBenakMark: 'H_ORACLE',
          OccupiedBy: 'OccupiedBy',
          assign: false
        },

        {
          name: 'HELLO_ORACLE',
          city: 'Benagluru',
          lab: 'Lab_Test',
          isActive: 'YES',
          inUse: 'NO',
          supportedBenakMark: 'H_ORACLE',
          OccupiedBy: 'OccupiedBy',
          assign: true
        }

        // Additional items...
      ]
    },
    refreshData() {
      // Logic to refresh data
      this.initialize()
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
  
  <style>
.new-item-btn {
  background-color: black;
  color: white;
}
.custom-table thead {
  background-color: black;
  color: white;
}
.white-background {
  background-color: white;
  color: black;
}
</style>
  