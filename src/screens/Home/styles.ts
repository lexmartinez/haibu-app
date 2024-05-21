import styled from 'styled-components/native';
import { wpx, hpx } from '~/utils/responsive';

export const ScreenContainer = styled.View`
  min-height: ${hpx('100%')};
  height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({ theme }) => theme.colors.darkEmperor};
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView``;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: ${hpx('3%')};
  margin-top: ${hpx('10%')};
`;

export const Section = styled.View`
  width: ${wpx('100%')};
`;

export const SectionContainer = styled.View`
  margin-horizontal: ${wpx('4.5%')};
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.whiteSand};
  font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.8%')};
  margin-bottom: ${hpx('2%')};
`;

export const PocketCarousel = styled.FlatList`
  padding-horizontal: ${wpx('4%')};
  margin-bottom: ${hpx('2%')};
  marin-right: ${wpx('8%')};
  padding-right: ${wpx('10%')};
`;

export const Spacer = styled.View`
  height: ${hpx('16%')};
`;

export const TransactionEmptyCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.emperor};
  border-radius: ${hpx('1.5%')};
  margin-horizontal: ${wpx('1%')};
  height: ${hpx('25%')};
  width: ${wpx('90%')};
  flex-direction: column;
  justify-content: flex-start;
  padding-vertical: ${hpx('2%')};
  padding-horizontal: ${wpx('4%')};
  align-items: center;
  justify-content: center;
`;

export const TransactionEmptyCardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${hpx('1.8%')};
  font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
  margin-top: ${hpx('1.2%')};
  text-align: center;
`;

export const TransactionEmptyCardText = styled.Text`
  color: ${({ theme }) => theme.colors.whiteSand};
  opacity: 0.6;
  font-size: ${hpx('1.6%')};
  margin-top: ${hpx('0.7%')};
  text-align: center;
`;

export const AddModalItem = styled.TouchableOpacity`
  flex-direction: column;
  width: ${wpx('44%')};
  background-color: ${({ theme }) => theme.colors.emperor};
  margin-bottom: ${hpx('0.7%')};
  padding-horizontal: ${wpx('4%')};
  padding-vertical: ${hpx('1.5%')};
  overflow: hidden;
  border-radius: ${hpx('1.5%')};
  height: ${hpx('15%')};
  justify-content: flex-end;
`;

export const AddModalContent = styled.View`
  flex-direction: row;
  gap: ${wpx('2%')};
`;

export const AddModalItemText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: ${hpx('1.5%')};
  padding-vertical: ${hpx('0.5%')};
`;
