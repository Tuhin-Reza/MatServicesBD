const chapters = {
    N1: ["Kanji Mastery", "Advanced Grammar", "Reading Comprehension", "Listening Practice", "Essay Writing"],
    N2: ["Grammar & Structure", "Kanji Recognition", "Vocabulary Expansion", "Listening Skills"],
    N3: ["Intermediate Grammar", "Reading Skills", "Kanji Essentials", "Conversation Practice"],
    N4: ["Basic Grammar", "Intro to Kanji", "Reading Practice", "Listening Basics"],
    N5: ["Foundational Vocabulary", "Basic Phrases", "Writing Basics", "Listening Practice"]
};
function openPopup(level) {
    document.getElementById("popup-level").innerText = level;
    const chapterList = document.getElementById("chapter-list");
    chapterList.innerHTML = chapters[level].map(chapter => `<li>${chapter}</li>`).join("");
    document.getElementById("popup").classList.add("active");
}
function closePopup() {
    document.getElementById("popup").classList.remove("active");
}
