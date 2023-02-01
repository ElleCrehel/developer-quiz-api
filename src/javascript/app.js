// CONSTANTS:
const catLinux = document.querySelector(".Linux");
const catBASH = document.querySelector(".BASH");
const catPHP = document.querySelector(".PHP");
const catDocker = document.querySelector(".Docker");
const catHTML = document.querySelector(".HTML");
const catMySQL = document.querySelector(".MySQL");
const catWordPress = document.querySelector(".WordPress");
const catLaravel = document.querySelector(".Laravel");
const catKubernetes = document.querySelector(".Kubernetes");
const catJavascript = document.querySelector(".Javascript");
const catDevOps = document.querySelector(".DevOps");

// SELECT DIFFICULTY

// FETCH API
const devQuizApi = async () => {
  let url = new URL("https://quizapi.io/api/v1/questions");
  let params = {
      apiKey: "mJ81K6LQBRLnEo1KU5FM8aKi8EmCsPDEUdvySj8o",
      difficulty: localStorage.getItem('Difficulty') || '',
      category: localStorage.getItem('Categorie') || '',
      limit: localStorage.getItem('Limit') || '',
  };
  url.search = new URLSearchParams(params).toString();
  try {
      let res = await fetch(url);
      let data = await res.json();
      return data
  } catch (err) {
      console.log('deze combinatie is niet mogelijk sorry')
  }

}

devQuizApi()