import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';

export const ScreenContainer = styled.View`
  min-height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({theme}) => theme.colors.darkEmperor};
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HeadContainer = styled.View`
  padding-bottom: ${hpx('6%')};
  padding-top: ${hpx('3%')};
  padding-horizontal: ${wpx('10%')};
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const FormContainer = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.darkEmperor};
  padding-horizontal: ${wpx('8%')};
  width: ${wpx('100%')};
  flex: 1;
  padding-top: ${hpx('5%')};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('3%')};
  line-height: ${hpx('3%')};
  margin-bottom: ${hpx('0.5%')};
  margin-top: ${hpx('1.5%')};
  text-align: center;
`;

export const FormTitle = styled.Text`
  color: ${({theme}) => theme.colors.whiteSand};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('2.7%')};
  text-align: center;
  margin-bottom: ${hpx('4%')};
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.whiteSand};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('1.75%')};
  text-align: center;
  opacity: 0.6;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.saffron};
  padding-vertical: ${hpx('2%')};
  padding-horizontal: ${wpx('3%')};
  border-radius: ${wpx('2%')};
  min-width: ${wpx('35%')};
  align-items: center;
  justify-content: center;
  margin-top: ${hpx('2.5%')};
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.emperor};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.85%')};
  text-align: center;
`;

export const InputContainer = styled.View`
  border-radius: ${wpx('2%')};
  background-color: ${({theme}) => theme.colors.emperor};
  width: ${wpx('84%')};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${hpx('2%')};
`;

export const InputButtonContainer = styled.TouchableOpacity`
  border-radius: ${wpx('2%')};
  background-color: ${({theme}) => theme.colors.emperor};
  width: ${wpx('84%')};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${hpx('2%')};
`;

export const IconContainer = styled.View`
  border-top-left-radius: ${wpx('2%')};
  border-bottom-left-radius: ${wpx('2%')};
  background-color: ${({theme}) => theme.colors.midEmperor};
  margin-right: ${wpx('3.5%')};
  padding-vertical: ${hpx('1.5%')};
  padding-horizontal: ${wpx('2.5%')};
`;

export const InputText = styled.TextInput`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.MEDIUM};
  font-size: ${hpx('1.5%')};
  width: ${wpx('58%')};
`;

export const CurrencyText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.MEDIUM};
  font-size: ${hpx('1.5%')};
  width: ${wpx('58%')};
`;

export const ErrorText = styled.Text`
  color: ${({theme}) => theme.colors.salmon};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('1.75%')};
  text-align: center;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: ${hpx('2%')};
  position: absolute;
  right: ${wpx('2%')};
  top: ${hpx('2%')};
  z-index: 99999;
`;

export const Spacer = styled.View`
  height: ${hpx('50%')};
`;
