// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__6933){
var vec__6934 = p__6933;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6934,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__6937 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5457__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__6940 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6940,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6940,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6940,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6940,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6940,(4),null);
var vec__6943 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3936__auto__ = source;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3936__auto__ = line;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3936__auto__ = col;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3936__auto__ = name;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__6946 = segmap;
var map__6946__$1 = ((((!((map__6946 == null)))?(((((map__6946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6946):map__6946);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6946__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6946__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6946__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6946__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6946__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6946,map__6946__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6946,map__6946__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6946,map__6946__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__6946,map__6946__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6946,map__6946__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__6946,map__6946__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__6949 = arguments.length;
switch (G__6949) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__6950 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__6954 = cljs.core.next(segs__$1);
var G__6955 = nrelseg;
var G__6956 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__6954;
relseg__$1 = G__6955;
result__$1 = G__6956;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6950,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6950,(1),null);
var G__6957 = (gline + (1));
var G__6958 = cljs.core.next(lines__$1);
var G__6959 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__6960 = result__$1;
gline = G__6957;
lines__$1 = G__6958;
relseg = G__6959;
result = G__6960;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__6962 = segmap;
var map__6962__$1 = ((((!((map__6962 == null)))?(((((map__6962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6962):map__6962);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6962,map__6962__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6962,map__6962__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__6961_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__6961_SHARP_,d__$1);
});})(map__6962,map__6962__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6962,map__6962__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__6965 = arguments.length;
switch (G__6965) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__6966 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__6970 = cljs.core.next(segs__$1);
var G__6971 = nrelseg;
var G__6972 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__6970;
relseg__$1 = G__6971;
result__$1 = G__6972;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(1),null);
var G__6973 = (gline + (1));
var G__6974 = cljs.core.next(lines__$1);
var G__6975 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__6976 = result__$1;
gline = G__6973;
lines__$1 = G__6974;
relseg = G__6975;
result = G__6976;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__6977){
var vec__6978 = p__6977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6978,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6978,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6978,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6978,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6978,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__6981){
var vec__6982 = p__6981;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6982,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6982,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6982,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6982,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6982,(4),null);
var seg = vec__6982;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__6982,gcol,sidx,line,col,name,seg,relseg){
return (function (p__6985){
var vec__6986 = p__6985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3936__auto__ = name;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__6982,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__3936__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__6992 = cljs.core.seq(infos);
var chunk__6993 = null;
var count__6994 = (0);
var i__6995 = (0);
while(true){
if((i__6995 < count__6994)){
var info = chunk__6993.cljs$core$IIndexed$_nth$arity$2(null,i__6995);
var segv_7077 = info__GT_segv(info,source_idx,line,col);
var gline_7078 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_7079 = cljs.core.count(cljs.core.deref(lines));
if((gline_7078 > (lc_7079 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__6992,chunk__6993,count__6994,i__6995,segv_7077,gline_7078,lc_7079,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_7078 - (lc_7079 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_7077], null));
});})(seq__6992,chunk__6993,count__6994,i__6995,segv_7077,gline_7078,lc_7079,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__6992,chunk__6993,count__6994,i__6995,segv_7077,gline_7078,lc_7079,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7078], null),cljs.core.conj,segv_7077);
});})(seq__6992,chunk__6993,count__6994,i__6995,segv_7077,gline_7078,lc_7079,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__7080 = seq__6992;
var G__7081 = chunk__6993;
var G__7082 = count__6994;
var G__7083 = (i__6995 + (1));
seq__6992 = G__7080;
chunk__6993 = G__7081;
count__6994 = G__7082;
i__6995 = G__7083;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6992);
if(temp__5457__auto__){
var seq__6992__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6992__$1)){
var c__4337__auto__ = cljs.core.chunk_first(seq__6992__$1);
var G__7084 = cljs.core.chunk_rest(seq__6992__$1);
var G__7085 = c__4337__auto__;
var G__7086 = cljs.core.count(c__4337__auto__);
var G__7087 = (0);
seq__6992 = G__7084;
chunk__6993 = G__7085;
count__6994 = G__7086;
i__6995 = G__7087;
continue;
} else {
var info = cljs.core.first(seq__6992__$1);
var segv_7088 = info__GT_segv(info,source_idx,line,col);
var gline_7089 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_7090 = cljs.core.count(cljs.core.deref(lines));
if((gline_7089 > (lc_7090 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__6992,chunk__6993,count__6994,i__6995,segv_7088,gline_7089,lc_7090,info,seq__6992__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_7089 - (lc_7090 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_7088], null));
});})(seq__6992,chunk__6993,count__6994,i__6995,segv_7088,gline_7089,lc_7090,info,seq__6992__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__6992,chunk__6993,count__6994,i__6995,segv_7088,gline_7089,lc_7090,info,seq__6992__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7089], null),cljs.core.conj,segv_7088);
});})(seq__6992,chunk__6993,count__6994,i__6995,segv_7088,gline_7089,lc_7090,info,seq__6992__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__7091 = cljs.core.next(seq__6992__$1);
var G__7092 = null;
var G__7093 = (0);
var G__7094 = (0);
seq__6992 = G__7091;
chunk__6993 = G__7092;
count__6994 = G__7093;
i__6995 = G__7094;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__6996_7095 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__6997_7096 = null;
var count__6998_7097 = (0);
var i__6999_7098 = (0);
while(true){
if((i__6999_7098 < count__6998_7097)){
var vec__7000_7099 = chunk__6997_7096.cljs$core$IIndexed$_nth$arity$2(null,i__6999_7098);
var source_idx_7100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7000_7099,(0),null);
var vec__7003_7101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7000_7099,(1),null);
var __7102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_7101,(0),null);
var lines_7103__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_7101,(1),null);
var seq__7006_7104 = cljs.core.seq(lines_7103__$1);
var chunk__7007_7105 = null;
var count__7008_7106 = (0);
var i__7009_7107 = (0);
while(true){
if((i__7009_7107 < count__7008_7106)){
var vec__7010_7108 = chunk__7007_7105.cljs$core$IIndexed$_nth$arity$2(null,i__7009_7107);
var line_7109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7010_7108,(0),null);
var cols_7110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7010_7108,(1),null);
var seq__7013_7111 = cljs.core.seq(cols_7110);
var chunk__7014_7112 = null;
var count__7015_7113 = (0);
var i__7016_7114 = (0);
while(true){
if((i__7016_7114 < count__7015_7113)){
var vec__7017_7115 = chunk__7014_7112.cljs$core$IIndexed$_nth$arity$2(null,i__7016_7114);
var col_7116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7017_7115,(0),null);
var infos_7117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7017_7115,(1),null);
encode_cols(infos_7117,source_idx_7100,line_7109,col_7116);


