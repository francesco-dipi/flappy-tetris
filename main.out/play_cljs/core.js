// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('play_cljs.options');

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_show$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_show$arity$1(screen);
} else {
var x__4229__auto__ = (((screen == null))?null:screen);
var m__4230__auto__ = (play_cljs.core.on_show[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(screen) : m__4230__auto__.call(null,screen));
} else {
var m__4230__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(screen) : m__4230__auto____$1.call(null,screen));
} else {
throw cljs.core.missing_protocol("Screen.on-show",screen);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_hide$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_hide$arity$1(screen);
} else {
var x__4229__auto__ = (((screen == null))?null:screen);
var m__4230__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(screen) : m__4230__auto__.call(null,screen));
} else {
var m__4230__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(screen) : m__4230__auto____$1.call(null,screen));
} else {
throw cljs.core.missing_protocol("Screen.on-hide",screen);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_render$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_render$arity$1(screen);
} else {
var x__4229__auto__ = (((screen == null))?null:screen);
var m__4230__auto__ = (play_cljs.core.on_render[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(screen) : m__4230__auto__.call(null,screen));
} else {
var m__4230__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(screen) : m__4230__auto____$1.call(null,screen));
} else {
throw cljs.core.missing_protocol("Screen.on-render",screen);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling `create-game`.
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null))))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.start[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.start",game);
}
}
}
});

/**
 * Adds an event listener.
 */
play_cljs.core.listen = (function play_cljs$core$listen(game,listen_type,listener){
if(((!((game == null))) && (!((game.play_cljs$core$Game$listen$arity$3 == null))))){
return game.play_cljs$core$Game$listen$arity$3(game,listen_type,listener);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.listen[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$3(game,listen_type,listener) : m__4230__auto__.call(null,game,listen_type,listener));
} else {
var m__4230__auto____$1 = (play_cljs.core.listen["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3(game,listen_type,listener) : m__4230__auto____$1.call(null,game,listen_type,listener));
} else {
throw cljs.core.missing_protocol("Game.listen",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if(((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null))))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.render[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(game,content) : m__4230__auto__.call(null,game,content));
} else {
var m__4230__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(game,content) : m__4230__auto____$1.call(null,game,content));
} else {
throw cljs.core.missing_protocol("Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an `Image` object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if(((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null))))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$5(game,image_name,width,height,content) : m__4230__auto__.call(null,game,image_name,width,height,content));
} else {
var m__4230__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$5(game,image_name,width,height,content) : m__4230__auto____$1.call(null,game,image_name,width,height,content));
} else {
throw cljs.core.missing_protocol("Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an `Image` object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if(((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null))))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.load_image[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(game,path) : m__4230__auto__.call(null,game,path));
} else {
var m__4230__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(game,path) : m__4230__auto____$1.call(null,game,path));
} else {
throw cljs.core.missing_protocol("Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a `TiledMap` object.
 * A tiled map with the provided name must already be loaded
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if(((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null))))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(game,map_name) : m__4230__auto__.call(null,game,map_name));
} else {
var m__4230__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(game,map_name) : m__4230__auto____$1.call(null,game,map_name));
} else {
throw cljs.core.missing_protocol("Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the `Screen` object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null))))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-screen",game);
}
}
}
});

/**
 * Sets the `Screen` object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if(((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null))))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(game,screen) : m__4230__auto__.call(null,game,screen));
} else {
var m__4230__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(game,screen) : m__4230__auto____$1.call(null,game,screen));
} else {
throw cljs.core.missing_protocol("Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null))))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null))))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null))))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null))))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null))))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null))))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_width[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null))))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_height[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto__.call(null,game));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(game) : m__4230__auto____$1.call(null,game));
} else {
throw cljs.core.missing_protocol("Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if(((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null))))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.set_size[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$3(game,width,height) : m__4230__auto__.call(null,game,width,height));
} else {
var m__4230__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3(game,width,height) : m__4230__auto____$1.call(null,game,width,height));
} else {
throw cljs.core.missing_protocol("Game.set-size",game);
}
}
}
});

/**
 * Gets the asset with the given name.
 */
play_cljs.core.get_asset = (function play_cljs$core$get_asset(game,name){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_asset$arity$2 == null))))){
return game.play_cljs$core$Game$get_asset$arity$2(game,name);
} else {
var x__4229__auto__ = (((game == null))?null:game);
var m__4230__auto__ = (play_cljs.core.get_asset[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(game,name) : m__4230__auto__.call(null,game,name));
} else {
var m__4230__auto____$1 = (play_cljs.core.get_asset["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(game,name) : m__4230__auto____$1.call(null,game,name));
} else {
throw cljs.core.missing_protocol("Game.get-asset",game);
}
}
}
});

play_cljs.core.start_example_game = (function play_cljs$core$start_example_game(game,card,_STAR_state){
var G__17400 = game;
play_cljs.core.start(G__17400);

play_cljs.core.set_size(G__17400,card.clientWidth,card.clientHeight);

play_cljs.core.listen(G__17400,"mousemove",((function (G__17400){
return (function (event){
var bounds = card.getBoundingClientRect();
var x = (event.clientX - bounds.left);
var y = (event.clientY - bounds.top);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$x,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,y], 0));
});})(G__17400))
);

play_cljs.core.listen(G__17400,"resize",((function (G__17400){
return (function (event){
return play_cljs.core.set_size(game,card.clientWidth,card.clientHeight);
});})(G__17400))
);

