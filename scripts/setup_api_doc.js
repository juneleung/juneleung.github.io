function work() {
  const filterInputEl = document.getElementById("filterInput");

  // const monthNames = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // function renderUpdatedTime() {
  //   const timestamps = window._apis.updatedTime;
  //   const date = new Date(timestamps);

  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   const day = date.getDate();

  //   document.getElementById(
  //     "updatedTime"
  //   ).innerText = `Updated as of ${day} ${monthNames[month]}, ${year}`;
  // }

  function renderApis() {
    const filterText = filterInputEl.value;
    const root = document.getElementById("apiDoc");
    root.innerHTML = "";

    const descs = !filterText
      ? window._apis.descriptions
      : window._apis.descriptions
          .map(function (desc) {
            return {
              ...desc,
              apis: desc.apis.filter(function (api) {

                const lowerCaseFilterText = filterText.toLowerCase();
                const lowerCaseFunctionDecl = api.functionDecl.toLowerCase();
                const lowerCaseReturnType = api.returnType.toLowerCase();
                const lowerCaseDescription = api.description.toLowerCase();

                return (
                  lowerCaseFunctionDecl.includes(lowerCaseFilterText) ||
                  lowerCaseReturnType.includes(lowerCaseFilterText) ||
                  lowerCaseDescription.includes(lowerCaseFilterText)
                  // api.functionDecl.includes(filterText) ||
                  // api.returnType.includes(filterText) ||
                  // api.description.includes(filterText)
                );
              }),
            };
          })
          .filter(function (desc) {
            return desc.apis.length;
          });

    if (!descs.length) {
      const notFoundEl = document.createElement("p");
      notFoundEl.innerText = "No such API";
      root.append(notFoundEl);
      return;
    }

    for (const desc of descs) {
      // section
      const sectionEl = document.createElement("div");
      sectionEl.className = "center";
      const titleEl = document.createElement("h3");
      titleEl.innerText = desc.section;
      sectionEl.append(document.createElement("hr"));
      sectionEl.append(titleEl);
      sectionEl.append(document.createElement("br"));

      root.append(sectionEl);
      // each api
      for (const api of desc.apis) {
        const functionDeclEl = document.createElement("span");
        functionDeclEl.innerText = api.functionDecl;
        const returnTypeEl = document.createElement("span");
        returnTypeEl.innerText = " --> " + api.returnType;
        const descriptionEl = document.createElement("span");
        descriptionEl.innerText = " % " + api.description;

        const apiEl = document.createElement("p");
        apiEl.append(functionDeclEl);
        apiEl.append(document.createElement("br"));
        apiEl.append(returnTypeEl);
        apiEl.append(document.createElement("br"));
        apiEl.append(descriptionEl);
        apiEl.append(document.createElement("br"));
        apiEl.append(document.createElement("br"));
        root.append(apiEl);
      }
    }
  }

  filterInputEl.onkeyup = function () {
    renderApis();
  };
  // renderUpdatedTime();
  renderApis();
}

work();
