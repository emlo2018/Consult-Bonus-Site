import { Component, OnInit } from '@angular/core';
import { ConsultService } from 'src/app/shared/consult.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  constructor(private service: ConsultService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ConsultID: null,
      Name: '',
      Debit: null,
      BonusPoint: null,
      Result: null

    }

  }

  onSubmit(form: NgForm) {
    if (form.value.ConsultID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postConsult(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Consult. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putConsult(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Consult. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
