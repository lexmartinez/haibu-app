export interface TransactionItemProps {
  name: string;
  amount: number;
  date: Date;
  type: 'EXPENSE' | 'INCOME';
  category: {
    name: string;
    icon: string;
  };
}
