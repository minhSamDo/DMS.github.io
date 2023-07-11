const login = document.querySelector(".loginButton");
login.addEventListener('click', () => {
  if (document.querySelector(".form-box-registation").style.display != "none") {
    document.querySelector(".form-box-registation").style.display = "none";
    document.querySelector(".overlay").style.pointerEvents = "auto";
  }
  if (document.querySelector(".form-box").classList.contains('active')) {
    // console.log('The class name contains "active"');
    document.querySelector(".form-box").classList.remove('active');

    document.querySelector(".overlay").style.zIndex = 2;
    document.querySelector(".form-box").style.zIndex = 0;
    document.querySelector(".overlay").style.pointerEvents = "auto";
  } else {
    document.querySelector(".form-box").classList.add('active');
    document.querySelector(".overlay").style.zIndex = 0;
    document.querySelector(".form-box").style.zIndex = 2;
    document.querySelector(".overlay").style.pointerEvents = "none";
    console.log(document.querySelector(".overlay").style.pointerEvents)
  }

})
