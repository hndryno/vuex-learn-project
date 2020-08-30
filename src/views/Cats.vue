<template>
    <div>
       <PetTable
        species="CATS"
        :pets="cats"
       />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import PetTable from '../components/PetTable'
export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
