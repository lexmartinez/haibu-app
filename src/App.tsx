/**
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import dayjs from 'dayjs';
import i18n from '~/config/i18n';
import thm from '~/config/theme';
import {wpx, hpx} from '~/utils/responsive';
import {store} from '~/store';
import Message from '~/components/Message';
import axios from '~axios';

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

function App(): JSX.Element {
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
    <Provider store={store}>
      <ThemeProvider theme={thm}>
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} />
          <StyledView>
            <Message />
            <StyledText>
              {i18n.t('hello')} {withTime12HourFormat}{' '}
              {i18n.l('currency', 1990.99)}
              {i18n.numberToCurrency(1234567890.5)}
            </StyledText>
            <StyledImage source={require('~/assets/images/colmena.webp')} />
          </StyledView>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