var G__7118 = seq__7013_7111;
var G__7119 = chunk__7014_7112;
var G__7120 = count__7015_7113;
var G__7121 = (i__7016_7114 + (1));
seq__7013_7111 = G__7118;
chunk__7014_7112 = G__7119;
count__7015_7113 = G__7120;
i__7016_7114 = G__7121;
continue;
} else {
var temp__5457__auto___7122 = cljs.core.seq(seq__7013_7111);
if(temp__5457__auto___7122){
var seq__7013_7123__$1 = temp__5457__auto___7122;
if(cljs.core.chunked_seq_QMARK_(seq__7013_7123__$1)){
var c__4337__auto___7124 = cljs.core.chunk_first(seq__7013_7123__$1);
var G__7125 = cljs.core.chunk_rest(seq__7013_7123__$1);
var G__7126 = c__4337__auto___7124;
var G__7127 = cljs.core.count(c__4337__auto___7124);
var G__7128 = (0);
seq__7013_7111 = G__7125;
chunk__7014_7112 = G__7126;
count__7015_7113 = G__7127;
i__7016_7114 = G__7128;
continue;
} else {
var vec__7020_7129 = cljs.core.first(seq__7013_7123__$1);
var col_7130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7020_7129,(0),null);
var infos_7131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7020_7129,(1),null);
encode_cols(infos_7131,source_idx_7100,line_7109,col_7130);


var G__7132 = cljs.core.next(seq__7013_7123__$1);
var G__7133 = null;
var G__7134 = (0);
var G__7135 = (0);
seq__7013_7111 = G__7132;
chunk__7014_7112 = G__7133;
count__7015_7113 = G__7134;
i__7016_7114 = G__7135;
continue;
}
} else {
}
}
break;
}


var G__7136 = seq__7006_7104;
var G__7137 = chunk__7007_7105;
var G__7138 = count__7008_7106;
var G__7139 = (i__7009_7107 + (1));
seq__7006_7104 = G__7136;
chunk__7007_7105 = G__7137;
count__7008_7106 = G__7138;
i__7009_7107 = G__7139;
continue;
} else {
var temp__5457__auto___7140 = cljs.core.seq(seq__7006_7104);
if(temp__5457__auto___7140){
var seq__7006_7141__$1 = temp__5457__auto___7140;
if(cljs.core.chunked_seq_QMARK_(seq__7006_7141__$1)){
var c__4337__auto___7142 = cljs.core.chunk_first(seq__7006_7141__$1);
var G__7143 = cljs.core.chunk_rest(seq__7006_7141__$1);
var G__7144 = c__4337__auto___7142;
var G__7145 = cljs.core.count(c__4337__auto___7142);
var G__7146 = (0);
seq__7006_7104 = G__7143;
chunk__7007_7105 = G__7144;
count__7008_7106 = G__7145;
i__7009_7107 = G__7146;
continue;
} else {
var vec__7023_7147 = cljs.core.first(seq__7006_7141__$1);
var line_7148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7023_7147,(0),null);
var cols_7149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7023_7147,(1),null);
var seq__7026_7150 = cljs.core.seq(cols_7149);
var chunk__7027_7151 = null;
var count__7028_7152 = (0);
var i__7029_7153 = (0);
while(true){
if((i__7029_7153 < count__7028_7152)){
var vec__7030_7154 = chunk__7027_7151.cljs$core$IIndexed$_nth$arity$2(null,i__7029_7153);
var col_7155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7030_7154,(0),null);
var infos_7156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7030_7154,(1),null);
encode_cols(infos_7156,source_idx_7100,line_7148,col_7155);


var G__7157 = seq__7026_7150;
var G__7158 = chunk__7027_7151;
var G__7159 = count__7028_7152;
var G__7160 = (i__7029_7153 + (1));
seq__7026_7150 = G__7157;
chunk__7027_7151 = G__7158;
count__7028_7152 = G__7159;
i__7029_7153 = G__7160;
continue;
} else {
var temp__5457__auto___7161__$1 = cljs.core.seq(seq__7026_7150);
if(temp__5457__auto___7161__$1){
var seq__7026_7162__$1 = temp__5457__auto___7161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7026_7162__$1)){
var c__4337__auto___7163 = cljs.core.chunk_first(seq__7026_7162__$1);
var G__7164 = cljs.core.chunk_rest(seq__7026_7162__$1);
var G__7165 = c__4337__auto___7163;
var G__7166 = cljs.core.count(c__4337__auto___7163);
var G__7167 = (0);
seq__7026_7150 = G__7164;
chunk__7027_7151 = G__7165;
count__7028_7152 = G__7166;
i__7029_7153 = G__7167;
continue;
} else {
var vec__7033_7168 = cljs.core.first(seq__7026_7162__$1);
var col_7169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7033_7168,(0),null);
var infos_7170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7033_7168,(1),null);
encode_cols(infos_7170,source_idx_7100,line_7148,col_7169);


