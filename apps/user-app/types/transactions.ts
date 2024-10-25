export interface Transaction {
  time: Date;
  amount: number;
  type: 'SENT' | 'RECEIVED';
  otherParty: {
    name: string;
    avatar: string;
  };
}
