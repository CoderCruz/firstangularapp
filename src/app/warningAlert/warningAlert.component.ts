//When creating a component you need to first import component from @angular/core
import { Component } from '@angular/core';

//then we tell angular what to do with class
@Component({
    selector: 'app-warning',
    templateUrl: './warningAlert.component.html'
})

export class WarningAlert {

}
