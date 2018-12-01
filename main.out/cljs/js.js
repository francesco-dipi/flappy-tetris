// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___9944 = arguments.length;
var i__4518__auto___9945 = (0);
while(true){
if((i__4518__auto___9945 < len__4517__auto___9944)){
args__4520__auto__.push((arguments[i__4518__auto___9945]));

var G__9946 = (i__4518__auto___9945 + (1));
i__4518__auto___9945 = G__9946;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_9943 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9943;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq9942){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9942));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR_9947 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join('')));

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_9947;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__9948){
var map__9949 = p__9948;
var map__9949__$1 = ((((!((map__9949 == null)))?(((((map__9949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9949):map__9949);
var resource = map__9949__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9949__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__9952 = arguments.length;
switch (G__9952) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__9953 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__9953,((function (G__9953){
return (function (state){
});})(G__9953))
);

return G__9953;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__9954 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__9954,init);

return G__9954;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__9956){
var map__9957 = p__9956;
var map__9957__$1 = ((((!((map__9957 == null)))?(((((map__9957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9957):map__9957);
var opts = map__9957__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9957__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9957__$1,cljs.core.cst$kw$asset_DASH_path);
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9957__$1,cljs.core.cst$kw$source_DASH_map_DASH_timestamp);
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__9959 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__9959,".","/");
} else {
return G__9959;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__3936__auto__ = output_dir;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__9960 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__9960__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9960),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__9960);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__9960__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__9960__$1;
}
})();
var file = (function (){var G__9961 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__9961__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9961),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__9961);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__9961__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__9961__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__9962 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__9957,map__9957__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__9963){
var vec__9964 = p__9963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9964,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9964,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__9957,map__9957__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__9962);
})())].join(''));
});
cljs.js.current_alias_map = (function cljs$js$current_alias_map(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__9967){
var vec__9968 = p__9967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9968,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer._STAR_cljs_ns_STAR_,cljs.core.cst$kw$requires], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer._STAR_cljs_ns_STAR_,cljs.core.cst$kw$require_DASH_macros], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__9971 = cljs.core.first(coll);
var G__9972 = ((function (G__9971){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__9973 = proc;
var G__9974 = cljs.core.rest(coll);
var G__9975 = break_QMARK_;
var G__9976 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__9973,G__9974,G__9975,G__9976) : cljs.js.run_async_BANG_.call(null,G__9973,G__9974,G__9975,G__9976));
}
});})(G__9971))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__9971,G__9972) : proc.call(null,G__9971,G__9972));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$defs], null));
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not((function (){var fexpr__9977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core$macros,null,cljs.core.cst$sym$cljs$core,null], null), null);
return (fexpr__9977.cljs$core$IFn$_invoke$arity$1 ? fexpr__9977.cljs$core$IFn$_invoke$arity$1(name) : fexpr__9977.call(null,name));
})());
} else {
return and__3925__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__9979 = arguments.length;
switch (G__9979) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__3936__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__3936__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__9980 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__9980);
} else {
return G__9980;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null))," namespace"].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__9984 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null);
var G__9985 = ((function (G__9984,env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__9986 = resource;
var map__9986__$1 = ((((!((map__9986 == null)))?(((((map__9986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9986):map__9986);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$source_DASH_map);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$file);
var pred__9988 = cljs.core.keyword_identical_QMARK_;
var expr__9989 = lang;
if(cljs.core.truth_((function (){var G__9991 = cljs.core.cst$kw$clj;
var G__9992 = expr__9989;
return (pred__9988.cljs$core$IFn$_invoke$arity$2 ? pred__9988.cljs$core$IFn$_invoke$arity$2(G__9991,G__9992) : pred__9988.call(null,G__9991,G__9992));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),((function (pred__9988,expr__9989,map__9986,map__9986__$1,lang,source,cache,source_map,file,G__9984,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__9993 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9993) : cb.call(null,G__9993));
}
});})(pred__9988,expr__9989,map__9986,map__9986__$1,lang,source,cache,source_map,file,G__9984,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__9994 = cljs.core.cst$kw$js;
var G__9995 = expr__9989;
return (pred__9988.cljs$core$IFn$_invoke$arity$2 ? pred__9988.cljs$core$IFn$_invoke$arity$2(G__9994,G__9995) : pred__9988.call(null,G__9994,G__9995));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__9988,expr__9989,map__9986,map__9986__$1,lang,source,cache,source_map,file,G__9984,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__9988,expr__9989,map__9986,map__9986__$1,lang,source,cache,source_map,file,G__9984,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__9997_10005 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__9997_10005.cljs$core$IFn$_invoke$arity$1 ? fexpr__9997_10005.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__9997_10005.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e9996){var cause = e9996;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__9998 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9998) : cb.call(null,G__9998));
}
}
});})(pred__9988,expr__9989,map__9986,map__9986__$1,lang,source,cache,source_map,file,G__9984,env,bound_vars__$1,aname))
);
}
});})(pred__9988,expr__9989,map__9986,map__9986__$1,lang,source,cache,source_map,file,G__9984,env,bound_vars__$1,aname))
);
} else {
var G__9999 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9999) : cb.call(null,G__9999));
}
}
} else {
var G__10000 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10001 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__10002 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10001,G__10002) : cljs.analyzer.error_message.call(null,G__10001,G__10002));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10000) : cb.call(null,G__10000));
}
});})(G__9984,env,bound_vars__$1,aname))
;
var fexpr__9983 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__9983.cljs$core$IFn$_invoke$arity$2 ? fexpr__9983.cljs$core$IFn$_invoke$arity$2(G__9984,G__9985) : fexpr__9983.call(null,G__9984,G__9985));
}catch (e9981){var cause = e9981;
var G__9982 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9982) : cb.call(null,G__9982));
}} else {
var G__10003 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10003) : cb.call(null,G__10003));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__3925__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__10006){
var vec__10007 = p__10006;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(1),null);
var entry = vec__10007;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)].join(''),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(cljs.core.cst$kw$requires,true);

