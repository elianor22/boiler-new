export interface ResponseOptions<T> {
  data: T;
  status?: number;
  message?: string;
  withMeta?: boolean;
  paginationParams?: {
    page: number;
    limit: number;
    totalCount: number;
  };
  apiVersion?: string;
}
