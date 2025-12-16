// function removeAllStyles() {
//     document.querySelectorAll("*").forEach(el => {
//         el.removeAttribute("style");
//     });
//     document.querySelectorAll("style").forEach(styleTag => {
//         styleTag.remove();
//     });
//     document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
//         link.remove();
//     });
// }
// const observer = new MutationObserver(() => {
//     removeAllStyles();
// });
// observer.observe(document.documentElement, {
//     childList: true,
//     subtree: true,
//     attributes: true,
//     attributeFilter: ["style"]
// });
// removeAllStyles();
console.log("working")