patch(cljs.core.cst$kw$require_DASH_macros,true);

patch(cljs.core.cst$kw$uses,false);

patch(cljs.core.cst$kw$use_DASH_macros,false);

patch_renames(cljs.core.cst$kw$renames);

return patch_renames(cljs.core.cst$kw$rename_DASH_macros);
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__3925__auto__ = cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__3925__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__3925__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__10012 = arguments.length;
switch (G__10012) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_10013 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?cljs.core.cst$sym$cljs$user:lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib__$1);
})();

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if(!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR_10013){
return (function (p1__10010_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__10010_SHARP_));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR_10013))
,deps))){
var G__10014 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10014) : cb.call(null,G__10014));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_10013){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5455__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var cljs_dep = temp__5455__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_10013){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_10013){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__10015 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10015) : cb.call(null,G__10015));
}
});})(cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_10013))
);
}
});})(cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_10013))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_10013))
);
} else {
var G__10016 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10016) : cb.call(null,G__10016));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_10013;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__10020 = arguments.length;
switch (G__10020) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR_10021 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{var compiler = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if(!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021){
return (function (p1__10018_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__10018_SHARP_));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021))
,deps))){
var G__10022 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10022) : cb.call(null,G__10022));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__10026 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null);
var G__10027 = ((function (G__10026,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5455__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var cljs_dep = temp__5455__auto__;
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5455__auto__,G__10026,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__10028 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10028) : cb.call(null,G__10028));
}
});})(cljs_dep,temp__5455__auto__,G__10026,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021))
);
} else {
var G__10029 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__10030 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__10031 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10030,G__10031) : cljs.analyzer.error_message.call(null,G__10030,G__10031));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10029) : cb.call(null,G__10029));
}
} else {
var map__10032 = resource;
var map__10032__$1 = ((((!((map__10032 == null)))?(((((map__10032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10032):map__10032);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,cljs.core.cst$kw$source);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,cljs.core.cst$kw$file);
var pred__10034 = cljs.core.keyword_identical_QMARK_;
var expr__10035 = lang;
if(cljs.core.truth_((function (){var G__10037 = cljs.core.cst$kw$clj;
var G__10038 = expr__10035;
return (pred__10034.cljs$core$IFn$_invoke$arity$2 ? pred__10034.cljs$core$IFn$_invoke$arity$2(G__10037,G__10038) : pred__10034.call(null,G__10037,G__10038));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),((function (pred__10034,expr__10035,map__10032,map__10032__$1,name,lang,source,file,G__10026,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__10034,expr__10035,map__10032,map__10032__$1,name,lang,source,file,G__10026,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021))
);
} else {
if(cljs.core.truth_((function (){var G__10039 = cljs.core.cst$kw$js;
var G__10040 = expr__10035;
return (pred__10034.cljs$core$IFn$_invoke$arity$2 ? pred__10034.cljs$core$IFn$_invoke$arity$2(G__10039,G__10040) : pred__10034.call(null,G__10039,G__10040));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__10026,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_10021))
;
var fexpr__10025 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__10025.cljs$core$IFn$_invoke$arity$2 ? fexpr__10025.cljs$core$IFn$_invoke$arity$2(G__10026,G__10027) : fexpr__10025.call(null,G__10026,G__10027));
}catch (e10023){var cause = e10023;
var G__10024 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10024) : cb.call(null,G__10024));
}} else {
var G__10041 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10041) : cb.call(null,G__10041));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_10021;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__3936__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
var or__3936__auto____$2 = (function (){var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__3925__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(or__3936__auto____$2)){
return or__3936__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
var G__10043 = bound_vars;
var G__10044 = k__$1;
var G__10045 = cljs.core.next(macros);
var G__10046 = lib;
var G__10047 = reload;
var G__10048 = reloads;
var G__10049 = opts;
var G__10050 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__10043,G__10044,G__10045,G__10046,G__10047,G__10048,G__10049,G__10050) : cljs.js.load_macros.call(null,G__10043,G__10044,G__10045,G__10046,G__10047,G__10048,G__10049,G__10050));
} else {
var temp__5455__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var cljs_dep = temp__5455__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__10051 = bound_vars;
var G__10052 = k__$1;
var G__10053 = cljs.core.next(macros);
var G__10054 = lib;
var G__10055 = reload;
var G__10056 = reloads;
var G__10057 = opts;
var G__10058 = ((function (G__10051,G__10052,G__10053,G__10054,G__10055,G__10056,G__10057,cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__10059 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10059) : cb.call(null,G__10059));
}
});})(G__10051,G__10052,G__10053,G__10054,G__10055,G__10056,G__10057,cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__10051,G__10052,G__10053,G__10054,G__10055,G__10056,G__10057,G__10058) : cljs.js.load_macros.call(null,G__10051,G__10052,G__10053,G__10054,G__10055,G__10056,G__10057,G__10058));
}
});})(cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__10060 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10060) : cb.call(null,G__10060));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__10064 = arguments.length;
switch (G__10064) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__10065 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,(2),null);
var rewrite_renames = ((function (vec__10065,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__10065,uk,rk,renk){
return (function (acc,p__10068){
var vec__10069 = p__10068;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10069,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10069,(1),null);
var entry = vec__10069;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if(!((to == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__10065,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__10065,uk,rk,renk))
;
var rewrite_deps = ((function (vec__10065,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__10065,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5455__auto__)){
var new_dep = temp__5455__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__10065,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__10065,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__10065,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__10061_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__10061_SHARP_);
});})(vec__10065,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__10065,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__10062_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__10062_SHARP_)], 0));
});})(vec__10065,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),cljs.core.cst$kw$deps,rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__10073,cenv){
var map__10074 = p__10073;
var map__10074__$1 = ((((!((map__10074 == null)))?(((((map__10074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10074):map__10074);
var ast = map__10074__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10074__$1,cljs.core.cst$kw$requires);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10074__$1,cljs.core.cst$kw$name);
var namespaces = cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__10074,map__10074__$1,ast,requires,name){
return (function (p__10076){
var vec__10077 = p__10076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10077,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10077,(1),null);
var map__10080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__10080__$1 = ((((!((map__10080 == null)))?(((((map__10080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10080):map__10080);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10080__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10080__$1,cljs.core.cst$kw$require_DASH_macros);
var or__3936__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__10074,map__10074__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__10085 = arguments.length;
switch (G__10085) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__10086,opts,cb){
var map__10087 = p__10086;
var map__10087__$1 = ((((!((map__10087 == null)))?(((((map__10087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10087):map__10087);
var ast = map__10087__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10087__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__10089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__10089.cljs$core$IFn$_invoke$arity$1 ? fexpr__10089.cljs$core$IFn$_invoke$arity$1(op) : fexpr__10089.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__10087,map__10087__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__10107 = rewritten_ast;
var map__10107__$1 = ((((!((map__10107 == null)))?(((((map__10107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10107):map__10107);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.cst$kw$reloads);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,name,reload,reloads,opts,((function (env,map__10107,map__10107__$1,uses,use_macros,reload,reloads,name,map__10087,map__10087__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__10109 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__10109__$1 = ((((!((map__10109 == null)))?(((((map__10109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10109):map__10109);
var rewritten_ast__$1 = map__10109__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10109__$1,cljs.core.cst$kw$require_DASH_macros);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,name,reload,reloads,opts,((function (map__10109,map__10109__$1,rewritten_ast__$1,require_macros,env,map__10107,map__10107__$1,uses,use_macros,reload,reloads,name,map__10087,map__10087__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__10111 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__10111__$1 = ((((!((map__10111 == null)))?(((((map__10111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10111):map__10111);
var rewritten_ast__$2 = map__10111__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10111__$1,cljs.core.cst$kw$use_DASH_macros);
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR_10114_10128 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_10115_10129 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10115_10129;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_10114_10128;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e10113){var cause = e10113;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR_10118 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_10119 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__10120 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10120) : cb.call(null,G__10120));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10119;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_10118;
}}catch (e10116){var cause = e10116;
var G__10117 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10117) : cb.call(null,G__10117));
}}
}
});})(map__10109,map__10109__$1,rewritten_ast__$1,require_macros,env,map__10107,map__10107__$1,uses,use_macros,reload,reloads,name,map__10087,map__10087__$1,ast,op))
);
}
});})(env,map__10107,map__10107__$1,uses,use_macros,reload,reloads,name,map__10087,map__10087__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.seq(uses);
} else {
return and__3925__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__10123 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10123) : cb.call(null,G__10123));
}catch (e10121){var cause = e10121;
var G__10122 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10122) : cb.call(null,G__10122));
}}
}
});})(map__10087,map__10087__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__3925__auto__ = load;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__3925__auto__;
}
})())){
var map__10124 = ast;
var map__10124__$1 = ((((!((map__10124 == null)))?(((((map__10124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10124):map__10124);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,cljs.core.cst$kw$reload);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,cljs.core.cst$kw$name);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10124__$1,cljs.core.cst$kw$deps);
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__3936__auto__ = cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__10124,map__10124__$1,reload,name,deps,map__10087,map__10087__$1,ast,op){
return (function (p1__10082_SHARP_){
return check_uses_and_load_macros(p1__10082_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__10082_SHARP_)));
});})(map__10124,map__10124__$1,reload,name,deps,map__10087,map__10087__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not(load);
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__3925__auto____$1)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__10087,map__10087__$1,ast,op){
return (function (p1__10083_SHARP_){
return check_uses_and_load_macros(p1__10083_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__10083_SHARP_)));
});})(map__10087,map__10087__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),ast);

}
}
} else {
var G__10126 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10126) : cb.call(null,G__10126));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__10130_10138 = cljs.core.seq(deps);
var chunk__10131_10139 = null;
var count__10132_10140 = (0);
var i__10133_10141 = (0);
while(true){
if((i__10133_10141 < count__10132_10140)){
var dep_10142 = chunk__10131_10139.cljs$core$IIndexed$_nth$arity$2(null,i__10133_10141);
sb.append((function (){var sb__4448__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10134_10143 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10135_10144 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__10130_10138,chunk__10131_10139,count__10132_10140,i__10133_10141,_STAR_print_newline_STAR_10134_10143,_STAR_print_fn_STAR_10135_10144,sb__4448__auto__,dep_10142){
return (function (x__4449__auto__){
return sb__4448__auto__.append(x__4449__auto__);
});})(seq__10130_10138,chunk__10131_10139,count__10132_10140,i__10133_10141,_STAR_print_newline_STAR_10134_10143,_STAR_print_fn_STAR_10135_10144,sb__4448__auto__,dep_10142))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_10142)," = require('",dep_10142,"');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10135_10144;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10134_10143;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4448__auto__)].join('');
})());


