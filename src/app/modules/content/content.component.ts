import { Component, OnInit } from '@angular/core';
import { FormModalService } from 'src/app/core/services/form-modal.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public _modalService:FormModalService) { }

  ngOnInit(): void {
  }

}
