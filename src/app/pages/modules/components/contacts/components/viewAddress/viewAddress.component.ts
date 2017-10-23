import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-address',
	styleUrls: ['./viewAddress.scss'],
	templateUrl: './viewAddress.html',
})
export class ViewAddress {
	viewAddress = {};

	@Input() address;
	@Input() viewContactStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.address)
		this.viewAddress = this.address;
	}
	backToContacts() {
		this.viewContactStatus = this.viewContactStatus;
	}

	submitContact() {
		console.log(this.viewAddress);
	}

	parseValue(value) {
		if(value === "Y") return "YES";
		else if(value === "N") return "NO";
		else return value;
	}

	labels =  {
		"dbContactNumber": "Contact#",
		"dbDate": "Date",
		"dbLastName": "Last Name",
		"dbFirstName": "First Name",
		"dbCompany": "Company",
		"dbTitle": "Title",
		"dbBusinessTitle": "Business Title",
		"dbPrimaryEmail": "Primary Email",
		"dbSecondaryEmail": "Secondary Email",
		"dbWebAddress": "Web Address",
		"dbAddNotes": "Add Notes",
		"dbSource": "Source",
		"dbCheck": "Check",
		"dbMailingLabel": "Mailing Label",
		"dbPassword": "Password",
		"dbSecurityQuestion": "Security Question",
		"dbSecurityAnswer": "Security Answer",
		"dbRegistrationComplete": "Registration Complete",
		"dbHowFind": "How Find",
		"dbWebLook": "Web Look",
		"dbWantRec": "Want Rec",
		"dbWantCom": "Want Com",
		"dbWantRes": "Want Res",
		"dbWhereUse": "Where Use",
		"dbVehicles": "Vehicles",
		"dbHowMuch": "How Much",
		"dbSelfAssembly": "Self Assembly",
		"dbNeoAssembly": "Neo Assembly",
		"dbOtherComments": "Other Comments",
		"dbHowInterest": "How Interest",
		"dbUsr": "Usr",
		"dbIP": "Ip",
		"dbPhone": "Phone",
		"dbAddress": "Address",
		"dbCity": "City",
		"dbState": "State",
		"dbCountry": "Country",
		"dbZip": "Zip",
		"dbType": "Type",
		"dbContactsCompany": "Contacts Company"
	};
	constructor() {
	}
}
