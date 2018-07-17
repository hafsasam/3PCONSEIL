import { trigger, state, transition, animate, style } from '@angular/animations';

export function flyInOut() {
  return trigger('flyInOut', [
    state('*', style({ opacity: 1, transform: 'translateY(0)'})),
    transition(':enter', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({ transform: 'translateY(100%)', opacity: 0}))
    ])
  ]);
}
