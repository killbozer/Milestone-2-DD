// Javascript functions were conceptualized from Stack Overflow and Codepen
function collapse_menu(excludeId) {
  var dropdowns = document.getElementsByClassName("dropdown-content");      // Retrieve Class element name
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show') && excludeId !== openDropdown.id) {
      openDropdown.classList.remove('show');          // Collapse menu
    }
  }
}

// Functions to expand and collapse menu(s)
function toggleMenu(id) {
  id.classList.toggle("show");          // Retrieve the ID of selected label. Set state to 'show'
  collapse_menu(id.id);                 // If User opens another label, close current label
}

window.onclick = function(e) {
  if (!e.target.matches('.label')) {    // If (On Click) current label is active...
    collapse_menu();                    // ...Collapse the current menu
  }
}
