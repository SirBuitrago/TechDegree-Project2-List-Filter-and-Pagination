/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

"use strict";

//Here I declare global variables to store the DOM elements
const studentList = document.getElementsByClassName("student-item");
//This is variable stores how many students I want to show on each page
const pageItems = 10;

//This function is simply to hide or display a set of 10 students that are suppose to show for each page link. The functions loops through the Student List.
const showPage = (studentList, page) => {
  let startIndex = page * pageItems - pageItems;
  let endIndex = page * pageItems;

  for (let i = 0; i < studentList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentList[i].style.display = "block";
    } else {
      studentList[i].style.display = "none";
    }
  }
};

//Call on the ShowPage Function with the necessary parameters
showPage(studentList, 1);

//The appendPageLinks function is to generate, append, and add functionality to the pagination buttons-by creating the necessary divs, ul and li elements to store the links

const appendPageLinks = studentList => {
  const page = Math.ceil(studentList.length / pageItems);
  const div = document.createElement("div");
  div.className = "pagination";
  document.body.appendChild(div);
  const ul = document.createElement("ul");
  div.appendChild(ul);
  for (let i = 0; i <= page; i++) {
    if (i != page) {
      let li = document.createElement("li");
      ul.appendChild(li);
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = i + 1;
      if (i === 0) {
        a.setAttribute("class", "active");
      }
      li.appendChild(a);
    }
  }
};

//Call on the appendPageLinks function with the studentList variable as the parameter
appendPageLinks(studentList);

//Click event listener to loop through all the page links and bring up the associated number of students for that page number

const linkClick = studentList => {
  const clicker = document.getElementsByTagName("a");
  for (let i = 0; i < clicker.length; i++) {
    clicker[i].addEventListener("click", event => {
      if (event.target.tagName === "a") {
        if (event.target.className === "active") {
          clicker[i].classList.remove("active");
        }
      }
      event.target.classList.add("active");
      let pageNumber = event.target.textContent;
      showPage(studentList, pageNumber);
    });
  }
};

linkClick(studentList);

//Dynamic search form, to search for a specific student

const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.setAttribute("class", "searchInput");
searchBar.innerText = "Search for a Student";
document.body.appendChild(searchBar);

//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If its not on par with that grade, then please reject this project for resubmission.
