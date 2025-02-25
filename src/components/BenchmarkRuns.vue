
<template>
      <v-tabs
        v-model="tab"
        align-tabs="start"
        color="primary"
      >
      
        <v-tab value="one">SCHEDULED</v-tab>
        <v-tab value="two">RUNNING</v-tab>
        <v-tab value="three">COMPLETED</v-tab>
        <v-tab value="four">FAILED</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <scheduled-tab></scheduled-tab>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
            <running-tab></running-tab>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
            <completed-tab></completed-tab>
        </v-tabs-window-item>

        <v-tabs-window-item value="four">
            <failed-tab></failed-tab>
        </v-tabs-window-item>

      </v-tabs-window>
  </template>

  <script>
import ScheduledTab from '@/components/BechmarkRUNS/ScheduledTab.vue';
import RunningTab from '@/components/BechmarkRUNS/Runningtab.vue';
import CompletedTab from '@/components/BechmarkRUNS/CompletedTab.vue';
import FailedTab from '@/components/BechmarkRUNS/FailedTab.vue';
    export default {

        components: {
            'scheduled-tab': ScheduledTab,
            'running-tab': RunningTab,
            'completed-tab': CompletedTab,
            'failed-tab': FailedTab
        },
      data() {
        return {
          tab: null,
        }
      },
      mounted() {
        fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/benchmark-runs-header.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o"
      )
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => {
          console.log("Fetched Data:", data);

        })
        .catch((error) => console.error("Error fetching data:", error));
  }
    }
  </script>