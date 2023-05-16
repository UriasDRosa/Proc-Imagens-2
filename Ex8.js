const imgA = document.getElementById("img-A");

const labelA = document.getElementById("label-A");
labelA.addEventListener("click", function () {});

const imgB = document.getElementById("img-B");

const labelB = document.getElementById("label-B");
labelB.addEventListener("click", function () {});

const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");

const defaultCanvasW = canvas1.width;
const defaultCanvasH = canvas1.height;

const context1 = canvas1.getContext("2d");
const context2 = canvas2.getContext("2d");
const context3 = canvas3.getContext("2d");

imgA.addEventListener("change", function () {
  const image = new Image();
  image.onload = function () {
    canvas1.width = image.width;
    canvas1.height = image.height;
    context1.drawImage(image, 0, 0);
  };
  image.src = URL.createObjectURL(this.files[0]);
});

imgB.addEventListener("change", function () {
  const image = new Image();
  image.onload = function () {
    canvas2.width = image.width;
    canvas2.height = image.height;
    context2.drawImage(image, 0, 0);
  };
  image.src = URL.createObjectURL(this.files[0]);
});

function Adicao() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = imageData1.data[i] + imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] + imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] + imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function Subtracao() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = imageData1.data[i] - imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] - imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] - imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function Multiplicacao() {
  let InpMulti = document.getElementById("valor-mult");
  let valor = InpMulti.value;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

  if (canvas1.width == 300) {
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    for (let i = 0; i < imageData2.data.length; i += 4) {
      imageData3.data[i] = imageData2.data[i] * valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData2.data[i + 1] * valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData2.data[i + 2] * valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] * valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData1.data[i + 1] * valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData1.data[i + 2] * valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    context3.putImageData(imageData3, 0, 0);
  }
}

function Divisao() {
  let InpMulti = document.getElementById("valor-div");
  let valor = InpMulti.value;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

  if (canvas1.width == 300) {
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    for (let i = 0; i < imageData2.data.length; i += 4) {
      imageData3.data[i] = imageData2.data[i] / valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData2.data[i + 1] / valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData2.data[i + 2] / valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] / valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData1.data[i + 1] / valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData1.data[i + 2] / valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    context3.putImageData(imageData3, 0, 0);
  }
}

