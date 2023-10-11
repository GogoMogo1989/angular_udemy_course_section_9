import { Component,Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string; } | undefined;
  @Input() id: number | undefined;

  constructor(private loggingService: LoggingService, private accountService: AccountsService){}

  onSetTo(status: string) {
    if (typeof this.id === 'number') {
      this.accountService.updateStatus(this.id, status);
      this.loggingService.logStatusChange(status)
      console.log('A server status changed, new status: ' + status);
    } else {
      console.error('Invalid ID');
    }
  }
}
