class Account {
    protected accno: number;
    protected transactionCount: number;
  
    constructor(accno: number) {
      this.accno = accno;
      this.transactionCount = 0;
    }
  
    process(trans: Transaction): boolean {
      this.transactionCount++;
      return trans.value() !== 0;
    }
  }
  
  class Transaction {
    private amount: number;
  
    constructor(amount: number) {
      this.amount = amount;
    }
  
    value(): number {
      return this.amount;
    }
  }
  
  class FilteredAccount extends Account {
    private filteredCount: number;
  
    constructor(accno: number) {
      super(accno);
      this.filteredCount = 0;
    }
  
    process(trans: Transaction): boolean {
      if (trans.value() === 0) {
        this.filteredCount++;
        return true;
      } else {
        return super.process(trans);
      }
    }
  
    filtered(): number {
      return this.filteredCount;
    }
  }
  
  // Usage example
  
  const account = new Account(123456);
  const transaction1 = new Transaction(100);
  const transaction2 = new Transaction(0);
  const transaction3 = new Transaction(200);
  
  console.log(account.process(transaction1)); 
  console.log(account.process(transaction2)); 
  console.log(account.process(transaction3));
  
  console.log(account['transactionCount']);
  
  const filteredAccount = new FilteredAccount(987654);
  const filteredTransaction1 = new Transaction(150);
  const filteredTransaction2 = new Transaction(0);
  const filteredTransaction3 = new Transaction(-50);
  
  console.log(filteredAccount.process(filteredTransaction1)); 
  console.log(filteredAccount.process(filteredTransaction2));
  console.log(filteredAccount.process(filteredTransaction3));
  
  console.log(filteredAccount['transactionCount']);
  console.log(filteredAccount.filtered()); 
  