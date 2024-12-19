import ImageMasker from "../index";

document.addEventListener("DOMContentLoaded", () => {
  let masker: any;

  const imageInput = document.getElementById("imageInput") as HTMLInputElement;
  const uploadArea = document.querySelector(".upload-area") as HTMLDivElement;
  const maskerElement = document.getElementById("masker") as HTMLDivElement;

  // 设置监听器
  document.getElementById("brushSize")?.addEventListener("change", (e) => {
    if (masker) {
      masker.brushSize = (e.target as HTMLInputElement).value;
    }
  });

  document.getElementById("mode")?.addEventListener("change", (e) => {
    if (masker) {
      masker.mode = (e.target as HTMLSelectElement).value;
    }
  });

  document.getElementById("shape")?.addEventListener("change", (e) => {
    if (masker) {
      masker.shape = (e.target as HTMLSelectElement).value;
    }
  });

  document.getElementById("undo")?.addEventListener("click", () => {
    masker?.undo();
  });

  document.getElementById("redo")?.addEventListener("click", () => {
    masker?.redo();
  });

  document.getElementById("preview")?.addEventListener("click", async () => {
    if (masker) {
      const dataURL = await masker.toDataURL();
      const preview = document.getElementById("masker-preview");
      if (preview) {
        preview.innerHTML = "";
        const img = new Image();
        img.src = dataURL;
        preview.appendChild(img);
      }
    }
  });

  document.getElementById("maskOnly")?.addEventListener("click", async () => {
    if (masker) {
      const dataURL = await masker.maskLayerToDataURL();
      const preview = document.getElementById("masker-preview");
      if (preview) {
        preview.innerHTML = "";
        const img = new Image();
        img.src = dataURL;
        preview.appendChild(img);
      }
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
    const files = (e.target as HTMLInputElement).files;
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
    reader.onload = async (e) => {
      if (e.target?.result) {
        const image = new Image();
        image.src = e.target.result as string;
        const options = {
          parentElement: maskerElement,
          image,
        };
        masker = await ImageMasker(options);
      }
    };
    reader.readAsDataURL(file);
  }
});
