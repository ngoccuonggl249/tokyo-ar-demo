// Data Models
const models = [{
  id: 'a',
  render : `<a-image
      src="assets/img/A_out/A_out_00000-min.png"
      rotation="0 0 0"
      position="0 1 0"
      scale="1 1 1"
      style="display: none"
  ></a-image>`,
  descriptionTitle: 'オオルリ',
  descriptionContent: '春から夏にかけて日本にやってくる渡鳥で美しい鳴き声が特徴です。メスは外敵に見つからないよう茶色、オスは光沢のある青色の見た目をしています。',
}, {
  id: 'b',
  render : `<a-entity
      gltf-model="assets/gltf/fox.gltf"
      scale="0.1 0.1 0.1"
      animation-mixer
  ></a-entity>`,
  descriptionTitle: 'ホンドギツネ',
  descriptionContent: '日本の里山に住む代表的な動物です。ネズミから農作物を守ってくれるため古くから大切な存在として扱われてきましたが、近年では森林伐採などの影響により野生に暮らすキツネの数は徐々に少なくなっています。',
}]

var modelShowing = null;
var $description;
var $descriptionTitle;
var $descriptionContent;

// Handle Reset
function resetModel() {
  $('a-marker').removeAttr('sound').empty();
  $description.hide();
  modelShowing = null;
}

// Onload jQuery
$(() => {
  $description = $('.description');
  $descriptionTitle = $('.description-title');
  $descriptionContent = $('.description-content');

  $('#btnReset').click(() => {
    resetModel();
  });
  $('#btnDone').click(() => {
    resetModel();
    $('.modal').show();
  });
  $('.modal-close').click(() => {
    resetModel();
    $('.modal').hide();
  });
})

// Marker Handler
AFRAME.registerComponent('marker-handler', {
  // Var
  _modelData: null,

  // AFRAME Method
  schema: {
    message: {type: 'string', default: ''},
  },
  init: function () {
    this.oldVisible = this.el.object3D.visible;
    this._$description = $(`#description`);
    this._modelData = models.find((modal) => modal.id === this.data.id )
    this.$el =  $(this.el);
  },
  tick: function () {
    var newVisible = this.el.object3D.visible;
    if (newVisible !== this.oldVisible) {

      this.oldVisible = newVisible;
      //When marker is showing
      if (newVisible === true) {

        // Set modelShowing flag
        if (modelShowing && modelShowing !== this.data.id) {
          if (!this.$el.attr('sound')) {
            this.$el.removeAttr('sound');
          }
          this.$el.empty();
          return;
        }
        modelShowing = this.data.id;

        if (!this.$el.html()) {
          this.$el.html($.parseHTML(this._modelData.render));
        }

        this._$description.show();
        $descriptionTitle.html(this._modelData.descriptionTitle);
        $descriptionContent.html(this._modelData.descriptionContent);
        $description.show();

      } else { //When marker is hiding
        // Reset modelShowing flag
        modelShowing = (modelShowing === this._modelData.id) ? null : modelShowing;

        $description.hide();
      }
    }
  }
});

// Handle load image
AFRAME.registerComponent('image-handler', {
  // Var
  _images: [
    { url: 'assets/img/A_out/A_out_00000-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00001-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00002-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00003-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00004-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00005-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00006-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00007-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00008-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00009-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00010-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00011-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00012-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00013-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00014-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00015-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00016-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00017-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00018-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00019-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00020-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00021-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00022-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00023-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00024-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00025-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00026-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00027-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00028-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00029-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00030-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00031-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00032-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00033-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00034-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00035-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00036-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00037-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00038-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00039-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00040-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00041-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00042-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00043-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00044-min.png', time: 86.5777777778 },
    { url: 'assets/img/A_out/A_out_00045-min.png', time: 86.5777777778 },
  ],
  _isContinue: true,
  _timeOut: null,
  _changeImage: function (_img, _index) {
    const $image = this.$el.children('a-image');

    if (!$image.length) return;

    return new Promise((resolve) => {
      this._timeOut = setTimeout(() => {
        resolve($image.attr('src', this._images[_index].url));
      }, _img.time);
    });
  },
  _callRequestImage: function () {
    if (this._isContinue) {
      const $image = this.$el.children('a-image');

      if (!$image.length) return;

      this._images.reduce((promise, currentValue, currentIndex) => {
        return promise.then(() => {
          $image.attr('src', currentValue.url);
          if (currentIndex === (this._images.length - 1)) {
            currentIndex = 0;
          }
          return this._changeImage(currentValue, currentIndex + 1);
        });
      }, Promise.resolve()).then(() => {
        this._callRequestImage();
      });
    }
  },

  // AFRAME Method
  schema: {
    id: {default: ''},
  },
  init: function () {
    this.oldVisible = this.el.object3D.visible;
    this.$el = $(this.el);
  },
  tick: function () {
    var newVisible = this.el.object3D.visible;
    if (newVisible !== this.oldVisible) {
      this.oldVisible = newVisible;
      //When marker is showing
      if (newVisible === true) {
        this._isContinue = true;
        this._callRequestImage();
      } else { //When marker is hiding
        this._isContinue = false;
        clearTimeout(this._timeOut);
      }
    }
  }
});

// Handle play sound
AFRAME.registerComponent('sound-handler', {
  // AFRAME Method
  schema: {
    id: {default: ''},
    sound: {default: ''},
  },
  init: function () {
    this.oldVisible = this.el.object3D.visible;
    this.$el = $(this.el);
  },
  tick: function () {
    var newVisible = this.el.object3D.visible;
    if (newVisible !== this.oldVisible) {
      this.oldVisible = newVisible;
      //When marker is showing
      if (newVisible === true) {
        if (!modelShowing) {
          modelShowing = this.data.id;
        }
        if (modelShowing === this.data.id && !this.$el.attr('sound') ) {
          this.$el.attr('sound', `src: url(${this.data.sound}); autoplay: true; loop: true; refDistance: 1; volume: 5;`);
        }
      } else { //When marker is hiding
        this.$el.removeAttr('sound');
      }
    }
  }
});
