/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
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
        </StyledView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
