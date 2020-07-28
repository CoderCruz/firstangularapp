//component is a typescript class
//decorator are a ts feature decorator alqays init with @
import { Component } from '@angular/core'

@Component({
    //tell angular what to do with this class
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    //inside of class
    serverId = 10;
    serverStatus: string = 'offline' /*explicitily letting typescript know the data type */

    getServerStatus () {
        return this.serverStatus;
    }
}

