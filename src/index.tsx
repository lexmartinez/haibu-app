/* eslint-disable react/no-unstable-nested-components */
/**
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AnimatedTabBarNavigator,
  DotSize,
} from 'react-native-animated-nav-tab-bar';
import i18n from '~/config/i18n';
import thm from '~/config/theme';
import Screens from '~/config/screens';
import {wpx, hpx} from '~/utils/responsive';
import {store} from '~/store';

import ProfileScreen from '~screens/Profile';

const Tab = AnimatedTabBarNavigator();
const Stack = createNativeStackNavigator();

const StyledView = styled.SafeAreaView`
  padding: ${hpx('10%')} ${wpx('10%')};
  height: ${hpx('100%')};
  background-color: ${({theme}) => theme.colors.codGray};
`;

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.HOME} component={StyledView} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.PROFILE} component={ProfileScreen} />
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

function Haibu() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={thm}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: thm.colors.wildSand,
              inactiveTintColor: thm.colors.gray,
              activeBackgroundColor: thm.colors.pomegranate,
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
              name={Screens._HOME}
              component={HomeStack}
              options={{
                tabBarLabel: i18n.t('global.nav.home'),
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name={'home-variant-outline'}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={Screens._SAVINGS}
              component={HomeStack}
              options={{
                tabBarLabel: i18n.t('global.nav.savings'),
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name={'piggy-bank-outline'}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={Screens._BALANCE}
              component={HomeStack}
              options={{
                tabBarLabel: i18n.t('global.nav.balance'),
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name={'chart-line'}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={Screens._PROFILE}
              component={ProfileStack}
              options={{
                tabBarLabel: i18n.t('global.nav.profile'),
                tabBarIcon: ({focused, color}: any) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name={'account-outline'}
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

export default Haibu;
