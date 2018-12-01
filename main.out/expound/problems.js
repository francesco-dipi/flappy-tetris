// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('expound.problems');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('expound.paths');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('expound.printer');
expound.problems.blank_form = (function expound$problems$blank_form(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.zipmap(cljs.core.keys(form),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
if(cljs.core.set_QMARK_(form)){
return form;
} else {
if(((cljs.core.list_QMARK_(form)) || (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
return cljs.core.cst$kw$expound$problems_SLASH_irrelevant;

}
}
}
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$problems_SLASH_summary_DASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_valids_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_valids_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_valid_DASH_valids_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$kw$highlighted_DASH_path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,cljs.core.cst$kw$expound_SLASH_path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$expound_SLASH_path], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_valids_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
expound.problems.summary_form = (function expound$problems$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__17216 = in$;
var seq__17217 = cljs.core.seq(vec__17216);
var first__17218 = cljs.core.first(seq__17217);
var seq__17217__$1 = cljs.core.next(seq__17217);
var k = first__17218;
var rst = seq__17217__$1;
var rst__$1 = (function (){var or__3936__auto__ = rst;
if(or__3936__auto__){
return or__3936__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.problems.blank_form(form));
if(cljs.core.empty_QMARK_(in$)){
return cljs.core.cst$kw$expound$problems_SLASH_relevant;
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.map_QMARK_(form);
if(and__3925__auto__){
return expound.paths.kps_QMARK_(k);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(displayed_form,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k)),(function (){var G__17219 = show_valid_values_QMARK_;
var G__17220 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k);
var G__17221 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__17219,G__17220,G__17221) : expound.problems.summary_form.call(null,G__17219,G__17220,G__17221));
})(),cljs.core.cst$kw$expound$problems_SLASH_irrelevant);
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.map_QMARK_(form);
if(and__3925__auto__){
return expound.paths.kvps_QMARK_(k);
} else {
return and__3925__auto__;
}
})())){
var G__17234 = show_valid_values_QMARK_;
var G__17235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(k));
var G__17236 = rst__$1;
show_valid_values_QMARK_ = G__17234;
form = G__17235;
in$ = G__17236;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(displayed_form,k,(function (){var G__17222 = show_valid_values_QMARK_;
var G__17223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__17224 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__17222,G__17223,G__17224) : expound.problems.summary_form.call(null,G__17222,G__17223,G__17224));
})());
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__17225 = show_valid_values_QMARK_;
var G__17226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,k);
var G__17227 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__17225,G__17226,G__17227) : expound.problems.summary_form.call(null,G__17225,G__17226,G__17227));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.set_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__17228 = show_valid_values_QMARK_;
var G__17229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__17230 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__17228,G__17229,G__17230) : expound.problems.summary_form.call(null,G__17228,G__17229,G__17230));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.list_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__17231 = show_valid_values_QMARK_;
var G__17232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__17233 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__17231,G__17232,G__17233) : expound.problems.summary_form.call(null,G__17231,G__17232,G__17233));
})()));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$in,in$], null));

}
}
}
}
}
}
}
break;
}
});
expound.problems.highlight_line = (function expound$problems$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17237_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17237_SHARP_)].join(''));
}),clojure.string.split_lines(replacement)));
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_width,"^")));
});
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_in,expound.paths.in_with_kps(form,cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY));
}catch (e17238){var e = e17238;
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var G__17242 = cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem));
var fexpr__17241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret,null], null), null);
return (fexpr__17241.cljs$core$IFn$_invoke$arity$1 ? fexpr__17241.cljs$core$IFn$_invoke$arity$1(G__17242) : fexpr__17241.call(null,G__17242));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_in,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem));
} else {
throw e;
}
}});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_path,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure))?cljs.core.vec(cljs.core.rest(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem))):cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$spec,spec);
});
expound.problems.fix_via = (function expound$problems$fix_via(spec,problem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.first(cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_via,cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_via,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)));
}
});
/**
 * Given a collection of problems, returns only those problems with data on the 'leaves' of the data
 */
