import React from 'react';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from '~/config/i18n';
import {TransactionItemProps} from './typings';
import {
  ItemData,
  ItemIconContainer,
  ItemInfo,
  ItemTitle,
  ItemValue,
  TransactionItem,
} from './styles';

const _TransactionItem = (props: TransactionItemProps) => {
  const theme = useTheme();
  const {amount, name, category, date, type} = props;
  return (
    <TransactionItem activeOpacity={0.8}>
      <ItemIconContainer>
        <Icon name={category?.icon} color={theme.colors.white} size={24} />
      </ItemIconContainer>
      <ItemData>
        <ItemTitle>{name}</ItemTitle>
        <ItemInfo numberOfLines={1}>{i18n.t(category?.name)}</ItemInfo>
      </ItemData>
      <ItemValue>
        <ItemTitle
          color={
            type === 'INCOME' ? theme.colors.mantis : theme.colors.salmon
          }>
          {i18n.numberToCurrency(amount * (type === 'EXPENSE' ? -1 : 1))}
        </ItemTitle>
        <ItemInfo numberOfLines={1}>
          {new Date(date).toLocaleDateString()}
        </ItemInfo>
      </ItemValue>
    </TransactionItem>
  );
};

export default _TransactionItem;
