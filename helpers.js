import { getToken } from "./index.js";

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
// export function userLike(arr) {
//   const token = getToken();
//   const likeButtonElements = document.querySelectorAll('.like-button');
//   for (const likeButtonEl of likeButtonElements) {
//     if (token) {
//       likeButtonElements.classList.add('loadLikes')
//       const index = likeButtonElements.dataset.index;
//       return userActiveLike({likeId: likeButtonElements})
//     }
//   }
// }