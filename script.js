'use strict';

let newGenPass;
const pswdOptions = document.querySelectorAll('.pswd-options');
const pswdLevels = document.querySelectorAll('.levels-check');

let pswdBox = document.querySelector('.pswd-box');
let pswdLength = document.querySelector('.pswd-length').value;
let onlyAlphabet = 'abcdefghijklmnopqrstuvwxyz';
let onlyNumbers = '0123456789';
let theSymbols = '!?@#+%&()';

let ncharacters = `${onlyAlphabet}` + `${onlyNumbers}${theSymbols}`;
const strngA = function (characters, length) {
  let result = '';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
pswdBox.value = strngA(ncharacters, pswdLength);

//REUSEABLE FUNCTIONS
//for password with Capital letter
const passwordWithCapital = function (inputLength) {
  const upLength = '';
  for (let i = 0; i < pswdLevels.length; i++)
    if (pswdLevels[2].checked === true) {
      const startwithCap = strngA(onlyAlphabet, 2);
      newGenPass =
        startwithCap[0].toUpperCase() + strngA(ncharacters, inputLength - 1);
      pswdBox.value = newGenPass;
    }
};
//To generate new password based on length selection

const defaultGenerator = function () {
  document
    .querySelector('.pswd-length')
    .addEventListener('change', function () {
      const upLength = document.querySelector('.pswd-length').value;
      newGenPass = strngA(ncharacters, upLength);
      pswdBox.value = newGenPass;
      passwordWithCapital(upLength);
    });
};
defaultGenerator();

//by options
const genPaswdByStrongOptions = function () {
  for (let i = 0; i < pswdOptions.length; i++) {
    pswdOptions[i].checked = 'true';
    pswdOptions[2].disabled = false;
    pswdOptions[3].disabled = false;
    pswdOptions[4].disabled = false;
    pswdOptions[i].addEventListener('click', function () {
      const passgL = document.querySelector('.pswd-length').value;
      let startwithAl = '';

      if (
        pswdOptions[i] === pswdOptions[0] &&
        pswdOptions[0].checked === true
      ) {
        ncharacters = onlyAlphabet;
        newGenPass = strngA(ncharacters, passgL);
        pswdBox.value = newGenPass;
      } else if (
        pswdOptions[i] === pswdOptions[1] &&
        pswdOptions[1].checked === true
      ) {
        ncharacters = `${onlyAlphabet}${onlyNumbers}`;
        newGenPass = strngA(ncharacters, passgL);
        pswdBox.value = newGenPass;
      } else if (
        pswdOptions[i] === pswdOptions[2] &&
        pswdOptions[2].checked === true
      ) {
        ncharacters = `${onlyAlphabet}${onlyNumbers}${theSymbols}`;
        newGenPass = strngA(ncharacters, passgL);
        pswdBox.value = newGenPass;
      } else if (
        pswdOptions[i] === pswdOptions[3] &&
        pswdOptions[3].checked === true
      ) {
        startwithAl = `${strngA(onlyAlphabet, 2)}`;
        newGenPass = `${startwithAl}` + strngA(ncharacters, passgL - 2);
        pswdBox.value = newGenPass;
      } else if (
        pswdOptions[i] === pswdOptions[4] &&
        pswdOptions[4].checked === true
      ) {
        const startwithCap = strngA(onlyAlphabet, 2);
        newGenPass =
          startwithCap[0].toUpperCase() + strngA(ncharacters, passgL - 1);
        pswdBox.value = newGenPass;
      } else {
        ncharacters = `${onlyAlphabet}${onlyNumbers}`;
        newGenPass = strngA(ncharacters, passgL);
        pswdBox.value = newGenPass;
      }
    });
  }
};

//by password level
for (let i = 0; i < pswdLevels.length; i++) {
  pswdLevels[i].addEventListener('click', function () {
    const passgLeength = document.querySelector('.pswd-length').value;
    if (pswdLevels[i] === pswdLevels[0] && pswdLevels[0].checked === true) {
      pswdLevels[1].checked = false;
      pswdLevels[2].checked = false;
      ncharacters = `${onlyAlphabet}${onlyNumbers}`;
      pswdBox.value = strngA(ncharacters, passgLeength);
      defaultGenerator();
      for (let i = 0; i < pswdOptions.length; i++) {
        pswdOptions[0].checked = true;
        pswdOptions[1].checked = true;
        pswdOptions[2].disabled = true;
        pswdOptions[3].disabled = true;
        pswdOptions[4].disabled = true;
        pswdOptions[i].addEventListener('click', function () {
          if (
            pswdOptions[i] === pswdOptions[0] &&
            pswdOptions[0].checked === true
          ) {
            ncharacters = onlyAlphabet;
          } else if (
            pswdOptions[i] === pswdOptions[1] &&
            pswdOptions[1].checked === true
          ) {
            ncharacters = `${onlyAlphabet}${onlyNumbers}`;
          } else {
            ncharacters = onlyAlphabet;
          }

          newGenPass = strngA(ncharacters, passgLeength);
          pswdBox.value = newGenPass;
        });
      }
    } else if (
      pswdLevels[i] === pswdLevels[1] &&
      pswdLevels[1].checked === true
    ) {
      pswdLevels[0].checked = false;
      pswdLevels[2].checked = false;
      ncharacters = `${onlyAlphabet}${onlyNumbers}${theSymbols}`;
      pswdBox.value = strngA(ncharacters, passgLeength);
      defaultGenerator();
      for (let i = 0; i < pswdOptions.length; i++) {
        pswdOptions[0].checked = true;
        pswdOptions[1].checked = true;
        pswdOptions[2].checked = true;
        pswdOptions[2].disabled = false;
        pswdOptions[3].disabled = true;
        pswdOptions[4].disabled = true;
        pswdOptions[i].addEventListener('click', function () {
          if (
            pswdOptions[i] === pswdOptions[0] &&
            pswdOptions[0].checked === true
          ) {
            ncharacters = onlyAlphabet;
          } else if (
            pswdOptions[i] === pswdOptions[1] &&
            pswdOptions[1].checked === true
          ) {
            ncharacters = `${onlyAlphabet}${onlyNumbers}`;
          } else if (
            pswdOptions[i] === pswdOptions[2] &&
            pswdOptions[2].checked === true
          ) {
            ncharacters = `${onlyAlphabet}${onlyNumbers}${theSymbols}`;
          } else {
            ncharacters = `${onlyAlphabet}`;
          }
          newGenPass = strngA(ncharacters, passgLeength);
          pswdBox.value = newGenPass;
        });
      }
    } else if (
      pswdLevels[i] === pswdLevels[2] &&
      pswdLevels[2].checked === true
    ) {
      pswdLevels[0].checked = false;
      pswdLevels[1].checked = false;
      if (pswdLevels[2].checked === true && pswdLevels[2].value === 'strong') {
        const startwithCap = strngA(onlyAlphabet, 2);
        newGenPass =
          startwithCap[0].toUpperCase() + strngA(ncharacters, passgLeength - 1);
        pswdBox.value = newGenPass;
        defaultGenerator();
        genPaswdByStrongOptions();
      }
    } else {
      ncharacters = `${onlyAlphabet}`;
      newGenPass = strngA(ncharacters, passgLeength);
      pswdBox.value = newGenPass;
      for (let i = 0; i < pswdOptions.length; i++) {
        pswdOptions[i].checked = false;
      }
    }
  });
}

//
const genButton = function () {
  document.querySelector('.btn-gen').addEventListener('click', function () {
    const getTheLength = document.querySelector('.pswd-length').value;
    pswdBox.value = strngA(ncharacters, getTheLength);
    passwordWithCapital(getTheLength);
  });
};
genButton();

//
const infoIcon = document.querySelectorAll('.info-icon');
for (let i = 0; i < infoIcon.length; i++) {
  console.log(infoIcon[i]);
  infoIcon[i].addEventListener('mouseover', function () {
    const infoName = document.querySelector('#infoText');
    console.log(infoName);
  });
}

//to copy text
const copyBoxText = function () {
  const textToCopy = document.querySelector('.pswd-box');
  textToCopy.select();
  document.execCommand('copy');
};
document.querySelector('.btn-copy').addEventListener('click', copyBoxText);
