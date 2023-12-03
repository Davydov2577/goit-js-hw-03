function slugify(title) {
  title = title.toLowerCase().split("");

  for (let i = 0; i < title.length; i += 1) {
    if (title[i] === " ") {
      title[i] = "-";
    }
  }

  return title.join("");
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
