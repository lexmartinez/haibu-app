import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import i18n from '~/config/i18n';
import {
  BalanceAddButton,
  BalanceCard,
  BalanceCardAmount,
  BalanceCardPercentage,
  BalanceCardTitle,
  BalanceCardSubtitle,
  BalanceCardPercentageText,
  Icon,
} from './styles';
import {SavingsCardProps} from './typings';

const _SavingsCard = (props: SavingsCardProps) => {
  const theme = useTheme();
  const progress =
    props.amount > 0 ? Math.round((props.amount * 100) / props.total) : 0;
  return (
    <BalanceCard color={props?.theme?.primary}>
      <BalanceCardTitle>{i18n.t('savings.totalBalance')}</BalanceCardTitle>
      <BalanceCardAmount>
        {i18n.numberToCurrency(props.amount, {precision: 0, delimiter: '.'})}
      </BalanceCardAmount>
      <BalanceCardSubtitle>
        {i18n.t('savings.goal')}
        {i18n.numberToCurrency(props.total, {precision: 0, delimiter: '.'})}
      </BalanceCardSubtitle>
      <BalanceCardPercentage>
        <BalanceCardPercentageText color={props?.theme?.secondary}>{`${i18n.t('savings.progress')} ${Math.round(
          progress,
        )}%`}</BalanceCardPercentageText>
      </BalanceCardPercentage>
      <BalanceAddButton activeOpacity={0.8} color={props?.theme?.secondary}>
        <Icon name={'plus'} color={theme.colors.emperor} />
      </BalanceAddButton>
    </BalanceCard>
  );
};

export default _SavingsCard;
