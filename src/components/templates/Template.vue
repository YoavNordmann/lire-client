<template>
  <div class="panel-body">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    <div>
      <button @click="postPost">Update</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'

Vue.use(VueFormGenerator)

export default {
  data () {
    return {
      count: 0,
      model: {},
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'ID (disabled text field)',
            model: 'id',
            readonly: true,
            disabled: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'Template Name',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Description',
            model: 'description',
            placeholder: 'description',
            featured: true,
            required: true
          },
          {
            type: 'textArea',
            label: 'schema',
            model: 'schema',
            min: 2,
            rows: 10,
            required: true,
            hint: 'Minimum 2 characters',
            validator: VueFormGenerator.validators.string
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  methods: {
    
    postPost() {
      this.axios.post(`http://localhost:8000/test`, this.model)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
	font-family: Tahoma;
	font-size: 14px;
}

body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333;
}

pre {
	overflow: auto;
}
	pre .string { color: #885800; }
	pre .number { color: blue; }
	pre .boolean { color: magenta; }
	pre .null { color: red; }
	pre .key { color: green; }    

h1 {
	text-align: center;
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 500;
}

fieldset {
	border: 0;
}

.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	border-color: #ddd;
}

.panel-heading {
	color: #333;
	background-color: #f5f5f5;
	border-color: #ddd;

	padding: 10px 15px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;        
}

.panel-body {
	padding: 15px;
}				

.field-checklist .wrapper {
	width: 100%;
}
</style>
