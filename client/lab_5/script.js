/* eslint-disable no-unused-vars */
async function mainEvent() {
  const form = document.querySelector('.food-form');
  form.addEventListener('submit', async (SubmitEvent) => {
    SubmitEvent.preventDefault();
    console.log('form submission');
    const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const arrayFromJson = await results.json();
    console.table(arrayFromJson.data);
  });
}
document.addEventListener('DOMcontentloaded', async() => maintEvent());
