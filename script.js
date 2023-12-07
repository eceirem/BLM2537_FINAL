var currentImageIndex = 0;
var images = ["images/banner.png", "images/banner2.png"];
function showOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.style.opacity = "1";
}

function hideOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.style.opacity = "0";
}

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  var img = document.getElementById("myImage");
  img.src = images[currentImageIndex];
  // Overlay'i gizle
  hideOverlay();
}

function calculateBMI() {
  var yas = Number(document.getElementById("yas").value);
  var boy = Number(document.getElementById("boy").value / 100);
  var kilo = Number(document.getElementById("kilo").value);
  var bmi = kilo / (boy * boy);
  var bmi_sonuc;
  if (19 <= yas && yas <= 24) {
    if (19 <= bmi && bmi <= 24) {
      bmi_sonuc = "Normal";
    } else if (bmi < 19) {
      bmi_sonuc = "Zayıf";
    } else {
      bmi_sonuc = "Obez";
    }
  }
  if (25 <= yas && yas <= 34) {
    if (19 <= bmi && bmi <= 24) {
      bmi_sonuc = "Normal";
    } else if (bmi < 19) {
      bmi_sonuc = "Zayıf";
    } else {
      bmi_sonuc = "Obez";
    }
  }
  if (45 <= yas && yas <= 54) {
    if (19 <= bmi && bmi <= 24) {
      bmi_sonuc = "Normal";
    } else if (bmi < 19) {
      bmi_sonuc = "Zayıf";
    } else {
      bmi_sonuc = "Obez";
    }
  }
  if (55 <= yas && yas <= 64) {
    if (19 <= bmi && bmi <= 24) {
      bmi_sonuc = "Normal";
    } else if (bmi < 19) {
      bmi_sonuc = "Zayıf";
    } else {
      bmi_sonuc = "Obez";
    }
  }
  if (65 <= yas) {
    if (19 <= bmi && bmi <= 24) {
      bmi_sonuc = "Normal";
    } else if (bmi < 19) {
      bmi_sonuc = "Zayıf";
    } else {
      bmi_sonuc = "Obez";
    }
  }
  document.getElementById("sonuc").innerHTML =
    bmi_sonuc.toString() + " " + bmi.toFixed(2).toString();
}
