import { BaseModel } from 'src/common/BaseModel.model';

interface IPhotoProps {
  readonly id: number;
  readonly slug: string;
  readonly path: string;
  readonly size_kb: number;
  readonly gallery_id: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly uploaded_by: string;
}

export class Photo extends BaseModel implements IPhotoProps {
  readonly slug: string;
  readonly path: string;
  readonly size_kb: number;
  readonly gallery_id: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly uploaded_by: string;

  constructor(props?: IPhotoProps) {
    super();
    if (props) {
      this.setProps(props);
    }
  }
}
