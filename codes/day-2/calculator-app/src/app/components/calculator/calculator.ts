import { Component, computed, effect, EffectRef, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  choice = signal(0)
  first = signal(0)
  second = signal(0)
  result = signal(0)

  constructor() {
    effect(
      () => {
        switch (this.choice()) {
          case 1:
            this.result.set(this.first() + this.second())
            break;

          case 2:
            this.result.set(this.first() - this.second())
            break;

          case 3:
            this.result.set(this.first() * this.second())
            break;

          case 4:
            this.result.set(this.first() / this.second())
            break;

          default:
            this.result.set(NaN)
            break;
        }
      }
    )
  }

  // calculate() {
  //   switch (this.choice()) {

  //     case 1:
  //       this.result.set(this.first() + this.second())
  //       break;

  //     case 2:
  //       this.result.set(this.first() - this.second())
  //       break;

  //     case 3:
  //       this.result.set(this.first() * this.second())
  //       break;

  //     case 4:
  //       this.result.set(this.first() / this.second())
  //       break;

  //     default:
  //       this.result.set(NaN)
  //       break;
  //   }
  // }


  // result = computed(
  //   () => {
  //     switch (this.choice()) {
  //       case 1:
  //         return this.first() + this.second()

  //       case 2:
  //         return this.first() - this.second()

  //       case 3:
  //         return this.first() * this.second()

  //       case 4:
  //         return this.first() / this.second()

  //       default:
  //         return NaN
  //     }
  //   }
  // )
}
