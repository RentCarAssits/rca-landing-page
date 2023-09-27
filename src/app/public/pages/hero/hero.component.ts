import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  visible!: boolean;
  ref!: DynamicDialogRef;

  constructor(
    public layoutService: LayoutService,
    public router: Router,
    public messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