var G__7171 = cljs.core.next(seq__7026_7162__$1);
var G__7172 = null;
var G__7173 = (0);
var G__7174 = (0);
seq__7026_7150 = G__7171;
chunk__7027_7151 = G__7172;
count__7028_7152 = G__7173;
i__7029_7153 = G__7174;
continue;
}
} else {
}
}
break;
}


var G__7175 = cljs.core.next(seq__7006_7141__$1);
var G__7176 = null;
var G__7177 = (0);
var G__7178 = (0);
seq__7006_7104 = G__7175;
chunk__7007_7105 = G__7176;
count__7008_7106 = G__7177;
i__7009_7107 = G__7178;
continue;
}
} else {
}
}
break;
}


var G__7179 = seq__6996_7095;
var G__7180 = chunk__6997_7096;
var G__7181 = count__6998_7097;
var G__7182 = (i__6999_7098 + (1));
seq__6996_7095 = G__7179;
chunk__6997_7096 = G__7180;
count__6998_7097 = G__7181;
i__6999_7098 = G__7182;
continue;
} else {
var temp__5457__auto___7183 = cljs.core.seq(seq__6996_7095);
if(temp__5457__auto___7183){
var seq__6996_7184__$1 = temp__5457__auto___7183;
if(cljs.core.chunked_seq_QMARK_(seq__6996_7184__$1)){
var c__4337__auto___7185 = cljs.core.chunk_first(seq__6996_7184__$1);
var G__7186 = cljs.core.chunk_rest(seq__6996_7184__$1);
var G__7187 = c__4337__auto___7185;
var G__7188 = cljs.core.count(c__4337__auto___7185);
var G__7189 = (0);
seq__6996_7095 = G__7186;
chunk__6997_7096 = G__7187;
count__6998_7097 = G__7188;
i__6999_7098 = G__7189;
continue;
} else {
var vec__7036_7190 = cljs.core.first(seq__6996_7184__$1);
var source_idx_7191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7036_7190,(0),null);
var vec__7039_7192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7036_7190,(1),null);
var __7193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7039_7192,(0),null);
var lines_7194__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7039_7192,(1),null);
var seq__7042_7195 = cljs.core.seq(lines_7194__$1);
var chunk__7043_7196 = null;
var count__7044_7197 = (0);
var i__7045_7198 = (0);
while(true){
if((i__7045_7198 < count__7044_7197)){
var vec__7046_7199 = chunk__7043_7196.cljs$core$IIndexed$_nth$arity$2(null,i__7045_7198);
var line_7200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7046_7199,(0),null);
var cols_7201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7046_7199,(1),null);
var seq__7049_7202 = cljs.core.seq(cols_7201);
var chunk__7050_7203 = null;
var count__7051_7204 = (0);
var i__7052_7205 = (0);
while(true){
if((i__7052_7205 < count__7051_7204)){
var vec__7053_7206 = chunk__7050_7203.cljs$core$IIndexed$_nth$arity$2(null,i__7052_7205);
var col_7207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7053_7206,(0),null);
var infos_7208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7053_7206,(1),null);
encode_cols(infos_7208,source_idx_7191,line_7200,col_7207);


var G__7209 = seq__7049_7202;
var G__7210 = chunk__7050_7203;
var G__7211 = count__7051_7204;
var G__7212 = (i__7052_7205 + (1));
seq__7049_7202 = G__7209;
chunk__7050_7203 = G__7210;
count__7051_7204 = G__7211;
i__7052_7205 = G__7212;
continue;
} else {
var temp__5457__auto___7213__$1 = cljs.core.seq(seq__7049_7202);
if(temp__5457__auto___7213__$1){
var seq__7049_7214__$1 = temp__5457__auto___7213__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7049_7214__$1)){
var c__4337__auto___7215 = cljs.core.chunk_first(seq__7049_7214__$1);
var G__7216 = cljs.core.chunk_rest(seq__7049_7214__$1);
var G__7217 = c__4337__auto___7215;
var G__7218 = cljs.core.count(c__4337__auto___7215);
var G__7219 = (0);
seq__7049_7202 = G__7216;
chunk__7050_7203 = G__7217;
count__7051_7204 = G__7218;
i__7052_7205 = G__7219;
continue;
} else {
var vec__7056_7220 = cljs.core.first(seq__7049_7214__$1);
var col_7221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7056_7220,(0),null);
var infos_7222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7056_7220,(1),null);
encode_cols(infos_7222,source_idx_7191,line_7200,col_7221);


var G__7223 = cljs.core.next(seq__7049_7214__$1);
var G__7224 = null;
var G__7225 = (0);
var G__7226 = (0);
seq__7049_7202 = G__7223;
chunk__7050_7203 = G__7224;
count__7051_7204 = G__7225;
i__7052_7205 = G__7226;
continue;
}
} else {
}
}
break;
}


