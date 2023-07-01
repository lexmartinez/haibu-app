import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as RNLocalize from 'react-native-localize';
import i18n from '~/config/i18n';
import {
  ScreenContainer,
  Title,
  Subtitle,
  ScrollContainer,
  Section,
  SectionTitle,
  SectionItem,
  ItemText,
} from './styles';
import {useTheme} from 'styled-components';

const Icon = ({name, color}: {name: string; color?: string}) => {
  const theme = useTheme();
  return <MIcon name={name} size={24} color={color || theme.colors.gray} />;
};

const Profile = (props: any) => {
  const user = {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael J',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  };

  const theme = useTheme();

  return (
    <ScreenContainer>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <Title>
          {user?.first_name} {user?.last_name}
        </Title>
        <Subtitle>{user?.email}</Subtitle>

        <Section>
          <SectionTitle>{'Cuenta de Usuario'}</SectionTitle>
          <SectionItem>
            <Icon name={'currency-usd'} />
            <ItemText>{'Peso Colombiano (COP)'}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          <SectionItem>
            <Icon name={'translate'} />
            <ItemText>{'Español'}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          {/*<SectionItem>
            <Icon name={'bell-outline'} />
            <ItemText>{'Notificaciones'}</ItemText>
  </SectionItem>*/}
        </Section>
        <Section>
          <SectionItem>
            <Icon name={'lock-open-outline'} />
            <ItemText>{'Cambiar Password'}</ItemText>
          </SectionItem>
        </Section>

        <Section>
          <SectionTitle>{'Sobre Haibu'}</SectionTitle>
          <SectionItem>
            <Icon name={'help-circle-outline'} />
            <ItemText>{'Ayuda'}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          <SectionItem>
            <Icon name={'file-certificate-outline'} />
            <ItemText>{'Documentación Legal'}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          <SectionItem>
            <Icon name={'comment-outline'} />
            <ItemText>{'Envíanos tus comentarios'}</ItemText>
          </SectionItem>
        </Section>

        <Section>
          <SectionItem>
            <Icon name={'logout-variant'} />
            <ItemText>{'Cerrar Sesión'}</ItemText>
          </SectionItem>
        </Section>
      </ScrollContainer>
    </ScreenContainer>
  );
};
export default Profile;
