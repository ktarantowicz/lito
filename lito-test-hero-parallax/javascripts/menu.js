class Menu {
  constructor(header) {
    this.header = header;
    this.nav = this.header.find('nav');
    this.stage = null;
    this.className = {
      active: 'active'
    };

    this.hamburger = {
      primary: new lib.litoHam('#ffffff'),
      secondary: new lib.litoHam('#000000'),
      open() {
        this.primary.open();
        return this.secondary.open();
      },
      close() {
        this.primary.close();
        return this.secondary.close();
      },
      clip(clip) {
        let { primary, secondary } = this;

        primary.mask.y = -primary.nominalBounds.height + clip;
        secondary.mask.y = clip;
      }
    };

    this.render();
    this.bindEvents();
  }

  openMenu() {
    this.toggleMenu(true);
  }

  closeMenu() {
    this.toggleMenu(false);
  }

  toggleMenu(bool) {
    let lock = this.hamburger[bool ? 'open' : 'close']();
    if(!lock) {
      this.nav.toggleClass(this.className.active, bool)
    }
  }

  bindEvents() {
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", this.stage);
    this.stage.addEventListener('click', () => {
      this.toggleMenu(!this.nav.hasClass(this.className.active));
    });
  }

  render() {
    this.hamburger.root = $('<canvas id="ham" width="50" height="50"></canvas>').appendTo(this.nav);
    this.stage = new createjs.Stage(this.hamburger.root[0]);
    this.stage.addChild(this.hamburger.primary);
    this.stage.addChild(this.hamburger.secondary);
    this.stage.update();
  }
}
