const productsAccordion = () => {
    const accordionControl = document.getElementsByClassName('products__acordion-header');
    let i;
  
    for (i = 0; i < accordionControl.length; i++) {
      accordionControl[i].addEventListener('click', function () {
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          this.parentElement.style.paddingBottom = '0';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          this.style.marginBottom = '1.7rem';
          this.parentElement.style.paddingBottom = '1.6rem';
        }
      });
    }
  };
  productsAccordion()