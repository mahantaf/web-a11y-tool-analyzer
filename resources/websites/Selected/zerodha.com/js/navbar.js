function toggleMenu () {
	document.getElementById("menu").classList.toggle("show");
	document.getElementById("nav-icon3").classList.toggle("open");
}

(function () {
	const links = document.getElementsByClassName("nav-links")
	const currentUrl = window.origin + window.location.pathname
	for (const link of links) {
		if (link && link.pathname) {
			if (currentUrl.indexOf(link.pathname) !== -1) {
				link.classList.add("active")
			}
			if (currentUrl.indexOf("charges") !== -1 && link.pathname.indexOf("pricing") !== -1) {
				link.classList.add("active")
			}
			if (currentUrl.indexOf("investments") !== -1 && link.pathname.indexOf("products") !== -1) {
				link.classList.add("active")
			}
		}
	}
	document.getElementById("menu_btn").onclick = function () {
		toggleMenu()
	}
	// Close the dropdown if the user clicks outside of it
	window.onclick = function (event) {
		var dropdown = document.getElementById("menu");
		if (event && !event.target.matches("#menu_btn") && !event.target.matches("#nav-icon3") && !document.querySelector("#nav-icon3").contains(event.target) && !document.querySelector("#menu").contains(event.target) && !event.target.matches(".menu-icon")) {
			if (dropdown.classList.contains("show")) {
				dropdown.classList.remove("show");
				document.getElementsByTagName("body")[0].style.overflow = "auto";
				document.getElementById("nav-icon3").classList.toggle("open");
			}
		} else {
			if (!dropdown.classList.contains("show")) {
				document.getElementsByTagName("body")[0].style.overflow = "auto";
			} else {
				if (window.innerWidth < 840) {
					document.getElementsByTagName("body")[0].style.overflow = "hidden";
				}
			}
		}
	}
	setTimeout(function() {
		let url = document.location.href;
		if (url.indexOf("#") !== -1) {
			let id = url.split('#').pop();
			let el = document.getElementById(id);
			if (el) {
				var headerOffset = 100;
				var elementPosition = el.offsetTop;
				var offsetPosition = elementPosition - headerOffset;
					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth"
					});
				}
		}
	}, 200);
	// close banner
	if (document.getElementsByTagName("body")[0].classList.contains("banner-on")) {
		document.getElementsByClassName("close-banner")[0].addEventListener("click", function () {
			document.getElementsByTagName("body")[0].classList.remove("banner-on")
		})
	}
}())
