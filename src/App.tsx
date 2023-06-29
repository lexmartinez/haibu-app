/**
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import dayjs from 'dayjs';
import i18n from '~/config/i18n';
import thm from '~/config/theme';

const StyledView = styled.View`
  background-color: ${({theme}) => theme.colors.main};
  padding: 10px 10px;
`;

const StyledText = styled.Text`
  color: #fff;
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: 18px;
`;

function App(): JSX.Element {
  const date = new Date(2022, 2, 19, 15, 57, 25);
  const withTime12HourFormat = dayjs(date).format('MM/DD/YYYY hh:mm A'); // 03/19/2022 03:57:25 PM"
  return (
    <ThemeProvider theme={thm}>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <StyledView>
          <StyledText>
            {i18n.t('hello')} {withTime12HourFormat}{' '}
            {i18n.l('currency', 1990.99)}
          </StyledText>
          <Image source={require('~/assets/images/colmena.webp')} />
        </StyledView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
