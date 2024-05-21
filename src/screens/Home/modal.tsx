import React from 'react';
import i18n from '~/config/i18n';
import { screen } from '~/config/constants';
import { Icon } from '~/components/Icon';
import { BottomModal } from '~/components/BottomModal';
import { AddModalProps } from './typings';
import { useNavigation } from '@react-navigation/native';
import { AddModalContent, AddModalItem, AddModalItemText } from './styles';
import { useTheme } from 'styled-components';

export const AddModal = (props: AddModalProps) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <BottomModal
      open={props.open}
      onClose={props.onClose}
      title={i18n.t('add.new')}>
      <AddModalContent>
        <AddModalItem
          onPress={() =>
            navigation.navigate({ name: screen.NEW_TRANSACTION } as never)
          }>
          <Icon name={'bank-outline'} size={40} color={theme.colors.saffron} />
          <AddModalItemText>{i18n.t('add.transaction')}</AddModalItemText>
        </AddModalItem>
        <AddModalItem
          onPress={() =>
            navigation.navigate({ name: screen.NEW_POCKET } as never)
          }>
          <Icon
            name={'piggy-bank-outline'}
            size={40}
            color={theme.colors.saffron}
          />
          <AddModalItemText>{i18n.t('add.pocket')}</AddModalItemText>
        </AddModalItem>
      </AddModalContent>
    </BottomModal>
  );
};
