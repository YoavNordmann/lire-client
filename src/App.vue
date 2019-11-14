<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/template">
          <v-list-item-action>
            <v-icon>mdi-alpha-t-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Templates</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/resource">
          <v-list-item-action>
            <v-icon>mdi-alpha-r-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Resources</v-list-item-title>
          </v-list-item-content>
        </v-list-item>        
        <v-list-item to="/graphs">
          <v-list-item-action>
            <v-icon>mdi-alpha-g-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Graphs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Linkable Resources</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
