const checklistKey = "android-emulator-test-checklist";
const themeKey = "android-emulator-test-theme";

function preferredTheme() {
  const saved = localStorage.getItem(themeKey);
  if (saved === "dark" || saved === "light") {
    return saved;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const toggle = document.querySelector("#themeToggle");
  if (toggle) {
    const isDark = theme === "dark";
    toggle.setAttribute("aria-checked", String(isDark));
    toggle.querySelector(".toggle-label").textContent = isDark ? "Light" : "Dark";
  }
}

function setupThemeToggle() {
  applyTheme(preferredTheme());
  document.querySelector("#themeToggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeKey, nextTheme);
    applyTheme(nextTheme);
  });
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

function buildFeedback() {
  const checked = [...document.querySelectorAll("[data-checklist] input:checked")]
    .map((input) => `- ${input.parentElement.textContent.trim()}`)
    .join("\n");
  return [
    "Android Emulator internal test feedback",
    "",
    "Host distro:",
    "Runtime mode:",
    "AppImage opens: yes/no",
    "Setup wizard result:",
    "Gaming_API_30 launch result:",
    "Controller result:",
    "Observed issue:",
    "Reproduction steps:",
    "",
    "Completed checks:",
    checked || "- none yet",
  ].join("\n");
}

function restoreChecklist() {
  const saved = new Set(JSON.parse(localStorage.getItem(checklistKey) || "[]"));
  document.querySelectorAll("[data-checklist] input").forEach((input) => {
    input.checked = saved.has(input.value);
    input.addEventListener("change", () => {
      const values = [...document.querySelectorAll("[data-checklist] input:checked")]
        .map((checked) => checked.value);
      localStorage.setItem(checklistKey, JSON.stringify(values));
      updateFeedback();
    });
  });
}

function updateFeedback() {
  const feedback = document.querySelector("#feedbackText");
  if (feedback) {
    feedback.value = buildFeedback();
  }
}

document.querySelector("#copyRun")?.addEventListener("click", () => {
  copyText("chmod +x Android_Emulator-x86_64.AppImage\n./Android_Emulator-x86_64.AppImage")
    .then(() => {
      document.querySelector("#copyRun").textContent = "Copied";
      setTimeout(() => document.querySelector("#copyRun").textContent = "Copy run command", 1400);
    });
});

document.querySelector("#copyFeedback")?.addEventListener("click", () => {
  copyText(document.querySelector("#feedbackText").value).then(() => {
    document.querySelector("#copyFeedback").textContent = "Copied";
    setTimeout(() => document.querySelector("#copyFeedback").textContent = "Copy feedback", 1400);
  });
});

setupThemeToggle();
restoreChecklist();
updateFeedback();
