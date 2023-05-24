import parse from 'remark-parse'
import { type Root as MdastRoot } from 'mdast'
import stringify from 'remark-stringify'
import { unified, Plugin } from 'unified'

export const createAstProcessor = (service: Plugin<[], MdastRoot>) => {
  const processor = unified().use(parse).use(service).use(stringify)
  return (mdContent: string) => {
    return processor.process(mdContent)
  }
}
