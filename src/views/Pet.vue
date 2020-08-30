<template>
    <div>
     <h1> {{ animal.name }} ({{this.$route.params.species}}) </h1>
     <p> Age :{{ animal.age }} years old </p>
     <p> Breed :{{ animal.breed}} </p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
  methods: {
    // pet () {
    //   // this.dogs
    //   // this.cats
    //   const animals = this[this.$route.params.species][this.$route.params.id] // sama seperti diatas
    //   return animals
    // }
  },
  mounted () {
    const animals = this[this.$route.params.species][this.$route.params.id]
    this.animal = animals
  }
}
</script>
