//component is a typescript class
//decorator are a ts feature decorator alqays init with @
import { Component } from '@angular/core'

@Component({
    //tell angular what to do with this class
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

}

