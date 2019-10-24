<template>
  <div class="panel-body">        
    <h1>This is a template page</h1>
    <Template/>
  </div>
</template>

<script>
// @ is an alias to /src
import Template from '@/components/templates/Template.vue'

export default {
  name: 'template-create',
  components: {
    Template
  }
}
</script>
