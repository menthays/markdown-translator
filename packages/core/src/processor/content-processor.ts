export const createContentProcessor = (service: ((content: string) => Promise<string>)) => {
  return (mdContent: string) => {
    return service(mdContent)
  }
}
