import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  nextPage() {
    this.pageChange.emit(this.currentPage + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
}