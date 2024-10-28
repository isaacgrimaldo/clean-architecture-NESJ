import { Album } from '@prisma/client';
import { AlbumModel } from '../models/Album.model';
import { Logger } from '@nestjs/common';

export class AlbumMapper {
  logger = new Logger();
  Album: AlbumModel;

  constructor(entity: Album) {
    this.logger.log('RoleEntity');
    const Album = new AlbumModel();
    Album.setProps({
      ...entity,
    });
    this.Album = Album;
  }

  public execute(): AlbumModel {
    return this.Album;
  }
}
