<template>
    <v-card elevation="2" class="card">
      <p>Start / Schedule Test</p>
      <v-select
        v-model="runCategory"
        class="alignment"
        density="compact"
        label="Run Category"
        placeholder="Run Category"
        :items="[
          'Benchmark_Test',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="577"
        :error="!runCategory && isRunCategoryTouched"
        :error-messages="
          !runCategory && isRunCategoryTouched ? ['Required.'] : []
        "
        @change="handleRunCategoryChange"
        @blur="isRunCategoryTouched = true"
      ></v-select>
      <div class="SecondRow">
        <v-select
          v-model="groupName"
          class="alignment"
          density="compact"
          label="Group Name"
          placeholder="Group Name"
          :items="[
            'Benchmark_Test',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="outlined"
          width="500"
          :error="!groupName && isGroupNameTouched"
          :error-messages="!groupName && isGroupNameTouched ? ['Required.'] : []"
          @change="handleGroupNameChange"
          @blur="isGroupNameTouched = true"
        ></v-select>
        <v-text-field
          class="text-area"
          density="compact"
          label="Name"
          v-model="textAreaValue"
          variant="outlined"
          width="500"
          persistent-placeholder
        ></v-text-field>
      </div>
      <div class="SecondRow">
        <v-text-field
          class="text-area"
          density="compact"
          label="Template Name"
          :placeholder="textFieldValue"
          variant="outlined"
          width="500"
          @click="validateForm"
          persistent-placeholder
        ></v-text-field>
        <v-text-field
          class="text-area"
          label="Description"
          density="compact"
          :placeholder="descriptionValue"
          variant="outlined"
          width="500"
          @click="validateForm"
          persistent-placeholder
        ></v-text-field>
      </div>
      <nginx v-if="textFieldValue === 'Nginx'" @callParentFunction="validateForm"></nginx>
      <ffmpeg v-if="textFieldValue === 'FFMPEG'" @callParentFunction="validateForm"></ffmpeg>
    </v-card>
   </template>

<script>
import Nginx from './Nginx.vue';
import FFMPEG from './FFMPEG.vue';

export default{

  components:{
    'nginx' : Nginx,
    'ffmpeg': FFMPEG,
  },

  data(){
    return{

      textAreaValue: '',
      textFieldValue: '',
      descriptionValue: '',

      runCategory: null, // Selected Run Category
      groupName: null, // Selected Group Name
      isRunCategoryTouched: false, // Tracks if Run Category dropdown was interacted with
      isGroupNameTouched: false, // Tracks if Group Name dropdown was interacted with
    }
  },
  created() {
    this.textAreaValue = this.$route.query.configName || '';
    this.textFieldValue = this.$route.query.name || '';
    this.descriptionValue = this.$route.query.description || '';
  },
  watch: {
    selectedSUT(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.showContent = false;
          this.isVisible = false;
        }
        if (newVal) {
          if (!this.isVerified) {
            // If selected but not verified, show "Not Verified"
            this.verificationStatus = "Not Verified";
            this.verificationStyle = { color: "red" }; // Red color for "Not Verified"
          } else {
            // If already verified, maintain the "Verified" status
            this.verificationStatus = "Verified";
            this.verificationStyle = { color: "green" }; // Green color for "Verified"
          }
        } else {
          this.verificationStatus = ""; // Clear status if no selection
        }
      },
    '$route.query': {
      handler(newQuery) {
        this.textAreaValue = newQuery.configName || '';
        this.textFieldValue = newQuery.name || '';
        this.descriptionValue = newQuery.description || '';
      },
      deep: true
    }
  },
  methods: {
    handleRunCategoryChange() {
        this.isRunCategoryTouched = true; // Mark as touched when user interacts
        if (this.groupName) {
          this.isGroupNameTouched = false; // Reset validation for Group Name
        }
      },
      handleGroupNameChange() {
        this.isGroupNameTouched = true; // Mark as touched when user interacts
        if (this.runCategory) {
          this.isRunCategoryTouched = false; // Reset validation for Run Category
        }
      },
      validateForm() {
        // Manually trigger validation for both fields
        if (!this.runCategory) {
          this.isRunCategoryTouched = true; // Mark as touched if not selected
        }
        if (!this.groupName) {
          this.isGroupNameTouched = true; // Mark as touched if not selected
        }
      },
      handleSelection(newValue) {
        // Only reset if the selection actually changed
        if (newValue !== this.previousSelection) {
          this.showContent = false;
          this.isVisible = false;
          this.previousSelection = newValue;
        }
        // If there's a new selection and it's different from the previous one
        if (newValue && newValue !== this.previousSelection) {
          this.verificationStatus = "Not Verified";
          this.verificationStyle = { color: "red" };
          this.previousSelection = newValue;
        }
      },
  }
}

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


</style>