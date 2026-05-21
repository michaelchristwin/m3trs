export interface UploadModel {
  uploadBody: {
    name: string;
    description: string;
    image: string;
    attributes: Attribute[];
  };
}

interface Attribute {
  display_type?: string;
  trait_type: string;
  value: string | number;
}

export interface UploadImage {
  image: Buffer;
  name: string;
}
