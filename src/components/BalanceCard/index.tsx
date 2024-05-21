import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import i18n from '~/config/i18n';
import {
  BalanceAddButton,
  BalanceCard,
  BalanceCardAmount,
  BalanceCardEyeButton,
  BalanceCardDetails,
  BalanceCardSubtitle,
  BalanceCardTitle,
  Icon,
} from './styles';
import { BalanceCardProps } from './typings';

const _BalanceCard = (props: BalanceCardProps) => {
  const theme = useTheme();
  const [showTotal, setShowTotal] = useState<boolean>(true);
  return (
    <BalanceCard>
      <BalanceCardTitle>{i18n.t('home.totalBalance')}</BalanceCardTitle>
      <BalanceCardAmount>
        {showTotal
          ? i18n.numberToCurrency(props.amount, {
              precision: 0,
              delimiter: '.',
            })
          : '*********'}
      </BalanceCardAmount>
      <BalanceCardDetails activeOpacity={0.8}>
        <BalanceCardSubtitle>{i18n.t('home.seeDetail')}</BalanceCardSubtitle>
        <Icon name={'chevron-right'} color={theme.colors.darkSand} />
      </BalanceCardDetails>
      <BalanceCardEyeButton
        activeOpacity={0.8}
        onPress={() => setShowTotal(!showTotal)}>
        <Icon
          name={showTotal ? 'eye-outline' : 'eye-off-outline'}
          color={theme.colors.saffron}
        />
      </BalanceCardEyeButton>
      <BalanceAddButton activeOpacity={0.8} onPress={props.onAdd}>
        <Icon name={'plus'} color={theme.colors.emperor} />
      </BalanceAddButton>
    </BalanceCard>
  );
};

export default _BalanceCard;
