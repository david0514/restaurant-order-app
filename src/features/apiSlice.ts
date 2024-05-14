import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface ChatPromptDTO {
    model: string,
    response_format: { type: string },
    messages: { role: string, content: string }[]
}

export interface ChatResponseDTO {
    "choices": [
        {
            "finish_reason": string,
            "index": number,
            "message": {
                "content": string,
                "role": string
            },
            "logprobs": any
        }
    ],
    "created": number,
    "id": string,
    "model": string,
    "object": string
    "usage": {
        "completion_tokens": number,
        "prompt_tokens": number,
        "total_tokens": number
    }
}

const baseQuery = fetchBaseQuery({
    baseUrl: `https://api.openai.com`,
    prepareHeaders: (headers, {getState}) => {
        headers.set("authorization", `Bearer <key>`)
        return headers
    },
})

export const apiSlice = createApi({
    reducerPath: "backend",
    baseQuery: baseQuery,
    tagTypes: ["Item", "Part", "Surface", "ReferencesFileDetails", "Color", "User"],
    endpoints(builder) {
        return {

            // Item

            listSuggestedItems: builder.mutation<ChatResponseDTO, ChatPromptDTO>({
                query(param) {
                    return {
                        url: "/v1/chat/completions",
                        method: "post",
                        body: param
                    }
                },
                invalidatesTags: ["Item"]
            }),
        }
    }
})

export const {
    useListSuggestedItemsMutation,
} = apiSlice