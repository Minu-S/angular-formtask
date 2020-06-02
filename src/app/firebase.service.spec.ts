import { TestBed } from '@angular/core/testing';
import { FireBaseService} from './app/firebase.service';
describe('FireBaseService', () => {
let service: FirebaseService;
beforeEach(() => {
  TestBed.configureTestingModule({});
  service = TestBed.inject(FirebaseService);
});
it('should be created', () => {
  expect(service).toBeTruthy();
});
});

