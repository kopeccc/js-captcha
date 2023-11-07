# js-captcha
Very simple javascript captcha.

Usage:
```
<script src="js-captcha.js"></script>
<input id="jsCaptcha" placeholder="Enter result" required="true"/>
<script>
  let captcha = new jsCaptcha({ el: '#jsCaptcha' });
  if (captcha.validate()) {
    alert("Captcha OK");
    captcha.reset();
  } else {
    alert("Captcha error!");
    captcha.reset();
  }
</script>
```

Options:
```
{
  el: 'target input element selector; default: #js-captcha',
  font: 'captcha font name; default: Arial',
  fontHeight: font height in px; default: 40
  fontColor: 'font color in hex format; default: #000000'
}
```
