let M = 400;
let N = 400;

let matrizA = [];
let matrizB = [];
let matrizC = [];

let ShowMatriz = "";

function geraMatrizA() {
  for (let i = 0; i < M; i++) {
    matrizA[i] = [];
    for (let j = 0; j < N; j++) {
      matrizA[i][j] = Math.round(Math.random() * 255);
    }
  }
  console.log(`Matriz A: `);
  ShowMatriz = "";
  for (let i = 0; i < M; i++) {
    if (i >= 1) ShowMatriz += "\n";
    for (let j = 0; j < N; j++) {
      ShowMatriz += `${matrizA[i][j]} `;
    }
  }
  console.log(ShowMatriz);
}

function geraMatrizB() {
  for (let i = 0; i < M; i++) {
    matrizB[i] = [];
    for (let j = 0; j < N; j++) {
      matrizB[i][j] = Math.round(Math.random() * 256);
    }
  }
  console.log(`Matriz B: `);
  ShowMatriz = "";
  for (let i = 0; i < M; i++) {
    if (i >= 1) ShowMatriz += "\n";
    for (let j = 0; j < N; j++) {
      ShowMatriz += `${matrizB[i][j]} `;
    }
  }
  console.log(ShowMatriz);
}

function somaMatrizes() {
  for (let i = 0; i < M; i++) {
    matrizC[i] = [];
    for (let j = 0; j < N; j++) {
      matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
      if (matrizC[i][j] > 255) matrizC[i][j] = 255;

      if (matrizC[i][j] < 0) matrizC[i][j] = 0;
    }
  }
  ShowMatriz = "";
  console.log(`Matriz C ou Matriz Soma: `);
  for (let i = 0; i < M; i++) {
    if (i >= 1) ShowMatriz += "\n";
    for (let j = 0; j < N; j++) {
      ShowMatriz += `${matrizC[i][j]} `;
    }
  }
  console.log(ShowMatriz);
}

geraMatrizA();

geraMatrizB();

somaMatrizes();

// modifica o elemento canvas no html
const canvas = document.getElementById("canvas");
canvas.width = M * 3;
canvas.height = N;

// Mostra matriz A


// obtem o contexto 2D do canvas
const ctx = canvas.getContext("2d");

const width = (M * 3);
const height = N;

// desenha a imagem na tela
const imageDataA = ctx.createImageData(width, height);
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    const index = (i * width + j) * 4;
    const value = matrizA[i][j];
    imageDataA.data[index + 0] = value; // componente vermelho
    imageDataA.data[index + 1] = value; // componente verde
    imageDataA.data[index + 2] = value; // componente azul
    imageDataA.data[index + 3] = 255; // componente alpha
  }
}
ctx.putImageData(imageDataA, 0, 0);

// desenha a imagem na tela
const imageDataB = ctx.createImageData(width, height);
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    const index = (i * width + j) * 4;
    const value = matrizB[i][j];
    imageDataB.data[index + 0] = value; // componente vermelho
    imageDataB.data[index + 1] = value; // componente verde
    imageDataB.data[index + 2] = value; // componente azul
    imageDataB.data[index + 3] = 255; // componente alpha
  }
}
ctx.putImageData(imageDataB, width/3 + ((width/3)*(0.03)), 0);

const imageDataC = ctx.createImageData(width, height);
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    const index = (i * width + j) * 4;
    const value = matrizC[i][j];
    imageDataC.data[index + 0] = value; // componente vermelho
    imageDataC.data[index + 1] = value; // componente verde
    imageDataC.data[index + 2] = value; // componente azul
    imageDataC.data[index + 3] = 255; // componente alpha
  }
}
ctx.putImageData(imageDataC, ((width/3)*2) + (((width/3)*2)*(0.03)), 0);


// salva a imagem em formato PNG
link.download = "Imagem_Matrizes.png";
link.href = canvas.toDataURL("Imagem_Matrizes/png");
link.addEventListener(link, click());
