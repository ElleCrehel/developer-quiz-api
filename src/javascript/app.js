// 1) CONSTANTS
const allCategories = document.querySelectorAll(".btnCategories");
const categoriePage = document.querySelector(".categories");
const difficultyPage = document.querySelector(".difficulty");
const buttongoToDifficulty = document.querySelector(".goToDifficulty")

// 2) NAVIAGTE BETWEEN PAGES
const pages = [categoriePage, difficultyPage];

// function for navigating trough pages 
const changeScreen = (destinationScreen) => {
  destinationScreen.classList.remove("hidden");

  pages.map(page => {
    if (page !== destinationScreen) {
      page.classList.add("hidden");
    }
  })
}

// 3) SELECT DIFFICULTY
for (buttons of allCategories) {
  buttons.addEventListener('click', async function () {
    // console.log(this.innerHTML)

    /*Put the chosen categorie in localstorage*/
    localStorage.setItem('Categorie', this.innerHTML);

    /*Put the chosen categorie in a dynamic variable*/
    let storeCategorie = localStorage.getItem('Categorie')
    console.log(`Je koos voor de categorie: ${storeCategorie}`)

     await devQuizApi();
    /* Check if there is a categorie selected */
    if (storeCategorie === null) {
      console.log('choose an option first')
    } else {
      buttongoToDifficulty.addEventListener('click', function () {
        changeScreen(difficultyPage)
      })
    }
  });
}








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