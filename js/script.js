// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-03-JS/sw.js", {
    scope: "/Unit-5-03-JS/",
  })
}

"use strict"

function myButtonClicked() {
  const age = document.getElementById("age").value

  if (age >= 17) {
    document.getElementById("answers").innerHTML =
      "You can see an R movie alone."
  } else if (age >= 13) {
    document.getElementById("answers").innerHTML =
      "You can see a PG-13 movie alone"
  } else if (age >= 5) {
    document.getElementById("answers").innerHTML =
      "You can see a G or PG movie alone."
  } else {
    document.getElementById("answers").innerHTML =
      "Uh. your too young for most things."
  }
  console.log("Thanks for verifying you're age!")
}