var G__7227 = seq__7042_7195;
var G__7228 = chunk__7043_7196;
var G__7229 = count__7044_7197;
var G__7230 = (i__7045_7198 + (1));
seq__7042_7195 = G__7227;
chunk__7043_7196 = G__7228;
count__7044_7197 = G__7229;
i__7045_7198 = G__7230;
continue;
} else {
var temp__5457__auto___7231__$1 = cljs.core.seq(seq__7042_7195);
if(temp__5457__auto___7231__$1){
var seq__7042_7232__$1 = temp__5457__auto___7231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7042_7232__$1)){
var c__4337__auto___7233 = cljs.core.chunk_first(seq__7042_7232__$1);
var G__7234 = cljs.core.chunk_rest(seq__7042_7232__$1);
var G__7235 = c__4337__auto___7233;
var G__7236 = cljs.core.count(c__4337__auto___7233);
var G__7237 = (0);
seq__7042_7195 = G__7234;
chunk__7043_7196 = G__7235;
count__7044_7197 = G__7236;
i__7045_7198 = G__7237;
continue;
} else {
var vec__7059_7238 = cljs.core.first(seq__7042_7232__$1);
var line_7239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7059_7238,(0),null);
var cols_7240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7059_7238,(1),null);
var seq__7062_7241 = cljs.core.seq(cols_7240);
var chunk__7063_7242 = null;
var count__7064_7243 = (0);
var i__7065_7244 = (0);
while(true){
if((i__7065_7244 < count__7064_7243)){
var vec__7066_7245 = chunk__7063_7242.cljs$core$IIndexed$_nth$arity$2(null,i__7065_7244);
var col_7246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7066_7245,(0),null);
var infos_7247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7066_7245,(1),null);
encode_cols(infos_7247,source_idx_7191,line_7239,col_7246);


var G__7248 = seq__7062_7241;
var G__7249 = chunk__7063_7242;
var G__7250 = count__7064_7243;
var G__7251 = (i__7065_7244 + (1));
seq__7062_7241 = G__7248;
chunk__7063_7242 = G__7249;
count__7064_7243 = G__7250;
i__7065_7244 = G__7251;
continue;
} else {
var temp__5457__auto___7252__$2 = cljs.core.seq(seq__7062_7241);
if(temp__5457__auto___7252__$2){
var seq__7062_7253__$1 = temp__5457__auto___7252__$2;
if(cljs.core.chunked_seq_QMARK_(seq__7062_7253__$1)){
var c__4337__auto___7254 = cljs.core.chunk_first(seq__7062_7253__$1);
var G__7255 = cljs.core.chunk_rest(seq__7062_7253__$1);
var G__7256 = c__4337__auto___7254;
var G__7257 = cljs.core.count(c__4337__auto___7254);
var G__7258 = (0);
seq__7062_7241 = G__7255;
chunk__7063_7242 = G__7256;
count__7064_7243 = G__7257;
i__7065_7244 = G__7258;
continue;
} else {
var vec__7069_7259 = cljs.core.first(seq__7062_7253__$1);
var col_7260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7069_7259,(0),null);
var infos_7261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7069_7259,(1),null);
encode_cols(infos_7261,source_idx_7191,line_7239,col_7260);


var G__7262 = cljs.core.next(seq__7062_7253__$1);
var G__7263 = null;
var G__7264 = (0);
var G__7265 = (0);
seq__7062_7241 = G__7262;
chunk__7063_7242 = G__7263;
count__7064_7243 = G__7264;
i__7065_7244 = G__7265;
continue;
}
} else {
}
}
break;
}


var G__7266 = cljs.core.next(seq__7042_7232__$1);
var G__7267 = null;
var G__7268 = (0);
var G__7269 = (0);
seq__7042_7195 = G__7266;
chunk__7043_7196 = G__7267;
count__7044_7197 = G__7268;
i__7045_7198 = G__7269;
continue;
}
} else {
}
}
break;
}


var G__7270 = cljs.core.next(seq__6996_7184__$1);
var G__7271 = null;
var G__7272 = (0);
var G__7273 = (0);
seq__6996_7095 = G__7270;
chunk__6997_7096 = G__7271;
count__6998_7097 = G__7272;
i__6999_7098 = G__7273;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__7072 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6989_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6989_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6990_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__6990_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6991_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__6991_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__7073 = G__7072;
var G__7074_7274 = G__7073;
var G__7075_7275 = "sourcesContent";
var G__7076_7276 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__7074_7274,G__7075_7275,G__7076_7276);

