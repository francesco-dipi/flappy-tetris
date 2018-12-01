// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('expound.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
expound.util.assert_message = "Internal Expound assertion failed. Please report this bug at https://github.com/bhb/expound/issues";
expound.util.nan_QMARK_ = (function expound$util$nan_QMARK_(x){
var and__3925__auto__ = typeof x === 'number';
if(and__3925__auto__){
return isNaN(x);
} else {
return and__3925__auto__;
}
});
