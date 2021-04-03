document.title = "This is my terminal portfolio";

let pattern = /\s/g; // whitespace check
let icon = "\u{1F449}"; // icon
let insetData = document.getElementById("insetData");

insetData.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (pattern.test(e.target.value) || e.target.value === "") {
      e.target.value = `null`
      wrongMessage(e.target, `Please type a command!`);
      createInput();
    } else if (e.target.value.toLowerCase() === "help") {
      let p = `${icon} About (See my all info)
      ${icon} Image (See my Picture)
      ${icon} Skills (See my skills)
      ${icon} Contact (See contact list)
      ${icon} Clear (Clear all terminal)
      All command type would be case-sensitive`;
      createElement(e.target, p, "help");
      createInput();
    } else if (e.target.value.toLowerCase() === "about") {
      let p = `Assalamualaikum... Developers!
      I am Minhaj Sadik. I am a FullStack Developer Student`;
      createElement(e.target, p, "about");
      createInput();
    } else if (e.target.value.toLowerCase() === "skills") {
      let p = `My Skills: 
      ${icon} HTML+ HTML5 
      ${icon} CSS + CSS3 
      ${icon} JavaScript + Vanilla Js
      ${icon} Bootstrap 4 and 5
      ${icon} git & github
      ${icon} Sass = panding...
      ${icon} MySql panding...
      ${icon} React.js & Node.js panding...
      ${icon} TypeScript panding...
      ${icon} PhP panding...
      ${icon} Python panding...
      ${icon} Future Skills C Was Also Pending....`;
      createElement(e.target, p, "skills");
      createInput();
    } else if (e.target.value.toLowerCase() === "contact") {
      let p = `${icon} Gmail: MinhajoSadik@gmail.com
        ${icon} Gmail:CleverLearnerz@gmail.com
        ${icon} Phone: (+880) 1781583107
        ${icon} Location: Beanibazar, Sylhet

        Social link:
        ${icon} FB: https://facebook.com/MinhajSadik13
        ${icon} FB-Group:https://facebook.com/cleverlearnerz
        ${icon} Youtube:Clever Learner'z
        ${icon} institute: Clever Learner'z
      `;
      createElement(e.target, p, "contact");
      createInput();
    }else if (e.target.value.toLowerCase() === "image") {
      `MA Sadik`
      createImg(e.target, 'image')
      createInput();
    }
    else if (e.target.value.toLowerCase() === "clear") {
      if (insetData.childElementCount - 1) {
        insetData.removeChild(insetData.children[0])
      }
    } else {
      wrongMessage(
        e.target,
        `Please type a valid command and follow the 'case sensitive' !`
      );
      createInput();
    }
    // auto scroll
    window.setTimeout(function () {
      var elem = document.querySelector(".terminal");
      elem.scrollTop = elem.scrollHeight;
    }, 1);
  }
});

// create HTML tag function
function createElement(eventTarget, paragraph, className) {
  let description = document.createElement("div");
  description.className = className;
  let p = document.createElement("p");
  p.innerText = paragraph;
  description.appendChild(p);
  eventTarget.disabled = true;
  insetData.appendChild(description);
}

// create img tag function
function createImg(eventTarget, className) {
  let description = document.createElement("div");
  description.className = className;
  let img = document.createElement('IMG')
  img.setAttribute('src', './img/Minhaj.jpg');
  description.appendChild(img);
  eventTarget.disabled = true;
  insetData.appendChild(description);
}

// create Input tag
function createInput() {
  let shell = document.createElement("div");
  shell.className = "shell";
  let label = document.createElement("label");
  label.className = "title";
  let span = document.createElement("span");
  span.innerText = `root@MinhajSadik ~ `;
  label.appendChild(span);
  let input = document.createElement("input");
  input.type = "text";
  input.value = "";
  input.id = "text";
  input.className = "command-input";
  input.autocomplete = "off";
  shell.appendChild(label);
  shell.appendChild(input);
  insetData.appendChild(shell);
}

// wrong message show
function wrongMessage(eventTarget, paragraph) {
  let wrongMsg = document.createElement("div");
  wrongMsg.className = "wrongMsg";
  let p = document.createElement("p");
  p.innerText = paragraph;
  wrongMsg.appendChild(p);
  insetData.appendChild(wrongMsg);
  eventTarget.disabled = true;
}

// Default feature close
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (e.ctrlKey && e.which) {
    return false;
  } else {
    return true;
  }
};