function Media() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = (imageData1.data[i] + imageData2.data[i]) / 2;
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] =
      (imageData1.data[i + 1] + imageData2.data[i + 1]) / 2;
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] =
      (imageData1.data[i + 2] + imageData2.data[i + 2]) / 2;
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function Blending() {
  let InpMulti = document.getElementById("valor-blen");
  let valor = InpMulti.value;

  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] =
      valor * imageData1.data[i] + (1 - valor) * imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] =
      valor * imageData1.data[i + 1] + (1 - valor) * imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] =
      valor * imageData1.data[i + 2] + (1 - valor) * imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function AND() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    gray =
      (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
      3;
    if (gray >= 128) {
      imageData1.data[i] = 255;
      imageData1.data[i + 1] = 255;
      imageData1.data[i + 2] = 255;
      imageData1.data[i + 3] = 255;
    } else {
      imageData1.data[i] = 0;
      imageData1.data[i + 1] = 0;
      imageData1.data[i + 2] = 0;
      imageData1.data[i + 3] = 255;
    }
    gray =
      (imageData2.data[i] + imageData2.data[i + 1] + imageData2.data[i + 2]) /
      3;
    if (gray >= 128) {
      imageData2.data[i] = 255;
      imageData2.data[i + 1] = 255;
      imageData2.data[i + 2] = 255;
      imageData2.data[i + 3] = 255;
    } else {
      imageData2.data[i] = 0;
      imageData2.data[i + 1] = 0;
      imageData2.data[i + 2] = 0;
      imageData2.data[i + 3] = 255;
    }

    imageData3.data[i] = imageData1.data[i] & imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] & imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] & imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function OR() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    gray =
      (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
      3;
    if (gray >= 128) {
      imageData1.data[i] = 255;
      imageData1.data[i + 1] = 255;
      imageData1.data[i + 2] = 255;
      imageData1.data[i + 3] = 255;
    } else {
      imageData1.data[i] = 0;
      imageData1.data[i + 1] = 0;
      imageData1.data[i + 2] = 0;
      imageData1.data[i + 3] = 255;
    }
    gray =
      (imageData2.data[i] + imageData2.data[i + 1] + imageData2.data[i + 2]) /
      3;
    if (gray >= 128) {
      imageData2.data[i] = 255;
      imageData2.data[i + 1] = 255;
      imageData2.data[i + 2] = 255;
      imageData2.data[i + 3] = 255;
    } else {
      imageData2.data[i] = 0;
      imageData2.data[i + 1] = 0;
      imageData2.data[i + 2] = 0;
      imageData2.data[i + 3] = 255;
    }

    imageData3.data[i] = imageData1.data[i] | imageData2.data[i];

    imageData3.data[i + 1] = imageData1.data[i + 1] | imageData2.data[i + 1];

    imageData3.data[i + 2] = imageData1.data[i + 2] | imageData2.data[i + 2];

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function XOR() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    gray =
      (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
      3;
    if (gray >= 128) {
      imageData1.data[i] = 255;
      imageData1.data[i + 1] = 255;
      imageData1.data[i + 2] = 255;
      imageData1.data[i + 3] = 255;
    } else {
      imageData1.data[i] = 0;
      imageData1.data[i + 1] = 0;
      imageData1.data[i + 2] = 0;
      imageData1.data[i + 3] = 255;
    }
    gray =
      (imageData2.data[i] + imageData2.data[i + 1] + imageData2.data[i + 2]) /
      3;
    if (gray >= 128) {
      imageData2.data[i] = 255;
      imageData2.data[i + 1] = 255;
      imageData2.data[i + 2] = 255;
      imageData2.data[i + 3] = 255;
    } else {
      imageData2.data[i] = 0;
      imageData2.data[i + 1] = 0;
      imageData2.data[i + 2] = 0;
      imageData2.data[i + 3] = 255;
    }

    imageData3.data[i] = imageData1.data[i] ^ imageData2.data[i];

    imageData3.data[i + 1] = imageData1.data[i + 1] ^ imageData2.data[i + 1];

    imageData3.data[i + 2] = imageData1.data[i + 2] ^ imageData2.data[i + 2];

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function NOT() {
  let MAX = 255;
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

  if (canvas1.width == 300) {
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    for (let i = 0; i < imageData2.data.length; i += 4) {
      gray =
        (imageData2.data[i] + imageData2.data[i + 1] + imageData2.data[i + 2]) /
        3;

      if (gray >= 128) {
        imageData3.data[i] = 0;
        imageData3.data[i + 1] = 0;
        imageData3.data[i + 2] = 0;
        imageData3.data[i + 3] = 255;
      } else {
        imageData3.data[i] = 255;
        imageData3.data[i + 1] = 255;
        imageData3.data[i + 2] = 255;
        imageData3.data[i + 3] = 255;
      }
    }
    context3.putImageData(imageData3, 0, 0);
  } else {
    const imageData1 = context1.getImageData(
      0,
      0,
      canvas1.width,
      canvas1.height
    );

    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    for (let i = 0; i < imageData1.data.length; i += 4) {
      gray =
        (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
        3;

      if (gray >= 128) {
        imageData3.data[i] = 0;
        imageData3.data[i + 1] = 0;
        imageData3.data[i + 2] = 0;
        imageData3.data[i + 3] = 255;
      } else {
        imageData3.data[i] = 255;
        imageData3.data[i + 1] = 255;
        imageData3.data[i + 2] = 255;
        imageData3.data[i + 3] = 255;
      }
    }
    context3.putImageData(imageData3, 0, 0);
  }
}

function SalvarImg() {
  const nomeArquivo = "Imagem Salva.png";
  const conteudoArquivo = canvas3.toDataURL("Imagem_Salva/png");

  const linkDownload = document.createElement("a");
  linkDownload.download = nomeArquivo;
  linkDownload.href = canvas3.toDataURL("Imagem_Salva/png");

  document.body.appendChild(linkDownload);
  linkDownload.click();

  document.body.removeChild(linkDownload);
}

function OneBit() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    let imageDataGray =
      (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
      3;
    if (imageDataGray < 128) {
      imageData3.data[i] = 0;
      imageData3.data[i + 1] = 0;
      imageData3.data[i + 2] = 0;
    } else {
      imageData3.data[i] = 255;
      imageData3.data[i + 1] = 255;
      imageData3.data[i + 2] = 255;
    }
    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);

  if (canvas1.width == 300) {
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;

    const imageData2 = context2.getImageData(
      0,
      0,
      canvas2.width,
      canvas2.height
    );
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    for (let i = 0; i < imageData2.data.length; i += 4) {
      let imageDataGray =
        (imageData2.data[i] + imageData2.data[i + 1] + imageData2.data[i + 2]) /
        3;
      if (imageDataGray < 128) {
        imageData3.data[i] = 0;
        imageData3.data[i + 1] = 0;
        imageData3.data[i + 2] = 0;
      } else {
        imageData3.data[i] = 255;
        imageData3.data[i + 1] = 255;
        imageData3.data[i + 2] = 255;
      }
      imageData3.data[i + 3] = 255;
    }

    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;

    const imageData1 = context1.getImageData(
      0,
      0,
      canvas1.width,
      canvas1.height
    );
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      let imageDataGray =
        (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
        3;
      if (imageDataGray > 255) imageDataGray = 255;
      if (imageDataGray < 0) imageDataGray = 0;

      if (imageDataGray < 128) {
        imageData3.data[i] = 0;
        imageData3.data[i + 1] = 0;
        imageData3.data[i + 2] = 0;
      } else {
        imageData3.data[i] = 255;
        imageData3.data[i + 1] = 255;
        imageData3.data[i + 2] = 255;
      }
      imageData3.data[i + 3] = 255;
    }

    context3.putImageData(imageData3, 0, 0);
  }
}

function EightBit() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    let imageDataGray =
      (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
      3;
    if (imageDataGray > 255) imageDataGray = 255;
    if (imageDataGray < 0) imageDataGray = 0;

    imageData3.data[i] = imageDataGray;
    imageData3.data[i + 1] = imageDataGray;
    imageData3.data[i + 2] = imageDataGray;
    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);

  if (canvas1.width == 300) {
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    const imageData2 = context2.getImageData(
      0,
      0,
      canvas2.width,
      canvas2.height
    );
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData2.data.length; i += 4) {
      let imageDataGray =
        (imageData2.data[i] + imageData2.data[i + 1] + imageData2.data[i + 2]) /
        3;
      if (imageDataGray > 255) imageDataGray = 255;
      if (imageDataGray < 0) imageDataGray = 0;

      imageData3.data[i] = imageDataGray;
      imageData3.data[i + 1] = imageDataGray;
      imageData3.data[i + 2] = imageDataGray;
      imageData3.data[i + 3] = 255;
    }

    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    const imageData1 = context1.getImageData(
      0,
      0,
      canvas1.width,
      canvas1.height
    );
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      let imageDataGray =
        (imageData1.data[i] + imageData1.data[i + 1] + imageData1.data[i + 2]) /
        3;
      if (imageDataGray > 255) imageDataGray = 255;
      if (imageDataGray < 0) imageDataGray = 0;

      imageData3.data[i] = imageDataGray;
      imageData3.data[i + 1] = imageDataGray;
      imageData3.data[i + 2] = imageDataGray;
      imageData3.data[i + 3] = 255;
    }

    context3.putImageData(imageData3, 0, 0);
  }
}

