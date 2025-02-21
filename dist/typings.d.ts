export declare namespace ImageMaskerTypes {
    interface InitParams {
        parentElement: string | HTMLElement;
        image: HTMLImageElement;
        padding?: string;
        background?: string;
    }
    interface Instance {
        enableDraw: boolean;
        mode: "draw" | "erase";
        shape: "free" | "rect" | "oval";
        brushSize: number;
        color: string;
        canvas?: HTMLCanvasElement;
        ctx?: CanvasRenderingContext2D;
        originalImage?: CanvasImageSource;
        imageData?: ImageData;
        width: number;
        height: number;
        undoAble: boolean;
        redoAble: boolean;
        undo: () => void;
        redo: () => void;
        clear: () => void;
        maskLayerToDataURL: () => Promise<string>;
        toDataURL: () => Promise<string>;
    }
}
