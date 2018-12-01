// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__7561 = s;
var map__7561__$1 = ((((!((map__7561 == null)))?(((((map__7561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7561):map__7561);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,cljs.core.cst$kw$info);
var d = (0);
var G__7564 = info;
var map__7565 = G__7564;
var map__7565__$1 = ((((!((map__7565 == null)))?(((((map__7565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7565):map__7565);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7565__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__7564__$1 = G__7564;
while(true){
var d__$2 = d__$1;
var map__7567 = G__7564__$1;
var map__7567__$1 = ((((!((map__7567 == null)))?(((((map__7567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7567):map__7567);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7567__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__7569 = (d__$2 + (1));
var G__7570 = shadow__$1;
d__$1 = G__7569;
G__7564__$1 = G__7570;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__7571){
var map__7572 = p__7571;
var map__7572__$1 = ((((!((map__7572 == null)))?(((((map__7572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7572):map__7572);
var name_var = map__7572__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7572__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7572__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__7574 = info;
var map__7574__$1 = ((((!((map__7574 == null)))?(((((map__7574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7574):map__7574);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7574__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7574__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__7576 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__7576) : cljs.compiler.munge.call(null,G__7576));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__7578 = arguments.length;
switch (G__7578) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__7580 = cp;
switch (G__7580) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__7582_7586 = cljs.core.seq(s);
var chunk__7583_7587 = null;
var count__7584_7588 = (0);
var i__7585_7589 = (0);
while(true){
if((i__7585_7589 < count__7584_7588)){
var c_7590 = chunk__7583_7587.cljs$core$IIndexed$_nth$arity$2(null,i__7585_7589);
sb.append(cljs.compiler.escape_char(c_7590));


var G__7591 = seq__7582_7586;
var G__7592 = chunk__7583_7587;
var G__7593 = count__7584_7588;
var G__7594 = (i__7585_7589 + (1));
seq__7582_7586 = G__7591;
chunk__7583_7587 = G__7592;
count__7584_7588 = G__7593;
i__7585_7589 = G__7594;
continue;
} else {
var temp__5457__auto___7595 = cljs.core.seq(seq__7582_7586);
if(temp__5457__auto___7595){
var seq__7582_7596__$1 = temp__5457__auto___7595;
if(cljs.core.chunked_seq_QMARK_(seq__7582_7596__$1)){
var c__4337__auto___7597 = cljs.core.chunk_first(seq__7582_7596__$1);
var G__7598 = cljs.core.chunk_rest(seq__7582_7596__$1);
var G__7599 = c__4337__auto___7597;
var G__7600 = cljs.core.count(c__4337__auto___7597);
var G__7601 = (0);
seq__7582_7586 = G__7598;
chunk__7583_7587 = G__7599;
count__7584_7588 = G__7600;
i__7585_7589 = G__7601;
continue;
} else {
var c_7602 = cljs.core.first(seq__7582_7596__$1);
sb.append(cljs.compiler.escape_char(c_7602));


var G__7603 = cljs.core.next(seq__7582_7596__$1);
var G__7604 = null;
var G__7605 = (0);
var G__7606 = (0);
seq__7582_7586 = G__7603;
chunk__7583_7587 = G__7604;
count__7584_7588 = G__7605;
i__7585_7589 = G__7606;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5785__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5785__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__7607_7612 = ast;
var map__7607_7613__$1 = ((((!((map__7607_7612 == null)))?(((((map__7607_7612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7607_7612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7607_7612):map__7607_7612);
var env_7614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7607_7613__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_7614))){
var map__7609_7615 = env_7614;
var map__7609_7616__$1 = ((((!((map__7609_7615 == null)))?(((((map__7609_7615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7609_7615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7609_7615):map__7609_7615);
var line_7617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7609_7616__$1,cljs.core.cst$kw$line);
var column_7618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7609_7616__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__7609_7615,map__7609_7616__$1,line_7617,column_7618,map__7607_7612,map__7607_7613__$1,env_7614,val__5785__auto__){
return (function (m){
var minfo = (function (){var G__7611 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7611,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__7611;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_7617 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__7609_7615,map__7609_7616__$1,line_7617,column_7618,map__7607_7612,map__7607_7613__$1,env_7614,val__5785__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_7618)?(column_7618 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__7609_7615,map__7609_7616__$1,line_7617,column_7618,map__7607_7612,map__7607_7613__$1,env_7614,val__5785__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__7609_7615,map__7609_7616__$1,line_7617,column_7618,map__7607_7612,map__7607_7613__$1,env_7614,val__5785__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__7609_7615,map__7609_7616__$1,line_7617,column_7618,map__7607_7612,map__7607_7613__$1,env_7614,val__5785__auto__))
,cljs.core.sorted_map()));
});})(map__7609_7615,map__7609_7616__$1,line_7617,column_7618,map__7607_7612,map__7607_7613__$1,env_7614,val__5785__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__5785__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4520__auto__ = [];
var len__4517__auto___7625 = arguments.length;
var i__4518__auto___7626 = (0);
while(true){
if((i__4518__auto___7626 < len__4517__auto___7625)){
args__4520__auto__.push((arguments[i__4518__auto___7626]));

var G__7627 = (i__4518__auto___7626 + (1));
i__4518__auto___7626 = G__7627;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__7621_7628 = cljs.core.seq(xs);
var chunk__7622_7629 = null;
var count__7623_7630 = (0);
var i__7624_7631 = (0);
while(true){
if((i__7624_7631 < count__7623_7630)){
var x_7632 = chunk__7622_7629.cljs$core$IIndexed$_nth$arity$2(null,i__7624_7631);
if((x_7632 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_7632)){
cljs.compiler.emit(x_7632);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_7632)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_7632);
} else {
if(goog.isFunction(x_7632)){
(x_7632.cljs$core$IFn$_invoke$arity$0 ? x_7632.cljs$core$IFn$_invoke$arity$0() : x_7632.call(null));
} else {
var s_7633 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_7632], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__7621_7628,chunk__7622_7629,count__7623_7630,i__7624_7631,s_7633,x_7632){
return (function (p1__7619_SHARP_){
return (p1__7619_SHARP_ + cljs.core.count(s_7633));
});})(seq__7621_7628,chunk__7622_7629,count__7623_7630,i__7624_7631,s_7633,x_7632))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_7633], 0));

}
}
}
}


var G__7634 = seq__7621_7628;
var G__7635 = chunk__7622_7629;
var G__7636 = count__7623_7630;
var G__7637 = (i__7624_7631 + (1));
seq__7621_7628 = G__7634;
chunk__7622_7629 = G__7635;
count__7623_7630 = G__7636;
i__7624_7631 = G__7637;
continue;
} else {
var temp__5457__auto___7638 = cljs.core.seq(seq__7621_7628);
if(temp__5457__auto___7638){
var seq__7621_7639__$1 = temp__5457__auto___7638;
if(cljs.core.chunked_seq_QMARK_(seq__7621_7639__$1)){
var c__4337__auto___7640 = cljs.core.chunk_first(seq__7621_7639__$1);
var G__7641 = cljs.core.chunk_rest(seq__7621_7639__$1);
var G__7642 = c__4337__auto___7640;
var G__7643 = cljs.core.count(c__4337__auto___7640);
var G__7644 = (0);
seq__7621_7628 = G__7641;
chunk__7622_7629 = G__7642;
count__7623_7630 = G__7643;
i__7624_7631 = G__7644;
continue;
} else {
var x_7645 = cljs.core.first(seq__7621_7639__$1);
if((x_7645 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_7645)){
cljs.compiler.emit(x_7645);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_7645)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_7645);
} else {
if(goog.isFunction(x_7645)){
(x_7645.cljs$core$IFn$_invoke$arity$0 ? x_7645.cljs$core$IFn$_invoke$arity$0() : x_7645.call(null));
} else {
var s_7646 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_7645], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__7621_7628,chunk__7622_7629,count__7623_7630,i__7624_7631,s_7646,x_7645,seq__7621_7639__$1,temp__5457__auto___7638){
return (function (p1__7619_SHARP_){
return (p1__7619_SHARP_ + cljs.core.count(s_7646));
});})(seq__7621_7628,chunk__7622_7629,count__7623_7630,i__7624_7631,s_7646,x_7645,seq__7621_7639__$1,temp__5457__auto___7638))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_7646], 0));

}
}
}
}


var G__7647 = cljs.core.next(seq__7621_7639__$1);
var G__7648 = null;
var G__7649 = (0);
var G__7650 = (0);
seq__7621_7628 = G__7647;
chunk__7622_7629 = G__7648;
count__7623_7630 = G__7649;
i__7624_7631 = G__7650;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq7620){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7620));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4520__auto__ = [];
var len__4517__auto___7656 = arguments.length;
var i__4518__auto___7657 = (0);
while(true){
if((i__4518__auto___7657 < len__4517__auto___7656)){
args__4520__auto__.push((arguments[i__4518__auto___7657]));

var G__7658 = (i__4518__auto___7657 + (1));
i__4518__auto___7657 = G__7658;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_7652_7659 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_7652_7659;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__7653){
var map__7654 = p__7653;
var map__7654__$1 = ((((!((map__7654 == null)))?(((((map__7654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7654):map__7654);
var m = map__7654__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7654__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq7651){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7651));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4448__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_7660_7662 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_7661_7663 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_7660_7662,_STAR_print_fn_STAR_7661_7663,sb__4448__auto__){
return (function (x__4449__auto__){
return sb__4448__auto__.append(x__4449__auto__);
});})(_STAR_print_newline_STAR_7660_7662,_STAR_print_fn_STAR_7661_7663,sb__4448__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7661_7663;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_7660_7662;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4448__auto__)].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant !== 'undefined')){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NaN"], 0));
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x > (0)))?"Infinity":"-Infinity")], 0));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));

}
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__7664 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__7667_7669 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__7667_7669) : cljs.compiler.emit_constant.call(null,G__7667_7669));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__7668_7670 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__7668_7670) : cljs.compiler.emit_constant.call(null,G__7668_7670));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__7671_7672 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__7671_7672) : cljs.compiler.emit_constant.call(null,G__7671_7672));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3925__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3925__auto__)){
var G__7673 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__7673) : x.call(null,G__7673));
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3925__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3925__auto__)){
var G__7674 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__7674) : x.call(null,G__7674));
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__7676){
var map__7677 = p__7676;
var map__7677__$1 = ((((!((map__7677 == null)))?(((((map__7677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7677):map__7677);
var ast = map__7677__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7677__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7677__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7677__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__7679 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__7679__$1 = ((((!((map__7679 == null)))?(((((map__7679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7679):map__7679);
var cenv = map__7679__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7679__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__3936__auto__ = js_module_name;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__7681 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3925__auto__ = (function (){var G__7683 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__7683) : cljs.compiler.es5_GT__EQ_.call(null,G__7683));
})();
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__3925__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__7681,cljs.analyzer.es5_allowed);
} else {
return G__7681;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_namespaces,(function (){var or__3936__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__7684 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__7684,reserved);
} else {
return G__7684;
}
})();
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var G__7685_7686 = cljs.core.cst$kw$module_DASH_type.cljs$core$IFn$_invoke$arity$1(js_module);
var G__7685_7687__$1 = (((G__7685_7686 instanceof cljs.core.Keyword))?G__7685_7686.fqn:null);
switch (G__7685_7687__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]"], 0));
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__3925__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info__$2], 0));
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info__$2], 0));

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__7689){
var map__7690 = p__7689;
var map__7690__$1 = ((((!((map__7690 == null)))?(((((map__7690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7690):map__7690);
var arg = map__7690__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7690__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7690__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7690__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7690__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__7692 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__7692__$1 = ((((!((map__7692 == null)))?(((((map__7692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7692):map__7692);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7692__$1,cljs.core.cst$kw$name);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__7694){
var map__7695 = p__7694;
var map__7695__$1 = ((((!((map__7695 == null)))?(((((map__7695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7695):map__7695);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7695__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7695__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7695__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_((function (p1__7697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__7697_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys))));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__7698){
var map__7699 = p__7698;
var map__7699__$1 = ((((!((map__7699 == null)))?(((((map__7699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7699):map__7699);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7699__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7699__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7699__$1,cljs.core.cst$kw$vals);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__7701){
var map__7702 = p__7701;
var map__7702__$1 = ((((!((map__7702 == null)))?(((((map__7702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7702):map__7702);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7702__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7702__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__7704){
var map__7705 = p__7704;
var map__7705__$1 = ((((!((map__7705 == null)))?(((((map__7705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7705):map__7705);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7705__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7705__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_7707 = cljs.core.count(items);
if((cnt_7707 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_7707,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_((function (p1__7708_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__7708_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items))));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__7709){
var map__7710 = p__7709;
var map__7710__$1 = ((((!((map__7710 == null)))?(((((map__7710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7710):map__7710);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7710__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7710__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__7712){
var map__7713 = p__7712;
var map__7713__$1 = ((((!((map__7713 == null)))?(((((map__7713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7713):map__7713);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7713__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7713__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7713__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___7731 = cljs.core.seq(items);
if(temp__5457__auto___7731){
var items_7732__$1 = temp__5457__auto___7731;
var vec__7715_7733 = items_7732__$1;
var seq__7716_7734 = cljs.core.seq(vec__7715_7733);
var first__7717_7735 = cljs.core.first(seq__7716_7734);
var seq__7716_7736__$1 = cljs.core.next(seq__7716_7734);
var vec__7718_7737 = first__7717_7735;
var k_7738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7718_7737,(0),null);
var v_7739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7718_7737,(1),null);
var r_7740 = seq__7716_7736__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_7738),"\": ",v_7739], 0));

var seq__7721_7741 = cljs.core.seq(r_7740);
var chunk__7722_7742 = null;
var count__7723_7743 = (0);
var i__7724_7744 = (0);
while(true){
if((i__7724_7744 < count__7723_7743)){
var vec__7725_7745 = chunk__7722_7742.cljs$core$IIndexed$_nth$arity$2(null,i__7724_7744);
var k_7746__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7725_7745,(0),null);
var v_7747__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7725_7745,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_7746__$1),"\": ",v_7747__$1], 0));


var G__7748 = seq__7721_7741;
var G__7749 = chunk__7722_7742;
var G__7750 = count__7723_7743;
var G__7751 = (i__7724_7744 + (1));
seq__7721_7741 = G__7748;
chunk__7722_7742 = G__7749;
count__7723_7743 = G__7750;
i__7724_7744 = G__7751;
continue;
} else {
var temp__5457__auto___7752__$1 = cljs.core.seq(seq__7721_7741);
if(temp__5457__auto___7752__$1){
var seq__7721_7753__$1 = temp__5457__auto___7752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7721_7753__$1)){
var c__4337__auto___7754 = cljs.core.chunk_first(seq__7721_7753__$1);
var G__7755 = cljs.core.chunk_rest(seq__7721_7753__$1);
var G__7756 = c__4337__auto___7754;
var G__7757 = cljs.core.count(c__4337__auto___7754);
var G__7758 = (0);
seq__7721_7741 = G__7755;
chunk__7722_7742 = G__7756;
count__7723_7743 = G__7757;
i__7724_7744 = G__7758;
continue;
} else {
var vec__7728_7759 = cljs.core.first(seq__7721_7753__$1);
var k_7760__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7728_7759,(0),null);
var v_7761__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7728_7759,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_7760__$1),"\": ",v_7761__$1], 0));


var G__7762 = cljs.core.next(seq__7721_7753__$1);
var G__7763 = null;
var G__7764 = (0);
var G__7765 = (0);
seq__7721_7741 = G__7762;
chunk__7722_7742 = G__7763;
count__7723_7743 = G__7764;
i__7724_7744 = G__7765;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__7766){
var map__7767 = p__7766;
var map__7767__$1 = ((((!((map__7767 == null)))?(((((map__7767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7767):map__7767);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7767__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7767__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7767__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7767__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__7769){
var map__7770 = p__7769;
var map__7770__$1 = ((((!((map__7770 == null)))?(((((map__7770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7770):map__7770);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7770__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7770__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__7772){
var map__7773 = p__7772;
var map__7773__$1 = ((((!((map__7773 == null)))?(((((map__7773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7773):map__7773);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7773__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7773__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7773__$1,cljs.core.cst$kw$const_DASH_expr);
var or__3936__auto__ = (function (){var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__3925__auto__){
var and__3925__auto____$1 = form;
if(cljs.core.truth_(and__3925__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var and__3925__auto__ = !((const_expr == null));
if(and__3925__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__3925__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__7775){
var map__7776 = p__7775;
var map__7776__$1 = ((((!((map__7776 == null)))?(((((map__7776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7776):map__7776);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7776__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7776__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7776__$1,cljs.core.cst$kw$const_DASH_expr);
var or__3936__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && (((form === false) || ((form == null)))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = !((const_expr == null));
if(and__3925__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__3925__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__3936__auto__ = (function (){var fexpr__7779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__7779.cljs$core$IFn$_invoke$arity$1 ? fexpr__7779.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__7779.call(null,tag));
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__7780){
var map__7781 = p__7780;
var map__7781__$1 = ((((!((map__7781 == null)))?(((((map__7781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7781):map__7781);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__3936__auto__ = unchecked;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__7783){
var map__7784 = p__7783;
var map__7784__$1 = ((((!((map__7784 == null)))?(((((map__7784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7784):map__7784);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7784__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7784__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7784__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7784__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7784__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__7786_7804 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__7787_7805 = null;
var count__7788_7806 = (0);
var i__7789_7807 = (0);
while(true){
if((i__7789_7807 < count__7788_7806)){
var vec__7790_7808 = chunk__7787_7805.cljs$core$IIndexed$_nth$arity$2(null,i__7789_7807);
var ts_7809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7790_7808,(0),null);
var then_7810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7790_7808,(1),null);
var seq__7793_7811 = cljs.core.seq(ts_7809);
var chunk__7794_7812 = null;
var count__7795_7813 = (0);
var i__7796_7814 = (0);
while(true){
if((i__7796_7814 < count__7795_7813)){
var test_7815 = chunk__7794_7812.cljs$core$IIndexed$_nth$arity$2(null,i__7796_7814);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_7815,":"], 0));


var G__7816 = seq__7793_7811;
var G__7817 = chunk__7794_7812;
var G__7818 = count__7795_7813;
var G__7819 = (i__7796_7814 + (1));
seq__7793_7811 = G__7816;
chunk__7794_7812 = G__7817;
count__7795_7813 = G__7818;
i__7796_7814 = G__7819;
continue;
} else {
var temp__5457__auto___7820 = cljs.core.seq(seq__7793_7811);
if(temp__5457__auto___7820){
var seq__7793_7821__$1 = temp__5457__auto___7820;
if(cljs.core.chunked_seq_QMARK_(seq__7793_7821__$1)){
var c__4337__auto___7822 = cljs.core.chunk_first(seq__7793_7821__$1);
var G__7823 = cljs.core.chunk_rest(seq__7793_7821__$1);
var G__7824 = c__4337__auto___7822;
var G__7825 = cljs.core.count(c__4337__auto___7822);
var G__7826 = (0);
seq__7793_7811 = G__7823;
chunk__7794_7812 = G__7824;
count__7795_7813 = G__7825;
i__7796_7814 = G__7826;
continue;
} else {
var test_7827 = cljs.core.first(seq__7793_7821__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_7827,":"], 0));


var G__7828 = cljs.core.next(seq__7793_7821__$1);
var G__7829 = null;
var G__7830 = (0);
var G__7831 = (0);
seq__7793_7811 = G__7828;
chunk__7794_7812 = G__7829;
count__7795_7813 = G__7830;
i__7796_7814 = G__7831;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_7810], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_7810], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));


var G__7832 = seq__7786_7804;
var G__7833 = chunk__7787_7805;
var G__7834 = count__7788_7806;
var G__7835 = (i__7789_7807 + (1));
seq__7786_7804 = G__7832;
chunk__7787_7805 = G__7833;
count__7788_7806 = G__7834;
i__7789_7807 = G__7835;
continue;
} else {
var temp__5457__auto___7836 = cljs.core.seq(seq__7786_7804);
if(temp__5457__auto___7836){
var seq__7786_7837__$1 = temp__5457__auto___7836;
if(cljs.core.chunked_seq_QMARK_(seq__7786_7837__$1)){
var c__4337__auto___7838 = cljs.core.chunk_first(seq__7786_7837__$1);
var G__7839 = cljs.core.chunk_rest(seq__7786_7837__$1);
var G__7840 = c__4337__auto___7838;
var G__7841 = cljs.core.count(c__4337__auto___7838);
var G__7842 = (0);
seq__7786_7804 = G__7839;
chunk__7787_7805 = G__7840;
count__7788_7806 = G__7841;
i__7789_7807 = G__7842;
continue;
} else {
var vec__7797_7843 = cljs.core.first(seq__7786_7837__$1);
var ts_7844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797_7843,(0),null);
var then_7845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797_7843,(1),null);
var seq__7800_7846 = cljs.core.seq(ts_7844);
var chunk__7801_7847 = null;
var count__7802_7848 = (0);
var i__7803_7849 = (0);
while(true){
if((i__7803_7849 < count__7802_7848)){
var test_7850 = chunk__7801_7847.cljs$core$IIndexed$_nth$arity$2(null,i__7803_7849);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_7850,":"], 0));


var G__7851 = seq__7800_7846;
var G__7852 = chunk__7801_7847;
var G__7853 = count__7802_7848;
var G__7854 = (i__7803_7849 + (1));
seq__7800_7846 = G__7851;
chunk__7801_7847 = G__7852;
count__7802_7848 = G__7853;
i__7803_7849 = G__7854;
continue;
} else {
var temp__5457__auto___7855__$1 = cljs.core.seq(seq__7800_7846);
if(temp__5457__auto___7855__$1){
var seq__7800_7856__$1 = temp__5457__auto___7855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7800_7856__$1)){
var c__4337__auto___7857 = cljs.core.chunk_first(seq__7800_7856__$1);
var G__7858 = cljs.core.chunk_rest(seq__7800_7856__$1);
var G__7859 = c__4337__auto___7857;
var G__7860 = cljs.core.count(c__4337__auto___7857);
var G__7861 = (0);
seq__7800_7846 = G__7858;
chunk__7801_7847 = G__7859;
count__7802_7848 = G__7860;
i__7803_7849 = G__7861;
continue;
} else {
var test_7862 = cljs.core.first(seq__7800_7856__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_7862,":"], 0));


var G__7863 = cljs.core.next(seq__7800_7856__$1);
var G__7864 = null;
var G__7865 = (0);
var G__7866 = (0);
seq__7800_7846 = G__7863;
chunk__7801_7847 = G__7864;
count__7802_7848 = G__7865;
i__7803_7849 = G__7866;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_7845], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_7845], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));


var G__7867 = cljs.core.next(seq__7786_7837__$1);
var G__7868 = null;
var G__7869 = (0);
var G__7870 = (0);
seq__7786_7804 = G__7867;
chunk__7787_7805 = G__7868;
count__7788_7806 = G__7869;
i__7789_7807 = G__7870;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__7871){
var map__7872 = p__7871;
var map__7872__$1 = ((((!((map__7872 == null)))?(((((map__7872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7872):map__7872);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7872__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7872__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7875 = env;
var G__7876 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__7875,G__7876) : cljs.compiler.resolve_type.call(null,G__7875,G__7876));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__7877 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7877,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7877,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__7877,fstr,rstr,ret_t,axstr){
return (function (p1__7874_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__7874_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__7874_SHARP_));
});})(idx,vec__7877,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__7880 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7880),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7880;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7881 = env;
var G__7882 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__7881,G__7882) : cljs.compiler.resolve_type.call(null,G__7881,G__7882));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__7883_SHARP_){
return cljs.compiler.resolve_type(env,p1__7883_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__7884 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__7885 = cljs.core.seq(vec__7884);
var first__7886 = cljs.core.first(seq__7885);
var seq__7885__$1 = cljs.core.next(seq__7885);
var p = first__7886;
var first__7886__$1 = cljs.core.first(seq__7885__$1);
var seq__7885__$2 = cljs.core.next(seq__7885__$1);
var ts = first__7886__$1;
var first__7886__$2 = cljs.core.first(seq__7885__$2);
var seq__7885__$3 = cljs.core.next(seq__7885__$2);
var n = first__7886__$2;
var xs = seq__7885__$3;
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__3925__auto__){
var and__3925__auto____$1 = ts;
if(cljs.core.truth_(and__3925__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__7887 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__7888 = cljs.core.seq(vec__7887);
var first__7889 = cljs.core.first(seq__7888);
var seq__7888__$1 = cljs.core.next(seq__7888);
var p = first__7889;
var first__7889__$1 = cljs.core.first(seq__7888__$1);
var seq__7888__$2 = cljs.core.next(seq__7888__$1);
var ts = first__7889__$1;
var xs = seq__7888__$2;
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__3925__auto__){
var and__3925__auto____$1 = ts;
if(cljs.core.truth_(and__3925__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__7891 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__7890 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__7890.cljs$core$IFn$_invoke$arity$1 ? fexpr__7890.cljs$core$IFn$_invoke$arity$1(G__7891) : fexpr__7890.call(null,G__7891));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__7894 = arguments.length;
switch (G__7894) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__7902 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__7892_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__7892_SHARP_);
} else {
return p1__7892_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__7903 = cljs.core.seq(vec__7902);
var first__7904 = cljs.core.first(seq__7903);
var seq__7903__$1 = cljs.core.next(seq__7903);
var x = first__7904;
var ys = seq__7903__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__7905 = cljs.core.seq(ys);
var chunk__7906 = null;
var count__7907 = (0);
var i__7908 = (0);
while(true){
if((i__7908 < count__7907)){
var next_line = chunk__7906.cljs$core$IIndexed$_nth$arity$2(null,i__7908);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));


var G__7914 = seq__7905;
var G__7915 = chunk__7906;
var G__7916 = count__7907;
var G__7917 = (i__7908 + (1));
seq__7905 = G__7914;
chunk__7906 = G__7915;
count__7907 = G__7916;
i__7908 = G__7917;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7905);
if(temp__5457__auto__){
var seq__7905__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7905__$1)){
var c__4337__auto__ = cljs.core.chunk_first(seq__7905__$1);
var G__7918 = cljs.core.chunk_rest(seq__7905__$1);
var G__7919 = c__4337__auto__;
var G__7920 = cljs.core.count(c__4337__auto__);
var G__7921 = (0);
seq__7905 = G__7918;
chunk__7906 = G__7919;
count__7907 = G__7920;
i__7908 = G__7921;
continue;
} else {
var next_line = cljs.core.first(seq__7905__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));


var G__7922 = cljs.core.next(seq__7905__$1);
var G__7923 = null;
var G__7924 = (0);
var G__7925 = (0);
seq__7905 = G__7922;
chunk__7906 = G__7923;
count__7907 = G__7924;
i__7908 = G__7925;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__7909_7926 = cljs.core.seq(docs__$2);
var chunk__7910_7927 = null;
var count__7911_7928 = (0);
var i__7912_7929 = (0);
while(true){
if((i__7912_7929 < count__7911_7928)){
var e_7930 = chunk__7910_7927.cljs$core$IIndexed$_nth$arity$2(null,i__7912_7929);
if(cljs.core.truth_(e_7930)){
print_comment_lines(e_7930);
} else {
}


var G__7931 = seq__7909_7926;
var G__7932 = chunk__7910_7927;
var G__7933 = count__7911_7928;
var G__7934 = (i__7912_7929 + (1));
seq__7909_7926 = G__7931;
chunk__7910_7927 = G__7932;
count__7911_7928 = G__7933;
i__7912_7929 = G__7934;
continue;
} else {
var temp__5457__auto___7935 = cljs.core.seq(seq__7909_7926);
if(temp__5457__auto___7935){
var seq__7909_7936__$1 = temp__5457__auto___7935;
if(cljs.core.chunked_seq_QMARK_(seq__7909_7936__$1)){
var c__4337__auto___7937 = cljs.core.chunk_first(seq__7909_7936__$1);
var G__7938 = cljs.core.chunk_rest(seq__7909_7936__$1);
var G__7939 = c__4337__auto___7937;
var G__7940 = cljs.core.count(c__4337__auto___7937);
var G__7941 = (0);
seq__7909_7926 = G__7938;
chunk__7910_7927 = G__7939;
count__7911_7928 = G__7940;
i__7912_7929 = G__7941;
continue;
} else {
var e_7942 = cljs.core.first(seq__7909_7936__$1);
if(cljs.core.truth_(e_7942)){
print_comment_lines(e_7942);
} else {
}


var G__7943 = cljs.core.next(seq__7909_7936__$1);
var G__7944 = null;
var G__7945 = (0);
var G__7946 = (0);
seq__7909_7926 = G__7943;
chunk__7910_7927 = G__7944;
count__7911_7928 = G__7945;
i__7912_7929 = G__7946;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__3925__auto__ = cljs.core.some(((function (opts){
return (function (p1__7948_SHARP_){
return goog.string.startsWith(p1__7948_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = opts;
if(cljs.core.truth_(and__3925__auto____$1)){
var and__3925__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__3925__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__3925__auto____$2;
}
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__7949){
var map__7950 = p__7949;
var map__7950__$1 = ((((!((map__7950 == null)))?(((((map__7950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7950):map__7950);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7950__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__3936__auto__ = init;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3925__auto__){
return test;
} else {
return and__3925__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7952){
var map__7953 = p__7952;
var map__7953__$1 = ((((!((map__7953 == null)))?(((((map__7953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7953):map__7953);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7953__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7953__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7953__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__7955_7973 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__7956_7974 = null;
var count__7957_7975 = (0);
var i__7958_7976 = (0);
while(true){
if((i__7958_7976 < count__7957_7975)){
var vec__7959_7977 = chunk__7956_7974.cljs$core$IIndexed$_nth$arity$2(null,i__7958_7976);
var i_7978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7959_7977,(0),null);
var param_7979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7959_7977,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_7979);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));


var G__7980 = seq__7955_7973;
var G__7981 = chunk__7956_7974;
var G__7982 = count__7957_7975;
var G__7983 = (i__7958_7976 + (1));
seq__7955_7973 = G__7980;
chunk__7956_7974 = G__7981;
count__7957_7975 = G__7982;
i__7958_7976 = G__7983;
continue;
} else {
var temp__5457__auto___7984 = cljs.core.seq(seq__7955_7973);
if(temp__5457__auto___7984){
var seq__7955_7985__$1 = temp__5457__auto___7984;
if(cljs.core.chunked_seq_QMARK_(seq__7955_7985__$1)){
var c__4337__auto___7986 = cljs.core.chunk_first(seq__7955_7985__$1);
var G__7987 = cljs.core.chunk_rest(seq__7955_7985__$1);
var G__7988 = c__4337__auto___7986;
var G__7989 = cljs.core.count(c__4337__auto___7986);
var G__7990 = (0);
seq__7955_7973 = G__7987;
chunk__7956_7974 = G__7988;
count__7957_7975 = G__7989;
i__7958_7976 = G__7990;
continue;
} else {
var vec__7962_7991 = cljs.core.first(seq__7955_7985__$1);
var i_7992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7962_7991,(0),null);
var param_7993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7962_7991,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_7993);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));


var G__7994 = cljs.core.next(seq__7955_7985__$1);
var G__7995 = null;
var G__7996 = (0);
var G__7997 = (0);
seq__7955_7973 = G__7994;
chunk__7956_7974 = G__7995;
count__7957_7975 = G__7996;
i__7958_7976 = G__7997;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__7965_7998 = cljs.core.seq(params);
var chunk__7966_7999 = null;
var count__7967_8000 = (0);
var i__7968_8001 = (0);
while(true){
if((i__7968_8001 < count__7967_8000)){
var param_8002 = chunk__7966_7999.cljs$core$IIndexed$_nth$arity$2(null,i__7968_8001);
cljs.compiler.emit(param_8002);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8002,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8003 = seq__7965_7998;
var G__8004 = chunk__7966_7999;
var G__8005 = count__7967_8000;
var G__8006 = (i__7968_8001 + (1));
seq__7965_7998 = G__8003;
chunk__7966_7999 = G__8004;
count__7967_8000 = G__8005;
i__7968_8001 = G__8006;
continue;
} else {
var temp__5457__auto___8007 = cljs.core.seq(seq__7965_7998);
if(temp__5457__auto___8007){
var seq__7965_8008__$1 = temp__5457__auto___8007;
if(cljs.core.chunked_seq_QMARK_(seq__7965_8008__$1)){
var c__4337__auto___8009 = cljs.core.chunk_first(seq__7965_8008__$1);
var G__8010 = cljs.core.chunk_rest(seq__7965_8008__$1);
var G__8011 = c__4337__auto___8009;
var G__8012 = cljs.core.count(c__4337__auto___8009);
var G__8013 = (0);
seq__7965_7998 = G__8010;
chunk__7966_7999 = G__8011;
count__7967_8000 = G__8012;
i__7968_8001 = G__8013;
continue;
} else {
var param_8014 = cljs.core.first(seq__7965_8008__$1);
cljs.compiler.emit(param_8014);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8014,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8015 = cljs.core.next(seq__7965_8008__$1);
var G__8016 = null;
var G__8017 = (0);
var G__8018 = (0);
seq__7965_7998 = G__8015;
chunk__7966_7999 = G__8016;
count__7967_8000 = G__8017;
i__7968_8001 = G__8018;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__7969_8019 = cljs.core.seq(params);
var chunk__7970_8020 = null;
var count__7971_8021 = (0);
var i__7972_8022 = (0);
while(true){
if((i__7972_8022 < count__7971_8021)){
var param_8023 = chunk__7970_8020.cljs$core$IIndexed$_nth$arity$2(null,i__7972_8022);
cljs.compiler.emit(param_8023);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8023,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8024 = seq__7969_8019;
var G__8025 = chunk__7970_8020;
var G__8026 = count__7971_8021;
var G__8027 = (i__7972_8022 + (1));
seq__7969_8019 = G__8024;
chunk__7970_8020 = G__8025;
count__7971_8021 = G__8026;
i__7972_8022 = G__8027;
continue;
} else {
var temp__5457__auto___8028 = cljs.core.seq(seq__7969_8019);
if(temp__5457__auto___8028){
var seq__7969_8029__$1 = temp__5457__auto___8028;
if(cljs.core.chunked_seq_QMARK_(seq__7969_8029__$1)){
var c__4337__auto___8030 = cljs.core.chunk_first(seq__7969_8029__$1);
var G__8031 = cljs.core.chunk_rest(seq__7969_8029__$1);
var G__8032 = c__4337__auto___8030;
var G__8033 = cljs.core.count(c__4337__auto___8030);
var G__8034 = (0);
seq__7969_8019 = G__8031;
chunk__7970_8020 = G__8032;
count__7971_8021 = G__8033;
i__7972_8022 = G__8034;
continue;
} else {
var param_8035 = cljs.core.first(seq__7969_8029__$1);
cljs.compiler.emit(param_8035);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8035,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8036 = cljs.core.next(seq__7969_8029__$1);
var G__8037 = null;
var G__8038 = (0);
var G__8039 = (0);
seq__7969_8019 = G__8036;
chunk__7970_8020 = G__8037;
count__7971_8021 = G__8038;
i__7972_8022 = G__8039;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__8040 = cljs.core.seq(params);
var chunk__8041 = null;
var count__8042 = (0);
var i__8043 = (0);
while(true){
if((i__8043 < count__8042)){
var param = chunk__8041.cljs$core$IIndexed$_nth$arity$2(null,i__8043);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8044 = seq__8040;
var G__8045 = chunk__8041;
var G__8046 = count__8042;
var G__8047 = (i__8043 + (1));
seq__8040 = G__8044;
chunk__8041 = G__8045;
count__8042 = G__8046;
i__8043 = G__8047;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__8040);
if(temp__5457__auto__){
var seq__8040__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8040__$1)){
var c__4337__auto__ = cljs.core.chunk_first(seq__8040__$1);
var G__8048 = cljs.core.chunk_rest(seq__8040__$1);
var G__8049 = c__4337__auto__;
var G__8050 = cljs.core.count(c__4337__auto__);
var G__8051 = (0);
seq__8040 = G__8048;
chunk__8041 = G__8049;
count__8042 = G__8050;
i__8043 = G__8051;
continue;
} else {
var param = cljs.core.first(seq__8040__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8052 = cljs.core.next(seq__8040__$1);
var G__8053 = null;
var G__8054 = (0);
var G__8055 = (0);
seq__8040 = G__8052;
chunk__8041 = G__8053;
count__8042 = G__8054;
i__8043 = G__8055;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__8056){
var map__8057 = p__8056;
var map__8057__$1 = ((((!((map__8057 == null)))?(((((map__8057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8057):map__8057);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8057__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__8059){
var map__8060 = p__8059;
var map__8060__$1 = ((((!((map__8060 == null)))?(((((map__8060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8060):map__8060);
var f = map__8060__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8060__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_8070__$1 = (function (){var or__3936__auto__ = name;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_8071 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_8070__$1);
var delegate_name_8072 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_8071),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_8072," = function ("], 0));

var seq__8062_8073 = cljs.core.seq(params);
var chunk__8063_8074 = null;
var count__8064_8075 = (0);
var i__8065_8076 = (0);
while(true){
if((i__8065_8076 < count__8064_8075)){
var param_8077 = chunk__8063_8074.cljs$core$IIndexed$_nth$arity$2(null,i__8065_8076);
cljs.compiler.emit(param_8077);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8077,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8078 = seq__8062_8073;
var G__8079 = chunk__8063_8074;
var G__8080 = count__8064_8075;
var G__8081 = (i__8065_8076 + (1));
seq__8062_8073 = G__8078;
chunk__8063_8074 = G__8079;
count__8064_8075 = G__8080;
i__8065_8076 = G__8081;
continue;
} else {
var temp__5457__auto___8082 = cljs.core.seq(seq__8062_8073);
if(temp__5457__auto___8082){
var seq__8062_8083__$1 = temp__5457__auto___8082;
if(cljs.core.chunked_seq_QMARK_(seq__8062_8083__$1)){
var c__4337__auto___8084 = cljs.core.chunk_first(seq__8062_8083__$1);
var G__8085 = cljs.core.chunk_rest(seq__8062_8083__$1);
var G__8086 = c__4337__auto___8084;
var G__8087 = cljs.core.count(c__4337__auto___8084);
var G__8088 = (0);
seq__8062_8073 = G__8085;
chunk__8063_8074 = G__8086;
count__8064_8075 = G__8087;
i__8065_8076 = G__8088;
continue;
} else {
var param_8089 = cljs.core.first(seq__8062_8083__$1);
cljs.compiler.emit(param_8089);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8089,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8090 = cljs.core.next(seq__8062_8083__$1);
var G__8091 = null;
var G__8092 = (0);
var G__8093 = (0);
seq__8062_8073 = G__8090;
chunk__8063_8074 = G__8091;
count__8064_8075 = G__8092;
i__8065_8076 = G__8093;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_8071," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_8094 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_8094,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_8072,".call(this,"], 0));

var seq__8066_8095 = cljs.core.seq(params);
var chunk__8067_8096 = null;
var count__8068_8097 = (0);
var i__8069_8098 = (0);
while(true){
if((i__8069_8098 < count__8068_8097)){
var param_8099 = chunk__8067_8096.cljs$core$IIndexed$_nth$arity$2(null,i__8069_8098);
cljs.compiler.emit(param_8099);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8099,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8100 = seq__8066_8095;
var G__8101 = chunk__8067_8096;
var G__8102 = count__8068_8097;
var G__8103 = (i__8069_8098 + (1));
seq__8066_8095 = G__8100;
chunk__8067_8096 = G__8101;
count__8068_8097 = G__8102;
i__8069_8098 = G__8103;
continue;
} else {
var temp__5457__auto___8104 = cljs.core.seq(seq__8066_8095);
if(temp__5457__auto___8104){
var seq__8066_8105__$1 = temp__5457__auto___8104;
if(cljs.core.chunked_seq_QMARK_(seq__8066_8105__$1)){
var c__4337__auto___8106 = cljs.core.chunk_first(seq__8066_8105__$1);
var G__8107 = cljs.core.chunk_rest(seq__8066_8105__$1);
var G__8108 = c__4337__auto___8106;
var G__8109 = cljs.core.count(c__4337__auto___8106);
var G__8110 = (0);
seq__8066_8095 = G__8107;
chunk__8067_8096 = G__8108;
count__8068_8097 = G__8109;
i__8069_8098 = G__8110;
continue;
} else {
var param_8111 = cljs.core.first(seq__8066_8105__$1);
cljs.compiler.emit(param_8111);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_8111,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__8112 = cljs.core.next(seq__8066_8105__$1);
var G__8113 = null;
var G__8114 = (0);
var G__8115 = (0);
seq__8066_8095 = G__8112;
chunk__8067_8096 = G__8113;
count__8068_8097 = G__8114;
i__8069_8098 = G__8115;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8071,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8071,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_8070__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8071,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_8072,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_8071,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__8119){
var map__8120 = p__8119;
var map__8120__$1 = ((((!((map__8120 == null)))?(((((map__8120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8120):map__8120);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8120__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__8116_SHARP_){
var and__3925__auto__ = p1__8116_SHARP_;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__8116_SHARP_));
} else {
return and__3925__auto__;
}
});})(map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_8155__$1 = (function (){var or__3936__auto__ = name;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_8156 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_8155__$1);
var maxparams_8157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_8158 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_8155__$1,mname_8156,maxparams_8157,loop_locals,map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_8156),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_8155__$1,mname_8156,maxparams_8157,loop_locals,map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_8159 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_8155__$1,mname_8156,maxparams_8157,mmap_8158,loop_locals,map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__8117_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__8117_SHARP_)));
});})(name_8155__$1,mname_8156,maxparams_8157,mmap_8158,loop_locals,map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_8158));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_8156," = null;"], 0));

var seq__8122_8160 = cljs.core.seq(ms_8159);
var chunk__8123_8161 = null;
var count__8124_8162 = (0);
var i__8125_8163 = (0);
while(true){
if((i__8125_8163 < count__8124_8162)){
var vec__8126_8164 = chunk__8123_8161.cljs$core$IIndexed$_nth$arity$2(null,i__8125_8163);
var n_8165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8126_8164,(0),null);
var meth_8166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8126_8164,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_8165," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_8166))){
cljs.compiler.emit_variadic_fn_method(meth_8166);
} else {
cljs.compiler.emit_fn_method(meth_8166);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));


var G__8167 = seq__8122_8160;
var G__8168 = chunk__8123_8161;
var G__8169 = count__8124_8162;
var G__8170 = (i__8125_8163 + (1));
seq__8122_8160 = G__8167;
chunk__8123_8161 = G__8168;
count__8124_8162 = G__8169;
i__8125_8163 = G__8170;
continue;
} else {
var temp__5457__auto___8171 = cljs.core.seq(seq__8122_8160);
if(temp__5457__auto___8171){
var seq__8122_8172__$1 = temp__5457__auto___8171;
if(cljs.core.chunked_seq_QMARK_(seq__8122_8172__$1)){
var c__4337__auto___8173 = cljs.core.chunk_first(seq__8122_8172__$1);
var G__8174 = cljs.core.chunk_rest(seq__8122_8172__$1);
var G__8175 = c__4337__auto___8173;
var G__8176 = cljs.core.count(c__4337__auto___8173);
var G__8177 = (0);
seq__8122_8160 = G__8174;
chunk__8123_8161 = G__8175;
count__8124_8162 = G__8176;
i__8125_8163 = G__8177;
continue;
} else {
var vec__8129_8178 = cljs.core.first(seq__8122_8172__$1);
var n_8179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129_8178,(0),null);
var meth_8180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129_8178,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_8179," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_8180))){
cljs.compiler.emit_variadic_fn_method(meth_8180);
} else {
cljs.compiler.emit_fn_method(meth_8180);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));


var G__8181 = cljs.core.next(seq__8122_8172__$1);
var G__8182 = null;
var G__8183 = (0);
var G__8184 = (0);
seq__8122_8160 = G__8181;
chunk__8123_8161 = G__8182;
count__8124_8162 = G__8183;
i__8125_8163 = G__8184;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_8157),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_8157)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_8157));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__8132_8185 = cljs.core.seq(ms_8159);
var chunk__8133_8186 = null;
var count__8134_8187 = (0);
var i__8135_8188 = (0);
while(true){
if((i__8135_8188 < count__8134_8187)){
var vec__8136_8189 = chunk__8133_8186.cljs$core$IIndexed$_nth$arity$2(null,i__8135_8188);
var n_8190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8136_8189,(0),null);
var meth_8191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8136_8189,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_8191))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_8192 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_8192," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_8193 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_8192," = new cljs.core.IndexedSeq(",a_8193,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_8190,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_8157)),(((cljs.core.count(maxparams_8157) > (1)))?", ":null),restarg_8192,");"], 0));
} else {
var pcnt_8194 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_8191));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_8194,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_8190,".call(this",(((pcnt_8194 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_8194,maxparams_8157)),null,(1),null)),(2),null))),");"], 0));
}


var G__8195 = seq__8132_8185;
var G__8196 = chunk__8133_8186;
var G__8197 = count__8134_8187;
var G__8198 = (i__8135_8188 + (1));
seq__8132_8185 = G__8195;
chunk__8133_8186 = G__8196;
count__8134_8187 = G__8197;
i__8135_8188 = G__8198;
continue;
} else {
var temp__5457__auto___8199 = cljs.core.seq(seq__8132_8185);
if(temp__5457__auto___8199){
var seq__8132_8200__$1 = temp__5457__auto___8199;
if(cljs.core.chunked_seq_QMARK_(seq__8132_8200__$1)){
var c__4337__auto___8201 = cljs.core.chunk_first(seq__8132_8200__$1);
var G__8202 = cljs.core.chunk_rest(seq__8132_8200__$1);
var G__8203 = c__4337__auto___8201;
var G__8204 = cljs.core.count(c__4337__auto___8201);
var G__8205 = (0);
seq__8132_8185 = G__8202;
chunk__8133_8186 = G__8203;
count__8134_8187 = G__8204;
i__8135_8188 = G__8205;
continue;
} else {
var vec__8139_8206 = cljs.core.first(seq__8132_8200__$1);
var n_8207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139_8206,(0),null);
var meth_8208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139_8206,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_8208))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_8209 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_8209," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_8210 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_8209," = new cljs.core.IndexedSeq(",a_8210,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_8207,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_8157)),(((cljs.core.count(maxparams_8157) > (1)))?", ":null),restarg_8209,");"], 0));
} else {
var pcnt_8211 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_8208));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_8211,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_8207,".call(this",(((pcnt_8211 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_8211,maxparams_8157)),null,(1),null)),(2),null))),");"], 0));
}


var G__8212 = cljs.core.next(seq__8132_8200__$1);
var G__8213 = null;
var G__8214 = (0);
var G__8215 = (0);
seq__8132_8185 = G__8212;
chunk__8133_8186 = G__8213;
count__8134_8187 = G__8214;
i__8135_8188 = G__8215;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

var arg_count_js_8216 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$self__,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_8159)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + ",arg_count_js_8216,"));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156,".cljs$lang$applyTo = ",cljs.core.some(((function (name_8155__$1,mname_8156,maxparams_8157,mmap_8158,ms_8159,loop_locals,map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__8118_SHARP_){
var vec__8142 = p1__8118_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_8155__$1,mname_8156,maxparams_8157,mmap_8158,ms_8159,loop_locals,map__8120,map__8120__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_8159),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__8145_8217 = cljs.core.seq(ms_8159);
var chunk__8146_8218 = null;
var count__8147_8219 = (0);
var i__8148_8220 = (0);
while(true){
if((i__8148_8220 < count__8147_8219)){
var vec__8149_8221 = chunk__8146_8218.cljs$core$IIndexed$_nth$arity$2(null,i__8148_8220);
var n_8222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8149_8221,(0),null);
var meth_8223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8149_8221,(1),null);
var c_8224 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_8223));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_8223))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156,".cljs$core$IFn$_invoke$arity$variadic = ",n_8222,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156,".cljs$core$IFn$_invoke$arity$",c_8224," = ",n_8222,";"], 0));
}


var G__8225 = seq__8145_8217;
var G__8226 = chunk__8146_8218;
var G__8227 = count__8147_8219;
var G__8228 = (i__8148_8220 + (1));
seq__8145_8217 = G__8225;
chunk__8146_8218 = G__8226;
count__8147_8219 = G__8227;
i__8148_8220 = G__8228;
continue;
} else {
var temp__5457__auto___8229 = cljs.core.seq(seq__8145_8217);
if(temp__5457__auto___8229){
var seq__8145_8230__$1 = temp__5457__auto___8229;
if(cljs.core.chunked_seq_QMARK_(seq__8145_8230__$1)){
var c__4337__auto___8231 = cljs.core.chunk_first(seq__8145_8230__$1);
var G__8232 = cljs.core.chunk_rest(seq__8145_8230__$1);
var G__8233 = c__4337__auto___8231;
var G__8234 = cljs.core.count(c__4337__auto___8231);
var G__8235 = (0);
seq__8145_8217 = G__8232;
chunk__8146_8218 = G__8233;
count__8147_8219 = G__8234;
i__8148_8220 = G__8235;
continue;
} else {
var vec__8152_8236 = cljs.core.first(seq__8145_8230__$1);
var n_8237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8152_8236,(0),null);
var meth_8238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8152_8236,(1),null);
var c_8239 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_8238));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_8238))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156,".cljs$core$IFn$_invoke$arity$variadic = ",n_8237,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_8156,".cljs$core$IFn$_invoke$arity$",c_8239," = ",n_8237,";"], 0));
}


var G__8240 = cljs.core.next(seq__8145_8230__$1);
var G__8241 = null;
var G__8242 = (0);
var G__8243 = (0);
seq__8145_8217 = G__8240;
chunk__8146_8218 = G__8241;
count__8147_8219 = G__8242;
i__8148_8220 = G__8243;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_8156,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__8244){
var map__8245 = p__8244;
var map__8245__$1 = ((((!((map__8245 == null)))?(((((map__8245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8245):map__8245);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8245__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8245__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8245__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3925__auto__ = statements;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__3925__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__8247_8251 = cljs.core.seq(statements);
var chunk__8248_8252 = null;
var count__8249_8253 = (0);
var i__8250_8254 = (0);
while(true){
if((i__8250_8254 < count__8249_8253)){
var s_8255 = chunk__8248_8252.cljs$core$IIndexed$_nth$arity$2(null,i__8250_8254);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_8255], 0));


var G__8256 = seq__8247_8251;
var G__8257 = chunk__8248_8252;
var G__8258 = count__8249_8253;
var G__8259 = (i__8250_8254 + (1));
seq__8247_8251 = G__8256;
chunk__8248_8252 = G__8257;
count__8249_8253 = G__8258;
i__8250_8254 = G__8259;
continue;
} else {
var temp__5457__auto___8260 = cljs.core.seq(seq__8247_8251);
if(temp__5457__auto___8260){
var seq__8247_8261__$1 = temp__5457__auto___8260;
if(cljs.core.chunked_seq_QMARK_(seq__8247_8261__$1)){
var c__4337__auto___8262 = cljs.core.chunk_first(seq__8247_8261__$1);
var G__8263 = cljs.core.chunk_rest(seq__8247_8261__$1);
var G__8264 = c__4337__auto___8262;
var G__8265 = cljs.core.count(c__4337__auto___8262);
var G__8266 = (0);
seq__8247_8251 = G__8263;
chunk__8248_8252 = G__8264;
count__8249_8253 = G__8265;
i__8250_8254 = G__8266;
continue;
} else {
var s_8267 = cljs.core.first(seq__8247_8261__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_8267], 0));


var G__8268 = cljs.core.next(seq__8247_8261__$1);
var G__8269 = null;
var G__8270 = (0);
var G__8271 = (0);
seq__8247_8251 = G__8268;
chunk__8248_8252 = G__8269;
count__8249_8253 = G__8270;
i__8250_8254 = G__8271;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__3925__auto__ = statements;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__3925__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__8272){
var map__8273 = p__8272;
var map__8273__$1 = ((((!((map__8273 == null)))?(((((map__8273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8273):map__8273);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8273__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8273__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8273__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8273__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8273__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3936__auto__ = name;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__8275,is_loop){
var map__8276 = p__8275;
var map__8276__$1 = ((((!((map__8276 == null)))?(((((map__8276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8276):map__8276);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8276__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8276__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8276__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_8278_8287 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_8278_8287,context,map__8276,map__8276__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_8278_8287,context,map__8276,map__8276__$1,bindings,expr,env))
,bindings):null));

try{var seq__8279_8288 = cljs.core.seq(bindings);
var chunk__8280_8289 = null;
var count__8281_8290 = (0);
var i__8282_8291 = (0);
while(true){
if((i__8282_8291 < count__8281_8290)){
var map__8283_8292 = chunk__8280_8289.cljs$core$IIndexed$_nth$arity$2(null,i__8282_8291);
var map__8283_8293__$1 = ((((!((map__8283_8292 == null)))?(((((map__8283_8292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8283_8292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8283_8292):map__8283_8292);
var binding_8294 = map__8283_8293__$1;
var init_8295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8283_8293__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_8294);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_8295,";"], 0));


var G__8296 = seq__8279_8288;
var G__8297 = chunk__8280_8289;
var G__8298 = count__8281_8290;
var G__8299 = (i__8282_8291 + (1));
seq__8279_8288 = G__8296;
chunk__8280_8289 = G__8297;
count__8281_8290 = G__8298;
i__8282_8291 = G__8299;
continue;
} else {
var temp__5457__auto___8300 = cljs.core.seq(seq__8279_8288);
if(temp__5457__auto___8300){
var seq__8279_8301__$1 = temp__5457__auto___8300;
if(cljs.core.chunked_seq_QMARK_(seq__8279_8301__$1)){
var c__4337__auto___8302 = cljs.core.chunk_first(seq__8279_8301__$1);
var G__8303 = cljs.core.chunk_rest(seq__8279_8301__$1);
var G__8304 = c__4337__auto___8302;
var G__8305 = cljs.core.count(c__4337__auto___8302);
var G__8306 = (0);
seq__8279_8288 = G__8303;
chunk__8280_8289 = G__8304;
count__8281_8290 = G__8305;
i__8282_8291 = G__8306;
continue;
} else {
var map__8285_8307 = cljs.core.first(seq__8279_8301__$1);
var map__8285_8308__$1 = ((((!((map__8285_8307 == null)))?(((((map__8285_8307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8285_8307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8285_8307):map__8285_8307);
var binding_8309 = map__8285_8308__$1;
var init_8310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8285_8308__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_8309);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_8310,";"], 0));


var G__8311 = cljs.core.next(seq__8279_8301__$1);
var G__8312 = null;
var G__8313 = (0);
var G__8314 = (0);
seq__8279_8288 = G__8311;
chunk__8280_8289 = G__8312;
count__8281_8290 = G__8313;
i__8282_8291 = G__8314;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_8278_8287;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__8315){
var map__8316 = p__8315;
var map__8316__$1 = ((((!((map__8316 == null)))?(((((map__8316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8316):map__8316);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__4394__auto___8318 = cljs.core.count(exprs);
var i_8319 = (0);
while(true){
if((i_8319 < n__4394__auto___8318)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_8319) : temps.call(null,i_8319))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_8319) : exprs.call(null,i_8319)),";"], 0));

var G__8320 = (i_8319 + (1));
i_8319 = G__8320;
continue;
} else {
}
break;
}

var n__4394__auto___8321 = cljs.core.count(exprs);
var i_8322 = (0);
while(true){
if((i_8322 < n__4394__auto___8321)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_8322) : params.call(null,i_8322)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_8322) : temps.call(null,i_8322)),";"], 0));

var G__8323 = (i_8322 + (1));
i_8322 = G__8323;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__8324){
var map__8325 = p__8324;
var map__8325__$1 = ((((!((map__8325 == null)))?(((((map__8325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8325):map__8325);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8325__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8325__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8325__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__8327_8335 = cljs.core.seq(bindings);
var chunk__8328_8336 = null;
var count__8329_8337 = (0);
var i__8330_8338 = (0);
while(true){
if((i__8330_8338 < count__8329_8337)){
var map__8331_8339 = chunk__8328_8336.cljs$core$IIndexed$_nth$arity$2(null,i__8330_8338);
var map__8331_8340__$1 = ((((!((map__8331_8339 == null)))?(((((map__8331_8339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8331_8339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8331_8339):map__8331_8339);
var binding_8341 = map__8331_8340__$1;
var init_8342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8331_8340__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_8341)," = ",init_8342,";"], 0));


var G__8343 = seq__8327_8335;
var G__8344 = chunk__8328_8336;
var G__8345 = count__8329_8337;
var G__8346 = (i__8330_8338 + (1));
seq__8327_8335 = G__8343;
chunk__8328_8336 = G__8344;
count__8329_8337 = G__8345;
i__8330_8338 = G__8346;
continue;
} else {
var temp__5457__auto___8347 = cljs.core.seq(seq__8327_8335);
if(temp__5457__auto___8347){
var seq__8327_8348__$1 = temp__5457__auto___8347;
if(cljs.core.chunked_seq_QMARK_(seq__8327_8348__$1)){
var c__4337__auto___8349 = cljs.core.chunk_first(seq__8327_8348__$1);
var G__8350 = cljs.core.chunk_rest(seq__8327_8348__$1);
var G__8351 = c__4337__auto___8349;
var G__8352 = cljs.core.count(c__4337__auto___8349);
var G__8353 = (0);
seq__8327_8335 = G__8350;
chunk__8328_8336 = G__8351;
count__8329_8337 = G__8352;
i__8330_8338 = G__8353;
continue;
} else {
var map__8333_8354 = cljs.core.first(seq__8327_8348__$1);
var map__8333_8355__$1 = ((((!((map__8333_8354 == null)))?(((((map__8333_8354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8333_8354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8333_8354):map__8333_8354);
var binding_8356 = map__8333_8355__$1;
var init_8357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8333_8355__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_8356)," = ",init_8357,";"], 0));


var G__8358 = cljs.core.next(seq__8327_8348__$1);
var G__8359 = null;
var G__8360 = (0);
var G__8361 = (0);
seq__8327_8335 = G__8358;
chunk__8328_8336 = G__8359;
count__8329_8337 = G__8360;
i__8330_8338 = G__8361;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__8364){
var map__8365 = p__8364;
var map__8365__$1 = ((((!((map__8365 == null)))?(((((map__8365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8365):map__8365);
var expr = map__8365__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8365__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8365__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8365__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3925__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__3925__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3925__auto__ = protocol;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = tag;
if(cljs.core.truth_(and__3925__auto____$1)){
var or__3936__auto__ = (function (){var and__3925__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3925__auto____$2){
var and__3925__auto____$3 = protocol;
if(cljs.core.truth_(and__3925__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__3925__auto____$3;
}
} else {
return and__3925__auto____$2;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var and__3925__auto____$2 = (function (){var or__3936__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3936__auto____$1){
return or__3936__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3925__auto____$2)){
var or__3936__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__3936__auto____$1){
return or__3936__auto____$1;
} else {
var and__3925__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__3925__auto____$3){
var and__3925__auto____$4 = cljs.core.not((function (){var fexpr__8375 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__8375.cljs$core$IFn$_invoke$arity$1 ? fexpr__8375.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__8375.call(null,tag));
})());
if(and__3925__auto____$4){
var temp__5457__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__3925__auto____$4;
}
} else {
return and__3925__auto____$3;
}
}
} else {
return and__3925__auto____$2;
}
}
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean)));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3936__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__3936__auto__){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__8367 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3925__auto__)){
return (arity > mfa);
} else {
return and__3925__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env){
return (function (p1__8362_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__8362_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env){
return (function (p1__8363_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__8363_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8365,map__8365__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8367,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8367,(1),null);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_8376 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_8376,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_8377 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_8377,args)),(((mfa_8377 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_8377,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__3936__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = js_QMARK_;
if(or__3936__auto____$1){
return or__3936__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var)))){
var fprop_8378 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_8378," ? ",f__$1,fprop_8378,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_8378," ? ",f__$1,fprop_8378,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__8379){
var map__8380 = p__8379;
var map__8380__$1 = ((((!((map__8380 == null)))?(((((map__8380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8380):map__8380);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8380__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8380__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8380__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__8382){
var map__8383 = p__8382;
var map__8383__$1 = ((((!((map__8383 == null)))?(((((map__8383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8383):map__8383);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8383__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8383__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8383__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__8385 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__8385__$1 = ((((!((map__8385 == null)))?(((((map__8385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8385):map__8385);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8385__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8385__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__8386 = options;
var map__8386__$1 = ((((!((map__8386 == null)))?(((((map__8386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8386):map__8386);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__8387 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__8392 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__8392__$1 = ((((!((map__8392 == null)))?(((((map__8392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8392):map__8392);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8392__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8392__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8387,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8387,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__8394_8410 = cljs.core.seq(libs_to_load);
var chunk__8395_8411 = null;
var count__8396_8412 = (0);
var i__8397_8413 = (0);
while(true){
if((i__8397_8413 < count__8396_8412)){
var lib_8414 = chunk__8395_8411.cljs$core$IIndexed$_nth$arity$2(null,i__8397_8413);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_8414)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none))))){
} else {
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_8414),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_8414),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_8414),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_8414),"', 'reload-all');"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_8414,cljs.core.cst$sym$goog)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_8414),"');"], 0));
}

}
}
}


var G__8415 = seq__8394_8410;
var G__8416 = chunk__8395_8411;
var G__8417 = count__8396_8412;
var G__8418 = (i__8397_8413 + (1));
seq__8394_8410 = G__8415;
chunk__8395_8411 = G__8416;
count__8396_8412 = G__8417;
i__8397_8413 = G__8418;
continue;
} else {
var temp__5457__auto___8419 = cljs.core.seq(seq__8394_8410);
if(temp__5457__auto___8419){
var seq__8394_8420__$1 = temp__5457__auto___8419;
if(cljs.core.chunked_seq_QMARK_(seq__8394_8420__$1)){
var c__4337__auto___8421 = cljs.core.chunk_first(seq__8394_8420__$1);
var G__8422 = cljs.core.chunk_rest(seq__8394_8420__$1);
var G__8423 = c__4337__auto___8421;
var G__8424 = cljs.core.count(c__4337__auto___8421);
var G__8425 = (0);
seq__8394_8410 = G__8422;
chunk__8395_8411 = G__8423;
count__8396_8412 = G__8424;
i__8397_8413 = G__8425;
continue;
} else {
var lib_8426 = cljs.core.first(seq__8394_8420__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_8426)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none))))){
} else {
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_8426),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_8426),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_8426),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_8426),"', 'reload-all');"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_8426,cljs.core.cst$sym$goog)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_8426),"');"], 0));
}

}
}
}


var G__8427 = cljs.core.next(seq__8394_8420__$1);
var G__8428 = null;
var G__8429 = (0);
var G__8430 = (0);
seq__8394_8410 = G__8427;
chunk__8395_8411 = G__8428;
count__8396_8412 = G__8429;
i__8397_8413 = G__8430;
continue;
}
} else {
}
}
break;
}

var seq__8398_8431 = cljs.core.seq(node_libs);
var chunk__8399_8432 = null;
var count__8400_8433 = (0);
var i__8401_8434 = (0);
while(true){
if((i__8401_8434 < count__8400_8433)){
var lib_8435 = chunk__8399_8432.cljs$core$IIndexed$_nth$arity$2(null,i__8401_8434);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_8435)," = require('",lib_8435,"');"], 0));


var G__8436 = seq__8398_8431;
var G__8437 = chunk__8399_8432;
var G__8438 = count__8400_8433;
var G__8439 = (i__8401_8434 + (1));
seq__8398_8431 = G__8436;
chunk__8399_8432 = G__8437;
count__8400_8433 = G__8438;
i__8401_8434 = G__8439;
continue;
} else {
var temp__5457__auto___8440 = cljs.core.seq(seq__8398_8431);
if(temp__5457__auto___8440){
var seq__8398_8441__$1 = temp__5457__auto___8440;
if(cljs.core.chunked_seq_QMARK_(seq__8398_8441__$1)){
var c__4337__auto___8442 = cljs.core.chunk_first(seq__8398_8441__$1);
var G__8443 = cljs.core.chunk_rest(seq__8398_8441__$1);
var G__8444 = c__4337__auto___8442;
var G__8445 = cljs.core.count(c__4337__auto___8442);
var G__8446 = (0);
seq__8398_8431 = G__8443;
chunk__8399_8432 = G__8444;
count__8400_8433 = G__8445;
i__8401_8434 = G__8446;
continue;
} else {
var lib_8447 = cljs.core.first(seq__8398_8441__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_8447)," = require('",lib_8447,"');"], 0));


var G__8448 = cljs.core.next(seq__8398_8441__$1);
var G__8449 = null;
var G__8450 = (0);
var G__8451 = (0);
seq__8398_8431 = G__8448;
chunk__8399_8432 = G__8449;
count__8400_8433 = G__8450;
i__8401_8434 = G__8451;
continue;
}
} else {
}
}
break;
}

var seq__8402_8452 = cljs.core.seq(global_exports_libs);
var chunk__8403_8453 = null;
var count__8404_8454 = (0);
var i__8405_8455 = (0);
while(true){
if((i__8405_8455 < count__8404_8454)){
var lib_8456 = chunk__8403_8453.cljs$core$IIndexed$_nth$arity$2(null,i__8405_8455);
var map__8406_8457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_8456));
var map__8406_8458__$1 = ((((!((map__8406_8457 == null)))?(((((map__8406_8457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8406_8457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8406_8457):map__8406_8457);
var global_exports_8459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8406_8458__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_8456)," = goog.global[\"",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_8459,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_8456)),"\"];"], 0));


var G__8460 = seq__8402_8452;
var G__8461 = chunk__8403_8453;
var G__8462 = count__8404_8454;
var G__8463 = (i__8405_8455 + (1));
seq__8402_8452 = G__8460;
chunk__8403_8453 = G__8461;
count__8404_8454 = G__8462;
i__8405_8455 = G__8463;
continue;
} else {
var temp__5457__auto___8464 = cljs.core.seq(seq__8402_8452);
if(temp__5457__auto___8464){
var seq__8402_8465__$1 = temp__5457__auto___8464;
if(cljs.core.chunked_seq_QMARK_(seq__8402_8465__$1)){
var c__4337__auto___8466 = cljs.core.chunk_first(seq__8402_8465__$1);
var G__8467 = cljs.core.chunk_rest(seq__8402_8465__$1);
var G__8468 = c__4337__auto___8466;
var G__8469 = cljs.core.count(c__4337__auto___8466);
var G__8470 = (0);
seq__8402_8452 = G__8467;
chunk__8403_8453 = G__8468;
count__8404_8454 = G__8469;
i__8405_8455 = G__8470;
continue;
} else {
var lib_8471 = cljs.core.first(seq__8402_8465__$1);
var map__8408_8472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_8471));
var map__8408_8473__$1 = ((((!((map__8408_8472 == null)))?(((((map__8408_8472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8408_8472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8408_8472):map__8408_8472);
var global_exports_8474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8408_8473__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_8471)," = goog.global[\"",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_8474,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_8471)),"\"];"], 0));


var G__8475 = cljs.core.next(seq__8402_8465__$1);
var G__8476 = null;
var G__8477 = (0);
var G__8478 = (0);
seq__8402_8452 = G__8475;
chunk__8403_8453 = G__8476;
count__8404_8454 = G__8477;
i__8405_8455 = G__8478;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__8479){
var map__8480 = p__8479;
var map__8480__$1 = ((((!((map__8480 == null)))?(((((map__8480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8480):map__8480);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8480__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__8482){
var map__8483 = p__8482;
var map__8483__$1 = ((((!((map__8483 == null)))?(((((map__8483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8483):map__8483);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8483__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__8485){
var map__8486 = p__8485;
var map__8486__$1 = ((((!((map__8486 == null)))?(((((map__8486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8486):map__8486);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8486__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8486__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8486__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8486__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8486__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__8488_8506 = cljs.core.seq(protocols);
var chunk__8489_8507 = null;
var count__8490_8508 = (0);
var i__8491_8509 = (0);
while(true){
if((i__8491_8509 < count__8490_8508)){
var protocol_8510 = chunk__8489_8507.cljs$core$IIndexed$_nth$arity$2(null,i__8491_8509);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8510)].join('')),"}"], 0));


var G__8511 = seq__8488_8506;
var G__8512 = chunk__8489_8507;
var G__8513 = count__8490_8508;
var G__8514 = (i__8491_8509 + (1));
seq__8488_8506 = G__8511;
chunk__8489_8507 = G__8512;
count__8490_8508 = G__8513;
i__8491_8509 = G__8514;
continue;
} else {
var temp__5457__auto___8515 = cljs.core.seq(seq__8488_8506);
if(temp__5457__auto___8515){
var seq__8488_8516__$1 = temp__5457__auto___8515;
if(cljs.core.chunked_seq_QMARK_(seq__8488_8516__$1)){
var c__4337__auto___8517 = cljs.core.chunk_first(seq__8488_8516__$1);
var G__8518 = cljs.core.chunk_rest(seq__8488_8516__$1);
var G__8519 = c__4337__auto___8517;
var G__8520 = cljs.core.count(c__4337__auto___8517);
var G__8521 = (0);
seq__8488_8506 = G__8518;
chunk__8489_8507 = G__8519;
count__8490_8508 = G__8520;
i__8491_8509 = G__8521;
continue;
} else {
var protocol_8522 = cljs.core.first(seq__8488_8516__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8522)].join('')),"}"], 0));


var G__8523 = cljs.core.next(seq__8488_8516__$1);
var G__8524 = null;
var G__8525 = (0);
var G__8526 = (0);
seq__8488_8506 = G__8523;
chunk__8489_8507 = G__8524;
count__8490_8508 = G__8525;
i__8491_8509 = G__8526;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__8492_8527 = cljs.core.seq(fields__$1);
var chunk__8493_8528 = null;
var count__8494_8529 = (0);
var i__8495_8530 = (0);
while(true){
if((i__8495_8530 < count__8494_8529)){
var fld_8531 = chunk__8493_8528.cljs$core$IIndexed$_nth$arity$2(null,i__8495_8530);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_8531," = ",fld_8531,";"], 0));


var G__8532 = seq__8492_8527;
var G__8533 = chunk__8493_8528;
var G__8534 = count__8494_8529;
var G__8535 = (i__8495_8530 + (1));
seq__8492_8527 = G__8532;
chunk__8493_8528 = G__8533;
count__8494_8529 = G__8534;
i__8495_8530 = G__8535;
continue;
} else {
var temp__5457__auto___8536 = cljs.core.seq(seq__8492_8527);
if(temp__5457__auto___8536){
var seq__8492_8537__$1 = temp__5457__auto___8536;
if(cljs.core.chunked_seq_QMARK_(seq__8492_8537__$1)){
var c__4337__auto___8538 = cljs.core.chunk_first(seq__8492_8537__$1);
var G__8539 = cljs.core.chunk_rest(seq__8492_8537__$1);
var G__8540 = c__4337__auto___8538;
var G__8541 = cljs.core.count(c__4337__auto___8538);
var G__8542 = (0);
seq__8492_8527 = G__8539;
chunk__8493_8528 = G__8540;
count__8494_8529 = G__8541;
i__8495_8530 = G__8542;
continue;
} else {
var fld_8543 = cljs.core.first(seq__8492_8537__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_8543," = ",fld_8543,";"], 0));


var G__8544 = cljs.core.next(seq__8492_8537__$1);
var G__8545 = null;
var G__8546 = (0);
var G__8547 = (0);
seq__8492_8527 = G__8544;
chunk__8493_8528 = G__8545;
count__8494_8529 = G__8546;
i__8495_8530 = G__8547;
continue;
}
} else {
}
}
break;
}

var seq__8496_8548 = cljs.core.seq(pmasks);
var chunk__8497_8549 = null;
var count__8498_8550 = (0);
var i__8499_8551 = (0);
while(true){
if((i__8499_8551 < count__8498_8550)){
var vec__8500_8552 = chunk__8497_8549.cljs$core$IIndexed$_nth$arity$2(null,i__8499_8551);
var pno_8553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500_8552,(0),null);
var pmask_8554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500_8552,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_8553,"$ = ",pmask_8554,";"], 0));


var G__8555 = seq__8496_8548;
var G__8556 = chunk__8497_8549;
var G__8557 = count__8498_8550;
var G__8558 = (i__8499_8551 + (1));
seq__8496_8548 = G__8555;
chunk__8497_8549 = G__8556;
count__8498_8550 = G__8557;
i__8499_8551 = G__8558;
continue;
} else {
var temp__5457__auto___8559 = cljs.core.seq(seq__8496_8548);
if(temp__5457__auto___8559){
var seq__8496_8560__$1 = temp__5457__auto___8559;
if(cljs.core.chunked_seq_QMARK_(seq__8496_8560__$1)){
var c__4337__auto___8561 = cljs.core.chunk_first(seq__8496_8560__$1);
var G__8562 = cljs.core.chunk_rest(seq__8496_8560__$1);
var G__8563 = c__4337__auto___8561;
var G__8564 = cljs.core.count(c__4337__auto___8561);
var G__8565 = (0);
seq__8496_8548 = G__8562;
chunk__8497_8549 = G__8563;
count__8498_8550 = G__8564;
i__8499_8551 = G__8565;
continue;
} else {
var vec__8503_8566 = cljs.core.first(seq__8496_8560__$1);
var pno_8567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8503_8566,(0),null);
var pmask_8568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8503_8566,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_8567,"$ = ",pmask_8568,";"], 0));


var G__8569 = cljs.core.next(seq__8496_8560__$1);
var G__8570 = null;
var G__8571 = (0);
var G__8572 = (0);
seq__8496_8548 = G__8569;
chunk__8497_8549 = G__8570;
count__8498_8550 = G__8571;
i__8499_8551 = G__8572;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__8573){
var map__8574 = p__8573;
var map__8574__$1 = ((((!((map__8574 == null)))?(((((map__8574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8574):map__8574);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8574__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8574__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8574__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8574__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8574__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__8576_8594 = cljs.core.seq(protocols);
var chunk__8577_8595 = null;
var count__8578_8596 = (0);
var i__8579_8597 = (0);
while(true){
if((i__8579_8597 < count__8578_8596)){
var protocol_8598 = chunk__8577_8595.cljs$core$IIndexed$_nth$arity$2(null,i__8579_8597);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8598)].join('')),"}"], 0));


var G__8599 = seq__8576_8594;
var G__8600 = chunk__8577_8595;
var G__8601 = count__8578_8596;
var G__8602 = (i__8579_8597 + (1));
seq__8576_8594 = G__8599;
chunk__8577_8595 = G__8600;
count__8578_8596 = G__8601;
i__8579_8597 = G__8602;
continue;
} else {
var temp__5457__auto___8603 = cljs.core.seq(seq__8576_8594);
if(temp__5457__auto___8603){
var seq__8576_8604__$1 = temp__5457__auto___8603;
if(cljs.core.chunked_seq_QMARK_(seq__8576_8604__$1)){
var c__4337__auto___8605 = cljs.core.chunk_first(seq__8576_8604__$1);
var G__8606 = cljs.core.chunk_rest(seq__8576_8604__$1);
var G__8607 = c__4337__auto___8605;
var G__8608 = cljs.core.count(c__4337__auto___8605);
var G__8609 = (0);
seq__8576_8594 = G__8606;
chunk__8577_8595 = G__8607;
count__8578_8596 = G__8608;
i__8579_8597 = G__8609;
continue;
} else {
var protocol_8610 = cljs.core.first(seq__8576_8604__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8610)].join('')),"}"], 0));


var G__8611 = cljs.core.next(seq__8576_8604__$1);
var G__8612 = null;
var G__8613 = (0);
var G__8614 = (0);
seq__8576_8594 = G__8611;
chunk__8577_8595 = G__8612;
count__8578_8596 = G__8613;
i__8579_8597 = G__8614;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__8580_8615 = cljs.core.seq(fields__$1);
var chunk__8581_8616 = null;
var count__8582_8617 = (0);
var i__8583_8618 = (0);
while(true){
if((i__8583_8618 < count__8582_8617)){
var fld_8619 = chunk__8581_8616.cljs$core$IIndexed$_nth$arity$2(null,i__8583_8618);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_8619," = ",fld_8619,";"], 0));


var G__8620 = seq__8580_8615;
var G__8621 = chunk__8581_8616;
var G__8622 = count__8582_8617;
var G__8623 = (i__8583_8618 + (1));
seq__8580_8615 = G__8620;
chunk__8581_8616 = G__8621;
count__8582_8617 = G__8622;
i__8583_8618 = G__8623;
continue;
} else {
var temp__5457__auto___8624 = cljs.core.seq(seq__8580_8615);
if(temp__5457__auto___8624){
var seq__8580_8625__$1 = temp__5457__auto___8624;
if(cljs.core.chunked_seq_QMARK_(seq__8580_8625__$1)){
var c__4337__auto___8626 = cljs.core.chunk_first(seq__8580_8625__$1);
var G__8627 = cljs.core.chunk_rest(seq__8580_8625__$1);
var G__8628 = c__4337__auto___8626;
var G__8629 = cljs.core.count(c__4337__auto___8626);
var G__8630 = (0);
seq__8580_8615 = G__8627;
chunk__8581_8616 = G__8628;
count__8582_8617 = G__8629;
i__8583_8618 = G__8630;
continue;
} else {
var fld_8631 = cljs.core.first(seq__8580_8625__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_8631," = ",fld_8631,";"], 0));


var G__8632 = cljs.core.next(seq__8580_8625__$1);
var G__8633 = null;
var G__8634 = (0);
var G__8635 = (0);
seq__8580_8615 = G__8632;
chunk__8581_8616 = G__8633;
count__8582_8617 = G__8634;
i__8583_8618 = G__8635;
continue;
}
} else {
}
}
break;
}

var seq__8584_8636 = cljs.core.seq(pmasks);
var chunk__8585_8637 = null;
var count__8586_8638 = (0);
var i__8587_8639 = (0);
while(true){
if((i__8587_8639 < count__8586_8638)){
var vec__8588_8640 = chunk__8585_8637.cljs$core$IIndexed$_nth$arity$2(null,i__8587_8639);
var pno_8641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8588_8640,(0),null);
var pmask_8642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8588_8640,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_8641,"$ = ",pmask_8642,";"], 0));


var G__8643 = seq__8584_8636;
var G__8644 = chunk__8585_8637;
var G__8645 = count__8586_8638;
var G__8646 = (i__8587_8639 + (1));
seq__8584_8636 = G__8643;
chunk__8585_8637 = G__8644;
count__8586_8638 = G__8645;
i__8587_8639 = G__8646;
continue;
} else {
var temp__5457__auto___8647 = cljs.core.seq(seq__8584_8636);
if(temp__5457__auto___8647){
var seq__8584_8648__$1 = temp__5457__auto___8647;
if(cljs.core.chunked_seq_QMARK_(seq__8584_8648__$1)){
var c__4337__auto___8649 = cljs.core.chunk_first(seq__8584_8648__$1);
var G__8650 = cljs.core.chunk_rest(seq__8584_8648__$1);
var G__8651 = c__4337__auto___8649;
var G__8652 = cljs.core.count(c__4337__auto___8649);
var G__8653 = (0);
seq__8584_8636 = G__8650;
chunk__8585_8637 = G__8651;
count__8586_8638 = G__8652;
i__8587_8639 = G__8653;
continue;
} else {
var vec__8591_8654 = cljs.core.first(seq__8584_8648__$1);
var pno_8655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8591_8654,(0),null);
var pmask_8656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8591_8654,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_8655,"$ = ",pmask_8656,";"], 0));


var G__8657 = cljs.core.next(seq__8584_8648__$1);
var G__8658 = null;
var G__8659 = (0);
var G__8660 = (0);
seq__8584_8636 = G__8657;
chunk__8585_8637 = G__8658;
count__8586_8638 = G__8659;
i__8587_8639 = G__8660;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__8661){
var map__8662 = p__8661;
var map__8662__$1 = ((((!((map__8662 == null)))?(((((map__8662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8662):map__8662);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8662__$1,cljs.core.cst$kw$env);
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__8664){
var map__8665 = p__8664;
var map__8665__$1 = ((((!((map__8665 == null)))?(((((map__8665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8665):map__8665);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8665__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8665__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8665__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8665__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8665__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__3925__auto__ = code;
if(cljs.core.truth_(and__3925__auto__)){
var G__8667 = clojure.string.trim(code);
var G__8668 = "/*";
return goog.string.startsWith(G__8667,G__8668);
} else {
return and__3925__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__7553__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__7553__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__8672 = cljs.core.seq(table);
var chunk__8673 = null;
var count__8674 = (0);
var i__8675 = (0);
while(true){
if((i__8675 < count__8674)){
var vec__8676 = chunk__8673.cljs$core$IIndexed$_nth$arity$2(null,i__8675);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8676,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8676,(1),null);
var ns_8682 = cljs.core.namespace(sym);
var name_8683 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__8684 = seq__8672;
var G__8685 = chunk__8673;
var G__8686 = count__8674;
var G__8687 = (i__8675 + (1));
seq__8672 = G__8684;
chunk__8673 = G__8685;
count__8674 = G__8686;
i__8675 = G__8687;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__8672);
if(temp__5457__auto__){
var seq__8672__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8672__$1)){
var c__4337__auto__ = cljs.core.chunk_first(seq__8672__$1);
var G__8688 = cljs.core.chunk_rest(seq__8672__$1);
var G__8689 = c__4337__auto__;
var G__8690 = cljs.core.count(c__4337__auto__);
var G__8691 = (0);
seq__8672 = G__8688;
chunk__8673 = G__8689;
count__8674 = G__8690;
i__8675 = G__8691;
continue;
} else {
var vec__8679 = cljs.core.first(seq__8672__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(1),null);
var ns_8692 = cljs.core.namespace(sym);
var name_8693 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__8694 = cljs.core.next(seq__8672__$1);
var G__8695 = null;
var G__8696 = (0);
var G__8697 = (0);
seq__8672 = G__8694;
chunk__8673 = G__8695;
count__8674 = G__8696;
i__8675 = G__8697;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__8699 = arguments.length;
switch (G__8699) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_8704 = cljs.core.first(ks);
var vec__8700_8705 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_8704);
var top_8706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700_8705,(0),null);
var prefix_SINGLEQUOTE__8707 = vec__8700_8705;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_8704)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__8707) == null)))){
if(!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_8706)) || (cljs.core.contains_QMARK_(known_externs,top_8706))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__8707)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_8706);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__8707)),";"], 0));
}
} else {
}

var m_8708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_8704);
if(cljs.core.empty_QMARK_(m_8708)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__8707,m_8708,top_level,known_externs);
}

var G__8709 = cljs.core.next(ks);
ks = G__8709;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

