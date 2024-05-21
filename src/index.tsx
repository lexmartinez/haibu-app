/* eslint-disable react/no-unstable-nested-components */
/**
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, {ThemeProvider} from 'styled-components/native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {
  AnimatedTabBarNavigator,
  DotSize,
} from 'react-native-animated-nav-tab-bar';
import i18n from '~/config/i18n';
import thm from '~/config/theme';
import {TOKEN_SELECTOR} from '~/store/selectors/user';
import {screen, storage} from '~/config/constants';
import {wpx, hpx} from '~/utils/responsive';
import {store} from '~/store';
import {setUserAuthData as setAuthAction} from '~/store/user';

import ProfileScreen from '~screens/Profile';
import LoginScreen from '~screens/Login';
import SignupScreen from '~screens/Signup';
import HomeScreen from '~screens/Home';
import PocketsScreen from '~screens/Pockets';
import PocketDetailScreen from '~screens/PocketDetail'

const Tab = AnimatedTabBarNavigator();
const Stack = createNativeStackNavigator();

(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.allowFontScaling = false;

const StyledView = styled.SafeAreaView`
  padding: ${hpx('10%')} ${wpx('10%')};
  height: ${hpx('100%')};
  background-color: ${({theme}) => theme.colors.white};
`;

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

function SavingsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.SAVINGS} component={PocketsScreen} />
      <Stack.Screen name={screen.POCKET_DETAIL} component={PocketDetailScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={screen.CHANGE_PASSWORD} component={StyledView} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={screen.SIGNUP}
        component={SignupScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}

interface TabBarIconOptions {
  focused: boolean;
  color: string;
}

const TabBarIcon = (props: {
  tintColor: string;
  name: string;
  size?: number;
  focused: boolean;
}) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 28}
      color={props.tintColor}
    />
  );
};

const MainNavigator = ({user}: any) => {
  const authToken = useSelector(TOKEN_SELECTOR);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!user && !authToken) {
      try {
        dispatch(setAuthAction(JSON.parse(user)));
      } catch (e) {
        console.log(e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!authToken) {
    return <LoginStack />;
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: thm.colors.emperor,
        inactiveTintColor: thm.colors.gray,
        activeBackgroundColor: thm.colors.saffron,
        labelStyle: {
          fontFamily: thm.fonts.SEMIBOLD,
        },
      }}
      appearance={{
        shadow: true,
        floating: true,
        dotSize: DotSize.LARGE,
        tabBarBackground: thm.colors.emperor,
      }}>
      <Tab.Screen
        name={screen._HOME}
        component={HomeStack}
        options={{
          tabBarLabel: i18n.t('global.nav.home'),
          tabBarIcon: ({focused, color}: TabBarIconOptions) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name={`home-variant${!focused ? '-outline' : ''}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screen._SAVINGS}
        component={SavingsStack}
        options={{
          tabBarLabel: i18n.t('global.nav.savings'),
          tabBarIcon: ({focused, color}: TabBarIconOptions) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name={`piggy-bank${!focused ? '-outline' : ''}`}
            />
          ),
        }}
      />
      {/*<Tab.Screen
        name={screen._BUDGET}
        component={HomeStack}
        options={{
          tabBarLabel: i18n.t('global.nav.budget'),
          tabBarIcon: ({focused, color}: TabBarIconOptions) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name={`wallet${!focused ? '-outline' : ''}`}
            />
          ),
        }}
      />*/}
      <Tab.Screen
        name={screen._PROFILE}
        component={ProfileStack}
        options={{
          tabBarLabel: i18n.t('global.nav.profile'),
          tabBarIcon: ({focused, color}: TabBarIconOptions) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name={`account${!focused ? '-outline' : ''}`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function Haibu() {
  const [_, setLocale] = useState<string>(i18n.locale);
  const [userData, setUserData] = useState<string>();
  const {getItem: getLocale} = useAsyncStorage(storage.LOCALE);
  const {getItem: getUserData} = useAsyncStorage(storage.USER);

  const readDataFromStorage = async () => {
    const item = await getLocale();
    setLocale(item || 'es');
    const user = await getUserData();
    if (user) {
      setUserData(user);
    }
  };

  useEffect(() => {
    readDataFromStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={thm}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <MainNavigator user={userData} />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default Haibu;
