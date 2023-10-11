import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string; status: string; } | undefined;
  @Input() id: number | undefined;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    if (typeof this.id === 'number' && typeof status === 'string') {
      this.statusChanged.emit({ id: this.id, newStatus: status });
      console.log('A server status changed, new status: ' + status);
    } else {
      console.error('Invalid id or status');
    }
  }
}
