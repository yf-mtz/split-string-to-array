type Str = string
type Config = {
    regExp?: RegExp,
    notRepeat?: boolean
    notEmpty?: boolean
}
declare global {
    type  SplitStrToArray = (str: Str, config: Config) => string[]
    
}
declare const splitStrToArray: SplitStrToArray
export = splitStrToArray;


