class Hero {
  constructor() {
    this.header = $('#header');
    this.menu = new Menu(this.header);
    this.parallax = this.parallax.bind(this);
    window.menu = this.menu;
    this.render();
    this.bindEvents();
  }

  parallax({ pageX, pageY }) {
    let mulitplication = 5;
    let cX = window.innerWidth / 2;
    let cY = window.innerHeight / 2;
    let y = (pageX - cX) / cX * mulitplication;
    let x = (-pageY + cY) / cY * mulitplication;

    this.heroFig.css('transform', `rotateX(${x}deg) rotateY(${y}deg)`)
  }

  render() {
    let bg = this.header.data('background-image');
    this.header
      .css('background-image', 'none')
      .append(`<span id="hero"><figure style='background-image: ${bg};' /></span>`);

    this.hero = $('#hero');
    this.heroFig = $('#hero figure');
  }

  bindEvents() {
    this.header.on('mousemove', this.parallax);
    $(window).on('load scroll', () => {
      let clip = this.header[0].getBoundingClientRect().bottom - 50;
      let height = clip < 0 ? 0 : clip > 50 ? 50 : clip;

      $('#logo a').height(height);
      this.menu.hamburger.clip(height);
    });
  }
}

$(document).ready(() => {
  new Hero();
});