let numberInp = document.getElementById("number-input");
let numberValue;
function numberChange() {
  numberValue = Number(numberInp.value);
  if (numberValue > 250) {
    numberValue = 250;
    numberInp.value = 250;
  }
  if (numberValue < 0) {
    numberValue = 0;
    numberInp.value = 0;
  }
}
function BrilhoH() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = imageData1.data[i] + numberValue;
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] + numberValue;
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] + numberValue;
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function BrilhoL() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = imageData1.data[i] - numberValue;
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] - numberValue;
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] - numberValue;
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

function Negativo() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = 255 - imageData1.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = 255 - imageData1.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = 255 - imageData1.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  context3.putImageData(imageData3, 0, 0);
}

// Criando Histograma
function Histograma() {
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const pixels = imageData1.data;
  // Cria vetores para os valores de cada canal de cor e alpha
  const redValues = new Array(256).fill(0);
  const greenValues = new Array(256).fill(0);
  const blueValues = new Array(256).fill(0);
  const alphaValues = new Array(256).fill(0);
  // Percorre a matriz de pixels e conta a ocorrência de cada valor de cada canal de cor e alpha
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    const alpha = pixels[i + 3];
    redValues[red]++;
    greenValues[green]++;
    blueValues[blue]++;
    alphaValues[alpha]++;
  }
  // Desenha o histograma em outro elemento Canvas
  const histogramCanvas = document.getElementById("canvas4");
  const histogramContext = histogramCanvas.getContext("2d");

  histogramCanvas.width = canvas1.width;
  histogramCanvas.height = canvas1.height;

  histogramContext.clearRect(
    0,
    0,
    histogramCanvas.width,
    histogramCanvas.height
  );
  const barWidth = histogramCanvas.width / 256;
  for (let i = 0; i < 256; i++) {
    histogramContext.fillStyle = `rgba(${i}, 0, 0, 1)`;
    histogramContext.fillRect(
      i * barWidth,
      histogramCanvas.height - redValues[i],
      barWidth,
      redValues[i]
    );
    console.log(
      `X: ${i * barWidth}, Y: ${
        histogramCanvas.height - redValues[i]
      }, Largura: ${barWidth}, Altura: ${redValues[i]}`
    );
    histogramContext.fillStyle = `rgba(0, ${i}, 0, 1)`;
    histogramContext.fillRect(
      i * barWidth,
      histogramCanvas.height - greenValues[i],
      barWidth,
      greenValues[i]
    );
    histogramContext.fillStyle = `rgba(0, 0, ${i}, 1)`;
    histogramContext.fillRect(
      i * barWidth,
      histogramCanvas.height - blueValues[i],
      barWidth,
      blueValues[i]
    );
    histogramContext.fillStyle = `rgba(0, 0, 0, ${i / 255})`;
    histogramContext.fillRect(
      i * barWidth,
      histogramCanvas.height - alphaValues[i],
      barWidth,
      alphaValues[i]
    );
  }
  histogramContext.strokeStyle = "#000";
  histogramContext.strokeRect(
    0,
    0,
    histogramCanvas.width,
    histogramCanvas.height
  );
}

