const testEmil = (value) => {
  //test
  const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
  return emailPattern.test(value);
};

const testCodeMelii = (value) => {
  // test
};

const testPhoneNumler = (value) => {
  // test
};

export default { testEmil, testCodeMelii, testPhoneNumler };
