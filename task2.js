/**
 * 
 * 
 * @param {String} string 
 * @example randomizeString ('apple pen') => 'eppa plen'
 * @return {String} - random sorted string
 */
function randomizeString(string) {
    if (typeof string === 'string') {
        let stringClone = string.split('');
        return stringClone.sort(function () {
            return Math.random() - 0.5
        }).join('')
    }
    return 'Error: argument not a string'
}

/**
 * 
 * 
 * @param {String} string  * 
 * @example replaceSpaces('apple pen') => 'apple_pen'
 * @return {String} - string with replaced spaces on '_'
 */
function replaceSpaces(string) {
    if (typeof string === 'string') {
        return string.replace(/\s/, '_')
    }
    return 'Error: argument not a string'
}

/**
 * 
 * 
 * @param {String} string 
 * @example camesCaseString('apple pen') => 'appLe pEn' 
 * @return {String} - modified string
 */
function camelCaseString(string) {
    if (typeof string === 'string') {
        let camelCaseString = string.split('')
        camelCaseString = camelCaseString.map(function (it, index) {
            if (index % 2 === 1) {
                it = it.toUpperCase()
                return it
            }
            return it
        })
        return camelCaseString.join('')
    }
    return 'Error: argument not a string'
}

/**
 * 
 * 
 * @param {String} string 
 * @return {String} - string which will modified through 3 functions
 */
let mappingString = function (string) {        
    var i = 0
    function resolve(string, cbArray) {
        let mappedString = string
        for (i; i < cbArray.length; i++) {
            mappedString = cbArray[i](mappedString)
        }
        return mappedString
    }
    if (typeof string === 'string') {
        return resolve(string, [camelCaseString, replaceSpaces, randomizeString])
    }
    return 'Error: argument not a string'    
}
/**
 * 
 * 
 * @param {Number} width 
 * @param {Number} height 
 */
function draw(width, height) {
    let line;
    let i
    let j
    for (i = 0; i < height; i++) {
        line = '';
        for (j = 0; j < width; j++) {
            line += '* ' 
        }
        console.log(line)
    }
}

module.exports = {
    mappingString,
    draw
}