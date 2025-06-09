import { ImageMaskerTypes } from "./typings";
/**
 * 图形标注工具器
 *
 * 在指定的div中使用canvas绘制指定图片，然后用户可以在图片上使用自由涂抹、矩形、椭圆三种方式进行区域标注
 * 可以使用橡皮擦消除涂抹内容
 * 并返回最终的画布内容。该工具用于多模态模型图生图的局部区域修改标注。
 *
 * @param ImageMaskerTypes.InitParams options - 配置参数
 * @return ImageMaskerTypes.Instance - 绘图对象
 */
declare function initializeImageMasker(options: ImageMaskerTypes.InitParams): Promise<ImageMaskerTypes.Instance>;
export default initializeImageMasker;
