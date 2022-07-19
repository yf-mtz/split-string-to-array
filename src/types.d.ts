type Str = string
type Config = {
    regExp?: RegExp,
    notRepeat?: boolean
    notEmpty?: boolean
}
declare global {
    /**
     * splitStrToArray函数
     * @param {string}str
     * @param {Object}[config]
     * @param {RegExp}[config.regExp = /^[\u4e00-\u9fa5-_a-zA-Z\d]+$/] 默认为中英文数字和_-
     * @param {boolean}[config.notRepeat = true] 是否在结果中去除重复值
     * @param {boolean}[config.notEmpty = true]] 是否在结果中排除空值
     * @returns {Array<string>} 返回的字符串数组
     */
    type  SplitStrToArray = (str: Str, config: Config) => string[]
    
}
declare const splitStrToArray: SplitStrToArray
export =  splitStrToArray ;


