import { Component, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nested',
  styleUrl: './nested.css',
  templateUrl: './nested.html',
})
export class Nested {
  // @Input("nameValue") nameData = ""
  // @Output("nameValueChanged") nameDataChanged = new EventEmitter<string>()

  nameData: InputSignal<string> = input<string>("", {alias:"nameValue"})
  nameDataChanged: OutputEmitterRef<string> = output<string>({alias:"nameValueChanged"})

  updateNameData(name: string) {
    this.nameDataChanged.emit(name)
  }
}
