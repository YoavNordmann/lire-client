<template>
  <TypeCards v-bind:typelist=actiontypelist></TypeCards>  
</template>

<script>
import TypeCards from '@/components/TypeCards.vue'

export default {

  data () {
    return {
      actiontypelist: []
    }
  },
  components: {
    TypeCards
  },
  mounted () {
      this.axios
        .get('http://localhost:8000/data/template?type=action')
        .then(response => (this.actiontypelist = response.data))
  }
}
</script>

