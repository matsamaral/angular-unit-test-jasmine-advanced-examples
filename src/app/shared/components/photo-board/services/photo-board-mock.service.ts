import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo.board.service';
import { Photo } from '../interfaces/photo';
import { buildPhotoList } from './../test/build-photo-list';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
      return of(buildPhotoList());
  }
}
