import { ComponentFixture, TestBed } from "@angular/core/testing"
import { App } from "./app";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { provideTodoService } from "./constants";

describe(
  'App Component Tests',
  () => {

    let fixture: ComponentFixture<App>;
    let component: App;
    //let service: TodoService;

    beforeEach(
      () => {
        TestBed.configureTestingModule(
          {
            providers: [provideTodoService()]
          }
        )
        //service = TestBed.inject(TOKEN)
        fixture = TestBed.createComponent(App)
        component = fixture.componentInstance

      }
    )

    it(
      'App component created',
      () => {
        expect(component).toBeTruthy()
        //assert.isDefined(component)
      }
    )

    it('App component has title property with value->unit-testing-demo',
      () => {
        expect(component.title()).toBe('unit-testing-demo')
      }
    )

    it('App component template displays title property value->unit-testing-demo in h2 element',
      () => {
        fixture.detectChanges()
        const template: DebugElement = fixture.debugElement
        const header: DebugElement = template.query(By.css('h2'))
        const element: HTMLElement = header.nativeElement as HTMLElement
        expect(element.textContent).toBe('unit-testing-demo')
      }
    )

    it('change of value in text box is updating the title and the same title in turn is updated in the text box',
      () => {
        const value = 'welcome tp unit testing'
        fixture.detectChanges()
        const template: DebugElement = fixture.debugElement
        const textBox = template.query(By.css('#txtTitle'))
        textBox.triggerEventHandler('input', { target: { value: value } })
        //const textEelement = textBox.nativeElement as HTMLInputElement
        //textEelement.dispatchEvent(new InputEvent('input', { data: value }))
        expect(component.title()).toBe(value)
      }
    )

    it('todo service getTodos method is returning the todos array with 5 records and that is set to todos property',
      () => {
        component.ngOnInit()
        expect(component.todos().length).toBe(5)
      }
    )

    it('todos records are displayed in the ul element with 5 li elements',
      () => {
        component.ngOnInit()
        fixture.detectChanges()
        const ul = fixture.debugElement.query(By.css('ul')).nativeElement as HTMLUListElement
        expect(ul.children.length).toBe(5)
      }
    )
  }
)