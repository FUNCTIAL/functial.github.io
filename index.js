const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// 1. Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

// 2. Apply saved theme, or fallback to system preference logic
if (savedTheme) {
	root.style.colorScheme = savedTheme;
}

// 3. Toggle Logic
toggleBtn.addEventListener("click", () => {
	// Check if the current explicit setting is 'dark'
	const currentStyle = root.style.colorScheme;
	const systemIsDark = window.matchMedia(
		"(prefers-color-scheme: dark)",
	).matches;

	let newTheme;

	// If a specific mode is already set, flip it.
	if (currentStyle === "dark") {
		newTheme = "light";
	} else if (currentStyle === "light") {
		newTheme = "dark";
	} else {
		// If no mode is set (using system default), flip away from system default
		newTheme = systemIsDark ? "light" : "dark";
	}

	// Apply and Save
	root.style.colorScheme = newTheme;
	localStorage.setItem("theme", newTheme);
});
