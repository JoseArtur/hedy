// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: ":dQYQPOOOOQO'#Dr'#DrQYQPOOO!aQPO'#DzO!uQPO'#DOO!}QPO'#DqOOQO'#EO'#EOO#YQPO'#D[OOQO'#EP'#EPO#vQPO'#D]OOQO'#ER'#ERO#}QPO'#D^OOQO'#EU'#EUO$VQPO'#DaOOQO'#EV'#EVO$^QPO'#DbOOQO'#EW'#EWO$eQPO'#DcOOQO'#D`'#D`OOQO'#EX'#EXO$lQPO'#DdOOQO'#EY'#EYO%[QPO'#DeOOQO'#E['#E[O%cQPO'#DfOOQO'#E^'#E^O%jQPO'#DgOOQO'#Ee'#EeO%rQPO'#DlOOQO'#Ef'#EfO%}QPO'#DmOOQO'#Eh'#EhO&YQPO'#DnOOQO'#Ek'#EkO&bQPO'#DoOOQO'#El'#ElO&jQPO'#DpOOQO'#C}'#C}Q![QPO'#DsQ&qQPOOOOQO-E7p-E7pOOQO'#Dt'#DtO'uQPO,59lOOQO'#Dv'#DvO(fQPO,59jOOQO'#DS'#DSO(TQPO,59jO(mQPO,59jO#hQPO,59jOOQO'#Dz'#DzOOQO-E7x-E7xOOQO-E7|-E7|O)sQPO'#DTO*TOSO'#ErO*]OQO'#EvOOQO'#DU'#DUO*eQPO'#EQOOQO'#DT'#DTOOQO-E7}-E7}OOQO'#EQ'#EQO+YQPO,59wOOQO-E8P-E8PO+dQPO,59xO,UQPO,59{OOQO-E8S-E8SOOQO,59{,59{O,jQPO,59|OOQO-E8T-E8TOOQO,59|,59|O-OQPO,59}OOQO-E8U-E8UOOQO,59},59}O-dQPO,5:OOOQO-E8V-E8VOOQO,5:O,5:OO-xQPO,5:POOQO-E8W-E8WO.ZQPO,5:PO.`QPO,5:QOOQO-E8Y-E8YO.qQPO,5:QOOQO-E8[-E8[O.vQPO'#DiOOQO'#Dh'#DhO/UQPO,5:ROOQO-E8c-E8cOOQO-E8d-E8dO/dQPO,5:XOOQO-E8f-E8fO/iQPO,5:YOOQO-E8i-E8iO/nQPO,5:ZO/yQPO,5:[OOQO-E8j-E8jO0TQPO,5:_OOQO-E7q-E7qOOQO-E7r-E7rOOQO'#Du'#DuO1_QPO1G/WOOQO1G/W1G/WO2YQPO'#DTOOQO-E7t-E7tO2dQPO'#DwO3UQPO1G/_OOQO'#Dw'#DwO3yQPO1G/UO4_QPO1G/_OOQO'#D|'#D|O4gQPO1G/aOOOO'#Dx'#DxO4xOSO,5;^OOQO,5;^,5;^OOOO'#Dy'#DyO5QOQO,5;bOOQO,5;b,5;bOOQO'#DV'#DVOOQO'#DW'#DWO$|QPO,5;fO$|QPO,5;fOOQO-E8O-E8OOOQO'#ES'#ESO5YQPO1G/dOOQO'#EZ'#EZO5kQPO1G/kOOQO'#E]'#E]O5sQPO1G/lO6^QPO,5:TO5{QPO,5:TOOQO'#E`'#E`O6eQPO,5:UOOQO'#Ea'#EaO6mQPO,5:VOOQO'#Ec'#EcO6uQPO'#EbOOQO'#Ed'#EdO6}QPO'#EbO7VQPO1G/mOOQO'#Eg'#EgO7eQPO1G/sO7pQPO1G/tO5YQPO1G/uOOQO-E7s-E7sO7{QPO'#D{O8TQPO7+$yOOQO-E7u-E7uO8`QPO'#D}OOQO-E7z-E7zOOQO'#D}'#D}O9QQPO7+${OOOO-E7v-E7vOOQO1G0x1G0xOOOO-E7w-E7wOOQO1G0|1G0|OOQO1G1Q1G1QO9fQPO1G1QO:jQPO'#FPOOQO-E8Q-E8QOOQO'#FP'#FPO;hQPO'#D_OOQO7+%O7+%OOOQO-E8X-E8XOOQO7+%V7+%VOOQO-E8Z-E8ZOOQO7+%W7+%WO<YQPO1G/oOOQO'#E_'#E_O<tQPO1G/oOOQO-E8^-E8^OOQO1G/p1G/pOOQO-E8_-E8_OOQO1G/q1G/qOOQO-E8a-E8aOOQO,5:|,5:|OOQO-E8b-E8bOOQO-E8`-E8`OOQO-E8e-E8eOOQO'#Ei'#EiO=VQPO7+%`OOQO7+%`7+%`OOQO7+%a7+%aO=bQPO,5:gOOQO,5:g,5:gOOQO-E7y-E7yOOQO-E7{-E7{O#hQPO'#ETO=pQPO,59yOOQO-E8]-E8]OOQO-E8g-E8gO>bQPO<<HzOOQO,5:o,5:oOOQO-E8R-E8ROOQO'#Ej'#EjO>gQPOAN>fOOQO-E8h-E8hOOQOG24QG24Q",
  stateData: ">u~OoOS#cOS~OSiOUkOXWOY[OZ^O[`O]cO_eOagOcUOfmOhoOkYOlqOmsOsRO#dPO~OQyO^{O#e}Os!nX#a!nX#d!nX~O^{O#e}O~Os!RO#a!eX#d!eX~OcUO#a!OX#d!OX~OkYOs!UOu!ZO#g!VO#k!WO~OXWO~P#eOkYOs!`O~OY[O~P#eOZ^O~P#eO[`O~P#eO]cO#a!WX#d!WX~P#eOkYOs!ZOu!ZO#g!VO#k!WO~O_eO~P$yOagO~P$yOSiOs!tO~OUkO#a!`X#d!`X~OfmOs!yOu!yO~OhoOs!{O~OlqOs!}O~OmsO~P#eOSiOUkOXWOY[OZ^O[`O]cO_eOagOcUOfmOhoOkYOlqOmsOsRO~OQyOR#TOs#VOu#VO~OP#_Os#WOu#ZO#g!VO#k!WO~O^{O~P(TO^{Os!UOu!ZO#g!VO#k!WO~OQyOswXuwX#awX#dwX#gwX#kwX#owX#pwX#qwX#rwX~OkwX|wXbwX`wX~P)OO#h#aO#i#cO~O#l#dO#m#fO~O#o#gO#p#gO#q#hO#r#hOk!tXs!tXu!tX#a!tX#d!tX#g!tX#k!tX~O#a!Pa#d!Pa~P#eOn#lO#a!Qa#d!Qak!Qas!Qau!Qa#g!Qa#k!Qab!Qa`!Qa~O#o#gO#p#gO#q#hO#r#hO#a!Ta#d!Ta~O#o#gO#p#gO#q#hO#r#hO#a!Ua#d!Ua~O#o#gO#p#gO#q#hO#r#hO#a!Va#d!Va~O#o#gO#p#gO#q#hO#r#hO#a!Wa#d!Wa~Ob#nO#o#gO#p#gO#q#hO#r#hO~Ob#nO~O`#pO#o#gO#p#gO#q#hO#r#hO~O`#pO~O^{Od#tOe#vO#e}O~OV#xOW#zO#a!Za#d!Za~Og#}O~Od#tO~On#lO#a!ca#d!ca~O#a!da#d!da~P#eO#dPOS!gaU!gaX!gaY!gaZ!ga[!ga]!ga_!gaa!gac!gaf!gah!gak!gal!gam!gas!ga#a!ga~OR#TO^ti#etiktistiuti#ati#dti#gti#kti|tibti`ti~Os!nX|!nX~P)OO#o#gO#p#gO#q#hO#r#hOs!kXu!kX#a!kX#d!kX#g!kX#k!kX~O|$SOswXuwX#awX#dwX#gwX#kwX#owX#pwX#qwX#rwX~Os!UOu!ZO#g!VO#k!WO#ari#dri~Os!RO|$SO~OP#_Os!UOu!ZO#g!VO#k!WO~O#h#aO#i$[O~O#l#dO#m$^O~On#lOs!UOu!ZO#g!VO#k!WO~Ob#nOs$gO~O`#pOs$iO~OT$kOs!ZOu!ZO#g!VO#k!WO~O^{O~P5{Od#tOs$nO~Oe#vOs$pO~OV#xOs!tO~OW#zOs!tO~OV#xOW#zO#a!Zi#d!Zi~Og#}O#a!ai#d!ai~Od#tOj$vOs$xO~Os!ROu${O~O|$SO#a{q#d{q~O#o#gO#p#gO#q#hO#r#hOs!qXu!qX#a!qX#d!qX#g!qX#k!qX~Os!UOu!ZO#g!VO#k!WO#a}q#d}q~O#o#gO#p#gO#q#hO#r#hOk#nis#niu#ni#a#ni#d#ni#g#ni#k#nib#ni`#ni|#niV#niW#ni~O#o#gO#p#gO#q#hO#r#hO|#sX#a#sX#d#sXk#sXs#sXu#sX#g#sX#k#sXb#sX`#sX~O|%OO#a!RX#d!RXk!RXs!RXu!RX#g!RX#k!RXb!RX`!RX~O#o#gO#p#gO#q#hO#r#hOV!]iW!]i#a!]i#d!]i~OT$kOV!]iW!]i#a!]i#d!]i~Oj$vOs%SOu%SO~Os!RO|!oa#a!oa#d!oa~O|%OO#a!Ra#d!Rak!Ras!Rau!Ra#g!Ra#k!Rab!Ra`!Ra~Oi%VO~Oi%VOs%YOu%YO~Ous~",
  goto: "0d#tPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#u#zP$PP$x%R&V&q'P#zP#z#z#z'_'|#z(S(S(S#z#z#z#z(X(`(`(`#z#z#z#z#z#z(e(o(v)O)U)d)m)s)y*[*c*j*p*x+Q+[+n+x,O,W,`,h,p,x-P-X-`-h-o-y.P.V.^.e.m.u.{/T/Z/a/iPPPPP/qPPP/qPPP&VPPPP0]VvOQwVuOQwUSOQwW!]Xt!^#OQ!c]Q!f_Q!iaQ!ldY#[|!O!P!Q#]S$X#`$YV$c#m$Q%OQ!ORQ!QSR#s!tW!YXt!^#OQ!a]Q!d_Q!gaQ!jdQ!mfQ!phY#Y|!O!P!Q#]S$V#`$YQ$_#iQ$`#jU$a#m$Q%OT$j#r#s!R!ZX]_adfht|!O!P!Q!^#O#]#`#i#j#m#r#s$Q$Y%Oi#i!Y!a!d!g!j!m!p#Y$V$`$a$ji#j!Y!a!d!g!j!m!p#Y$V$`$a$jUuOQwW!]Xt!^#OQ!c]Q!f_Q!iaQ!ldQ!ofR!rhQ$e#mR$y$QVbOQwQ!vjT$r#y#{V!uj#y#{QQOSxQ#QR#QvSwOQR#RwUzR!U#WR#SzQ#UzR$R#UQ|RQ!PSU#X|!P#rR#r!tW#]|!O!P!QR$U#]Q#b!VR$Z#bQ#e!WR$]#eUTOQwU!ST#^$zS#^|!OR$z$SS$T#Z#^R$|$TS#`|!OR$W#`Q$Y#`R$}$YUVOQwR!TVUXOQwR![XQ!^XQ#OtT#k!^#OjZOQX]_adfhtw!^#OR!_ZQ#m!`Q$Q!}T$b#m$QQ%P$dR%U%PU]OQwR!b]U_OQwR!e_UaOQwR!haUdOQwR!kdUfOQwR!nfS#o!m!oR$f#oUhOQwR!qhS#q!p!rR$h#qUjOQwR!sjS$l#r#sR%Q$lQ#u!tQ$P!{T$m#u$PQ#w!tR$o#wQ#|!vR$t#|S#y!v#|R$q#yS#{!v#|R$s#{UlOQwR!wlUnOQwR!xnQ$O!yR$u$OUpOQwR!zpQ$w$PR%R$wQ%W%SR%X%WUrOQwR!|rUtOQwR#Pt!R!XX]_adfht|!O!P!Q!^#O#]#`#i#j#m#r#s$Q$Y%OS$d#m$QR%T%O",
  nodeNames: "⚠ ask at random if pressed else and or print forward turn color sleep is add from remove toList clear in not_in repeat times for to range call define return with Comment Program Command Assign Text ListAccess Number Op Expression String Op Op AssignList Comma Ask Clear Print Call Arguments Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck Else Repeat For Define Return ErrorInvalid",
  maxTerm: 127,
  nodeProps: [
    ["group", 50,"turtle"]
  ],
  skippedNodes: [0,31],
  repeatNodeCount: 41,
  tokenData: "1U~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`1P!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^s~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO#d~~&`O#c~~&eO#g~~&jSo~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#k~~'WO#o~~']O#q~~'bO|~~'gO#r~~'lO#p~~'s!Ou~s~OY$}Zp$}qr$}tw$}xz$}!O!P*s!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*x!Os~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R-x!R!S-x!S!T-x!T!U-x!U!V-x!V!W-x!W!X-x!X!Y-x!Y!Z-x!Z![-x![!_$}!`#Q$}#RBn$}BoDf$}DfDg-xDgDh-xDhDi-xDiDj-xDjDk-xDkDl-xDlDm-xDmDn-xDnDo-xDoDp-xDpGl$}GlGm-xGmGn-xGnGo-xGoGp-xGpGq-xGqGr-xGrGs-xGsGt-xGtGu-xGuGv-xGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~.P!Ou~s~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R-x!R!S-x!S!T-x!T!U-x!U!V-x!V!W-x!W!X-x!X!Y-x!Y!Z-x!Z![-x![!_$}!`#Q$}#RBn$}BoDf$}DfDg-xDgDh-xDhDi-xDiDj-xDjDk-xDkDl-xDlDm-xDmDn-xDnDo-xDoDp-xDpGl$}GlGm-xGmGn-xGnGo-xGoGp-xGpGq-xGqGr-xGrGs-xGsGt-xGtGu-xGuGv-xGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~1UO#e~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#m~~", 14, 120), new LocalTokenGroup("_~RQYZXrsX~^O#i~~", 14, 116)],
  topRules: {"Program":[0,32]},
  dynamicPrecedences: {"67":-10},
  specialized: [{term: 35, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 35, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1368
})
