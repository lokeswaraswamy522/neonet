import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable()
export class ContactsService {
	constructor(public http:Http) {}
	dataTableData = [];

//   getData(): Promise<any> {
//     return new Promise((resolve, reject) => {
// 		this.http.get('contacts.json').map(response => {
// 			console.log("loaded");
//             this.dataTableData = response.json();
// 			resolve(this.dataTableData);
// 			reject ("Error!");
//         });
//     });
//   }

  getData() {
	return this.http.get("./assets/json/contacts.json")
        .map((res:Response) => this.dataTableData = res.json()); //records in this case
  }

}
