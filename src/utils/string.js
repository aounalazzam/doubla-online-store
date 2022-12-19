/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
