<template>
  <v-container fluid class="grey lighten-5">
      <v-col cols="12" sm="4" v-for="(type, i) in typelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line :to="{path: type.properties.name}" append >
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ type.properties.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>  
  </v-container>
</template>

<script>

export default {
  props: {
    typelist: {
        type: Array
    }
  }
}
</script>