return G__7073;
} else {
return G__7072;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__7277 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7277,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7277,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__7280 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7280,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7280,(1),null);
var G__7286 = cljs.core.next(col_map_seq);
var G__7287 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__7280,col,infos,vec__7277,line,col_map){
return (function (v,p__7283){
var map__7284 = p__7283;
var map__7284__$1 = ((((!((map__7284 == null)))?(((((map__7284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7284):map__7284);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7284__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7284__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__7280,col,infos,vec__7277,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__7286;
new_cols = G__7287;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__7288 = cljs.core.next(line_map_seq);
var G__7289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__7288;
new_lines = G__7289;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__7290_7352 = cljs.core.seq(reverse_map);
var chunk__7291_7353 = null;
var count__7292_7354 = (0);
var i__7293_7355 = (0);
while(true){
if((i__7293_7355 < count__7292_7354)){
var vec__7294_7356 = chunk__7291_7353.cljs$core$IIndexed$_nth$arity$2(null,i__7293_7355);
var line_7357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7294_7356,(0),null);
var columns_7358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7294_7356,(1),null);
var seq__7297_7359 = cljs.core.seq(columns_7358);
var chunk__7298_7360 = null;
var count__7299_7361 = (0);
var i__7300_7362 = (0);
while(true){
if((i__7300_7362 < count__7299_7361)){
var vec__7301_7363 = chunk__7298_7360.cljs$core$IIndexed$_nth$arity$2(null,i__7300_7362);
var column_7364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7301_7363,(0),null);
var column_info_7365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7301_7363,(1),null);
var seq__7304_7366 = cljs.core.seq(column_info_7365);
var chunk__7305_7367 = null;
var count__7306_7368 = (0);
var i__7307_7369 = (0);
while(true){
if((i__7307_7369 < count__7306_7368)){
var map__7308_7370 = chunk__7305_7367.cljs$core$IIndexed$_nth$arity$2(null,i__7307_7369);
var map__7308_7371__$1 = ((((!((map__7308_7370 == null)))?(((((map__7308_7370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7308_7370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7308_7370):map__7308_7370);
var gline_7372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7308_7371__$1,cljs.core.cst$kw$gline);
var gcol_7373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7308_7371__$1,cljs.core.cst$kw$gcol);
var name_7374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7308_7371__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7372], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7304_7366,chunk__7305_7367,count__7306_7368,i__7307_7369,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7308_7370,map__7308_7371__$1,gline_7372,gcol_7373,name_7374,vec__7301_7363,column_7364,column_info_7365,vec__7294_7356,line_7357,columns_7358,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7373], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7357,cljs.core.cst$kw$col,column_7364,cljs.core.cst$kw$name,name_7374], null));
});})(seq__7304_7366,chunk__7305_7367,count__7306_7368,i__7307_7369,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7308_7370,map__7308_7371__$1,gline_7372,gcol_7373,name_7374,vec__7301_7363,column_7364,column_info_7365,vec__7294_7356,line_7357,columns_7358,inverted))
,cljs.core.sorted_map()));


var G__7375 = seq__7304_7366;
var G__7376 = chunk__7305_7367;
var G__7377 = count__7306_7368;
var G__7378 = (i__7307_7369 + (1));
seq__7304_7366 = G__7375;
chunk__7305_7367 = G__7376;
count__7306_7368 = G__7377;
i__7307_7369 = G__7378;
continue;
} else {
var temp__5457__auto___7379 = cljs.core.seq(seq__7304_7366);
if(temp__5457__auto___7379){
var seq__7304_7380__$1 = temp__5457__auto___7379;
if(cljs.core.chunked_seq_QMARK_(seq__7304_7380__$1)){
var c__4337__auto___7381 = cljs.core.chunk_first(seq__7304_7380__$1);
var G__7382 = cljs.core.chunk_rest(seq__7304_7380__$1);
var G__7383 = c__4337__auto___7381;
var G__7384 = cljs.core.count(c__4337__auto___7381);
var G__7385 = (0);
seq__7304_7366 = G__7382;
chunk__7305_7367 = G__7383;
count__7306_7368 = G__7384;
i__7307_7369 = G__7385;
continue;
} else {
var map__7310_7386 = cljs.core.first(seq__7304_7380__$1);
var map__7310_7387__$1 = ((((!((map__7310_7386 == null)))?(((((map__7310_7386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7310_7386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7310_7386):map__7310_7386);
var gline_7388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7310_7387__$1,cljs.core.cst$kw$gline);
var gcol_7389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7310_7387__$1,cljs.core.cst$kw$gcol);
var name_7390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7310_7387__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7388], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7304_7366,chunk__7305_7367,count__7306_7368,i__7307_7369,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7310_7386,map__7310_7387__$1,gline_7388,gcol_7389,name_7390,seq__7304_7380__$1,temp__5457__auto___7379,vec__7301_7363,column_7364,column_info_7365,vec__7294_7356,line_7357,columns_7358,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7389], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7357,cljs.core.cst$kw$col,column_7364,cljs.core.cst$kw$name,name_7390], null));
});})(seq__7304_7366,chunk__7305_7367,count__7306_7368,i__7307_7369,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7310_7386,map__7310_7387__$1,gline_7388,gcol_7389,name_7390,seq__7304_7380__$1,temp__5457__auto___7379,vec__7301_7363,column_7364,column_info_7365,vec__7294_7356,line_7357,columns_7358,inverted))
,cljs.core.sorted_map()));


var G__7391 = cljs.core.next(seq__7304_7380__$1);
var G__7392 = null;
var G__7393 = (0);
var G__7394 = (0);
seq__7304_7366 = G__7391;
chunk__7305_7367 = G__7392;
count__7306_7368 = G__7393;
i__7307_7369 = G__7394;
continue;
}
} else {
}
}
break;
}


var G__7395 = seq__7297_7359;
var G__7396 = chunk__7298_7360;
var G__7397 = count__7299_7361;
var G__7398 = (i__7300_7362 + (1));
seq__7297_7359 = G__7395;
chunk__7298_7360 = G__7396;
count__7299_7361 = G__7397;
i__7300_7362 = G__7398;
continue;
} else {
var temp__5457__auto___7399 = cljs.core.seq(seq__7297_7359);
if(temp__5457__auto___7399){
var seq__7297_7400__$1 = temp__5457__auto___7399;
if(cljs.core.chunked_seq_QMARK_(seq__7297_7400__$1)){
var c__4337__auto___7401 = cljs.core.chunk_first(seq__7297_7400__$1);
var G__7402 = cljs.core.chunk_rest(seq__7297_7400__$1);
var G__7403 = c__4337__auto___7401;
var G__7404 = cljs.core.count(c__4337__auto___7401);
var G__7405 = (0);
seq__7297_7359 = G__7402;
chunk__7298_7360 = G__7403;
count__7299_7361 = G__7404;
i__7300_7362 = G__7405;
continue;
} else {
var vec__7312_7406 = cljs.core.first(seq__7297_7400__$1);
var column_7407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7312_7406,(0),null);
var column_info_7408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7312_7406,(1),null);
var seq__7315_7409 = cljs.core.seq(column_info_7408);
var chunk__7316_7410 = null;
var count__7317_7411 = (0);
var i__7318_7412 = (0);
while(true){
if((i__7318_7412 < count__7317_7411)){
var map__7319_7413 = chunk__7316_7410.cljs$core$IIndexed$_nth$arity$2(null,i__7318_7412);
var map__7319_7414__$1 = ((((!((map__7319_7413 == null)))?(((((map__7319_7413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7319_7413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7319_7413):map__7319_7413);
var gline_7415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7319_7414__$1,cljs.core.cst$kw$gline);
var gcol_7416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7319_7414__$1,cljs.core.cst$kw$gcol);
var name_7417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7319_7414__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7415], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7315_7409,chunk__7316_7410,count__7317_7411,i__7318_7412,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7319_7413,map__7319_7414__$1,gline_7415,gcol_7416,name_7417,vec__7312_7406,column_7407,column_info_7408,seq__7297_7400__$1,temp__5457__auto___7399,vec__7294_7356,line_7357,columns_7358,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7416], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7357,cljs.core.cst$kw$col,column_7407,cljs.core.cst$kw$name,name_7417], null));
});})(seq__7315_7409,chunk__7316_7410,count__7317_7411,i__7318_7412,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7319_7413,map__7319_7414__$1,gline_7415,gcol_7416,name_7417,vec__7312_7406,column_7407,column_info_7408,seq__7297_7400__$1,temp__5457__auto___7399,vec__7294_7356,line_7357,columns_7358,inverted))
,cljs.core.sorted_map()));


