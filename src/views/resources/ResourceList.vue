<template>
  <v-container fluid class="grey lighten-5">

      <v-btn :to="{path: 'new', query: {mode: 'create'}}" append text>Create New Resource</v-btn>

      <v-row align="center">
        <v-col cols="12">
          <v-select
            v-bind:items="selectlist"
            item-text="name"
            item-value="name"
            :menu-props="{ top: true, offsetY: true }"
            @change="loadResource"
            label="Label"
          ></v-select>
        </v-col>
      </v-row>

      <v-col cols="12" sm="4" v-for="(resource, i) in resourcelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line :to="{path: resource.key, query: {mode: 'view'}}" append>
            <v-list-item-content>
              <div class="overline mb-4">{{ resource.id }}</div>
              <v-list-item-title class="headline mb-1">{{ resource.properties.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ resource.properties.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
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
      resourcelist: {},
      selectlist: []
    }
  },
  mounted () {
      this.axios
        .get('http://localhost:8000/info/resources?type=resource')
        .then(response => (this.selectlist = response.data))
  },
  methods: {
    loadResource: function(a){
        this.$router.push({path: a, append: true, shallow: false })
        this.axios
          .get('http://localhost:8000/data/resource/' +a)
          .then(response => (this.resourcelist = response.data))

    }
  }
}
</script>