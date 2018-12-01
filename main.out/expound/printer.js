// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('expound.printer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('expound.util');
expound.printer.indent_level = (2);
expound.printer.max_spec_str_width = (100);
expound.printer.anon_fn_str = "<anonymous function>";
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_spec_DASH_conjunction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or)]),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$specs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$and,null,cljs.core.cst$sym$or,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$and),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$or)]),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$conj,cljs.core.cst$kw$spec_SLASH_spec_DASH_conjunction),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kw,cljs.core.cst$kw$conj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$spec_SLASH_spec_DASH_conjunction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$spec_SLASH_spec_DASH_conjunction], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_key_DASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$keys,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys)]),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keys,cljs.core.cst$kw$clauses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,null], null), null),cljs.spec.alpha.rep_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$qualifier,cljs.core.cst$kw$specs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17076){
return cljs.core.coll_QMARK_(G__17076);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys)]),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_kw_DASH_or_DASH_conjunction)))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$simple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$contains,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_)]),cljs.core.cst$kw$arg,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_)]),cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$compound,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or)]),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple,cljs.core.cst$kw$compound], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$contains,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_)]),cljs.core.cst$kw$arg,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_)]),cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or)]),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contains,cljs.core.cst$kw$arg,cljs.core.cst$kw$kw], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$contains_QMARK_,null,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_PERCENT_,null], null), null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$contains_QMARK_),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_)]),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_)]),cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$clauses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_and,null,cljs.core.cst$sym$cljs$core_SLASH_or,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or)]),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred)], null))], null),null));
expound.printer.keywords = (function expound$printer$keywords(form){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,form));
});
expound.printer.singleton_QMARK_ = (function expound$printer$singleton_QMARK_(xs){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs));
});
expound.printer.specs_from_form = (function expound$printer$specs_from_form(via){
var form = (function (){var G__17077 = via;
var G__17077__$1 = (((G__17077 == null))?null:cljs.core.last(G__17077));
if((G__17077__$1 == null)){
return null;
} else {
return cljs.spec.alpha.form(G__17077__$1);
}
})();
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$spec_SLASH_key_DASH_spec,form);
if(cljs.core.truth_((function (){var and__3925__auto__ = form;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,conformed);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (form,conformed){
return (function (x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$kw,cljs.core.first(x))));
});})(form,conformed))
,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$specs,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(conformed))))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
expound.printer.key__GT_spec = (function expound$printer$key__GT_spec(keys,problems){
var seq__17079_17083 = cljs.core.seq(problems);
var chunk__17080_17084 = null;
var count__17081_17085 = (0);
var i__17082_17086 = (0);
while(true){
if((i__17082_17086 < count__17081_17085)){
var p_17087 = chunk__17080_17084.cljs$core$IIndexed$_nth$arity$2(null,i__17082_17086);
if(!((cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(p_17087) == null))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),"\n","(some? (:expound/via p))"].join('')));
}


var G__17088 = seq__17079_17083;
var G__17089 = chunk__17080_17084;
var G__17090 = count__17081_17085;
var G__17091 = (i__17082_17086 + (1));
seq__17079_17083 = G__17088;
chunk__17080_17084 = G__17089;
count__17081_17085 = G__17090;
i__17082_17086 = G__17091;
continue;
} else {
var temp__5457__auto___17092 = cljs.core.seq(seq__17079_17083);
if(temp__5457__auto___17092){
var seq__17079_17093__$1 = temp__5457__auto___17092;
if(cljs.core.chunked_seq_QMARK_(seq__17079_17093__$1)){
var c__4337__auto___17094 = cljs.core.chunk_first(seq__17079_17093__$1);
var G__17095 = cljs.core.chunk_rest(seq__17079_17093__$1);
var G__17096 = c__4337__auto___17094;
var G__17097 = cljs.core.count(c__4337__auto___17094);
var G__17098 = (0);
seq__17079_17083 = G__17095;
chunk__17080_17084 = G__17096;
count__17081_17085 = G__17097;
i__17082_17086 = G__17098;
continue;
} else {
var p_17099 = cljs.core.first(seq__17079_17093__$1);
if(!((cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(p_17099) == null))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),"\n","(some? (:expound/via p))"].join('')));
}


var G__17100 = cljs.core.next(seq__17079_17093__$1);
var G__17101 = null;
var G__17102 = (0);
var G__17103 = (0);
seq__17079_17083 = G__17100;
chunk__17080_17084 = G__17101;
count__17081_17085 = G__17102;
i__17082_17086 = G__17103;
continue;
}
} else {
}
}
break;
}

