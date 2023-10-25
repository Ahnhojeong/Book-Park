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
