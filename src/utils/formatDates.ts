export const reverseDateStrings = (oldDate : string) => {
    let dateArr = oldDate.substring(0, oldDate.indexOf("T")).split("-");
    let newArrString:string = "";
    for( let i  = dateArr.length - 1 ; i >= 0; i--  ) {
      ( i == 0 ) ? newArrString += dateArr[i]+"" : newArrString += dateArr[i]+"-"
    }
    return newArrString;
}