var G__7418 = seq__7315_7409;
var G__7419 = chunk__7316_7410;
var G__7420 = count__7317_7411;
var G__7421 = (i__7318_7412 + (1));
seq__7315_7409 = G__7418;
chunk__7316_7410 = G__7419;
count__7317_7411 = G__7420;
i__7318_7412 = G__7421;
continue;
} else {
var temp__5457__auto___7422__$1 = cljs.core.seq(seq__7315_7409);
if(temp__5457__auto___7422__$1){
var seq__7315_7423__$1 = temp__5457__auto___7422__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7315_7423__$1)){
var c__4337__auto___7424 = cljs.core.chunk_first(seq__7315_7423__$1);
var G__7425 = cljs.core.chunk_rest(seq__7315_7423__$1);
var G__7426 = c__4337__auto___7424;
var G__7427 = cljs.core.count(c__4337__auto___7424);
var G__7428 = (0);
seq__7315_7409 = G__7425;
chunk__7316_7410 = G__7426;
count__7317_7411 = G__7427;
i__7318_7412 = G__7428;
continue;
} else {
var map__7321_7429 = cljs.core.first(seq__7315_7423__$1);
var map__7321_7430__$1 = ((((!((map__7321_7429 == null)))?(((((map__7321_7429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7321_7429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7321_7429):map__7321_7429);
var gline_7431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7321_7430__$1,cljs.core.cst$kw$gline);
var gcol_7432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7321_7430__$1,cljs.core.cst$kw$gcol);
var name_7433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7321_7430__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7431], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7315_7409,chunk__7316_7410,count__7317_7411,i__7318_7412,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7321_7429,map__7321_7430__$1,gline_7431,gcol_7432,name_7433,seq__7315_7423__$1,temp__5457__auto___7422__$1,vec__7312_7406,column_7407,column_info_7408,seq__7297_7400__$1,temp__5457__auto___7399,vec__7294_7356,line_7357,columns_7358,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7432], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7357,cljs.core.cst$kw$col,column_7407,cljs.core.cst$kw$name,name_7433], null));
});})(seq__7315_7409,chunk__7316_7410,count__7317_7411,i__7318_7412,seq__7297_7359,chunk__7298_7360,count__7299_7361,i__7300_7362,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7321_7429,map__7321_7430__$1,gline_7431,gcol_7432,name_7433,seq__7315_7423__$1,temp__5457__auto___7422__$1,vec__7312_7406,column_7407,column_info_7408,seq__7297_7400__$1,temp__5457__auto___7399,vec__7294_7356,line_7357,columns_7358,inverted))
,cljs.core.sorted_map()));


var G__7434 = cljs.core.next(seq__7315_7423__$1);
var G__7435 = null;
var G__7436 = (0);
var G__7437 = (0);
seq__7315_7409 = G__7434;
chunk__7316_7410 = G__7435;
count__7317_7411 = G__7436;
i__7318_7412 = G__7437;
continue;
}
} else {
}
}
break;
}


var G__7438 = cljs.core.next(seq__7297_7400__$1);
var G__7439 = null;
var G__7440 = (0);
var G__7441 = (0);
seq__7297_7359 = G__7438;
chunk__7298_7360 = G__7439;
count__7299_7361 = G__7440;
i__7300_7362 = G__7441;
continue;
}
} else {
}
}
break;
}


