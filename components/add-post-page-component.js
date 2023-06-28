
import { renderUploadImageComponent } from "./upload-image-component.js";
import { renderHeaderComponent } from "./header-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    let postImageUrl = '';

    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
        <div class="header-container"></div>
        <div class="form">
                <h3 class="form-title">
                Добавить пост
                </h3>
                <div class="form-inputs">
                <div class="upload-image-container">
                <label class="file-upload-label secondary-button">
                <input
                  type="file"
                  class="file-upload-input"
                  style="display:none"
                />
                <p id="photoSelection">Выберите фото</p>
            </label>
            </div>
                <div>
                  Описание фотографии
                  <textarea class="input textarea" rows="5" id="postTextInput" value =''></textarea>
                </div>
                  <div class="form-error"></div>
                  <button class="button" id="add-button">Добавить</button>
                  </div>
                </div>
      </div>`
  ;

    appEl.innerHTML = appHtml;

    const addPostButton = document.getElementById('add-button');

// __________________________________________________
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
// ____________________________________________________________


    document.getElementById("add-button").addEventListener("click", () => {
      const postTextInputEl = document.getElementById('postTextInput').value;
      // const photoSelectionEl = document.getElementById('photoSelection');
//       if (!postImageUrl){
//         alert('Загрузи фотку')
// return
//       }
//       if (!postTextInputEl){
//         alert('Напишите описание фотографии')
// return
//       }
      onAddPostClick({
        description: postTextInputEl,
        imageUrl: postImageUrl,
      })

    });
  };

  render();
}
