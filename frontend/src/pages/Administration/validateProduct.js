export function validateNameRegex(name){
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!name.trim()) {
        return true;
      } else if (!regexName.test(name.trim())) {
        return  false;
      } else {
        return true;
      }

}
