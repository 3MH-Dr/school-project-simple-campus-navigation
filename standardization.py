"""
"a"
"b"
"c"
"d"
"e"
"f"
"g"
"h"
"aj"
"bj"
"cj"
"dj"
"ej"
"fj"
"gj"
"t"
"s1"
"s2"
"s3"
"s4"
"d1"
"d2"
"x1"
"x2"
"n1"
"n2"
"b1"
"c1"
"c2"
"ss1"
"ss2"
"j"
"m"
"z"
"y"
"1"
"2"
"3"
"4"
"5"
"6"
"7"
"8"
"9"
"10"
"11"
"12"
"13"
"14"
"15"
"16"
"17"
"18"
"19"
"20"
"""

str_list=[
    "lx11",
    "l12",
    "l2n1",
    "l23",
    "l34",
    "l4m",
    "l45",
    "l5n2",
    "l5a",
    "lab",
    "lbc",
    "lcd",
    "ldt",
    "lt11",
    "l11s1",
    "ls110",
    "l109",
    "l91",
    "l93",
    "ls1ss1",
    "l118",
    "l98",
    "l87",
    "l7c",
    "l7m",
    "l10x2",
    "l1012",
    "l1214",
    "l1415",
    "l15b1",
    "lb1y",
    "l1516",
    "l16c1",
    "l16s2",
    "l1617",
    "l1713",
    "lss2s3",
    "l13ss2",
    "ls314",
    "lss212",
    "lss2s1",
    "l1311",
    "lzaj",
    "lbbj",
    "lccj",
    "lddj",
    "leej",
    "lffj",
    "lggj",
    "laz",
    "lz6",
    "l6aj",
    "lajd1",
    "lajbj",
    "lbjcj",
    "lcjdj",
    "ldjej",
    "lejfj",
    "lfjgj",
    "ldjj",
    "lje",
    "ldjh",
    "lgj19",
    "lgj18",
    "l1819",
    "l19c2",
    "l19d2",
    "ltf",
    "lfg",
    "lfe",
    "l1718",
    "lg17",
    "l56"
]
def standardize(stt):
    empt=[]
    for i,term in enumerate(stt):
        if i!=len(stt)-1:
            stt1="l"+term+stt[i+1]

            if stt1 in str_list:
                empt.append("l"+term+stt[i+1])
            else:
                empt.append("l"+stt[i+1]+term)
    return empt
def standardize_utra(stt,right):
    result = []
    for stuff in stt:
        empt = []
        for i,term in enumerate(stuff):
            et=[]
            et.append(term[-1])
            et.append(term[-2])
            if(et==standardize(right)):
                break
            empt.append(standardize(et))
        empt.reverse()
        result.append(empt)
    return result



