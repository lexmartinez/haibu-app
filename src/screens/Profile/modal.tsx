import React from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components';
import i18n from '~/config/i18n';
import {
  Section,
  SectionTitle,
  SectionItem,
  ItemText,
  CurrencyModalContainer,
  ModalScrollContainer,
} from './styles';

import { CurrencyModalProps, LocaleModalProps } from './typings';

import { Icon } from '~/components/Icon';
import { BottomModal } from '~/components/BottomModal';
import {
  ModalCloseButton,
  ModalOverlay,
} from '~/components/BottomModal/styles';

export const LocaleModal = (props: LocaleModalProps) => {
  const theme = useTheme();
  return (
    <BottomModal
      open={props.open}
      onClose={props.onClose}
      title={i18n.t('profile.language')}>
      {Object.keys(props.locales).map((loc) => (
        <SectionItem
          onPress={() => props.setLocale(loc)}
          key={loc}
          disabled={i18n.locale === loc}>
          <Icon name={'translate'} />
          <ItemText>{props.locales[loc]}</ItemText>
          {i18n.locale === loc && (
            <Icon name={'check'} color={theme.colors.saffron} />
          )}
        </SectionItem>
      ))}
    </BottomModal>
  );
};

export const CurrencyModal = (props: CurrencyModalProps) => {
  const theme = useTheme();
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.open}>
      <ModalOverlay>
        <CurrencyModalContainer>
          <Section>
            <SectionTitle>{i18n.t('profile.currency')}</SectionTitle>
            <ModalScrollContainer
              bounces={false}
              showsVerticalScrollIndicator={false}>
              {Object.keys(props.currencies).map((cur) => (
                <SectionItem
                  onPress={() => props.setCurrency(cur)}
                  key={cur}
                  disabled={cur === props.currency}>
                  <Icon name={'cash'} />
                  <ItemText>
                    {i18n.t(`currency.${cur}`)} ({props.currencies[cur].code})
                  </ItemText>
                  {cur === props.currency && (
                    <Icon name={'check'} color={theme.colors.saffron} />
                  )}
                </SectionItem>
              ))}
            </ModalScrollContainer>
          </Section>

          <ModalCloseButton onPress={props.onClose}>
            <Icon name={'close'} color={theme.colors.gray} />
          </ModalCloseButton>
        </CurrencyModalContainer>
      </ModalOverlay>
    </Modal>
  );
};
