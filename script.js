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
    if (bmi < 19) {
      bmi_sonuc = "Zayıf";
    } else if (19 <= bmi && bmi <= 24) {
      bmi_sonuc = "Normal";
    } else if (24 < bmi && bmi <= 30) {
      bmi_sonuc = "Fazla kilolu";
    } else if (30 < bmi && bmi <= 35) {
      bmi_sonuc = "OBEZ (1. dereceden obez)";
    } else if (35 < bmi && bmi <= 40) {
      bmi_sonuc = "AŞIRI OBEZ (2. dereceden obez)";
    } else if (bmi <= 40) {
      bmi_sonuc = "MORBİD OBEZ (3. dereceden obez)";
    }
  } else if (25 <= yas && yas <= 34) {
    if (bmi < 20) {
      bmi_sonuc = "Zayıf";
    } else if (20 <= bmi && bmi <= 25) {
      bmi_sonuc = "Normal";
    } else if (25 < bmi && bmi <= 30) {
      bmi_sonuc = "Fazla kilolu";
    } else if (30 < bmi && bmi <= 35) {
      bmi_sonuc = "OBEZ (1. dereceden obez)";
    } else if (35 < bmi && bmi <= 40) {
      bmi_sonuc = "AŞIRI OBEZ (2. dereceden obez)";
    } else if (bmi <= 40) {
      bmi_sonuc = "MORBİD OBEZ (3. dereceden obez)";
    }
  }
  if (45 <= yas && yas <= 54) {
    if (bmi < 22) {
      bmi_sonuc = "Zayıf";
    } else if (22 <= bmi && bmi <= 27) {
      bmi_sonuc = "Normal";
    } else if (27 < bmi && bmi <= 32) {
      bmi_sonuc = "Fazla kilolu";
    } else if (32 < bmi && bmi <= 37) {
      bmi_sonuc = "OBEZ (1. dereceden obez)";
    } else if (37 < bmi && bmi <= 42) {
      bmi_sonuc = "AŞIRI OBEZ (2. dereceden obez)";
    } else if (bmi <= 42) {
      bmi_sonuc = "MORBİD OBEZ (3. dereceden obez)";
    }
  }
  if (55 <= yas && yas <= 64) {
    if (bmi < 23) {
      bmi_sonuc = "Zayıf";
    } else if (23 <= bmi && bmi <= 28) {
      bmi_sonuc = "Normal";
    } else if (28 < bmi && bmi <= 33) {
      bmi_sonuc = "Fazla kilolu";
    } else if (33 < bmi && bmi <= 38) {
      bmi_sonuc = "OBEZ (1. dereceden obez)";
    } else if (38 < bmi && bmi <= 43) {
      bmi_sonuc = "AŞIRI OBEZ (2. dereceden obez)";
    } else if (bmi <= 43) {
      bmi_sonuc = "MORBİD OBEZ (3. dereceden obez)";
    }
  }
  if (65 <= yas) {
    if (bmi < 24) {
      bmi_sonuc = "Zayıf";
    } else if (24 <= bmi && bmi <= 29) {
      bmi_sonuc = "Normal";
    } else if (29 < bmi && bmi <= 34) {
      bmi_sonuc = "Fazla kilolu";
    } else if (34 < bmi && bmi <= 39) {
      bmi_sonuc = "OBEZ (1. dereceden obez)";
    } else if (35 < bmi && bmi <= 39.9) {
      bmi_sonuc = "AŞIRI OBEZ (2. dereceden obez)";
    } else if (bmi <= 40) {
      bmi_sonuc = "MORBİD OBEZ (3. dereceden obez)";
    }
  }
  document.getElementById("sonuc").innerHTML =
    bmi_sonuc.toString() + " " + bmi.toFixed(2).toString();
}

function calculateBMH() {
  var yas = Number(document.getElementById("yas").value);
  var boy = Number(document.getElementById("boy").value / 100);
  var kilo = Number(document.getElementById("kilo").value);
  var Radio = document.querySelector('input[name="gender"]:checked');
  var bmh_woman = 655.1 + 9.56 * kilo + 1.85 * boy - 4.68 * yas;
  var bmh_man = 66.5 + 13.75 * kilo + 5.03 * boy - 6.75 * yas;
  var bmh_sonuc;
  var bmh;

  if (
    Radio &&
    Radio.value === "female" &&
    1000 < bmh_woman &&
    bmh_woman < 1400
  ) {
    bmh = bmh_woman;
    bmh_sonuc = "ideal bazal metabolizma hızı";
  } else if (
    Radio &&
    Radio.value === "male" &&
    1200 < bmh_man &&
    bmh_man < 1600
  ) {
    bmh = bmh_man;
    bmh_sonuc = "ideal bazal metabolizma hızı";
  } else {
    bmh_sonuc =
      "ideal bazal metabolizma hızı aralığında değilsiniz. Doktora danışınız!";
  }

  document.getElementById("sonuc").innerHTML =
    bmh_sonuc.toString() + " " + bmh.toFixed(2).toString();
}
