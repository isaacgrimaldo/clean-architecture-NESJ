import { CreatedAlbum } from '@/template/domain/dtos/CreateAlbum.dto';
import { IAlbumProps } from '@/template/domain/models/Album.model';

export interface IAlbumRepository {
  create(album: CreatedAlbum): Promise<IAlbumProps>;
}
