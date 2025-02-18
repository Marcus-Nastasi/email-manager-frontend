import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-email-view',
  imports: [],
  template: `
    <iframe #emailFrame style="width: 100%; height: 52vh; border: none;" class="custom-scroll"></iframe>
  `,
  styles: `
    iframe {
      width: 100%; 
      height: 52vh; 
      border: none;
    }

    .custom-scroll {
      width: full;
      height: full;
      overflow-y: scroll;
    }

    .custom-scroll::-webkit-scrollbar {
      width: 7px;
    }

    .custom-scroll::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    .custom-scroll::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
    }

    .custom-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EmailViewComponent implements OnChanges {

  @Input() emailHtml: string = '';
  @ViewChild('emailFrame', { static: false }) emailFrame!: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emailHtml'] && this.emailFrame) {
      this.updateIframeContent();
    }
  }

  private updateIframeContent() {
    const iframe: HTMLIFrameElement = this.emailFrame.nativeElement as HTMLIFrameElement;
    const doc: Document | undefined = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(this.emailHtml);
      doc.close();
    }
  }
}
