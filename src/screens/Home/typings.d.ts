export interface HomeProps {
  navigation: NativeStackNavigationProp;
}

export interface AddModalProps {
  open: boolean;
  onClose: () => void;
}
