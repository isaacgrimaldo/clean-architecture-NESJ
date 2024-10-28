import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database/database.module';
import { AlbumModule } from '@/template/album.module';
import { ConfigModule } from '@nestjs/config';
import config from '@/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
      load: [config],
    }),
    DataBaseModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
