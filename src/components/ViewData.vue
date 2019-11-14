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
            <v-btn v-if="mode == 'view'" v-on:click="$emit('edit')">Edit</v-btn>
            <v-btn v-if="mode == 'view'" v-on:click="$emit('delete', model)">Delete</v-btn>
            <v-btn v-if="mode == 'create'" v-on:click="$emit('create', model)">Create</v-btn>
            <v-btn v-if="mode == 'edit'" v-on:click="$emit('update', model)">Update</v-btn>
            <v-btn v-if="mode == 'edit'" v-on:click="$emit('cancel')">Cancel</v-btn>
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
    model: {
      type: Object
    },
    schema: {
      type: Object
    },
    mode: {
      type: String,
    }
  },
  data() {
    return {
      model: {},
      schema: {},
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    };
  }
}
</script>

