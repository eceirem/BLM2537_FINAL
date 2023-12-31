var currentImageIndex = 0;
var images = [
  "images/banner.png",
  "images/banner2.png",
  "images/banner3.jpeg",
  "images/banner4.png",
  "images/banner5.jpg",
  "images/banner6.jpg",
];
function showOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.style.opacity = "1";
}

function hideOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.style.opacity = "0";
}

function randomBanner() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  var img = document.getElementById("myImage");
  img.src = images[currentImageIndex];
}

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  var img = document.getElementById("myImage");
  img.src = images[currentImageIndex];
}

window.onload = function () {
  randomBanner(); // Sayfa yüklendiğinde ilk olarak random banner'ı göstermeli sonra değiştirmeli sırasıyla
  setInterval(function () {
    changeImage();
  }, 3000);
};

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
  var bmh = 0;

  if (Radio.value === "female") {
    bmh = bmh_woman;
    document.getElementById("sonuc").innerHTML =
      bmh_woman.toFixed(2).toString() + " kcal";
  } else if (Radio.value === "male") {
    bmh = bmh_man;
    document.getElementById("sonuc").innerHTML =
      bmh_man.toFixed(2).toString() + " kcal";
  }
}

function contactButton() {
  alert(
    "Bilgileriniz alınmıştır. En yakın sürede sizlerle iletişime geçilecektir."
  );
}
function contactButtonReset() {
  document.getElementById("form").reset();
}

function suggestExercise() {
  // Kullanıcının girdiği değerleri aldım
  const age = parseInt(document.getElementById("age").value);
  const bmi = parseFloat(document.getElementById("bmi").value);
  const hasSurgery = document.getElementById("surgery").checked;

  // Egzersiz önerisi atring içerisinde olacak youtube linkleri koyacağım
  let exerciseSuggestion = "";

  if (age >= 50 || bmi > 28 || hasSurgery) {
    exerciseSuggestion = "https://youtu.be/DYuw4f1c4xs?si=8GL01u-Ya3He-mrn";
  } else if (!hasSurgery && bmi > 23) {
    exerciseSuggestion = "https://youtu.be/1vRto-2MMZo?si=j96QVW6KJ07zMVMp";
  } else if (!hasSurgery && bmi <= 23) {
    exerciseSuggestion = "https://youtu.be/zETooQn2jps?si=12SQ4sjbZGwYc23X";
  }
  window.open(exerciseSuggestion, "_blank");
}
