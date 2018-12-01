// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12206 = arguments.length;
switch (G__12206) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12207 = (function (f,blockable,meta12208){
this.f = f;
this.blockable = blockable;
this.meta12208 = meta12208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12209,meta12208__$1){
var self__ = this;
var _12209__$1 = this;
return (new cljs.core.async.t_cljs$core$async12207(self__.f,self__.blockable,meta12208__$1));
});

cljs.core.async.t_cljs$core$async12207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12209){
var self__ = this;
var _12209__$1 = this;
return self__.meta12208;
});

cljs.core.async.t_cljs$core$async12207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12208], null);
});

cljs.core.async.t_cljs$core$async12207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12207";

cljs.core.async.t_cljs$core$async12207.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async12207");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12207.
 */
cljs.core.async.__GT_t_cljs$core$async12207 = (function cljs$core$async$__GT_t_cljs$core$async12207(f__$1,blockable__$1,meta12208){
return (new cljs.core.async.t_cljs$core$async12207(f__$1,blockable__$1,meta12208));
});

}

return (new cljs.core.async.t_cljs$core$async12207(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12213 = arguments.length;
switch (G__12213) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12216 = arguments.length;
switch (G__12216) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12219 = arguments.length;
switch (G__12219) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_12221 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12221) : fn1.call(null,val_12221));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12221,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12221) : fn1.call(null,val_12221));
});})(val_12221,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12223 = arguments.length;
switch (G__12223) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4394__auto___12225 = n;
var x_12226 = (0);
while(true){
if((x_12226 < n__4394__auto___12225)){
(a[x_12226] = (0));

var G__12227 = (x_12226 + (1));
x_12226 = G__12227;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__12228 = (i + (1));
i = G__12228;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12229 = (function (flag,meta12230){
this.flag = flag;
this.meta12230 = meta12230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12231,meta12230__$1){
var self__ = this;
var _12231__$1 = this;
return (new cljs.core.async.t_cljs$core$async12229(self__.flag,meta12230__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12231){
var self__ = this;
var _12231__$1 = this;
return self__.meta12230;
});})(flag))
;

cljs.core.async.t_cljs$core$async12229.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12229.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12229.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta12230], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12229";

cljs.core.async.t_cljs$core$async12229.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async12229");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12229.
 */
cljs.core.async.__GT_t_cljs$core$async12229 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12229(flag__$1,meta12230){
return (new cljs.core.async.t_cljs$core$async12229(flag__$1,meta12230));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12229(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12232 = (function (flag,cb,meta12233){
this.flag = flag;
this.cb = cb;
this.meta12233 = meta12233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12234,meta12233__$1){
var self__ = this;
var _12234__$1 = this;
return (new cljs.core.async.t_cljs$core$async12232(self__.flag,self__.cb,meta12233__$1));
});

cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12234){
var self__ = this;
var _12234__$1 = this;
return self__.meta12233;
});

cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta12233], null);
});

cljs.core.async.t_cljs$core$async12232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12232";

cljs.core.async.t_cljs$core$async12232.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async12232");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12232.
 */
cljs.core.async.__GT_t_cljs$core$async12232 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12232(flag__$1,cb__$1,meta12233){
return (new cljs.core.async.t_cljs$core$async12232(flag__$1,cb__$1,meta12233));
});

}