var G__10145 = seq__10130_10138;
var G__10146 = chunk__10131_10139;
var G__10147 = count__10132_10140;
var G__10148 = (i__10133_10141 + (1));
seq__10130_10138 = G__10145;
chunk__10131_10139 = G__10146;
count__10132_10140 = G__10147;
i__10133_10141 = G__10148;
continue;
} else {
var temp__5457__auto___10149 = cljs.core.seq(seq__10130_10138);
if(temp__5457__auto___10149){
var seq__10130_10150__$1 = temp__5457__auto___10149;
if(cljs.core.chunked_seq_QMARK_(seq__10130_10150__$1)){
var c__4337__auto___10151 = cljs.core.chunk_first(seq__10130_10150__$1);
var G__10152 = cljs.core.chunk_rest(seq__10130_10150__$1);
var G__10153 = c__4337__auto___10151;
var G__10154 = cljs.core.count(c__4337__auto___10151);
var G__10155 = (0);
seq__10130_10138 = G__10152;
chunk__10131_10139 = G__10153;
count__10132_10140 = G__10154;
i__10133_10141 = G__10155;
continue;
} else {
var dep_10156 = cljs.core.first(seq__10130_10150__$1);
sb.append((function (){var sb__4448__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10136_10157 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10137_10158 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__10130_10138,chunk__10131_10139,count__10132_10140,i__10133_10141,_STAR_print_newline_STAR_10136_10157,_STAR_print_fn_STAR_10137_10158,sb__4448__auto__,dep_10156,seq__10130_10150__$1,temp__5457__auto___10149){
return (function (x__4449__auto__){
return sb__4448__auto__.append(x__4449__auto__);
});})(seq__10130_10138,chunk__10131_10139,count__10132_10140,i__10133_10141,_STAR_print_newline_STAR_10136_10157,_STAR_print_fn_STAR_10137_10158,sb__4448__auto__,dep_10156,seq__10130_10150__$1,temp__5457__auto___10149))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_10156)," = require('",dep_10156,"');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10137_10158;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10136_10157;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4448__auto__)].join('');
})());


