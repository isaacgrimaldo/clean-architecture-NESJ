import Symbols from './symbols';
import { AlbumRepository } from '@/template/infrastructe/prisma/Album.repository';
import { AlbumService } from '@/template//application/services/Album.service';
import { Module } from '@nestjs/common';
import { AlbumController } from '@/template/infrastructe/nest/controllers/Album.controller';

@Module({
  imports: [],
  providers: [
    {
      provide: Symbols.IAlbumRepository,
      useClass: AlbumRepository,
    },
    {
      provide: Symbols.IAlbumService,
      useClass: AlbumService,
    },
  ],
  controllers: [AlbumController],
  exports: [AlbumModule],
})
export class AlbumModule {}