return (new cljs.core.async.t_cljs$core$async12232(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12235_SHARP_){
var G__12237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12235_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12237) : fret.call(null,G__12237));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12236_SHARP_){
var G__12238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12236_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12238) : fret.call(null,G__12238));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12239 = (i + (1));
i = G__12239;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3936__auto__ = ret;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___12245 = arguments.length;
var i__4518__auto___12246 = (0);
while(true){
if((i__4518__auto___12246 < len__4517__auto___12245)){
args__4520__auto__.push((arguments[i__4518__auto___12246]));

var G__12247 = (i__4518__auto___12246 + (1));
i__4518__auto___12246 = G__12247;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12242){
var map__12243 = p__12242;
var map__12243__$1 = ((((!((map__12243 == null)))?(((((map__12243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12243):map__12243);
var opts = map__12243__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12240){
var G__12241 = cljs.core.first(seq12240);
var seq12240__$1 = cljs.core.next(seq12240);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12241,seq12240__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12249 = arguments.length;
switch (G__12249) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12146__auto___12295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___12295){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___12295){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12275_12296 = state_12273__$1;
(statearr_12275_12296[(2)] = inst_12269);

(statearr_12275_12296[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12276_12297 = state_12273__$1;
(statearr_12276_12297[(2)] = null);

(statearr_12276_12297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (4))){
var inst_12252 = (state_12273[(7)]);
var inst_12252__$1 = (state_12273[(2)]);
var inst_12253 = (inst_12252__$1 == null);
var state_12273__$1 = (function (){var statearr_12277 = state_12273;
(statearr_12277[(7)] = inst_12252__$1);

return statearr_12277;
})();
if(cljs.core.truth_(inst_12253)){
var statearr_12278_12298 = state_12273__$1;
(statearr_12278_12298[(1)] = (5));

} else {
var statearr_12279_12299 = state_12273__$1;
(statearr_12279_12299[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (13))){
var state_12273__$1 = state_12273;
var statearr_12280_12300 = state_12273__$1;
(statearr_12280_12300[(2)] = null);

(statearr_12280_12300[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (6))){
var inst_12252 = (state_12273[(7)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12273__$1,(11),to,inst_12252);
} else {
if((state_val_12274 === (3))){
var inst_12271 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12273__$1,inst_12271);
} else {
if((state_val_12274 === (12))){
var state_12273__$1 = state_12273;
var statearr_12281_12301 = state_12273__$1;
(statearr_12281_12301[(2)] = null);

(statearr_12281_12301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (2))){
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12273__$1,(4),from);
} else {
if((state_val_12274 === (11))){
var inst_12262 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
if(cljs.core.truth_(inst_12262)){
var statearr_12282_12302 = state_12273__$1;
(statearr_12282_12302[(1)] = (12));

} else {
var statearr_12283_12303 = state_12273__$1;
(statearr_12283_12303[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (9))){
var state_12273__$1 = state_12273;
var statearr_12284_12304 = state_12273__$1;
(statearr_12284_12304[(2)] = null);

(statearr_12284_12304[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12285_12305 = state_12273__$1;
(statearr_12285_12305[(1)] = (8));

} else {
var statearr_12286_12306 = state_12273__$1;
(statearr_12286_12306[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (14))){
var inst_12267 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12287_12307 = state_12273__$1;
(statearr_12287_12307[(2)] = inst_12267);

(statearr_12287_12307[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (10))){
var inst_12259 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12288_12308 = state_12273__$1;
(statearr_12288_12308[(2)] = inst_12259);

(statearr_12288_12308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (8))){
var inst_12256 = cljs.core.async.close_BANG_(to);
var state_12273__$1 = state_12273;
var statearr_12289_12309 = state_12273__$1;
(statearr_12289_12309[(2)] = inst_12256);

(statearr_12289_12309[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__12146__auto___12295))
;
return ((function (switch__12044__auto__,c__12146__auto___12295){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_12290 = [null,null,null,null,null,null,null,null];
(statearr_12290[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_12290[(1)] = (1));

return statearr_12290;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_12273){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12273);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12291){if((e12291 instanceof Object)){
var ex__12048__auto__ = e12291;
var statearr_12292_12310 = state_12273;
(statearr_12292_12310[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12273);

return cljs.core.cst$kw$recur;
} else {
throw e12291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12311 = state_12273;
state_12273 = G__12311;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_12273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_12273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___12295))
})();
var state__12148__auto__ = (function (){var statearr_12293 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12293[(6)] = c__12146__auto___12295);

return statearr_12293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___12295))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__12312){
var vec__12313 = p__12312;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12313,(1),null);
var job = vec__12313;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12146__auto___12484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___12484,res,vec__12313,v,p,job,jobs,results){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___12484,res,vec__12313,v,p,job,jobs,results){
return (function (state_12320){
var state_val_12321 = (state_12320[(1)]);
if((state_val_12321 === (1))){
var state_12320__$1 = state_12320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12320__$1,(2),res,v);
} else {
if((state_val_12321 === (2))){
var inst_12317 = (state_12320[(2)]);
var inst_12318 = cljs.core.async.close_BANG_(res);
var state_12320__$1 = (function (){var statearr_12322 = state_12320;
(statearr_12322[(7)] = inst_12317);

return statearr_12322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12320__$1,inst_12318);
} else {
return null;
}
}
});})(c__12146__auto___12484,res,vec__12313,v,p,job,jobs,results))
;
return ((function (switch__12044__auto__,c__12146__auto___12484,res,vec__12313,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0 = (function (){
var statearr_12323 = [null,null,null,null,null,null,null,null];
(statearr_12323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__);

(statearr_12323[(1)] = (1));

return statearr_12323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1 = (function (state_12320){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12320);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12324){if((e12324 instanceof Object)){
var ex__12048__auto__ = e12324;
var statearr_12325_12485 = state_12320;
(statearr_12325_12485[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12320);

return cljs.core.cst$kw$recur;
} else {
throw e12324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12486 = state_12320;
state_12320 = G__12486;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = function(state_12320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1.call(this,state_12320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___12484,res,vec__12313,v,p,job,jobs,results))
})();
var state__12148__auto__ = (function (){var statearr_12326 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12326[(6)] = c__12146__auto___12484);

return statearr_12326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___12484,res,vec__12313,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12327){
var vec__12328 = p__12327;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12328,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12328,(1),null);
var job = vec__12328;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4394__auto___12487 = n;
var __12488 = (0);
while(true){
if((__12488 < n__4394__auto___12487)){
var G__12331_12489 = type;
var G__12331_12490__$1 = (((G__12331_12489 instanceof cljs.core.Keyword))?G__12331_12489.fqn:null);
switch (G__12331_12490__$1) {
case "compute":
var c__12146__auto___12492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12488,c__12146__auto___12492,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (__12488,c__12146__auto___12492,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async){
return (function (state_12344){
var state_val_12345 = (state_12344[(1)]);
if((state_val_12345 === (1))){
var state_12344__$1 = state_12344;
var statearr_12346_12493 = state_12344__$1;
(statearr_12346_12493[(2)] = null);

(statearr_12346_12493[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12345 === (2))){
var state_12344__$1 = state_12344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12344__$1,(4),jobs);
} else {
if((state_val_12345 === (3))){
var inst_12342 = (state_12344[(2)]);
var state_12344__$1 = state_12344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12344__$1,inst_12342);
} else {
if((state_val_12345 === (4))){
var inst_12334 = (state_12344[(2)]);
var inst_12335 = process(inst_12334);
var state_12344__$1 = state_12344;
if(cljs.core.truth_(inst_12335)){
var statearr_12347_12494 = state_12344__$1;
(statearr_12347_12494[(1)] = (5));

} else {
var statearr_12348_12495 = state_12344__$1;
(statearr_12348_12495[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12345 === (5))){
var state_12344__$1 = state_12344;
var statearr_12349_12496 = state_12344__$1;
(statearr_12349_12496[(2)] = null);

(statearr_12349_12496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12345 === (6))){
var state_12344__$1 = state_12344;
var statearr_12350_12497 = state_12344__$1;
(statearr_12350_12497[(2)] = null);

(statearr_12350_12497[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12345 === (7))){
var inst_12340 = (state_12344[(2)]);
var state_12344__$1 = state_12344;
var statearr_12351_12498 = state_12344__$1;
(statearr_12351_12498[(2)] = inst_12340);

(statearr_12351_12498[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__12488,c__12146__auto___12492,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async))
;
return ((function (__12488,switch__12044__auto__,c__12146__auto___12492,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0 = (function (){
var statearr_12352 = [null,null,null,null,null,null,null];
(statearr_12352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__);

(statearr_12352[(1)] = (1));

return statearr_12352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1 = (function (state_12344){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12344);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12353){if((e12353 instanceof Object)){
var ex__12048__auto__ = e12353;
var statearr_12354_12499 = state_12344;
(statearr_12354_12499[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12344);

return cljs.core.cst$kw$recur;
} else {
throw e12353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12500 = state_12344;
state_12344 = G__12500;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = function(state_12344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1.call(this,state_12344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__;
})()
;})(__12488,switch__12044__auto__,c__12146__auto___12492,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async))
})();
var state__12148__auto__ = (function (){var statearr_12355 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12355[(6)] = c__12146__auto___12492);

return statearr_12355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(__12488,c__12146__auto___12492,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async))
);


break;
case "async":
var c__12146__auto___12501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12488,c__12146__auto___12501,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (__12488,c__12146__auto___12501,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async){
return (function (state_12368){
var state_val_12369 = (state_12368[(1)]);
if((state_val_12369 === (1))){
var state_12368__$1 = state_12368;
var statearr_12370_12502 = state_12368__$1;
(statearr_12370_12502[(2)] = null);

(statearr_12370_12502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12369 === (2))){
var state_12368__$1 = state_12368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12368__$1,(4),jobs);
} else {
if((state_val_12369 === (3))){
var inst_12366 = (state_12368[(2)]);
var state_12368__$1 = state_12368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12368__$1,inst_12366);
} else {
if((state_val_12369 === (4))){
var inst_12358 = (state_12368[(2)]);
var inst_12359 = async(inst_12358);
var state_12368__$1 = state_12368;
if(cljs.core.truth_(inst_12359)){
var statearr_12371_12503 = state_12368__$1;
(statearr_12371_12503[(1)] = (5));

} else {
var statearr_12372_12504 = state_12368__$1;
(statearr_12372_12504[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12369 === (5))){
var state_12368__$1 = state_12368;
var statearr_12373_12505 = state_12368__$1;
(statearr_12373_12505[(2)] = null);

(statearr_12373_12505[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12369 === (6))){
var state_12368__$1 = state_12368;
var statearr_12374_12506 = state_12368__$1;
(statearr_12374_12506[(2)] = null);

(statearr_12374_12506[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12369 === (7))){
var inst_12364 = (state_12368[(2)]);
var state_12368__$1 = state_12368;
var statearr_12375_12507 = state_12368__$1;
(statearr_12375_12507[(2)] = inst_12364);

(statearr_12375_12507[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__12488,c__12146__auto___12501,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async))
;
return ((function (__12488,switch__12044__auto__,c__12146__auto___12501,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0 = (function (){
var statearr_12376 = [null,null,null,null,null,null,null];
(statearr_12376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__);

(statearr_12376[(1)] = (1));

return statearr_12376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1 = (function (state_12368){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12368);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12377){if((e12377 instanceof Object)){
var ex__12048__auto__ = e12377;
var statearr_12378_12508 = state_12368;
(statearr_12378_12508[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12368);

return cljs.core.cst$kw$recur;
} else {
throw e12377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12509 = state_12368;
state_12368 = G__12509;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = function(state_12368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1.call(this,state_12368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__;
})()
;})(__12488,switch__12044__auto__,c__12146__auto___12501,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async))
})();
var state__12148__auto__ = (function (){var statearr_12379 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12379[(6)] = c__12146__auto___12501);

return statearr_12379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(__12488,c__12146__auto___12501,G__12331_12489,G__12331_12490__$1,n__4394__auto___12487,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12331_12490__$1)].join('')));

}

var G__12510 = (__12488 + (1));
__12488 = G__12510;
continue;
} else {
}
break;
}

var c__12146__auto___12511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___12511,jobs,results,process,async){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___12511,jobs,results,process,async){
return (function (state_12401){
var state_val_12402 = (state_12401[(1)]);
if((state_val_12402 === (1))){
var state_12401__$1 = state_12401;
var statearr_12403_12512 = state_12401__$1;
(statearr_12403_12512[(2)] = null);

(statearr_12403_12512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12402 === (2))){
var state_12401__$1 = state_12401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12401__$1,(4),from);
} else {
if((state_val_12402 === (3))){
var inst_12399 = (state_12401[(2)]);
var state_12401__$1 = state_12401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12401__$1,inst_12399);
} else {
if((state_val_12402 === (4))){
var inst_12382 = (state_12401[(7)]);
var inst_12382__$1 = (state_12401[(2)]);
var inst_12383 = (inst_12382__$1 == null);
var state_12401__$1 = (function (){var statearr_12404 = state_12401;
(statearr_12404[(7)] = inst_12382__$1);

return statearr_12404;
})();
if(cljs.core.truth_(inst_12383)){
var statearr_12405_12513 = state_12401__$1;
(statearr_12405_12513[(1)] = (5));

} else {
var statearr_12406_12514 = state_12401__$1;
(statearr_12406_12514[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12402 === (5))){
var inst_12385 = cljs.core.async.close_BANG_(jobs);
var state_12401__$1 = state_12401;
var statearr_12407_12515 = state_12401__$1;
(statearr_12407_12515[(2)] = inst_12385);

(statearr_12407_12515[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12402 === (6))){
var inst_12382 = (state_12401[(7)]);
var inst_12387 = (state_12401[(8)]);
var inst_12387__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12389 = [inst_12382,inst_12387__$1];
var inst_12390 = (new cljs.core.PersistentVector(null,2,(5),inst_12388,inst_12389,null));
var state_12401__$1 = (function (){var statearr_12408 = state_12401;
(statearr_12408[(8)] = inst_12387__$1);

return statearr_12408;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12401__$1,(8),jobs,inst_12390);
} else {
if((state_val_12402 === (7))){
var inst_12397 = (state_12401[(2)]);
var state_12401__$1 = state_12401;
var statearr_12409_12516 = state_12401__$1;
(statearr_12409_12516[(2)] = inst_12397);

(statearr_12409_12516[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12402 === (8))){
var inst_12387 = (state_12401[(8)]);
var inst_12392 = (state_12401[(2)]);
var state_12401__$1 = (function (){var statearr_12410 = state_12401;
(statearr_12410[(9)] = inst_12392);

return statearr_12410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12401__$1,(9),results,inst_12387);
} else {
if((state_val_12402 === (9))){
var inst_12394 = (state_12401[(2)]);
var state_12401__$1 = (function (){var statearr_12411 = state_12401;
(statearr_12411[(10)] = inst_12394);

return statearr_12411;
})();
var statearr_12412_12517 = state_12401__$1;
(statearr_12412_12517[(2)] = null);

(statearr_12412_12517[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
});})(c__12146__auto___12511,jobs,results,process,async))
;
return ((function (switch__12044__auto__,c__12146__auto___12511,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0 = (function (){
var statearr_12413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__);

(statearr_12413[(1)] = (1));

return statearr_12413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1 = (function (state_12401){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12401);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12414){if((e12414 instanceof Object)){
var ex__12048__auto__ = e12414;
var statearr_12415_12518 = state_12401;
(statearr_12415_12518[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12401);

return cljs.core.cst$kw$recur;
} else {
throw e12414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12519 = state_12401;
state_12401 = G__12519;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = function(state_12401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1.call(this,state_12401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___12511,jobs,results,process,async))
})();
var state__12148__auto__ = (function (){var statearr_12416 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12416[(6)] = c__12146__auto___12511);

return statearr_12416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___12511,jobs,results,process,async))
);


var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__,jobs,results,process,async){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__,jobs,results,process,async){
return (function (state_12454){
var state_val_12455 = (state_12454[(1)]);
if((state_val_12455 === (7))){
var inst_12450 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12456_12520 = state_12454__$1;
(statearr_12456_12520[(2)] = inst_12450);

(statearr_12456_12520[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (20))){
var state_12454__$1 = state_12454;
var statearr_12457_12521 = state_12454__$1;
(statearr_12457_12521[(2)] = null);

(statearr_12457_12521[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (1))){
var state_12454__$1 = state_12454;
var statearr_12458_12522 = state_12454__$1;
(statearr_12458_12522[(2)] = null);

(statearr_12458_12522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (4))){
var inst_12419 = (state_12454[(7)]);
var inst_12419__$1 = (state_12454[(2)]);
var inst_12420 = (inst_12419__$1 == null);
var state_12454__$1 = (function (){var statearr_12459 = state_12454;
(statearr_12459[(7)] = inst_12419__$1);

return statearr_12459;
})();
if(cljs.core.truth_(inst_12420)){
var statearr_12460_12523 = state_12454__$1;
(statearr_12460_12523[(1)] = (5));

} else {
var statearr_12461_12524 = state_12454__$1;
(statearr_12461_12524[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (15))){
var inst_12432 = (state_12454[(8)]);
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12454__$1,(18),to,inst_12432);
} else {
if((state_val_12455 === (21))){
var inst_12445 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12462_12525 = state_12454__$1;
(statearr_12462_12525[(2)] = inst_12445);

(statearr_12462_12525[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (13))){
var inst_12447 = (state_12454[(2)]);
var state_12454__$1 = (function (){var statearr_12463 = state_12454;
(statearr_12463[(9)] = inst_12447);

return statearr_12463;
})();
var statearr_12464_12526 = state_12454__$1;
(statearr_12464_12526[(2)] = null);

(statearr_12464_12526[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (6))){
var inst_12419 = (state_12454[(7)]);
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12454__$1,(11),inst_12419);
} else {
if((state_val_12455 === (17))){
var inst_12440 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
if(cljs.core.truth_(inst_12440)){
var statearr_12465_12527 = state_12454__$1;
(statearr_12465_12527[(1)] = (19));

} else {
var statearr_12466_12528 = state_12454__$1;
(statearr_12466_12528[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (3))){
var inst_12452 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12454__$1,inst_12452);
} else {
if((state_val_12455 === (12))){
var inst_12429 = (state_12454[(10)]);
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12454__$1,(14),inst_12429);
} else {
if((state_val_12455 === (2))){
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12454__$1,(4),results);
} else {
if((state_val_12455 === (19))){
var state_12454__$1 = state_12454;
var statearr_12467_12529 = state_12454__$1;
(statearr_12467_12529[(2)] = null);

(statearr_12467_12529[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (11))){
var inst_12429 = (state_12454[(2)]);
var state_12454__$1 = (function (){var statearr_12468 = state_12454;
(statearr_12468[(10)] = inst_12429);

return statearr_12468;
})();
var statearr_12469_12530 = state_12454__$1;
(statearr_12469_12530[(2)] = null);

(statearr_12469_12530[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (9))){
var state_12454__$1 = state_12454;
var statearr_12470_12531 = state_12454__$1;
(statearr_12470_12531[(2)] = null);

(statearr_12470_12531[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (5))){
var state_12454__$1 = state_12454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12471_12532 = state_12454__$1;
(statearr_12471_12532[(1)] = (8));

} else {
var statearr_12472_12533 = state_12454__$1;
(statearr_12472_12533[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (14))){
var inst_12432 = (state_12454[(8)]);
var inst_12434 = (state_12454[(11)]);
var inst_12432__$1 = (state_12454[(2)]);
var inst_12433 = (inst_12432__$1 == null);
var inst_12434__$1 = cljs.core.not(inst_12433);
var state_12454__$1 = (function (){var statearr_12473 = state_12454;
(statearr_12473[(8)] = inst_12432__$1);

(statearr_12473[(11)] = inst_12434__$1);

return statearr_12473;
})();
if(inst_12434__$1){
var statearr_12474_12534 = state_12454__$1;
(statearr_12474_12534[(1)] = (15));

} else {
var statearr_12475_12535 = state_12454__$1;
(statearr_12475_12535[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (16))){
var inst_12434 = (state_12454[(11)]);
var state_12454__$1 = state_12454;
var statearr_12476_12536 = state_12454__$1;
(statearr_12476_12536[(2)] = inst_12434);

(statearr_12476_12536[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (10))){
var inst_12426 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12477_12537 = state_12454__$1;
(statearr_12477_12537[(2)] = inst_12426);

(statearr_12477_12537[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (18))){
var inst_12437 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12478_12538 = state_12454__$1;
(statearr_12478_12538[(2)] = inst_12437);

(statearr_12478_12538[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (8))){
var inst_12423 = cljs.core.async.close_BANG_(to);
var state_12454__$1 = state_12454;
var statearr_12479_12539 = state_12454__$1;
(statearr_12479_12539[(2)] = inst_12423);

(statearr_12479_12539[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12146__auto__,jobs,results,process,async))
;
return ((function (switch__12044__auto__,c__12146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0 = (function (){
var statearr_12480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__);

(statearr_12480[(1)] = (1));

return statearr_12480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1 = (function (state_12454){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12454);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12481){if((e12481 instanceof Object)){
var ex__12048__auto__ = e12481;
var statearr_12482_12540 = state_12454;
(statearr_12482_12540[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12454);

return cljs.core.cst$kw$recur;
} else {
throw e12481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12541 = state_12454;
state_12454 = G__12541;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__ = function(state_12454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1.call(this,state_12454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__,jobs,results,process,async))
})();
var state__12148__auto__ = (function (){var statearr_12483 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12483[(6)] = c__12146__auto__);

return statearr_12483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__,jobs,results,process,async))
);

return c__12146__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12543 = arguments.length;
switch (G__12543) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12546 = arguments.length;
switch (G__12546) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12549 = arguments.length;
switch (G__12549) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12146__auto___12598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___12598,tc,fc){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___12598,tc,fc){
return (function (state_12575){
var state_val_12576 = (state_12575[(1)]);
if((state_val_12576 === (7))){
var inst_12571 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
var statearr_12577_12599 = state_12575__$1;
(statearr_12577_12599[(2)] = inst_12571);

(statearr_12577_12599[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (1))){
var state_12575__$1 = state_12575;
var statearr_12578_12600 = state_12575__$1;
(statearr_12578_12600[(2)] = null);

(statearr_12578_12600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (4))){
var inst_12552 = (state_12575[(7)]);
var inst_12552__$1 = (state_12575[(2)]);
var inst_12553 = (inst_12552__$1 == null);
var state_12575__$1 = (function (){var statearr_12579 = state_12575;
(statearr_12579[(7)] = inst_12552__$1);

return statearr_12579;
})();
if(cljs.core.truth_(inst_12553)){
var statearr_12580_12601 = state_12575__$1;
(statearr_12580_12601[(1)] = (5));

} else {
var statearr_12581_12602 = state_12575__$1;
(statearr_12581_12602[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (13))){
var state_12575__$1 = state_12575;
var statearr_12582_12603 = state_12575__$1;
(statearr_12582_12603[(2)] = null);

(statearr_12582_12603[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (6))){
var inst_12552 = (state_12575[(7)]);
var inst_12558 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12552) : p.call(null,inst_12552));
var state_12575__$1 = state_12575;
if(cljs.core.truth_(inst_12558)){
var statearr_12583_12604 = state_12575__$1;
(statearr_12583_12604[(1)] = (9));

} else {
var statearr_12584_12605 = state_12575__$1;
(statearr_12584_12605[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (3))){
var inst_12573 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12575__$1,inst_12573);
} else {
if((state_val_12576 === (12))){
var state_12575__$1 = state_12575;
var statearr_12585_12606 = state_12575__$1;
(statearr_12585_12606[(2)] = null);

(statearr_12585_12606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (2))){
var state_12575__$1 = state_12575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12575__$1,(4),ch);
} else {
if((state_val_12576 === (11))){
var inst_12552 = (state_12575[(7)]);
var inst_12562 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12575__$1,(8),inst_12562,inst_12552);
} else {
if((state_val_12576 === (9))){
var state_12575__$1 = state_12575;
var statearr_12586_12607 = state_12575__$1;
(statearr_12586_12607[(2)] = tc);

(statearr_12586_12607[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (5))){
var inst_12555 = cljs.core.async.close_BANG_(tc);
var inst_12556 = cljs.core.async.close_BANG_(fc);
var state_12575__$1 = (function (){var statearr_12587 = state_12575;
(statearr_12587[(8)] = inst_12555);

return statearr_12587;
})();
var statearr_12588_12608 = state_12575__$1;
(statearr_12588_12608[(2)] = inst_12556);

(statearr_12588_12608[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (14))){
var inst_12569 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
var statearr_12589_12609 = state_12575__$1;
(statearr_12589_12609[(2)] = inst_12569);

(statearr_12589_12609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (10))){
var state_12575__$1 = state_12575;
var statearr_12590_12610 = state_12575__$1;
(statearr_12590_12610[(2)] = fc);

(statearr_12590_12610[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12576 === (8))){
var inst_12564 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
if(cljs.core.truth_(inst_12564)){
var statearr_12591_12611 = state_12575__$1;
(statearr_12591_12611[(1)] = (12));

} else {
var statearr_12592_12612 = state_12575__$1;
(statearr_12592_12612[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__12146__auto___12598,tc,fc))
;
return ((function (switch__12044__auto__,c__12146__auto___12598,tc,fc){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_12593 = [null,null,null,null,null,null,null,null,null];
(statearr_12593[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_12593[(1)] = (1));

return statearr_12593;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_12575){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12575);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12594){if((e12594 instanceof Object)){
var ex__12048__auto__ = e12594;
var statearr_12595_12613 = state_12575;
(statearr_12595_12613[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12575);

return cljs.core.cst$kw$recur;
} else {
throw e12594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12614 = state_12575;
state_12575 = G__12614;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_12575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_12575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___12598,tc,fc))
})();
var state__12148__auto__ = (function (){var statearr_12596 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12596[(6)] = c__12146__auto___12598);

return statearr_12596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___12598,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__){
return (function (state_12635){
var state_val_12636 = (state_12635[(1)]);
if((state_val_12636 === (7))){
var inst_12631 = (state_12635[(2)]);
var state_12635__$1 = state_12635;
var statearr_12637_12655 = state_12635__$1;
(statearr_12637_12655[(2)] = inst_12631);

(statearr_12637_12655[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (1))){
var inst_12615 = init;
var state_12635__$1 = (function (){var statearr_12638 = state_12635;
(statearr_12638[(7)] = inst_12615);

return statearr_12638;
})();
var statearr_12639_12656 = state_12635__$1;
(statearr_12639_12656[(2)] = null);

(statearr_12639_12656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (4))){
var inst_12618 = (state_12635[(8)]);
var inst_12618__$1 = (state_12635[(2)]);
var inst_12619 = (inst_12618__$1 == null);
var state_12635__$1 = (function (){var statearr_12640 = state_12635;
(statearr_12640[(8)] = inst_12618__$1);

return statearr_12640;
})();
if(cljs.core.truth_(inst_12619)){
var statearr_12641_12657 = state_12635__$1;
(statearr_12641_12657[(1)] = (5));

} else {
var statearr_12642_12658 = state_12635__$1;
(statearr_12642_12658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (6))){
var inst_12615 = (state_12635[(7)]);
var inst_12622 = (state_12635[(9)]);
var inst_12618 = (state_12635[(8)]);
var inst_12622__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12615,inst_12618) : f.call(null,inst_12615,inst_12618));
var inst_12623 = cljs.core.reduced_QMARK_(inst_12622__$1);
var state_12635__$1 = (function (){var statearr_12643 = state_12635;
(statearr_12643[(9)] = inst_12622__$1);

return statearr_12643;
})();
if(inst_12623){
var statearr_12644_12659 = state_12635__$1;
(statearr_12644_12659[(1)] = (8));

} else {
var statearr_12645_12660 = state_12635__$1;
(statearr_12645_12660[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (3))){
var inst_12633 = (state_12635[(2)]);
var state_12635__$1 = state_12635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12635__$1,inst_12633);
} else {
if((state_val_12636 === (2))){
var state_12635__$1 = state_12635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12635__$1,(4),ch);
} else {
if((state_val_12636 === (9))){
var inst_12622 = (state_12635[(9)]);
var inst_12615 = inst_12622;
var state_12635__$1 = (function (){var statearr_12646 = state_12635;
(statearr_12646[(7)] = inst_12615);

return statearr_12646;
})();
var statearr_12647_12661 = state_12635__$1;
(statearr_12647_12661[(2)] = null);

(statearr_12647_12661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (5))){
var inst_12615 = (state_12635[(7)]);
var state_12635__$1 = state_12635;
var statearr_12648_12662 = state_12635__$1;
(statearr_12648_12662[(2)] = inst_12615);

(statearr_12648_12662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (10))){
var inst_12629 = (state_12635[(2)]);
var state_12635__$1 = state_12635;
var statearr_12649_12663 = state_12635__$1;
(statearr_12649_12663[(2)] = inst_12629);

(statearr_12649_12663[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12636 === (8))){
var inst_12622 = (state_12635[(9)]);
var inst_12625 = cljs.core.deref(inst_12622);
var state_12635__$1 = state_12635;
var statearr_12650_12664 = state_12635__$1;
(statearr_12650_12664[(2)] = inst_12625);

(statearr_12650_12664[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
});})(c__12146__auto__))
;
return ((function (switch__12044__auto__,c__12146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12045__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12045__auto____0 = (function (){
var statearr_12651 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12651[(0)] = cljs$core$async$reduce_$_state_machine__12045__auto__);

(statearr_12651[(1)] = (1));

return statearr_12651;
});
var cljs$core$async$reduce_$_state_machine__12045__auto____1 = (function (state_12635){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12635);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object)){
var ex__12048__auto__ = e12652;
var statearr_12653_12665 = state_12635;
(statearr_12653_12665[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12635);

return cljs.core.cst$kw$recur;
} else {
throw e12652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12666 = state_12635;
state_12635 = G__12666;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12045__auto__ = function(state_12635){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12045__auto____1.call(this,state_12635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12045__auto____0;
cljs$core$async$reduce_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12045__auto____1;
return cljs$core$async$reduce_$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__))
})();
var state__12148__auto__ = (function (){var statearr_12654 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12654[(6)] = c__12146__auto__);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__))
);

return c__12146__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__,f__$1){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__,f__$1){
return (function (state_12672){
var state_val_12673 = (state_12672[(1)]);
if((state_val_12673 === (1))){
var inst_12667 = cljs.core.async.reduce(f__$1,init,ch);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12672__$1,(2),inst_12667);
} else {
if((state_val_12673 === (2))){
var inst_12669 = (state_12672[(2)]);
var inst_12670 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12669) : f__$1.call(null,inst_12669));
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12672__$1,inst_12670);
} else {
return null;
}
}
});})(c__12146__auto__,f__$1))
;
return ((function (switch__12044__auto__,c__12146__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12045__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12045__auto____0 = (function (){
var statearr_12674 = [null,null,null,null,null,null,null];
(statearr_12674[(0)] = cljs$core$async$transduce_$_state_machine__12045__auto__);

(statearr_12674[(1)] = (1));

return statearr_12674;
});
var cljs$core$async$transduce_$_state_machine__12045__auto____1 = (function (state_12672){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12672);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12675){if((e12675 instanceof Object)){
var ex__12048__auto__ = e12675;
var statearr_12676_12678 = state_12672;
(statearr_12676_12678[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12672);

return cljs.core.cst$kw$recur;
} else {
throw e12675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12679 = state_12672;
state_12672 = G__12679;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12045__auto__ = function(state_12672){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12045__auto____1.call(this,state_12672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12045__auto____0;
cljs$core$async$transduce_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12045__auto____1;
return cljs$core$async$transduce_$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__,f__$1))
})();
var state__12148__auto__ = (function (){var statearr_12677 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12677[(6)] = c__12146__auto__);

return statearr_12677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__,f__$1))
);

return c__12146__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12681 = arguments.length;
switch (G__12681) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__){
return (function (state_12706){
var state_val_12707 = (state_12706[(1)]);
if((state_val_12707 === (7))){
var inst_12688 = (state_12706[(2)]);
var state_12706__$1 = state_12706;
var statearr_12708_12729 = state_12706__$1;
(statearr_12708_12729[(2)] = inst_12688);

(statearr_12708_12729[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (1))){
var inst_12682 = cljs.core.seq(coll);
var inst_12683 = inst_12682;
var state_12706__$1 = (function (){var statearr_12709 = state_12706;
(statearr_12709[(7)] = inst_12683);

return statearr_12709;
})();
var statearr_12710_12730 = state_12706__$1;
(statearr_12710_12730[(2)] = null);

(statearr_12710_12730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (4))){
var inst_12683 = (state_12706[(7)]);
var inst_12686 = cljs.core.first(inst_12683);
var state_12706__$1 = state_12706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12706__$1,(7),ch,inst_12686);
} else {
if((state_val_12707 === (13))){
var inst_12700 = (state_12706[(2)]);
var state_12706__$1 = state_12706;
var statearr_12711_12731 = state_12706__$1;
(statearr_12711_12731[(2)] = inst_12700);

(statearr_12711_12731[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (6))){
var inst_12691 = (state_12706[(2)]);
var state_12706__$1 = state_12706;
if(cljs.core.truth_(inst_12691)){
var statearr_12712_12732 = state_12706__$1;
(statearr_12712_12732[(1)] = (8));

} else {
var statearr_12713_12733 = state_12706__$1;
(statearr_12713_12733[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (3))){
var inst_12704 = (state_12706[(2)]);
var state_12706__$1 = state_12706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12706__$1,inst_12704);
} else {
if((state_val_12707 === (12))){
var state_12706__$1 = state_12706;
var statearr_12714_12734 = state_12706__$1;
(statearr_12714_12734[(2)] = null);

(statearr_12714_12734[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (2))){
var inst_12683 = (state_12706[(7)]);
var state_12706__$1 = state_12706;
if(cljs.core.truth_(inst_12683)){
var statearr_12715_12735 = state_12706__$1;
(statearr_12715_12735[(1)] = (4));

} else {
var statearr_12716_12736 = state_12706__$1;
(statearr_12716_12736[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (11))){
var inst_12697 = cljs.core.async.close_BANG_(ch);
var state_12706__$1 = state_12706;
var statearr_12717_12737 = state_12706__$1;
(statearr_12717_12737[(2)] = inst_12697);

(statearr_12717_12737[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (9))){
var state_12706__$1 = state_12706;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12718_12738 = state_12706__$1;
(statearr_12718_12738[(1)] = (11));

} else {
var statearr_12719_12739 = state_12706__$1;
(statearr_12719_12739[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (5))){
var inst_12683 = (state_12706[(7)]);
var state_12706__$1 = state_12706;
var statearr_12720_12740 = state_12706__$1;
(statearr_12720_12740[(2)] = inst_12683);

(statearr_12720_12740[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (10))){
var inst_12702 = (state_12706[(2)]);
var state_12706__$1 = state_12706;
var statearr_12721_12741 = state_12706__$1;
(statearr_12721_12741[(2)] = inst_12702);

(statearr_12721_12741[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12707 === (8))){
var inst_12683 = (state_12706[(7)]);
var inst_12693 = cljs.core.next(inst_12683);
var inst_12683__$1 = inst_12693;
var state_12706__$1 = (function (){var statearr_12722 = state_12706;
(statearr_12722[(7)] = inst_12683__$1);

return statearr_12722;
})();
var statearr_12723_12742 = state_12706__$1;
(statearr_12723_12742[(2)] = null);

(statearr_12723_12742[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
});})(c__12146__auto__))
;
return ((function (switch__12044__auto__,c__12146__auto__){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_12724 = [null,null,null,null,null,null,null,null];
(statearr_12724[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_12724[(1)] = (1));

return statearr_12724;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_12706){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12706);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12725){if((e12725 instanceof Object)){
var ex__12048__auto__ = e12725;
var statearr_12726_12743 = state_12706;
(statearr_12726_12743[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12706);

return cljs.core.cst$kw$recur;
} else {
throw e12725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__12744 = state_12706;
state_12706 = G__12744;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_12706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_12706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__))
})();
var state__12148__auto__ = (function (){var statearr_12727 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12727[(6)] = c__12146__auto__);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__))
);

return c__12146__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4229__auto__ = (((_ == null))?null:_);
var m__4230__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4230__auto__.call(null,_));
} else {
var m__4230__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4230__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4230__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4230__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4230__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4230__auto__.call(null,m,ch));
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4230__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4230__auto__.call(null,m));
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4230__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12745 = (function (ch,cs,meta12746){
this.ch = ch;
this.cs = cs;
this.meta12746 = meta12746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12747,meta12746__$1){
var self__ = this;
var _12747__$1 = this;
return (new cljs.core.async.t_cljs$core$async12745(self__.ch,self__.cs,meta12746__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12747){
var self__ = this;
var _12747__$1 = this;
return self__.meta12746;
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta12746], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12745";

cljs.core.async.t_cljs$core$async12745.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async12745");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12745.
 */
cljs.core.async.__GT_t_cljs$core$async12745 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12745(ch__$1,cs__$1,meta12746){
return (new cljs.core.async.t_cljs$core$async12745(ch__$1,cs__$1,meta12746));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12745(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12146__auto___12967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___12967,cs,m,dchan,dctr,done){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___12967,cs,m,dchan,dctr,done){
return (function (state_12882){
var state_val_12883 = (state_12882[(1)]);
if((state_val_12883 === (7))){
var inst_12878 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12884_12968 = state_12882__$1;
(statearr_12884_12968[(2)] = inst_12878);

(statearr_12884_12968[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (20))){
var inst_12781 = (state_12882[(7)]);
var inst_12793 = cljs.core.first(inst_12781);
var inst_12794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12793,(0),null);
var inst_12795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12793,(1),null);
var state_12882__$1 = (function (){var statearr_12885 = state_12882;
(statearr_12885[(8)] = inst_12794);

return statearr_12885;
})();
if(cljs.core.truth_(inst_12795)){
var statearr_12886_12969 = state_12882__$1;
(statearr_12886_12969[(1)] = (22));

} else {
var statearr_12887_12970 = state_12882__$1;
(statearr_12887_12970[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (27))){
var inst_12823 = (state_12882[(9)]);
var inst_12750 = (state_12882[(10)]);
var inst_12825 = (state_12882[(11)]);
var inst_12830 = (state_12882[(12)]);
var inst_12830__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12823,inst_12825);
var inst_12831 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12830__$1,inst_12750,done);
var state_12882__$1 = (function (){var statearr_12888 = state_12882;
(statearr_12888[(12)] = inst_12830__$1);

return statearr_12888;
})();
if(cljs.core.truth_(inst_12831)){
var statearr_12889_12971 = state_12882__$1;
(statearr_12889_12971[(1)] = (30));

} else {
var statearr_12890_12972 = state_12882__$1;
(statearr_12890_12972[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (1))){
var state_12882__$1 = state_12882;
var statearr_12891_12973 = state_12882__$1;
(statearr_12891_12973[(2)] = null);

(statearr_12891_12973[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (24))){
var inst_12781 = (state_12882[(7)]);
var inst_12800 = (state_12882[(2)]);
var inst_12801 = cljs.core.next(inst_12781);
var inst_12759 = inst_12801;
var inst_12760 = null;
var inst_12761 = (0);
var inst_12762 = (0);
var state_12882__$1 = (function (){var statearr_12892 = state_12882;
(statearr_12892[(13)] = inst_12762);

(statearr_12892[(14)] = inst_12760);

(statearr_12892[(15)] = inst_12761);

(statearr_12892[(16)] = inst_12800);

(statearr_12892[(17)] = inst_12759);

return statearr_12892;
})();
var statearr_12893_12974 = state_12882__$1;
(statearr_12893_12974[(2)] = null);

(statearr_12893_12974[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (39))){
var state_12882__$1 = state_12882;
var statearr_12897_12975 = state_12882__$1;
(statearr_12897_12975[(2)] = null);

(statearr_12897_12975[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (4))){
var inst_12750 = (state_12882[(10)]);
var inst_12750__$1 = (state_12882[(2)]);
var inst_12751 = (inst_12750__$1 == null);
var state_12882__$1 = (function (){var statearr_12898 = state_12882;
(statearr_12898[(10)] = inst_12750__$1);

return statearr_12898;
})();
if(cljs.core.truth_(inst_12751)){
var statearr_12899_12976 = state_12882__$1;
(statearr_12899_12976[(1)] = (5));

} else {
var statearr_12900_12977 = state_12882__$1;
(statearr_12900_12977[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (15))){
var inst_12762 = (state_12882[(13)]);
var inst_12760 = (state_12882[(14)]);
var inst_12761 = (state_12882[(15)]);
var inst_12759 = (state_12882[(17)]);
var inst_12777 = (state_12882[(2)]);
var inst_12778 = (inst_12762 + (1));
var tmp12894 = inst_12760;
var tmp12895 = inst_12761;
var tmp12896 = inst_12759;
var inst_12759__$1 = tmp12896;
var inst_12760__$1 = tmp12894;
var inst_12761__$1 = tmp12895;
var inst_12762__$1 = inst_12778;
var state_12882__$1 = (function (){var statearr_12901 = state_12882;
(statearr_12901[(18)] = inst_12777);

(statearr_12901[(13)] = inst_12762__$1);

(statearr_12901[(14)] = inst_12760__$1);

(statearr_12901[(15)] = inst_12761__$1);

(statearr_12901[(17)] = inst_12759__$1);

return statearr_12901;
})();
var statearr_12902_12978 = state_12882__$1;
(statearr_12902_12978[(2)] = null);

(statearr_12902_12978[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (21))){
var inst_12804 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12906_12979 = state_12882__$1;
(statearr_12906_12979[(2)] = inst_12804);

(statearr_12906_12979[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (31))){
var inst_12830 = (state_12882[(12)]);
var inst_12834 = done(null);
var inst_12835 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12830);
var state_12882__$1 = (function (){var statearr_12907 = state_12882;
(statearr_12907[(19)] = inst_12834);

return statearr_12907;
})();
var statearr_12908_12980 = state_12882__$1;
(statearr_12908_12980[(2)] = inst_12835);

(statearr_12908_12980[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (32))){
var inst_12823 = (state_12882[(9)]);
var inst_12825 = (state_12882[(11)]);
var inst_12824 = (state_12882[(20)]);
var inst_12822 = (state_12882[(21)]);
var inst_12837 = (state_12882[(2)]);
var inst_12838 = (inst_12825 + (1));
var tmp12903 = inst_12823;
var tmp12904 = inst_12824;
var tmp12905 = inst_12822;
var inst_12822__$1 = tmp12905;
var inst_12823__$1 = tmp12903;
var inst_12824__$1 = tmp12904;
var inst_12825__$1 = inst_12838;
var state_12882__$1 = (function (){var statearr_12909 = state_12882;
(statearr_12909[(9)] = inst_12823__$1);

(statearr_12909[(22)] = inst_12837);

(statearr_12909[(11)] = inst_12825__$1);

(statearr_12909[(20)] = inst_12824__$1);

(statearr_12909[(21)] = inst_12822__$1);

return statearr_12909;
})();
var statearr_12910_12981 = state_12882__$1;
(statearr_12910_12981[(2)] = null);

(statearr_12910_12981[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (40))){
var inst_12850 = (state_12882[(23)]);
var inst_12854 = done(null);
var inst_12855 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12850);
var state_12882__$1 = (function (){var statearr_12911 = state_12882;
(statearr_12911[(24)] = inst_12854);

return statearr_12911;
})();
var statearr_12912_12982 = state_12882__$1;
(statearr_12912_12982[(2)] = inst_12855);

(statearr_12912_12982[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (33))){
var inst_12841 = (state_12882[(25)]);
var inst_12843 = cljs.core.chunked_seq_QMARK_(inst_12841);
var state_12882__$1 = state_12882;
if(inst_12843){
var statearr_12913_12983 = state_12882__$1;
(statearr_12913_12983[(1)] = (36));

} else {
var statearr_12914_12984 = state_12882__$1;
(statearr_12914_12984[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (13))){
var inst_12771 = (state_12882[(26)]);
var inst_12774 = cljs.core.async.close_BANG_(inst_12771);
var state_12882__$1 = state_12882;
var statearr_12915_12985 = state_12882__$1;
(statearr_12915_12985[(2)] = inst_12774);

(statearr_12915_12985[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (22))){
var inst_12794 = (state_12882[(8)]);
var inst_12797 = cljs.core.async.close_BANG_(inst_12794);
var state_12882__$1 = state_12882;
var statearr_12916_12986 = state_12882__$1;
(statearr_12916_12986[(2)] = inst_12797);

(statearr_12916_12986[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (36))){
var inst_12841 = (state_12882[(25)]);
var inst_12845 = cljs.core.chunk_first(inst_12841);
var inst_12846 = cljs.core.chunk_rest(inst_12841);
var inst_12847 = cljs.core.count(inst_12845);
var inst_12822 = inst_12846;
var inst_12823 = inst_12845;
var inst_12824 = inst_12847;
var inst_12825 = (0);
var state_12882__$1 = (function (){var statearr_12917 = state_12882;
(statearr_12917[(9)] = inst_12823);

(statearr_12917[(11)] = inst_12825);

(statearr_12917[(20)] = inst_12824);

(statearr_12917[(21)] = inst_12822);

return statearr_12917;
})();
var statearr_12918_12987 = state_12882__$1;
(statearr_12918_12987[(2)] = null);

(statearr_12918_12987[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (41))){
var inst_12841 = (state_12882[(25)]);
var inst_12857 = (state_12882[(2)]);
var inst_12858 = cljs.core.next(inst_12841);
var inst_12822 = inst_12858;
var inst_12823 = null;
var inst_12824 = (0);
var inst_12825 = (0);
var state_12882__$1 = (function (){var statearr_12919 = state_12882;
(statearr_12919[(9)] = inst_12823);

(statearr_12919[(27)] = inst_12857);

(statearr_12919[(11)] = inst_12825);

(statearr_12919[(20)] = inst_12824);

(statearr_12919[(21)] = inst_12822);

return statearr_12919;
})();
var statearr_12920_12988 = state_12882__$1;
(statearr_12920_12988[(2)] = null);

(statearr_12920_12988[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (43))){
var state_12882__$1 = state_12882;
var statearr_12921_12989 = state_12882__$1;
(statearr_12921_12989[(2)] = null);

(statearr_12921_12989[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (29))){
var inst_12866 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12922_12990 = state_12882__$1;
(statearr_12922_12990[(2)] = inst_12866);

(statearr_12922_12990[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (44))){
var inst_12875 = (state_12882[(2)]);
var state_12882__$1 = (function (){var statearr_12923 = state_12882;
(statearr_12923[(28)] = inst_12875);

return statearr_12923;
})();
var statearr_12924_12991 = state_12882__$1;
(statearr_12924_12991[(2)] = null);

(statearr_12924_12991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (6))){
var inst_12814 = (state_12882[(29)]);
var inst_12813 = cljs.core.deref(cs);
var inst_12814__$1 = cljs.core.keys(inst_12813);
var inst_12815 = cljs.core.count(inst_12814__$1);
var inst_12816 = cljs.core.reset_BANG_(dctr,inst_12815);
var inst_12821 = cljs.core.seq(inst_12814__$1);
var inst_12822 = inst_12821;
var inst_12823 = null;
var inst_12824 = (0);
var inst_12825 = (0);
var state_12882__$1 = (function (){var statearr_12925 = state_12882;
(statearr_12925[(9)] = inst_12823);

(statearr_12925[(11)] = inst_12825);

(statearr_12925[(29)] = inst_12814__$1);

(statearr_12925[(20)] = inst_12824);

(statearr_12925[(30)] = inst_12816);

(statearr_12925[(21)] = inst_12822);

return statearr_12925;
})();
var statearr_12926_12992 = state_12882__$1;
(statearr_12926_12992[(2)] = null);

(statearr_12926_12992[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (28))){
var inst_12841 = (state_12882[(25)]);
var inst_12822 = (state_12882[(21)]);
var inst_12841__$1 = cljs.core.seq(inst_12822);
var state_12882__$1 = (function (){var statearr_12927 = state_12882;
(statearr_12927[(25)] = inst_12841__$1);

return statearr_12927;
})();
if(inst_12841__$1){
var statearr_12928_12993 = state_12882__$1;
(statearr_12928_12993[(1)] = (33));

} else {
var statearr_12929_12994 = state_12882__$1;
(statearr_12929_12994[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (25))){
var inst_12825 = (state_12882[(11)]);
var inst_12824 = (state_12882[(20)]);
var inst_12827 = (inst_12825 < inst_12824);
var inst_12828 = inst_12827;
var state_12882__$1 = state_12882;
if(cljs.core.truth_(inst_12828)){
var statearr_12930_12995 = state_12882__$1;
(statearr_12930_12995[(1)] = (27));

} else {
var statearr_12931_12996 = state_12882__$1;
(statearr_12931_12996[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (34))){
var state_12882__$1 = state_12882;
var statearr_12932_12997 = state_12882__$1;
(statearr_12932_12997[(2)] = null);

(statearr_12932_12997[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (17))){
var state_12882__$1 = state_12882;
var statearr_12933_12998 = state_12882__$1;
(statearr_12933_12998[(2)] = null);

(statearr_12933_12998[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (3))){
var inst_12880 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12882__$1,inst_12880);
} else {
if((state_val_12883 === (12))){
var inst_12809 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12934_12999 = state_12882__$1;
(statearr_12934_12999[(2)] = inst_12809);

(statearr_12934_12999[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (2))){
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12882__$1,(4),ch);
} else {
if((state_val_12883 === (23))){
var state_12882__$1 = state_12882;
var statearr_12935_13000 = state_12882__$1;
(statearr_12935_13000[(2)] = null);

(statearr_12935_13000[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (35))){
var inst_12864 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12936_13001 = state_12882__$1;
(statearr_12936_13001[(2)] = inst_12864);

(statearr_12936_13001[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (19))){
var inst_12781 = (state_12882[(7)]);
var inst_12785 = cljs.core.chunk_first(inst_12781);
var inst_12786 = cljs.core.chunk_rest(inst_12781);
var inst_12787 = cljs.core.count(inst_12785);
var inst_12759 = inst_12786;
var inst_12760 = inst_12785;
var inst_12761 = inst_12787;
var inst_12762 = (0);
var state_12882__$1 = (function (){var statearr_12937 = state_12882;
(statearr_12937[(13)] = inst_12762);

(statearr_12937[(14)] = inst_12760);

(statearr_12937[(15)] = inst_12761);

(statearr_12937[(17)] = inst_12759);

return statearr_12937;
})();
var statearr_12938_13002 = state_12882__$1;
(statearr_12938_13002[(2)] = null);

(statearr_12938_13002[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (11))){
var inst_12781 = (state_12882[(7)]);
var inst_12759 = (state_12882[(17)]);
var inst_12781__$1 = cljs.core.seq(inst_12759);
var state_12882__$1 = (function (){var statearr_12939 = state_12882;
(statearr_12939[(7)] = inst_12781__$1);

return statearr_12939;
})();
if(inst_12781__$1){
var statearr_12940_13003 = state_12882__$1;
(statearr_12940_13003[(1)] = (16));

} else {
var statearr_12941_13004 = state_12882__$1;
(statearr_12941_13004[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (9))){
var inst_12811 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12942_13005 = state_12882__$1;
(statearr_12942_13005[(2)] = inst_12811);

(statearr_12942_13005[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (5))){
var inst_12757 = cljs.core.deref(cs);
var inst_12758 = cljs.core.seq(inst_12757);
var inst_12759 = inst_12758;
var inst_12760 = null;
var inst_12761 = (0);
var inst_12762 = (0);
var state_12882__$1 = (function (){var statearr_12943 = state_12882;
(statearr_12943[(13)] = inst_12762);

(statearr_12943[(14)] = inst_12760);

(statearr_12943[(15)] = inst_12761);

(statearr_12943[(17)] = inst_12759);

return statearr_12943;
})();
var statearr_12944_13006 = state_12882__$1;
(statearr_12944_13006[(2)] = null);

(statearr_12944_13006[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (14))){
var state_12882__$1 = state_12882;
var statearr_12945_13007 = state_12882__$1;
(statearr_12945_13007[(2)] = null);

(statearr_12945_13007[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (45))){
var inst_12872 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12946_13008 = state_12882__$1;
(statearr_12946_13008[(2)] = inst_12872);

(statearr_12946_13008[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (26))){
var inst_12814 = (state_12882[(29)]);
var inst_12868 = (state_12882[(2)]);
var inst_12869 = cljs.core.seq(inst_12814);
var state_12882__$1 = (function (){var statearr_12947 = state_12882;
(statearr_12947[(31)] = inst_12868);

return statearr_12947;
})();
if(inst_12869){
var statearr_12948_13009 = state_12882__$1;
(statearr_12948_13009[(1)] = (42));

} else {
var statearr_12949_13010 = state_12882__$1;
(statearr_12949_13010[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (16))){
var inst_12781 = (state_12882[(7)]);
var inst_12783 = cljs.core.chunked_seq_QMARK_(inst_12781);
var state_12882__$1 = state_12882;
if(inst_12783){
var statearr_12950_13011 = state_12882__$1;
(statearr_12950_13011[(1)] = (19));

} else {
var statearr_12951_13012 = state_12882__$1;
(statearr_12951_13012[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (38))){
var inst_12861 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12952_13013 = state_12882__$1;
(statearr_12952_13013[(2)] = inst_12861);

(statearr_12952_13013[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (30))){
var state_12882__$1 = state_12882;
var statearr_12953_13014 = state_12882__$1;
(statearr_12953_13014[(2)] = null);

(statearr_12953_13014[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (10))){
var inst_12762 = (state_12882[(13)]);
var inst_12760 = (state_12882[(14)]);
var inst_12770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12760,inst_12762);
var inst_12771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12770,(0),null);
var inst_12772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12770,(1),null);
var state_12882__$1 = (function (){var statearr_12954 = state_12882;
(statearr_12954[(26)] = inst_12771);

return statearr_12954;
})();
if(cljs.core.truth_(inst_12772)){
var statearr_12955_13015 = state_12882__$1;
(statearr_12955_13015[(1)] = (13));

} else {
var statearr_12956_13016 = state_12882__$1;
(statearr_12956_13016[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (18))){
var inst_12807 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12957_13017 = state_12882__$1;
(statearr_12957_13017[(2)] = inst_12807);

(statearr_12957_13017[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (42))){
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12882__$1,(45),dchan);
} else {
if((state_val_12883 === (37))){
var inst_12750 = (state_12882[(10)]);
var inst_12841 = (state_12882[(25)]);
var inst_12850 = (state_12882[(23)]);
var inst_12850__$1 = cljs.core.first(inst_12841);
var inst_12851 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12850__$1,inst_12750,done);
var state_12882__$1 = (function (){var statearr_12958 = state_12882;
(statearr_12958[(23)] = inst_12850__$1);

return statearr_12958;
})();
if(cljs.core.truth_(inst_12851)){
var statearr_12959_13018 = state_12882__$1;
(statearr_12959_13018[(1)] = (39));

} else {
var statearr_12960_13019 = state_12882__$1;
(statearr_12960_13019[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12883 === (8))){
var inst_12762 = (state_12882[(13)]);
var inst_12761 = (state_12882[(15)]);
var inst_12764 = (inst_12762 < inst_12761);
var inst_12765 = inst_12764;
var state_12882__$1 = state_12882;
if(cljs.core.truth_(inst_12765)){
var statearr_12961_13020 = state_12882__$1;
(statearr_12961_13020[(1)] = (10));

} else {
var statearr_12962_13021 = state_12882__$1;
(statearr_12962_13021[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12146__auto___12967,cs,m,dchan,dctr,done))
;
return ((function (switch__12044__auto__,c__12146__auto___12967,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12045__auto__ = null;
var cljs$core$async$mult_$_state_machine__12045__auto____0 = (function (){
var statearr_12963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12963[(0)] = cljs$core$async$mult_$_state_machine__12045__auto__);

(statearr_12963[(1)] = (1));

return statearr_12963;
});
var cljs$core$async$mult_$_state_machine__12045__auto____1 = (function (state_12882){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_12882);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e12964){if((e12964 instanceof Object)){
var ex__12048__auto__ = e12964;
var statearr_12965_13022 = state_12882;
(statearr_12965_13022[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12882);

return cljs.core.cst$kw$recur;
} else {
throw e12964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13023 = state_12882;
state_12882 = G__13023;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12045__auto__ = function(state_12882){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12045__auto____1.call(this,state_12882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12045__auto____0;
cljs$core$async$mult_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12045__auto____1;
return cljs$core$async$mult_$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___12967,cs,m,dchan,dctr,done))
})();
var state__12148__auto__ = (function (){var statearr_12966 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_12966[(6)] = c__12146__auto___12967);

return statearr_12966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___12967,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13025 = arguments.length;
switch (G__13025) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4230__auto__.call(null,m,ch));
} else {
var m__4230__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4230__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4230__auto__.call(null,m,ch));
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4230__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4230__auto__.call(null,m));
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4230__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4230__auto__.call(null,m,state_map));
} else {
var m__4230__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4230__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4230__auto__.call(null,m,mode));
} else {
var m__4230__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4230__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___13037 = arguments.length;
var i__4518__auto___13038 = (0);
while(true){
if((i__4518__auto___13038 < len__4517__auto___13037)){
args__4520__auto__.push((arguments[i__4518__auto___13038]));

var G__13039 = (i__4518__auto___13038 + (1));
i__4518__auto___13038 = G__13039;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13031){
var map__13032 = p__13031;
var map__13032__$1 = ((((!((map__13032 == null)))?(((((map__13032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13032):map__13032);
var opts = map__13032__$1;
var statearr_13034_13040 = state;
(statearr_13034_13040[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__13032,map__13032__$1,opts){
return (function (val){
var statearr_13035_13041 = state;
(statearr_13035_13041[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__13032,map__13032__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_13036_13042 = state;
(statearr_13036_13042[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13027){
var G__13028 = cljs.core.first(seq13027);
var seq13027__$1 = cljs.core.next(seq13027);
var G__13029 = cljs.core.first(seq13027__$1);
var seq13027__$2 = cljs.core.next(seq13027__$1);
var G__13030 = cljs.core.first(seq13027__$2);
var seq13027__$3 = cljs.core.next(seq13027__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13028,G__13029,G__13030,seq13027__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13043 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13044){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13044 = meta13044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13045,meta13044__$1){
var self__ = this;
var _13045__$1 = this;
return (new cljs.core.async.t_cljs$core$async13043(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13044__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13045){
var self__ = this;
var _13045__$1 = this;
return self__.meta13044;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta13044], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13043";

cljs.core.async.t_cljs$core$async13043.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async13043");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13043.
 */
cljs.core.async.__GT_t_cljs$core$async13043 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13043(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13044){
return (new cljs.core.async.t_cljs$core$async13043(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13044));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13043(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12146__auto___13207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13147){
var state_val_13148 = (state_13147[(1)]);
if((state_val_13148 === (7))){
var inst_13062 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13149_13208 = state_13147__$1;
(statearr_13149_13208[(2)] = inst_13062);

(statearr_13149_13208[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (20))){
var inst_13074 = (state_13147[(7)]);
var state_13147__$1 = state_13147;
var statearr_13150_13209 = state_13147__$1;
(statearr_13150_13209[(2)] = inst_13074);

(statearr_13150_13209[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (27))){
var state_13147__$1 = state_13147;
var statearr_13151_13210 = state_13147__$1;
(statearr_13151_13210[(2)] = null);

(statearr_13151_13210[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (1))){
var inst_13049 = (state_13147[(8)]);
var inst_13049__$1 = calc_state();
var inst_13051 = (inst_13049__$1 == null);
var inst_13052 = cljs.core.not(inst_13051);
var state_13147__$1 = (function (){var statearr_13152 = state_13147;
(statearr_13152[(8)] = inst_13049__$1);

return statearr_13152;
})();
if(inst_13052){
var statearr_13153_13211 = state_13147__$1;
(statearr_13153_13211[(1)] = (2));

} else {
var statearr_13154_13212 = state_13147__$1;
(statearr_13154_13212[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (24))){
var inst_13121 = (state_13147[(9)]);
var inst_13098 = (state_13147[(10)]);
var inst_13107 = (state_13147[(11)]);
var inst_13121__$1 = (inst_13098.cljs$core$IFn$_invoke$arity$1 ? inst_13098.cljs$core$IFn$_invoke$arity$1(inst_13107) : inst_13098.call(null,inst_13107));
var state_13147__$1 = (function (){var statearr_13155 = state_13147;
(statearr_13155[(9)] = inst_13121__$1);

return statearr_13155;
})();
if(cljs.core.truth_(inst_13121__$1)){
var statearr_13156_13213 = state_13147__$1;
(statearr_13156_13213[(1)] = (29));

} else {
var statearr_13157_13214 = state_13147__$1;
(statearr_13157_13214[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (4))){
var inst_13065 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13065)){
var statearr_13158_13215 = state_13147__$1;
(statearr_13158_13215[(1)] = (8));

} else {
var statearr_13159_13216 = state_13147__$1;
(statearr_13159_13216[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (15))){
var inst_13092 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13092)){
var statearr_13160_13217 = state_13147__$1;
(statearr_13160_13217[(1)] = (19));

} else {
var statearr_13161_13218 = state_13147__$1;
(statearr_13161_13218[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (21))){
var inst_13097 = (state_13147[(12)]);
var inst_13097__$1 = (state_13147[(2)]);
var inst_13098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13097__$1,cljs.core.cst$kw$solos);
var inst_13099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13097__$1,cljs.core.cst$kw$mutes);
var inst_13100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13097__$1,cljs.core.cst$kw$reads);
var state_13147__$1 = (function (){var statearr_13162 = state_13147;
(statearr_13162[(12)] = inst_13097__$1);

(statearr_13162[(10)] = inst_13098);

(statearr_13162[(13)] = inst_13099);

return statearr_13162;
})();
return cljs.core.async.ioc_alts_BANG_(state_13147__$1,(22),inst_13100);
} else {
if((state_val_13148 === (31))){
var inst_13129 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13129)){
var statearr_13163_13219 = state_13147__$1;
(statearr_13163_13219[(1)] = (32));

} else {
var statearr_13164_13220 = state_13147__$1;
(statearr_13164_13220[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (32))){
var inst_13106 = (state_13147[(14)]);
var state_13147__$1 = state_13147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13147__$1,(35),out,inst_13106);
} else {
if((state_val_13148 === (33))){
var inst_13097 = (state_13147[(12)]);
var inst_13074 = inst_13097;
var state_13147__$1 = (function (){var statearr_13165 = state_13147;
(statearr_13165[(7)] = inst_13074);

return statearr_13165;
})();
var statearr_13166_13221 = state_13147__$1;
(statearr_13166_13221[(2)] = null);

(statearr_13166_13221[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (13))){
var inst_13074 = (state_13147[(7)]);
var inst_13081 = inst_13074.cljs$lang$protocol_mask$partition0$;
var inst_13082 = (inst_13081 & (64));
var inst_13083 = inst_13074.cljs$core$ISeq$;
var inst_13084 = (cljs.core.PROTOCOL_SENTINEL === inst_13083);
var inst_13085 = ((inst_13082) || (inst_13084));
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13085)){
var statearr_13167_13222 = state_13147__$1;
(statearr_13167_13222[(1)] = (16));

} else {
var statearr_13168_13223 = state_13147__$1;
(statearr_13168_13223[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (22))){
var inst_13106 = (state_13147[(14)]);
var inst_13107 = (state_13147[(11)]);
var inst_13105 = (state_13147[(2)]);
var inst_13106__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13105,(0),null);
var inst_13107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13105,(1),null);
var inst_13108 = (inst_13106__$1 == null);
var inst_13109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13107__$1,change);
var inst_13110 = ((inst_13108) || (inst_13109));
var state_13147__$1 = (function (){var statearr_13169 = state_13147;
(statearr_13169[(14)] = inst_13106__$1);

(statearr_13169[(11)] = inst_13107__$1);

return statearr_13169;
})();
if(cljs.core.truth_(inst_13110)){
var statearr_13170_13224 = state_13147__$1;
(statearr_13170_13224[(1)] = (23));

} else {
var statearr_13171_13225 = state_13147__$1;
(statearr_13171_13225[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (36))){
var inst_13097 = (state_13147[(12)]);
var inst_13074 = inst_13097;
var state_13147__$1 = (function (){var statearr_13172 = state_13147;
(statearr_13172[(7)] = inst_13074);

return statearr_13172;
})();
var statearr_13173_13226 = state_13147__$1;
(statearr_13173_13226[(2)] = null);

(statearr_13173_13226[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (29))){
var inst_13121 = (state_13147[(9)]);
var state_13147__$1 = state_13147;
var statearr_13174_13227 = state_13147__$1;
(statearr_13174_13227[(2)] = inst_13121);

(statearr_13174_13227[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (6))){
var state_13147__$1 = state_13147;
var statearr_13175_13228 = state_13147__$1;
(statearr_13175_13228[(2)] = false);

(statearr_13175_13228[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (28))){
var inst_13117 = (state_13147[(2)]);
var inst_13118 = calc_state();
var inst_13074 = inst_13118;
var state_13147__$1 = (function (){var statearr_13176 = state_13147;
(statearr_13176[(15)] = inst_13117);

(statearr_13176[(7)] = inst_13074);

return statearr_13176;
})();
var statearr_13177_13229 = state_13147__$1;
(statearr_13177_13229[(2)] = null);

(statearr_13177_13229[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (25))){
var inst_13143 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13178_13230 = state_13147__$1;
(statearr_13178_13230[(2)] = inst_13143);

(statearr_13178_13230[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (34))){
var inst_13141 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13179_13231 = state_13147__$1;
(statearr_13179_13231[(2)] = inst_13141);

(statearr_13179_13231[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (17))){
var state_13147__$1 = state_13147;
var statearr_13180_13232 = state_13147__$1;
(statearr_13180_13232[(2)] = false);

(statearr_13180_13232[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (3))){
var state_13147__$1 = state_13147;
var statearr_13181_13233 = state_13147__$1;
(statearr_13181_13233[(2)] = false);

(statearr_13181_13233[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (12))){
var inst_13145 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13147__$1,inst_13145);
} else {
if((state_val_13148 === (2))){
var inst_13049 = (state_13147[(8)]);
var inst_13054 = inst_13049.cljs$lang$protocol_mask$partition0$;
var inst_13055 = (inst_13054 & (64));
var inst_13056 = inst_13049.cljs$core$ISeq$;
var inst_13057 = (cljs.core.PROTOCOL_SENTINEL === inst_13056);
var inst_13058 = ((inst_13055) || (inst_13057));
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13058)){
var statearr_13182_13234 = state_13147__$1;
(statearr_13182_13234[(1)] = (5));

} else {
var statearr_13183_13235 = state_13147__$1;
(statearr_13183_13235[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (23))){
var inst_13106 = (state_13147[(14)]);
var inst_13112 = (inst_13106 == null);
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13112)){
var statearr_13184_13236 = state_13147__$1;
(statearr_13184_13236[(1)] = (26));

} else {
var statearr_13185_13237 = state_13147__$1;
(statearr_13185_13237[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (35))){
var inst_13132 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13132)){
var statearr_13186_13238 = state_13147__$1;
(statearr_13186_13238[(1)] = (36));

} else {
var statearr_13187_13239 = state_13147__$1;
(statearr_13187_13239[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (19))){
var inst_13074 = (state_13147[(7)]);
var inst_13094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13074);
var state_13147__$1 = state_13147;
var statearr_13188_13240 = state_13147__$1;
(statearr_13188_13240[(2)] = inst_13094);

(statearr_13188_13240[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (11))){
var inst_13074 = (state_13147[(7)]);
var inst_13078 = (inst_13074 == null);
var inst_13079 = cljs.core.not(inst_13078);
var state_13147__$1 = state_13147;
if(inst_13079){
var statearr_13189_13241 = state_13147__$1;
(statearr_13189_13241[(1)] = (13));

} else {
var statearr_13190_13242 = state_13147__$1;
(statearr_13190_13242[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (9))){
var inst_13049 = (state_13147[(8)]);
var state_13147__$1 = state_13147;
var statearr_13191_13243 = state_13147__$1;
(statearr_13191_13243[(2)] = inst_13049);

(statearr_13191_13243[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (5))){
var state_13147__$1 = state_13147;
var statearr_13192_13244 = state_13147__$1;
(statearr_13192_13244[(2)] = true);

(statearr_13192_13244[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (14))){
var state_13147__$1 = state_13147;
var statearr_13193_13245 = state_13147__$1;
(statearr_13193_13245[(2)] = false);

(statearr_13193_13245[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (26))){
var inst_13107 = (state_13147[(11)]);
var inst_13114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13107);
var state_13147__$1 = state_13147;
var statearr_13194_13246 = state_13147__$1;
(statearr_13194_13246[(2)] = inst_13114);

(statearr_13194_13246[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (16))){
var state_13147__$1 = state_13147;
var statearr_13195_13247 = state_13147__$1;
(statearr_13195_13247[(2)] = true);

(statearr_13195_13247[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (38))){
var inst_13137 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13196_13248 = state_13147__$1;
(statearr_13196_13248[(2)] = inst_13137);

(statearr_13196_13248[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (30))){
var inst_13098 = (state_13147[(10)]);
var inst_13099 = (state_13147[(13)]);
var inst_13107 = (state_13147[(11)]);
var inst_13124 = cljs.core.empty_QMARK_(inst_13098);
var inst_13125 = (inst_13099.cljs$core$IFn$_invoke$arity$1 ? inst_13099.cljs$core$IFn$_invoke$arity$1(inst_13107) : inst_13099.call(null,inst_13107));
var inst_13126 = cljs.core.not(inst_13125);
var inst_13127 = ((inst_13124) && (inst_13126));
var state_13147__$1 = state_13147;
var statearr_13197_13249 = state_13147__$1;
(statearr_13197_13249[(2)] = inst_13127);

(statearr_13197_13249[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (10))){
var inst_13049 = (state_13147[(8)]);
var inst_13070 = (state_13147[(2)]);
var inst_13071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13070,cljs.core.cst$kw$solos);
var inst_13072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13070,cljs.core.cst$kw$mutes);
var inst_13073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13070,cljs.core.cst$kw$reads);
var inst_13074 = inst_13049;
var state_13147__$1 = (function (){var statearr_13198 = state_13147;
(statearr_13198[(7)] = inst_13074);

(statearr_13198[(16)] = inst_13071);

(statearr_13198[(17)] = inst_13073);

(statearr_13198[(18)] = inst_13072);

return statearr_13198;
})();
var statearr_13199_13250 = state_13147__$1;
(statearr_13199_13250[(2)] = null);

(statearr_13199_13250[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (18))){
var inst_13089 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13200_13251 = state_13147__$1;
(statearr_13200_13251[(2)] = inst_13089);

(statearr_13200_13251[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (37))){
var state_13147__$1 = state_13147;
var statearr_13201_13252 = state_13147__$1;
(statearr_13201_13252[(2)] = null);

(statearr_13201_13252[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13148 === (8))){
var inst_13049 = (state_13147[(8)]);
var inst_13067 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13049);
var state_13147__$1 = state_13147;
var statearr_13202_13253 = state_13147__$1;
(statearr_13202_13253[(2)] = inst_13067);

(statearr_13202_13253[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12146__auto___13207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12044__auto__,c__12146__auto___13207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12045__auto__ = null;
var cljs$core$async$mix_$_state_machine__12045__auto____0 = (function (){
var statearr_13203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13203[(0)] = cljs$core$async$mix_$_state_machine__12045__auto__);

(statearr_13203[(1)] = (1));

return statearr_13203;
});
var cljs$core$async$mix_$_state_machine__12045__auto____1 = (function (state_13147){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13147);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13204){if((e13204 instanceof Object)){
var ex__12048__auto__ = e13204;
var statearr_13205_13254 = state_13147;
(statearr_13205_13254[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13147);

return cljs.core.cst$kw$recur;
} else {
throw e13204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13255 = state_13147;
state_13147 = G__13255;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12045__auto__ = function(state_13147){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12045__auto____1.call(this,state_13147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12045__auto____0;
cljs$core$async$mix_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12045__auto____1;
return cljs$core$async$mix_$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12148__auto__ = (function (){var statearr_13206 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13206[(6)] = c__12146__auto___13207);

return statearr_13206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4230__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4230__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4230__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4230__auto__.call(null,p,v,ch));
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4230__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13257 = arguments.length;
switch (G__13257) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4230__auto__.call(null,p));
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4230__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return (m__4230__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4230__auto__.call(null,p,v));
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return (m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4230__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4230__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__13261 = arguments.length;
switch (G__13261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3936__auto__,mults){
return (function (p1__13259_SHARP_){
if(cljs.core.truth_((p1__13259_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13259_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13259_SHARP_.call(null,topic)))){
return p1__13259_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13259_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13262 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13263){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13263 = meta13263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13264,meta13263__$1){
var self__ = this;
var _13264__$1 = this;
return (new cljs.core.async.t_cljs$core$async13262(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13263__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13264){
var self__ = this;
var _13264__$1 = this;
return self__.meta13263;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta13263], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13262";

cljs.core.async.t_cljs$core$async13262.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async13262");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13262.
 */
cljs.core.async.__GT_t_cljs$core$async13262 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13263){
return (new cljs.core.async.t_cljs$core$async13262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13263));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13262(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12146__auto___13382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13382,mults,ensure_mult,p){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13382,mults,ensure_mult,p){
return (function (state_13336){
var state_val_13337 = (state_13336[(1)]);
if((state_val_13337 === (7))){
var inst_13332 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13338_13383 = state_13336__$1;
(statearr_13338_13383[(2)] = inst_13332);

(statearr_13338_13383[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (20))){
var state_13336__$1 = state_13336;
var statearr_13339_13384 = state_13336__$1;
(statearr_13339_13384[(2)] = null);

(statearr_13339_13384[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (1))){
var state_13336__$1 = state_13336;
var statearr_13340_13385 = state_13336__$1;
(statearr_13340_13385[(2)] = null);

(statearr_13340_13385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (24))){
var inst_13315 = (state_13336[(7)]);
var inst_13324 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13315);
var state_13336__$1 = state_13336;
var statearr_13341_13386 = state_13336__$1;
(statearr_13341_13386[(2)] = inst_13324);

(statearr_13341_13386[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (4))){
var inst_13267 = (state_13336[(8)]);
var inst_13267__$1 = (state_13336[(2)]);
var inst_13268 = (inst_13267__$1 == null);
var state_13336__$1 = (function (){var statearr_13342 = state_13336;
(statearr_13342[(8)] = inst_13267__$1);

return statearr_13342;
})();
if(cljs.core.truth_(inst_13268)){
var statearr_13343_13387 = state_13336__$1;
(statearr_13343_13387[(1)] = (5));

} else {
var statearr_13344_13388 = state_13336__$1;
(statearr_13344_13388[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (15))){
var inst_13309 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13345_13389 = state_13336__$1;
(statearr_13345_13389[(2)] = inst_13309);

(statearr_13345_13389[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (21))){
var inst_13329 = (state_13336[(2)]);
var state_13336__$1 = (function (){var statearr_13346 = state_13336;
(statearr_13346[(9)] = inst_13329);

return statearr_13346;
})();
var statearr_13347_13390 = state_13336__$1;
(statearr_13347_13390[(2)] = null);

(statearr_13347_13390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (13))){
var inst_13291 = (state_13336[(10)]);
var inst_13293 = cljs.core.chunked_seq_QMARK_(inst_13291);
var state_13336__$1 = state_13336;
if(inst_13293){
var statearr_13348_13391 = state_13336__$1;
(statearr_13348_13391[(1)] = (16));

} else {
var statearr_13349_13392 = state_13336__$1;
(statearr_13349_13392[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (22))){
var inst_13321 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
if(cljs.core.truth_(inst_13321)){
var statearr_13350_13393 = state_13336__$1;
(statearr_13350_13393[(1)] = (23));

} else {
var statearr_13351_13394 = state_13336__$1;
(statearr_13351_13394[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (6))){
var inst_13267 = (state_13336[(8)]);
var inst_13315 = (state_13336[(7)]);
var inst_13317 = (state_13336[(11)]);
var inst_13315__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13267) : topic_fn.call(null,inst_13267));
var inst_13316 = cljs.core.deref(mults);
var inst_13317__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13316,inst_13315__$1);
var state_13336__$1 = (function (){var statearr_13352 = state_13336;
(statearr_13352[(7)] = inst_13315__$1);

(statearr_13352[(11)] = inst_13317__$1);

return statearr_13352;
})();
if(cljs.core.truth_(inst_13317__$1)){
var statearr_13353_13395 = state_13336__$1;
(statearr_13353_13395[(1)] = (19));

} else {
var statearr_13354_13396 = state_13336__$1;
(statearr_13354_13396[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (25))){
var inst_13326 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13355_13397 = state_13336__$1;
(statearr_13355_13397[(2)] = inst_13326);

(statearr_13355_13397[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (17))){
var inst_13291 = (state_13336[(10)]);
var inst_13300 = cljs.core.first(inst_13291);
var inst_13301 = cljs.core.async.muxch_STAR_(inst_13300);
var inst_13302 = cljs.core.async.close_BANG_(inst_13301);
var inst_13303 = cljs.core.next(inst_13291);
var inst_13277 = inst_13303;
var inst_13278 = null;
var inst_13279 = (0);
var inst_13280 = (0);
var state_13336__$1 = (function (){var statearr_13356 = state_13336;
(statearr_13356[(12)] = inst_13279);

(statearr_13356[(13)] = inst_13302);

(statearr_13356[(14)] = inst_13278);

(statearr_13356[(15)] = inst_13280);

(statearr_13356[(16)] = inst_13277);

return statearr_13356;
})();
var statearr_13357_13398 = state_13336__$1;
(statearr_13357_13398[(2)] = null);

(statearr_13357_13398[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (3))){
var inst_13334 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13336__$1,inst_13334);
} else {
if((state_val_13337 === (12))){
var inst_13311 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13358_13399 = state_13336__$1;
(statearr_13358_13399[(2)] = inst_13311);

(statearr_13358_13399[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (2))){
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13336__$1,(4),ch);
} else {
if((state_val_13337 === (23))){
var state_13336__$1 = state_13336;
var statearr_13359_13400 = state_13336__$1;
(statearr_13359_13400[(2)] = null);

(statearr_13359_13400[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (19))){
var inst_13267 = (state_13336[(8)]);
var inst_13317 = (state_13336[(11)]);
var inst_13319 = cljs.core.async.muxch_STAR_(inst_13317);
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13336__$1,(22),inst_13319,inst_13267);
} else {
if((state_val_13337 === (11))){
var inst_13291 = (state_13336[(10)]);
var inst_13277 = (state_13336[(16)]);
var inst_13291__$1 = cljs.core.seq(inst_13277);
var state_13336__$1 = (function (){var statearr_13360 = state_13336;
(statearr_13360[(10)] = inst_13291__$1);

return statearr_13360;
})();
if(inst_13291__$1){
var statearr_13361_13401 = state_13336__$1;
(statearr_13361_13401[(1)] = (13));

} else {
var statearr_13362_13402 = state_13336__$1;
(statearr_13362_13402[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (9))){
var inst_13313 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13363_13403 = state_13336__$1;
(statearr_13363_13403[(2)] = inst_13313);

(statearr_13363_13403[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (5))){
var inst_13274 = cljs.core.deref(mults);
var inst_13275 = cljs.core.vals(inst_13274);
var inst_13276 = cljs.core.seq(inst_13275);
var inst_13277 = inst_13276;
var inst_13278 = null;
var inst_13279 = (0);
var inst_13280 = (0);
var state_13336__$1 = (function (){var statearr_13364 = state_13336;
(statearr_13364[(12)] = inst_13279);

(statearr_13364[(14)] = inst_13278);

(statearr_13364[(15)] = inst_13280);

(statearr_13364[(16)] = inst_13277);

return statearr_13364;
})();
var statearr_13365_13404 = state_13336__$1;
(statearr_13365_13404[(2)] = null);

(statearr_13365_13404[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (14))){
var state_13336__$1 = state_13336;
var statearr_13369_13405 = state_13336__$1;
(statearr_13369_13405[(2)] = null);

(statearr_13369_13405[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (16))){
var inst_13291 = (state_13336[(10)]);
var inst_13295 = cljs.core.chunk_first(inst_13291);
var inst_13296 = cljs.core.chunk_rest(inst_13291);
var inst_13297 = cljs.core.count(inst_13295);
var inst_13277 = inst_13296;
var inst_13278 = inst_13295;
var inst_13279 = inst_13297;
var inst_13280 = (0);
var state_13336__$1 = (function (){var statearr_13370 = state_13336;
(statearr_13370[(12)] = inst_13279);

(statearr_13370[(14)] = inst_13278);

(statearr_13370[(15)] = inst_13280);

(statearr_13370[(16)] = inst_13277);

return statearr_13370;
})();
var statearr_13371_13406 = state_13336__$1;
(statearr_13371_13406[(2)] = null);

(statearr_13371_13406[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (10))){
var inst_13279 = (state_13336[(12)]);
var inst_13278 = (state_13336[(14)]);
var inst_13280 = (state_13336[(15)]);
var inst_13277 = (state_13336[(16)]);
var inst_13285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13278,inst_13280);
var inst_13286 = cljs.core.async.muxch_STAR_(inst_13285);
var inst_13287 = cljs.core.async.close_BANG_(inst_13286);
var inst_13288 = (inst_13280 + (1));
var tmp13366 = inst_13279;
var tmp13367 = inst_13278;
var tmp13368 = inst_13277;
var inst_13277__$1 = tmp13368;
var inst_13278__$1 = tmp13367;
var inst_13279__$1 = tmp13366;
var inst_13280__$1 = inst_13288;
var state_13336__$1 = (function (){var statearr_13372 = state_13336;
(statearr_13372[(12)] = inst_13279__$1);

(statearr_13372[(17)] = inst_13287);

(statearr_13372[(14)] = inst_13278__$1);

(statearr_13372[(15)] = inst_13280__$1);

(statearr_13372[(16)] = inst_13277__$1);

return statearr_13372;
})();
var statearr_13373_13407 = state_13336__$1;
(statearr_13373_13407[(2)] = null);

(statearr_13373_13407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (18))){
var inst_13306 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13374_13408 = state_13336__$1;
(statearr_13374_13408[(2)] = inst_13306);

(statearr_13374_13408[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13337 === (8))){
var inst_13279 = (state_13336[(12)]);
var inst_13280 = (state_13336[(15)]);
var inst_13282 = (inst_13280 < inst_13279);
var inst_13283 = inst_13282;
var state_13336__$1 = state_13336;
if(cljs.core.truth_(inst_13283)){
var statearr_13375_13409 = state_13336__$1;
(statearr_13375_13409[(1)] = (10));

} else {
var statearr_13376_13410 = state_13336__$1;
(statearr_13376_13410[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12146__auto___13382,mults,ensure_mult,p))
;
return ((function (switch__12044__auto__,c__12146__auto___13382,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13377[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13377[(1)] = (1));

return statearr_13377;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13336){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13336);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13378){if((e13378 instanceof Object)){
var ex__12048__auto__ = e13378;
var statearr_13379_13411 = state_13336;
(statearr_13379_13411[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13336);

return cljs.core.cst$kw$recur;
} else {
throw e13378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13412 = state_13336;
state_13336 = G__13412;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13382,mults,ensure_mult,p))
})();
var state__12148__auto__ = (function (){var statearr_13380 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13380[(6)] = c__12146__auto___13382);

return statearr_13380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13382,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13414 = arguments.length;
switch (G__13414) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13417 = arguments.length;
switch (G__13417) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13420 = arguments.length;
switch (G__13420) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12146__auto___13487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13459){
var state_val_13460 = (state_13459[(1)]);
if((state_val_13460 === (7))){
var state_13459__$1 = state_13459;
var statearr_13461_13488 = state_13459__$1;
(statearr_13461_13488[(2)] = null);

(statearr_13461_13488[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (1))){
var state_13459__$1 = state_13459;
var statearr_13462_13489 = state_13459__$1;
(statearr_13462_13489[(2)] = null);

(statearr_13462_13489[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (4))){
var inst_13423 = (state_13459[(7)]);
var inst_13425 = (inst_13423 < cnt);
var state_13459__$1 = state_13459;
if(cljs.core.truth_(inst_13425)){
var statearr_13463_13490 = state_13459__$1;
(statearr_13463_13490[(1)] = (6));

} else {
var statearr_13464_13491 = state_13459__$1;
(statearr_13464_13491[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (15))){
var inst_13455 = (state_13459[(2)]);
var state_13459__$1 = state_13459;
var statearr_13465_13492 = state_13459__$1;
(statearr_13465_13492[(2)] = inst_13455);

(statearr_13465_13492[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (13))){
var inst_13448 = cljs.core.async.close_BANG_(out);
var state_13459__$1 = state_13459;
var statearr_13466_13493 = state_13459__$1;
(statearr_13466_13493[(2)] = inst_13448);

(statearr_13466_13493[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (6))){
var state_13459__$1 = state_13459;
var statearr_13467_13494 = state_13459__$1;
(statearr_13467_13494[(2)] = null);

(statearr_13467_13494[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (3))){
var inst_13457 = (state_13459[(2)]);
var state_13459__$1 = state_13459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13459__$1,inst_13457);
} else {
if((state_val_13460 === (12))){
var inst_13445 = (state_13459[(8)]);
var inst_13445__$1 = (state_13459[(2)]);
var inst_13446 = cljs.core.some(cljs.core.nil_QMARK_,inst_13445__$1);
var state_13459__$1 = (function (){var statearr_13468 = state_13459;
(statearr_13468[(8)] = inst_13445__$1);

return statearr_13468;
})();
if(cljs.core.truth_(inst_13446)){
var statearr_13469_13495 = state_13459__$1;
(statearr_13469_13495[(1)] = (13));

} else {
var statearr_13470_13496 = state_13459__$1;
(statearr_13470_13496[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (2))){
var inst_13422 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13423 = (0);
var state_13459__$1 = (function (){var statearr_13471 = state_13459;
(statearr_13471[(7)] = inst_13423);

(statearr_13471[(9)] = inst_13422);

return statearr_13471;
})();
var statearr_13472_13497 = state_13459__$1;
(statearr_13472_13497[(2)] = null);

(statearr_13472_13497[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (11))){
var inst_13423 = (state_13459[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13459,(10),Object,null,(9));
var inst_13432 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13423) : chs__$1.call(null,inst_13423));
var inst_13433 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13423) : done.call(null,inst_13423));
var inst_13434 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13432,inst_13433);
var state_13459__$1 = state_13459;
var statearr_13473_13498 = state_13459__$1;
(statearr_13473_13498[(2)] = inst_13434);


cljs.core.async.impl.ioc_helpers.process_exception(state_13459__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (9))){
var inst_13423 = (state_13459[(7)]);
var inst_13436 = (state_13459[(2)]);
var inst_13437 = (inst_13423 + (1));
var inst_13423__$1 = inst_13437;
var state_13459__$1 = (function (){var statearr_13474 = state_13459;
(statearr_13474[(7)] = inst_13423__$1);

(statearr_13474[(10)] = inst_13436);

return statearr_13474;
})();
var statearr_13475_13499 = state_13459__$1;
(statearr_13475_13499[(2)] = null);

(statearr_13475_13499[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (5))){
var inst_13443 = (state_13459[(2)]);
var state_13459__$1 = (function (){var statearr_13476 = state_13459;
(statearr_13476[(11)] = inst_13443);

return statearr_13476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13459__$1,(12),dchan);
} else {
if((state_val_13460 === (14))){
var inst_13445 = (state_13459[(8)]);
var inst_13450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13445);
var state_13459__$1 = state_13459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13459__$1,(16),out,inst_13450);
} else {
if((state_val_13460 === (16))){
var inst_13452 = (state_13459[(2)]);
var state_13459__$1 = (function (){var statearr_13477 = state_13459;
(statearr_13477[(12)] = inst_13452);

return statearr_13477;
})();
var statearr_13478_13500 = state_13459__$1;
(statearr_13478_13500[(2)] = null);

(statearr_13478_13500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (10))){
var inst_13427 = (state_13459[(2)]);
var inst_13428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13459__$1 = (function (){var statearr_13479 = state_13459;
(statearr_13479[(13)] = inst_13427);

return statearr_13479;
})();
var statearr_13480_13501 = state_13459__$1;
(statearr_13480_13501[(2)] = inst_13428);


cljs.core.async.impl.ioc_helpers.process_exception(state_13459__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13460 === (8))){
var inst_13441 = (state_13459[(2)]);
var state_13459__$1 = state_13459;
var statearr_13481_13502 = state_13459__$1;
(statearr_13481_13502[(2)] = inst_13441);

(statearr_13481_13502[(1)] = (5));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
});})(c__12146__auto___13487,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12044__auto__,c__12146__auto___13487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13482[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13482[(1)] = (1));

return statearr_13482;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13459){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13459);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13483){if((e13483 instanceof Object)){
var ex__12048__auto__ = e13483;
var statearr_13484_13503 = state_13459;
(statearr_13484_13503[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13459);

return cljs.core.cst$kw$recur;
} else {
throw e13483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13504 = state_13459;
state_13459 = G__13504;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13487,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12148__auto__ = (function (){var statearr_13485 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13485[(6)] = c__12146__auto___13487);

return statearr_13485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13487,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13507 = arguments.length;
switch (G__13507) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12146__auto___13561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13561,out){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13561,out){
return (function (state_13539){
var state_val_13540 = (state_13539[(1)]);
if((state_val_13540 === (7))){
var inst_13519 = (state_13539[(7)]);
var inst_13518 = (state_13539[(8)]);
var inst_13518__$1 = (state_13539[(2)]);
var inst_13519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13518__$1,(0),null);
var inst_13520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13518__$1,(1),null);
var inst_13521 = (inst_13519__$1 == null);
var state_13539__$1 = (function (){var statearr_13541 = state_13539;
(statearr_13541[(7)] = inst_13519__$1);

(statearr_13541[(8)] = inst_13518__$1);

(statearr_13541[(9)] = inst_13520);

return statearr_13541;
})();
if(cljs.core.truth_(inst_13521)){
var statearr_13542_13562 = state_13539__$1;
(statearr_13542_13562[(1)] = (8));

} else {
var statearr_13543_13563 = state_13539__$1;
(statearr_13543_13563[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (1))){
var inst_13508 = cljs.core.vec(chs);
var inst_13509 = inst_13508;
var state_13539__$1 = (function (){var statearr_13544 = state_13539;
(statearr_13544[(10)] = inst_13509);

return statearr_13544;
})();
var statearr_13545_13564 = state_13539__$1;
(statearr_13545_13564[(2)] = null);

(statearr_13545_13564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (4))){
var inst_13509 = (state_13539[(10)]);
var state_13539__$1 = state_13539;
return cljs.core.async.ioc_alts_BANG_(state_13539__$1,(7),inst_13509);
} else {
if((state_val_13540 === (6))){
var inst_13535 = (state_13539[(2)]);
var state_13539__$1 = state_13539;
var statearr_13546_13565 = state_13539__$1;
(statearr_13546_13565[(2)] = inst_13535);

(statearr_13546_13565[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (3))){
var inst_13537 = (state_13539[(2)]);
var state_13539__$1 = state_13539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13539__$1,inst_13537);
} else {
if((state_val_13540 === (2))){
var inst_13509 = (state_13539[(10)]);
var inst_13511 = cljs.core.count(inst_13509);
var inst_13512 = (inst_13511 > (0));
var state_13539__$1 = state_13539;
if(cljs.core.truth_(inst_13512)){
var statearr_13548_13566 = state_13539__$1;
(statearr_13548_13566[(1)] = (4));

} else {
var statearr_13549_13567 = state_13539__$1;
(statearr_13549_13567[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (11))){
var inst_13509 = (state_13539[(10)]);
var inst_13528 = (state_13539[(2)]);
var tmp13547 = inst_13509;
var inst_13509__$1 = tmp13547;
var state_13539__$1 = (function (){var statearr_13550 = state_13539;
(statearr_13550[(10)] = inst_13509__$1);

(statearr_13550[(11)] = inst_13528);

return statearr_13550;
})();
var statearr_13551_13568 = state_13539__$1;
(statearr_13551_13568[(2)] = null);

(statearr_13551_13568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (9))){
var inst_13519 = (state_13539[(7)]);
var state_13539__$1 = state_13539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13539__$1,(11),out,inst_13519);
} else {
if((state_val_13540 === (5))){
var inst_13533 = cljs.core.async.close_BANG_(out);
var state_13539__$1 = state_13539;
var statearr_13552_13569 = state_13539__$1;
(statearr_13552_13569[(2)] = inst_13533);

(statearr_13552_13569[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (10))){
var inst_13531 = (state_13539[(2)]);
var state_13539__$1 = state_13539;
var statearr_13553_13570 = state_13539__$1;
(statearr_13553_13570[(2)] = inst_13531);

(statearr_13553_13570[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13540 === (8))){
var inst_13509 = (state_13539[(10)]);
var inst_13519 = (state_13539[(7)]);
var inst_13518 = (state_13539[(8)]);
var inst_13520 = (state_13539[(9)]);
var inst_13523 = (function (){var cs = inst_13509;
var vec__13514 = inst_13518;
var v = inst_13519;
var c = inst_13520;
return ((function (cs,vec__13514,v,c,inst_13509,inst_13519,inst_13518,inst_13520,state_val_13540,c__12146__auto___13561,out){
return (function (p1__13505_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13505_SHARP_);
});
;})(cs,vec__13514,v,c,inst_13509,inst_13519,inst_13518,inst_13520,state_val_13540,c__12146__auto___13561,out))
})();
var inst_13524 = cljs.core.filterv(inst_13523,inst_13509);
var inst_13509__$1 = inst_13524;
var state_13539__$1 = (function (){var statearr_13554 = state_13539;
(statearr_13554[(10)] = inst_13509__$1);

return statearr_13554;
})();
var statearr_13555_13571 = state_13539__$1;
(statearr_13555_13571[(2)] = null);

(statearr_13555_13571[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
});})(c__12146__auto___13561,out))
;
return ((function (switch__12044__auto__,c__12146__auto___13561,out){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13556[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13556[(1)] = (1));

return statearr_13556;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13539){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13539);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13557){if((e13557 instanceof Object)){
var ex__12048__auto__ = e13557;
var statearr_13558_13572 = state_13539;
(statearr_13558_13572[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13539);

return cljs.core.cst$kw$recur;
} else {
throw e13557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13573 = state_13539;
state_13539 = G__13573;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13561,out))
})();
var state__12148__auto__ = (function (){var statearr_13559 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13559[(6)] = c__12146__auto___13561);

return statearr_13559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13561,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13575 = arguments.length;
switch (G__13575) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12146__auto___13620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13620,out){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13620,out){
return (function (state_13599){
var state_val_13600 = (state_13599[(1)]);
if((state_val_13600 === (7))){
var inst_13581 = (state_13599[(7)]);
var inst_13581__$1 = (state_13599[(2)]);
var inst_13582 = (inst_13581__$1 == null);
var inst_13583 = cljs.core.not(inst_13582);
var state_13599__$1 = (function (){var statearr_13601 = state_13599;
(statearr_13601[(7)] = inst_13581__$1);

return statearr_13601;
})();
if(inst_13583){
var statearr_13602_13621 = state_13599__$1;
(statearr_13602_13621[(1)] = (8));

} else {
var statearr_13603_13622 = state_13599__$1;
(statearr_13603_13622[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (1))){
var inst_13576 = (0);
var state_13599__$1 = (function (){var statearr_13604 = state_13599;
(statearr_13604[(8)] = inst_13576);

return statearr_13604;
})();
var statearr_13605_13623 = state_13599__$1;
(statearr_13605_13623[(2)] = null);

(statearr_13605_13623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (4))){
var state_13599__$1 = state_13599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13599__$1,(7),ch);
} else {
if((state_val_13600 === (6))){
var inst_13594 = (state_13599[(2)]);
var state_13599__$1 = state_13599;
var statearr_13606_13624 = state_13599__$1;
(statearr_13606_13624[(2)] = inst_13594);

(statearr_13606_13624[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (3))){
var inst_13596 = (state_13599[(2)]);
var inst_13597 = cljs.core.async.close_BANG_(out);
var state_13599__$1 = (function (){var statearr_13607 = state_13599;
(statearr_13607[(9)] = inst_13596);

return statearr_13607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13599__$1,inst_13597);
} else {
if((state_val_13600 === (2))){
var inst_13576 = (state_13599[(8)]);
var inst_13578 = (inst_13576 < n);
var state_13599__$1 = state_13599;
if(cljs.core.truth_(inst_13578)){
var statearr_13608_13625 = state_13599__$1;
(statearr_13608_13625[(1)] = (4));

} else {
var statearr_13609_13626 = state_13599__$1;
(statearr_13609_13626[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (11))){
var inst_13576 = (state_13599[(8)]);
var inst_13586 = (state_13599[(2)]);
var inst_13587 = (inst_13576 + (1));
var inst_13576__$1 = inst_13587;
var state_13599__$1 = (function (){var statearr_13610 = state_13599;
(statearr_13610[(8)] = inst_13576__$1);

(statearr_13610[(10)] = inst_13586);

return statearr_13610;
})();
var statearr_13611_13627 = state_13599__$1;
(statearr_13611_13627[(2)] = null);

(statearr_13611_13627[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (9))){
var state_13599__$1 = state_13599;
var statearr_13612_13628 = state_13599__$1;
(statearr_13612_13628[(2)] = null);

(statearr_13612_13628[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (5))){
var state_13599__$1 = state_13599;
var statearr_13613_13629 = state_13599__$1;
(statearr_13613_13629[(2)] = null);

(statearr_13613_13629[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (10))){
var inst_13591 = (state_13599[(2)]);
var state_13599__$1 = state_13599;
var statearr_13614_13630 = state_13599__$1;
(statearr_13614_13630[(2)] = inst_13591);

(statearr_13614_13630[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13600 === (8))){
var inst_13581 = (state_13599[(7)]);
var state_13599__$1 = state_13599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13599__$1,(11),out,inst_13581);
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
}
}
}
});})(c__12146__auto___13620,out))
;
return ((function (switch__12044__auto__,c__12146__auto___13620,out){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13615[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13615[(1)] = (1));

return statearr_13615;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13599){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13599);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13616){if((e13616 instanceof Object)){
var ex__12048__auto__ = e13616;
var statearr_13617_13631 = state_13599;
(statearr_13617_13631[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13599);

return cljs.core.cst$kw$recur;
} else {
throw e13616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13632 = state_13599;
state_13599 = G__13632;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13620,out))
})();
var state__12148__auto__ = (function (){var statearr_13618 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13618[(6)] = c__12146__auto___13620);

return statearr_13618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13620,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13634 = (function (f,ch,meta13635){
this.f = f;
this.ch = ch;
this.meta13635 = meta13635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13636,meta13635__$1){
var self__ = this;
var _13636__$1 = this;
return (new cljs.core.async.t_cljs$core$async13634(self__.f,self__.ch,meta13635__$1));
});

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13636){
var self__ = this;
var _13636__$1 = this;
return self__.meta13635;
});

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13637 = (function (f,ch,meta13635,_,fn1,meta13638){
this.f = f;
this.ch = ch;
this.meta13635 = meta13635;
this._ = _;
this.fn1 = fn1;
this.meta13638 = meta13638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13639,meta13638__$1){
var self__ = this;
var _13639__$1 = this;
return (new cljs.core.async.t_cljs$core$async13637(self__.f,self__.ch,self__.meta13635,self__._,self__.fn1,meta13638__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13639){
var self__ = this;
var _13639__$1 = this;
return self__.meta13638;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13633_SHARP_){
var G__13640 = (((p1__13633_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13633_SHARP_) : self__.f.call(null,p1__13633_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13640) : f1.call(null,G__13640));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13637.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13635,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async13634], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta13638], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13637";

cljs.core.async.t_cljs$core$async13637.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async13637");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13637.
 */
cljs.core.async.__GT_t_cljs$core$async13637 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13637(f__$1,ch__$1,meta13635__$1,___$2,fn1__$1,meta13638){
return (new cljs.core.async.t_cljs$core$async13637(f__$1,ch__$1,meta13635__$1,___$2,fn1__$1,meta13638));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13637(self__.f,self__.ch,self__.meta13635,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13641 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13641) : self__.f.call(null,G__13641));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13635], null);
});

cljs.core.async.t_cljs$core$async13634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13634";

cljs.core.async.t_cljs$core$async13634.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async13634");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13634.
 */
cljs.core.async.__GT_t_cljs$core$async13634 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13634(f__$1,ch__$1,meta13635){
return (new cljs.core.async.t_cljs$core$async13634(f__$1,ch__$1,meta13635));
});

}

return (new cljs.core.async.t_cljs$core$async13634(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13642 = (function (f,ch,meta13643){
this.f = f;
this.ch = ch;
this.meta13643 = meta13643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13644,meta13643__$1){
var self__ = this;
var _13644__$1 = this;
return (new cljs.core.async.t_cljs$core$async13642(self__.f,self__.ch,meta13643__$1));
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13644){
var self__ = this;
var _13644__$1 = this;
return self__.meta13643;
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async13642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13643], null);
});

cljs.core.async.t_cljs$core$async13642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13642";

cljs.core.async.t_cljs$core$async13642.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async13642");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13642.
 */
cljs.core.async.__GT_t_cljs$core$async13642 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13642(f__$1,ch__$1,meta13643){
return (new cljs.core.async.t_cljs$core$async13642(f__$1,ch__$1,meta13643));
});

}

return (new cljs.core.async.t_cljs$core$async13642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13645 = (function (p,ch,meta13646){
this.p = p;
this.ch = ch;
this.meta13646 = meta13646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13647,meta13646__$1){
var self__ = this;
var _13647__$1 = this;
return (new cljs.core.async.t_cljs$core$async13645(self__.p,self__.ch,meta13646__$1));
});

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13647){
var self__ = this;
var _13647__$1 = this;
return self__.meta13646;
});

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13646], null);
});

cljs.core.async.t_cljs$core$async13645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13645";

cljs.core.async.t_cljs$core$async13645.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async13645");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13645.
 */
cljs.core.async.__GT_t_cljs$core$async13645 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13645(p__$1,ch__$1,meta13646){
return (new cljs.core.async.t_cljs$core$async13645(p__$1,ch__$1,meta13646));
});

}

return (new cljs.core.async.t_cljs$core$async13645(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13649 = arguments.length;
switch (G__13649) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12146__auto___13689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13689,out){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13689,out){
return (function (state_13670){
var state_val_13671 = (state_13670[(1)]);
if((state_val_13671 === (7))){
var inst_13666 = (state_13670[(2)]);
var state_13670__$1 = state_13670;
var statearr_13672_13690 = state_13670__$1;
(statearr_13672_13690[(2)] = inst_13666);

(statearr_13672_13690[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (1))){
var state_13670__$1 = state_13670;
var statearr_13673_13691 = state_13670__$1;
(statearr_13673_13691[(2)] = null);

(statearr_13673_13691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (4))){
var inst_13652 = (state_13670[(7)]);
var inst_13652__$1 = (state_13670[(2)]);
var inst_13653 = (inst_13652__$1 == null);
var state_13670__$1 = (function (){var statearr_13674 = state_13670;
(statearr_13674[(7)] = inst_13652__$1);

return statearr_13674;
})();
if(cljs.core.truth_(inst_13653)){
var statearr_13675_13692 = state_13670__$1;
(statearr_13675_13692[(1)] = (5));

} else {
var statearr_13676_13693 = state_13670__$1;
(statearr_13676_13693[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (6))){
var inst_13652 = (state_13670[(7)]);
var inst_13657 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13652) : p.call(null,inst_13652));
var state_13670__$1 = state_13670;
if(cljs.core.truth_(inst_13657)){
var statearr_13677_13694 = state_13670__$1;
(statearr_13677_13694[(1)] = (8));

} else {
var statearr_13678_13695 = state_13670__$1;
(statearr_13678_13695[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (3))){
var inst_13668 = (state_13670[(2)]);
var state_13670__$1 = state_13670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13670__$1,inst_13668);
} else {
if((state_val_13671 === (2))){
var state_13670__$1 = state_13670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13670__$1,(4),ch);
} else {
if((state_val_13671 === (11))){
var inst_13660 = (state_13670[(2)]);
var state_13670__$1 = state_13670;
var statearr_13679_13696 = state_13670__$1;
(statearr_13679_13696[(2)] = inst_13660);

(statearr_13679_13696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (9))){
var state_13670__$1 = state_13670;
var statearr_13680_13697 = state_13670__$1;
(statearr_13680_13697[(2)] = null);

(statearr_13680_13697[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (5))){
var inst_13655 = cljs.core.async.close_BANG_(out);
var state_13670__$1 = state_13670;
var statearr_13681_13698 = state_13670__$1;
(statearr_13681_13698[(2)] = inst_13655);

(statearr_13681_13698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (10))){
var inst_13663 = (state_13670[(2)]);
var state_13670__$1 = (function (){var statearr_13682 = state_13670;
(statearr_13682[(8)] = inst_13663);

return statearr_13682;
})();
var statearr_13683_13699 = state_13670__$1;
(statearr_13683_13699[(2)] = null);

(statearr_13683_13699[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13671 === (8))){
var inst_13652 = (state_13670[(7)]);
var state_13670__$1 = state_13670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13670__$1,(11),out,inst_13652);
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
}
}
}
});})(c__12146__auto___13689,out))
;
return ((function (switch__12044__auto__,c__12146__auto___13689,out){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13684 = [null,null,null,null,null,null,null,null,null];
(statearr_13684[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13684[(1)] = (1));

return statearr_13684;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13670){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13670);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13685){if((e13685 instanceof Object)){
var ex__12048__auto__ = e13685;
var statearr_13686_13700 = state_13670;
(statearr_13686_13700[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13670);

return cljs.core.cst$kw$recur;
} else {
throw e13685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13701 = state_13670;
state_13670 = G__13701;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13689,out))
})();
var state__12148__auto__ = (function (){var statearr_13687 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13687[(6)] = c__12146__auto___13689);

return statearr_13687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13689,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13703 = arguments.length;
switch (G__13703) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__){
return (function (state_13766){
var state_val_13767 = (state_13766[(1)]);
if((state_val_13767 === (7))){
var inst_13762 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13768_13806 = state_13766__$1;
(statearr_13768_13806[(2)] = inst_13762);

(statearr_13768_13806[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (20))){
var inst_13732 = (state_13766[(7)]);
var inst_13743 = (state_13766[(2)]);
var inst_13744 = cljs.core.next(inst_13732);
var inst_13718 = inst_13744;
var inst_13719 = null;
var inst_13720 = (0);
var inst_13721 = (0);
var state_13766__$1 = (function (){var statearr_13769 = state_13766;
(statearr_13769[(8)] = inst_13719);

(statearr_13769[(9)] = inst_13718);

(statearr_13769[(10)] = inst_13721);

(statearr_13769[(11)] = inst_13720);

(statearr_13769[(12)] = inst_13743);

return statearr_13769;
})();
var statearr_13770_13807 = state_13766__$1;
(statearr_13770_13807[(2)] = null);

(statearr_13770_13807[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (1))){
var state_13766__$1 = state_13766;
var statearr_13771_13808 = state_13766__$1;
(statearr_13771_13808[(2)] = null);

(statearr_13771_13808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (4))){
var inst_13707 = (state_13766[(13)]);
var inst_13707__$1 = (state_13766[(2)]);
var inst_13708 = (inst_13707__$1 == null);
var state_13766__$1 = (function (){var statearr_13772 = state_13766;
(statearr_13772[(13)] = inst_13707__$1);

return statearr_13772;
})();
if(cljs.core.truth_(inst_13708)){
var statearr_13773_13809 = state_13766__$1;
(statearr_13773_13809[(1)] = (5));

} else {
var statearr_13774_13810 = state_13766__$1;
(statearr_13774_13810[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (15))){
var state_13766__$1 = state_13766;
var statearr_13778_13811 = state_13766__$1;
(statearr_13778_13811[(2)] = null);

(statearr_13778_13811[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (21))){
var state_13766__$1 = state_13766;
var statearr_13779_13812 = state_13766__$1;
(statearr_13779_13812[(2)] = null);

(statearr_13779_13812[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (13))){
var inst_13719 = (state_13766[(8)]);
var inst_13718 = (state_13766[(9)]);
var inst_13721 = (state_13766[(10)]);
var inst_13720 = (state_13766[(11)]);
var inst_13728 = (state_13766[(2)]);
var inst_13729 = (inst_13721 + (1));
var tmp13775 = inst_13719;
var tmp13776 = inst_13718;
var tmp13777 = inst_13720;
var inst_13718__$1 = tmp13776;
var inst_13719__$1 = tmp13775;
var inst_13720__$1 = tmp13777;
var inst_13721__$1 = inst_13729;
var state_13766__$1 = (function (){var statearr_13780 = state_13766;
(statearr_13780[(8)] = inst_13719__$1);

(statearr_13780[(9)] = inst_13718__$1);

(statearr_13780[(10)] = inst_13721__$1);

(statearr_13780[(11)] = inst_13720__$1);

(statearr_13780[(14)] = inst_13728);

return statearr_13780;
})();
var statearr_13781_13813 = state_13766__$1;
(statearr_13781_13813[(2)] = null);

(statearr_13781_13813[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (22))){
var state_13766__$1 = state_13766;
var statearr_13782_13814 = state_13766__$1;
(statearr_13782_13814[(2)] = null);

(statearr_13782_13814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (6))){
var inst_13707 = (state_13766[(13)]);
var inst_13716 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13707) : f.call(null,inst_13707));
var inst_13717 = cljs.core.seq(inst_13716);
var inst_13718 = inst_13717;
var inst_13719 = null;
var inst_13720 = (0);
var inst_13721 = (0);
var state_13766__$1 = (function (){var statearr_13783 = state_13766;
(statearr_13783[(8)] = inst_13719);

(statearr_13783[(9)] = inst_13718);

(statearr_13783[(10)] = inst_13721);

(statearr_13783[(11)] = inst_13720);

return statearr_13783;
})();
var statearr_13784_13815 = state_13766__$1;
(statearr_13784_13815[(2)] = null);

(statearr_13784_13815[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (17))){
var inst_13732 = (state_13766[(7)]);
var inst_13736 = cljs.core.chunk_first(inst_13732);
var inst_13737 = cljs.core.chunk_rest(inst_13732);
var inst_13738 = cljs.core.count(inst_13736);
var inst_13718 = inst_13737;
var inst_13719 = inst_13736;
var inst_13720 = inst_13738;
var inst_13721 = (0);
var state_13766__$1 = (function (){var statearr_13785 = state_13766;
(statearr_13785[(8)] = inst_13719);

(statearr_13785[(9)] = inst_13718);

(statearr_13785[(10)] = inst_13721);

(statearr_13785[(11)] = inst_13720);

return statearr_13785;
})();
var statearr_13786_13816 = state_13766__$1;
(statearr_13786_13816[(2)] = null);

(statearr_13786_13816[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (3))){
var inst_13764 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13766__$1,inst_13764);
} else {
if((state_val_13767 === (12))){
var inst_13752 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13787_13817 = state_13766__$1;
(statearr_13787_13817[(2)] = inst_13752);

(statearr_13787_13817[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (2))){
var state_13766__$1 = state_13766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13766__$1,(4),in$);
} else {
if((state_val_13767 === (23))){
var inst_13760 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13788_13818 = state_13766__$1;
(statearr_13788_13818[(2)] = inst_13760);

(statearr_13788_13818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (19))){
var inst_13747 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13789_13819 = state_13766__$1;
(statearr_13789_13819[(2)] = inst_13747);

(statearr_13789_13819[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (11))){
var inst_13718 = (state_13766[(9)]);
var inst_13732 = (state_13766[(7)]);
var inst_13732__$1 = cljs.core.seq(inst_13718);
var state_13766__$1 = (function (){var statearr_13790 = state_13766;
(statearr_13790[(7)] = inst_13732__$1);

return statearr_13790;
})();
if(inst_13732__$1){
var statearr_13791_13820 = state_13766__$1;
(statearr_13791_13820[(1)] = (14));

} else {
var statearr_13792_13821 = state_13766__$1;
(statearr_13792_13821[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (9))){
var inst_13754 = (state_13766[(2)]);
var inst_13755 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13766__$1 = (function (){var statearr_13793 = state_13766;
(statearr_13793[(15)] = inst_13754);

return statearr_13793;
})();
if(cljs.core.truth_(inst_13755)){
var statearr_13794_13822 = state_13766__$1;
(statearr_13794_13822[(1)] = (21));

} else {
var statearr_13795_13823 = state_13766__$1;
(statearr_13795_13823[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (5))){
var inst_13710 = cljs.core.async.close_BANG_(out);
var state_13766__$1 = state_13766;
var statearr_13796_13824 = state_13766__$1;
(statearr_13796_13824[(2)] = inst_13710);

(statearr_13796_13824[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (14))){
var inst_13732 = (state_13766[(7)]);
var inst_13734 = cljs.core.chunked_seq_QMARK_(inst_13732);
var state_13766__$1 = state_13766;
if(inst_13734){
var statearr_13797_13825 = state_13766__$1;
(statearr_13797_13825[(1)] = (17));

} else {
var statearr_13798_13826 = state_13766__$1;
(statearr_13798_13826[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (16))){
var inst_13750 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13799_13827 = state_13766__$1;
(statearr_13799_13827[(2)] = inst_13750);

(statearr_13799_13827[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13767 === (10))){
var inst_13719 = (state_13766[(8)]);
var inst_13721 = (state_13766[(10)]);
var inst_13726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13719,inst_13721);
var state_13766__$1 = state_13766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13766__$1,(13),out,inst_13726);
} else {
if((state_val_13767 === (18))){
var inst_13732 = (state_13766[(7)]);
var inst_13741 = cljs.core.first(inst_13732);
var state_13766__$1 = state_13766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13766__$1,(20),out,inst_13741);
} else {
if((state_val_13767 === (8))){
var inst_13721 = (state_13766[(10)]);
var inst_13720 = (state_13766[(11)]);
var inst_13723 = (inst_13721 < inst_13720);
var inst_13724 = inst_13723;
var state_13766__$1 = state_13766;
if(cljs.core.truth_(inst_13724)){
var statearr_13800_13828 = state_13766__$1;
(statearr_13800_13828[(1)] = (10));

} else {
var statearr_13801_13829 = state_13766__$1;
(statearr_13801_13829[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12146__auto__))
;
return ((function (switch__12044__auto__,c__12146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12045__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12045__auto____0 = (function (){
var statearr_13802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13802[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12045__auto__);

(statearr_13802[(1)] = (1));

return statearr_13802;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12045__auto____1 = (function (state_13766){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13766);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13803){if((e13803 instanceof Object)){
var ex__12048__auto__ = e13803;
var statearr_13804_13830 = state_13766;
(statearr_13804_13830[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13766);

return cljs.core.cst$kw$recur;
} else {
throw e13803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13831 = state_13766;
state_13766 = G__13831;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12045__auto__ = function(state_13766){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12045__auto____1.call(this,state_13766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12045__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12045__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__))
})();
var state__12148__auto__ = (function (){var statearr_13805 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13805[(6)] = c__12146__auto__);

return statearr_13805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__))
);

return c__12146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13833 = arguments.length;
switch (G__13833) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13836 = arguments.length;
switch (G__13836) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13839 = arguments.length;
switch (G__13839) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12146__auto___13886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13886,out){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13886,out){
return (function (state_13863){
var state_val_13864 = (state_13863[(1)]);
if((state_val_13864 === (7))){
var inst_13858 = (state_13863[(2)]);
var state_13863__$1 = state_13863;
var statearr_13865_13887 = state_13863__$1;
(statearr_13865_13887[(2)] = inst_13858);

(statearr_13865_13887[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (1))){
var inst_13840 = null;
var state_13863__$1 = (function (){var statearr_13866 = state_13863;
(statearr_13866[(7)] = inst_13840);

return statearr_13866;
})();
var statearr_13867_13888 = state_13863__$1;
(statearr_13867_13888[(2)] = null);

(statearr_13867_13888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (4))){
var inst_13843 = (state_13863[(8)]);
var inst_13843__$1 = (state_13863[(2)]);
var inst_13844 = (inst_13843__$1 == null);
var inst_13845 = cljs.core.not(inst_13844);
var state_13863__$1 = (function (){var statearr_13868 = state_13863;
(statearr_13868[(8)] = inst_13843__$1);

return statearr_13868;
})();
if(inst_13845){
var statearr_13869_13889 = state_13863__$1;
(statearr_13869_13889[(1)] = (5));

} else {
var statearr_13870_13890 = state_13863__$1;
(statearr_13870_13890[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (6))){
var state_13863__$1 = state_13863;
var statearr_13871_13891 = state_13863__$1;
(statearr_13871_13891[(2)] = null);

(statearr_13871_13891[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (3))){
var inst_13860 = (state_13863[(2)]);
var inst_13861 = cljs.core.async.close_BANG_(out);
var state_13863__$1 = (function (){var statearr_13872 = state_13863;
(statearr_13872[(9)] = inst_13860);

return statearr_13872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13863__$1,inst_13861);
} else {
if((state_val_13864 === (2))){
var state_13863__$1 = state_13863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13863__$1,(4),ch);
} else {
if((state_val_13864 === (11))){
var inst_13843 = (state_13863[(8)]);
var inst_13852 = (state_13863[(2)]);
var inst_13840 = inst_13843;
var state_13863__$1 = (function (){var statearr_13873 = state_13863;
(statearr_13873[(10)] = inst_13852);

(statearr_13873[(7)] = inst_13840);

return statearr_13873;
})();
var statearr_13874_13892 = state_13863__$1;
(statearr_13874_13892[(2)] = null);

(statearr_13874_13892[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (9))){
var inst_13843 = (state_13863[(8)]);
var state_13863__$1 = state_13863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13863__$1,(11),out,inst_13843);
} else {
if((state_val_13864 === (5))){
var inst_13840 = (state_13863[(7)]);
var inst_13843 = (state_13863[(8)]);
var inst_13847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13843,inst_13840);
var state_13863__$1 = state_13863;
if(inst_13847){
var statearr_13876_13893 = state_13863__$1;
(statearr_13876_13893[(1)] = (8));

} else {
var statearr_13877_13894 = state_13863__$1;
(statearr_13877_13894[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (10))){
var inst_13855 = (state_13863[(2)]);
var state_13863__$1 = state_13863;
var statearr_13878_13895 = state_13863__$1;
(statearr_13878_13895[(2)] = inst_13855);

(statearr_13878_13895[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13864 === (8))){
var inst_13840 = (state_13863[(7)]);
var tmp13875 = inst_13840;
var inst_13840__$1 = tmp13875;
var state_13863__$1 = (function (){var statearr_13879 = state_13863;
(statearr_13879[(7)] = inst_13840__$1);

return statearr_13879;
})();
var statearr_13880_13896 = state_13863__$1;
(statearr_13880_13896[(2)] = null);

(statearr_13880_13896[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
});})(c__12146__auto___13886,out))
;
return ((function (switch__12044__auto__,c__12146__auto___13886,out){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13881[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13881[(1)] = (1));

return statearr_13881;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13863){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13863);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13882){if((e13882 instanceof Object)){
var ex__12048__auto__ = e13882;
var statearr_13883_13897 = state_13863;
(statearr_13883_13897[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13863);

return cljs.core.cst$kw$recur;
} else {
throw e13882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13898 = state_13863;
state_13863 = G__13898;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13886,out))
})();
var state__12148__auto__ = (function (){var statearr_13884 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13884[(6)] = c__12146__auto___13886);

return statearr_13884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13886,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13900 = arguments.length;
switch (G__13900) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12146__auto___13966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___13966,out){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___13966,out){
return (function (state_13938){
var state_val_13939 = (state_13938[(1)]);
if((state_val_13939 === (7))){
var inst_13934 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13940_13967 = state_13938__$1;
(statearr_13940_13967[(2)] = inst_13934);

(statearr_13940_13967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (1))){
var inst_13901 = (new Array(n));
var inst_13902 = inst_13901;
var inst_13903 = (0);
var state_13938__$1 = (function (){var statearr_13941 = state_13938;
(statearr_13941[(7)] = inst_13903);

(statearr_13941[(8)] = inst_13902);

return statearr_13941;
})();
var statearr_13942_13968 = state_13938__$1;
(statearr_13942_13968[(2)] = null);

(statearr_13942_13968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (4))){
var inst_13906 = (state_13938[(9)]);
var inst_13906__$1 = (state_13938[(2)]);
var inst_13907 = (inst_13906__$1 == null);
var inst_13908 = cljs.core.not(inst_13907);
var state_13938__$1 = (function (){var statearr_13943 = state_13938;
(statearr_13943[(9)] = inst_13906__$1);

return statearr_13943;
})();
if(inst_13908){
var statearr_13944_13969 = state_13938__$1;
(statearr_13944_13969[(1)] = (5));

} else {
var statearr_13945_13970 = state_13938__$1;
(statearr_13945_13970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (15))){
var inst_13928 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13946_13971 = state_13938__$1;
(statearr_13946_13971[(2)] = inst_13928);

(statearr_13946_13971[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (13))){
var state_13938__$1 = state_13938;
var statearr_13947_13972 = state_13938__$1;
(statearr_13947_13972[(2)] = null);

(statearr_13947_13972[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (6))){
var inst_13903 = (state_13938[(7)]);
var inst_13924 = (inst_13903 > (0));
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13924)){
var statearr_13948_13973 = state_13938__$1;
(statearr_13948_13973[(1)] = (12));

} else {
var statearr_13949_13974 = state_13938__$1;
(statearr_13949_13974[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (3))){
var inst_13936 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13938__$1,inst_13936);
} else {
if((state_val_13939 === (12))){
var inst_13902 = (state_13938[(8)]);
var inst_13926 = cljs.core.vec(inst_13902);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13938__$1,(15),out,inst_13926);
} else {
if((state_val_13939 === (2))){
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13938__$1,(4),ch);
} else {
if((state_val_13939 === (11))){
var inst_13918 = (state_13938[(2)]);
var inst_13919 = (new Array(n));
var inst_13902 = inst_13919;
var inst_13903 = (0);
var state_13938__$1 = (function (){var statearr_13950 = state_13938;
(statearr_13950[(7)] = inst_13903);

(statearr_13950[(8)] = inst_13902);

(statearr_13950[(10)] = inst_13918);

return statearr_13950;
})();
var statearr_13951_13975 = state_13938__$1;
(statearr_13951_13975[(2)] = null);

(statearr_13951_13975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (9))){
var inst_13902 = (state_13938[(8)]);
var inst_13916 = cljs.core.vec(inst_13902);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13938__$1,(11),out,inst_13916);
} else {
if((state_val_13939 === (5))){
var inst_13911 = (state_13938[(11)]);
var inst_13906 = (state_13938[(9)]);
var inst_13903 = (state_13938[(7)]);
var inst_13902 = (state_13938[(8)]);
var inst_13910 = (inst_13902[inst_13903] = inst_13906);
var inst_13911__$1 = (inst_13903 + (1));
var inst_13912 = (inst_13911__$1 < n);
var state_13938__$1 = (function (){var statearr_13952 = state_13938;
(statearr_13952[(11)] = inst_13911__$1);

(statearr_13952[(12)] = inst_13910);

return statearr_13952;
})();
if(cljs.core.truth_(inst_13912)){
var statearr_13953_13976 = state_13938__$1;
(statearr_13953_13976[(1)] = (8));

} else {
var statearr_13954_13977 = state_13938__$1;
(statearr_13954_13977[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (14))){
var inst_13931 = (state_13938[(2)]);
var inst_13932 = cljs.core.async.close_BANG_(out);
var state_13938__$1 = (function (){var statearr_13956 = state_13938;
(statearr_13956[(13)] = inst_13931);

return statearr_13956;
})();
var statearr_13957_13978 = state_13938__$1;
(statearr_13957_13978[(2)] = inst_13932);

(statearr_13957_13978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (10))){
var inst_13922 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13958_13979 = state_13938__$1;
(statearr_13958_13979[(2)] = inst_13922);

(statearr_13958_13979[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (8))){
var inst_13911 = (state_13938[(11)]);
var inst_13902 = (state_13938[(8)]);
var tmp13955 = inst_13902;
var inst_13902__$1 = tmp13955;
var inst_13903 = inst_13911;
var state_13938__$1 = (function (){var statearr_13959 = state_13938;
(statearr_13959[(7)] = inst_13903);

(statearr_13959[(8)] = inst_13902__$1);

return statearr_13959;
})();
var statearr_13960_13980 = state_13938__$1;
(statearr_13960_13980[(2)] = null);

(statearr_13960_13980[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
});})(c__12146__auto___13966,out))
;
return ((function (switch__12044__auto__,c__12146__auto___13966,out){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_13961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13961[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_13961[(1)] = (1));

return statearr_13961;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_13938){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_13938);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e13962){if((e13962 instanceof Object)){
var ex__12048__auto__ = e13962;
var statearr_13963_13981 = state_13938;
(statearr_13963_13981[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13938);

return cljs.core.cst$kw$recur;
} else {
throw e13962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__13982 = state_13938;
state_13938 = G__13982;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_13938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_13938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___13966,out))
})();
var state__12148__auto__ = (function (){var statearr_13964 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_13964[(6)] = c__12146__auto___13966);

return statearr_13964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___13966,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13984 = arguments.length;
switch (G__13984) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12146__auto___14054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto___14054,out){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto___14054,out){
return (function (state_14026){
var state_val_14027 = (state_14026[(1)]);
if((state_val_14027 === (7))){
var inst_14022 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
var statearr_14028_14055 = state_14026__$1;
(statearr_14028_14055[(2)] = inst_14022);

(statearr_14028_14055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (1))){
var inst_13985 = [];
var inst_13986 = inst_13985;
var inst_13987 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_14026__$1 = (function (){var statearr_14029 = state_14026;
(statearr_14029[(7)] = inst_13986);

(statearr_14029[(8)] = inst_13987);

return statearr_14029;
})();
var statearr_14030_14056 = state_14026__$1;
(statearr_14030_14056[(2)] = null);

(statearr_14030_14056[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (4))){
var inst_13990 = (state_14026[(9)]);
var inst_13990__$1 = (state_14026[(2)]);
var inst_13991 = (inst_13990__$1 == null);
var inst_13992 = cljs.core.not(inst_13991);
var state_14026__$1 = (function (){var statearr_14031 = state_14026;
(statearr_14031[(9)] = inst_13990__$1);

return statearr_14031;
})();
if(inst_13992){
var statearr_14032_14057 = state_14026__$1;
(statearr_14032_14057[(1)] = (5));

} else {
var statearr_14033_14058 = state_14026__$1;
(statearr_14033_14058[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (15))){
var inst_14016 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
var statearr_14034_14059 = state_14026__$1;
(statearr_14034_14059[(2)] = inst_14016);

(statearr_14034_14059[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (13))){
var state_14026__$1 = state_14026;
var statearr_14035_14060 = state_14026__$1;
(statearr_14035_14060[(2)] = null);

(statearr_14035_14060[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (6))){
var inst_13986 = (state_14026[(7)]);
var inst_14011 = inst_13986.length;
var inst_14012 = (inst_14011 > (0));
var state_14026__$1 = state_14026;
if(cljs.core.truth_(inst_14012)){
var statearr_14036_14061 = state_14026__$1;
(statearr_14036_14061[(1)] = (12));

} else {
var statearr_14037_14062 = state_14026__$1;
(statearr_14037_14062[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (3))){
var inst_14024 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14026__$1,inst_14024);
} else {
if((state_val_14027 === (12))){
var inst_13986 = (state_14026[(7)]);
var inst_14014 = cljs.core.vec(inst_13986);
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14026__$1,(15),out,inst_14014);
} else {
if((state_val_14027 === (2))){
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14026__$1,(4),ch);
} else {
if((state_val_14027 === (11))){
var inst_13994 = (state_14026[(10)]);
var inst_13990 = (state_14026[(9)]);
var inst_14004 = (state_14026[(2)]);
var inst_14005 = [];
var inst_14006 = inst_14005.push(inst_13990);
var inst_13986 = inst_14005;
var inst_13987 = inst_13994;
var state_14026__$1 = (function (){var statearr_14038 = state_14026;
(statearr_14038[(11)] = inst_14004);

(statearr_14038[(7)] = inst_13986);

(statearr_14038[(8)] = inst_13987);

(statearr_14038[(12)] = inst_14006);

return statearr_14038;
})();
var statearr_14039_14063 = state_14026__$1;
(statearr_14039_14063[(2)] = null);

(statearr_14039_14063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (9))){
var inst_13986 = (state_14026[(7)]);
var inst_14002 = cljs.core.vec(inst_13986);
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14026__$1,(11),out,inst_14002);
} else {
if((state_val_14027 === (5))){
var inst_13994 = (state_14026[(10)]);
var inst_13987 = (state_14026[(8)]);
var inst_13990 = (state_14026[(9)]);
var inst_13994__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13990) : f.call(null,inst_13990));
var inst_13995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13994__$1,inst_13987);
var inst_13996 = cljs.core.keyword_identical_QMARK_(inst_13987,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_13997 = ((inst_13995) || (inst_13996));
var state_14026__$1 = (function (){var statearr_14040 = state_14026;
(statearr_14040[(10)] = inst_13994__$1);

return statearr_14040;
})();
if(cljs.core.truth_(inst_13997)){
var statearr_14041_14064 = state_14026__$1;
(statearr_14041_14064[(1)] = (8));

} else {
var statearr_14042_14065 = state_14026__$1;
(statearr_14042_14065[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (14))){
var inst_14019 = (state_14026[(2)]);
var inst_14020 = cljs.core.async.close_BANG_(out);
var state_14026__$1 = (function (){var statearr_14044 = state_14026;
(statearr_14044[(13)] = inst_14019);

return statearr_14044;
})();
var statearr_14045_14066 = state_14026__$1;
(statearr_14045_14066[(2)] = inst_14020);

(statearr_14045_14066[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (10))){
var inst_14009 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
var statearr_14046_14067 = state_14026__$1;
(statearr_14046_14067[(2)] = inst_14009);

(statearr_14046_14067[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (8))){
var inst_13994 = (state_14026[(10)]);
var inst_13986 = (state_14026[(7)]);
var inst_13990 = (state_14026[(9)]);
var inst_13999 = inst_13986.push(inst_13990);
var tmp14043 = inst_13986;
var inst_13986__$1 = tmp14043;
var inst_13987 = inst_13994;
var state_14026__$1 = (function (){var statearr_14047 = state_14026;
(statearr_14047[(7)] = inst_13986__$1);

(statearr_14047[(8)] = inst_13987);

(statearr_14047[(14)] = inst_13999);

return statearr_14047;
})();
var statearr_14048_14068 = state_14026__$1;
(statearr_14048_14068[(2)] = null);

(statearr_14048_14068[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
});})(c__12146__auto___14054,out))
;
return ((function (switch__12044__auto__,c__12146__auto___14054,out){
return (function() {
var cljs$core$async$state_machine__12045__auto__ = null;
var cljs$core$async$state_machine__12045__auto____0 = (function (){
var statearr_14049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14049[(0)] = cljs$core$async$state_machine__12045__auto__);

(statearr_14049[(1)] = (1));

return statearr_14049;
});
var cljs$core$async$state_machine__12045__auto____1 = (function (state_14026){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_14026);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e14050){if((e14050 instanceof Object)){
var ex__12048__auto__ = e14050;
var statearr_14051_14069 = state_14026;
(statearr_14051_14069[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14026);

return cljs.core.cst$kw$recur;
} else {
throw e14050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__14070 = state_14026;
state_14026 = G__14070;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
cljs$core$async$state_machine__12045__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12045__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12045__auto____0;
cljs$core$async$state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12045__auto____1;
return cljs$core$async$state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto___14054,out))
})();
var state__12148__auto__ = (function (){var statearr_14052 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_14052[(6)] = c__12146__auto___14054);

return statearr_14052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto___14054,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

