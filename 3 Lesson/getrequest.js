// Переделать в ДЗ не fetch!!!!! а new Promise()
/*
let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) { //if done
        if (xhr.status !== 200) { //HTTP (200 - успешно
          console.log('Error');
        } else {
          cb(xhr.responseText);
        }
      }
    };
    xhr.send();
  };
  */
 function getRequest(url) {
    return new Promise ((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject (xhr.responseText);
        } else {
          resolve (xhr.responseText)
        }
      }
    };
  xhr.send ();
  });
}