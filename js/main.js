$(document).ready(function () {
  let containerE1 = document.querySelector("#portfolio-projects");

  let mixer = mixitup(containerE1, {
    classNames: {
      block: "",
    },
  });

  const formRows = document.querySelectorAll(".input-wrapper");
  const formRowsInputs = document.querySelectorAll(".inputt");

  for (let i = 0; i < formRows.length; i++) {
    formRows[i].addEventListener("click", function () {
      const placeholderElement = this.querySelector(".fake-placeholder");
      placeholderElement.classList.add("active");
    });
  }

  // for (let i = 0; i < formRowsInputs.length; i++) {
  //   formRowsInputs[i].addEventListener("blur", function () {
  //     const thisParent = this.parentElement;

  //     if (this.value == "") {
  //       thisParent.querySelector("span").classList.remove("active");
  //     }
  //   });
  // }
});
