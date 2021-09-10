import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {
  Home, 
  Restaurant, 
  OrderDelivery,
  Carts,
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp
} from './screens';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './store';
import Tab from './navigation/tabs'

const Stack = createNativeStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default function App() {

  React.useEffect(() => {
      SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false 
          }}
          initialRouteName={"OnBoarding"}
        >
          <Stack.Screen name="Home" component={Tab} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Orderdelivery" component={OrderDelivery} />
          <Stack.Screen name="Carts" component={Carts} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
