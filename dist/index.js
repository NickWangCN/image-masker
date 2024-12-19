'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

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
function initializeImageMasker(options) {
    return __awaiter(this, void 0, void 0, function* () {
        /** 是否正在绘制，根据鼠标按下/抬起/移动事件判断 */
        let isDrawing = false;
        const eraseColor = "rgba(0,0,0,1)";
        /** 运行参数 **/
        const settings = {
            mode: "draw",
            shape: "free",
            brushSize: 5,
            color: "rgba(255, 0, 0, 1)",
            width: 0,
            height: 0,
            undoAble: false,
            redoAble: false,
            undo,
            redo,
            toDataURL,
        };
        const undoStack = []; // 撤销栈
        const redoStack = []; // 重做栈
        /** 撤销 */
        function undo() {
            if (undoStack.length > 1) {
                // 将当前状态推入重做栈
                redoStack.push(undoStack.pop());
                // 从撤销栈中弹出上一个状态并恢复
                const imageData = undoStack[undoStack.length - 1];
                restoreImageData(imageData);
                // 状态管理
                settings.redoAble = true;
                settings.undoAble = undoStack.length > 1;
            }
        }
        /** 重做 */
        function redo() {
            if (redoStack.length > 0) {
                // 从重做栈中弹出当前状态并恢复
                const imageData = redoStack.pop();
                // 将当前状态推入撤销栈
                undoStack.push(imageData);
                restoreImageData(imageData);
                // 状态管理
                settings.redoAble = redoStack.length > 0;
                settings.undoAble = true;
            }
        }
        const canvasDocumentMouseDown = (event) => {
            if (!settings.canvas || !settings.ctx)
                return;
            if (event.button === 0) {
                isDrawing = true;
                startX = event.clientX - settings.canvas.getBoundingClientRect().left;
                startY = event.clientY - settings.canvas.getBoundingClientRect().top;
                // 根据模式选择不同的绘制函数
                switch (settings.shape) {
                    case "free":
                        settings.ctx.beginPath();
                        settings.ctx.moveTo(startX, startY);
                        break;
                    case "rect":
                        drawRect(event);
                        break;
                    case "oval":
                        drawOval(event);
                        break;
                }
            }
        };
        const canvasDocumentMouseMove = (event) => {
            if (isDrawing) {
                switch (settings.shape) {
                    case "free":
                        drawFree(event);
                        break;
                    case "rect":
                        drawRect(event);
                        break;
                    case "oval":
                        drawOval(event);
                        break;
                }
            }
        };
        const canvasDocumentMouseUp = (event) => {
            if (!settings.canvas || !settings.ctx)
                return;
            if (event.button === 0) {
                isDrawing = false;
                settings.imageData = settings.ctx.getImageData(0, 0, settings.width, settings.height);
                // 清空重做栈
                redoStack.length = 0;
                // 保存当前画布状态到撤销栈
                undoStack.push(settings.imageData);
                // 状态管理
                settings.redoAble = false;
                settings.undoAble = true;
            }
        };
        /**
         * 获取当前画布内容
         * 首先保存canvas状态，读取当前画布内容。
         * 然后先绘制原始图片，再绘制刚才读取的画布内容
         * 或者此时的画布内容，然后恢复canvas状态
         */
        function toDataURL() {
            return __awaiter(this, void 0, void 0, function* () {
                const promise = new Promise((resolve, reject) => {
                    if (!settings.canvas || !settings.ctx || !settings.originalImage) {
                        reject(new Error("Canvas or ctx or originalImage is not defined"));
                        return;
                    }
                    // 保存canvas状态
                    settings.ctx.save();
                    // 读取当前画布内容
                    const imageData = settings.canvas.toDataURL();
                    const tmpImage = new Image();
                    tmpImage.onload = () => {
                        // 绘制原始图片
                        settings.ctx.drawImage(settings.originalImage, 0, 0, settings.width, settings.height);
                        // 绘制刚才读取的画布内容
                        settings.ctx.drawImage(tmpImage, 0, 0);
                        // 读取当前画布内容
                        const result = settings.canvas.toDataURL();
                        // 恢复canvas状态
                        settings.ctx.restore();
                        resolve(result);
                    };
                    tmpImage.src = imageData;
                });
                return promise;
            });
        }
        let startX, startY;
        /** 恢复画布状态 */
        function restoreImageData(imageData) {
            if (imageData) {
                settings.imageData = imageData;
                settings.ctx.putImageData(imageData, 0, 0);
            }
        }
        /** 绘制自由绘画 */
        function drawFree(event) {
            if (!settings.canvas || !settings.ctx)
                return;
            // 保存当前的globalCompositeOperation
            const currentCompositeOperation = settings.ctx.globalCompositeOperation;
            if (settings.mode === "erase") {
                // 设置为擦除模式
                settings.ctx.globalCompositeOperation = "destination-out";
            }
            const rect = settings.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            settings.ctx.lineTo(x, y);
            settings.ctx.strokeStyle =
                settings.mode === "erase" ? eraseColor : settings.color;
            settings.ctx.lineWidth = settings.brushSize;
            settings.ctx.stroke();
            if (settings.mode === "erase") {
                // 恢复原来的globalCompositeOperation
                settings.ctx.globalCompositeOperation = currentCompositeOperation;
            }
        }
        /** 绘制矩形 */
        function drawRect(event) {
            if (!settings.canvas || !settings.ctx || !settings.imageData)
                return;
            // 保存当前的globalCompositeOperation
            const currentCompositeOperation = settings.ctx.globalCompositeOperation;
            if (settings.mode === "erase") {
                // 设置为擦除模式
                settings.ctx.globalCompositeOperation = "destination-out";
            }
            restoreImageData(settings.imageData);
            const rect = settings.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            settings.ctx.fillStyle =
                settings.mode === "erase" ? eraseColor : settings.color;
            const width = x - startX;
            const height = y - startY;
            settings.ctx.fillRect(startX, startY, width, height);
            if (settings.mode === "erase") {
                // 恢复原来的globalCompositeOperation
                settings.ctx.globalCompositeOperation = currentCompositeOperation;
            }
        }
        /** 绘制椭圆 */
        function drawOval(event) {
            if (!settings.canvas || !settings.ctx || !settings.imageData)
                return;
            restoreImageData(settings.imageData);
            // 保存当前的globalCompositeOperation
            const currentCompositeOperation = settings.ctx.globalCompositeOperation;
            if (settings.mode === "erase") {
                // 设置为擦除模式
                settings.ctx.globalCompositeOperation = "destination-out";
            }
            const rect = settings.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            settings.ctx.fillStyle =
                settings.mode === "erase" ? eraseColor : settings.color;
            settings.ctx.beginPath();
            settings.ctx.ellipse((startX + x) / 2, (startY + y) / 2, Math.abs(x - startX) / 2, Math.abs(y - startY) / 2, 0, 0, Math.PI * 2);
            settings.ctx.fill();
            if (settings.mode === "erase") {
                // 恢复原来的globalCompositeOperation
                settings.ctx.globalCompositeOperation = currentCompositeOperation;
            }
        }
        /** 初始化容器事件 */
        function initContainerEvents(container) {
            container.addEventListener("mousedown", (event) => {
                event.stopPropagation();
            });
            container.addEventListener("mousemove", (event) => {
                event.stopPropagation();
            });
            container.addEventListener("mouseup", (event) => {
                event.stopPropagation();
            });
            container.addEventListener("click", (event) => {
                event.stopPropagation();
            });
            container.addEventListener("mousedown", canvasDocumentMouseDown);
            container.addEventListener("mousemove", canvasDocumentMouseMove);
            container.addEventListener("mouseup", canvasDocumentMouseUp);
        }
        /** 创建一个canvas并绘制图片，可以指定最大高度或宽度*/
        function getCanvasImage(container, img, maxWidth, maxHeight) {
            return __awaiter(this, void 0, void 0, function* () {
                // 计算缩放比例
                const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
                const newWidth = img.width * scale;
                const newHeight = img.height * scale;
                // 创建canvas
                const canvas = document.createElement("canvas");
                canvas.style.backgroundImage = `url(${img.src})`;
                canvas.style.backgroundSize = "100% 100%";
                canvas.width = newWidth;
                canvas.height = newHeight;
                container.appendChild(canvas);
                // 获取上下文时设置willReadFrequently为true
                const ctx = canvas.getContext("2d", { willReadFrequently: true });
                container.appendChild(canvas);
                // 初始化容器事件
                initContainerEvents(container);
                return {
                    canvas,
                    ctx,
                    width: newWidth,
                    height: newHeight,
                    originalImage: img,
                };
            });
        }
        /** 获取元素的尺寸 */
        function getContentSize(element) {
            // 获取元素的边界矩形
            const rect = element.getBoundingClientRect();
            // 获取元素的所有计算后的样式
            const style = window.getComputedStyle(element);
            // 从计算后的样式中获取padding的值并转换为浮点数
            const paddingLeft = parseFloat(style.paddingLeft || "0");
            const paddingRight = parseFloat(style.paddingRight || "0");
            const paddingTop = parseFloat(style.paddingTop || "0");
            const paddingBottom = parseFloat(style.paddingBottom || "0");
            // 计算内容区域的宽度和高度
            const contentWidth = rect.width - (paddingLeft + paddingRight);
            const contentHeight = rect.height - (paddingTop + paddingBottom);
            return { width: contentWidth, height: contentHeight };
        }
        /** 如果parentElement是dom，则直��使用，否则使用id查找dom */
        const parentElement = options.parentElement instanceof HTMLElement
            ? options.parentElement
            : document.getElementById(options.parentElement);
        if (!parentElement) {
            throw new Error("Please provide a valid parent element");
        }
        /** 清理parentElement的子元素 */
        parentElement.innerHTML = "";
        /** 基于parentElement创建一个容器，与父元素同宽同高 */
        const container = document.createElement("div");
        container.style.background = options.background || "#000";
        container.style.padding = options.padding || "4px";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.width = parentElement.clientWidth + "px";
        container.style.height = parentElement.clientHeight + "px";
        container.style.flex = "1";
        parentElement.appendChild(container);
        const { width, height } = getContentSize(container);
        /** 创建Promise对象 */
        return new Promise((resolve) => {
            /** 计算图片大小，按画布大小等比例缩放，并计算居中显示时左上角的位置 */
            options.image.onload = function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const result = yield getCanvasImage(container, options.image, width, height);
                    settings.canvas = result.canvas; // 将canvas赋值给外部变量
                    settings.ctx = result.ctx; // 将ctx赋值给外部变量
                    settings.width = result.width; // 将宽度赋值给外部变量
                    settings.height = result.height; // 将高度赋值给外部变量
                    settings.originalImage = result.originalImage; // 将原始图片赋值给外部变量
                    // 保存初始状态
                    settings.imageData = settings.ctx.getImageData(0, 0, settings.width, settings.height);
                    undoStack.push(settings.imageData);
                    resolve(settings);
                });
            };
        });
    });
}

module.exports = initializeImageMasker;
