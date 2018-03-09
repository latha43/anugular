﻿﻿﻿﻿﻿﻿﻿﻿﻿import { Routes} from '@angular/router';
import { AppComponent }  from './app.component';
import { ListComponent }  from './list';
import { SearchComponent }  from './search';
import { DeleteComponent } from './delete';
import { AddUpComponent }  from './addup';

export const routing: Routes = [
                                  { path: 'list', component: ListComponent },
                                  { path: 'search', component: SearchComponent },
                                  { path: 'delete', component: DeleteComponent },
                                  { path: 'addup', component: AddUpComponent }
                              ];