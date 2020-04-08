import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild( 'heading', {static: true} ) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('The content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDocheck called');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit called ');
  }

  ngAfterContentChecked() {
    console.log('ngaftercontentChecked called ');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called ');
    console.log('The content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph '+ this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called ');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called ');
  }


}
