<template>
  <v-container>
    <v-layout text-center wrap>
      I am here {{id}}
      <div class="panel-body">
        <v-flex mb-4>
          <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
          <div>
            <v-btn v-if="mode == 'view'">Edit</v-btn>
            <v-btn v-if="mode == 'create'" @click="createTemplate">Create</v-btn>
            <v-btn v-if="mode == 'edit'" @click="updateTemplate">Update</v-btn>
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
      type: String,
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
      .get('http://localhost:8000/templates/templates')
      .then(response => (this.schema = JSON.parse(response.data.properties.schema)));

    this.axios
      .get('http://localhost:8000/templates/'+this.id)
      .then(response => (this.model = response.data.properties));
  },
  methods: {
    createTemplate() {
      this.axios
        .post(`http://localhost:8000/template`, this.model)
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
        .update(`http://localhost:8000/template`, this.model)
        .then(response => {
          console.log(response);
          this.model={};
          this.message = "Successfully Updated"
        })
        .catch(e => {
          console.log(e);
          this.message = "Error occurred when updated: " + e
        });
    }
  }
};
</script>