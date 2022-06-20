export function getCountProductsFavorite() {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  return favorite ? favorite.favoriteProducts.length : 0;
}
