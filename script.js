const navPanel = document.getElementById("mobilenav");
const navbtn = document.getElementById("btnimg");


const mobileNav = () => {
	if (navPanel.style.display != "flex"){
		navPanel.style.display = "flex";
		navbtn.src = "images/icon-close.svg";
	} else {
		navPanel.style.display = "none";
		navbtn.src = "images/icon-hamburger.svg";
	}
}