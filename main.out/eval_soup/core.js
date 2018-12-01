// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//);
var last_part = cljs.core.last(parts);
var new_parts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parts),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_part,clojure.string.lower_case(last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(last_part)], null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__14120 = arguments.length;
switch (G__14120) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches(/^goog\/.*/,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,(cljs.core.truth_(cljs.core.cst$kw$macros.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first(extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
var G__14122 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(extension,".js"))?cljs.core.cst$kw$js:cljs.core.cst$kw$clj),cljs.core.cst$kw$source,e.target.getResponseText()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14122) : cb.call(null,G__14122));
} else {
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.rest(extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e14121){if((e14121 instanceof Error)){
var _ = e14121;
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.rest(extensions),cb);
} else {
throw e14121;

}
}} else {
var G__14123 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14123) : cb.call(null,G__14123));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_14126 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns_sym);

try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_14126;
}}catch (e14125){if((e14125 instanceof Error)){
var _ = e14125;
return null;
} else {
throw e14125;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$load,custom_load,cljs.core.cst$kw$context,cljs.core.cst$kw$expr,cljs.core.cst$kw$def_DASH_emits_DASH_var,true], null);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var _STAR_forms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(forms);
var _STAR_results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var c__12146__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12146__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__12147__auto__ = (function (){var switch__12044__auto__ = ((function (c__12146__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_14220){
var state_val_14221 = (state_14220[(1)]);
if((state_val_14221 === (7))){
var inst_14171 = (state_14220[(2)]);
var inst_14172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_forms,cljs.core.rest);
var state_14220__$1 = (function (){var statearr_14222 = state_14220;
(statearr_14222[(7)] = inst_14171);

(statearr_14222[(8)] = inst_14172);

return statearr_14222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14220__$1,(19),channel);
} else {
if((state_val_14221 === (20))){
var inst_14175 = (state_14220[(9)]);
var inst_14180 = inst_14175.cljs$lang$protocol_mask$partition0$;
var inst_14181 = (inst_14180 & (64));
var inst_14182 = inst_14175.cljs$core$ISeq$;
var inst_14183 = (cljs.core.PROTOCOL_SENTINEL === inst_14182);
var inst_14184 = ((inst_14181) || (inst_14183));
var state_14220__$1 = state_14220;
if(cljs.core.truth_(inst_14184)){
var statearr_14223_14271 = state_14220__$1;
(statearr_14223_14271[(1)] = (23));

} else {
var statearr_14224_14272 = state_14220__$1;
(statearr_14224_14272[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (27))){
var inst_14175 = (state_14220[(9)]);
var state_14220__$1 = state_14220;
var statearr_14225_14273 = state_14220__$1;
(statearr_14225_14273[(2)] = inst_14175);

(statearr_14225_14273[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (1))){
var state_14220__$1 = state_14220;
var statearr_14226_14274 = state_14220__$1;
(statearr_14226_14274[(2)] = null);

(statearr_14226_14274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (24))){
var state_14220__$1 = state_14220;
var statearr_14227_14275 = state_14220__$1;
(statearr_14227_14275[(2)] = false);

(statearr_14227_14275[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (4))){
var state_14220__$1 = state_14220;
var statearr_14228_14276 = state_14220__$1;
(statearr_14228_14276[(2)] = null);

(statearr_14228_14276[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (15))){
var inst_14155 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14229_14277 = state_14220__$1;
(statearr_14229_14277[(2)] = inst_14155);

(statearr_14229_14277[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (21))){
var state_14220__$1 = state_14220;
var statearr_14230_14278 = state_14220__$1;
(statearr_14230_14278[(2)] = false);

(statearr_14230_14278[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (31))){
var inst_14207 = (state_14220[(2)]);
var inst_14208 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_results,cljs.core.conj,inst_14207);
var state_14220__$1 = (function (){var statearr_14231 = state_14220;
(statearr_14231[(10)] = inst_14208);

return statearr_14231;
})();
var statearr_14232_14279 = state_14220__$1;
(statearr_14232_14279[(2)] = null);

(statearr_14232_14279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (32))){
var inst_14200 = (state_14220[(11)]);
var inst_14202 = (state_14220[(2)]);
var inst_14203 = [inst_14202];
var inst_14204 = cljs.core.PersistentHashMap.fromArrays(inst_14200,inst_14203);
var state_14220__$1 = state_14220;
var statearr_14233_14280 = state_14220__$1;
(statearr_14233_14280[(2)] = inst_14204);

(statearr_14233_14280[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (13))){
var inst_14143 = (state_14220[(12)]);
var inst_14151 = cljs.core.second(inst_14143);
var inst_14152 = cljs.core.reset_BANG_(_STAR_current_ns,inst_14151);
var state_14220__$1 = state_14220;
var statearr_14234_14281 = state_14220__$1;
(statearr_14234_14281[(2)] = inst_14152);

(statearr_14234_14281[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (22))){
var inst_14191 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
if(cljs.core.truth_(inst_14191)){
var statearr_14235_14282 = state_14220__$1;
(statearr_14235_14282[(1)] = (26));

} else {
var statearr_14236_14283 = state_14220__$1;
(statearr_14236_14283[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (29))){
var inst_14197 = (state_14220[(13)]);
var inst_14200 = [cljs.core.cst$kw$value];
var state_14220__$1 = (function (){var statearr_14237 = state_14220;
(statearr_14237[(11)] = inst_14200);

return statearr_14237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14220__$1,(32),inst_14197);
} else {
if((state_val_14221 === (6))){
var inst_14212 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14238_14284 = state_14220__$1;
(statearr_14238_14284[(2)] = inst_14212);

(statearr_14238_14284[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (28))){
var inst_14196 = (state_14220[(14)]);
var inst_14197 = (state_14220[(13)]);
var inst_14196__$1 = (state_14220[(2)]);
var inst_14197__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14196__$1,cljs.core.cst$kw$value);
var inst_14198 = (inst_14197__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_14220__$1 = (function (){var statearr_14239 = state_14220;
(statearr_14239[(14)] = inst_14196__$1);

(statearr_14239[(13)] = inst_14197__$1);

return statearr_14239;
})();
if(cljs.core.truth_(inst_14198)){
var statearr_14240_14285 = state_14220__$1;
(statearr_14240_14285[(1)] = (29));

} else {
var statearr_14241_14286 = state_14220__$1;
(statearr_14241_14286[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (25))){
var inst_14188 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14242_14287 = state_14220__$1;
(statearr_14242_14287[(2)] = inst_14188);

(statearr_14242_14287[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (17))){
var inst_14143 = (state_14220[(12)]);
var inst_14144 = (state_14220[(15)]);
var inst_14141 = (state_14220[(16)]);
var inst_14166 = (function (){var current_ns = inst_14141;
var form = inst_14143;
var opts__$1 = inst_14144;
return ((function (current_ns,form,opts__$1,inst_14143,inst_14144,inst_14141,state_val_14221,c__12146__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__14127_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__14127_SHARP_);
});
;})(current_ns,form,opts__$1,inst_14143,inst_14144,inst_14141,state_val_14221,c__12146__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_14167 = cljs.js.eval.cljs$core$IFn$_invoke$arity$4(_STAR_state,inst_14143,inst_14144,inst_14166);
var state_14220__$1 = state_14220;
var statearr_14243_14288 = state_14220__$1;
(statearr_14243_14288[(2)] = inst_14167);

(statearr_14243_14288[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (3))){
var inst_14214 = (state_14220[(2)]);
var inst_14215 = (function (){return ((function (inst_14214,state_val_14221,c__12146__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__14128_SHARP_){
var or__3936__auto__ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__14128_SHARP_);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__14128_SHARP_);
}
});
;})(inst_14214,state_val_14221,c__12146__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_14216 = cljs.core.deref(_STAR_results);
var inst_14217 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_14215,inst_14216);
var inst_14218 = (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(inst_14217) : cb.call(null,inst_14217));
var state_14220__$1 = (function (){var statearr_14244 = state_14220;
(statearr_14244[(17)] = inst_14214);

return statearr_14244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14220__$1,inst_14218);
} else {
if((state_val_14221 === (12))){
var inst_14143 = (state_14220[(12)]);
var inst_14158 = (state_14220[(2)]);
var inst_14159 = (inst_14143 instanceof Error);
var state_14220__$1 = (function (){var statearr_14245 = state_14220;
(statearr_14245[(18)] = inst_14158);

return statearr_14245;
})();
if(cljs.core.truth_(inst_14159)){
var statearr_14246_14289 = state_14220__$1;
(statearr_14246_14289[(1)] = (16));

} else {
var statearr_14247_14290 = state_14220__$1;
(statearr_14247_14290[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (2))){
var inst_14130 = cljs.core.deref(_STAR_forms);
var inst_14131 = cljs.core.seq(inst_14130);
var state_14220__$1 = state_14220;
if(inst_14131){
var statearr_14248_14291 = state_14220__$1;
(statearr_14248_14291[(1)] = (4));

} else {
var statearr_14249_14292 = state_14220__$1;
(statearr_14249_14292[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (23))){
var state_14220__$1 = state_14220;
var statearr_14250_14293 = state_14220__$1;
(statearr_14250_14293[(2)] = true);

(statearr_14250_14293[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (19))){
var inst_14175 = (state_14220[(9)]);
var inst_14175__$1 = (state_14220[(2)]);
var inst_14177 = (inst_14175__$1 == null);
var inst_14178 = cljs.core.not(inst_14177);
var state_14220__$1 = (function (){var statearr_14251 = state_14220;
(statearr_14251[(9)] = inst_14175__$1);

return statearr_14251;
})();
if(inst_14178){
var statearr_14252_14294 = state_14220__$1;
(statearr_14252_14294[(1)] = (20));

} else {
var statearr_14253_14295 = state_14220__$1;
(statearr_14253_14295[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (11))){
var state_14220__$1 = state_14220;
var statearr_14254_14296 = state_14220__$1;
(statearr_14254_14296[(2)] = null);

(statearr_14254_14296[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (9))){
var inst_14143 = (state_14220[(12)]);
var inst_14141 = (state_14220[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14220,(8),Error,null,(7));
var inst_14141__$1 = cljs.core.deref(_STAR_current_ns);
var inst_14142 = cljs.core.deref(_STAR_forms);
var inst_14143__$1 = cljs.core.first(inst_14142);
var inst_14144 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$ns,inst_14141__$1);
var inst_14145 = cljs.core.list_QMARK_(inst_14143__$1);
var state_14220__$1 = (function (){var statearr_14255 = state_14220;
(statearr_14255[(12)] = inst_14143__$1);

(statearr_14255[(15)] = inst_14144);

(statearr_14255[(16)] = inst_14141__$1);

return statearr_14255;
})();
if(inst_14145){
var statearr_14256_14297 = state_14220__$1;
(statearr_14256_14297[(1)] = (10));

} else {
var statearr_14257_14298 = state_14220__$1;
(statearr_14257_14298[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (5))){
var state_14220__$1 = state_14220;
var statearr_14258_14299 = state_14220__$1;
(statearr_14258_14299[(2)] = null);

(statearr_14258_14299[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (14))){
var state_14220__$1 = state_14220;
var statearr_14259_14300 = state_14220__$1;
(statearr_14259_14300[(2)] = null);

(statearr_14259_14300[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (26))){
var inst_14175 = (state_14220[(9)]);
var inst_14193 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14175);
var state_14220__$1 = state_14220;
var statearr_14260_14301 = state_14220__$1;
(statearr_14260_14301[(2)] = inst_14193);

(statearr_14260_14301[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (16))){
var inst_14143 = (state_14220[(12)]);
var inst_14161 = [cljs.core.cst$kw$error];
var inst_14162 = [inst_14143];
var inst_14163 = cljs.core.PersistentHashMap.fromArrays(inst_14161,inst_14162);
var inst_14164 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_14163);
var state_14220__$1 = state_14220;
var statearr_14261_14302 = state_14220__$1;
(statearr_14261_14302[(2)] = inst_14164);

(statearr_14261_14302[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (30))){
var inst_14196 = (state_14220[(14)]);
var state_14220__$1 = state_14220;
var statearr_14262_14303 = state_14220__$1;
(statearr_14262_14303[(2)] = inst_14196);

(statearr_14262_14303[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (10))){
var inst_14143 = (state_14220[(12)]);
var inst_14147 = cljs.core.cst$sym$ns;
var inst_14148 = cljs.core.first(inst_14143);
var inst_14149 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14147,inst_14148);
var state_14220__$1 = state_14220;
if(inst_14149){
var statearr_14263_14304 = state_14220__$1;
(statearr_14263_14304[(1)] = (13));

} else {
var statearr_14264_14305 = state_14220__$1;
(statearr_14264_14305[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (18))){
var inst_14169 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14265_14306 = state_14220__$1;
(statearr_14265_14306[(2)] = inst_14169);


cljs.core.async.impl.ioc_helpers.process_exception(state_14220__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14221 === (8))){
var inst_14133 = (state_14220[(2)]);
var inst_14134 = [cljs.core.cst$kw$error];
var inst_14135 = [inst_14133];
var inst_14136 = cljs.core.PersistentHashMap.fromArrays(inst_14134,inst_14135);
var inst_14137 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_14136);
var state_14220__$1 = state_14220;
var statearr_14266_14307 = state_14220__$1;
(statearr_14266_14307[(2)] = inst_14137);


cljs.core.async.impl.ioc_helpers.process_exception(state_14220__$1);

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
});})(c__12146__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__12044__auto__,c__12146__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__12045__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__12045__auto____0 = (function (){
var statearr_14267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14267[(0)] = eval_soup$core$eval_forms_$_state_machine__12045__auto__);

(statearr_14267[(1)] = (1));

return statearr_14267;
});
var eval_soup$core$eval_forms_$_state_machine__12045__auto____1 = (function (state_14220){
while(true){
var ret_value__12046__auto__ = (function (){try{while(true){
var result__12047__auto__ = switch__12044__auto__(state_14220);
if(cljs.core.keyword_identical_QMARK_(result__12047__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12047__auto__;
}
break;
}
}catch (e14268){if((e14268 instanceof Object)){
var ex__12048__auto__ = e14268;
var statearr_14269_14308 = state_14220;
(statearr_14269_14308[(5)] = ex__12048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14220);

return cljs.core.cst$kw$recur;
} else {
throw e14268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12046__auto__,cljs.core.cst$kw$recur)){
var G__14309 = state_14220;
state_14220 = G__14309;
continue;
} else {
return ret_value__12046__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__12045__auto__ = function(state_14220){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__12045__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__12045__auto____1.call(this,state_14220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__12045__auto____0;
eval_soup$core$eval_forms_$_state_machine__12045__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__12045__auto____1;
return eval_soup$core$eval_forms_$_state_machine__12045__auto__;
})()
;})(switch__12044__auto__,c__12146__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__12148__auto__ = (function (){var statearr_14270 = (f__12147__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12147__auto__.cljs$core$IFn$_invoke$arity$0() : f__12147__auto__.call(null));
(statearr_14270[(6)] = c__12146__auto__);

return statearr_14270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12148__auto__);
});})(c__12146__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__12146__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_(form)){
return (new cljs.core.List(null,cljs.core.cst$sym$macroexpand,(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,form,null,(1),null)),(2),null)),null,(1),null)),(2),null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return (new cljs.core.List(null,cljs.core.cst$sym$do,(new cljs.core.List(null,cljs.core.list(cljs.core.cst$sym$cljs$user_SLASH_ps_DASH_reset_DASH_timeout_BANG_),(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if(((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(form))))){
return form;
} else {
var form__$1 = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if(((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,cljs.core.first(form__$1))))){
return (new cljs.core.List(null,cljs.core.cst$sym$do,(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$user_SLASH_ps_DASH_check_DASH_for_DASH_timeout_BANG_,(new cljs.core.List(null,timeout,null,(1),null)),(2),null)),(new cljs.core.List(null,form__$1,null,(1),null)),(2),null)),(3),null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__4310__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__14310(s__14311){
return (new cljs.core.LazySeq(null,(function (){
var s__14311__$1 = s__14311;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14311__$1);
if(temp__5457__auto__){
var s__14311__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14311__$2)){
var c__4308__auto__ = cljs.core.chunk_first(s__14311__$2);
var size__4309__auto__ = cljs.core.count(c__4308__auto__);
var b__14313 = cljs.core.chunk_buffer(size__4309__auto__);
if((function (){var i__14312 = (0);
while(true){
if((i__14312 < size__4309__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4308__auto__,i__14312);
var expanded_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_forms,i);
cljs.core.chunk_append(b__14313,((((cljs.core.coll_QMARK_(expanded_form)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(expanded_form)),cljs.core.cst$sym$recur))))?eval_soup.core.add_timeout_reset(eval_soup.core.add_timeout_checks(timeout,expanded_form)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms,i)));

var G__14314 = (i__14312 + (1));
i__14312 = G__14314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14313),eval_soup$core$add_timeouts_if_necessary_$_iter__14310(cljs.core.chunk_rest(s__14311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14313),null);
}
} else {
var i = cljs.core.first(s__14311__$2);
var expanded_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_forms,i);
return cljs.core.cons(((((cljs.core.coll_QMARK_(expanded_form)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(expanded_form)),cljs.core.cst$sym$recur))))?eval_soup.core.add_timeout_reset(eval_soup.core.add_timeout_checks(timeout,expanded_form)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__14310(cljs.core.rest(s__14311__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(forms)));
});
if((typeof eval_soup !== 'undefined') && (typeof eval_soup.core !== 'undefined') && (typeof eval_soup.core._STAR_cljs_state !== 'undefined')){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__14317 = arguments.length;
switch (G__14317) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3(forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__14318){
var map__14319 = p__14318;
var map__14319__$1 = ((((!((map__14319 == null)))?(((((map__14319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14319):map__14319);
var opts = map__14319__$1;
var _STAR_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14319__$1,cljs.core.cst$kw$_STAR_current_DASH_ns,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$user));
var _STAR_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14319__$1,cljs.core.cst$kw$_STAR_state,eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14319__$1,cljs.core.cst$kw$custom_DASH_load,eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14319__$1,cljs.core.cst$kw$timeout,(4000));
var disable_timeout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14319__$1,cljs.core.cst$kw$disable_DASH_timeout_QMARK_,false);
var forms__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__14319,map__14319__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__14315_SHARP_){
if(typeof p1__14315_SHARP_ === 'string'){
return eval_soup.core.str__GT_form(cljs.core.deref(_STAR_current_ns),p1__14315_SHARP_);
} else {
return p1__14315_SHARP_;
}
});})(map__14319,map__14319__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$ns,cljs.core.cst$sym$cljs$user)], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$def,cljs.core.cst$sym$ps_DASH_last_DASH_time,cljs.core.list(cljs.core.cst$sym$atom,(0))),cljs.core.list(cljs.core.cst$sym$defn,cljs.core.cst$sym$ps_DASH_reset_DASH_timeout_BANG_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$reset_BANG_,cljs.core.cst$sym$ps_DASH_last_DASH_time,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)))),cljs.core.list(cljs.core.cst$sym$defn,cljs.core.cst$sym$ps_DASH_check_DASH_for_DASH_timeout_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$timeout], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$ps_DASH_last_DASH_time)),cljs.core.cst$sym$timeout),cljs.core.list(cljs.core.cst$sym$throw,cljs.core.list(cljs.core.cst$sym$js_SLASH_Error$,"Execution timed out."))))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$set_BANG_,cljs.core.cst$sym$_STAR_print_DASH_err_DASH_fn_STAR_,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null))),(new cljs.core.List(null,cljs.core.cst$sym$ns,(new cljs.core.List(null,cljs.core.deref(_STAR_current_ns),null,(1),null)),(2),null))], null)], 0)));
var timeout_cb = ((function (forms__$1,init_forms,map__14319,map__14319__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms(eval_soup.core.add_timeouts_if_necessary(timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__14319,map__14319__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__14319,map__14319__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms((cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.cljs$core$IFn$_invoke$arity$2(eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__14319,map__14319__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms(init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;

