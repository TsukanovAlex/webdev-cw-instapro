import { getToken, renderApp } from "./index.js";
import { userActiveLike } from "./api.js";


export function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}


export function getUserFromLocalStorage(user) {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export function removeUserFromLocalStorage(user) {
  window.localStorage.removeItem("user");
}

//  Likes
export function userLike(arr) {
  const token = getToken();
  const likeButtonElements = document.querySelectorAll('.like-button');
  for (const likeButtonEl of likeButtonElements) {
    likeButtonEl.addEventListener('click', () =>{
      if (token) {
        likeButtonEl.classList.add('loadLikes')
        const index = likeButtonEl.dataset.index;
        return userActiveLike({
          likeId: likeButtonEl.dataset.postId, 
          token: getToken(),
          activeLike: arr[index].isLiked,
        })
        .then((newPost)=> {
          arr[index] = newPost;
          renderApp();
        })
      } else {
        console.log("Нет авторизации");
      }
    })
    
  }
}
// функция защиты ввода данных
export const protectionHtml = (string) => {
  return string
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
};

// функция формата времени
export const dataFormat = (commentDate) => {
  const dateComment = new Date(commentDate);
  const formatDate =
    dateComment.getDate().toString().padStart(2, '0') + '.' +
    (dateComment.getMonth() + 1).toString().padStart(2, '0') + '.' +
    dateComment.getFullYear().toString().slice(-2) + ' ' +
    dateComment.getHours().toString().padStart(2, '0') + ':' +
    dateComment.getMinutes().toString().padStart(2, '0');
    return formatDate;
  }
