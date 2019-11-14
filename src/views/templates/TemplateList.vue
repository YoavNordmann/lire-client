<template>
  <v-container fluid class="grey lighten-5">

      <v-btn :to="{path: 'new', query: {mode: 'create'}}" append text>Create Template</v-btn>

      <v-col cols="12" sm="4" v-for="(schema, i) in templatelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line :to="{path: schema.properties.name, query: {mode: 'view'}}" append>
            <v-list-item-content>
              <div class="overline mb-4">{{ schema.properties.type }}</div>
              <v-list-item-title class="headline mb-1">{{ schema.properties.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ schema.properties.description }}</v-list-item-subtitle>
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
      templatelist: {}
    }
  },
  mounted () {
    this.axios
      .get('http://localhost:8000/data/template')
      .then(response => (this.templatelist = response.data))
  }
}
</script>