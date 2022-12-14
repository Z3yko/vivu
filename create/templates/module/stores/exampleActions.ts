import { API_EXAMPLE } from '../../constants'
import { exampleService } from '../../services'
import * as types from './exampleTypes'

const actions: Record<string, Function> = {
  /**
   * @param  {{commit:Function}} {commit}
   */
  [types.EXAMPLE_REQUEST]: async({ commit }: { commit: Function }) => {
    commit(types.EXAMPLE_REQUEST)

    try {
      const { data } = await exampleService.get(API_EXAMPLE)

      commit(types.EXAMPLE_SUCCESS, data)
    }
    catch (error) {
      commit(types.EXAMPLE_ERROR, error)
    }
  },
}

export default actions
