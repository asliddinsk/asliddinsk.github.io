document.querySelectorAll('section h2').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.parentElement;
    const content = section.querySelector('ul, ol, p, figure');
    content.style.display = content.style.display === 'none' ? '' : 'none';
  });
});
