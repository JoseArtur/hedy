// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "4^QYQPOOOOQO'#Dh'#DhQYQPOOO!ZQPO'#DnO!lQPO'#DgOOQO'#Dt'#DtO!wQPO'#DTO#SQPO'#DUOOQO'#Du'#DuO#bQPO'#DVOOQO'#Dv'#DvO#jQPO'#DXOOQO'#Dw'#DwO#uQPO'#DYOOQO'#Dx'#DxO$QQPO'#DZOOQO'#DW'#DWOOQO'#Dy'#DyO$]QPO'#D[OOQO'#Dz'#DzO$nQPO'#D]OOQO'#D|'#D|O$vQPO'#D^OOQO'#EO'#EOO%OQPO'#D_OOQO'#ES'#ESO%ZQPO'#DdOOQO'#ET'#ETO%fQPO'#DeOOQO'#EV'#EVO%qQPO'#DfOOQO'#Cv'#CvQ!UQPO'#DiQ%yQPOOOOQO-E7f-E7fOOQO'#Dj'#DjO&wQPO,59cOOQO'#Cy'#CyO'VQPO,59cOOQO'#Dn'#DnOOQO-E7l-E7lOOQO-E7r-E7rO'bQPO'#DqOOQO'#Cz'#CzO(qQPO'#CzO({OSO'#EbO)TOQO'#EfOOQO'#DS'#DSOOQO'#Dq'#DqO)]QPO,59pO)qQPO,59qOOQO-E7s-E7sO)|QPO,59sOOQO-E7t-E7tOOQO,59s,59sO*bQPO,59tOOQO-E7u-E7uOOQO,59t,59tO*vQPO,59uOOQO-E7v-E7vOOQO,59u,59uO+[QPO,59vOOQO-E7w-E7wOOQO,59v,59vO+pQPO,59wOOQO-E7x-E7xO+xQPO,59xOOQO-E7z-E7zOOQO-E7|-E7|O,QQPO'#DaOOQO'#D`'#D`OOQO,59y,59yOOQO-E8Q-E8QOOQO-E8R-E8RO,`QPO,5:POOQO-E8T-E8TO,eQPO,5:QO,jQPO,5:TOOQO-E7g-E7gOOQO-E7h-E7hO-nQPO'#DkO.YQPO1G/VO.aQPO'#CzOOQO'#Dk'#DkO.kQPO1G.}O.yQPO1G/VOOQO'#Dp'#DpO/RQPO1G/XOOQO'#C|'#C|OOQO'#C}'#C}O/dQPO,5:wO/dQPO,5:wOOQO'#Dl'#DlO/lQPO,59jOOOO'#Dr'#DrO/zOSO,5:|OOQO,5:|,5:|OOOO'#Ds'#DsO0SOQO,5;QOOQO,5;Q,5;QOOQO-E7o-E7oOOQO'#D{'#D{O0[QPO1G/cOOQO'#D}'#D}O0dQPO1G/dO0}QPO,59{O0lQPO,59{OOQO'#EQ'#EQO1UQPO,59|OOQO'#ER'#ERO1^QPO,59}OOQO'#EU'#EUO1fQPO1G/kO1qQPO1G/lO1yQPO'#DoO2RQPO7+$qOOQO-E7i-E7iOOQO-E7n-E7nO2^QPO7+$sOOQO1G0c1G0cO2rQPO1G0cOOQO-E7j-E7jOOQO'#Dm'#DmO3dQPO1G/UOOQO1G/U1G/UOOOO-E7p-E7pOOQO1G0h1G0hOOOO-E7q-E7qOOQO1G0l1G0lOOQO-E7y-E7yOOQO7+$}7+$}OOQO-E7{-E7{OOQO7+%O7+%OO3{QPO1G/gOOQO'#EP'#EPO4aQPO1G/gOOQO1G/g1G/gOOQO-E8O-E8OOOQO1G/h1G/hOOQO-E8P-E8POOQO1G/i1G/iOOQO-E8S-E8SOOQO7+%W7+%WO4lQPO,5:ZOOQO,5:Z,5:ZOOQO-E7m-E7mOOQO-E7k-E7kOOQO-E7}-E7}",
  stateData: "4}~OhOS!|OS~OSgOUiOVVOWYOX[OY^OZaO[WO^cO`eObTOekOgmOlRO!}PO~O]sO#OuOl!bX!z!bX!}!bX~OlwO!z!ZX!}!ZX~ObTO!zwX!}wX~Ol|Oo{O#V}O#Z!OO~O[WOlwO~OWYOl|Oo{O~OX[Ol|Oo{O~OY^Ol|Oo{O~OZaOl|Oo{O!z!OX!}!OX~O^cOlwO~O`eOlwO~OSgOl!gOo!gO~OUiO!z!WX!}!WX~OekOl!lOo!lO~OgmOl!nO~OSgOUiOVVOWYOX[OY^OZaO[WO^cO`eObTOekOgmOlRO~OP!xO]sOl!tOo!sO~OP!xOl!tOo!sO~O#Q!zO#R!zO#S!{O#T!{Ol!eXo!eX!z!eX!}!eX#V!eX#Z!eX~OQ#OOlnXonX!znX!}nX#QnX#RnX#SnX#TnX~O#VnX#ZnX~P(SO#W#QO#X#SO~O#[#TO#]#VO~Ol|Oo{O#V}O#Z!OO!zxa!}xa~OlwO!zya!}ya~O#Q!zO#R!zO#S!{O#T!{O!z{a!}{a~O#Q!zO#R!zO#S!{O#T!{O!z|a!}|a~O#Q!zO#R!zO#S!{O#T!{O!z}a!}}a~O#Q!zO#R!zO#S!{O#T!{O!z!Oa!}!Oa~Oa#XOlwO~O_#ZOlwO~O]sOc#_Od#aO#OuO~Of#cO~Oc#_O~O!}POS!]aU!]aV!]aW!]aX!]aY!]aZ!]a[!]a^!]a`!]ab!]ae!]ag!]al!]a!z!]a~O#Q!zO#R!zO#S!{O#T!{Ol!_Xo!_X!z!_X!}!_X~Ot#fO~P(VOl!bXt!bX~P(SOl|Oo{O!zki!}ki~OlwOt#fO~OP!xOl|Oo{O#V}O#Z!OO~Ol{Oo{O~OQ#OOR#nOl#pOo#pO~O#W#QO#X#rO~O#[#TO#]#tO~Oa#XOl#vO~O_#ZOl#xO~OT#zOl{Oo{O#V}O#Z!OO~O]sO~P0lOc#_Ol$OO~Od#aOl$QO~Of#cO!z!Xi!}!Xi~Oc#_Ol$SO~OlwOo$UO~Ot#fO!zsq!}sq~Ol|Oo{O#V}O#Z!OO!zuq!}uq~O#Q!zO#R!zO#S!{O#T!{Ol#Pio#Pi!z#Pi!}#Pi#V#Pi#Z#Pi~OR#nOlriori!zri!}ri#Vri#Zri~O#Q!zO#R!zO#S!{O#T!{O!z!Ti!}!Ti~OT#zO!z!Ti!}!Ti~OlwOt!ca!z!ca!}!ca~Ool~",
  goto: "+o#ZPPPPPPPPPPPPPPPPPPPPPPPPPP#[#aP#f#lP$_$i$s#aP#a%[#a#a#a#a%f%f%f#a#a#a#a%k%n%n%n#a#a#a#a%q%{&S&^&e&l&r'a'h'o'y(P(V(_(g(o(w)P)X)a)g)o)u)}*U*`*f*n*v*|PPPPP+UPPPP+gPPP+gVpOQqVoOQqQvRR#^!gWzV!R!y#jQ!UZQ!X]Q![_Q!_bU!rtv!vQ#k!|Q#l!}T#y#]#^a!|z!U!X![!_!r#l#ya!}z!U!X![!_!r#l#yW!QV!R!y#jQ!WZQ!Z]Q!^_Q!abV!utv!vW!QV!R!y#jT#|#]#^V`OQqR!ihR!hhQQOSrQ!oR!opSqOQR!pqQtRS!qt#]R#]!gS!vtvR#h!vS#P|!tR#m#PQ#o#PR$W#oUSOQq[xS!S!b!d!w$TQ!SXQ!bdQ!dfS!wtvR$T#fS#g!s!wR$V#gS!ytvR#i!yQ!RVS#W!R#jR#j!yQ#R}R#q#RQ#U!OR#s#UUUOQqRyUUXOQqR!TXUZOQqR!VZU]OQqR!Y]U_OQqR!]_UbOQqR!`bUdOQqR!cdQ#Y!bR#u#YUfOQqR!efQ#[!dR#w#[UhOQqR!fhS#{#]#^R$X#{Q#`!gQ#e!nT#}#`#eQ#b!gR$P#bUjOQqR!jjUlOQqR!klQ#d!lR$R#dUnOQqR!mno{VZ]_btv!R!v!y!|!}#]#^#j]!PV!R!y#]#^#j",
  nodeNames: "⚠ ask at random if pressed else print forward turn color sleep play is add from remove toList clear in not_in repeat times for Comment Program Command Assign Text Op Expression Int Op Op ListAccess AssignList Comma Ask String Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck Else Repeat For ErrorInvalid",
  maxTerm: 105,
  nodeProps: [
    ["group", 42,"turtle"]
  ],
  skippedNodes: [0,24],
  repeatNodeCount: 30,
  tokenData: "*x~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`*s!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^l~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO!}~~&`O!|~~&eO#V~~&jSh~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#Z~~'WO#Q~~']O#S~~'bOt~~'gO#T~~'lO#R~~'s!Oo~l~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*xO#O~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#]~~", 14, 104), new LocalTokenGroup("_~RQYZXrsX~^O#X~~", 14, 100)],
  topRules: {"Program":[0,25]},
  dynamicPrecedences: {"57":-10},
  specialized: [{term: 28, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 28, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 916
})
