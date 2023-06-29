/**
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import thm from '~/config/theme';

const StyledView = styled.View`
  background-color: ${({theme}: any) => theme.main};
  padding: 10px 10px;
`;

const StyledText = styled.Text`
  color: #fff;
`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={thm}>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <StyledView>
          <StyledText>Hello World!</StyledText>
          <Image source={require('~/assets/images/colmena.webp')} />
        </StyledView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
