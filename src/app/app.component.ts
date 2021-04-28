import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.addClass(this.document.body, 'light-theme');
  }

  setTheme({source}: MatSelectChange) {
    if (source.value === 'light') {
       this.renderer.removeClass(this.document.body, 'dark-theme');
       this.renderer.addClass(this.document.body, 'light-theme');
    } else {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.document.body, 'light-theme');
    }
  }
}

// *************
// OTHER OPTION
// *************

// export class AppComponent implements OnInit {
//   @HostBinding('class')
//   currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

//   constructor(private overlayContainer: OverlayContainer) {

//   }

//   ngOnInit() {
//     this.currentTheme = 'dark-theme';
//     // For mat-select backgrounds and more
//     this.overlayContainer.getContainerElement().classList.add('dark-theme');
//     this.overlayContainer.getContainerElement().classList.remove('light-theme');
//   }

//   setTheme({source}: MatSelectChange) {
//     if (source.value === 'light') {
//       this.currentTheme = 'light-theme'
//       this.overlayContainer.getContainerElement().classList.remove('dark-theme');
//       this.overlayContainer.getContainerElement().classList.add('light-theme');
//     } else {
//       this.currentTheme = 'dark-theme'
//       this.overlayContainer.getContainerElement().classList.add('dark-theme');
//       this.overlayContainer.getContainerElement().classList.remove('light-theme');
//     }
//   }
// }