var G__10159 = cljs.core.next(seq__10130_10150__$1);
var G__10160 = null;
var G__10161 = (0);
var G__10162 = (0);
seq__10130_10138 = G__10159;
chunk__10131_10139 = G__10160;
count__10132_10140 = G__10161;
i__10133_10141 = G__10162;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.seq(deps);
if(and__3925__auto__){
return emit_nil_result_QMARK_;
} else {
return and__3925__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__10163 = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__10163__$1 = ((((!((map__10163 == null)))?(((((map__10163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10163):map__10163);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10163__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var seq__10165_10177 = cljs.core.seq(deps);
var chunk__10166_10178 = null;
var count__10167_10179 = (0);
var i__10168_10180 = (0);
while(true){
if((i__10168_10180 < count__10167_10179)){
var dep_10181 = chunk__10166_10178.cljs$core$IIndexed$_nth$arity$2(null,i__10168_10180);
var map__10169_10182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_10181));
var map__10169_10183__$1 = ((((!((map__10169_10182 == null)))?(((((map__10169_10182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10169_10182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10169_10182):map__10169_10182);
var global_exports_10184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10169_10183__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4448__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10171_10185 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10172_10186 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__10165_10177,chunk__10166_10178,count__10167_10179,i__10168_10180,_STAR_print_newline_STAR_10171_10185,_STAR_print_fn_STAR_10172_10186,sb__4448__auto__,map__10169_10182,map__10169_10183__$1,global_exports_10184,dep_10181,map__10163,map__10163__$1,js_dependency_index){
return (function (x__4449__auto__){
return sb__4448__auto__.append(x__4449__auto__);
});})(seq__10165_10177,chunk__10166_10178,count__10167_10179,i__10168_10180,_STAR_print_newline_STAR_10171_10185,_STAR_print_fn_STAR_10172_10186,sb__4448__auto__,map__10169_10182,map__10169_10183__$1,global_exports_10184,dep_10181,map__10163,map__10163__$1,js_dependency_index))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_global_export(dep_10181)," = goog.global[\"",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_10184,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep_10181)),"\"];"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10172_10186;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10171_10185;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4448__auto__)].join('');
})());


var G__10187 = seq__10165_10177;
var G__10188 = chunk__10166_10178;
var G__10189 = count__10167_10179;
var G__10190 = (i__10168_10180 + (1));
seq__10165_10177 = G__10187;
chunk__10166_10178 = G__10188;
count__10167_10179 = G__10189;
i__10168_10180 = G__10190;
continue;
} else {
var temp__5457__auto___10191 = cljs.core.seq(seq__10165_10177);
if(temp__5457__auto___10191){
var seq__10165_10192__$1 = temp__5457__auto___10191;
if(cljs.core.chunked_seq_QMARK_(seq__10165_10192__$1)){
var c__4337__auto___10193 = cljs.core.chunk_first(seq__10165_10192__$1);
var G__10194 = cljs.core.chunk_rest(seq__10165_10192__$1);
var G__10195 = c__4337__auto___10193;
var G__10196 = cljs.core.count(c__4337__auto___10193);
var G__10197 = (0);
seq__10165_10177 = G__10194;
chunk__10166_10178 = G__10195;
count__10167_10179 = G__10196;
i__10168_10180 = G__10197;
continue;
} else {
var dep_10198 = cljs.core.first(seq__10165_10192__$1);
var map__10173_10199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_10198));
var map__10173_10200__$1 = ((((!((map__10173_10199 == null)))?(((((map__10173_10199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10173_10199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10173_10199):map__10173_10199);
var global_exports_10201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10173_10200__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4448__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10175_10202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10176_10203 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__10165_10177,chunk__10166_10178,count__10167_10179,i__10168_10180,_STAR_print_newline_STAR_10175_10202,_STAR_print_fn_STAR_10176_10203,sb__4448__auto__,map__10173_10199,map__10173_10200__$1,global_exports_10201,dep_10198,seq__10165_10192__$1,temp__5457__auto___10191,map__10163,map__10163__$1,js_dependency_index){
return (function (x__4449__auto__){
return sb__4448__auto__.append(x__4449__auto__);
});})(seq__10165_10177,chunk__10166_10178,count__10167_10179,i__10168_10180,_STAR_print_newline_STAR_10175_10202,_STAR_print_fn_STAR_10176_10203,sb__4448__auto__,map__10173_10199,map__10173_10200__$1,global_exports_10201,dep_10198,seq__10165_10192__$1,temp__5457__auto___10191,map__10163,map__10163__$1,js_dependency_index))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_global_export(dep_10198)," = goog.global[\"",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_10201,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep_10198)),"\"];"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10176_10203;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10175_10202;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4448__auto__)].join('');
})());


var G__10204 = cljs.core.next(seq__10165_10192__$1);
var G__10205 = null;
var G__10206 = (0);
var G__10207 = (0);
seq__10165_10177 = G__10204;
chunk__10166_10178 = G__10205;
count__10167_10179 = G__10206;
i__10168_10180 = G__10207;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.seq(deps);
if(and__3925__auto__){
return emit_nil_result_QMARK_;
} else {
return and__3925__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__3936__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__10210 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10210,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__10210;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR_10211 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_10212 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_10213 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_10214 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_10215 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_10216 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_10217 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR_10218 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_10219 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol10220 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_10221 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_10222 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__3925__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__3925__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e10223){var cause = e10223;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__10224 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__10224__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10224,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__10224);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10224__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__10224__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e10225){var cause = e10225;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