expound.problems.leaf_only = (function expound$problems$leaf_only(problems){
var paths_to_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_in,problems));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (paths_to_data){
return (function (problem){
return cljs.core.some(((function (paths_to_data){
return (function (path){
return expound.paths.prefix_path_QMARK_(cljs.core.cst$kw$expound_SLASH_in.cljs$core$IFn$_invoke$arity$1(problem),path);
});})(paths_to_data))
,paths_to_data);
});})(paths_to_data))
,problems);
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__17244 = explain_data;
var map__17244__$1 = ((((!((map__17244 == null)))?(((((map__17244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17244):map__17244);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_args);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17244__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec);
var caller = (function (){var or__3936__auto__ = cljs.core.cst$kw$clojure$spec$test$alpha_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$orchestra$spec$test_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure))?value:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret))?ret:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn))?fn:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_args))?args:null))));
var problems_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_in,form),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_path,failure),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.add_spec,spec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.fix_via,spec),((function (map__17244,map__17244__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__17243_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17243_SHARP_,cljs.core.cst$kw$expound_SLASH_form,form);
});})(map__17244,map__17244__$1,problems,value,args,ret,fn,failure,spec,caller,form))
], 0)),problems);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(explain_data,cljs.core.cst$kw$expound_SLASH_form,form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$expound_SLASH_caller,caller,cljs.core.cst$kw$expound_SLASH_problems,problems_SINGLEQUOTE_], 0));
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.problems.value_in = (function expound$problems$value_in(form,in$){
while(true){
var vec__17246 = in$;
var seq__17247 = cljs.core.seq(vec__17246);
var first__17248 = cljs.core.first(seq__17247);
var seq__17247__$1 = cljs.core.next(seq__17247);
var k = first__17248;
var rst = seq__17247__$1;
if(cljs.core.empty_QMARK_(in$)){
return form;
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.map_QMARK_(form);
if(and__3925__auto__){
return expound.paths.kps_QMARK_(k);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.map_QMARK_(form);
if(and__3925__auto__){
return expound.paths.kvps_QMARK_(k);
} else {
return and__3925__auto__;
}
})())){
var G__17249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(k));
var G__17250 = rst;
form = G__17249;
in$ = G__17250;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__17251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__17252 = rst;
form = G__17251;
in$ = G__17252;
continue;
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__17253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__17254 = rst;
form = G__17253;
in$ = G__17254;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
expound.problems.escape_replacement = (function expound$problems$escape_replacement(pattern,s){
return clojure.string.replace(s,/\$/,"$$$$");
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.problems.highlighted_value = (function expound$problems$highlighted_value(opts,problem){
var map__17255 = problem;
var map__17255__$1 = ((((!((map__17255 == null)))?(((((map__17255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17255):map__17255);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17255__$1,cljs.core.cst$kw$expound_SLASH_form);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17255__$1,cljs.core.cst$kw$expound_SLASH_in);
var map__17256 = opts;
var map__17256__$1 = ((((!((map__17256 == null)))?(((((map__17256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17256):map__17256);
var show_valid_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17256__$1,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,false);
var value_at_path = expound.problems.value_in(form,in$);
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_relevant),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_kv_DASH_relevant),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_kv_DASH_relevant),"))"].join('');
var regex = cljs.core.re_pattern(["(.*)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relevant),".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR_17262 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str(clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expound$problems_SLASH_irrelevant,cljs.core.cst$sym$$$$], null),expound.problems.summary_form(show_valid_values_QMARK_,form,in$)));
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_17262;
}})();
var vec__17257 = cljs.core.re_find(regex,s);
var seq__17258 = cljs.core.seq(vec__17257);
var first__17259 = cljs.core.first(seq__17258);
var seq__17258__$1 = cljs.core.next(seq__17258);
var line = first__17259;
var first__17259__$1 = cljs.core.first(seq__17258__$1);
var seq__17258__$2 = cljs.core.next(seq__17258__$1);
var prefix = first__17259__$1;
var _more = seq__17258__$2;
var highlighted_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(line,cljs.core.re_pattern(relevant),expound.problems.escape_replacement(cljs.core.re_pattern(relevant),expound.printer.indent.cljs$core$IFn$_invoke$arity$3((0),cljs.core.count(prefix),expound.printer.pprint_str(value_at_path))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.problems.highlight_line(prefix,expound.printer.pprint_str(value_at_path)))].join('');
return expound.printer.no_trailing_whitespace(clojure.string.replace(s,line,expound.problems.escape_replacement(line,highlighted_line)));
});
