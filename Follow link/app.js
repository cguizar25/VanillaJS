const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.clasList.add('highlight');
document.body.append(highlight);

const highlight = () => {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords)
  const coords = {
    width: linkCoords.width,
    height: linkCoords.heigt,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  hightlight.style.height = `${coords.height}px`;
  hightlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a=> a.addEventListener('mouseenter', highlightLink))
