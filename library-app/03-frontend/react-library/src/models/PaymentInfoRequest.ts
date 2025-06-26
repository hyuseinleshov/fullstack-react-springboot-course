class PaymentInfoRequest {
  public amount: number;
  public currency: string;
  public receiptEmail: string | undefined;

  constructor(
    amount: number,
    currency: string,
    receiptEmail: string | undefined
  ) {
    this.amount = amount;
    this.currency = currency;
    this.receiptEmail = receiptEmail;
  }
}

export default PaymentInfoRequest;