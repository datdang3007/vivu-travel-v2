export interface ICreatePlaceComment {
  content: string;
  place: {
    id: string | number;
  };
  creator: string;
}
