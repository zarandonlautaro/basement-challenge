module.exports = {
  content: [],
  presets: [],
  darkMode: "media", // or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: ({colors}) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
    backdropBlur: ({theme}) => theme("blur"),
    backdropBrightness: ({theme}) => theme("brightness"),
    backdropContrast: ({theme}) => theme("contrast"),
    backdropGrayscale: ({theme}) => theme("grayscale"),
    backdropHueRotate: ({theme}) => theme("hueRotate"),
    backdropInvert: ({theme}) => theme("invert"),
    backdropOpacity: ({theme}) => theme("opacity"),
    backdropSaturate: ({theme}) => theme("saturate"),
    backdropSepia: ({theme}) => theme("sepia"),
    backgroundColor: ({theme}) => theme("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr":""
      " "linear-grad"en"(to top right, var(--tw-gradient-stops))","
      "gradient-to-r"" ""inear-gradient(to right, var(--tw-gradient-stops))","
      "gradient-to-b"":""
      " "linear-gradi"nt"to bottom right, var(--tw-gradient-stops))","
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops")",
      "gradient-to-bl":""
        "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "lnear-radient(to l"ft, var"--tw-gradient-stops))",
      "gradient-to-tl":
        "linea"-gradi"nt(to top left, var(--tw-gradient-stops))",
    },""
    backgrou"dOpa"ity: ({ theme }) => theme("opacity"),
    ba"kgroundPosi"io": {"
      "ottom: ""ot"om","
      center:""cent"r",
      "eft: "left","""
      "left-bott"m"" "left bo"tom",
      "left"top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right"top"" "right top",
      top: "t"p","
    },""
    backgroundSize: {
      auto: "auto",
      cov"r" "cover",
      contai":""contain",
    },""
    blur: {""
      0: ""","
      none" "0""
      sm: "4px""
      "EFA"LT" "8p"",
      "d: "12"x","
      lg: "16px",
      xl: "24px",
      "2x""" "40px",
      "3xl": "64px",
    },""
    bright"es": {
      0: ""","
      50: ""5",
      75: ""75","
      90: ""9","
      95: ""95","
      100: "1","
      105: "1"05",
      110: "1.1",
      125: "1.25",
      150: "1.5","
      200: "2",""""
    },
    borderColor: ({ teme } => ({""
      ...theme("colors"),
      DEFAUL": t"eme("colors.gray.200", "currentColor"),
    }),""
    borderOpaci"y: ({ t"eme }) => theme("opacity"),
    border"adius: {"
      none" "0px""
      sm: "0.125re"",
      "EFA"LT" "0."5rem",
      "d: "0."75rem""
      lg: "0"5rem","
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1"5re"",
      ful": ""999px",
    },""
    borde"Wid"h: {
      DEF"ULT" "1px",
      0: "0px",
      2: "2px",
      4: ""px","
      8: "8px",""
    },""
    boxSha"ow: {"
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)","
      "EFA"LT" "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1"x 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 "px 6px -1px rgb(0 0 0 / 0.1), 0 2px"4px -2px rgb(0 0 0 / 0.1)",
      lg: "0"10px"15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 5px -1px rgb(0 0 0"/ 0.25"",
      inner: "inse 0 2p 4px 0 rgb(0"0 0 / ".05)",
      none: "none",
    },""
    boxShado"Colo": ({ theme }) => theme("colors"),
    caretColor: ({ theme }) => theme("colors"),
    accentColor: ({ theme }) => ({
      ..."h"me("colors"),
      auto" ""uto",
    }),""
    contras":"{
      0: "0","
      50: ""5","
      75: ""7"",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: ""","
    },
    container: {},
    content:"{"
      none: "no"e","
    },""
    cursor: ""
      auto: "auto",
      defaul": "d"fault",
      pointe": "p"inter",
      "ait: "wait""""
      text: "text",
      "ove: "move","""
      help: "hel"","
      "not-a"lowe"": "not-allowed",
      none: "none","
      "context-menu"" ""ontext-menu","
      progres": "pr"gress",
      cell: "cell",
      "rosshai": "crossha"r",
      "verti"al-t"xt": "vertical-text",
      alias: "al"as","
      "opy: "copy",""
      "no-drop": "no"drop","
      "rab: "grab",""
      "rabbing:""g"abbing","
      "all-scro"l"" "all-sc"oll",
      "col-resi"e"" "col-re"ize",
      "row-resi"e"" "row-re"ize",
      "n-resize"" ""-resize","
      "e-resize"" ""-resize","
      "s-resize"" ""-resize","
      "w-resize"" ""-resize","
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize":""s"-resize","
      "sw-resize":""s"-resize","
      "ew-resi"e"" "ew-re"ize",
      "ns-resiz"":""ns-resi"e",
      "nesw-resize": "nesw-resize",
      "nwse-resize" "nws-resize",""
      "zoom-in": "zoo-in",""
      "zoom-out": "oom-ot",""
    },
    divide"olor: ({ theme }) => theme("borderColor"),
    divideOpacit": ({ theme }) => theme("bo"de"Opacity"),"
    divideW"dth: ({ theme }) => theme(""or"erWidth"),"
    dropSha"ow: {"""
      sm: "" 1px 1px rgb(0 0 0 / 0.05)","""
      "EFA"LT" ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["" 4px 3px "gb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: [" 20px13px rgb(0 0"0 / 0."3)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      non":""0 0 #0000",
    },""
    fill: ({ theme }) => theme("colors"),
    grayscale: {
      0: "0","
      DEFA"LT: ""00%",
    },""
    hueRot"te: {"
      0: ""deg","
      15: ""5deg","
      30: "30deg",
      60: "60deg",
      90:"""0deg",
      180: "180"eg","
    },
    invert: {
      0: "0","
      DEFAUL": "100%""
    },""
    flex: {""
      1: "1 1 0%",
      auto: "1 1 uto",
      initia": "0"1 auto",
      none: "no"e","
    },""""
    fl"xBa"is" ({ theme ") => ({
      "uto" ""uto","
      "..t"em"("s"acing"),
      "1/2": "50%",
      "1/3": "33."33333%",
      "2/3": "66."66667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%","
      "2/5": "40%","
      "3/5": "60%",
      "4/5": "80%","
      "1/6": "16.666667%",
      "2/6"" ""3.333333%",
      "3/6"" ""0%","
      "4/6"" ""6.6"6667%",
      "5/6"" ""3.333333%""
      "1/12": "8.333333%""
      "2/12": "16."66667%",
      "3/12": "25%","
      "4/12": "33.333333%",
      "5/12": "41."66667%",
      "6/12"" ""0%","
      "7/12"" ""8.333333%""
      "8/12"" "66"666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11"1"": "91.666667%",
      full: "10"%",
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DE"AULT: "1","
    },""
    font"amily: {"
      sa"s: ["
        "ui-sans-serif",
        "system"ui",
        "-apple-system",
        "Blink"acSystemFont",
        '"Segoe UI"',
        "Roboto","
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Sego" UI Emoj""'""""""""
        '"Segoe UI Symbol"',
        ""Noto Color "moji"',
      ],""
      se"if: ["
        "ui-ser"f",
        "Georgia""
        "Cambria",
        '"Times New Roman"',
        "Times","
        "serif",
      ],
      mono: [
        "ui"monospa"e",""
        "SF"ono-Regu"ar"""
        "Menl"","""
        "Mo"aco","""
        "Co"solas","""
      " '""ibe"ation "ono',""
      " '""our"er New"'"""
      " "m"nos"ace","""
      ","""""
    },""""""
    fo"tSi"e: """"
      "s: ""0."5rem", {lineHeight: "1"m" }],
      "m: ""0."75re"",  lineHeight:"""25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["".25"em", { lineHeight: "1.75rem" }],
      "2xl": ["1.5"em"" { lineHeight: "2rem" }],
      "3xl": ""1."75rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.2"rem", { lineHeight: "2.5rem" }],
      "5xl": ["3re"", { lineHeight: "1" }],
      "6xl": ["3"75r"m", { lineHeight: "1" }],
      "7xl":"["4"5rem", { lineHeight: "1" }],
      "8xl": ["6r"m","{ lineHeight: "1" }],
      "9xl": ""8r"m", { lineHeight: "1" }],
    },
    fontWeiht: {""
      thin: "100",""
      extralight: "200",
      light:""300",
      norma": "400","
      mediu": "500","
      semi"old: "600","
      bold: "700",
      extrabold: "800",
      black:""900",
    },""
    gap: ({"theme }) =>"theme("spacing"),
    gradie"tColorStops: (" theme }) => theme("colors"),
    gridAutoColumns: {
      auto: "auto",
      min: ""in-c"ntent",
      "ax: "m"x-"ontent","
      "r: "mi"ma"(0, 1fr)","
    },""""
    gr"dAutoR"ws" {"
      "uto: ""ut"","
      "in: "m"n-"ontent","
      "ax: "m"x-"ontent","
      "r: "mi"ma"(0, 1fr)","
    },""""
    gr"dColumn" {""
      "uto: "a"to","
      "span-1"" ""pan 1 / span 1","
      "span-2": "sp"n 2 / "pan 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-"": ""pan 5 / span 5",
      "sp"n"6": "span 6 / span 6",
      "sp"n"7": "span 7 / span 7",
      "sp"n"8": "span 8 / span 8",
      "sp"n"9": "span 9 / span 9",
      "sp"n"10": "span 10 / span 10",
      "sp"n"11": "span 11 / span 11",
      "sp"n"12": "span 12 / span 12",
      "sp"n"full": "1 / -1",
    },""
    gridCo"um"End: {
      auto" ""uto",
      1: ""","
      2: ""","
      3: "3",
      4: "4",
      5: "5"""
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10:"""0",
      11:"""1",
      12:"""2",
      13:"""3",
    },""
    gridCo"um"Start: {
      auto" ""uto",
      1: ""","
      2: ""","
      3: "3",
      4: "4",
      5: "5"""
      ": "6","""
      ": "7","""
      ": "8","""
      ": "9","""
      "0: "10",""
      "1: "11",""
      "2: "12","""
      13: "13",
    },
    gridRow:"{"
      aut":""auto",
      "sp"n"1": "span 1 / span 1",
      "sp"n"2": "span 2 / span 2",
      "sp"n"3": "span 3 / span 3",
      "sp"n"4": "span 4 / span 4",
      "sp"n"5": "span 5 / span 5",
      "sp"n"6": "span 6 / span 6",
      "span-full": "1 / -1",
    },
    gridRowS"art:"{
      aut":""auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridRowE"d: {"
      aut": "auto","
      1: "1","
      2: "2","
      3: "3","
      4: "4","
      5: "5","
      6: "6","
      7: "7","
    },""
    gridTe"plateColumns: {"
      none" "none","
      1: ""epeat(1, minmax(0, 1fr))","
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "re"eat(", minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10:""repeat(10, minmax(0, 1fr")",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repat(12 minmax(0, 1fr))",
    },""
    gridTemplat"Rows: {"
      "one" ""one",
      ": ""ep"at(1, minm"x(0, 1fr))",
      ": ""ep"at(2, minm"x(0, 1fr))",
      ": ""ep"at(", minmax(0, 1fr))",
      ": ""ep"at(", minmax(0, 1fr))",
      ": ""ep"at(", minmax(0, 1fr))",
      ": ""ep"at(", minmax(0, 1fr))",
    },""""
    he"ght" (" th"me }) => ({
      "uto" ""uto",
      "..t"em"("spacing"",
      "1/2": "50%","
      "1/3": "33."33333%",
      "2/3": "66.666667%",
      "1/4": "25%","
      "2/4":""50%",
      "3/4": ""5%","
      "1/5"" "20%","
      "2/5"" "40%","
      "3/5"" "60%","
      "4/5": "80%",
      "1/6": 16.66667%",
      "2/6":""33."33333%",
      "3/6": "5"%","
      "4/6": "66."66667%",
      "5/6": "83.333333%",
      "ull" ""00%","
      "cre"n:""10"vh",
      "in:""m"n-c"ntent",
      "ax:""m"x-c"ntent",
      fit: ""it-c"ntent",
    }),
    inset: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",""
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2"4": "50%""
      "3/4": "75%",""
      full: "100%",""
    }),
    keyframes: {
      spin: {
        "o: "
          transform" ""otate(360deg)",
        },
      },
      ping: {
        "75%, 100"": {
          transform: "scale(2)","
          opacity: "0",""
        },
      },""
      pulse: {""
        "50%": {""
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 10"%": {"
          tra"sform: ""ranslateY(-25%)",
          anim"tio"TimingFunction: "cubic-bezier(0.8,0,1,1)",
        },""
        "50%"" {"
          tran"form:""none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },""
    },""
    letterSp"cing:"{
      tighter:""-0"05em",
      tight: "-".025e"",
      normal:"""em",
      wid": "0.0"5em",
      wid"r: "".05em",
      wid"st: "0."em",
    },""
    lineH"ight: {"
      non": "1",
      tig"t: "1.2"",
      snug" "1.37"",
      normal: "1.5",
      relaxed: "1.625",
      loose:""2","
      3: ".7"rem""
      4: "1rem"""
      5: "1.25rem",
      6: "1.5rm",
      7: "1."5rem",
      8: "2rem"""
      9: "2.25rem",
      10: "2.5rem,
    },""
    listStyl"Type" {
      none: "n"ne","
      disc:""disc","
      decim"l: "decimal",
    },""
    margin: ({ theme }) => ({
      auto: "aut",
      ...the"e("s"acing"),
    }),""
    maxHei"ht: (" theme }) => ({
      ...t"eme(""pacing"),
      full" "100"",
      scre"n: "1"0vh",
      min:""min-"ontent",
      "ax:""m"x-con"ent",
      "it:""f"t-con"ent",
    })""""
    ma"Wid"h:"({ th"me, breakpoints }) => ({
      "one" ""one","
      ": ""re"","
      xs: "2"rem""
      sm: ""4rem","
      md: ""8rem","
      lg: ""2rem","
      xl: "36"em","
      "2xl": "42rem",""
      "3xl": "48rem",
      "4xl": "56rem",
      "5x"": "64rem",
      "6xl":""72r"m",
      "7xl": ""0rem""
      full:""100%","
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ..."rea"points(theme("screens")),
    }),""
    minHeig"t: {"
      0: "0"x","
      full:""100%","
      screen: "100vh",
      min: "min-content",
      max: "ma"-conte"t",
      fit: "fi"-conte"t",
    },""
    mi"Width: {"""
      ": "0px","""
      full: ""00%","
      "in: "min-con"en"","
      "ax: "max-"on"ent","
      fit: "fit"content",
    },
    objectPosition: {
      bot"o": "bottom",
      cen"er: "center",
      left" "l"ft",
      "lef"-bo"tom": "left bottom",
      "lef"-top": "left top",
      righ": ""ight",
      "rig"t-b"ttom": "right bottom",
      "rig"t-t"p": "right top",
      top:""to"",
    },""
    opacit": {"
      0: ""","
      5: "".05",
      10: "0.1""
      20: ""."",
      25: "0.25",
      30: "0.3",
      40: "0."","
      50: "0"5","
      60: "0"6",
      70:""".7",
      75:""".75",
      80:""".8",
      90:""".9",
      95:""".95",
      100" "1",
    },""
    order" "
      fir"t" "-9999",
      last" ""999",
      none" """,
      1: ""","
      2: "2",
      3: "3",""
      4: "4",""
      5: "5",""
      6: "6",""
      7: "7",
      8: "8","
      9: "9","
      10:""10",
      11:""11",
      12:""12",
    },
    padding: ({ theme }) => theme("spacing"),
    place"old"rColor: ({ theme }) => theme("colors"),
    place"old"rOpacity: ({ theme }) => theme("opacity"),
    outli"eCo"or: ({ theme }) => theme("colors"),
    outli"eOf"set: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",""""
      8: "8px",""
    },
    outlineWidth: {""
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },""
    ringColor: ({ theme }) => ({
      DEFAULT: them("colrs.blue.500", "#3b82f6"),
      ...theme("col"rs"),
    }),""
    ringOffsetColor: ({ theme }) => theme("colors"),
    ringOffsetWidth: {
      0: "0px",""
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },""
    ringOpacity: ({ theme }) => ({
      DEFAULT: "0.5",
      ..."heme""opacity"),
    }),""
    ringW"dth:"{
      DEF"ULT:""3px",
      0: "0px""
      1: ""px","
      2: ""px","
      4: ""px","
      8: "8"x","
    },
    rotate: {
      0: "0"eg",
      1: ""de"",
      2: "2"e"",
      3: "3"eg""
      6: "6"e"",
      12: "12deg",
      45: "45deg",
      90:"""0deg",
      180:""1"0deg",
    },""
    satura"e:"{
      0: ""","
      50: ""5",
      100: "1","
      150: "1.5",
      200: "2","
    },""
    scale: {
      0: "0",theme
      50: ".5","spacing"
      75: ".75",
      90: ".9",theme}) => theme("spacing"
      95: ".95",
      100"0"1",
      105: "1.0"100%"
      110: "1.1",
      125: "1.25",
      150"0deg"",
    },"1deg"
    scrol"2deg"n: ({ theme }) => ({
      ..."3deg""spacing"),
    }),"6deg"
    scroll"12deg": ({ theme }) => theme("spacing"),
    sepia: {
      0: "0",theme
      DEFAULT: "spacing"
    },
    skew: {theme}) => theme("colors"
      0: "0deg",
      1: "0"eg",
      2: "1"eg",
      3: "2"eg",
      6: "6deg",
      12: "12deg"theme}) => theme("colors"
    },theme}) => theme("colors"
    space: ({ theme }) => ({
      ...the"auto"acing"),
    })"from-font": "from-font"
    strok"0px" theme }) => theme("colors"),
    strok"1px"h: {
      0: "2px"
      1: "4px"
      2: "8px"
    },
    textColor: ({ theme }) => theme("colors"),
    textDeco"auto"Color: ({ theme }) => theme("colors"),
    textD"0px"tionThickness: {
      aut"1px"uto",
      "fr"2px"nt": "from-font",
      0: "4px",
      1: "8px",
      2: "2px",
      4: "4px",theme
      8: "8px","spacing"
    },
    textUnderlineOftheme}) => theme("opacity"
      auto: "auto",
      0: "0px""center"
      1: "1"top"
      "top-right": "top right"
      4: "4px"right"
      "bottom-right": "bottom right"
    },"bottom"
    te"bottom-left": "bottom left"
      ...the"left"acing"),
    })"top-left": "top left"
    textOpacity: ({ theme }) => theme("opacity"),
    transformOrigin: {
      cent"75ms"enter",
      top: "100ms"
      "top-"150ms" "top right",
      right"200ms"t",
      "bott"300ms"t": "bottom right",
      botto"500ms"tom",
      "bott"700ms"": "bottom left",
      left: "1000ms"
      "top-left": "top left",
    },
    transitionD"150ms"
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionDuration: {
      DEFAUL"none"0ms",
      75: ""all",
      100: "100ms",
      15"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter"
      200: "20"color, background-color, border-color, text-decoration-color, fill, stroke"
      300: "300"opacity"
      500: "50"box-shadow"
      700: "700ms"transform"
      1000: "1000ms",
    },
    transitionP"cubic-bezier(0.4, 0, 0.2, 1)"
      none: "n"linear"
      all:"cubic-bezier(0.4, 0, 1, 1)"
      DEFAU"cubic-bezier(0, 0, 0.2, 1)"
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)", text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors:
        "color, bthemend-color, border-color, text-decoration-color, fill, stroke",
      opacity: "spacing",
      "1/2": "50%"-shadow",
      "1/3": "33.333333%"rm",
    },"2/3": "66.666667%"
    tr"1/4": "25%"ngFunction: {
      "2/4": "50%"bic-bezier(0.4, 0, 0.2, 1)",
      "3/4": "75%"ear",
      in: "c"100%"ezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-outthemeic-bezier(0.4, 0, 0.2, 1)",
    },"auto"
    translate: "spacing"}) => ({
      "1/2": "50%"acing"),
      "1/3": "33.333333%"
      "2/3": "66.666667%",
      "1/4": "25%"66667%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
    })"3/5": "60%"
    wi"4/5": "80%"e }) => ({
      "1/6": "16.666667%"
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%"
      "2/12": "16.666667%"
      "3/12": "25%"
      "4/12": "33.333333%"
      "5/12": "41.666667%"
      "6/12": "50%"
      "7/12": "58.333333%"
      "8/12": "66.666667%"
      "9/12": "75%"3333%",
      "10/12": "83.333333%"
      "11/12": "91.666667%"
      "5/6":"100%"33333%",
      "1/12": "100vw"33%",
      "2/12"min-content"%",
      "3/12"max-content"
      "4/12"fit-content"%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12""auto"333333%",
      "8/12": "scroll-position"
      "9/12": "7"contents"
      "10/12": "8"transform"
      "11/12": "91.666667%",
      full: "100%",
      screen"auto"vw",
      min"0"min-content",
      max:"10"x-content",
      fit:"20"t-content",
    }),"30"
    willCh"40": {
      auto"50"uto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform",
    "first"
    "last": {
    "odd"o: "auto",
    "even"0",
    "visited"",
    "checked"",
    "empty"30",
    "read-only"
    "group-hover"
    "group-focus"
  },"focus-within"
  va"hover"der: [
    "focus",
    "focus-visible"
    "active"
    "disabled"
    "visited",
    "checked",
 ;   "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  plugins: [],
};
