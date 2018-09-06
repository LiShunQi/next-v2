/**
 * Created by Administrator on 2018/9/5.
 */
/**
 * 动态设置rem
 */

const BASE_SIZE = 50 // 基本字体大小
const MAX_SIZE = 80 // 最大字体大小
const DESIGN_WIDTH = 375 // iphone 6

const htmlEl = document.querySelector('html')
let fontSize = 50

let setFontSize = size => {
    htmlEl.style.fontSize = `${size}px`
    fontSize = size
}

let calc = () => {
    const DEV_WIDTH = document.documentElement.clientWidth || document.body.clientWidth;
    // let fontSize = BASE_SIZE
    // if (DEV_WIDTH < DESIGN_WIDTH) {
    //   return setFontSize(fontSize)
    // }
    let scale = DEV_WIDTH / DESIGN_WIDTH
    let distSize = scale * BASE_SIZE
    if (distSize > MAX_SIZE) {
        distSize = MAX_SIZE
    }
    setFontSize(Math.round(distSize))
}

window.addEventListener('resize', calc)

document.addEventListener('DOMContentLoaded', calc)