const form = document.getElementById('1');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("يرجي ملء حقل التحقق")
        return
    }
});

