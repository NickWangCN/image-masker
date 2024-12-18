# Image Masker

![GitHub](https://img.shields.io/github/license/NickWangCN/image-masker)
![npm](https://www.npmjs.com/package/@nick_cn/image-masker)
![GitHub last commit](https://img.shields.io/github/last-commit/NickWangCN/image-masker)

一个用于图片遮罩的工具组件。支持自由绘制、矩形、椭圆等多种遮罩方式，并提供撤销、重做等功能。

## 安装

```bash
npm install @nickw_cn/image-masker
```

## 功能特点

- 🎨 多种遮罩模式：涂抹和擦除
- ✏️ 多种绘制形状：自由绘制、矩形、椭圆
- ↩️ 支持撤销/重做操作
- 🖼️ 支持预览结果
- 📱 响应式设计，支持移动端

## 使用方法

```ts
import ImageMasker from "@nickw_cn/image-masker";

// 创建图片实例
const image = new Image();
image.src = "your-image-url";
// 配置选项
const options = {
  parentElement: "container-id", // 容器元素的ID
  image, // 图片实例
  padding: "4px", // 内边距
};
// 初始化遮罩器
ImageMasker(options).then((masker) => {
  // 设置绘制模式
  masker.mode = "draw"; // 'draw' | 'erase'
  // 设置绘制形状
  masker.shape = "free"; // 'free' | 'rect' | 'oval'
  // 撤销操作
  masker.undo();
  // 重做操作
  masker.redo();
  // 获取处理后的图片
  masker.toDataURL().then((dataUrl) => {
    console.log(dataUrl);
  });
});
```

## API

### 初始化选项

| 参数          | 类型             | 必填 | 描述                       |
| ------------- | ---------------- | ---- | -------------------------- |
| parentElement | string           | 是   | 容器元素的 ID              |
| image         | HTMLImageElement | 是   | 要处理的图片实例           |
| padding       | string           | 否   | 容器内边距，默认为'4px'    |
| background    | string           | 否   | 容器背景颜色，默认为'#000' |

### 实例属性

| 属性      | 类型                       | 描述                                      |
| --------- | -------------------------- | ----------------------------------------- |
| mode      | 'draw' \| 'erase'          | 设置操作模式：涂抹或擦除                  |
| shape     | 'free' \| 'rect' \| 'oval' | 设置绘制形状：自由、矩形、椭圆            |
| brushSize | number                     | 设置画笔大小，默认为 5                    |
| color     | string                     | 设置画笔颜色，默认为 'rgba(255, 0, 0, 1)' |

### 实例方法

| 方法        | 返回值                | 描述                     |
| ----------- | --------------------- | ------------------------ |
| undo()      | void                  | 撤销上一步操作           |
| redo()      | void                  | 重做上一步操作           |
| toDataURL() | Promise&lt;string&gt; | 获取处理后的图片数据 URL |

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT © [nickw_cn](mailto:nickw_cn@163.com)
