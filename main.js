async function getlan() {
    let res = await fetch(`https://libretranslate.de/languages`);
    let data = await res.json();
    appenddata(data);
  }
  getlan();
  
  function appenddata(arr) {
    let div = document.getElementById(`La`);
    arr.forEach((el) => {
      let o = document.createElement(`opt`);
      o.value = el.code;
      o.textContent = el.name;
      div.append(o);
    });
  }
  
  function getlang() {
    let val = document.getElementById(`La`).value;
    localStorage.setItem(`lang`, JSON.stringify(val));
    return val;
  }
  function getsum() {
    let log = document.getElementById("Box");
   
    return log.value;
  }
  async function translang() {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: getsum(),
        source: "en",
        target: getlang(),
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    let data = await res.json();
    let { translatedText } = data;
    resappend(translatedText);
  }
  
  function gettran() {
    let log = document.getElementById("Box");
    translang();
  }
  
  function resappend(data) {
    let result = document.getElementById(`Box2`);
    result.value = data;
  }