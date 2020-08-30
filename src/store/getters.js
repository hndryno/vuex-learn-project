export default {
  // for count
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  // for filtering
  getAllCats: (state) => {
    return state.pets.filter((pets) => {
      return pets.species === 'cat'
    })
  }
}
