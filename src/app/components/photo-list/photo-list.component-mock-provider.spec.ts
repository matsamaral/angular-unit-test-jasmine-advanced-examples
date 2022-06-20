import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { PhotoListModule } from './photo-list.module';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo.board.service';
import { buildPhotoList } from './../../shared/components/photo-board/test/build-photo-list';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/services/photo-board-mock.service';

describe(PhotoListComponent.name + 'Mock provider', () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ],
      providers: [{
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService
      }]
      // providers: [{
      //   provide: PhotoBoardService,
      //   useValue: {
      //     getPhotos(): Observable<Photo[]> {
      //       return of(buildPhotoList())
      //     }
      //   }
      // }]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it(`(D) Should display board while waiting for data`, () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should not display board').not.toBeNull();
    expect(loader).withContext('Should display loader').toBeNull();
  });
});
