import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // [[dogs_array],[cats_array]]
}
