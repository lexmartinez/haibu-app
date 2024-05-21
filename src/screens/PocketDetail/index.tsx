import React, {useEffect, useState} from 'react';
import {RefreshControl, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import {useSelector} from 'react-redux';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {POCKETS_SELECTOR} from '~/store/selectors/pocket';
import i18n from '~/config/i18n';
import {storage} from '~/config/constants';
import SavingsCard from '~/components/SavingsCard';
import PocketCard from '~/components/PocketCard';
import usePocketService from '~/services/pocket';
import {PocketDetailProps} from './typings';
import {
  ScreenContainer,
  BalanceContainer,
  SectionContainer,
  ScrollContainer,
  Spacer,
  TitleBar,
  PageTitle,
  CardContainer,
  EmptyStateView,
  SectionTitle,
  SectionText,
  Button,
  ButtonText,
  BackButton,
} from './styles';
import { screen, getPocketColors } from '~/config/constants';

export const Icon = ({name, color}: {name: string; color?: string}) => {
  const theme = useTheme();
  return <MIcon name={name} size={28} color={color || theme.colors.gray} />;
};

const PocketDetail = (props: PocketDetailProps) => {
  const theme = useTheme();
  const [_, setLocale] = useState<string>(i18n.locale);
  const pocketService = usePocketService();
  const pockets: any[] = useSelector(POCKETS_SELECTOR);
  const balance = pockets
    .map(({current}) => current)
    .reduce((a, b) => a + b, 0);
  const total = pockets.map(({goal}) => goal).reduce((a, b) => a + b, 0);
  const hasPockets = pockets.length > 0;
  const {getItem: getLocaleStorage} = useAsyncStorage(storage.LOCALE);
  const { route = {}, navigation } = props;
  const { params = {} } = { ...route };
  const { pocket = {} as any } = { ...params };

  const colors = getPocketColors(theme);
  const cardTheme = colors[pocket?.theme] || colors.TEAL;

  const readLocaleFromStorage = async () => {
    const item = await getLocaleStorage();
    setLocale(item || 'es');
  };

  const fetch = async () => {
    pocketService.fetchPockets();
  };

  useEffect(() => {
    readLocaleFromStorage();
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(pocket)

  return (
    <ScreenContainer>
      <TitleBar>
        <BackButton onPress={()=>navigation.pop()}>
          <MIcon name={'chevron-left'} color={theme.colors.saffron} size={40} />
        </BackButton>
        <PageTitle>{pocket?.name}</PageTitle>
        {hasPockets && (
          <BalanceContainer>
            <SavingsCard amount={balance} total={total} theme={cardTheme} />
          </BalanceContainer>
        )}
      </TitleBar>
      {hasPockets ? (
        <ScrollContainer
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={false}
              colors={[theme.colors.saffron]}
              tintColor={theme.colors.saffron}
              onRefresh={fetch}
            />
          }>
          <SectionContainer>
            {[...pockets].map((pocket: any) => (
              <CardContainer key={pocket.id}>
                <PocketCard
                  pocket={pocket}
                  hasPockets={false}
                  removeMargin={true}
                />
              </CardContainer>
            ))}
          </SectionContainer>
          <Spacer />
        </ScrollContainer>
      ) : (
        <EmptyStateView>
          <MIcon name={'safe'} color={theme.colors.saffron} size={140} />
          <SectionTitle>{i18n.t('savings.emptyTitle')}</SectionTitle>
          <SectionText>{i18n.t('savings.emptyMsg')}</SectionText>
          <Button onPress={() => {}} activeOpacity={0.8}>
            <ButtonText>{i18n.t('savings.emptyCta')}</ButtonText>
          </Button>
        </EmptyStateView>
      )}
    </ScreenContainer>
  );
};

export default PocketDetail;
