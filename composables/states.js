export function useTheme() {
    return useState('theme', ()=> 'white')
}

export function useThemes() {
    let themes = ref(['white', 'dark'])
    return useState('theme', ()=> themes)
}

export function useLang() {
    return useState('lang', ()=> 'ru')
}

export function useLanguages() {
    let languages = ref(['ru', 'en', 'fr', 'sp'])
    return useState('lang', ()=> languages)
}
