// import { DeleteUser } from '@/user/domain/dtos/DeleteUser.dto';
// import { EditUser } from '@/user/domain/dtos/EditUser.dto';
// import { UserFilterPagination } from '@/user/domain/dtos/UserFilterPagination.dto';
// import { UserProps } from '@/user/domain/models/User.model';
// import { UserPageProps } from '@/user/domain/types/UserPage.type';
// import { UpdateResult } from 'typeorm';

import { CreatedAlbum } from '@/template/domain/dtos/CreateAlbum.dto';
import { AlbumModel, IAlbumProps } from '@/template/domain/models/Album.model';

export interface IAlbumService {
  create(album: CreatedAlbum): Promise<IAlbumProps>;
}
