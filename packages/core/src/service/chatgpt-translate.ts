import 'isomorphic-fetch'
import { ChatGPTAPI } from 'chatgpt'

export interface ChatgptTranslateOptions {
    apiKey: string;
    to: string;
}

export const createChatgptTranslateService = (options: ChatgptTranslateOptions) => {
    const api = new ChatGPTAPI({
        apiKey: options.apiKey
    })

    return async (content: string) => {
        const prompt = `
            Translate the following markdown content to language "${options.to}" preserving the markdown format and output the result directly:
            ${content}
        `
        const res = await api.sendMessage(prompt)
        return res.text
    }
}