function NormalizarHist() {
  var canvas1 = document.getElementById("canvas1");
  var context1 = canvas1.getContext("2d");
  var imgData = context1.getImageData(0, 0, canvas1.width, canvas1.height);

  var hist = new Array(256).fill(0);
  for (var i = 0; i < imgData.data.length; i += 4) {
    var intensity = Math.round(
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    );
    hist[intensity]++;
  }

  var sum = hist.reduce((a, b) => a + b);
  var normHist = hist.map((val) => val / sum);

  var cdf = [];
  var acc = 0;
  for (var i = 0; i < normHist.length; i++) {
    acc += normHist[i];
    cdf.push(acc);
  }

  var newImgData = context1.createImageData(canvas1.width, canvas1.height);
  for (var i = 0; i < imgData.data.length; i += 4) {
    var intensity = Math.round(
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    );
    var equalizedIntensity = Math.round(cdf[intensity] * 255);
    newImgData.data[i] = equalizedIntensity;
    newImgData.data[i + 1] = equalizedIntensity;
    newImgData.data[i + 2] = equalizedIntensity;
    newImgData.data[i + 3] = imgData.data[i + 3];
  }

  var canvas3 = document.getElementById("canvas3");
  var context3 = canvas3.getContext("2d");
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;
  context3.putImageData(newImgData, 0, 0);
}

function filterMax() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);

  const data = imageData1.data;
  const filteredData = imageData3.data;

  for (let y = 0; y < canvas1.height; y++) {
    for (let x = 0; x < canvas1.width; x++) {
      const index = (y * canvas1.width + x) * 4;
      let max = 0;

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const neighborIndex = ((y + dy) * canvas1.width + x + dx) * 4;
          const neighborValue = data[neighborIndex];

          if (neighborValue > max) {
            max = neighborValue;
          }
        }
      }

      filteredData[index] = max;
      filteredData[index + 1] = max;
      filteredData[index + 2] = max;
      filteredData[index + 3] = 255;
    }
  }
  context3.putImageData(imageData3, 0, 0);
}

function filterMax() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);

  const data = imageData1.data;
  const filteredData = imageData3.data;

  for (let y = 0; y < canvas1.height; y++) {
    for (let x = 0; x < canvas1.width; x++) {
      const index = (y * canvas1.width + x) * 4;
      let max = 0;

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const neighborIndex = ((y + dy) * canvas1.width + x + dx) * 4;
          const neighborValue = data[neighborIndex];

          if (neighborValue > max) {
            max = neighborValue;
          }
        }
      }

      filteredData[index] = max;
      filteredData[index + 1] = max;
      filteredData[index + 2] = max;
      filteredData[index + 3] = 255;
    }
  }
  context3.putImageData(imageData3, 0, 0);
}

function filterMin() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);

  const data = imageData1.data;
  const filteredData = imageData3.data;

  for (let y = 0; y < canvas1.height; y++) {
    for (let x = 0; x < canvas1.width; x++) {
      const index = (y * canvas1.width + x) * 4;
      let min = 255;

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const neighborIndex = ((y + dy) * canvas1.width + x + dx) * 4;
          const neighborValue = data[neighborIndex];

          if (neighborValue < min) {
            min = neighborValue;
          }
        }
      }

      filteredData[index] = min;
      filteredData[index + 1] = min;
      filteredData[index + 2] = min;
      filteredData[index + 3] = 255;
    }
  }
  context3.putImageData(imageData3, 0, 0);
}

function filterMean() {

  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);

  const data = imageData1.data;
  const filteredData = imageData3.data;

  for (let y = 0; y < canvas1.height; y++) {
    for (let x = 0; x < canvas1.width; x++) {
      const index = (y * canvas1.width + x) * 4;
      let media = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const neighborIndex = ((y + dy) * canvas1.width + x + dx) * 4;
          const neighborValue = data[neighborIndex];

          media += neighborValue;
        }
      }
      media = media/9;

      if(media > 255) media = 255;

      filteredData[index] = media;
      filteredData[index + 1] = media;
      filteredData[index + 2] = media;
      filteredData[index + 3] = 255;
    }
  }
  context3.putImageData(imageData3, 0, 0);
}
