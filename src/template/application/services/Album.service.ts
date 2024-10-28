import { Response } from '@/common/BaseResponse.model';
import { CreatedAlbum } from '@/template/domain/dtos/CreateAlbum.dto';
import { IAlbumProps } from '@/template/domain/models/Album.model';
import { IAlbumRepository } from '@/template/domain/repositoriers/IAlbum.repository.interface';
import { IAlbumService } from '@/template/domain/services/IAlbum.service.interface';
import Symbols from '@/template/symbols';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AlbumService implements IAlbumService {
  constructor(
    @Inject(Symbols.IAlbumRepository)
    private AlbumRepository: IAlbumRepository,
  ) {}

  async create(album: CreatedAlbum): Promise<IAlbumProps> {
    const user = await this.AlbumRepository.create(album);
    return user;
  }
}
