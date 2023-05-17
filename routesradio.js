import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Player from './pages/player'
import Alpha from './pages/alpha'
import Sertanejo from './pages/sertanejo'
import Radio from './pages/radio'

const Stack = createStackNavigator();

export default function RotasBuscar() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Radio" component={Radio}/>
      <Stack.Screen name="Player" component={Player}/>
      <Stack.Screen name="Alpha" component={Alpha}/>
      <Stack.Screen name="Sertanejo" component={Sertanejo}/>
    </Stack.Navigator>
  );
}
