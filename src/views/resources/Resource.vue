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
    },
    type: {
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
      .get('http://localhost:8000/template/'+this.type)
      .then(response => (this.schema = JSON.parse(response.data.properties.schema)));

    if(this.mode != 'create'){
      this.axios
        .get('http://localhost:8000/resource/'+this.type +'/' + this.id)
        .then(response => (this.model = response.data.properties));
    }
  },
  methods: {
    createTemplate() {
      this.axios
        .post(`http://localhost:8000/resource/` +this.type, this.model)
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
        .update(`http://localhost:8000/resource/` +this.type, this.model)
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