import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import ListDecks from './components/ListDecks'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewDeck from './components/NewDeck'
import { navy } from './utils/colors'
import DeckStructure from './components/DeckStructure'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import NewCard from './components/NewCard'
import QuizView from './components/QuizView'

function MyStatus ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ tintColor }) => {
              let iconName
              if (route.name === 'ListDecks') {
                iconName = "cards";
              } else if (route.name === 'NewDeck') {
                iconName = "file-plus";
              }
              return (
                <MaterialCommunityIcons name={iconName} size={24} color={tintColor} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ff6600',
            inactiveTintColor: 'black',
            tabBarVisible: false,
          }}>
          <Tab.Screen
            name="ListDecks"
            component={ListDecks}
            options={{ title: 'Decks' }}
          />
          <Tab.Screen
            name="NewDeck"
            component={NewDeck}
            options={{ title: 'Add Deck', backgroundColor: '#5900b3' }}
          />
      </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      headerMode="float"
      animation="fade"
      >
        <Stack.Screen name="Home" component={MyTabs}
          options={() => ({
          title: 'All Decks List',
          headerTitleAlign: 'center'
        })} />
        <Stack.Screen name="DeckStructure" component={DeckStructure}
        options={() => ({
          title: 'Deck Info',
          headerTitleAlign: 'center'
        })}/>
        <Stack.Screen name="NewCard" component={NewCard}
        options={() => ({
          title: 'Add New Card',
          headerTitleAlign: 'center'
        })}/>
        <Stack.Screen name="QuizView" component={QuizView}
        options={() => ({
          title: 'Give Quiz',
          headerTitleAlign: 'center'
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}  
class App extends Component {
  render() {
    return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <MyStatus backgroundColor={navy} barStyle='light-content'/>
        <MyStack />
      </View>
    </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#95d5db'
  }
})


export default App