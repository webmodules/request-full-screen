"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setFullScreen;

function setFullScreen(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
}

module.exports = exports["default"];

