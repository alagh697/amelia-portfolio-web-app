export const scrollTo = function (element_id: string) {
    const element = document.getElementById(element_id);
  if (element) {
    const headerHeight = 80; // Height of the fixed header
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth"
    });
  }
  };