return G__17400;
});
if((typeof play_cljs !== 'undefined') && (typeof play_cljs.core !== 'undefined') && (typeof play_cljs.core.draw_sketch_BANG_ !== 'undefined')){
} else {
/**
 * Internal multimethod for drawing entities. Extending this will allow you
 * to define new entity types.
 */
play_cljs.core.draw_sketch_BANG_ = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("play-cljs.core","draw-sketch!"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (game,renderer,content,parent_opts){
var k = cljs.core.first(content);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.sequential_QMARK_(k)){
return cljs.core.cst$kw$play_DASH_cljs$core_SLASH_multiple;
} else {
return null;
}
}
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$play_DASH_cljs$core_SLASH_multiple,(function (game,renderer,content,parent_opts){
return cljs.core.run_BANG_((function (p1__17401_SHARP_){
return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,p1__17401_SHARP_,parent_opts) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__17401_SHARP_,parent_opts));
}),content);
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (game,renderer,content,parent_opts){
var temp__5457__auto__ = cljs.core.first(content);
if(cljs.core.truth_(temp__5457__auto__)){
var name = temp__5457__auto__;
throw (new Error(["Command not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')));
} else {
return null;
}
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$div,(function (game,renderer,content,parent_opts){
var vec__17402 = content;
var seq__17403 = cljs.core.seq(vec__17402);
var first__17404 = cljs.core.first(seq__17403);
var seq__17403__$1 = cljs.core.next(seq__17403);
var _ = first__17404;
var first__17404__$1 = cljs.core.first(seq__17403__$1);
var seq__17403__$2 = cljs.core.next(seq__17403__$1);
var opts = first__17404__$1;
var children = seq__17403__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_basic_DASH_opts,opts__$1);
} else {
}

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (game,renderer,content,parent_opts){
var vec__17405 = content;
var seq__17406 = cljs.core.seq(vec__17405);
var first__17407 = cljs.core.first(seq__17406);
var seq__17406__$1 = cljs.core.next(seq__17406);
var _ = first__17407;
var first__17407__$1 = cljs.core.first(seq__17406__$1);
var seq__17406__$2 = cljs.core.next(seq__17406__$1);
var opts = first__17407__$1;
var children = seq__17406__$2;
var map__17408 = play_cljs.options.update_opts(opts,parent_opts,play_cljs.options.text_defaults);
var map__17408__$1 = ((((!((map__17408 == null)))?(((((map__17408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17408):map__17408);
var opts__$1 = map__17408__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$value);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$y);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$size);
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$font);
var halign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$halign);
var valign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$valign);
var leading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$leading);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$style);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_text_DASH_opts,opts__$1);
} else {
}

var G__17410_17411 = renderer;
G__17410_17411.textSize(size);

G__17410_17411.textFont(font);

G__17410_17411.textAlign(play_cljs.options.halign__GT_constant(renderer,halign),play_cljs.options.valign__GT_constant(renderer,valign));

G__17410_17411.textLeading(leading);

G__17410_17411.textStyle(play_cljs.options.style__GT_constant(renderer,style));

G__17410_17411.text(value,x,y);


return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$arc,(function (game,renderer,content,parent_opts){
var vec__17412 = content;
var seq__17413 = cljs.core.seq(vec__17412);
var first__17414 = cljs.core.first(seq__17413);
var seq__17413__$1 = cljs.core.next(seq__17413);
var _ = first__17414;
var first__17414__$1 = cljs.core.first(seq__17413__$1);
var seq__17413__$2 = cljs.core.next(seq__17413__$1);
var opts = first__17414__$1;
var children = seq__17413__$2;
var map__17415 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17415__$1 = ((((!((map__17415 == null)))?(((((map__17415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17415):map__17415);
var opts__$1 = map__17415__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$height);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$stop);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_arc_DASH_opts,opts__$1);
} else {
}

renderer.arc(x,y,width,height,start,stop);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ellipse,(function (game,renderer,content,parent_opts){
var vec__17417 = content;
var seq__17418 = cljs.core.seq(vec__17417);
var first__17419 = cljs.core.first(seq__17418);
var seq__17418__$1 = cljs.core.next(seq__17418);
var _ = first__17419;
var first__17419__$1 = cljs.core.first(seq__17418__$1);
var seq__17418__$2 = cljs.core.next(seq__17418__$1);
var opts = first__17419__$1;
var children = seq__17418__$2;
var map__17420 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17420__$1 = ((((!((map__17420 == null)))?(((((map__17420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17420):map__17420);
var opts__$1 = map__17420__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,cljs.core.cst$kw$height);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_ellipse_DASH_opts,opts__$1);
} else {
}

renderer.ellipse(x,y,width,height);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$line,(function (game,renderer,content,parent_opts){
var vec__17422 = content;
var seq__17423 = cljs.core.seq(vec__17422);
var first__17424 = cljs.core.first(seq__17423);
var seq__17423__$1 = cljs.core.next(seq__17423);
var _ = first__17424;
var first__17424__$1 = cljs.core.first(seq__17423__$1);
var seq__17423__$2 = cljs.core.next(seq__17423__$1);
var opts = first__17424__$1;
var children = seq__17423__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_line_DASH_opts,opts__$1):null);
var map__17425 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts__$1,cljs.core.cst$kw$x1,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y1,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x2,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y2,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__17425__$1 = ((((!((map__17425 == null)))?(((((map__17425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17425):map__17425);
var opts__$2 = map__17425__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,cljs.core.cst$kw$x1);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,cljs.core.cst$kw$y1);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,cljs.core.cst$kw$x2);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,cljs.core.cst$kw$y2);
renderer.line(x1,y1,x2,y2);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$2) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$point,(function (game,renderer,content,parent_opts){
var vec__17427 = content;
var seq__17428 = cljs.core.seq(vec__17427);
var first__17429 = cljs.core.first(seq__17428);
var seq__17428__$1 = cljs.core.next(seq__17428);
var _ = first__17429;
var first__17429__$1 = cljs.core.first(seq__17428__$1);
var seq__17428__$2 = cljs.core.next(seq__17428__$1);
var opts = first__17429__$1;
var children = seq__17428__$2;
var map__17430 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17430__$1 = ((((!((map__17430 == null)))?(((((map__17430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17430):map__17430);
var opts__$1 = map__17430__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,cljs.core.cst$kw$y);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_point_DASH_opts,opts__$1);
} else {
}

renderer.point(x,y);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$quad,(function (game,renderer,content,parent_opts){
var vec__17432 = content;
var seq__17433 = cljs.core.seq(vec__17432);
var first__17434 = cljs.core.first(seq__17433);
var seq__17433__$1 = cljs.core.next(seq__17433);
var _ = first__17434;
var first__17434__$1 = cljs.core.first(seq__17433__$1);
var seq__17433__$2 = cljs.core.next(seq__17433__$1);
var opts = first__17434__$1;
var children = seq__17433__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_quad_DASH_opts,opts__$1):null);
var map__17435 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts__$1,cljs.core.cst$kw$x1,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y1,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x2,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y2,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x3,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y3,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x4,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y4,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__17435__$1 = ((((!((map__17435 == null)))?(((((map__17435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17435):map__17435);
var opts__$2 = map__17435__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$x1);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$y1);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$x2);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$y2);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$x3);
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$y3);
var x4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$x4);
var y4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$y4);
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$2) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rect,(function (game,renderer,content,parent_opts){
var vec__17437 = content;
var seq__17438 = cljs.core.seq(vec__17437);
var first__17439 = cljs.core.first(seq__17438);
var seq__17438__$1 = cljs.core.next(seq__17438);
var _ = first__17439;
var first__17439__$1 = cljs.core.first(seq__17438__$1);
var seq__17438__$2 = cljs.core.next(seq__17438__$1);
var opts = first__17439__$1;
var children = seq__17438__$2;
var map__17440 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17440__$1 = ((((!((map__17440 == null)))?(((((map__17440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17440):map__17440);
var opts__$1 = map__17440__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,cljs.core.cst$kw$height);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_rect_DASH_opts,opts__$1);
} else {
}

renderer.rect(x,y,width,height);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$triangle,(function (game,renderer,content,parent_opts){
var vec__17442 = content;
var seq__17443 = cljs.core.seq(vec__17442);
var first__17444 = cljs.core.first(seq__17443);
var seq__17443__$1 = cljs.core.next(seq__17443);
var _ = first__17444;
var first__17444__$1 = cljs.core.first(seq__17443__$1);
var seq__17443__$2 = cljs.core.next(seq__17443__$1);
var opts = first__17444__$1;
var children = seq__17443__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_triangle_DASH_opts,opts__$1):null);
var map__17445 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts__$1,cljs.core.cst$kw$x1,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y1,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x2,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y2,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x3,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y3,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__17445__$1 = ((((!((map__17445 == null)))?(((((map__17445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17445):map__17445);
var opts__$2 = map__17445__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$x1);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$y1);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$x2);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$y2);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$x3);
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$y3);
renderer.triangle(x1,y1,x2,y2,x3,y3);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$2) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$image,(function (game,renderer,content,parent_opts){
var vec__17447 = content;
var seq__17448 = cljs.core.seq(vec__17447);
var first__17449 = cljs.core.first(seq__17448);
var seq__17448__$1 = cljs.core.next(seq__17448);
var _ = first__17449;
var first__17449__$1 = cljs.core.first(seq__17448__$1);
var seq__17448__$2 = cljs.core.next(seq__17448__$1);
var opts = first__17449__$1;
var children = seq__17448__$2;
var map__17450 = play_cljs.options.update_opts(opts,parent_opts,play_cljs.options.image_defaults);
var map__17450__$1 = ((((!((map__17450 == null)))?(((((map__17450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17450):map__17450);
var opts__$1 = map__17450__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$x);
var scale_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$scale_DASH_x);
var swidth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$swidth);
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$flip_DASH_x);
var sheight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$sheight);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$height);
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$flip_DASH_y);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$y);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$name);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$sy);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$width);
var scale_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$scale_DASH_y);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$sx);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_image_DASH_opts,opts__$1):null);
var value__$1 = (function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = play_cljs.core.get_asset(game,name);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return play_cljs.core.load_image(game,name);
}
}
})();
var swidth__$1 = (function (){var or__3936__auto__ = swidth;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__3936__auto__ = sheight;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return value__$1.height;
}
})();
renderer.push();

renderer.translate(x,y);

renderer.scale(scale_x,scale_y);

if(cljs.core.truth_(flip_x)){
renderer.scale((-1),(1));

renderer.translate((- swidth__$1),(0));
} else {
}

if(cljs.core.truth_(flip_y)){
renderer.scale((1),(-1));

renderer.translate((0),(- sheight__$1));
} else {
}

renderer.image(value__$1,(0),(0),(function (){var or__3936__auto__ = width;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__3936__auto__ = height;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return sheight__$1;
}
})(),sx,sy,swidth__$1,sheight__$1);

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.pop();
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$animation,(function (game,renderer,content,parent_opts){
var vec__17452 = content;
var seq__17453 = cljs.core.seq(vec__17452);
var first__17454 = cljs.core.first(seq__17453);
var seq__17453__$1 = cljs.core.next(seq__17453);
var _ = first__17454;
var first__17454__$1 = cljs.core.first(seq__17453__$1);
var seq__17453__$2 = cljs.core.next(seq__17453__$1);
var opts = first__17454__$1;
var children = seq__17453__$2;
var map__17455 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17455__$1 = ((((!((map__17455 == null)))?(((((map__17455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17455):map__17455);
var opts__$1 = map__17455__$1;
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17455__$1,cljs.core.cst$kw$duration);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_animation_DASH_opts,opts__$1):null);
var images = cljs.core.vec(children);
var cycle_time = cljs.core.mod(play_cljs.core.get_total_time(game),(duration * cljs.core.count(images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(images,index);
return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,image,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (game,renderer,content,parent_opts){
var vec__17457 = content;
var seq__17458 = cljs.core.seq(vec__17457);
var first__17459 = cljs.core.first(seq__17458);
var seq__17458__$1 = cljs.core.next(seq__17458);
var _ = first__17459;
var first__17459__$1 = cljs.core.first(seq__17458__$1);
var seq__17458__$2 = cljs.core.next(seq__17458__$1);
var opts = first__17459__$1;
var children = seq__17458__$2;
var map__17460 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17460__$1 = ((((!((map__17460 == null)))?(((((map__17460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17460):map__17460);
var opts__$1 = map__17460__$1;
var grayscale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,cljs.core.cst$kw$grayscale);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,cljs.core.cst$kw$color);
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,cljs.core.cst$kw$colors);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_fill_DASH_opts,opts__$1);
} else {
}

renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.fill(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.fill(color);
} else {
if(cljs.core.truth_(colors)){
var vec__17462_17465 = colors;
var n1_17466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462_17465,(0),null);
var n2_17467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462_17465,(1),null);
var n3_17468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462_17465,(2),null);
var a_17469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462_17465,(3),null);
renderer.fill(n1_17466,n2_17467,n3_17468,a_17469);
} else {
renderer.noFill();

}
}
}

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.pop();
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stroke,(function (game,renderer,content,parent_opts){
var vec__17470 = content;
var seq__17471 = cljs.core.seq(vec__17470);
var first__17472 = cljs.core.first(seq__17471);
var seq__17471__$1 = cljs.core.next(seq__17471);
var _ = first__17472;
var first__17472__$1 = cljs.core.first(seq__17471__$1);
var seq__17471__$2 = cljs.core.next(seq__17471__$1);
var opts = first__17472__$1;
var children = seq__17471__$2;
var map__17473 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17473__$1 = ((((!((map__17473 == null)))?(((((map__17473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17473):map__17473);
var opts__$1 = map__17473__$1;
var grayscale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473__$1,cljs.core.cst$kw$grayscale);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473__$1,cljs.core.cst$kw$color);
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17473__$1,cljs.core.cst$kw$colors);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_stroke_DASH_opts,opts__$1);
} else {
}

renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.stroke(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.stroke(color);
} else {
if(cljs.core.truth_(colors)){
var vec__17475_17478 = colors;
var n1_17479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475_17478,(0),null);
var n2_17480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475_17478,(1),null);
var n3_17481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475_17478,(2),null);
renderer.stroke(n1_17479,n2_17480,n3_17481);
} else {
renderer.noStroke();

}
}
}

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.pop();
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bezier,(function (game,renderer,content,parent_opts){
var vec__17482 = content;
var seq__17483 = cljs.core.seq(vec__17482);
var first__17484 = cljs.core.first(seq__17483);
var seq__17483__$1 = cljs.core.next(seq__17483);
var _ = first__17484;
var first__17484__$1 = cljs.core.first(seq__17483__$1);
var seq__17483__$2 = cljs.core.next(seq__17483__$1);
var opts = first__17484__$1;
var children = seq__17483__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_bezier_DASH_opts,opts__$1):null);
var map__17485 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts__$1,cljs.core.cst$kw$x1,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y1,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x2,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y2,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x3,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y3,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x4,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y4,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__17485__$1 = ((((!((map__17485 == null)))?(((((map__17485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17485):map__17485);
var opts__$2 = map__17485__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$x1);
var y4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$y4);
var z3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$z3);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$y2);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$x2);
var z2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$z2);
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$y3);
var x4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$x4);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$y1);
var z1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$z1);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$x3);
var z4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,cljs.core.cst$kw$z4);
if(cljs.core.truth_((function (){var and__3925__auto__ = z1;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = z2;
if(cljs.core.truth_(and__3925__auto____$1)){
var and__3925__auto____$2 = z3;
if(cljs.core.truth_(and__3925__auto____$2)){
return z4;
} else {
return and__3925__auto____$2;
}
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
renderer.bezier(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
} else {
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
}

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$2) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$curve,(function (game,renderer,content,parent_opts){
var vec__17487 = content;
var seq__17488 = cljs.core.seq(vec__17487);
var first__17489 = cljs.core.first(seq__17488);
var seq__17488__$1 = cljs.core.next(seq__17488);
var _ = first__17489;
var first__17489__$1 = cljs.core.first(seq__17488__$1);
var seq__17488__$2 = cljs.core.next(seq__17488__$1);
var opts = first__17489__$1;
var children = seq__17488__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_curve_DASH_opts,opts__$1):null);
var map__17490 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts__$1,cljs.core.cst$kw$x1,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y1,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x2,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y2,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x3,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y3,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$x4,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts__$1)),cljs.core.cst$kw$y4,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__17490__$1 = ((((!((map__17490 == null)))?(((((map__17490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17490):map__17490);
var opts__$2 = map__17490__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$x1);
var y4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$y4);
var z3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$z3);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$y2);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$x2);
var z2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$z2);
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$y3);
var x4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$x4);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$y1);
var z1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$z1);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$x3);
var z4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$z4);
if(cljs.core.truth_((function (){var and__3925__auto__ = z1;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = z2;
if(cljs.core.truth_(and__3925__auto____$1)){
var and__3925__auto____$2 = z3;
if(cljs.core.truth_(and__3925__auto____$2)){
return z4;
} else {
return and__3925__auto____$2;
}
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
renderer.curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
} else {
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
}

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$2) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rgb,(function (game,renderer,content,parent_opts){
var vec__17492 = content;
var seq__17493 = cljs.core.seq(vec__17492);
var first__17494 = cljs.core.first(seq__17493);
var seq__17493__$1 = cljs.core.next(seq__17493);
var _ = first__17494;
var first__17494__$1 = cljs.core.first(seq__17493__$1);
var seq__17493__$2 = cljs.core.next(seq__17493__$1);
var opts = first__17494__$1;
var children = seq__17493__$2;
var map__17495 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17495__$1 = ((((!((map__17495 == null)))?(((((map__17495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17495):map__17495);
var opts__$1 = map__17495__$1;
var max_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17495__$1,cljs.core.cst$kw$max_DASH_r);
var max_g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17495__$1,cljs.core.cst$kw$max_DASH_g);
var max_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17495__$1,cljs.core.cst$kw$max_DASH_b);
var max_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17495__$1,cljs.core.cst$kw$max_DASH_a);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_rgb_DASH_opts,opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.pop();
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hsb,(function (game,renderer,content,parent_opts){
var vec__17497 = content;
var seq__17498 = cljs.core.seq(vec__17497);
var first__17499 = cljs.core.first(seq__17498);
var seq__17498__$1 = cljs.core.next(seq__17498);
var _ = first__17499;
var first__17499__$1 = cljs.core.first(seq__17498__$1);
var seq__17498__$2 = cljs.core.next(seq__17498__$1);
var opts = first__17499__$1;
var children = seq__17498__$2;
var map__17500 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17500__$1 = ((((!((map__17500 == null)))?(((((map__17500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17500):map__17500);
var opts__$1 = map__17500__$1;
var max_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,cljs.core.cst$kw$max_DASH_h);
var max_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,cljs.core.cst$kw$max_DASH_s);
var max_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,cljs.core.cst$kw$max_DASH_b);
var max_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,cljs.core.cst$kw$max_DASH_a);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_hsb_DASH_opts,opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.pop();
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hsl,(function (game,renderer,content,parent_opts){
var vec__17502 = content;
var seq__17503 = cljs.core.seq(vec__17502);
var first__17504 = cljs.core.first(seq__17503);
var seq__17503__$1 = cljs.core.next(seq__17503);
var _ = first__17504;
var first__17504__$1 = cljs.core.first(seq__17503__$1);
var seq__17503__$2 = cljs.core.next(seq__17503__$1);
var opts = first__17504__$1;
var children = seq__17503__$2;
var map__17505 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17505__$1 = ((((!((map__17505 == null)))?(((((map__17505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17505):map__17505);
var opts__$1 = map__17505__$1;
var max_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,cljs.core.cst$kw$max_DASH_h);
var max_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,cljs.core.cst$kw$max_DASH_s);
var max_l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,cljs.core.cst$kw$max_DASH_l);
var max_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,cljs.core.cst$kw$max_DASH_a);
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_hsl_DASH_opts,opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.HSL,max_h,max_s,max_l,max_a);

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.pop();
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiled_DASH_map,(function (game,renderer,content,parent_opts){
var vec__17507 = content;
var seq__17508 = cljs.core.seq(vec__17507);
var first__17509 = cljs.core.first(seq__17508);
var seq__17508__$1 = cljs.core.next(seq__17508);
var _ = first__17509;
var first__17509__$1 = cljs.core.first(seq__17508__$1);
var seq__17508__$2 = cljs.core.next(seq__17508__$1);
var opts = first__17509__$1;
var children = seq__17508__$2;
var map__17510 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
var map__17510__$1 = ((((!((map__17510 == null)))?(((((map__17510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17510):map__17510);
var opts__$1 = map__17510__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,cljs.core.cst$kw$name);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,cljs.core.cst$kw$y);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_tiled_DASH_map_DASH_opts,opts__$1):null);
var value__$1 = (function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = play_cljs.core.get_asset(game,name);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return play_cljs.core.load_tiled_map(game,name);
}
}
})();
value__$1.draw(x,y);

return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$shape,(function (game,renderer,content,parent_opts){
var vec__17512 = content;
var seq__17513 = cljs.core.seq(vec__17512);
var first__17514 = cljs.core.first(seq__17513);
var seq__17513__$1 = cljs.core.next(seq__17513);
var _ = first__17514;
var first__17514__$1 = cljs.core.first(seq__17513__$1);
var seq__17513__$2 = cljs.core.next(seq__17513__$1);
var opts = first__17514__$1;
var children = seq__17513__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_shape_DASH_opts,opts__$1);
} else {
}

renderer.beginShape();

var G__17518_17525 = cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(opts__$1);
var vec__17519_17526 = G__17518_17525;
var seq__17520_17527 = cljs.core.seq(vec__17519_17526);
var first__17521_17528 = cljs.core.first(seq__17520_17527);
var seq__17520_17529__$1 = cljs.core.next(seq__17520_17527);
var x_17530 = first__17521_17528;
var first__17521_17531__$1 = cljs.core.first(seq__17520_17529__$1);
var seq__17520_17532__$2 = cljs.core.next(seq__17520_17529__$1);
var y_17533 = first__17521_17531__$1;
var rest_17534 = seq__17520_17532__$2;
var G__17518_17535__$1 = G__17518_17525;
while(true){
var vec__17522_17536 = G__17518_17535__$1;
var seq__17523_17537 = cljs.core.seq(vec__17522_17536);
var first__17524_17538 = cljs.core.first(seq__17523_17537);
var seq__17523_17539__$1 = cljs.core.next(seq__17523_17537);
var x_17540__$1 = first__17524_17538;
var first__17524_17541__$1 = cljs.core.first(seq__17523_17539__$1);
var seq__17523_17542__$2 = cljs.core.next(seq__17523_17539__$1);
var y_17543__$1 = first__17524_17541__$1;
var rest_17544__$1 = seq__17523_17542__$2;
renderer.vertex(x_17540__$1,y_17543__$1);

if(rest_17544__$1){
var G__17545 = rest_17544__$1;
G__17518_17535__$1 = G__17545;
continue;
} else {
}
break;
}

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.endShape(renderer.CLOSE);
}));
play_cljs.core.draw_sketch_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$contour,(function (game,renderer,content,parent_opts){
var vec__17546 = content;
var seq__17547 = cljs.core.seq(vec__17546);
var first__17548 = cljs.core.first(seq__17547);
var seq__17547__$1 = cljs.core.next(seq__17547);
var _ = first__17548;
var first__17548__$1 = cljs.core.first(seq__17547__$1);
var seq__17547__$2 = cljs.core.next(seq__17547__$1);
var opts = first__17548__$1;
var children = seq__17547__$2;
var opts__$1 = play_cljs.options.update_opts(opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts(cljs.core.cst$kw$play_DASH_cljs$options_SLASH_contour_DASH_opts,opts__$1);
} else {
}

renderer.beginContour();

var G__17552_17559 = cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(opts__$1);
var vec__17553_17560 = G__17552_17559;
var seq__17554_17561 = cljs.core.seq(vec__17553_17560);
var first__17555_17562 = cljs.core.first(seq__17554_17561);
var seq__17554_17563__$1 = cljs.core.next(seq__17554_17561);
var x_17564 = first__17555_17562;
var first__17555_17565__$1 = cljs.core.first(seq__17554_17563__$1);
var seq__17554_17566__$2 = cljs.core.next(seq__17554_17563__$1);
var y_17567 = first__17555_17565__$1;
var rest_17568 = seq__17554_17566__$2;
var G__17552_17569__$1 = G__17552_17559;
while(true){
var vec__17556_17570 = G__17552_17569__$1;
var seq__17557_17571 = cljs.core.seq(vec__17556_17570);
var first__17558_17572 = cljs.core.first(seq__17557_17571);
var seq__17557_17573__$1 = cljs.core.next(seq__17557_17571);
var x_17574__$1 = first__17558_17572;
var first__17558_17575__$1 = cljs.core.first(seq__17557_17573__$1);
var seq__17557_17576__$2 = cljs.core.next(seq__17557_17573__$1);
var y_17577__$1 = first__17558_17575__$1;
var rest_17578__$1 = seq__17557_17576__$2;
renderer.vertex(x_17574__$1,y_17577__$1);

if(rest_17578__$1){
var G__17579 = rest_17578__$1;
G__17552_17569__$1 = G__17579;
continue;
} else {
}
break;
}

(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(game,renderer,children,opts__$1) : play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1));

return renderer.endContour(renderer.CLOSE);
}));
/**
 * Returns a game object. You can pass an options map with the following:
 *   
 *   :parent  -  A DOM element in which to place the canvas
 *   :debug?  -  Whether or not to enable debug mode
 *            (defaults to true if :optimizations are set to :none)
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(var_args){
var G__17581 = arguments.length;
switch (G__17581) {
case 2:
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3(width,height,cljs.core.PersistentArrayMap.EMPTY);
});

play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3 = (function (width,height,p__17582){
var map__17583 = p__17582;
var map__17583__$1 = ((((!((map__17583 == null)))?(((((map__17583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17583):map__17583);
var opts = map__17583__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17583__$1,cljs.core.cst$kw$parent);
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17583__$1,cljs.core.cst$kw$debug_QMARK_,cljs.core.not(COMPILED));
if(cljs.core.truth_(debug_QMARK_)){
console.log(["Debug mode is enabled. If things are slow, try passing ","{:debug? false} to the third argument of create-game."].join(''));
} else {
p5.disableFriendlyErrors = true;
}

var _STAR_hidden_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$screen,null,cljs.core.cst$kw$renderer,null,cljs.core.cst$kw$canvas,null,cljs.core.cst$kw$listeners,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$total_DASH_time,(0),cljs.core.cst$kw$delta_DASH_time,(0),cljs.core.cst$kw$pressed_DASH_keys,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$assets,cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var parent_opts = (cljs.core.truth_(debug_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$debug_QMARK_,true], null):cljs.core.PersistentArrayMap.EMPTY);
if((typeof play_cljs !== 'undefined') && (typeof play_cljs.core !== 'undefined') && (typeof play_cljs.core.t_play_cljs$core17585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core17585 = (function (setup_finished_QMARK_,height,_STAR_hidden_state,map__17583,parent,parent_opts,width,p__17582,debug_QMARK_,opts,meta17586){
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.height = height;
this._STAR_hidden_state = _STAR_hidden_state;
this.map__17583 = map__17583;
this.parent = parent;
this.parent_opts = parent_opts;
this.width = width;
this.p__17582 = p__17582;
this.debug_QMARK_ = debug_QMARK_;
this.opts = opts;
this.meta17586 = meta17586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
play_cljs.core.t_play_cljs$core17585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (_17587,meta17586__$1){
var self__ = this;
var _17587__$1 = this;
return (new play_cljs.core.t_play_cljs$core17585(self__.setup_finished_QMARK_,self__.height,self__._STAR_hidden_state,self__.map__17583,self__.parent,self__.parent_opts,self__.width,self__.p__17582,self__.debug_QMARK_,self__.opts,meta17586__$1));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (_17587){
var self__ = this;
var _17587__$1 = this;
return self__.meta17586;
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.resizeCanvas(width__$1,height__$1);
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.createGraphics(width__$1,height__$1);
(play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,object,content,self__.parent_opts) : play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,self__.parent_opts));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.update,cljs.core.cst$kw$assets,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([image_name,object], 0));

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.loadImage(path,((function (renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
return null;
});})(renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.update,cljs.core.cst$kw$assets,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,object], 0));

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.width;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__._STAR_hidden_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assets,name], null));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.height;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$start$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto___17626 = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto___17626)){
var renderer_17627 = temp__5457__auto___17626;
renderer_17627.remove();
} else {
}

cljs.core.run_BANG_(goog.events.unlistenByKey,cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__._STAR_hidden_state,cljs.core.assoc,cljs.core.cst$kw$listeners,cljs.core.PersistentVector.EMPTY);

(new p5(((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (renderer){
renderer.setup = ((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
var canvas_wrapper_17628 = (function (){var G__17588 = renderer.createCanvas(self__.width,self__.height);
if(cljs.core.truth_(self__.parent)){
return G__17588.parent(self__.parent);
} else {
return G__17588;
}
})();
var canvas_17629 = canvas_wrapper_17628.canvas;
canvas_17629.removeAttribute("style");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.assoc,cljs.core.cst$kw$renderer,renderer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$canvas,canvas_17629], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.setup_finished_QMARK_,true);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

return renderer.draw = ((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__._STAR_hidden_state,((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (hidden_state){
var time = renderer.millis();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hidden_state,cljs.core.cst$kw$total_DASH_time,time,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$delta_DASH_time,(time - cljs.core.cst$kw$total_DASH_time.cljs$core$IFn$_invoke$arity$1(hidden_state))], 0));
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);

renderer.clear();

var G__17589 = this$__$1;
var G__17589__$1 = (((G__17589 == null))?null:G__17589.play_cljs$core$Game$get_screen$arity$1(null));
if((G__17589__$1 == null)){
return null;
} else {
return play_cljs.core.on_render(G__17589__$1);
}
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
));

this$__$1.play_cljs$core$Game$listen$arity$3(null,"keydown",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.update,cljs.core.cst$kw$pressed_DASH_keys,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.keyCode], 0));
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);

this$__$1.play_cljs$core$Game$listen$arity$3(null,"keyup",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__._STAR_hidden_state,cljs.core.assoc,cljs.core.cst$kw$pressed_DASH_keys,cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.update,cljs.core.cst$kw$pressed_DASH_keys,cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.keyCode], 0));
}
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);

return this$__$1.play_cljs$core$Game$listen$arity$3(null,"blur",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__._STAR_hidden_state,cljs.core.assoc,cljs.core.cst$kw$pressed_DASH_keys,cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$delta_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$pressed_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$render$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return (play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4 ? play_cljs.core.draw_sketch_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,renderer,content,self__.parent_opts) : play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,renderer,content,self__.parent_opts));
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$listen$arity$3 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,listen_type,listener){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.update,cljs.core.cst$kw$listeners,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.events.listen(window,listen_type,listener)], 0));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = this$__$1.play_cljs$core$Game$get_renderer$arity$1(null);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.loadTiledMap(map_name,((function (renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
return null;
});})(renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__._STAR_hidden_state,cljs.core.update,cljs.core.cst$kw$assets,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_name,object], 0));

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (state_17608){
var state_val_17609 = (state_17608[(1)]);
if((state_val_17609 === (1))){
var state_17608__$1 = state_17608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17608__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_17609 === (2))){
var inst_17591 = (state_17608[(2)]);
var inst_17593 = (this$__$1 == null);
var state_17608__$1 = (function (){var statearr_17610 = state_17608;
(statearr_17610[(7)] = inst_17591);

return statearr_17610;
})();
if(cljs.core.truth_(inst_17593)){
var statearr_17611_17630 = state_17608__$1;
(statearr_17611_17630[(1)] = (3));

} else {
var statearr_17612_17631 = state_17608__$1;
(statearr_17612_17631[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17609 === (3))){
var state_17608__$1 = state_17608;
var statearr_17613_17632 = state_17608__$1;
(statearr_17613_17632[(2)] = null);

(statearr_17613_17632[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17609 === (4))){
var inst_17596 = this$__$1.play_cljs$core$Game$get_screen$arity$1(null);
var state_17608__$1 = state_17608;
var statearr_17614_17633 = state_17608__$1;
(statearr_17614_17633[(2)] = inst_17596);

(statearr_17614_17633[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17609 === (5))){
var inst_17598 = (state_17608[(8)]);
var inst_17598__$1 = (state_17608[(2)]);
var inst_17599 = (inst_17598__$1 == null);
var state_17608__$1 = (function (){var statearr_17615 = state_17608;
(statearr_17615[(8)] = inst_17598__$1);

return statearr_17615;
})();
if(cljs.core.truth_(inst_17599)){
var statearr_17616_17634 = state_17608__$1;
(statearr_17616_17634[(1)] = (6));

} else {
var statearr_17617_17635 = state_17608__$1;
(statearr_17617_17635[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17609 === (6))){
var state_17608__$1 = state_17608;
var statearr_17618_17636 = state_17608__$1;
(statearr_17618_17636[(2)] = null);

(statearr_17618_17636[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17609 === (7))){
var inst_17598 = (state_17608[(8)]);
var inst_17602 = play_cljs.core.on_hide(inst_17598);
var state_17608__$1 = state_17608;
var statearr_17619_17637 = state_17608__$1;
(statearr_17619_17637[(2)] = inst_17602);

(statearr_17619_17637[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17609 === (8))){
var inst_17604 = (state_17608[(2)]);
var inst_17605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__._STAR_hidden_state,cljs.core.assoc,cljs.core.cst$kw$screen,screen);
var inst_17606 = play_cljs.core.on_show(screen);
var state_17608__$1 = (function (){var statearr_17620 = state_17608;
(statearr_17620[(9)] = inst_17605);

(statearr_17620[(10)] = inst_17604);

return statearr_17620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17608__$1,inst_17606);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__12146__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;
return ((function (switch__12044__auto__,c__12146__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function() {
var play_cljs$core$state_machine__12045__auto__ = null;
var play_cljs$core$state_machine__12045__auto____0 = (function (){
var statearr_17621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17621[(0)] = play_cljs$core$state_machine__12045__auto__);

(statearr_17621[(1)] = (1));

return statearr_17621;
});
var play_cljs$core$state_machine__12045__auto____1 = (function (state_17608){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_17608);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e17622){if((e17622 instanceof Object)){
var ex__12048__auto__ = e17622;
var statearr_17623_17638 = state_17608;
(statearr_17623_17638[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17608);

return cljs.core.cst$kw$recur;
} else {
throw e17622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__17639 = state_17608;
state_17608 = G__17639;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
play_cljs$core$state_machine__12045__auto__ = function(state_17608){
switch(arguments.length){
case 0:
return play_cljs$core$state_machine__12045__auto____0.call(this);
case 1:
return play_cljs$core$state_machine__12045__auto____1.call(this,state_17608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_cljs$core$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$state_machine__12045__auto____0;
play_cljs$core$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$state_machine__12045__auto____1;
return play_cljs$core$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
})();
var state__12148__auto__ = (function (){var statearr_17624 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_17624[(6)] = c__12146__auto__);

return statearr_17624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
);

return c__12146__auto__;
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$total_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.getBasis = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$setup_DASH_finished_QMARK_,cljs.core.cst$sym$height,cljs.core.cst$sym$_STAR_hidden_DASH_state,cljs.core.cst$sym$map__17583,cljs.core.cst$sym$parent,cljs.core.cst$sym$parent_DASH_opts,cljs.core.cst$sym$width,cljs.core.cst$sym$p__17582,cljs.core.cst$sym$debug_QMARK_,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta17586], null);
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core17585.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core17585.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core17585";

play_cljs.core.t_play_cljs$core17585.cljs$lang$ctorPrWriter = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"play-cljs.core/t_play_cljs$core17585");
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

/**
 * Positional factory function for play-cljs.core/t_play_cljs$core17585.
 */
play_cljs.core.__GT_t_play_cljs$core17585 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_){
return (function play_cljs$core$__GT_t_play_cljs$core17585(setup_finished_QMARK___$1,height__$1,_STAR_hidden_state__$1,map__17583__$2,parent__$1,parent_opts__$1,width__$1,p__17582__$1,debug_QMARK___$1,opts__$1,meta17586){
return (new play_cljs.core.t_play_cljs$core17585(setup_finished_QMARK___$1,height__$1,_STAR_hidden_state__$1,map__17583__$2,parent__$1,parent_opts__$1,width__$1,p__17582__$1,debug_QMARK___$1,opts__$1,meta17586));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__17583,map__17583__$1,opts,parent,debug_QMARK_))
;

}

return (new play_cljs.core.t_play_cljs$core17585(setup_finished_QMARK_,height,_STAR_hidden_state,map__17583__$1,parent,parent_opts,width,p__17582,debug_QMARK_,opts,cljs.core.PersistentArrayMap.EMPTY));
});

play_cljs.core.create_game.cljs$lang$maxFixedArity = 3;

