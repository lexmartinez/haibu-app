import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';

export const ScreenContainer = styled.SafeAreaView`
  min-height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({theme}) => theme.colors.darkEmperor};
`;

export const ScrollContainer = styled.ScrollView`
  padding-horizontal: ${wpx('4.5%')};
  padding-top: ${hpx('5%')};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('3%')};
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.saffron};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('2%')};
  margin-bottom: ${hpx('5%')};
  opacity: 0.9;
`;

export const Section = styled.View`
  width: ${wpx('100%')};
  margin-bottom: ${hpx('4%')};
`;

export const SectionTitle = styled.Text`
  color: ${({theme}) => theme.colors.whiteSand};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.8%')};
  margin-bottom: ${hpx('2%')};
`;

export const SectionItem = styled.TouchableOpacity`
  flex-direction: row;
  width: ${wpx('90%')};
  background-color: ${({theme}) => theme.colors.emperor};
  margin-bottom: ${hpx('0.7%')};
  padding-horizontal: ${wpx('4%')};
  padding-vertical: ${hpx('1.5%')};
  overflow: hidden;
  border-radius: ${hpx('1.5%')};
  align-items: center;
`;

export const ItemText = styled.Text`
  margin-left: ${wpx('3%')};
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.6%')};
  flex-grow: 1;
`;

export const CurrencyModalContainer = styled.View`
  position: absolute;
  height: ${hpx('38%')};
  width: ${wpx('100%')};
  padding-horizontal: ${wpx('4.5%')};
  background-color: ${({theme}) => theme.colors.darkEmperor};
  bottom: 0;
  padding-top: ${hpx('4%')};
  padding-bottom: ${hpx('6%')};
`;

export const ModalScrollContainer = styled.ScrollView`
  padding-horizontal: ${wpx('1%')};
`;

export const Spacer = styled.View`
  height: ${hpx('14%')};
`;
