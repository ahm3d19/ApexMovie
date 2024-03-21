import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import MovieScreen from './src/screens/MovieScreen';
import ShowScreen from './src/screens/ShowScreen';
import SearchBarScreen from './src/screens/SearchBarScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchBarScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            title: '',
            headerTintColor: '#800634',
          }}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            title: '',
            headerTintColor: '#800634',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTransparent: true,
            title: '',
            headerTintColor: '#800634',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
