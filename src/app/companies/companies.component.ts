import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { COMPANIES } from '../mock-companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  companies = COMPANIES;
  selectedCompany: Company;
  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
  addCompany() {
    const newCompany = { id: this.companies.length + 1  , name: '', status: '', companyInfo: '', keyContacts: '', financialPerformance: ''};
    this.companies.unshift(newCompany);

    this.companies.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  }
  removeCompany(n) {
    // handle last item
    if (this.companies.length  === n) {
      this.companies.pop();
    }
    // handle first item
    if (n === 0) {
      this.companies.shift();
    }
    // handle inner item
    if (n !== 1 || n !== this.companies.length - 1 ) {
      this.companies.splice(n - 1, 1);
    }

  }
  sortASC() {
    const az = document.getElementById('az');
    const zza = document.getElementById('za');
    this.companies.sort();
    this.companies.reverse();
    az.className = 'azSelected';
    zza.className = 'zaNotSelected';
  }
  sortDSC() {
    const azz = document.getElementById('az');
    const za = document.getElementById('za');
    this.companies.sort();
    this.companies.reverse();
    za.className = 'zaSelected';
    azz.className = 'azNotSelected';
  }


  constructor() {

  }

  ngOnInit() {
  }

}
