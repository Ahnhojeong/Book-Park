export function setDataForm(inData: any) {
  const dataList = Object.keys(inData);
  dataList.map((data: any) => {
    if (
      inData[data] === "" ||
      inData[data] === null ||
      // inData[data] === 0 ||
      inData[data] === undefined
    ) {
      delete inData[data];
    }
  });
  console.log("setDataForm inData ->", inData);
  return inData;
}

export function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}

export const debounce = (callback: any, duration: number) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};

export function decodeEntity(contents: string) {
  if (contents != undefined && contents != null && contents != "") {
    contents = contents.replaceAll(/&lt;/g, "<").replaceAll(/&gt;/g, ">");
  }
  return contents;
}
