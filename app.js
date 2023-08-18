let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {
    // gets the country name and saves it to the variable "countryInp"
  let countryInp = document.getElementById("country-inp").value;

    // edits the url to contain the country name from the input
  let finalURL = `https://restcountries.com/v3.1/name/${countryInp}?fullText=true`;

// Http request that returns the country data and saves it to the variable "country_data"
  let country_data = await fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      return data
    });

    // Changes the innerHTML of the div with the id "result", so that I can show the country information in the html file
    document.getElementById("result").innerHTML = `<img src="${country_data[0].flags.svg}"
    class= "flag-img">
    <h2>${country_data[0].name.common}</h2>
    <div class="wrapper">
            <div class="data-wrapper">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(country_data[0].
                                    languages)
                                    .toString()
                                    .split(",")
                                    .join(", ") } </span>
            </div>
    </div>
    `;
});

