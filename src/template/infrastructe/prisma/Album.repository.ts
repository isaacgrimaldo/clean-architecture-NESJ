import { PrismaService } from '@/database/prisma/prisma.service';
import { CreatedAlbum } from '@/template/domain/dtos/CreateAlbum.dto';
import { AlbumMapper } from '@/template/domain/mapper/Album.mapper';
import { AlbumModel } from '@/template/domain/models/Album.model';
import { IAlbumRepository } from '@/template/domain/repositoriers/IAlbum.repository.interface';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AlbumRepository implements IAlbumRepository {
  private readonly logger = new Logger();

  constructor(private readonly prisma: PrismaService) {}

  async create(album: CreatedAlbum): Promise<AlbumModel> {
    const data = await this.prisma.album.create({
      data: {
        description: album.description,
        imgPortadaUrl: album.imgPortada,
        name: album.name,
      },
    });
    return new AlbumMapper(data).execute();
  }
}
