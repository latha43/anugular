
import { Component } from '@angular/core' 

@Component({
  selector:'Staff-list',
  template:`<br><br>
	  	<a routerLink="list"><button>LIST</button></a>
	  	<a routerLink="search"><button>SEARCH</button></a>
	  	<a routerLink="delete"><button>DELETE</button></a>
	  	<a routerLink="addup"><button>ADD/EDIT</button></a>
	  	<router-outlet></router-outlet>
	  	`
})
	  	export class TestComponent{}

