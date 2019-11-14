<template>

  <v-container>

    <v-form>
      <v-container>
        <v-row>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="model.name"
              label="Name"
              single-line
              solo
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              v-model="model.resources"
              :items="resourcelist"
              attach
              chips
              label="Resources"
              multiple
            ></v-select>
          </v-col>

        </v-row>
        <v-row>
          <div>
            <v-btn v-if="mode == 'view'" @click="updateGraph">Save</v-btn>
            <v-btn v-if="mode == 'view'" @click="deleteItem($event, model.name)">Delete</v-btn>
            <v-btn v-if="mode == 'create'" @click="createTemplate">Create</v-btn>
          </div>
          <div>
             {{ message }}
          </div>          
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

Vue.use(VueFormGenerator);

export default {
  props: {
    id: {
        type: String
    },
    mode: {
      type: String,
    }
  },
  data() {
    return {
      message: "",
      model: {},
      resourcelist: []
    };
  },
  mounted () {
    this.axios
      .get('http://localhost:8000/info/resources/name')
      .then(response => (this.resourcelist = response.data));

    if(this.mode != 'create'){
      this.axios
        .get('http://localhost:8000/data/graph/'+this.id)
        .then(response => (this.model = response.data.properties));
    }
  },
  methods: {
    createGraph() {
      this.axios
        .post(`http://localhost:8000/data/graph`, this.model)
        .then(response => {
          console.log(response);
          this.model={};
          this.message = "Successfully Updated"
        })
        .catch(e => {
          console.log(e);
          this.message = "Error occurred when updated: " + e
        });
    },
    updateGraph() {
      this.axios
        .put(`http://localhost:8000/data/graph` + this.id, this.model)
        .then(response => {
          console.log(response);
          this.model={};
          this.message = "Successfully Updated"
        })
        .catch(e => {
          console.log(e);
          this.message = "Error occurred when updated: " + e
        });
    },
    deleteItem: function (event, id) {
      if(confirm("Do you really want to delete Resource "+ id +" ?")){
            this.axios
              .delete('http://localhost:8000/data/graph/'+ this.id)
              .then(response => (this.templatelist = response.data))
      }
    }
  }
};
</script>