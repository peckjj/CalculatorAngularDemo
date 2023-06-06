import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  private readonly COLLAPSED_WIDTH = '0';
  private readonly EXPANDED_WIDTH = '100%'

  @ViewChild('root', {static: false}) root: ElementRef | undefined;
  isExpanded = false;

  toggleWidth() {
    if (!this.root) {
      return;
    }

    if (this.isExpanded) {
      this.root.nativeElement.style.width = this.COLLAPSED_WIDTH;
    } else {
      this.root.nativeElement.style.width = this.EXPANDED_WIDTH;
    }
    this.isExpanded = !this.isExpanded;
  }

}
