// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('expound.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('expound.paths');
goog.require('expound.problems');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('expound.printer');
goog.require('expound.util');
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.registry_ref !== 'undefined')){
} else {
expound.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$alpha_SLASH_singleton,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$count,(1)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$any_QMARK_,cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17265){
return ((cljs.core.coll_QMARK_(G__17265)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.bounded_count((1),G__17265))));
}),cljs.core.cst$kw$count,(1),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$count,(1))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_spec,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_spec),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$spec_SLASH_spec,cljs.core.cst$kw$spec_SLASH_spec,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17266){
return cljs.core.coll_QMARK_(G__17266);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_spec)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec$problem_SLASH_via,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_spec,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$spec_SLASH_spec,cljs.core.cst$kw$spec_SLASH_spec,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17267){
return cljs.core.vector_QMARK_(G__17267);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_spec,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_problem,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec$problem_SLASH_via], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec$problem_SLASH_via], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17268){
return cljs.core.map_QMARK_(G__17268);
}),(function (G__17268){
return cljs.core.contains_QMARK_(G__17268,cljs.core.cst$kw$via);
})], null),(function (G__17268){
return ((cljs.core.map_QMARK_(G__17268)) && (cljs.core.contains_QMARK_(G__17268,cljs.core.cst$kw$via)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec$problem_SLASH_via], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$via], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$via))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$spec_SLASH_problems,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_problem),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$spec_SLASH_problem,cljs.core.cst$kw$spec_SLASH_problem,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17269){
return cljs.core.coll_QMARK_(G__17269);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$spec_SLASH_problem)], null),null));
expound.alpha.header_size = (35);
expound.alpha.section_size = (25);
expound.alpha._STAR_value_str_fn_STAR_ = (function expound$alpha$_STAR_value_str_fn_STAR_(_,___$1,___$2,___$3){
return "NOT IMPLEMENTED";
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_value_DASH_in_DASH_context,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$spec_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null)),cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$spec_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null)),cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$opts,cljs.core.cst$kw$spec_DASH_name,cljs.core.cst$kw$form,cljs.core.cst$kw$path,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.nilable_impl(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null),null),cljs.core.any_QMARK_,cljs.core.cst$kw$expound_SLASH_path,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null)),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$spec_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null)),cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given a form and a path into that form, returns a string
 * that helps the user understand where that path is located
 * in the form
 */
expound.alpha.value_in_context = (function expound$alpha$value_in_context(opts,spec_name,form,path,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,spec_name)){
var _STAR_print_namespace_maps_STAR_17270 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_17270;
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,value)){
var _STAR_print_namespace_maps_STAR_17271 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str(value);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_17271;
}} else {
return expound.problems.highlighted_value(opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expound_SLASH_form,form,cljs.core.cst$kw$expound_SLASH_in,path], null));
}
}
});
expound.alpha.spec_str = (function expound$alpha$spec_str(spec){
if((spec instanceof cljs.core.Keyword)){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s:\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec,expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(cljs.spec.alpha.form(spec)))], 0));
} else {
return expound.printer.pprint_str(cljs.spec.alpha.form(spec));
}
});
expound.alpha.spec_PLUS_via = (function expound$alpha$spec_PLUS_via(problem){
var map__17272 = problem;
var map__17272__$1 = ((((!((map__17272 == null)))?(((((map__17272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17272):map__17272);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17272__$1,cljs.core.cst$kw$via);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17272__$1,cljs.core.cst$kw$spec);
if((spec instanceof cljs.core.Keyword)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),via);
} else {
return via;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$problems,cljs.core.cst$kw$spec_SLASH_problems),cljs.core.cst$kw$ret,cljs.core.cst$kw$spec_SLASH_specs),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$problems,cljs.core.cst$kw$spec_SLASH_problems),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$problems], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec_SLASH_problems], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec_SLASH_problems], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$problems,cljs.core.cst$kw$spec_SLASH_problems),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$spec_SLASH_specs,cljs.core.cst$kw$spec_SLASH_specs,null,null),cljs.core.cst$kw$spec_SLASH_specs,null,null,null));
/**
 * Given a collection of problems, returns the specs for those problems, with duplicates removed
 */
