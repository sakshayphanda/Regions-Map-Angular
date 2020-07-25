import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GlobalDataService } from '../../shared/services/global-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit{
  light = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
     // shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public globalDataService: GlobalDataService
    ) {}

  ngOnInit() {
    if (localStorage.getItem('lightMode')) {
      this.light = JSON.parse(localStorage.getItem('lightMode'));
      if(this.light) {
        this.reverseVariables();
      }
    }
    this.globalDataService.regions.subscribe(
      regions => {
        console.log(regions);
      }
    );
  }

  toggleTheme() {
    this.light = !this.light;
    this.reverseVariables();
  }

  reverseVariables() {
    const prevPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
    const prevAccent = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent');
    this.setProperty('--primary', prevAccent);
    this.setProperty('--accent', prevPrimary);

    localStorage.setItem('lightMode', JSON.stringify(this.light));
  }


  setProperty(variable, value) {
    document.documentElement.style.setProperty(variable, value);
  }
}
