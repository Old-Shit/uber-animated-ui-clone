import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Login from './Login'

const AppNavigator = createStackNavigator({ Login })

export default () => <AppNavigator />
