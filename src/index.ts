import { SplitStrToArray } from './types'

/**
 *
 * @param {string}str
 * @param {Object}[config]
 * @param {RegExp}[config.regExp = /^[\u4e00-\u9fa5-_a-zA-Z\d]+$/] 默认为中英文数字和_-
 * @param {boolean}[config.notRepeat = true] 是否在结果中去除重复值
 * @param {boolean}[config.notEmpty = true]] 是否在结果中排除空值
 * @returns {Array<string>} 返回的字符串数组
 */
const splitStrToArray: SplitStrToArray = (str, config = {
    regExp: /^[\u4e00-\u9fa5-_a-zA-Z\d]+$/,
    notRepeat: true,
    notEmpty: true
}) => {
    if (typeof str !== 'string') {
        console.error('splitStrToArray: 输入的不是字符串')
        return []
    }
    else if (str.trim().length === 0) {
        console.error('splitStrToArray: 输入的字符串为空')
        return []
    }
    const {
        regExp,
        notRepeat,
        notEmpty
    } = config
    const len = str.length
    let splitList: string[] = []
    let cutStr = ''
    for (let i = 0; i < len; i++) {
        const sItem = str[i]
        if (regExp.test(sItem)) {
            cutStr += sItem
        }
        else {
            splitList.push(cutStr)
            cutStr = ''
        }
        // 循环到字符串末尾 push最后一条数据 防止结尾没有匹配到值导致最后一条数据没有push进去
        if (i === len - 1) {
            splitList.push(cutStr)
        }
    }
    if (splitList.length === 0) {
        return []
    }
    else {
        if (notEmpty) {
            splitList = splitList.filter(item => item)
        }
        if (notRepeat) {
            splitList = Array.from(new Set(splitList))
        }
        return splitList
    }
}
export default splitStrToArray
