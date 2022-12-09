export function validateNameRegex(name){
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!name.trim()) {
        return false;
      } else if (!regexName.test(name.trim())) {
        return  false;
      } else {
        return true;
      }

}
