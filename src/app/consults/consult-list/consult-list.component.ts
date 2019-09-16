import { Component, OnInit } from '@angular/core';
import { ConsultService } from 'src/app/shared/consult.service';
import { Consult } from 'src/app/shared/consult.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consult-list',
  templateUrl: './consult-list.component.html',
  styleUrls: ['./consult-list.component.css']
})
export class ConsultListComponent implements OnInit {

  constructor(private service: ConsultService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(cons: Consult) {
    this.service.formData = Object.assign({}, cons);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteConsult(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Consult. Register');
      });
    }
  }
}
