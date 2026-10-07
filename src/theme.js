export const THEME_STORAGE_KEY = "morph-theme";
export const isThemePreference = (value) =>
  ["system", "light", "dark"].includes(value);

export function readThemePreference() {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(value) ? value : "system";
  } catch {
    return "system";
  }
}

export function applyTheme(preference, systemDark) {
  const theme =
    preference === "system" ? (systemDark ? "dark" : "light") : preference;
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#131620" : "#f4f2ec");
}
