import { create } from 'zustand'

export const SERVER_IP = 'http://127.0.0.1:5000'

type UserContentState = {
    synopsis: string;
    characters:string[];
    setSynopsis: (value: string) => void
    setCharacters: (value: string[]) => void
}
export const useContentStore = create<UserContentState>((set) => ({
    synopsis: '',
    characters: [],
    setSynopsis: (value: string) => {
        set(() => ({ synopsis: value }))
    },
    setCharacters: (value: string[]) => {
        set(() => ({ characters: value }))
    },
}))