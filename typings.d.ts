export declare namespace ImageMaskerTypes {
    interface InitParams {
        parentElement: string | HTMLElement;
        image: HTMLImageElement;
        padding?: string;
        background?: string;
    }
    interface Instance {
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
        maskLayerToDataURL: () => Promise<string>;
        toDataURL: () => Promise<string>;
    }
}
