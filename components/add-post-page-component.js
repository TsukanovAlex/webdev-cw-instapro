
import { renderUploadImageComponent } from "./upload-image-component.js";
import { renderHeaderComponent } from "./header-component.js";
import { protectionHtml } from "../helpers.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    let postImageUrl = '';
    // Реализована страницу добавления поста
    const appHtml = `
    <div class="page-container">
        <div class="header-container"></div>
        <div class="form">
                <h3 class="form-title">
                Добавить пост
                </h3>
                <div class="form-inputs">
                <div class="upload-image-container">
            </div>
                <label>
                  Описание фотографии
                  <textarea class="input textarea" rows="5" id="textPost"></textarea>
                </label>
                  <div class="form-error"></div>
                  <button class="button" id="add-button">Добавить</button>
                  </div>
                </div>
      </div>`;

    appEl.innerHTML = appHtml;

    const setError = (message) => {
      appEl.querySelector(".form-error").textContent = message;
    };
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    const uploadImageContainer = appEl.querySelector(".upload-image-container");

    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          postImageUrl = newImageUrl;
        },
      });
    }
  
    document.getElementById("add-button").addEventListener("click", () => {
      const textPost = document.getElementById('textPost').value;
      onAddPostClick({
        description: protectionHtml(textPost),
        imageUrl: postImageUrl,
      });
    });
  };
  render();
}
