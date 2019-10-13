module.exports = function zeros(expression) {
  let factors = expression.split('*');
  let fives = 0;
  let twos = 0;
  let value = 0;
  for (let i = 0; i < factors.length; i++) {
    let tmp_arr = factors[i].split('');
    if (tmp_arr[tmp_arr.length-1] == '!' && tmp_arr[tmp_arr.length-2] == '!') {
      if (Number(tmp_arr.slice(0, tmp_arr.length-2).join('')) % 2 == 0) {
        for (let j = 2; j <= Number(tmp_arr.slice(0, tmp_arr.length-2).join('')); j+=2) {
          if (j % 5 == 0) {
            value = j;
            while (value % 5 == 0){
              fives+=1;
              value /= 5;
            }
            value = 0;  
          }
          if (j % 2 == 0) {
            value = j;
            while (value % 2 == 0){
              twos+=1;
              value /= 2;
            }
            value = 0;  
          }
        }
      }
      else{
        for (let j = 1; j <= Number(tmp_arr.slice(0, tmp_arr.length-2).join('')); j+=2) {
          if (j % 5 == 0) {
            value = j;
            while (value % 5 == 0){
              fives+=1;
              value /= 5;
            }
            value = 0;  
          }
        }
      }
    }
    if (tmp_arr[tmp_arr.length-1] == '!' && tmp_arr[tmp_arr.length-2] != '!') {
      for (let j = 1; j <= Number(tmp_arr.slice(0, tmp_arr.length-1).join('')); j++) {
        if (j % 5 == 0) {
          value = j;
          while (value % 5 == 0){
            fives+=1;
            value /= 5;
          }
          value = 0;
        }
        if (j % 2 == 0) {
          value = j;
          while (value % 2 == 0){
            twos+=1;
            value /= 2;
          }
          value = 0;
        }
      }
    }    
  }
  if (fives < twos) {
    return fives;
  }
  else{
    return twos;
  }
}
