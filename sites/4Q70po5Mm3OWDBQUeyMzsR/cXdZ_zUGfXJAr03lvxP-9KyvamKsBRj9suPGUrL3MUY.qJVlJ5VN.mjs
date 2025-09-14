import { __esmMin as e } from "./rolldown-runtime.CL7h_VhF.mjs";
import {
  Y as t,
  ae as n,
  ie as r,
  init_jsx_runtime as i,
  init_npm_react_18_2 as ee,
  l as te,
  p as a,
  pe as o,
  u as s,
  ue as ne,
  x as c,
} from "./react.Bo_x0BtE.mjs";
import {
  LayoutGroup as re,
  init_framer_motion_5EXT2AMG as l,
  motion as u,
} from "./motion.C8aJOl4B.mjs";
import {
  ChildrenCanSuspend as ie,
  ComponentViewportProvider as d,
  Container as f,
  GeneratedComponentContext as ae,
  Link as oe,
  NotFoundError as se,
  PathVariablesContext as ce,
  PropertyOverrides2 as p,
  RichText as m,
  addFonts as h,
  cx as g,
  getFonts as _,
  getFontsFromSharedStyle as v,
  getWhereExpressionFromPathVariables as le,
  init_framer_QIGYLLGG as y,
  useComponentViewport as ue,
  useCurrentPathVariables as de,
  useCustomCursors as fe,
  useHydratedBreakpointVariants as pe,
  useIsOnFramerCanvas as b,
  useLocaleCode as me,
  useLocaleInfo as he,
  useQueryData as x,
  useRouteElementId as ge,
  withCSS as S,
  withFX as C,
  withVariantAppearEffect as w,
} from "./framer.y4n5MTq4.mjs";
import {
  ColorsSelection as T,
  className as _e,
  css as E,
  fonts as D,
  init_Color as O,
  init_ZIat6mjgN as ve,
  init_nyDxmLt7o as ye,
  nyDxmLt7o_default as k,
} from "./shared-lib.r4QOIZLn.mjs";
import {
  className as be,
  css as A,
  fonts as j,
  init_z914AvaCh as M,
} from "./z914AvaCh.D9DzPx10.mjs";
import {
  init_r_moMIM_b as N,
  r_moMIM_b_default as P,
} from "./r_moMIM_b.OjxGABZE.mjs";
import {
  className as xe,
  css as Se,
  fonts as Ce,
  init_en3339loo as F,
} from "./en3339loo.QRvJrhvD.mjs";
import {
  className as we,
  css as I,
  fonts as L,
  init_sVtq_A8Mi as R,
} from "./sVtq_A8Mi.Jxs0ej4D.mjs";
import {
  className as Te,
  className$1 as Ee,
  className$2 as De,
  className$3 as Oe,
  className$4 as ke,
  className$5 as Ae,
  className$6 as je,
  css as z,
  css$1 as B,
  css$2 as V,
  css$3 as Me,
  css$4 as Ne,
  css$5 as Pe,
  css$6 as Fe,
  fonts as Ie,
  fonts$1 as Le,
  fonts$2 as Re,
  fonts$3 as ze,
  fonts$4 as Be,
  fonts$5 as Ve,
  fonts$6 as He,
  init_KQRBA3FAW as Ue,
  init_LaIeWlgNH as We,
  init_RBWjarm2p as Ge,
  init_U1JokgF86 as Ke,
  init_UAxxpz3TX as qe,
  init_Y9GRTHgi_ as Je,
  init_c0J97FL6s as Ye,
} from "./Y9GRTHgi_.DMibegW0.mjs";
import {
  init_kB5JQlUFw as Xe,
  kB5JQlUFw_default as H,
} from "./kB5JQlUFw.NJETB578.mjs";
import { init_ZFYIZTF16 as Ze, metadata as U } from "./ZFYIZTF16.jDEPtvVE.mjs";
var Qe,
  W,
  G,
  K,
  q,
  J,
  Y,
  $e,
  et,
  tt,
  X,
  nt,
  rt,
  Z,
  Q,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  $,
  pt,
  mt,
  ht = e(() => {
    i(),
      y(),
      l(),
      ee(),
      O(),
      ye(),
      N(),
      Xe(),
      Ye(),
      F(),
      Ue(),
      We(),
      Ge(),
      R(),
      Ke(),
      qe(),
      Je(),
      M(),
      ve(),
      Ze(),
      (Qe = C(u.div)),
      (W = _(T)),
      (G = _(P)),
      (K = _(k)),
      (q = w(k)),
      (J = {
        iDvpe6y1V: `(min-width: 1300px)`,
        vescrsvDX: `(max-width: 1023px)`,
        wGXz2iZp9: `(min-width: 1024px) and (max-width: 1299px)`,
      }),
      (Y = () => typeof document < `u`),
      ($e = `framer-Y8R93`),
      (et = {
        iDvpe6y1V: `framer-v-5gx7jr`,
        vescrsvDX: `framer-v-17qnk94`,
        wGXz2iZp9: `framer-v-1vjvvxm`,
      }),
      (tt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (X = { damping: 80, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (nt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: X,
        x: 0,
        y: 0,
      }),
      (rt = {
        filter: `blur(8px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Z = {
        damping: 80,
        delay: 0.05,
        mass: 1,
        stiffness: 200,
        type: `spring`,
      }),
      (Q = {
        effect: rt,
        repeat: !1,
        startDelay: 0,
        threshold: 0.5,
        tokenization: `element`,
        transition: Z,
        trigger: `onInView`,
        type: `appear`,
      }),
      (it = ({ query: e, pageSize: t, children: n }) => {
        let r = x(e);
        return n(r);
      }),
      (at = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (ot = { dateStyle: `medium`, timeZone: `UTC` }),
      (st = (e, t) => at(e, ot, t)),
      (ct = ({ value: e }) => {
        let t = b();
        return t
          ? null
          : a(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (lt = { Desktop: `iDvpe6y1V`, Phone: `vescrsvDX`, Tablet: `wGXz2iZp9` }),
      (ut = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: lt[r.variant] ?? r.variant ?? `iDvpe6y1V`,
      })),
      (dt = t(function (e, t) {
        let i = o(null),
          ee = t ?? i,
          l = n(),
          { activeLocale: h, setLocale: _ } = he(),
          v = ue(),
          y = de(),
          [b] = x({
            from: { alias: `ZFYIZTF16`, data: H, type: `Collection` },
            select: [
              {
                collection: `ZFYIZTF16`,
                name: `RnKlzkUAj`,
                type: `Identifier`,
              },
              {
                collection: `ZFYIZTF16`,
                name: `OLvxZOgor`,
                type: `Identifier`,
              },
              {
                collection: `ZFYIZTF16`,
                name: `tjCVoZ23o`,
                type: `Identifier`,
              },
            ],
            where: le(y, `ZFYIZTF16`),
          }),
          S = (e) => {
            if (!b)
              throw new se(
                `No data matches path variables: ${JSON.stringify(y)}`
              );
            return b[e];
          },
          {
            style: C,
            className: w,
            layoutId: E,
            variant: D,
            OLvxZOgor: O = S(`OLvxZOgor`) ?? ``,
            oNC7XILjDODhH0OBg6: ve,
            OLvxZOgorODhH0OBg6: ye,
            idODhH0OBg6: k,
            RnKlzkUAj: A = S(`RnKlzkUAj`),
            tjCVoZ23o: j = S(`tjCVoZ23o`) ?? ``,
            ...M
          } = ut(e);
        ne(() => {
          let e = U(b, h);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [b, h]),
          r(() => {
            let e = U(b, h);
            (document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport);
          }, [b, h]);
        let [N, Se] = pe(D, J, !1),
          Ce,
          F = [_e, be, we, Oe, Ee, Ae, Te, je, xe, ke, De],
          I = g($e, ...F),
          L = ge(`sVrIPIRno`),
          R = o(null),
          z = () => (Y() ? N !== `vescrsvDX` : !0),
          B = me(),
          V = st(A, B);
        return (
          fe({}),
          a(ae.Provider, {
            value: { primaryVariantId: `iDvpe6y1V`, variantClassNames: et },
            children: s(re, {
              id: E ?? l,
              children: [
                a(ct, {
                  value: `html body { background: var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(14, 14, 17)); }`,
                }),
                s(u.div, {
                  ...M,
                  className: g(I, `framer-5gx7jr`, w),
                  ref: ee,
                  style: { ...C },
                  children: [
                    a(`div`, {
                      className: `framer-15edf1h`,
                      "data-framer-name": `Spacing`,
                    }),
                    s(`div`, {
                      className: `framer-1aq6u5b`,
                      "data-framer-name": `Main`,
                      children: [
                        a(`div`, {
                          className: `framer-1euwrmj`,
                          "data-framer-name": `Trigger: Navigation`,
                          id: L,
                          ref: R,
                        }),
                        a(p, {
                          breakpoint: N,
                          overrides: {
                            vescrsvDX: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          children: s(Qe, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: tt,
                            __framer__exit: nt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1mxa4su`,
                            "data-framer-name": `Wrapper`,
                            children: [
                              s(`section`, {
                                className: `framer-gqxmfy`,
                                "data-framer-name": `Title`,
                                children: [
                                  a(p, {
                                    breakpoint: N,
                                    overrides: {
                                      vescrsvDX: { effect: void 0 },
                                    },
                                    children: a(m, {
                                      __fromCanvasComponent: !0,
                                      children: a(c, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-14qgaa`,
                                          "data-styles-preset": `ZIat6mjgN`,
                                          children: `Legal`,
                                        }),
                                      }),
                                      className: `framer-1oe5udb`,
                                      effect: Q,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(p, {
                                    breakpoint: N,
                                    overrides: {
                                      vescrsvDX: { effect: void 0 },
                                    },
                                    children: a(m, {
                                      __fromCanvasComponent: !0,
                                      children: a(c, {
                                        children: a(`h1`, {
                                          className: `framer-styles-preset-f7kodg`,
                                          "data-styles-preset": `z914AvaCh`,
                                          children: `Terms of service`,
                                        }),
                                      }),
                                      className: `framer-1skruws`,
                                      effect: Q,
                                      fonts: [`Inter`],
                                      text: O,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1g63szg`,
                                "data-framer-name": `Content`,
                                children: [
                                  z() &&
                                    a(`nav`, {
                                      className: `framer-10pqwdl hidden-17qnk94`,
                                      "data-framer-name": `[CMS] Legal menu`,
                                      children: a(ie, {
                                        children: a(it, {
                                          query: {
                                            from: {
                                              alias: `ODhH0OBg6`,
                                              data: H,
                                              type: `Collection`,
                                            },
                                            select: [
                                              {
                                                collection: `ODhH0OBg6`,
                                                name: `oNC7XILjD`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `ODhH0OBg6`,
                                                name: `OLvxZOgor`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `ODhH0OBg6`,
                                                name: `id`,
                                                type: `Identifier`,
                                              },
                                            ],
                                            where: {
                                              collection: `ODhH0OBg6`,
                                              name: `OCaOEbNus`,
                                              type: `Identifier`,
                                            },
                                          },
                                          children: (e, t, n) =>
                                            a(te, {
                                              children: e?.map(
                                                (
                                                  {
                                                    id: e,
                                                    OLvxZOgor: t,
                                                    oNC7XILjD: n,
                                                  },
                                                  r
                                                ) => (
                                                  (n ??= ``),
                                                  (t ??= ``),
                                                  a(
                                                    re,
                                                    {
                                                      id: `ODhH0OBg6-${e}`,
                                                      children: a(ce.Provider, {
                                                        value: { oNC7XILjD: n },
                                                        children: a(m, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: a(c, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-14qgaa`,
                                                              "data-styles-preset": `ZIat6mjgN`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48))`,
                                                              },
                                                              children: a(oe, {
                                                                href: {
                                                                  pathVariables:
                                                                    {
                                                                      oNC7XILjD:
                                                                        n,
                                                                    },
                                                                  webPageId: `ZFYIZTF16`,
                                                                },
                                                                motionChild: !0,
                                                                nodeId: `LOwXuuvsE`,
                                                                openInNewTab:
                                                                  !1,
                                                                scopeId: `ZFYIZTF16`,
                                                                smoothScroll:
                                                                  !1,
                                                                children: a(
                                                                  u.a,
                                                                  {
                                                                    className: `framer-styles-preset-volwgh`,
                                                                    "data-styles-preset": `sVtq_A8Mi`,
                                                                    children: `Terms of service`,
                                                                  }
                                                                ),
                                                              }),
                                                            }),
                                                          }),
                                                          className: `framer-1dad3py`,
                                                          "data-framer-name": `Menu item`,
                                                          fonts: [`Inter`],
                                                          text: t,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                    },
                                                    e
                                                  )
                                                )
                                              ),
                                            }),
                                        }),
                                      }),
                                    }),
                                  s(`section`, {
                                    className: `framer-zhe1nk`,
                                    "data-framer-name": `Text`,
                                    children: [
                                      s(`div`, {
                                        className: `framer-i9bqvd`,
                                        "data-framer-name": `Update date`,
                                        children: [
                                          a(m, {
                                            __fromCanvasComponent: !0,
                                            children: a(c, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1ma2167`,
                                                "data-styles-preset": `RBWjarm2p`,
                                                style: {
                                                  "--framer-text-color": `var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48))`,
                                                },
                                                children: `Last updated:`,
                                              }),
                                            }),
                                            className: `framer-a94gwn`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(m, {
                                            __fromCanvasComponent: !0,
                                            children: a(c, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1ma2167`,
                                                "data-styles-preset": `RBWjarm2p`,
                                                children: `Content`,
                                              }),
                                            }),
                                            className: `framer-hh5f5q`,
                                            "data-framer-name": `Date`,
                                            fonts: [`Inter`],
                                            text: V,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: j,
                                        className: `framer-1mlisqo`,
                                        "data-framer-name": `Content`,
                                        fonts: [`Inter`],
                                        stylesPresetsClassNames: {
                                          a: `framer-styles-preset-il5c47`,
                                          blockquote: `framer-styles-preset-5kuted`,
                                          h2: `framer-styles-preset-a1rvrq`,
                                          h3: `framer-styles-preset-p211ej`,
                                          h4: `framer-styles-preset-1eh7gxh`,
                                          h5: `framer-styles-preset-1fmevwe`,
                                          img: `framer-styles-preset-ezju65`,
                                          p: `framer-styles-preset-1ma2167`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a(`div`, {
                      className: `framer-eh4di7`,
                      "data-framer-name": `Code **Must be on each page`,
                      children: a(d, {
                        children: a(f, {
                          className: `framer-ce5hfa-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `xocoURntP`,
                          scopeId: `ZFYIZTF16`,
                          children: a(T, {
                            enableSelection: !0,
                            height: `100%`,
                            id: `xocoURntP`,
                            layoutId: `xocoURntP`,
                            selectionBackgroundColor: `var(--token-b5e49964-bf57-4389-8d97-5913008b6ebd, rgba(72, 70, 255, 0.16))`,
                            selectionTextColor: `var(--token-2d0a1fe9-66b7-4e55-9ef6-2872c40c6330, rgb(72, 70, 255))`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(d, {
                      height: 489,
                      width: v?.width || `100vw`,
                      y: (v?.y || 0) + 0 + 1080,
                      children: a(f, {
                        className: `framer-12bh3z7-container`,
                        nodeId: `WyprYLz7Q`,
                        scopeId: `ZFYIZTF16`,
                        children: a(p, {
                          breakpoint: N,
                          overrides: {
                            vescrsvDX: { variant: `KDyNaPM2m` },
                            wGXz2iZp9: { variant: `dliz4PR3R` },
                          },
                          children: a(P, {
                            height: `100%`,
                            id: `WyprYLz7Q`,
                            layoutId: `WyprYLz7Q`,
                            style: { width: `100%` },
                            variant: `TYCIeSgTT`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(d, {
                      height: 52,
                      width: `100vw`,
                      y: 0,
                      children: a(f, {
                        className: `framer-xhhrl2-container`,
                        layoutScroll: !0,
                        nodeId: `kg4LAxwi3`,
                        rendersWithMotion: !0,
                        scopeId: `ZFYIZTF16`,
                        children: a(p, {
                          breakpoint: N,
                          overrides: {
                            vescrsvDX: {
                              __framer__variantAppearEffectEnabled: void 0,
                              variant: `QtLCLfH8_`,
                            },
                            wGXz2iZp9: { variant: `xVCO5kcBX` },
                          },
                          children: a(q, {
                            __framer__animateOnce: !1,
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            height: `100%`,
                            id: `kg4LAxwi3`,
                            layoutId: `kg4LAxwi3`,
                            style: { width: `100%` },
                            variant: `fYVgS8NCd`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ft = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Y8R93.framer-l0z5iv, .framer-Y8R93 .framer-l0z5iv { display: block; }`,
        `.framer-Y8R93.framer-5gx7jr { align-content: center; align-items: center; background-color: var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, #0e0e11); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1300px; }`,
        `.framer-Y8R93 .framer-15edf1h { flex: none; height: 80px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-1aq6u5b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 100vh; min-width: 320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-1euwrmj { background-color: var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, #ff3d3f); flex: none; height: 1px; left: 0px; opacity: 0; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-Y8R93 .framer-1mxa4su { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: 120px 100px 80px 100px; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-gqxmfy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 960px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-1oe5udb { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Y8R93 .framer-1skruws { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Y8R93 .framer-1g63szg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 960px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-10pqwdl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 240px; padding: 0px; position: sticky; top: 120px; width: 1px; z-index: 1; }`,
        `.framer-Y8R93 .framer-1dad3py { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Y8R93 .framer-zhe1nk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y8R93 .framer-i9bqvd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-a94gwn, .framer-Y8R93 .framer-hh5f5q { --framer-paragraph-spacing: 32px; flex: none; height: auto; max-width: 640px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Y8R93 .framer-1mlisqo { --framer-paragraph-spacing: 16px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Y8R93 .framer-eh4di7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: calc(49.9609679937549% - 100% / 2); opacity: 0; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: -1; }`,
        `.framer-Y8R93 .framer-ce5hfa-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Y8R93 .framer-12bh3z7-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Y8R93 .framer-xhhrl2-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 100%; z-index: 10; }`,
        ...E,
        ...A,
        ...I,
        ...Me,
        ...B,
        ...Pe,
        ...z,
        ...Fe,
        ...Se,
        ...Ne,
        ...V,
        `@media (min-width: 1024px) and (max-width: 1299px) { .framer-Y8R93.framer-5gx7jr { width: 1024px; } .framer-Y8R93 .framer-1mxa4su { gap: 80px; padding: 80px 40px 40px 40px; } .framer-Y8R93 .framer-gqxmfy { padding: 0px 40px 0px 40px; }}`,
        `@media (max-width: 1023px) { .framer-Y8R93.framer-5gx7jr { width: 390px; } .framer-Y8R93 .framer-1aq6u5b { overflow: hidden; } .framer-Y8R93 .framer-1mxa4su { gap: 64px; max-width: 640px; padding: 48px 24px 40px 24px; } .framer-Y8R93 .framer-1g63szg { align-content: center; align-items: center; flex-direction: column; } .framer-Y8R93 .framer-zhe1nk { flex: none; width: 100%; } .framer-Y8R93 .framer-eh4di7 { flex-direction: column; }}`,
      ]),
      ($ = S(dt, ft, `framer-Y8R93`)),
      (pt = $),
      ($.displayName = `Page`),
      ($.defaultProps = { height: 3187, width: 1300 }),
      h(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...W,
          ...G,
          ...K,
          ...v(D),
          ...v(j),
          ...v(L),
          ...v(ze),
          ...v(Le),
          ...v(Ve),
          ...v(Ie),
          ...v(He),
          ...v(Ce),
          ...v(Be),
          ...v(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (mt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerZFYIZTF16`,
            slots: [],
            annotations: {
              framerScrollSections: `{"sVrIPIRno":{"pattern":":sVrIPIRno","name":"navigation"}}`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `3187`,
              framerIntrinsicWidth: `1300`,
              framerDisplayContentsDiv: `false`,
              framerResponsiveScreen: ``,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"wGXz2iZp9":{"layout":["fixed","auto"]},"vescrsvDX":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
ht();
export { mt as __FramerMetadata__, pt as default };
//# sourceMappingURL=cXdZ_zUGfXJAr03lvxP-9KyvamKsBRj9suPGUrL3MUY.qJVlJ5VN.mjs.map
