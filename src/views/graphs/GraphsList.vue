<template>
  <v-container>
    <v-btn :to="{path: 'new', query: {mode: 'create'}}" append text>Create New Graph</v-btn>
      <v-col cols="12" sm="4" v-for="(graph, i) in graphslist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line :to="{path: graph, query: {mode: 'view'}}" append>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ graph }}</v-list-item-title>
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
      graphslist: []
    }
  },
  mounted () {
      this.axios
        .get('http://localhost:8000/info/graphs')
        .then(response => (this.graphslist = response.data))
  }
}
</script>

