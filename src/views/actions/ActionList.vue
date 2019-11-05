<template>
  <v-container fluid class="grey lighten-5">

      <v-col cols="12" sm="4" v-for="(actiontype, i) in actiontypelist" :key="i">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined>
          <v-list-item three-line :to="{path: actiontype.properties.name, query: {mode: 'view'}}" append >
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ actiontype.properties.name }}</v-list-item-title>
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
      actiontypelist: {}
    }
  },
  mounted () {
      this.axios
        .get('http://localhost:8000/template?type=action')
        .then(response => (this.actiontypelist = response.data))
  }
}
</script>

