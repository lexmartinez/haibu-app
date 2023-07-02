import React from 'react';
import {Modal} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import i18n from '~/config/i18n';
import {
  Section,
  SectionTitle,
  SectionItem,
  ItemText,
  ModalOverlay,
  ModalContainer,
  CurrencyModalContainer,
  ModalCloseButton,
  ModalScrollContainer,
} from './styles';

export const Icon = ({name, color}: {name: string; color?: string}) => {
  const theme = useTheme();
  return <MIcon name={name} size={24} color={color || theme.colors.gray} />;
};

export const LocaleModal = (props: any) => {
  const theme = useTheme();
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.open}>
      <ModalOverlay>
        <ModalContainer>
          <Section>
            <SectionTitle>{i18n.t('profile.language')}</SectionTitle>
            {Object.keys(props.locales).map((loc) => (
              <SectionItem
                onPress={() => props.setLocale(loc)}
                key={loc}
                disabled={i18n.locale === loc}>
                <Icon name={'translate'} />
                <ItemText>{props.locales[loc]}</ItemText>
                {i18n.locale === loc && (
                  <Icon name={'check'} color={theme.colors.pomegranate} />
                )}
              </SectionItem>
            ))}
          </Section>
          <ModalCloseButton onPress={props.onClose}>
            <Icon name={'close'} color={theme.colors.gray} />
          </ModalCloseButton>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};

export const CurrencyModal = (props: any) => {
  const theme = useTheme();
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.open}>
      <ModalOverlay>
        <CurrencyModalContainer>
          <Section>
            <SectionTitle>{i18n.t('profile.currency')}</SectionTitle>
            <ModalScrollContainer>
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
                    <Icon name={'check'} color={theme.colors.pomegranate} />
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
