import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { USER_SELECTOR, SHOULD_REFRESH_SELECTOR } from '~/store/selectors/user';
import {
  TRANSACTIONS_SELECTOR,
  BALANCE_SELECTOR,
} from '~/store/selectors/transaction';
import { POCKETS_SELECTOR } from '~/store/selectors/pocket';
import i18n from '~/config/i18n';
import { storage } from '~/config/constants';
import BalanceCard from '~/components/BalanceCard';
import PocketCard from '~/components/PocketCard';
import TransactionItem from '~/components/TransactionItem';
import useTransactionService from '~/services/transaction';
import usePocketService from '~/services/pocket';
import useAuthService from '~/services/auth';
import { HomeProps } from './typings';
import {
  ScreenContainer,
  Title,
  Section,
  SectionTitle,
  PocketCarousel,
  SectionContainer,
  ScrollContainer,
  TransactionEmptyCard,
  TransactionEmptyCardTitle,
  TransactionEmptyCardText,
  Spacer,
} from './styles';
import { AddModal } from './modal';

export const Icon = ({ name, color }: { name: string; color?: string }) => {
  const theme = useTheme();
  return <MIcon name={name} size={24} color={color || theme.colors.gray} />;
};

const Home = (props: HomeProps) => {
  const { navigation } = props;
  const { navigate = () => {} } = { ...navigation };
  const theme = useTheme();
  const [_, setLocale] = useState<string>(i18n.locale);
  const [addModal, setAddModal] = useState<boolean>(false);
  const transactionService = useTransactionService();
  const pocketService = usePocketService();
  const authService = useAuthService();

  const shouldRefreshToken: boolean = useSelector(SHOULD_REFRESH_SELECTOR);
  const { fullName = '' }: any = useSelector(USER_SELECTOR);
  const transactions: any[] = useSelector(TRANSACTIONS_SELECTOR);
  const pockets: any[] = useSelector(POCKETS_SELECTOR);
  const balance: number = useSelector(BALANCE_SELECTOR);
  const hasPockets = pockets.length > 0;

  const { getItem: getLocaleStorage } = useAsyncStorage(storage.LOCALE);

  const readLocaleFromStorage = async () => {
    const item = await getLocaleStorage();
    setLocale(item || 'es');
  };

  const fetch = async () => {
    transactionService.getBalance();
    pocketService.fetchPockets();
    transactionService.fetchTransactions(0, 5);
  };

  useEffect(() => {
    readLocaleFromStorage();
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (shouldRefreshToken) {
        authService.refresh().then((success: boolean) => {
          if (success) {
            fetch();
          }
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldRefreshToken]),
  );

  return (
    <ScreenContainer>
      <SectionContainer>
        <Title>{i18n.t('home.hello', { name: `${fullName}` })}</Title>
        <BalanceCard amount={balance} onAdd={() => setAddModal(true)} />
      </SectionContainer>
      <AddModal open={addModal} onClose={() => setAddModal(false)} />
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
        <Section>
          <SectionContainer>
            <SectionTitle>{i18n.t('home.pockets')}</SectionTitle>
          </SectionContainer>
          <PocketCarousel
            horizontal={true}
            bounces={false}
            decelerationRate={0}
            renderToHardwareTextureAndroid
            contentContainerStyle={{ paddingRight: 25 }}
            snapToInterval={wp(hasPockets ? '80%' : '90%')}
            snapToAlignment="start"
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 100,
            }}
            keyExtractor={(item: any, index: number) =>
              `${item?.item?.id}_${index}`
            }
            data={[...pockets, { type: 'add-pocket', id: '-1' }]}
            renderItem={(pocket: any) => (
              <PocketCard pocket={pocket?.item} hasPockets={hasPockets} />
            )}
          />
        </Section>

        <SectionContainer>
          <Section>
            <SectionTitle>{i18n.t('home.recentTransactions')}</SectionTitle>
            {transactions.map((transaction, i) => {
              const { amount, id, description, date, category, type } =
                transaction;
              return (
                <TransactionItem
                  amount={amount}
                  key={`${id}_${i}`}
                  name={description}
                  date={date}
                  category={category}
                  type={type}
                />
              );
            })}
            {(transactions || []).length === 0 && (
              <TransactionEmptyCard activeOpacity={0.8}>
                <MIcon
                  name={'table-search'}
                  size={60}
                  color={theme.colors.saffron}
                />
                <TransactionEmptyCardTitle>
                  {i18n.t('transactions.emptyTitle')}
                </TransactionEmptyCardTitle>
                <TransactionEmptyCardText>
                  {i18n.t('transactions.emptyMessage')}
                </TransactionEmptyCardText>
              </TransactionEmptyCard>
            )}
            <Spacer />
          </Section>
        </SectionContainer>
      </ScrollContainer>
    </ScreenContainer>
  );
};

export default Home;