expound.alpha.specs = (function expound$alpha$specs(problems){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.alpha.spec_PLUS_via,problems)));
});
expound.alpha.specs_str = (function expound$alpha$specs_str(problems){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.alpha.spec_str,cljs.core.reverse(expound.alpha.specs(problems))));
});
expound.alpha.named_QMARK_ = (function expound$alpha$named_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
expound.alpha.pr_pred_STAR_ = (function expound$alpha$pr_pred_STAR_(pred){
if(cljs.core.truth_((function (){var or__3936__auto__ = (pred instanceof cljs.core.Symbol);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return expound.alpha.named_QMARK_(pred);
}
})())){
return cljs.core.name(pred);
} else {
if(cljs.core.fn_QMARK_(pred)){
return expound.printer.pprint_fn(pred);
} else {
return expound.printer.elide_core_ns((function (){var _STAR_print_namespace_maps_STAR_17275 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str(pred);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_17275;
}})());

}
}
});
expound.alpha.pr_pred = (function expound$alpha$pr_pred(pred,spec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,pred)){
return expound.alpha.pr_pred_STAR_(spec);
} else {
return expound.alpha.pr_pred_STAR_(pred);
}
});
expound.alpha.show_spec_name = (function expound$alpha$show_spec_name(spec_name,value){
if(cljs.core.truth_(spec_name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17276 = spec_name;
var G__17276__$1 = (((G__17276 instanceof cljs.core.Keyword))?G__17276.fqn:null);
switch (G__17276__$1) {
case "cljs.spec.alpha/pred":
return "";

break;
case "args":
return "Function arguments\n\n";

break;
case "ret":
return "Return value\n\n";

break;
case "fn":
return "Function arguments and return value\n\n";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17276__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
expound.alpha.preds = (function expound$alpha$preds(problems){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (problem){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.alpha.pr_pred(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(problem)));
}),problems)));
});
expound.alpha.error_message = (function expound$alpha$error_message(k){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expound.alpha.registry_ref),k);
});
expound.alpha.spec_w_error_message_QMARK_ = (function expound$alpha$spec_w_error_message_QMARK_(via,pred){
return cljs.core.boolean$((function (){var last_spec = cljs.core.last(via);
var and__3925__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,pred);
if(and__3925__auto__){
var and__3925__auto____$1 = expound.alpha.error_message(last_spec);
if(cljs.core.truth_(and__3925__auto____$1)){
return cljs.spec.alpha.get_spec(last_spec);
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})());
});
expound.alpha.predicate_errors = (function expound$alpha$predicate_errors(problems){
var vec__17278 = (function (){var G__17282 = (function (p__17284){
var map__17285 = p__17284;
var map__17285__$1 = ((((!((map__17285 == null)))?(((((map__17285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17285):map__17285);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17285__$1,cljs.core.cst$kw$expound_SLASH_via);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17285__$1,cljs.core.cst$kw$pred);
return expound.alpha.spec_w_error_message_QMARK_(via,pred);
});
var G__17283 = problems;
var fexpr__17281 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__17281.cljs$core$IFn$_invoke$arity$2 ? fexpr__17281.cljs$core$IFn$_invoke$arity$2(G__17282,G__17283) : fexpr__17281.call(null,G__17282,G__17283));
})();
var with_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17278,(0),null);
var no_msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17278,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (vec__17278,with_msg,no_msgs){
return (function (p__17287){
var map__17288 = p__17287;
var map__17288__$1 = ((((!((map__17288 == null)))?(((((map__17288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17288):map__17288);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17288__$1,cljs.core.cst$kw$expound_SLASH_via);
return expound.alpha.error_message(cljs.core.last(via));
});})(vec__17278,with_msg,no_msgs))
,with_msg),((cljs.core.seq(no_msgs))?expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.preds(no_msgs)], 0)):null))));
});
expound.alpha.label = (function expound$alpha$label(var_args){
var G__17291 = arguments.length;
switch (G__17291) {
case 1:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

expound.alpha.label.cljs$core$IFn$_invoke$arity$1 = (function (size){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(size,"-"));
});

expound.alpha.label.cljs$core$IFn$_invoke$arity$2 = (function (size,s){
var prefix = ["-- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join('');
var chars_left = (size - cljs.core.count(prefix));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(chars_left,"-")))].join('');
});

