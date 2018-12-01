// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('nightlight.repl_server');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('eval_soup.core');
nightlight.repl_server.cljs_start_ns = cljs.core.cst$sym$cljs$user;
nightlight.repl_server.form__GT_serializable = (function nightlight$repl_server$form__GT_serializable(form){
if((form instanceof Error)){
return [(function (){var or__3936__auto__ = (function (){var G__33666 = form;
var G__33666__$1 = (((G__33666 == null))?null:G__33666.cause);
if((G__33666__$1 == null)){
return null;
} else {
return G__33666__$1.message;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return form.message;
}
})(),form.fileName,form.lineNumber];
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
}
});
nightlight.repl_server.init_cljs_server = (function nightlight$repl_server$init_cljs_server(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.self,window.top)){
var _STAR_current_ns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$user);
window.onmessage = ((function (_STAR_current_ns){
return (function (e){
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3(e.data.forms,((function (_STAR_current_ns){
return (function (results){
return window.parent.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,e.data.type,cljs.core.cst$kw$results,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nightlight.repl_server.form__GT_serializable,results)),cljs.core.cst$kw$ns,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_current_ns))].join('')], null)),"*");
});})(_STAR_current_ns))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_STAR_current_DASH_ns,_STAR_current_ns,cljs.core.cst$kw$custom_DASH_load,((function (_STAR_current_ns){
return (function (opts,cb){
var G__33667 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__33667) : cb.call(null,G__33667));
});})(_STAR_current_ns))
], null));
});})(_STAR_current_ns))
;

return window.parent.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"repl",cljs.core.cst$kw$results,[""],cljs.core.cst$kw$ns,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_current_ns))].join('')], null)),"*");
} else {
return null;
}
});
nightlight.repl_server.init_cljs_server();
