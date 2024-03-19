import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';


/** mini Store for reactivity */
/** the idea is simple I create a selector (accept as arg a function ==> (to get state slice)) & setter state based on Behavior Subject */
/** each store can use this by extends it*/

export class StateService<T> {
  private state$: BehaviorSubject<T>;
  protected get state(): T {
    return this.state$.getValue();
  }

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>) {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }
}
