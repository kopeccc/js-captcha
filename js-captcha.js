/**
 * jsCaptcha 1.0.2
 * Copyright (c) 2023 MTF Software (https://www.mtf.cz)
 * Licensed under the terms of the MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

class jsCaptcha {

  /**
   * Constructor
   * @param opts = {
   *    el: 'target input element selector; default: #js-captcha',
   *    font: 'captcha font name; default: Arial',
   *    fontHeight: 'font height in px; default: 40'
   *    fontColor: 'font color in hex format; default: #000000'
   *  }
   */
  constructor(opts) {
    this.el = document.querySelector(opts.el || '#js-captcha');
    if (this.el == null) {
      console.error("jsCaptcha: Target element not found!");
      return
    }
    opts.fontHeight = opts.fontHeight || 40;
    this.fontColor = opts.fontColor || '#000';
    this.canvas = document.createElement("canvas");
    this.canvas.width = opts.fontHeight * 3;
    this.canvas.height = opts.fontHeight + 10;
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.font = opts.fontHeight + 'px ' + opts.font || 'Arial';
    this.reset();
  }
  
  /**
   * The function refreshes the captcha task
   * @return void
   */
  reset() {
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let num1 = Math.round(Math.random() * 8) + 1;
    let num2 = Math.round(Math.random() * 8) + 1;
    this.sum = num1 + num2;
    let text = num1 + ' + ' + num2;
    let textWidth = this.canvasCtx.measureText(text).width;
    this.canvasCtx.strokeStyle = this.fontColor;
    this.canvasCtx.strokeText(text, (this.canvas.width/2) - (textWidth / 2), this.canvas.height - 10);
    this.el.parentNode.insertBefore(this.canvas, this.el);
  }
  
  /**
   * The function validates the captcha task
   * @return boolean
   */
  validate() {
    return this.el.value == this.sum;
  }

}