expound.alpha.label.cljs$lang$maxFixedArity = 2;

expound.alpha.header_label = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.label,expound.alpha.header_size);
expound.alpha.section_label = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.label,expound.alpha.section_size);
expound.alpha.relevant_specs = (function expound$alpha$relevant_specs(problems){
var sp_str = expound.alpha.specs_str(problems);
if(clojure.string.blank_QMARK_(sp_str)){
return "";
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.section_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.section_label.cljs$core$IFn$_invoke$arity$1("Relevant specs") : expound.alpha.section_label.call(null,"Relevant specs")),sp_str], 0));
}
});
expound.alpha.multi_spec_parts = (function expound$alpha$multi_spec_parts(spec_form){
var vec__17293 = spec_form;
var _multi_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(0),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(1),null);
var retag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17293,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mm,mm,cljs.core.cst$kw$retag,retag], null);
});
expound.alpha.missing_spec_QMARK_ = (function expound$alpha$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no method",cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.not_in_set_QMARK_ = (function expound$alpha$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.fspec_exception_failure_QMARK_ = (function expound$alpha$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.alpha.fspec_ret_failure_QMARK_ = (function expound$alpha$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret,cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.alpha.fspec_fn_failure_QMARK_ = (function expound$alpha$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.alpha.missing_key_QMARK_ = (function expound$alpha$missing_key_QMARK_(_failure,problem){
var pred = cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem);
var and__3925__auto__ = cljs.core.seq_QMARK_(pred);
if(and__3925__auto__){
var and__3925__auto____$1 = ((2) < cljs.core.count(pred));
if(and__3925__auto____$1){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pred,(2)));
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
});
expound.alpha.insufficient_input_QMARK_ = (function expound$alpha$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.extra_input_QMARK_ = (function expound$alpha$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.multi_spec = (function expound$alpha$multi_spec(pred,spec){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17296_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__17296_SHARP_)) && (((2) <= cljs.core.count(p1__17296_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_multi_DASH_spec,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__17296_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.second(p1__17296_SHARP_))));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.spec.alpha.form(spec))));
});
expound.alpha.no_method = (function expound$alpha$no_method(spec_name,val,path,problem){
var sp = cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_last,cljs.core.list(cljs.core.cst$kw$expound_SLASH_via,cljs.core.cst$sym$problem)),cljs.core.last(cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(problem)),null,null);
var map__17297 = expound.alpha.multi_spec_parts(expound.alpha.multi_spec(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),sp));
var map__17297__$1 = ((((!((map__17297 == null)))?(((((map__17297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17297):map__17297);
var mm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$mm);
var retag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17297__$1,cljs.core.cst$kw$retag);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("Cannot find spec for\n\n %s\n\n Spec multimethod:      `%s`\n Dispatch function:     `%s`\n Dispatch value:        `%s`\n ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.show_spec_name(spec_name,expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path))))),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mm], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([retag], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(retag)?(function (){var G__17299 = expound.problems.value_in(val,path);
return (retag.cljs$core$IFn$_invoke$arity$1 ? retag.cljs$core$IFn$_invoke$arity$1(G__17299) : retag.call(null,G__17299));
})():null)], 0))], 0));
});
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.problem_group_str !== 'undefined')){
} else {
expound.alpha.problem_group_str = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","problem-group-str"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (type,spec_name,_val,_path,_problems,_opts){
return type;
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.expected_str !== 'undefined')){
} else {
expound.alpha.expected_str = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","expected-str"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (type,spec_name,_val,_path,_problems,_opts){
return type;
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
expound.alpha.explain_missing_keys = (function expound$alpha$explain_missing_keys(problems){
var missing_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17300_SHARP_){
return expound.printer.missing_key(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__17300_SHARP_));
}),problems);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should contain %s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(missing_keys))) && (cljs.core.every_QMARK_(cljs.core.keyword,missing_keys))))?"key":"keys"),expound.printer.print_missing_keys(problems)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5455__auto__ = expound.printer.print_spec_keys(problems);
if(cljs.core.truth_(temp__5455__auto__)){
var table = temp__5455__auto__;
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join('');
} else {
return null;
}
})())].join('');
});
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_missing_DASH_key,(function (_type,spec_name,val,path,problems,opts){
return expound.alpha.explain_missing_keys(problems);
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_missing_DASH_key,(function (_type,spec_name,val,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Spec failed") : expound.alpha.header_label.call(null,"Spec failed")),expound.alpha.show_spec_name(spec_name,expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path))))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_not_DASH_in_DASH_set,(function (_type,_spec_name,_val,_path,problems,_opts){
var combined_set = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pred,problems));
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should be%s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(combined_set)))?"":" one of"),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (combined_set){
return (function (p1__17301_SHARP_){
return ["",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17301_SHARP_], 0))),""].join('');
});})(combined_set))
,combined_set)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_not_DASH_in_DASH_set,(function (_type,spec_name,val,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Spec failed") : expound.alpha.header_label.call(null,"Spec failed")),expound.alpha.show_spec_name(spec_name,expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path))))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_missing_DASH_spec,(function (_type,spec_name,val,path,problems,opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17302_SHARP_){
return expound.alpha.no_method(spec_name,val,path,p1__17302_SHARP_);
}),problems));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_missing_DASH_spec,(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Missing spec") : expound.alpha.header_label.call(null,"Missing spec")),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
/**
 * Same as sort-by, but if an error is raised, returns the original unsorted collection
 */
expound.alpha.safe_sort_by = (function expound$alpha$safe_sort_by(key_fn,comp,coll){
try{return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(key_fn,comp,coll);
}catch (e17303){var e = e17303;
return coll;
}});
expound.alpha.problem_type = (function expound$alpha$problem_type(failure,problem){
if(cljs.core.truth_(expound.alpha.insufficient_input_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_insufficient_DASH_input;
} else {
if(cljs.core.truth_(expound.alpha.extra_input_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_extra_DASH_input;
} else {
if(cljs.core.truth_(expound.alpha.not_in_set_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_not_DASH_in_DASH_set;
} else {
if(cljs.core.truth_(expound.alpha.missing_key_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_missing_DASH_key;
} else {
if(cljs.core.truth_(expound.alpha.missing_spec_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_missing_DASH_spec;
} else {
if(cljs.core.truth_(expound.alpha.fspec_exception_failure_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_fspec_DASH_exception_DASH_failure;
} else {
if(cljs.core.truth_(expound.alpha.fspec_ret_failure_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_fspec_DASH_ret_DASH_failure;
} else {
if(cljs.core.truth_(expound.alpha.fspec_fn_failure_QMARK_(failure,problem))){
return cljs.core.cst$kw$problem_SLASH_fspec_DASH_fn_DASH_failure;
} else {
return cljs.core.cst$kw$problem_SLASH_unknown;

}
}
}
}
}
}
}
}
});
expound.alpha.grouped_and_sorted_problems = (function expound$alpha$grouped_and_sorted_problems(failure,problems){
return expound.alpha.safe_sort_by(cljs.core.first,expound.paths.compare_paths,cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_in,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.problem_type,failure)),problems));
});
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_insufficient_DASH_input,(function (_type,spec_name,val,path,problems,opts){
var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should have additional elements. The next element%s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5459__auto__ = cljs.core.first(cljs.core.cst$kw$expound_SLASH_path.cljs$core$IFn$_invoke$arity$1(problem));
if((temp__5459__auto__ == null)){
return "";
} else {
var el_name = temp__5459__auto__;
return [" \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el_name], 0))),"\""].join('');
}
})(),(function (){var failure = null;
var non_matching_value = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound_SLASH_value_DASH_that_DASH_should_DASH_never_DASH_match], null);
var new_problems = expound.alpha.grouped_and_sorted_problems(failure,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (failure,non_matching_value,problem){
return (function (p1__17304_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17304_SHARP_,cljs.core.cst$kw$reason);
});})(failure,non_matching_value,problem))
,problems));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor ",(function (){var iter__4310__auto__ = ((function (failure,non_matching_value,new_problems,problem){
return (function expound$alpha$iter__17305(s__17306){
return (new cljs.core.LazySeq(null,((function (failure,non_matching_value,new_problems,problem){
return (function (){
var s__17306__$1 = s__17306;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__17306__$1);
if(temp__5457__auto__){
var s__17306__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17306__$2)){
var c__4308__auto__ = cljs.core.chunk_first(s__17306__$2);
var size__4309__auto__ = cljs.core.count(c__4308__auto__);
var b__17308 = cljs.core.chunk_buffer(size__4309__auto__);
if((function (){var i__17307 = (0);
while(true){
if((i__17307 < size__4309__auto__)){
var vec__17309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4308__auto__,i__17307);
var vec__17312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17309,(0),null);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17312,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17312,(1),null);
var problems_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17309,(1),null);
cljs.core.chunk_append(b__17308,(function (){var G__17315 = type;
var G__17316 = cljs.core.cst$kw$expound_SLASH_no_DASH_spec_DASH_name;
var G__17317 = non_matching_value;
var G__17318 = in$;
var G__17319 = problems_SINGLEQUOTE_;
var G__17320 = opts;
return (expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(G__17315,G__17316,G__17317,G__17318,G__17319,G__17320) : expound.alpha.expected_str.call(null,G__17315,G__17316,G__17317,G__17318,G__17319,G__17320));
})());

var G__17333 = (i__17307 + (1));
i__17307 = G__17333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17308),expound$alpha$iter__17305(cljs.core.chunk_rest(s__17306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17308),null);
}
} else {
var vec__17321 = cljs.core.first(s__17306__$2);
var vec__17324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(0),null);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17324,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17324,(1),null);
var problems_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(1),null);
return cljs.core.cons((function (){var G__17327 = type;
var G__17328 = cljs.core.cst$kw$expound_SLASH_no_DASH_spec_DASH_name;
var G__17329 = non_matching_value;
var G__17330 = in$;
var G__17331 = problems_SINGLEQUOTE_;
var G__17332 = opts;
return (expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(G__17327,G__17328,G__17329,G__17330,G__17331,G__17332) : expound.alpha.expected_str.call(null,G__17327,G__17328,G__17329,G__17330,G__17331,G__17332));
})(),expound$alpha$iter__17305(cljs.core.rest(s__17306__$2)));
}
} else {
return null;
}
break;
}
});})(failure,non_matching_value,new_problems,problem))
,null,null));
});})(failure,non_matching_value,new_problems,problem))
;
return iter__4310__auto__(new_problems);
})());
})()], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_insufficient_DASH_input,(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Syntax error") : expound.alpha.header_label.call(null,"Syntax error")),expound.alpha.show_spec_name(spec_name,expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path))))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_extra_DASH_input,(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return "has extra input";
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_extra_DASH_input,(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Syntax error") : expound.alpha.header_label.call(null,"Syntax error")),expound.alpha.show_spec_name(spec_name,expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path))))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_fspec_DASH_exception_DASH_failure,(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("threw exception \n\n%s\n\nwith args:\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem)], 0))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_fspec_DASH_exception_DASH_failure,(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Exception") : expound.alpha.header_label.call(null,"Exception")),expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path)))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_fspec_DASH_ret_DASH_failure,(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("returned an invalid value\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)], 0))),expound.alpha.predicate_errors(problems)], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_fspec_DASH_ret_DASH_failure,(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Function spec failed") : expound.alpha.header_label.call(null,"Function spec failed")),expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path)))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_fspec_DASH_fn_DASH_failure,(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("failed spec. Function arguments and return value\n\n%s\n\nshould satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)], 0))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.alpha.pr_pred(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(problem)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_fspec_DASH_fn_DASH_failure,(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Function spec failed") : expound.alpha.header_label.call(null,"Function spec failed")),expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path)))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_unknown,(function (_type,spec_name,val,path,problems,opts){
return expound.alpha.predicate_errors(problems);
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$problem_SLASH_unknown,(function (_type,spec_name,val,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Spec failed") : expound.alpha.header_label.call(null,"Spec failed")),expound.alpha.show_spec_name(spec_name,expound.printer.indent.cljs$core$IFn$_invoke$arity$1((expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,val,path,expound.problems.value_in(val,path)) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in(val,path))))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,val,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts))], 0));
}));
expound.alpha.problem_group_str1 = (function expound$alpha$problem_group_str1(type,spec_name,val,path,problems,opts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,val,path,problems,opts) : expound.alpha.problem_group_str.call(null,type,spec_name,val,path,problems,opts))),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$print_DASH_specs_QMARK_.cljs$core$IFn$_invoke$arity$1(opts))?expound.alpha.relevant_specs(problems):""))].join('');
});
expound.alpha.instrumentation_info = (function expound$alpha$instrumentation_info(failure,caller){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s:%s\n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$2(caller,"<filename missing>"),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$2(caller,"<line number missing>")], 0));
} else {
return "";
}
});
expound.alpha.spec_name = (function expound$alpha$spec_name(ed){
if(cljs.core.truth_((function (){var G__17335 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure.cljs$core$IFn$_invoke$arity$1(ed);
var fexpr__17334 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$instrument,null], null), null);
return (fexpr__17334.cljs$core$IFn$_invoke$arity$1 ? fexpr__17334.cljs$core$IFn$_invoke$arity$1(G__17335) : fexpr__17334.call(null,G__17335));
})())){
return cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed))));
} else {
return null;
}
});
expound.alpha.printer_str = (function expound$alpha$printer_str(opts,explain_data){
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,false,cljs.core.cst$kw$print_DASH_specs_QMARK_,true], null),opts], 0));
if(cljs.core.not(explain_data)){
return "Success!\n";
} else {
var _STAR_value_str_fn_STAR_17336 = expound.alpha._STAR_value_str_fn_STAR_;
expound.alpha._STAR_value_str_fn_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$value_DASH_str_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.value_in_context,opts_SINGLEQUOTE_));

