// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "?UQYQPOOOOQO'#EQ'#EQQYQPOOO!jQPO'#E{OOQO'#EX'#EXO#OQPO'#DZO#WQPO'#DQOOQO'#E_'#E_O#`QPO'#DbOOQO'#E`'#E`O#|QPO'#DcOOQO'#Ea'#EaO$TQPO'#DdOOQO'#Eb'#EbO$[QPO'#DfOOQO'#Ec'#EcO$cQPO'#DgOOQO'#Ed'#EdO$jQPO'#DhOOQO'#De'#DeOOQO'#Ee'#EeO$qQPO'#DiOOQO'#Ef'#EfO%OQPO'#DjOOQO'#Eh'#EhO%VQPO'#DkOOQO'#Ej'#EjO%oQPO'#DlOOQO'#Eq'#EqO%vQPO'#DxOOQO'#Er'#ErO&OQPO'#DyOOQO'#Et'#EtO&ZQPO'#DzOOQO'#Ew'#EwO&cQPO'#D{OOQO'#Ex'#ExO&kQPO'#D|OOQO'#Ey'#EyO&rQPO'#D}OOQO'#Ez'#EzO&yQPO'#EOO'QQPO'#EPOOQO'#DP'#DPQ!eQPO'#ERQ']QPOOOOQO-E8O-E8OOOQO'#DT'#DTO(jQPO,59nOOQO'#ET'#ETO(uQPO,59lOOQO'#DW'#DWO)SQPO,59lOOQO-E8V-E8VO)^QPO,59uO*zQPO,59lO#kQPO,59lOOQO-E8]-E8]O+yQPO'#DXO,vOSO'#FTO-OOQO'#FXOOQO'#DY'#DYO-WQPO'#E^OOQO'#DX'#DXO-{QPO,59}OOQO-E8^-E8^O.VQPO,5:OOOQO-E8_-E8_O.kQPO,5:QOOQO-E8`-E8`O/PQPO,5:ROOQO-E8a-E8aO/eQPO,5:SOOQO-E8b-E8bO/yQPO,5:TOOQO-E8c-E8cO0_QPO,5:UOOQO-E8d-E8dO0pQPO,5:VOOQO-E8f-E8fO1RQPO'#DXO1YQPO'#DoOOQO-E8h-E8hOOQO'#Dm'#DmO1}QPO,5:WOOQO'#Dw'#DwOOQO-E8o-E8oOOQO,5:d,5:dOOQO-E8p-E8pO2YQPO,5:eOOQO-E8r-E8rO2_QPO,5:fOOQO-E8u-E8uO2dQPO,5:gO2lQPO,5:hOOQO-E8v-E8vOOQO-E8w-E8wO1}QPO,5:iOOQO-E8x-E8xO1}QPO,5:jOOQO'#E{'#E{OOQO-E8y-E8yO2vQPO,5:mOOQO-E8P-E8POOQO'#ES'#ESO4ZQPO1G/YO4^QPO1G/YOOQO-E8R-E8RO4cQPO'#EUO5WQPO1G/WO5bQPO1G/fOOQO'#E]'#E]O5sQPO1G/gOOQO'#EY'#EYO5zQPO1G/aOOOO'#EV'#EVO6ROSO,5;oOOQO,5;o,5;oOOOO'#EW'#EWO6ZOQO,5;sOOQO,5;s,5;sOOQO'#D^'#D^OOQO'#D_'#D_O#kQPO,5;wO#kQPO,5;wOOQO-E8[-E8[OOQO'#Eg'#EgO6cQPO1G/pOOQO'#Ei'#EiO6kQPO1G/qO6sQPO,5:YO*zQPO,5:ZO6{QPO,5:ZOOQO'#Dq'#DqO#kQPO,5:[OOQO'#Ds'#DsOOQO'#Dt'#DtO6{QPO,5:^OOQO'#El'#ElO7SQPO,5:aOOQO'#Em'#EmO7[QPO,5:bOOQO'#Eo'#EoO7dQPO'#EnOOQO'#Ep'#EpO7kQPO'#EnO1}QPO1G/rOOQO1G/r1G/rOOQO'#Es'#EsO7rQPO1G0PO7}QPO1G0QO5zQPO1G0ROOQO1G0R1G0RO1}QPO1G0TOOQO1G0T1G0TO1}QPO1G0UOOQO1G0U1G0UOOQO-E8Q-E8QOOQO'#DV'#DVOOQO7+$t7+$tOOQO-E8S-E8SOOQO7+%Q7+%QO8YQPO7+%QOOQO-E8Z-E8ZO8bQPO7+%ROOQO-E8W-E8WOOQO7+${7+${O:VQPO'#D[OOOO-E8T-E8TOOQO1G1Z1G1ZOOOO-E8U-E8UOOQO1G1_1G1_OOQO1G1c1G1cO:^QPO1G1cOOQO-E8e-E8eOOQO7+%[7+%[OOQO-E8g-E8gOOQO7+%]7+%]OOQO'#Ek'#EkO;wQPO1G/tO<VQPO1G/uO#kQPO1G/uO<nQPO1G/vO=VQPO1G/xO#kQPO1G/xOOQO-E8j-E8jOOQO1G/{1G/{OOQO-E8k-E8kOOQO1G/|1G/|OOQO-E8m-E8mOOQO,5;Y,5;YOOQO-E8n-E8nOOQO-E8l-E8lOOQO7+%^7+%^OOQO-E8q-E8qOOQO'#Eu'#EuO=nQPO7+%lO%yQPO7+%lO%yQPO7+%mOOQO7+%o7+%oOOQO7+%p7+%pO=yQPO'#E[O8YQPO<<HlOOQO<<Hl<<HlO>XQPO,59vO#kQPO'#EZOOQO-E8i-E8iO?uQPO7+%aO@^QPO7+%dOOQO-E8s-E8sO@uQPO<<IWOOQO<<IW<<IWOOQO<<IX<<IXOOQO,5:v,5:vOOQO-E8Y-E8YOOQOAN>WAN>WOOQO-E8X-E8XO@zQPO,5:uOOQO'#Ev'#EvOBhQPOAN>rOOQO-E8t-E8tO%yQPOG24^POQO,59v,59vOOQOLD)xLD)xOBsQPO'#D[O5zQPO1G/aOBzQPO,59uOCRQPO'#DZO#kQPO,5;wO#kQPO,5;wOCZQPO1G1c",
  stateData: "Ce~OqOS#rOS~ORjOTlOXvOYxOZrO]XO^]O__O`aOadObZOcfOehOgVOjnOlpOoSOptOuRO#sPO~OW!RO#t!PO#v!TOu#oX#p#oX#s#oX~OoSOu!WO~OW!RO#v!TO~OgVO#p!UX#s!UX~OoSOu![Ox!aO#x!]O#|!^O~O]XO~P#kObZO~P#kO^]O~P#kO__O~P#kO`aO~P#kOadO#p!]X#s!]X~P#kOcfO~P#kOehO~P#kOoSOu!rOx!aO#x!]O#|!^O~ORjO~P%^OTlO$X!wO~OjnOu!{Ox!{O~OlpOu!}O~OZrOu#PO~OptO~P#kOXvO~P%^OYxO~P%^Ou#WO#p!sX#s!sX~ORjOTlOXvOYxOZrO]XO^]O__O`aOadObZOcfOehOgVOjnOlpOoSOptOuRO~OQ#[Ou#^Ox#^O~OP#cOW!RO#t!PO~P#kOP#cO#t!PO~P#kO[#eO#p}a#s}ao}au}ax}a#x}a#|}a$Q}a$R}a$S}a$T}af}ad}aW}ah}ai}a#v}a$U}a$V}a$W}aU}aV}a$X}a~OW!RO~P#kO#t!PO$Q{X$R{X$S{X$T{XW{Xh{Xi{X#v{X$U{X$V{X$W{X~Oo{Xu{Xx{X#p{X#s{X#x{X#|{Xf{Xd{X!P{XU{XV{X$X{X~P+RO#y#gO#z#iO~O#}#jO$O#lO~O$Q#mO$R#mO$S#nO$T#nOo#QXu#QXx#QX#p#QX#s#QX#x#QX#|#QX~O#p!Va#s!Va~P#kO$Q#mO$R#mO$S#nO$T#nO#p!Wa#s!Wa~O$Q#mO$R#mO$S#nO$T#nO#p!Ya#s!Ya~O$Q#mO$R#mO$S#nO$T#nO#p!Za#s!Za~O$Q#mO$R#mO$S#nO$T#nO#p![a#s![a~O$Q#mO$R#mO$S#nO$T#nO#p!]a#s!]a~Of#rO$Q#mO$R#mO$S#nO$T#nO~Od#tO$Q#mO$R#mO$S#nO$T#nO~OW!RO~P+ROW!ROh$OOi$QO#v!TO$Q#mO$R#mO$S#nO$T#nO$U#yO$V#{O$W#|O~OU$SOV$UO$X!wO~Ok$YO~Oh$OO~O[#eO$X!wO~O#p!pa#s!pa~P#kO#sPOR!uaT!uaX!uaY!uaZ!ua]!ua^!ua_!ua`!uaa!uab!uac!uae!uag!uaj!ual!uao!uap!uau!ua#p!ua~OQ#[O#u$dO~O$Q#mO$R#mO$S#nO$T#nOo!xXu!xXx!xX#p!xX#s!xX#x!xX#|!xX~O#pti#sti~P#kOu$hOx$hO#u$dO#x!]O#|!^O~OP#cO~P#kO[#eO~P#kO#y#gO#z$oO~O#}#jO$O$qO~Of#rOu$uO~Od#tOu$wO~OS$xOW!RO~O#v!TO~P#kOh$OOu%QO~Oi$QOu%SO~OU$SO~P%^OV$UO~P%^Ok$YO#p!mi#s!mi~Oh$OOn%ZOu%]O~O!P%aO#u$dO~O#p!Tq#s!Tq~P#kO$Q#mO$R#mO$S#nO$T#nO#p!OX#s!OX$X!OXo!OXu!OXx!OX#x!OX#|!OXf!OXd!OXW!OXh!OXi!OX#v!OX$U!OX$V!OX$W!OXU!OXV!OX~O!P%eO~P8lO$Q#mO$R#mO$S#nO$T#nOo$Piu$Pix$Pi#p$Pi#s$Pi#x$Pi#|$Pif$Pid$PiW$Pih$Pii$Pi#v$Pi$U$Pi$V$Pi$W$PiU$PiV$Pi$X$Pi~OS$xOU!biV!bi$X!bi~O$Q#mO$R#mO$S#nO$T#nOU!ciV!ci$X!ci~O$Q#mO$R#mO$S#nO$T#nOU!diV!di$X!di~O$Q#mO$R#mO$S#nO$T#nOU!fiV!fi$X!fi~On%ZOu%jOx%jO~Ou%mOx%mO#x!]O#|!^O~O!P%eO#p!Oa#s!Oa$X!Oao!Oau!Oax!Oa#x!Oa#|!Oa$Q!Oa$R!Oa$S!Oa$T!Oaf!Oad!OaW!Oah!Oai!Oa#v!Oa$U!Oa$V!Oa$W!OaU!OaV!Oa~O$Q#mO$R#mO$S#nO$T#nOU!cqV!cq$X!cq~O$Q#mO$R#mO$S#nO$T#nOU!fqV!fq$X!fq~Om%rO~O$Q#mO$R#mO$S#nO$T#nO!P!}a#p!}a#s!}a$X!}ao!}au!}ax!}a#x!}a#|!}af!}ad!}aW!}ah!}ai!}a#v!}a$U!}a$V!}a$W!}aU!}aV!}a~Om%rOu%uOx%uO~O!P!OX~P8lO!P}a~P)^OoSOu%zO~O!P$Pi~P:^Oxu~",
  goto: "5m$QPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$R$WP$]%ZP%d%q&Q's(r)pP)w*a$W$W$W$W$W$W*y*y*y$W$W$W$W+O+]+]+]+d+]+g+g+]+]+j$W$W$W$W$W$W$W$W,],g,n,t-W-a-g-m.o.}/T/Z/b/p/x0Q0Y0b0j0r0z1S1Y1b1h1p1v2Q2W2f2q2|3U3^3d3l3r3x4Q4Y4b4jPPPPPPP4rPPP4rPPP$bV|OQ}V{OQ}UUOQ}!m!aY[^`begikuwy!S!U!X!Y!b#Q#a#d#f#o#p#w#x#z#}$T$V$]$j${%O%e%y%|%}U!QR![!rT#b!S!US$e#]#^Q$g#bQ%c$hR%o%bQ!URQ!YUQ#x!sQ${#xR%O#}[!`Yu!b#Q#d$jQ!d[Q!f^Q!h`Q!jbQ!leQ!ngQ!piY!skwy$T$VY#`!S!U!X!Y#aS$m#f$]S$r#o%|Q$s#pS$z#w#xQ$|#zQ$}#}Q%g${Q%h%OQ%q%eQ%x%yR&O%}!l!aY[^`begikuwy!S!U!X!Y!b#Q#a#d#f#o#p#w#x#z#}$T$V$]$j${%O%e%y%|%}Q$h#bR%m%aU{OQ}!m!aY[^`begikuwy!S!U!X!Y!b#Q#a#d#f#o#p#w#x#z#}$T$V$]$j${%O%e%y%|%}S$l#f%yR%^$]p#o!`!d!f!h!j!l!n!p!s#`$s$z$|$}%g%hX%|$m%q%x&Op#p!`!d!f!h!j!l!n!p!s#`$s$z$|$}%g%hX%}$m%q%x&OVcOQ}Q!vkQ#TwQ#VyT%U$T$VZ!ukwy$T$VR#z!sR#}!sQ!ymQ$X!vQ$^#PQ$`#TQ$b#VQ%X$WQ%_$_Q%`$aQ%k%]Q%l%^R%w%uQQOS!OQ#YR#Y|S}OQR#Z}Q#]!QR$c#]Q!SRQ!XUW#_!S!X#v#wQ#v!rR#w!sW#a!S!U!X!YR$f#aQ#h!]R$n#hQ#k!^R$p#k!fTOQY[^`begikuwy}!S!U!X!Y!b#Q#a#d#o#p#w#x#z#}$T$V$j${%OS!VT%{]%{#f$]%e%y%|%}Q#f!WQ$]#PU$k#f$]%yR%y%zQ%d$mR%p%dQ%b$hR%n%bS#d!S!UR$i#dQ!bYQ#QuU#q!b#Q$jR$j#dUWOQ}R!ZWUYOQ}R!cYU[OQ}R!e[U^OQ}R!g^U`OQ}R!i`UbOQ}R!kbUeOQ}R!meUgOQ}R!ogQ#s!nR$t#sUiOQ}R!qiQ#u!pR$v#uUkOQ}R!tkQ$y#vR%f$yQ$P!sQ$[!}T%P$P$[Q$R!sR%R$RQ$W!vQ$_#TQ$a#VV%W$W$_$a[$T!v#T#V$W$_$aR%T$T[$V!v#T#V$W$_$aR%V$VUmOQ}R!xmUoOQ}R!zoQ$Z!{R%Y$ZUqOQ}R!|qQ%[$[R%i%[Q%s%jR%t%sUsOQ}R#OsUuOQ}R#RuUwOQ}R#SwUyOQ}R#UyUzOQ}R#Xz!q!_Y[^`begikuwy!S!U!X!Y!b#Q#a#b#d#f#o#p#w#x#z#}$T$V$]$j${%O%a%e%y%|%}",
  nodeNames: "⚠ ask random if pressed else and or is while elif define with print forward turn color sleep play add from remove toList clear in not_in repeat times for to range call return Comment Program Command Assign Text ListAccess Op Number Op Op Expression String Call Arguments Comma Op Op AssignList Ask Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition PressedCheck EqualityCheck NotEqualCheck Op ComparisonCheck Op Op InListCheck NotInListCheck Op Else Repeat For Define Return While Elif ErrorInvalid",
  maxTerm: 147,
  nodeProps: [
    ["group", 55,"turtle"]
  ],
  skippedNodes: [0,33],
  repeatNodeCount: 42,
  tokenData: "2a~R!dOY%aYZ&kZp%apq&pqr&urs'Qst'Vtw%awx'nxz%az{'s{|'x|}'}}!O(S!O!P%a!P!Q(X!Q!R(^!R!S(^!S!T(^!T!U(^!U!V(^!V!W(^!W!X(^!X!Y(^!Y!Z(^!Z![(^![!]1q!]!^%a!^!_1v!_!`1{!`!a2Q!a!}%a!}#O2V#O#P%a#P#Q2[#QBn%aBnBo'}BoDf%aDfDg(^DgDh(^DhDi(^DiDj(^DjDk(^DkDl(^DlDm(^DmDn(^DnDo(^DoDp(^DpGl%aGlGm(^GmGn(^GnGo(^GoGp(^GpGq(^GqGr(^GrGs(^GsGt(^GtGu(^GuGv(^Gv&FV%a&FV&FW'}&FW;'S%a;'S;=`&e<%l?Hb%a?Hb?Hc'}?HcO%a~%f_u~OY%aZp%atw%axz%a!O!P%a!Q![%a!]!^%a!a!}%a#O#P%a#QBn%aBo&FV%a&FW;'S%a;'S;=`&e<%l?Hb%a?HcO%a~&hP;=`<%l%a~&pO#s~~&uO#r~~&xP!_!`&{~'QO$U~~'VO#x~~'[Sq~OY'VZ;'S'V;'S;=`'h<%lO'V~'kP;=`<%l'V~'sO#|~~'xO$Q~~'}O$S~~(SO!P~~(XO$T~~(^O$R~~(e!Ox~u~OY%aZp%atw%axz%a!O!P+e!Q!R(^!R!S(^!S!T(^!T!U(^!U!V(^!V!W(^!W!X(^!X!Y(^!Y!Z(^!Z![(^!]!^%a!a!}%a#O#P%a#QBn%aBoDf%aDfDg(^DgDh(^DhDi(^DiDj(^DjDk(^DkDl(^DlDm(^DmDn(^DnDo(^DoDp(^DpGl%aGlGm(^GmGn(^GnGo(^GoGp(^GpGq(^GqGr(^GrGs(^GsGt(^GtGu(^GuGv(^Gv&FV%a&FW;'S%a;'S;=`&e<%l?Hb%a?HcO%a~+j!Ou~OY%aZp%atw%axz%a!O!P%a!Q!R.j!R!S.j!S!T.j!T!U.j!U!V.j!V!W.j!W!X.j!X!Y.j!Y!Z.j!Z![.j!]!^%a!a!}%a#O#P%a#QBn%aBoDf%aDfDg.jDgDh.jDhDi.jDiDj.jDjDk.jDkDl.jDlDm.jDmDn.jDnDo.jDoDp.jDpGl%aGlGm.jGmGn.jGnGo.jGoGp.jGpGq.jGqGr.jGrGs.jGsGt.jGtGu.jGuGv.jGv&FV%a&FW;'S%a;'S;=`&e<%l?Hb%a?HcO%a~.q!Ox~u~OY%aZp%atw%axz%a!O!P%a!Q!R.j!R!S.j!S!T.j!T!U.j!U!V.j!V!W.j!W!X.j!X!Y.j!Y!Z.j!Z![.j!]!^%a!a!}%a#O#P%a#QBn%aBoDf%aDfDg.jDgDh.jDhDi.jDiDj.jDjDk.jDkDl.jDlDm.jDmDn.jDnDo.jDoDp.jDpGl%aGlGm.jGmGn.jGnGo.jGoGp.jGpGq.jGqGr.jGrGs.jGsGt.jGtGu.jGuGv.jGv&FV%a&FW;'S%a;'S;=`&e<%l?Hb%a?HcO%a~1vO$X~~1{O$W~~2QO#v~~2VO$V~~2[O#t~~2aO#u~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O$O~~", 14, 137), new LocalTokenGroup("_~RQYZXrsX~^O#z~~", 14, 133)],
  topRules: {"Program":[0,34]},
  dynamicPrecedences: {"81":-10},
  specialized: [{term: 37, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 37, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1582
})
