window.onload = function () {

	var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

	var GameState = {

		preload: function() {

		},
		create: function() {

		},
		update: function() {

		}, 
	};

	game.state.add('Boot', Game.Boot);
	game.state.add('Preloader', Game.Preloader);
	game.state.add('MainMenu', Game.MainMenu);
	game.state.add('Level1', Game.Level1);

	game.state.start('Boot');

}