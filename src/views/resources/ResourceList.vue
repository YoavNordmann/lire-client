<template>
  <v-container fluid class="grey lighten-5">

      <v-btn :to="{path: 'new', query: {mode: 'create'}}" append text>Create New Resource</v-btn>

      <v-col cols="12" sm="4" v-for="(resource, i) in resourcelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ resource._id }}</div>
              <v-list-item-title class="headline mb-1">{{ resource.properties.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ resource.properties.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn :to="{path: resource.key, query: {mode: 'edit'}}" append >Edit</v-btn>
            <v-btn :to="{path: resource.key, query: {mode: 'view'}}" append >View</v-btn>
            <v-btn @click="deleteItem($event, resource.key)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>  
  </v-container>
</template>

<script>

export default {
  props: {
    type: {
        type: String
    }
  },
  data () {
    return {
      resourcelist: {}
    }
  },
  mounted () {
    if(this.type){
      this.axios
        .get('http://localhost:8000/resource/' + this.type)
        .then(response => (this.resourcelist = response.data))
    } else {
      this.axios
        .get('http://localhost:8000/template/')
        .then(response => (this.resourcelist = response.data))      
    }

  },
  methods: {
    deleteItem: function (event, id) {
      if(confirm("Do you really want to delete Resource "+ id +" ?")){
            this.axios
              .delete('http://localhost:8000/resource/'+ this.type + '/' + id)
              .then(response => (this.templatelist = response.data))
      }
    }
  }
}
</script>