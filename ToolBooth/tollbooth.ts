class TollBooth {
  private carTotal: number;
  private cashTotal: number;

  constructor() {
    this.carTotal = 0;
    this.cashTotal = 0;
  }

  public payingCar(): void {
    this.carTotal++;
    this.cashTotal += 50;
  }

  public nopayCar(): void {
    this.carTotal++;
  }

  public display(): void {
    console.log(`Total cars: ${this.carTotal}`);
    console.log(`Total cash: ${this.cashTotal}`);
  }
}

function testTollBooth(...args: ('p' | 'n')[]): void {
  const tollBooth = new TollBooth();

  for (const arg of args) {
    if (arg === 'p') {
      tollBooth.payingCar();
    } else if (arg === 'n') {
      tollBooth.nopayCar();
    }
  }

  tollBooth.display();
}

// Test cases
testTollBooth('p', 'p', 'n', 'p', 'n');
testTollBooth('p', 'p', 'n', 'p', 'p', 'n', 'p');
testTollBooth('p', 'p', 'n', 'p', 'n', 'p', 'p', 'p', 'n');
