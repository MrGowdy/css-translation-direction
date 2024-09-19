function toggleDirection() {
  const root = document.documentElement
  const htmlClassList = root.classList;

  if (htmlClassList.contains('translated-rtl')) {
    root.lang = 'en'
    htmlClassList.add('translated-ltr');
    htmlClassList.remove('translated-rtl');
  } else {
    root.lang = 'ar'
    htmlClassList.add('translated-rtl');
    htmlClassList.remove('translated-ltr');
  }
}
