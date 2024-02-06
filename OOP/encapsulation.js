console.log('Hello OOP');

// Encapsulation
// Classes
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("You don't have the funds for that.");
    }
  }

  getAccountInfo() {
    return `Account Number: ${this.accountNumber}. Balance: $${this.balance}.`;
  }
};

const myAccount = new BankAccount('8409555', 4000);
console.log(myAccount.getAccountInfo());

myAccount.deposit(536);
console.log(myAccount.getAccountInfo());

myAccount.withdraw(3567);
console.log(myAccount.getAccountInfo());

const newAccount = new BankAccount('987654321', 1300);
console.log(newAccount.getAccountInfo());
