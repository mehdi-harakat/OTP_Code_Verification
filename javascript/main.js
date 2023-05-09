const btn = document.querySelector("button");
const inps = document.querySelectorAll("input");

inps.forEach((e) => {
	e.addEventListener("input", () => {
		btn.classList.remove("active");

		if (e.getAttribute("id") === "one") {
			if (e.value.length === 1) {
				e.nextElementSibling.removeAttribute("disabled");
				e.nextElementSibling.focus();
				e.nextElementSibling.value = "";
			}
		} else if (e.getAttribute("id") === "four") {
			if (e.value.length === 1) {
				e.blur();
				btn.classList.add("active");
			}
		}
	});
});
