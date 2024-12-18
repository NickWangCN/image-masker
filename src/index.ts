import ImageMasker from "./ImageMasker/index";
import type ImageMaskerTypes from "./ImageMasker/typings";

let masker: ImageMaskerTypes.Instance | undefined;

// 声明全局类型
declare global {
  interface Window {
    handleSettingChange: (
      key: keyof ImageMaskerTypes.Instance,
      value: any
    ) => void;
    handleAction: (action: "undo" | "redo" | "preview") => void;
  }
}

// 将函数挂载到window对象
window.handleSettingChange = function (
  key: keyof ImageMaskerTypes.Instance,
  value: any
) {
  if (masker) {
    (masker as any)[key] = value;
  }
};

window.handleAction = async function (action: "undo" | "redo" | "preview") {
  if (masker) {
    if (action !== "preview") {
      (masker as any)[action]();
    } else {
      const dataURL = await (masker as any).toDataURL();
      const preview = document.getElementById("masker-preview");
      if (preview) {
        preview.innerHTML = "";
        const img = new Image();
        img.src = dataURL;
        preview.appendChild(img);
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput") as HTMLInputElement;
  const uploadArea = document.querySelector(".upload-area") as HTMLDivElement;
  const actionsBox = document.getElementById("masker-actions-box");

  // 显示控制面板
  function showActionsBox() {
    if (actionsBox) {
      actionsBox.style.display = "initial";
    }
  }

  // 监听设置变更
  actionsBox?.addEventListener("change", (e) => {
    const target = e.target as HTMLSelectElement;
    const setting = target.dataset.setting;
    if (setting && masker) {
      (masker as any)[setting] = target.value;
    }
  });

  // 处理文件选择
  imageInput.addEventListener("change", handleImageSelect);

  // 处理拖拽上传
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = "#000";
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.style.borderColor = "#ccc";
  });

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = "#ccc";

    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      handleImage(files[0]);
    }
  });

  function handleImageSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files && files[0]) {
      handleImage(files[0]);
    }
  }

  function handleImage(file: File) {
    if (!file.type.startsWith("image/")) {
      alert("请选择图片文件！");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const imageString = e.target?.result as string;
        console.log(imageString);
        const image = new Image();
        image.src = imageString;
        const options = {
          parentElement: "masker",
          image,
          padding: "4px",
        };
        ImageMasker(options).then((res) => {
          masker = res;
          showActionsBox();
        });
      }
    };
    reader.readAsDataURL(file);
  }
});
