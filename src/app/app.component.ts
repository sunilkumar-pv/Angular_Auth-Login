import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emailclient';
  signedin$: BehaviorSubject<boolean>;

    constructor(private authService:AuthService){
    this.signedin$ = this.authService.signedin$;
    }

    ngOnInit() {
         this.authService.checkAuth().subscribe(() =>{});
         
        // setTimeout(() => {
        //   this.authService.signout().subscribe(() => { });
        // }, 1000);

    }


}
