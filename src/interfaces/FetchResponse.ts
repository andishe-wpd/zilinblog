export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}
