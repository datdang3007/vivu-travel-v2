export interface PostDataProps {
  id: string | number;
  type: number;
  content: string;
}

export interface PostProps {
  linkBackground: string;
  postTitle: string;
  postData: PostDataProps[];
}
