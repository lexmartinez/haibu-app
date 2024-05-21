import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface CurrencyModalProps {
  open: boolean;
  currency: string;
  onClose: () => void;
  currencies: any;
  setCurrency: (value: string) => void;
}

export interface LocaleModalProps {
  open: boolean;
  onClose: () => void;
  locales: any;
  setLocale: (value: string) => void;
}

export interface ProfileProps {
  navigation: NativeStackNavigationProp;
}
