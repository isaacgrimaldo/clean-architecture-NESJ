import { BaseModel } from 'src/common/BaseModel.model';
import { Photo } from './Photo.model';

export interface IAlbumProps {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly imgPortadaUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly Photos: Photo[];
}

export class AlbumModel extends BaseModel implements IAlbumProps {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly imgPortadaUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly Photos: Photo[];

  constructor(props?: IAlbumProps) {
    super();
    if (props) {
      this.setProps(props);
    }
  }
}
