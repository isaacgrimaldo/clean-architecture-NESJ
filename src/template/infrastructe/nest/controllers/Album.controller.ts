import Symbols from '@/template/symbols';
import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from '@/template/infrastructe/nest/dtos/CreateAlbum.dto';
import { IAlbumService } from '@/template/domain/services/IAlbum.service.interface';
import { AlbumCreateResponse } from '@/template/infrastructe/nest/dtos/User.response';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@ApiTags('Album')
@Controller('Album')
export class AlbumController {
  constructor(
    @Inject(Symbols.IAlbumService)
    private readonly AlbumService: IAlbumService,
  ) {}

  @ApiOperation({
    summary: 'Find users in database, applying filters',
    description:
      'Endpoint to get all users saved in database, applying filters',
  })
  @ApiCreatedResponse({
    status: 200,
    type: AlbumCreateResponse,
  })
  @Post('')
  async create(@Body() createUser: CreateUserDto) {
    try {
      return await this.AlbumService.create(createUser);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException('Error creating Album:');
      }
      const message = String(error);
      throw new BadRequestException(message);
    }
  }
}
