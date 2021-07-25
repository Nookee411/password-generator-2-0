/* eslint-disable no-param-reassign */
import random from 'lodash/random';

const ALPHABET = {
  lowercase: 'abcdefghijkmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
  digits: '123456789',
  signs: '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/',
  dualUppercase: 'OI',
  dualLowercase: 'l',
  dualDigits: 0,
};

const GeneratePassword = (config, length) => {
  const passwordAlphabet = Object.keys(config).reduce(
    (alphabet, configElement) => {
      if (config[configElement]) {
        if (configElement === 'dual') {
          alphabet += config.lowercase ? ALPHABET.dualLowercase : '';
          alphabet += config.uppercase ? ALPHABET.dualUppercase : '';
          alphabet += config.digits ? ALPHABET.dualDigits : '';
        } else {
          alphabet += ALPHABET[configElement];
        }
      }
      return alphabet;
    },
    '',
  );
  let password = '';
  for (let i = 0; i < length; i += 1) {
    password += passwordAlphabet[random(passwordAlphabet.length - 1)];
  }
  console.log(passwordAlphabet);
  return password;
};

export default GeneratePassword;
