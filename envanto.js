// Function to remove inline, internal, and external styles
function removeAllStyles() {

    // 1️⃣ Remove all inline styles
    document.querySelectorAll("*").forEach(el => {
        el.removeAttribute("style");
    });

    // 2️⃣ Remove all <style> tags (internal CSS)
    document.querySelectorAll("style").forEach(styleTag => {
        styleTag.remove();
    });

    // 3️⃣ Remove all <link rel="stylesheet"> tags (external CSS)
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        link.remove();
    });
}


// 4️⃣ MutationObserver — keeps watching & removing new styles
const observer = new MutationObserver(() => {
    removeAllStyles();
});

// Observe entire document for changes
observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"] // only watch style attribute
});


// Run once on page load
removeAllStyles();