var vias = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_via,problems);
var specs = ((cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys))?keys:(function (){var temp__5455__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.specs_from_form,vias));
if(cljs.core.truth_(temp__5455__auto__)){
var specs = temp__5455__auto__;
return specs;
} else {
return keys;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,vias){
return (function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.qualified_keyword_QMARK_(k))?k:cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (specs,vias){
return (function (p1__17078_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),cljs.core.name(p1__17078_SHARP_));
});})(specs,vias))
,specs))));
});})(specs,vias))
,cljs.core.PersistentArrayMap.EMPTY,keys);
});
expound.printer.expand_spec = (function expound$printer$expand_spec(spec){
var _BANG_seen_specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return clojure.walk.prewalk(((function (_BANG_seen_specs){
return (function (x){
if(!(cljs.core.qualified_keyword_QMARK_(x))){
return x;
} else {
var temp__5455__auto__ = cljs.spec.alpha.get_spec(x);
if(cljs.core.truth_(temp__5455__auto__)){
var sp = temp__5455__auto__;
if(!(cljs.core.contains_QMARK_(cljs.core.deref(_BANG_seen_specs),x))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_seen_specs,cljs.core.conj,x);

return cljs.spec.alpha.form(sp);
} else {
return x;
}
} else {
return x;
}
}
});})(_BANG_seen_specs))
,(cljs.core.truth_(cljs.spec.alpha.get_spec(spec))?cljs.spec.alpha.form(spec):spec));
});
expound.printer.summarize_key_clause = (function expound$printer$summarize_key_clause(p__17104){
var vec__17105 = p__17104;
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17105,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17105,(1),null);
var G__17108 = branch;
var G__17108__$1 = (((G__17108 instanceof cljs.core.Keyword))?G__17108.fqn:null);
switch (G__17108__$1) {
case "simple":
return cljs.core.cst$kw$kw.cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(match))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.summarize_key_clause,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(match)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17108__$1)].join('')));

}
});
expound.printer.missing_key = (function expound$printer$missing_key(form){
var vec__17110 = cljs.spec.alpha.conform(cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)));
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17110,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17110,(1),null);
var G__17113 = branch;
var G__17113__$1 = (((G__17113 instanceof cljs.core.Keyword))?G__17113.fqn:null);
switch (G__17113__$1) {
case "simple":
return cljs.core.cst$kw$kw.cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return expound.printer.summarize_key_clause(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch,match], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17113__$1)].join('')));

}
});
expound.printer.elide_core_ns = (function expound$printer$elide_core_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.core/",""),"cljs/core/","");
});
expound.printer.elide_spec_ns = (function expound$printer$elide_spec_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.spec.alpha/",""),"cljs/spec/alpha","");
});
expound.printer.pprint_fn = (function expound$printer$pprint_fn(f){
return clojure.string.replace(clojure.string.replace(expound.printer.elide_core_ns((function (){var fn_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.re_find(/object\[([^\( \]]+).*(\n|\])?/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))),/\$/);
var ns_n = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(fn_parts));
var fn_n = cljs.core.last(fn_parts);
if(cljs.core.empty_QMARK_(ns_n)){
return expound.printer.anon_fn_str;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge_str(ns_n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge_str(fn_n))].join('');
}
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.printer.format = (function expound$printer$format(var_args){
var args__4520__auto__ = [];
var len__4517__auto___17117 = arguments.length;
var i__4518__auto___17118 = (0);
while(true){
if((i__4518__auto___17118 < len__4517__auto___17117)){
args__4520__auto__.push((arguments[i__4518__auto___17118]));

var G__17119 = (i__4518__auto___17118 + (1));
i__4518__auto___17118 = G__17119;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

expound.printer.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

expound.printer.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
expound.printer.format.cljs$lang$applyTo = (function (seq17115){
var G__17116 = cljs.core.first(seq17115);
var seq17115__$1 = cljs.core.next(seq17115);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17116,seq17115__$1);
});

cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_pprint_DASH_str,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Returns the pretty-printed string
 */
expound.printer.pprint_str = (function expound$printer$pprint_str(x){
if(cljs.core.fn_QMARK_(x)){
return expound.printer.pprint_fn(x);
} else {
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$stream,null], 0));
}
});
expound.printer.simple_spec_or_name = (function expound$printer$simple_spec_or_name(spec_name){
var spec_str = expound.printer.elide_spec_ns(expound.printer.elide_core_ns(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.expand_spec(spec_name)], 0))));
if((((expound.printer.max_spec_str_width < cljs.core.count(spec_str))) || (clojure.string.includes_QMARK_(spec_str,"\n")))){
return spec_name;
} else {
return spec_str;
}
});
expound.printer.print_spec_keys = (function expound$printer$print_spec_keys(problems){
var keys = expound.printer.keywords(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17120_SHARP_){
return expound.printer.missing_key(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__17120_SHARP_));
}),problems));
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.empty_QMARK_(cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems)));
if(and__3925__auto__){
return cljs.core.some(cljs.core.simple_keyword_QMARK_,keys);
} else {
return and__3925__auto__;
}
})())){
return null;
} else {
return clojure.string.trim((function (){var sb__4448__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17122_17128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17123_17129 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17122_17128,_STAR_print_fn_STAR_17123_17129,sb__4448__auto__,keys){
return (function (x__4449__auto__){
return sb__4448__auto__.append(x__4449__auto__);
});})(_STAR_print_newline_STAR_17122_17128,_STAR_print_fn_STAR_17123_17129,sb__4448__auto__,keys))
;

try{cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","spec"], null),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_17122_17128,_STAR_print_fn_STAR_17123_17129,sb__4448__auto__,keys){
return (function (p1__17121_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__17121_SHARP_,"key");
});})(_STAR_print_newline_STAR_17122_17128,_STAR_print_fn_STAR_17123_17129,sb__4448__auto__,keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_17122_17128,_STAR_print_fn_STAR_17123_17129,sb__4448__auto__,keys){
return (function (p__17124){
var vec__17125 = p__17124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17125,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["key",k,"spec",expound.printer.simple_spec_or_name(v)], null);
});})(_STAR_print_newline_STAR_17122_17128,_STAR_print_fn_STAR_17123_17129,sb__4448__auto__,keys))
,expound.printer.key__GT_spec(keys,problems))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17123_17129;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17122_17128;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4448__auto__)].join('');
})());
}
});
expound.printer.print_missing_keys = (function expound$printer$print_missing_keys(problems){
var keys_clauses = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(expound.printer.missing_key,cljs.core.cst$kw$pred),problems));
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys_clauses)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys_clauses){
return (function (p1__17130_SHARP_){
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17130_SHARP_),"`"].join('');
});})(keys_clauses))
,keys_clauses)));
} else {
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str((cljs.core.truth_(expound.printer.singleton_QMARK_(keys_clauses))?cljs.core.first(keys_clauses):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.cst$sym$and,keys_clauses))))].join('');
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_no_DASH_trailing_DASH_whitespace,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given an potentially multi-line string, returns that string with all
 *   trailing whitespace removed.
 */
