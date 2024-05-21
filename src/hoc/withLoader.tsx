import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';
import theme from '~/config/theme';
import {LOADING_SELECTOR} from '~/store/selectors/ui';

const MainView = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  height: ${hpx('100%')};
  width: ${wpx('100%')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  background-color: ${theme.colors.emperor80};
  z-index: 99999;
`;

export const LoaderComponent = () => (
  <Loader>
    <ActivityIndicator size={'large'} color={theme.colors.saffron} />
  </Loader>
);

export default (InnerComponent: any) => (props: any) => {
  const loading: boolean = useSelector(LOADING_SELECTOR);

  return (
    <MainView>
      <InnerComponent {...props} />
      {loading && <LoaderComponent />}
    </MainView>
  );
};