try{var map__17337 = explain_data;
var map__17337__$1 = ((((!((map__17337 == null)))?(((((map__17337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17337):map__17337);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17337__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17337__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure);
var explain_data_SINGLEQUOTE_ = expound.problems.annotate(explain_data);
var caller = cljs.core.cst$kw$expound_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_);
var form = cljs.core.cst$kw$expound_SLASH_form.cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_);
var problems = expound.alpha.grouped_and_sorted_problems(cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure.cljs$core$IFn$_invoke$arity$1(explain_data),expound.problems.leaf_only(cljs.core.cst$kw$expound_SLASH_problems.cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_)));
return expound.printer.no_trailing_whitespace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.instrumentation_info(failure,caller)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\nDetected %s %s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4310__auto__ = ((function (map__17337,map__17337__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_17336,opts_SINGLEQUOTE_){
return (function expound$alpha$printer_str_$_iter__17339(s__17340){
return (new cljs.core.LazySeq(null,((function (map__17337,map__17337__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_17336,opts_SINGLEQUOTE_){
return (function (){
var s__17340__$1 = s__17340;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__17340__$1);
if(temp__5457__auto__){
var s__17340__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17340__$2)){
var c__4308__auto__ = cljs.core.chunk_first(s__17340__$2);
var size__4309__auto__ = cljs.core.count(c__4308__auto__);
var b__17342 = cljs.core.chunk_buffer(size__4309__auto__);
if((function (){var i__17341 = (0);
while(true){
if((i__17341 < size__4309__auto__)){
var vec__17343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4308__auto__,i__17341);
var vec__17346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343,(0),null);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17346,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17346,(1),null);
var probs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343,(1),null);
cljs.core.chunk_append(b__17342,expound.alpha.problem_group_str1(type,expound.alpha.spec_name(explain_data),form,in$,probs,opts_SINGLEQUOTE_));

var G__17355 = (i__17341 + (1));
i__17341 = G__17355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17342),expound$alpha$printer_str_$_iter__17339(cljs.core.chunk_rest(s__17340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17342),null);
}
} else {
var vec__17349 = cljs.core.first(s__17340__$2);
var vec__17352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349,(0),null);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17352,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17352,(1),null);
var probs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349,(1),null);
return cljs.core.cons(expound.alpha.problem_group_str1(type,expound.alpha.spec_name(explain_data),form,in$,probs,opts_SINGLEQUOTE_),expound$alpha$printer_str_$_iter__17339(cljs.core.rest(s__17340__$2)));
}
} else {
return null;
}
break;
}
});})(map__17337,map__17337__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_17336,opts_SINGLEQUOTE_))
,null,null));
});})(map__17337,map__17337__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_17336,opts_SINGLEQUOTE_))
;
return iter__4310__auto__(problems);
})()),(expound.alpha.section_label.cljs$core$IFn$_invoke$arity$0 ? expound.alpha.section_label.cljs$core$IFn$_invoke$arity$0() : expound.alpha.section_label.call(null)),cljs.core.count(problems),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(problems)))?"error":"errors")], 0)))].join(''));
}finally {expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR_17336;
}}
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$alpha_SLASH_foo,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
/**
 * Returns a printer, configured via opts
 */
