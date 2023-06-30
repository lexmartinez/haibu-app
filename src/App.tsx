/* eslint-disable react/no-unstable-nested-components */
/**
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const StyledView = styled.View`
  background-color: ${({theme}) => theme.colors.mirage};
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
    <SafeAreaView style={{backgroundColor: thm.colors.codGray}}>
      <StatusBar barStyle={'light-content'} />
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
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
              activeTintColor: thm.colors.kelp,
              inactiveTintColor: thm.colors.gray,
              activeBackgroundColor: thm.colors.lemonChrome,
              labelStyle: {
                fontFamily: thm.fonts.SEMIBOLD,
              },
            }}
            appearance={{
              shadow: true,
              floating: true,
              dotSize: DotSize.MEDIUM,
              tabBarBackground: thm.colors.emperor,
            }}>
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name="home-variant-outline"
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Ahorro"
              component={HomeStack}
              options={{
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name="piggy-bank-outline"
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Balance"
              component={HomeStack}
              options={{
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name="chart-pie"
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Perfil"
              component={HomeStack}
              options={{
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name="account-outline"
                  />
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
