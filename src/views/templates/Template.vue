<template>
  <v-container>
    <v-layout text-center wrap>      
      <div class="panel-body">
        <div>
          <h3>{{mode}} {{id}}</h3>
        </div>

        <v-flex mb-4>
          <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
          <div>
            <v-btn v-if="mode == 'view'" @click="updateTemplate">Save</v-btn>
            <v-btn v-if="mode == 'view'" @click="deleteItem($event, model.name)">Delete</v-btn>
            <v-btn v-if="mode == 'create'" @click="createTemplate">Save</v-btn>
          </div>
          <div>
             {{ message }}
          </div>
        </v-flex>
      </div>
    </v-layout>
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
      type: String
    }
  },
  data() {
    return {
      message: "",
      model: {},
      schema: {},
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    };
  },
  mounted () {
    this.axios
      .get('http://localhost:8000/data/template/master')
      .then(response => (this.schema = JSON.parse(response.data.properties.schema)));

    if(this.mode != 'create'){
      this.axios
        .get('http://localhost:8000/data/template/'+this.id)
        .then(response => (this.model = response.data.properties));
    }
  },
  methods: {
    createTemplate() {
      this.axios
        .post(`http://localhost:8000/data/template`, this.model)
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
    updateTemplate() {
      this.axios
        .put(`http://localhost:8000/data/template/`+this.id, this.model)
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
      if(confirm("Do you really want to delete " + id + " template ?")){
            this.axios
              .delete('http://localhost:8000/data/template/'+id)
              .then(response => (this.templatelist = response.data))
      }
    }
  }
};
</script>