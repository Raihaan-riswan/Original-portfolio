// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART

// thisi is show the html project ok

function Web(){
  const div = document.getElementById("myDiv");
    if (div.style.display === "none") {
      div.style.display = "grid";
    } else {
      div.style.display = "none";
    }

    // html maththa project code a podanum
}
// edhu css project kku
function csharp(){
  const div = document.getElementById("myDiv2");
    if (div.style.display === "none") {
      div.style.display = "grid";
    } else {
      div.style.display = "none";
    }



    // edhu ullukku thaan matha project code a podanum
}
function back(){
  window.location.href = "index.html";
}