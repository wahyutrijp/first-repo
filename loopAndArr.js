const loopAndArr = (params) => {
  let result = [];

  for (let i = 0; i < params.length; i++) {
    if (params[i] === "busy") {
      result.push("not ready");
    } else {
      result.push("already");
    }
  }

  return result;
};

console.log(loopAndArr(["busy", "body", "builder"]));