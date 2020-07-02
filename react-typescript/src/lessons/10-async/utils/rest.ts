export default async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  const body = await response.json()
  return body
}

// interface HttpResponse<T> extends Response {
//   parsedBody?: T
//   status: number
//   redirect?: boolean
// }

// export default async <T>(url: string): Promise<HttpResponse<T>> => {
//   const response: HttpResponse<T> = await fetch(url)
//   response.parsedBody = await response.json()
//   return response
// }
