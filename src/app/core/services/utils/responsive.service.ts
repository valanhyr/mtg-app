import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private screenWidth$: BehaviorSubject<number>;
  private screenWidthSubscription: Subscription;

  constructor() {
    this.screenWidth$ = new BehaviorSubject(window.innerWidth);
    this.screenWidthSubscription = this.screenWidth$.subscribe();

    window.addEventListener('resize', () => {
      this.screenWidth$.next(window.innerWidth);
    });
  }

  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

  isDesktop(): Observable<boolean> {
    return this.screenWidth$.pipe(map(width => width >= 992));
  }

  isTablet(): Observable<boolean> {
    return this.screenWidth$.pipe(map(width => width >= 600 && width < 992));
  }

  isMobile(): Observable<boolean> {
    return this.screenWidth$.pipe(map(width => width < 360));
  }

  ngOnDestroy(): void {
    if (this.screenWidthSubscription) {
      this.screenWidthSubscription.unsubscribe();
    }
  }
}
