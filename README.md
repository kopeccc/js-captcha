# js-captcha
Very simple javascript captcha.

Usage:
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
