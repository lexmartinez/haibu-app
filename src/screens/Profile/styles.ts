import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';

export const ScreenContainer = styled.SafeAreaView`
  min-height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({theme}) => theme.colors.codGray};
`;

export const ScrollContainer = styled.ScrollView`
  padding-horizontal: ${wpx('8%')};
  padding-top: ${hpx('5%')};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.wildSand};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('3%')};
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('2%')};
  margin-bottom: ${hpx('5%')};
`;

export const Section = styled.View`
  width: ${wpx('100%')};
  margin-bottom: ${hpx('4%')};
`;

export const SectionTitle = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('2%')};
  margin-bottom: ${hpx('2%')};
  text-transform: uppercase;
`;

export const SectionItem = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  width: ${wpx('84%')};
  border-bottom-color: ${({theme}) => theme.colors.mineShaft};
  padding-vertical: ${hpx('1.5%')};
  align-items: center;
`;

export const ItemText = styled.Text`
  margin-left: ${wpx('3%')};
  color: ${({theme}) => theme.colors.wildSand};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('2%')};
  flex-grow: 1;
`;

export const ModalOverlay = styled.View`
  height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({theme}) => theme.colors.almostBlack}D9;
`;

export const ModalContainer = styled.View`
  position: absolute;
  height: ${hpx('27%')};
  width: ${wpx('100%')};
  padding-horizontal: ${wpx('8%')};
  padding-top: ${hpx('4%')};
  background-color: ${({theme}) => theme.colors.codGray};
  bottom: 0;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  position: absolute;
  right: ${wpx('8%')};
  top: ${hpx('4%')};
`;

export const CurrencyModalContainer = styled.View`
  position: absolute;
  height: ${hpx('45%')};
  width: ${wpx('100%')};
  padding-horizontal: ${wpx('8%')};
  background-color: ${({theme}) => theme.colors.codGray};
  bottom: 0;
  padding-top: ${hpx('4%')};
  padding-bottom: ${hpx('6%')};
`;

export const ModalScrollContainer = styled.ScrollView`
  padding-horizontal: ${wpx('1%')};
`;
