import { createAstProcessor, createContentProcessor } from './processor/index.js'
import { 
    createAzureTranslateService, type AzureTranslateOptions,
    createChatgptTranslateService, type ChatgptTranslateOptions
} from './service/index.js'

export const azureTranslate = (content: string, options: AzureTranslateOptions) => {
    const process = createAstProcessor(createAzureTranslateService(options))
    return process(content)
}

export const chatgptTranslate = (content: string, options: ChatgptTranslateOptions) => {
    const process = createContentProcessor(createChatgptTranslateService(options))
    return process(content)
}