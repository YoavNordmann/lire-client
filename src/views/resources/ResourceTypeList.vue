<template>
  <v-container fluid class="grey lighten-5">

      <v-col cols="12" sm="4" v-for="(resourcetype, i) in resourcetypelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line :to="{path: resourcetype.properties.name}" append >
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ resourcetype.properties.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>  
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      resourcetypelist: {}
    }
  },
  mounted () {
      this.axios
        .get('http://localhost:8000/template?type=resource')
        .then(response => (this.resourcetypelist = response.data))
  }
}
</script>

