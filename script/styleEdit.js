
const classDivInfo = document.querySelector('.s-info');
const sectionMain = document.querySelector('.section-main');
const classDivQuestions = document.querySelector('.div-question');

const originalBoxShadow = sectionMain.style.boxShadow;
const originalBackgroundSection = sectionMain.style.background;


sectionMain.style.boxShadow = 'none'
sectionMain.style.background = 'none'


export function styleEdit() {
    classDivInfo.style.display = 'none'
    sectionMain.style.background = originalBackgroundSection
    sectionMain.style.boxShadow = originalBoxShadow
    classDivQuestions.style.display = 'flex'
}