expound.alpha.custom_printer = (function expound$alpha$custom_printer(opts){
return (function (explain_data){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.printer_str(opts,explain_data)], 0));
});
});
/**
 * Prints explain-data in a human-readable format
 */
expound.alpha.printer = (function expound$alpha$printer(explain_data){
var fexpr__17356 = expound.alpha.custom_printer(cljs.core.PersistentArrayMap.EMPTY);
return (fexpr__17356.cljs$core$IFn$_invoke$arity$1 ? fexpr__17356.cljs$core$IFn$_invoke$arity$1(explain_data) : fexpr__17356.call(null,explain_data));
});
/**
 * Given a spec and a value, either returns success message or returns a human-readable explanation as a string.
 */
expound.alpha.expound_str = (function expound$alpha$expound_str(spec,form){
var explain_data = cljs.spec.alpha.explain_data(spec,form);
return expound.alpha.printer_str(cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(explain_data)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,form):null));
});
/**
 * Given a spec and a value, either prints a success message or prints a human-readable explanation as a string.
 */
expound.alpha.expound = (function expound$alpha$expound(spec,form){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.expound_str(spec,form)], 0));
});
expound.alpha.defmsg = (function expound$alpha$defmsg(k,error_message){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expound.alpha.registry_ref,cljs.core.assoc,k,error_message);

return null;
});