var G__7442 = seq__7290_7352;
var G__7443 = chunk__7291_7353;
var G__7444 = count__7292_7354;
var G__7445 = (i__7293_7355 + (1));
seq__7290_7352 = G__7442;
chunk__7291_7353 = G__7443;
count__7292_7354 = G__7444;
i__7293_7355 = G__7445;
continue;
} else {
var temp__5457__auto___7446 = cljs.core.seq(seq__7290_7352);
if(temp__5457__auto___7446){
var seq__7290_7447__$1 = temp__5457__auto___7446;
if(cljs.core.chunked_seq_QMARK_(seq__7290_7447__$1)){
var c__4337__auto___7448 = cljs.core.chunk_first(seq__7290_7447__$1);
var G__7449 = cljs.core.chunk_rest(seq__7290_7447__$1);
var G__7450 = c__4337__auto___7448;
var G__7451 = cljs.core.count(c__4337__auto___7448);
var G__7452 = (0);
seq__7290_7352 = G__7449;
chunk__7291_7353 = G__7450;
count__7292_7354 = G__7451;
i__7293_7355 = G__7452;
continue;
} else {
var vec__7323_7453 = cljs.core.first(seq__7290_7447__$1);
var line_7454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7323_7453,(0),null);
var columns_7455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7323_7453,(1),null);
var seq__7326_7456 = cljs.core.seq(columns_7455);
var chunk__7327_7457 = null;
var count__7328_7458 = (0);
var i__7329_7459 = (0);
while(true){
if((i__7329_7459 < count__7328_7458)){
var vec__7330_7460 = chunk__7327_7457.cljs$core$IIndexed$_nth$arity$2(null,i__7329_7459);
var column_7461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7330_7460,(0),null);
var column_info_7462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7330_7460,(1),null);
var seq__7333_7463 = cljs.core.seq(column_info_7462);
var chunk__7334_7464 = null;
var count__7335_7465 = (0);
var i__7336_7466 = (0);
while(true){
if((i__7336_7466 < count__7335_7465)){
var map__7337_7467 = chunk__7334_7464.cljs$core$IIndexed$_nth$arity$2(null,i__7336_7466);
var map__7337_7468__$1 = ((((!((map__7337_7467 == null)))?(((((map__7337_7467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7337_7467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7337_7467):map__7337_7467);
var gline_7469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337_7468__$1,cljs.core.cst$kw$gline);
var gcol_7470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337_7468__$1,cljs.core.cst$kw$gcol);
var name_7471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337_7468__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7469], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7333_7463,chunk__7334_7464,count__7335_7465,i__7336_7466,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7337_7467,map__7337_7468__$1,gline_7469,gcol_7470,name_7471,vec__7330_7460,column_7461,column_info_7462,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7470], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7454,cljs.core.cst$kw$col,column_7461,cljs.core.cst$kw$name,name_7471], null));
});})(seq__7333_7463,chunk__7334_7464,count__7335_7465,i__7336_7466,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7337_7467,map__7337_7468__$1,gline_7469,gcol_7470,name_7471,vec__7330_7460,column_7461,column_info_7462,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted))
,cljs.core.sorted_map()));


var G__7472 = seq__7333_7463;
var G__7473 = chunk__7334_7464;
var G__7474 = count__7335_7465;
var G__7475 = (i__7336_7466 + (1));
seq__7333_7463 = G__7472;
chunk__7334_7464 = G__7473;
count__7335_7465 = G__7474;
i__7336_7466 = G__7475;
continue;
} else {
var temp__5457__auto___7476__$1 = cljs.core.seq(seq__7333_7463);
if(temp__5457__auto___7476__$1){
var seq__7333_7477__$1 = temp__5457__auto___7476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7333_7477__$1)){
var c__4337__auto___7478 = cljs.core.chunk_first(seq__7333_7477__$1);
var G__7479 = cljs.core.chunk_rest(seq__7333_7477__$1);
var G__7480 = c__4337__auto___7478;
var G__7481 = cljs.core.count(c__4337__auto___7478);
var G__7482 = (0);
seq__7333_7463 = G__7479;
chunk__7334_7464 = G__7480;
count__7335_7465 = G__7481;
i__7336_7466 = G__7482;
continue;
} else {
var map__7339_7483 = cljs.core.first(seq__7333_7477__$1);
var map__7339_7484__$1 = ((((!((map__7339_7483 == null)))?(((((map__7339_7483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7339_7483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7339_7483):map__7339_7483);
var gline_7485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7339_7484__$1,cljs.core.cst$kw$gline);
var gcol_7486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7339_7484__$1,cljs.core.cst$kw$gcol);
var name_7487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7339_7484__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7485], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7333_7463,chunk__7334_7464,count__7335_7465,i__7336_7466,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7339_7483,map__7339_7484__$1,gline_7485,gcol_7486,name_7487,seq__7333_7477__$1,temp__5457__auto___7476__$1,vec__7330_7460,column_7461,column_info_7462,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7486], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7454,cljs.core.cst$kw$col,column_7461,cljs.core.cst$kw$name,name_7487], null));
});})(seq__7333_7463,chunk__7334_7464,count__7335_7465,i__7336_7466,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7339_7483,map__7339_7484__$1,gline_7485,gcol_7486,name_7487,seq__7333_7477__$1,temp__5457__auto___7476__$1,vec__7330_7460,column_7461,column_info_7462,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted))
,cljs.core.sorted_map()));


var G__7488 = cljs.core.next(seq__7333_7477__$1);
var G__7489 = null;
var G__7490 = (0);
var G__7491 = (0);
seq__7333_7463 = G__7488;
chunk__7334_7464 = G__7489;
count__7335_7465 = G__7490;
i__7336_7466 = G__7491;
continue;
}
} else {
}
}
break;
}


