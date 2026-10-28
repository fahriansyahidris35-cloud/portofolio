
const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function() {
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
        contactButton.textContent = "Sembunyikan Kontak";
    } else {
        contactInfo.style.display = "none";
        contactButton.textContent = "Lihat Kontak";
    }
});
const semuaSkills = document.querySelectorAll("#skills details");

semuaSkills.forEach(function(skill) {
    skill.addEventListener("click", function() {
        if (!skill.open) {
            return;
        }

        semuaSkills.forEach(function(skillLain) {
            if (skillLain !== skill) {
                skillLain.open = false;
            }
        });
    });
});
