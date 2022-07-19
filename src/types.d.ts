type Str = string
type Config = {
    regExp?: RegExp,
    notRepeat?: boolean
    notEmpty?: boolean
}
export type  SplitStrToArray = (str: Str, config: Config) => string[]
