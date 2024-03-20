export type ResponseData<T> = {
  items: T[]
  pagination: Pagination
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
