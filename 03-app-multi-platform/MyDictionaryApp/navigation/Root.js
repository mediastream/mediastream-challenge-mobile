import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { DictionarySearch, DictionaryResult } from '@screens'


const App = createSwitchNavigator({
  DictionarySearch: {
    screen: DictionarySearch
  },
  DictionaryResult: {
    screen: DictionaryResult
  },
}, {
  headerMode: 'none',
  initialRouteName: 'DictionarySearch',
})

export const Root = createAppContainer(App);
