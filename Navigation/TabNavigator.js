import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
return(
<Tab.Navigator
screenOptions={({krish}) => ({
tabBarIcon: ({ focused, color, size }) => {

 let Icon;

 if(krish.name === 'Feed') {
  Icon = focused
  ? 'book'
  : 'book-outline'
 }

 else if(krish.name === 'CreatePost'){
 Icon = focused
  ? 'create'
  : 'create-outline'
 }

 return <Ionicons name={iconName} size={size} color={color} />

}
})
}
>
  <Tab.Screens name="Feed" components={Feed} />
  <Tab.Screens name="CreatePost" components={CreatePost} />

</Tab.Navigator>
)
}

export default BottomTabNavigator;
