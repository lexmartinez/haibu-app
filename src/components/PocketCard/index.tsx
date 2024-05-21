import React from 'react';
import {useTheme} from 'styled-components';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from '~/config/i18n';
import {PocketCardProps} from './typings';
import {
  PocketCard,
  CardHeader,
  CardCategory,
  CardHeaderText,
  CardTitle,
  CardProgress,
  CardProgressContainer,
  CardPercentageView,
  CardPercentageText,
  CardAmount,
  CardAmountText,
  AddCardText,
} from './styles';
import { screen, getPocketColors } from '~/config/constants';
import { useNavigation } from '@react-navigation/native';

const _PocketCard = (props: PocketCardProps) => {
  const {pocket = {}, hasPockets} = props;
  const navigation = useNavigation()
  const {
    name = '',
    type = '',
    category = {} as any,
    goal = 0,
    current = 0,
    theme: color = '',
  } = {...pocket};
  const theme = useTheme();
  const colors = getPocketColors(theme);
  const progress = current > 0 ? Math.round((current * 100) / goal) : 0;
  const cardTheme = colors[color] || colors.TEAL;
  const isAddCard = type === 'add-pocket';

  const onPress = () => {
    navigation.navigate(screen._SAVINGS, { screen: isAddCard ? screen.NEW_POCKET : screen.POCKET_DETAIL, params: { pocket } });
  }

  return (
    <PocketCard
      activeOpacity={0.8}
      hasPockets={hasPockets}
      isAddCard={isAddCard}
      onPress={onPress}
      >
      <CardHeader isAddCard={isAddCard}>
        <CardCategory>
          <MIcon
            name={isAddCard ? 'piggy-bank' : category.icon}
            color={isAddCard ? theme.colors.saffron : theme.colors.gray}
            size={24}
          />
          <CardHeaderText numberOfLines={1}>
            {isAddCard ? i18n.t('pockets.title') : i18n.t(category.name)}
          </CardHeaderText>
        </CardCategory>

        {!isAddCard && (
          <CardPercentageView background={cardTheme.primary}>
            <CardPercentageText>{`${progress}%`}</CardPercentageText>
          </CardPercentageView>
        )}
      </CardHeader>
      <CardTitle isAddCard={isAddCard}>
        {isAddCard ? i18n.t('pockets.create') : name}
      </CardTitle>
      {!isAddCard && (
        <>
          <CardAmount>
            <CardAmountText>
              {i18n.numberToCurrency(current, {precision: 0, delimiter: '.'})}
            </CardAmountText>
            <CardAmountText>
              {i18n.numberToCurrency(goal, {precision: 0, delimiter: '.'})}
            </CardAmountText>
          </CardAmount>
          <CardProgressContainer background={cardTheme.secondary}>
            <CardProgress progress={progress} background={cardTheme.primary} />
          </CardProgressContainer>
        </>
      )}
      {isAddCard && <AddCardText>{i18n.t('pockets.subtitle')}</AddCardText>}
    </PocketCard>
  );
};

export default _PocketCard;
