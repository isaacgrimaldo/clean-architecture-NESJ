import { AlbumModel } from '@/template/domain/models/Album.model';
import { ApiProperty } from '@nestjs/swagger';

export class Album extends AlbumModel {
  @ApiProperty()
  id: number;
  @ApiProperty()
  level: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  active: true;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}

export class AlbumCreateResponse {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  data: Album[];
  @ApiProperty()
  message: string;
  @ApiProperty()
  error: string;
}
