import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/BottomTab/Home';
import Detail from './src/Stack/Detail';

// const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// function TabNavigator( ){
//   return(
//     <Tab.Navigator>
//       <Tab.Screen name='Home' component={StackNavigator}/>
//       <Tab.Screen name='Profile' component={Profile}/>
//       </Tab.Navigator>
//   )
// }

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home}/>
      <Stack.Screen name='Detail' component={Detail}/>
    </Stack.Navigator>
  )
}

export default function App (){
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

