export interface IdzResult<Type> {
  message?: string
  result?: Type[]
  status: string
  title: string
}
