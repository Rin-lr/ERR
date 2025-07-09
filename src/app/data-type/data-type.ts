export interface DataType {
  header: string;
  highTimeline: true;
  data: {
    id: number;
    heading: string;
    type: string;
    primaryCategoryId: number;
    rootContentId: number;
    rootCategoryId: number;
    canonicalUrl: string;
    fancyUrl: string;
    verticalPhotos: {
      id: number;
      created: number;
      format: string;
      captionEt: string;
      photoTypes: {
        [key: number]: {
          type: number;
          w: number;
          h: number;
          url: string;
        };
      };
      photoUrlOriginal: string;
      photoUrlBase: string;
    };
  };
}
