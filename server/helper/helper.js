const getRGB_Array = (number) => {
    const RGB_colors = [];
    for(let i=0;i<number;i++)
    {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        RGB_colors[i] = `rgb(${r},${g},${b})`;
    }
    return RGB_colors;
}
module.exports = {
    getRGB_Array
}
