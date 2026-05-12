document.addEventListener('DOMContentLoaded', () => {
  const sentences = document.querySelectorAll('.sentence');

  sentences.forEach(sentence => {
    sentence.addEventListener('click', () => {
      const id = sentence.getAttribute('data-id');

      // 1. Remove highlight from all sentences
      document.querySelectorAll('.sentence').forEach(s => {
        s.classList.remove('highlight');
      });

      // 2. Add highlight to all sentences with the same data-id
      const matchingSentences = document.querySelectorAll(`[data-id="${id}"]`);
      matchingSentences.forEach(s => {
        s.classList.add('highlight');
      });
    });
  });
});