expound.printer.no_trailing_whitespace = (function expound$printer$no_trailing_whitespace(s){
var s_SINGLEQUOTE_ = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split_lines(s)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.last(s))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_),"\n"].join('');
} else {
return s_SINGLEQUOTE_;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_indent,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given an potentially multi-line string, returns that string indented by
 * 'indent-level' spaces. Optionally, can indent first line and other lines
 * different amounts.
 */
expound.printer.indent = (function expound$printer$indent(var_args){
var G__17133 = arguments.length;
switch (G__17133) {
case 1:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

expound.printer.indent.cljs$core$IFn$_invoke$arity$1 = (function (s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(expound.printer.indent_level,s);
});

expound.printer.indent.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3(indent_level,indent_level,s);
});

expound.printer.indent.cljs$core$IFn$_invoke$arity$3 = (function (first_line_indent,rest_lines_indent,s){
var vec__17134 = clojure.string.split_lines([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
var seq__17135 = cljs.core.seq(vec__17134);
var first__17136 = cljs.core.first(seq__17135);
var seq__17135__$1 = cljs.core.next(seq__17135);
var line = first__17136;
var lines = seq__17135__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(first_line_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__17134,seq__17135,first__17136,seq__17135__$1,line,lines){
return (function (p1__17131_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rest_lines_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17131_SHARP_)].join('');
});})(vec__17134,seq__17135,first__17136,seq__17135__$1,line,lines))
,lines)));
});

expound.printer.indent.cljs$lang$maxFixedArity = 3;

