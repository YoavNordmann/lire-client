<template>
  <v-container fluid class="grey lighten-5">

      <v-col cols="12" sm="4" v-for="(schema, i) in templatelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Template</div>
              <v-list-item-title class="headline mb-1">{{ schema.properties.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ schema.properties.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn :to="{path: schema.properties.name, query: {mode: 'edit'}}" append text>Edit</v-btn>
            <v-btn :to="{path: schema.properties.name, query: {mode: 'view'}}" append text>View</v-btn>
            <v-btn :to="schema.properties.name" append v-if="schema.properties.name != 'templates'" text>Delete</v-btn>
          </v-card-actions>
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
      .get('http://localhost:8000/templates')
      .then(response => (this.templatelist = response.data))
  }  
}
</script>