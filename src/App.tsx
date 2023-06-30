/**
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled, {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import dayjs from 'dayjs';
import i18n from '~/config/i18n';
import thm from '~/config/theme';
import {wpx, hpx} from '~/utils/responsive';
import {store} from '~/store';
import Message from '~/components/Message';
import axios from '~axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AnimatedTabBarNavigator,
  DotSize,
} from 'react-native-animated-nav-tab-bar';

const Tab = AnimatedTabBarNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({navigation}: any): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const StyledView = styled.View`
  background-color: ${({theme}) => theme.colors.main};
  padding: ${hpx('10%')} ${wpx('10%')};
`;

const StyledText = styled.Text`
  color: #fff;
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('2%')};
  margin-bottom: ${hpx('5%')};
`;

const StyledImage = styled.Image`
  width: ${wpx('80%')};
`;

function MainScreen(): JSX.Element {
  const date = new Date(2022, 2, 19, 15, 57, 25);
  const withTime12HourFormat = dayjs(date).format('MM/DD/YYYY hh:mm A');
  useEffect(() => {
    axios
      .get('users')
      .then((data: any) => {
        console.log(data?.data);
      })
      .catch((e: any) => {
        console.error(e);
      });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <StyledView>
        <Message />
        <StyledText>
          {i18n.t('hello')} {withTime12HourFormat} {i18n.l('currency', 1990.99)}
          {i18n.numberToCurrency(1234567890.5)}
        </StyledText>
        <StyledImage source={require('~/assets/images/colmena.webp')} />
      </StyledView>
    </SafeAreaView>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeS" component={HomeScreen} />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{title: 'Overview'}}
      />
    </Stack.Navigator>
  );
}

const TabBarIcon = (props: any) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={thm}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#ffffff',
              inactiveTintColor: '#223322',
              activeBackgroundColor: 'red',
            }}
            appearance={{
              shadow: true,
              floating: true,
              dotSize: DotSize.SMALL,
            }}>
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarIcon: ({focused, color}) => (
                  <TabBarIcon focused={focused} tintColor={color} name="home" />
                ),
              }}
            />
            <Tab.Screen
              name="Dashboard"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({focused, color}) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name="pie-chart"
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({focused, color}) => (
                  <TabBarIcon focused={focused} tintColor={color} name="user" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
