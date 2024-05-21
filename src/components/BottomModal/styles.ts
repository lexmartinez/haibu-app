import styled from 'styled-components/native';
import { wpx, hpx } from '~/utils/responsive';

export const ModalOverlay = styled.TouchableOpacity`
  height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({ theme }) => theme.colors.almostBlack}D9;
`;

export const ModalContainer = styled.TouchableOpacity`
  position: absolute;
  height: ${hpx('30%')};
  width: ${wpx('100%')};
  padding-horizontal: ${wpx('4.5%')};
  padding-top: ${hpx('3.5%')};
  background-color: ${({ theme }) => theme.colors.darkEmperor};
  bottom: 0;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  position: absolute;
  right: ${wpx('5%')};
  top: ${hpx('3.25%')};
`;

export const Section = styled.View`
  width: ${wpx('100%')};
  margin-bottom: ${hpx('4%')};
`;

export const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.8%')};
  margin-bottom: ${hpx('2%')};
  margin-bottom: ${hpx('3%')};
`;
