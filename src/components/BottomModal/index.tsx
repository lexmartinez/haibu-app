import React from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components';
import {
  ModalCloseButton,
  ModalContainer,
  ModalOverlay,
  ModalTitle,
  Section,
} from './styles';
import { BottomModalProps } from './typings';
import { Icon } from '~/components/Icon';

export const BottomModal = (props: BottomModalProps) => {
  const theme = useTheme();
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.open}>
      <ModalOverlay activeOpacity={1} onPress={props.onClose}>
        <ModalContainer activeOpacity={1}>
          <Section>
            {props.title && <ModalTitle>{props.title}</ModalTitle>}
            {props.children}
          </Section>
          <ModalCloseButton onPress={props.onClose}>
            <Icon name={'close'} color={theme.colors.gray} />
          </ModalCloseButton>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};
