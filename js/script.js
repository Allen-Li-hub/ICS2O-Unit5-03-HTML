// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-HTML/sw.js", {
    scope: "/ICS2O-Unit5-03-HTML/",
  })
}

function calculate() {
  const age = document.getElementById("age").value

  if (age >= 18) {
    document.getElementById("answers").innerHTML =
      "You can see G, PG and R rated movies!"
  } else if (age >= 13) {
    document.getElementById("answers").innerHTML =
      "You can see G and PG rated movies!"
  } else if (age >= 5) {
    document.getElementById("answers").innerHTML = "You can see G rated movies!"
  } else {
    document.getElementById("answers").innerHTML =
      "you can hardly watch any movies"
  }
  console.log("Thanks for verifying you're age!")
}
