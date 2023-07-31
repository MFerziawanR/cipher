function encryptText(text, shift) {
  if (shift < 0 || shift > 26) {
    throw new Error(
      "Jumlah shift tidak boleh lebih dari 26 atau kurang dari 0 !"
    );
  }

  var encryptedText = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (char.match(/[a-z]/i)) {
      var code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    encryptedText += char;
  }
  return encryptedText;
}

function getResult() {
  var inputText = document.getElementById("input").value;
  var outputText = document.getElementById("output").value;
  var shift = parseInt(document.getElementById("shift").value);
  var selectedOption = document.getElementById("options").value;

  if (selectedOption === "encrypt") {
    if (inputText !== outputText) {
      if (shift < 0 || shift > 26) {
        alert(
          "Terjadi kesalahan : Jumlah shift tidak boleh lebih dari 26 atau kurang dari 0 !"
        );
        document.getElementById("output").value = "";
        document.getElementById("shift").value = "0";
        return;
      } else if (isNaN(shift)) {
        shift = 0;
        document.getElementById("shift").value = "0";
      } else {
        try {
          var encryptedText = encryptText(inputText, shift);
          document.getElementById("output").value = encryptedText;
        } catch (error) {
          alert("Terjadi kesalahan : " + error.message);
          document.getElementById("output").value = "";
          document.getElementById("shift").value = "0";
        }
      }
    } else {
      if (shift < 0 || shift > 26) {
        alert(
          "Terjadi kesalahan : Jumlah shift tidak boleh lebih dari 26 atau kurang dari 0 !"
        );
        document.getElementById("output").value = "";
        document.getElementById("shift").value = "0";
      } else if (isNaN(shift)) {
        shift = 0;
        document.getElementById("shift").value = "0";
      }
      var decryptedText = encryptText(outputText, 26 - shift);
      document.getElementById("input").value = decryptedText;
    }
  } else if (selectedOption === "decrypt") {
    if (inputText !== outputText) {
      if (shift < 0 || shift > 26) {
        alert(
          "Terjadi kesalahan: Jumlah shift tidak boleh lebih dari 26 atau kurang dari 0 !"
        );
        document.getElementById("output").value = "";
        document.getElementById("shift").value = "0";
        return;
      } else if (isNaN(shift)) {
        shift = 0;
        document.getElementById("shift").value = "0";
      } else {
        try {
          var decryptedText = encryptText(inputText, 26 - shift);
          document.getElementById("output").value = decryptedText;
        } catch (error) {
          alert("Terjadi kesalahan: " + error.message);
          document.getElementById("output").value = "";
          document.getElementById("shift").value = "0";
        }
      }
    } else {
      if (shift < 0 || shift > 26) {
        alert(
          "Terjadi kesalahan : Jumlah shift tidak boleh lebih dari 26 atau kurang dari 0 !"
        );
        document.getElementById("output").value = "";
        document.getElementById("shift").value = "0";
      } else if (isNaN(shift)) {
        shift = 0;
        document.getElementById("shift").value = "0";
      }
      var encryptedText = encryptText(outputText, shift);
      document.getElementById("input").value = encryptedText;
    }
  }
}

function swapText() {
  var inputText = document.getElementById("input").value;
  var outputText = document.getElementById("output").value;

  document.getElementById("input").value = outputText;
  document.getElementById("output").value = inputText;
  getResult();
}

function clearText() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
  document.getElementById("shift").value = "0";
}
