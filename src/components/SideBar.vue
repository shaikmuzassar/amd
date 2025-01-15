<template>
      <v-navigation-drawer
        expand-on-hover
      
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder"  to="/benchmark-template" title="Bench Mark Templete" value="benchmarktemplete"></v-list-item>
            <v-list-item prepend-icon="mdi-folder" title="Bench Mark Run" value="benchmarkrun"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="User Management" value="usermanagment"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" to="/server-pool" title="Server Pool" value="serverpool"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Data Upload" value="dataupload"></v-list-item>
      
          <v-list-item prepend-icon="mdi-star" title="BI & Reporting" value="bireporting"></v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="Admin"
            title="S.Manikanta"
          ></v-list-item>
      </v-navigation-drawer>
</template>