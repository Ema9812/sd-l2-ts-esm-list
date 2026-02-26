export function footerComponent(): HTMLElement {
  const footer = document.createElement("footer");
  footer.style.marginTop = "20px";
  footer.style.padding = "10px";
  footer.style.borderTop = "1px solid #ccc";
  footer.textContent = "© 2026 - Emanuel";
  return footer;
}