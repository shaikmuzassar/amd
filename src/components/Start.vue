<template>
  <v-card elevation="2" class="card">
    <p>Start / Schedule Test</p>
    <v-select
      class="alignment"
      density="compact"
      label="Run Category"
      placeholder="Run Category"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      variant="outlined"
      width="577"
    ></v-select>
    <div class="SecondRow">
      <v-select
        class="alignment"
        density="compact"
        label="Group Name"
        placeholder="Group Name"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="500"
      ></v-select>
      <v-text-field
        class="text-area"
        density="compact"
        label="Name"
        variant="outlined"
        width="500"
      ></v-text-field>
    </div>
    <div class="SecondRow">
      <v-text-field
        class="text-area"
        density="compact"
        label="Template Name"
        placeholder="TPC-H-Oracle"
        variant="outlined"
        width="500"
        persistent-placeholder
      ></v-text-field>
      <v-text-field
        class="text-area"
        label="Description"
        density="compact"
        placeholder="Benchmark for TPC-H-Oracle"
        variant="outlined"
        width="500"
        persistent-placeholder
      ></v-text-field>
    </div>
    <p>Platform Details</p>
    <div class="toggle">
      <v-switch color="primary"></v-switch>
      <p>Find VM/Server by Vendors, CPU, Memory, Sockets and Cores</p>
    </div>
    <div class="ThirdRow">
      <v-select
        class="alignment"
        density="compact"
        label="Select SUT"
        placeholder="Select SUT"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="300"
      ></v-select>
      <p2 v-if="isVerified">Verified</p2>
      <v-checkbox
        color="primary"
        label="Use SUT as LTS"
        class="checkbox"
      ></v-checkbox>
      <v-btn class="verify-btn" @click="verify"> Verify </v-btn>
      <v-select
        class="alignment"
        density="compact"
        label="Run Configuration"
        placeholder="Run Configuration"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="300"
      ></v-select>
    </div>
    <p v-if="isVerified">
      AMD EPYC 9755 128-Core Processor<br />
      Total RAM: 1547142 MB<br />
      OS Name: Oracle<br />
      Linux Server OS Version: 8.7<br />
      Socket(s): 2<br />
      NUMA node(s): 8<br />
      NUMA node0<br />
      CPU(s): 0-31<br />
      NUMA node1 CPU(s): 32-63<br />
      NUMA node2 CPU(s): 64-95<br />
      NUMA node3 CPU(s): 96-127<br />
      NUMA node4 CPU(s): 128-159<br />
      NUMA node5 CPU(s): 160-191<br />
      NUMA node6 CPU(s): 192-223<br />
      NUMA node7 CPU(s): 224-255<br />
    </p>
    <h1 class="data">Database Configuration</h1>
    <div class="database">
      <v-select
        class="alignment"
        density="compact"
        label="Select Database"
        placeholder="Select Database"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="300"
      ></v-select>
      <v-select
        class="alignment"
        density="compact"
        label="Select Workload"
        placeholder="Select Workload"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="300"
      ></v-select>
    </div>
    <h1 class="data">Run Parameter</h1>
    <div class="parameter">
      <v-select
        class="alignment"
        density="compact"
        label="Scale Factor"
        placeholder="Scale Factor"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="300"
      ></v-select>
      <v-text-field
        class="text-area"
        label="DOP (Degree of Parallel) Power"
        density="compact"
        placeholder="DOP (Degree of Parallel) Power"
        variant="outlined"
        width="300"
      ></v-text-field>
      <v-text-field
        class="text-area"
        label="DOP (Degree of Parallel) Throughput"
        density="compact"
        placeholder="DOP (Degree of Parallel) Throughput"
        variant="outlined"
        width="300"
      ></v-text-field>
    </div>
    <diV class="toggle-para">
      <diV class="div-width">
        <v-switch
          color="info"
          v-model="model1"
          label="Use Backup ?"
          hide-details
          inset
          append-icon="mdi-information"
        ></v-switch>
      </diV>
      <diV class="div-width">
        <v-switch
          color="info"
          v-model="model2"
          label="With DB Refresh ?"
          hide-details
          inset
          append-icon="mdi-information"
        ></v-switch>
      </diV>
      <diV class="div-width">
        <v-switch
          color="info"
          v-model="model3"
          label="Configure ASM disk ? (For Oracle Only)"
          hide-details
          inset
          append-icon="mdi-information"
        ></v-switch>
      </diV>
    </diV>
    <div class="toggle-para2">
      <diV class="div-width">
        <v-switch
          color="info"
          v-model="model4"
          label="Teardown"
          hide-details
          inset
          append-icon="mdi-information"
        ></v-switch>
      </diV>
      <diV class="div-width">
        <v-switch
          color="info"
          v-model="model5"
          label="Use Exisiting Build"
          hide-details
          inset
          append-icon="mdi-information"
        ></v-switch>
      </diV>
    </div>
    <div class="runs">
      <v-select
        class="alignment"
        density="compact"
        label="No. of Runs"
        placeholder="No. of Runs"
        :items="[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
        ]"
        variant="outlined"
        width="300"
        persistent-placeholder
      ></v-select>
      <v-switch
          color="info"
          v-model="model6"
          label="Run Turbostat"
          hide-details
          inset
        ></v-switch>
    </div>
    <div class="parameter">
      <v-select
        class="alignment"
        density="compact"
        label="Priority (Optional)"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="300"
      ></v-select>
      <v-text-field
        class="text-area"
        label="No. of iterations"
        density="compact"
        placeholder="No. of iterations"
        variant="outlined"
        width="300"
      ></v-text-field>
      <v-text-field
        class="text-area"
        label="DOP (Degree of Parallel) Throughput"
        density="compact"
        placeholder="DOP (Degree of Parallel) Throughput"
        variant="outlined"
        width="300"
      ></v-text-field>
    </div>
    <div class="divider">
    <v-divider></v-divider>
  </div>
    <div class="btn">
      <div class="space">
      <v-btn class="space-btn" @click="verify"> SUBMIT </v-btn>
    </div>
    <div class="space">
      <v-btn class="space-btn" @click="verify"> CANCEL</v-btn>
    </div>
    <div class="space">
      <v-btn class="space-btn" @click="verify"> SAVE RUN PARAMETERS </v-btn>
    </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model1: false,
      model2: false,
      model3: false,
      model4: false,
      model5: false,
      model6: false,
      isVerified: false, // Initial state: not verified
    };
  },
  methods: {
    verify() {
      this.isVerified = true; // Set verified to true when the button is clicked
    },
  },
};
</script>

<style scoped>
p {
  padding-left: 1rem;
  margin-top: 1rem;
}
.card {
  left: 1rem;
  width: 98%;
}
.alignment {
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.SecondRow {
  display: flex;
  flex-direction: row;
}

.text-area {
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.toggle {
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
}
.ThirdRow {
  display: flex;
  flex-direction: row;
}
p2 {
  color: green;
  margin-top: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 15px;
}

.verify-btn {
  background-color: black;
  color: white;
  margin-top: 1.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.checkbox {
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 2rem;
}
.data {
  font-size: 17px;
  margin-top: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.database {
  width: 66%;
  display: flex;
  flex-direction: row;
}
.parameter {
  display: flex;
  flex-direction: row;
}
.toggle-para{
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
}
.div-width{
  width: 48%;
  padding-right: 1.7rem;
}
.toggle-para2{
  width: 70%;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
}
.runs{
  width: 48.5%;
  display: flex;
  flex-direction: row;
}
.btn{
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
}
.divider{
  width: 95%;
  padding-left: 3.5rem;
}
.space-btn{
  background-color: black;
  color: white;
  margin-top: 1rem;
}
.space{
  padding-left: 2rem;
}
</style>