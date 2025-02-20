import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

/**
 * 
 * E-mail view component.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Component({
  selector: 'app-email-view',
  imports: [],
  template: `
    <iframe #emailFrame style="width: 100%; height: 52vh; border: none;"></iframe>
  `,
  styles: `
    iframe {
      width: 100%; 
      height: 52vh; 
      border: none;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EmailViewComponent implements OnChanges {

  @Input() emailHtml: string = '';
  @ViewChild('emailFrame', { static: false }) emailFrame!: ElementRef;

  constructor() {}

  /**
   * 
   * On component data changed, run this function.
   * 
   * @param changes the changes done.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emailHtml'] && this.emailFrame) {
      this.updateIframeContent();
    }
  }

  /**
   * 
   * This function allows to update correctly the IFrame.
   */
  private updateIframeContent(): void {
    const iframe: HTMLIFrameElement = this.emailFrame.nativeElement as HTMLIFrameElement;
    const doc: Document | undefined = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(this.emailHtml);
      doc.close();
    }
  }
}
