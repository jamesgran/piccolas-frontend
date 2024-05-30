import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router,
    //solucion para error window is not defined
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)){
      window.scrollTo(0, 0);
    }

    
  }

  setScrollTopOnRouterEvents(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }
}