var G__7492 = seq__7326_7456;
var G__7493 = chunk__7327_7457;
var G__7494 = count__7328_7458;
var G__7495 = (i__7329_7459 + (1));
seq__7326_7456 = G__7492;
chunk__7327_7457 = G__7493;
count__7328_7458 = G__7494;
i__7329_7459 = G__7495;
continue;
} else {
var temp__5457__auto___7496__$1 = cljs.core.seq(seq__7326_7456);
if(temp__5457__auto___7496__$1){
var seq__7326_7497__$1 = temp__5457__auto___7496__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7326_7497__$1)){
var c__4337__auto___7498 = cljs.core.chunk_first(seq__7326_7497__$1);
var G__7499 = cljs.core.chunk_rest(seq__7326_7497__$1);
var G__7500 = c__4337__auto___7498;
var G__7501 = cljs.core.count(c__4337__auto___7498);
var G__7502 = (0);
seq__7326_7456 = G__7499;
chunk__7327_7457 = G__7500;
count__7328_7458 = G__7501;
i__7329_7459 = G__7502;
continue;
} else {
var vec__7341_7503 = cljs.core.first(seq__7326_7497__$1);
var column_7504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7341_7503,(0),null);
var column_info_7505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7341_7503,(1),null);
var seq__7344_7506 = cljs.core.seq(column_info_7505);
var chunk__7345_7507 = null;
var count__7346_7508 = (0);
var i__7347_7509 = (0);
while(true){
if((i__7347_7509 < count__7346_7508)){
var map__7348_7510 = chunk__7345_7507.cljs$core$IIndexed$_nth$arity$2(null,i__7347_7509);
var map__7348_7511__$1 = ((((!((map__7348_7510 == null)))?(((((map__7348_7510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7348_7510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7348_7510):map__7348_7510);
var gline_7512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7348_7511__$1,cljs.core.cst$kw$gline);
var gcol_7513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7348_7511__$1,cljs.core.cst$kw$gcol);
var name_7514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7348_7511__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7512], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7344_7506,chunk__7345_7507,count__7346_7508,i__7347_7509,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7348_7510,map__7348_7511__$1,gline_7512,gcol_7513,name_7514,vec__7341_7503,column_7504,column_info_7505,seq__7326_7497__$1,temp__5457__auto___7496__$1,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7513], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7454,cljs.core.cst$kw$col,column_7504,cljs.core.cst$kw$name,name_7514], null));
});})(seq__7344_7506,chunk__7345_7507,count__7346_7508,i__7347_7509,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7348_7510,map__7348_7511__$1,gline_7512,gcol_7513,name_7514,vec__7341_7503,column_7504,column_info_7505,seq__7326_7497__$1,temp__5457__auto___7496__$1,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted))
,cljs.core.sorted_map()));


var G__7515 = seq__7344_7506;
var G__7516 = chunk__7345_7507;
var G__7517 = count__7346_7508;
var G__7518 = (i__7347_7509 + (1));
seq__7344_7506 = G__7515;
chunk__7345_7507 = G__7516;
count__7346_7508 = G__7517;
i__7347_7509 = G__7518;
continue;
} else {
var temp__5457__auto___7519__$2 = cljs.core.seq(seq__7344_7506);
if(temp__5457__auto___7519__$2){
var seq__7344_7520__$1 = temp__5457__auto___7519__$2;
if(cljs.core.chunked_seq_QMARK_(seq__7344_7520__$1)){
var c__4337__auto___7521 = cljs.core.chunk_first(seq__7344_7520__$1);
var G__7522 = cljs.core.chunk_rest(seq__7344_7520__$1);
var G__7523 = c__4337__auto___7521;
var G__7524 = cljs.core.count(c__4337__auto___7521);
var G__7525 = (0);
seq__7344_7506 = G__7522;
chunk__7345_7507 = G__7523;
count__7346_7508 = G__7524;
i__7347_7509 = G__7525;
continue;
} else {
var map__7350_7526 = cljs.core.first(seq__7344_7520__$1);
var map__7350_7527__$1 = ((((!((map__7350_7526 == null)))?(((((map__7350_7526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7350_7526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7350_7526):map__7350_7526);
var gline_7528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7350_7527__$1,cljs.core.cst$kw$gline);
var gcol_7529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7350_7527__$1,cljs.core.cst$kw$gcol);
var name_7530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7350_7527__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7528], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__7344_7506,chunk__7345_7507,count__7346_7508,i__7347_7509,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7350_7526,map__7350_7527__$1,gline_7528,gcol_7529,name_7530,seq__7344_7520__$1,temp__5457__auto___7519__$2,vec__7341_7503,column_7504,column_info_7505,seq__7326_7497__$1,temp__5457__auto___7496__$1,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7529], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_7454,cljs.core.cst$kw$col,column_7504,cljs.core.cst$kw$name,name_7530], null));
});})(seq__7344_7506,chunk__7345_7507,count__7346_7508,i__7347_7509,seq__7326_7456,chunk__7327_7457,count__7328_7458,i__7329_7459,seq__7290_7352,chunk__7291_7353,count__7292_7354,i__7293_7355,map__7350_7526,map__7350_7527__$1,gline_7528,gcol_7529,name_7530,seq__7344_7520__$1,temp__5457__auto___7519__$2,vec__7341_7503,column_7504,column_info_7505,seq__7326_7497__$1,temp__5457__auto___7496__$1,vec__7323_7453,line_7454,columns_7455,seq__7290_7447__$1,temp__5457__auto___7446,inverted))
,cljs.core.sorted_map()));


var G__7531 = cljs.core.next(seq__7344_7520__$1);
var G__7532 = null;
var G__7533 = (0);
var G__7534 = (0);
seq__7344_7506 = G__7531;
chunk__7345_7507 = G__7532;
count__7346_7508 = G__7533;
i__7347_7509 = G__7534;
continue;
}
} else {
}
}
break;
}


var G__7535 = cljs.core.next(seq__7326_7497__$1);
var G__7536 = null;
var G__7537 = (0);
var G__7538 = (0);
seq__7326_7456 = G__7535;
chunk__7327_7457 = G__7536;
count__7328_7458 = G__7537;
i__7329_7459 = G__7538;
continue;
}
} else {
}
}
break;
}


var G__7539 = cljs.core.next(seq__7290_7447__$1);
var G__7540 = null;
var G__7541 = (0);
var G__7542 = (0);
seq__7290_7352 = G__7539;
chunk__7291_7353 = G__7540;
count__7292_7354 = G__7541;
i__7293_7355 = G__7542;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
