declare module ImageMaskerTypes {
  // 绘制参数
  interface InitParams {
    // 父元素
    parentElement: string | HTMLElement;
    // 背景图片
    image: HTMLImageElement;
    // 背景图片填充
    padding?: string;
    // 背景颜色
    background?: string;
  }

  // 绘制设置
  interface Instance {
    // 绘画模式：涂抹(draw)、橡皮擦(erase)
    mode: "draw" | "erase";
    // 形状：自由(free)、矩形(rect)、椭圆(oval)
    shape: "free" | "rect" | "oval";
    // 默认画笔大小
    brushSize: number;
    // 默认画笔颜色
    color: string;
    // 画布
    canvas?: HTMLCanvasElement;
    // 画布上下文
    ctx?: CanvasRenderingContext2D;
    // 原始图片
    originalImage?: CanvasImageSource;
    // 画布图片数据
    imageData?: ImageData;
    // 画布宽度
    width: number;
    // 画布高度
    height: number;
    // 是否可撤销
    undoAble: boolean;
    // 是否可重做
    redoAble: boolean;
    // 撤销
    undo: () => void;
    // 重做
    redo: () => void;
    // 导出遮罩层
    maskLayerToDataURL: () => Promise<string>;
    // 导出图片
    toDataURL: () => Promise<string>;
  }
}
