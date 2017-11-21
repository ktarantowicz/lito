class Vacabulary {
  constructor() {
    this.list = $('.list-vac');
    this.hero = document.querySelector('#hero');
    this.clipTitles = this.clipTitles.bind(this);
    this.toogleItem = this.toogleItem.bind(this);

    this.render();
    this.clipTitles();
    this.bindEvents();
  }

  clipTitles() {
    const hero = this.hero.getBoundingClientRect().bottom;

    this.list.find('h2').each(function() {
      let top = this.getBoundingClientRect().top;
      let span = this.querySelector('span');
      let percentage = 100;

      if( hero > top ) {
        let clipHeight = hero - top;
        let pxToPercentage = 100 - (clipHeight / this.clientHeight * 100);
        percentage = Math.max(pxToPercentage, 0);
      }

      span.style.height = `${percentage}%`;
    });
  }

  render() {
    this.list
      .addClass('fx')
      .children('li').each(function() {
        let text = this.querySelector('h2').innerText;
        $(this)
          .find('h2')
            .html(`<span><em>${text}</em></span>`)
            .attr('data-title', text)
            .end()
          .find('article').wrap('<div class="wrap"></div>');
      });
  }

  updateActive() {
    this.list.find('.act .wrap').each(function() {
      this.style.height = this.childNodes[0].scrollHeight + 'px';
    });
  }

  animate(h2) {
    let start;
    const timing = 300;
    const wrap = h2.nextElementSibling;
    const section = h2.parentNode;
    const height = wrap.scrollHeight;
    const isActive = section.classList.contains('act');

    const loop = (timestamp) => {
      if (!start) { start = timestamp; }
      let progress = timestamp - start;
      let t = (progress / timing);
      let easeIn = t<.5 ? 2*t*t : -1+(4-2*t)*t;
      let step = height * easeIn;
      wrap.style.height = (isActive ? height - step : step) + 'px';
      this.clipTitles();

      if (progress < timing) {
        requestAnimationFrame(loop);
      }
    };

    section.classList.toggle('act', !isActive);

    requestAnimationFrame(loop);
  }

  toogleItem({ currentTarget }) {
    let active = this.list.find('.act h2');
    let shouldHide = active.length;
    let shouldShow = active[0] !== currentTarget;

    if(shouldHide) {
      this.animate(active[0]);
    }
    if(shouldShow) {
      this.animate(currentTarget);
    }
  }

  bindEvents() {
    $(window).on('resize', () => {
      this.clipTitles();
      this.updateActive();
    });
    $(document).on('scroll', this.clipTitles);
    this.list.on('click', 'h2', this.toogleItem);
  }
}

$(document).ready(function() {
  new Vacabulary();
});
