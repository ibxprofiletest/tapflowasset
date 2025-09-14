import { __esmMin as e } from "./rolldown-runtime.CL7h_VhF.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  init_ssg_sandbox_shims as a,
  navigator as o,
  p as s,
  pe as c,
  re as l,
  se as u,
  te as d,
  u as f,
  ue as p,
  window as m,
  x as h,
  ye as g,
} from "./react.Bo_x0BtE.mjs";
import {
  LayoutGroup as _,
  MotionConfigContext as v,
  init_framer_motion_5EXT2AMG as y,
  motion as b,
  useAnimationControls as ee,
} from "./motion.C8aJOl4B.mjs";
import {
  ComponentViewportProvider as x,
  ControlType as S,
  Image2 as C,
  Link as w,
  RenderTarget as T,
  ResolveLinks as E,
  RichText as D,
  SmartComponentScopedContainer as O,
  addFonts as k,
  addPropertyControls as A,
  cx as j,
  fontStore as M,
  getFonts as N,
  getFontsFromSharedStyle as P,
  getLoadingLazyAtYPosition as F,
  inferInitialRouteFromPath as te,
  init_framer_QIGYLLGG as I,
  useActiveVariantCallback as L,
  useComponentViewport as R,
  useIsInCurrentNavigationTarget as z,
  useLocaleInfo as B,
  useRouter as ne,
  useVariantState as V,
  withCSS as H,
  withFX as U,
  withOptimizedAppearEffect as re,
} from "./framer.y4n5MTq4.mjs";
var ie,
  W,
  G,
  ae,
  K,
  q = e(() => {
    I(),
      (ie = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (W = {
        ...ie,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (G = {
        onClick: { type: S.EventHandler },
        onMouseEnter: { type: S.EventHandler },
        onMouseLeave: { type: S.EventHandler },
      }),
      (ae = {
        type: S.Number,
        title: `Font Size`,
        min: 2,
        max: 200,
        step: 1,
        displayStepper: !0,
      }),
      (K = {
        font: {
          type: S.Boolean,
          title: `Font`,
          defaultValue: !1,
          disabledTitle: `Default`,
          enabledTitle: `Custom`,
        },
        fontFamily: {
          type: S.String,
          title: `Family`,
          placeholder: `Inter`,
          hidden: ({ font: e }) => !e,
        },
        fontWeight: {
          type: S.Enum,
          title: `Weight`,
          options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          optionTitles: [
            `Thin`,
            `Extra-light`,
            `Light`,
            `Regular`,
            `Medium`,
            `Semi-bold`,
            `Bold`,
            `Extra-bold`,
            `Black`,
          ],
          hidden: ({ font: e }) => !e,
        },
      });
  });
function oe(e, t) {
  return J(!0, e, t);
}
function se(e, t) {
  return J(!1, e, t);
}
function J(e, t, n = !0) {
  let r = z();
  p(() => {
    n && r === e && t();
  }, [r]);
}
var Y = e(() => {
    I(), i();
  }),
  ce = e(() => {
    i();
  }),
  le = e(() => {
    I();
  }),
  ue = e(() => {
    I();
  }),
  de = e(() => {
    i();
  }),
  X = e(() => {
    I();
  }),
  fe,
  pe,
  me = e(() => {
    a(),
      i(),
      (fe = () => {
        if (o !== void 0) {
          let e = o.userAgent.toLowerCase(),
            t =
              (e.indexOf(`safari`) > -1 ||
                e.indexOf(`framermobile`) > -1 ||
                e.indexOf(`framerx`) > -1) &&
              e.indexOf(`chrome`) < 0;
          return t;
        } else return !1;
      }),
      (pe = () => u(() => fe(), []));
  }),
  he = e(() => {
    i(), ue();
  }),
  ge = e(() => {
    i(), I(), ue(), ce();
  }),
  _e = e(() => {
    I(), i(), q();
  });
function ve() {
  let e = u(() => T.current(), []);
  return e;
}
function ye() {
  let e = u(() => T.current() === T.canvas, []);
  return e;
}
var be = e(() => {
    i(), I();
  }),
  xe = e(() => {
    i();
  });
function Se(e) {
  let {
      borderRadius: t,
      isMixedBorderRadius: n,
      topLeftRadius: r,
      topRightRadius: i,
      bottomRightRadius: a,
      bottomLeftRadius: o,
    } = e,
    s = u(
      () => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`),
      [t, n, r, i, a, o]
    );
  return s;
}
var Ce,
  we,
  Te = e(() => {
    i(),
      I(),
      (Ce = {
        borderRadius: {
          title: `Radius`,
          type: S.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [
            `topLeftRadius`,
            `topRightRadius`,
            `bottomRightRadius`,
            `bottomLeftRadius`,
          ],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (we = {
        padding: {
          type: S.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      });
  });
function Ee(e) {
  return (
    p(() => {
      if (e.enableSelection) {
        let t = `selection-styles`,
          n = document.getElementById(t);
        n && n.remove();
        let r = document.createElement(`style`);
        (r.id = t),
          (r.innerHTML = `
        ::selection { 
          background: ${e.selectionBackgroundColor};
          color: ${e.selectionTextColor};
        }
        ::-moz-selection { 
          background: ${e.selectionBackgroundColor};
          color: ${e.selectionTextColor};
        }`),
          document.head.appendChild(r);
      } else {
        let e = document.getElementById(`selection-styles`);
        e && e.remove();
      }
    }, [e.enableSelection, e.selectionBackgroundColor, e.selectionTextColor]),
    s(`div`, {})
  );
}
var De = e(() => {
    r(),
      i(),
      I(),
      (Ee.displayName = `Selection colors`),
      A(Ee, {
        enableSelection: {
          title: `Selection`,
          type: S.Boolean,
          defaultValue: !0,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          description: `Use to change the colour of selected text and background`,
        },
        selectionBackgroundColor: {
          title: `Background`,
          type: S.Color,
          defaultValue: `#000`,
          hidden(e) {
            return !e.enableSelection;
          },
        },
        selectionTextColor: {
          title: `Text color`,
          type: S.Color,
          defaultValue: `#fff`,
          hidden(e) {
            return !e.enableSelection;
          },
        },
      });
  }),
  Oe,
  ke,
  Ae,
  je = e(() => {
    I(),
      M.loadFonts([
        `FR;InterDisplay-SemiBold`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-Italic`,
      ]),
      (Oe = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ke = [
        `.framer-2NkpP .framer-styles-preset-ijyc80:not(.rich-text-wrapper), .framer-2NkpP .framer-styles-preset-ijyc80.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ae = `framer-2NkpP`);
  }),
  Me,
  Ne,
  Pe,
  Fe = e(() => {
    I(),
      M.loadFonts([
        `FR;InterDisplay`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-Italic`,
      ]),
      (Me = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ne = [
        `.framer-qgMW9 .framer-styles-preset-1x04h7g:not(.rich-text-wrapper), .framer-qgMW9 .framer-styles-preset-1x04h7g.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Pe = `framer-qgMW9`);
  }),
  Ie,
  Le,
  Re,
  ze = e(() => {
    I(),
      M.loadFonts([
        `FR;InterDisplay-Medium`,
        `FR;InterDisplay-SemiBold`,
        `FR;InterDisplay-SemiBoldItalic`,
        `FR;InterDisplay-MediumItalic`,
      ]),
      (Ie = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Le = [
        `.framer-je2T7 .framer-styles-preset-1ib9ynh:not(.rich-text-wrapper), .framer-je2T7 .framer-styles-preset-1ib9ynh.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, #0e0e11); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1299px) and (min-width: 0px) { .framer-je2T7 .framer-styles-preset-1ib9ynh:not(.rich-text-wrapper), .framer-je2T7 .framer-styles-preset-1ib9ynh.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 500; --framer-letter-spacing: 0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, #0e0e11); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Re = `framer-je2T7`);
  }),
  Be,
  Ve,
  He,
  Ue = e(() => {
    I(),
      M.loadFonts([
        `FR;InterDisplay-SemiBold`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-SemiBoldItalic`,
      ]),
      (Be = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (Ve = [
        `.framer-kfIXr .framer-styles-preset-e0i4gn:not(.rich-text-wrapper), .framer-kfIXr .framer-styles-preset-e0i4gn.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.04em; --framer-line-height: 80%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (He = `framer-kfIXr`);
  }),
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt = e(() => {
    r(),
      I(),
      y(),
      i(),
      Ue(),
      (We = [`giHa8iCLq`]),
      (Ge = `framer-TcO4X`),
      (Ke = { giHa8iCLq: `framer-v-vf9w8c` }),
      (qe = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Je = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (Ye = b(h)),
      (Xe = ({
        background: e,
        height: t,
        id: n,
        text: r,
        textColor: i,
        width: a,
        ...o
      }) => {
        var s, c, l;
        return {
          ...o,
          VRNDXSwE9:
            (s = e ?? o.VRNDXSwE9) ??
            `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
          X7BXT0DN4: (c = r ?? o.X7BXT0DN4) ?? `Badge`,
          yF8Wiw9dW:
            (l = i ?? o.yF8Wiw9dW) ??
            `var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72))`,
        };
      }),
      (Ze = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Qe = t(function (e, t) {
        let { activeLocale: r, setLocale: i } = B(),
          {
            style: a,
            className: o,
            layoutId: l,
            variant: u,
            X7BXT0DN4: d,
            yF8Wiw9dW: f,
            VRNDXSwE9: p,
            ...m
          } = Xe(e),
          {
            baseVariant: g,
            classNames: v,
            clearLoadingGesture: y,
            gestureHandlers: ee,
            gestureVariant: x,
            isLoading: S,
            setGestureState: C,
            setVariant: w,
            variants: T,
          } = V({
            cycleOrder: We,
            defaultVariant: `giHa8iCLq`,
            variant: u,
            variantClassNames: Ke,
          }),
          E = Ze(e, T),
          O = c(null),
          k = n(),
          A = [He],
          M = R();
        return s(_, {
          id: l ?? k,
          children: s(Ye, {
            animate: T,
            initial: !1,
            children: s(Je, {
              value: qe,
              children: s(b.div, {
                ...m,
                ...ee,
                className: j(Ge, ...A, `framer-vf9w8c`, o, v),
                "data-framer-name": `Variant 1`,
                layoutDependency: E,
                layoutId: `giHa8iCLq`,
                ref: t ?? O,
                style: {
                  backgroundColor: p,
                  borderBottomLeftRadius: 32,
                  borderBottomRightRadius: 32,
                  borderTopLeftRadius: 32,
                  borderTopRightRadius: 32,
                  ...a,
                },
                children: s(D, {
                  __fromCanvasComponent: !0,
                  children: s(h, {
                    children: s(b.p, {
                      className: `framer-styles-preset-e0i4gn`,
                      "data-styles-preset": `lANTtZW42`,
                      style: {
                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-yF8Wiw9dW-uTnmg44b1))`,
                      },
                      children: `Badge`,
                    }),
                  }),
                  className: `framer-10ccapt`,
                  fonts: [`Inter`],
                  layoutDependency: E,
                  layoutId: `VbIHCbwbJ`,
                  style: {
                    "--extracted-r6o4lv": `var(--variable-reference-yF8Wiw9dW-uTnmg44b1)`,
                    "--framer-paragraph-spacing": `0px`,
                    "--variable-reference-yF8Wiw9dW-uTnmg44b1": f,
                  },
                  text: d,
                  verticalAlignment: `top`,
                  withExternalLayout: !0,
                }),
              }),
            }),
          }),
        });
      })),
      ($e = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-TcO4X.framer-1bqqqwk, .framer-TcO4X .framer-1bqqqwk { display: block; }`,
        `.framer-TcO4X.framer-vf9w8c { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: 24px; justify-content: center; overflow: visible; padding: 0px 8px 0px 8px; position: relative; width: min-content; }`,
        `.framer-TcO4X .framer-10ccapt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TcO4X.framer-vf9w8c { gap: 0px; } .framer-TcO4X.framer-vf9w8c > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-TcO4X.framer-vf9w8c > :first-child { margin-left: 0px; } .framer-TcO4X.framer-vf9w8c > :last-child { margin-right: 0px; } }`,
        ...Ve,
      ]),
      (et = H(Qe, $e, `framer-TcO4X`)),
      (tt = et),
      (et.displayName = `Badge`),
      (et.defaultProps = { height: 24, width: 66 }),
      A(et, {
        X7BXT0DN4: {
          defaultValue: `Badge`,
          displayTextArea: !1,
          title: `Text`,
          type: S.String,
        },
        yF8Wiw9dW: {
          defaultValue: `var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72)) /* {"name":"Dark 72"} */`,
          title: `Text color`,
          type: S.Color,
        },
        VRNDXSwE9: {
          defaultValue: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63)) /* {"name":"Attention 100"} */`,
          title: `Background`,
          type: S.Color,
        },
      }),
      k(
        et,
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
          ...P(Be),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function rt(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  Z,
  vt = e(() => {
    r(),
      I(),
      y(),
      i(),
      Fe(),
      ze(),
      nt(),
      (it = N(tt)),
      (at = {
        qZMGAGPE0: { hover: !0 },
        symjmldSc: { hover: !0 },
        UkUfAzkeL: { hover: !0 },
      }),
      (ot = [
        `symjmldSc`,
        `qZMGAGPE0`,
        `M28i9A74g`,
        `pvwC0M2D3`,
        `UkUfAzkeL`,
        `tHbpqM7yv`,
      ]),
      (st = `framer-sI6sN`),
      (ct = {
        M28i9A74g: `framer-v-1jgt2kj`,
        pvwC0M2D3: `framer-v-9e86c9`,
        qZMGAGPE0: `framer-v-1j7jq13`,
        symjmldSc: `framer-v-hecye6`,
        tHbpqM7yv: `framer-v-1b990dx`,
        UkUfAzkeL: `framer-v-118ix00`,
      }),
      (lt = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (ut = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (dt = b.create(h)),
      (ft = {
        "Ghost / Submenu opened ": `M28i9A74g`,
        "Ghost / Tab Selected": `pvwC0M2D3`,
        Blue: `UkUfAzkeL`,
        Ghost: `tHbpqM7yv`,
        White: `symjmldSc`,
      }),
      (pt = ({
        badge: e,
        badgeColor: t,
        badgeText: n,
        click: r,
        height: i,
        hover: a,
        id: o,
        link: s,
        newTab: c,
        text: l,
        width: u,
        ...d
      }) => ({
        ...d,
        Kr62I1Ee9: s ?? d.Kr62I1Ee9,
        Mv16WKTEe: l ?? d.Mv16WKTEe ?? `Button`,
        NctncU19N:
          t ??
          d.NctncU19N ??
          `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
        r9wjJW8ZN: e ?? d.r9wjJW8ZN,
        s4QYqX_Ju: r ?? d.s4QYqX_Ju,
        UU0IU6Qs2: a ?? d.UU0IU6Qs2,
        variant: ft[d.variant] ?? d.variant ?? `symjmldSc`,
        XiCzUhcM5: c ?? d.XiCzUhcM5,
        xkpUt4F21: n ?? d.xkpUt4F21 ?? `New`,
      })),
      (mt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ht = t(function (e, t) {
        let r = c(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: l } = B(),
          u = R(),
          {
            style: d,
            className: p,
            layoutId: m,
            variant: g,
            Mv16WKTEe: v,
            Kr62I1Ee9: y,
            XiCzUhcM5: ee,
            s4QYqX_Ju: S,
            UU0IU6Qs2: C,
            r9wjJW8ZN: T,
            xkpUt4F21: E,
            NctncU19N: k,
            ...A
          } = pt(e),
          {
            baseVariant: M,
            classNames: N,
            clearLoadingGesture: P,
            gestureHandlers: F,
            gestureVariant: te,
            isLoading: I,
            setGestureState: z,
            setVariant: ne,
            variants: H,
          } = V({
            cycleOrder: ot,
            defaultVariant: `symjmldSc`,
            enabledGestures: at,
            ref: i,
            variant: g,
            variantClassNames: ct,
          }),
          U = mt(e, H),
          { activeVariantCallback: re, delay: ie } = L(M),
          W = re(async (...e) => {
            if ((z({ isPressed: !1 }), S)) {
              let t = await S(...e);
              if (t === !1) return !1;
            }
          }),
          G = re(async (...e) => {
            if ((z({ isHovered: !0 }), C)) {
              let t = await C(...e);
              if (t === !1) return !1;
            }
          }),
          ae = [Re, Pe],
          K = j(st, ...ae);
        return s(_, {
          id: m ?? a,
          children: s(dt, {
            animate: H,
            initial: !1,
            children: s(ut, {
              value: lt,
              children: s(w, {
                href: y,
                motionChild: !0,
                nodeId: `symjmldSc`,
                openInNewTab: ee,
                scopeId: `F5glnIxIK`,
                smoothScroll: !0,
                children: f(b.a, {
                  ...A,
                  ...F,
                  className: `${j(K, `framer-hecye6`, p, N)} framer-33mo6g`,
                  "data-framer-name": `White`,
                  layoutDependency: U,
                  layoutId: `symjmldSc`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                    opacity: 1,
                    ...d,
                  },
                  variants: {
                    "qZMGAGPE0-hover": {
                      backgroundColor: `rgba(255, 255, 255, 0.07)`,
                    },
                    "symjmldSc-hover": {
                      backgroundColor: `rgb(225, 199, 237)`,
                    },
                    "UkUfAzkeL-hover": {
                      backgroundColor: `rgb(225, 199, 237)`,
                      opacity: 0.8,
                    },
                    M28i9A74g: {
                      backgroundColor: `var(--token-05ef185e-4a65-4b7f-aecb-3ad4381563cf, rgba(14, 15, 17, 0.05))`,
                    },
                    pvwC0M2D3: {
                      backgroundColor: `var(--token-05ef185e-4a65-4b7f-aecb-3ad4381563cf, rgba(14, 15, 17, 0.05))`,
                    },
                    qZMGAGPE0: {
                      backgroundColor: `rgba(255, 255, 255, 0)`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                    tHbpqM7yv: {
                      backgroundColor: `rgba(255, 255, 255, 0)`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                    UkUfAzkeL: {
                      borderBottomLeftRadius: 14,
                      borderBottomRightRadius: 14,
                      borderTopLeftRadius: 14,
                      borderTopRightRadius: 14,
                    },
                  },
                  ...rt(
                    {
                      "qZMGAGPE0-hover": { "data-framer-name": void 0 },
                      "symjmldSc-hover": { "data-framer-name": void 0 },
                      "UkUfAzkeL-hover": { "data-framer-name": void 0 },
                      M28i9A74g: {
                        "data-framer-name": `Ghost / Submenu opened `,
                        "data-highlight": !0,
                        onMouseEnter: G,
                        onTap: W,
                      },
                      pvwC0M2D3: {
                        "data-framer-name": `Ghost / Tab Selected`,
                        "data-highlight": !0,
                        onMouseEnter: G,
                        onTap: W,
                      },
                      qZMGAGPE0: {
                        "data-framer-name": `Ghost`,
                        "data-highlight": !0,
                        onMouseEnter: G,
                        onTap: W,
                      },
                      tHbpqM7yv: {
                        "data-framer-name": `Ghost`,
                        "data-highlight": !0,
                        onMouseEnter: G,
                        onTap: W,
                      },
                      UkUfAzkeL: { "data-framer-name": `Blue` },
                    },
                    M,
                    te
                  ),
                  children: [
                    s(D, {
                      __fromCanvasComponent: !0,
                      children: s(h, {
                        children: s(b.p, {
                          className: `framer-styles-preset-1ib9ynh`,
                          "data-styles-preset": `NMzSZBKI3`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(0, 0, 0)))`,
                          },
                          children: `Button`,
                        }),
                      }),
                      className: `framer-h2rsyl`,
                      fonts: [`Inter`],
                      layoutDependency: U,
                      layoutId: `ESG37723E`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(0, 0, 0))`,
                      },
                      text: v,
                      variants: {
                        "qZMGAGPE0-hover": {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        },
                        "symjmldSc-hover": {
                          "--extracted-r6o4lv": `rgb(0, 0, 0)`,
                        },
                        qZMGAGPE0: {
                          "--extracted-r6o4lv": `rgb(148, 148, 148)`,
                        },
                        tHbpqM7yv: {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        },
                        UkUfAzkeL: {
                          "--extracted-r6o4lv": `var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(14, 15, 17))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...rt(
                        {
                          "qZMGAGPE0-hover": {
                            children: s(h, {
                              children: s(b.p, {
                                className: `framer-styles-preset-1ib9ynh`,
                                "data-styles-preset": `NMzSZBKI3`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                          "symjmldSc-hover": {
                            children: s(h, {
                              children: s(b.p, {
                                className: `framer-styles-preset-1ib9ynh`,
                                "data-styles-preset": `NMzSZBKI3`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(0, 0, 0))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                          qZMGAGPE0: {
                            children: s(h, {
                              children: s(b.p, {
                                className: `framer-styles-preset-1ib9ynh`,
                                "data-styles-preset": `NMzSZBKI3`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(148, 148, 148))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                          tHbpqM7yv: {
                            children: s(h, {
                              children: s(b.p, {
                                className: `framer-styles-preset-1x04h7g`,
                                "data-styles-preset": `dj_MW1Noe`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                          UkUfAzkeL: {
                            children: s(h, {
                              children: s(b.p, {
                                className: `framer-styles-preset-1ib9ynh`,
                                "data-styles-preset": `NMzSZBKI3`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(14, 15, 17)))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                        },
                        M,
                        te
                      ),
                    }),
                    T &&
                      s(x, {
                        height: 24,
                        y: (u?.y || 0) + (0 + ((u?.height || 34) - 0 - 24) / 2),
                        ...rt(
                          {
                            tHbpqM7yv: {
                              y:
                                (u?.y || 0) +
                                (0 + ((u?.height || 29) - 0 - 24) / 2),
                            },
                          },
                          M,
                          te
                        ),
                        children: s(O, {
                          className: `framer-1xvp7c3-container`,
                          layoutDependency: U,
                          layoutId: `B1Njnq32L-container`,
                          nodeId: `B1Njnq32L`,
                          rendersWithMotion: !0,
                          scopeId: `F5glnIxIK`,
                          children: s(tt, {
                            height: `100%`,
                            id: `B1Njnq32L`,
                            layoutId: `B1Njnq32L`,
                            style: { height: `100%` },
                            VRNDXSwE9: k,
                            width: `100%`,
                            X7BXT0DN4: E,
                            yF8Wiw9dW: `var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72))`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (gt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-sI6sN.framer-33mo6g, .framer-sI6sN .framer-33mo6g { display: block; }`,
        `.framer-sI6sN.framer-hecye6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 34px; justify-content: center; overflow: visible; padding: 0px 14px 0px 14px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-sI6sN .framer-h2rsyl { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-sI6sN .framer-1xvp7c3-container { flex: none; height: 24px; position: relative; width: auto; }`,
        `.framer-sI6sN.framer-v-1j7jq13.framer-hecye6 { padding: 0px 10px 0px 10px; }`,
        `.framer-sI6sN.framer-v-118ix00.framer-hecye6 { padding: 0px 18px 0px 18px; }`,
        `.framer-sI6sN.framer-v-1b990dx.framer-hecye6 { height: 29px; padding: 0px 10px 0px 10px; }`,
        ...Le,
        ...Ne,
      ]),
      (_t = H(ht, gt, `framer-sI6sN`)),
      (Z = _t),
      (_t.displayName = `Buttons / Medium`),
      (_t.defaultProps = { height: 34, width: 69 }),
      A(_t, {
        variant: {
          options: [
            `symjmldSc`,
            `qZMGAGPE0`,
            `M28i9A74g`,
            `pvwC0M2D3`,
            `UkUfAzkeL`,
            `tHbpqM7yv`,
          ],
          optionTitles: [
            `White`,
            `Ghost`,
            `Ghost / Submenu opened `,
            `Ghost / Tab Selected`,
            `Blue`,
            `Ghost`,
          ],
          title: `Variant`,
          type: S.Enum,
        },
        Mv16WKTEe: {
          defaultValue: `Button`,
          displayTextArea: !1,
          placeholder: `Text`,
          title: `Text`,
          type: S.String,
        },
        Kr62I1Ee9: { title: `Link`, type: S.Link },
        XiCzUhcM5: { defaultValue: !1, title: `New Tab`, type: S.Boolean },
        s4QYqX_Ju: { title: `Click`, type: S.EventHandler },
        UU0IU6Qs2: { title: `Hover`, type: S.EventHandler },
        r9wjJW8ZN: { defaultValue: !1, title: `Badge`, type: S.Boolean },
        xkpUt4F21: {
          defaultValue: `New`,
          displayTextArea: !1,
          placeholder: `Badge text`,
          title: `Badge text`,
          type: S.String,
        },
        NctncU19N: {
          defaultValue: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63)) /* {"name":"Attention 100"} */`,
          title: `Badge color`,
          type: S.Color,
        },
      }),
      k(
        _t,
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
          ...it,
          ...P(Ie),
          ...P(Me),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  yt,
  bt,
  xt,
  St = e(() => {
    I(),
      M.loadFonts([
        `FR;InterDisplay-Light`,
        `FR;InterDisplay-SemiBold`,
        `FR;InterDisplay-SemiBoldItalic`,
        `FR;InterDisplay-LightItalic`,
      ]),
      (yt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/MaMAn5Jp5gJg1z3VaLH65QwWPLc.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/fEqgEChcTaneQFxeugexHq7Bk.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/nL7d8Ph0ViwUQorApF89PoAagQI.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/YOHXUQlY1iC2t7qT4HeLSoBDtn4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/TfzHIi6ZmZDuhnIFGcgM6Ipuim4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/6e1qKhy2mljzCRhlGpuCksCGjGI.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/ub5XwqqEAMrXQz31ej6fNqbxnBc.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/JVGAsgKKXCCsDQ3MCrxIs5u1U.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/GeFYhvsobZhw8u0Xza2zCmC8Cw.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8dxmIktsyEgZt0OloSu5gz6TgLI.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/f2kclCrwmFV8YeznrosrT3kcjE.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/HTPyW5jOpXfwIja9CrgNJUDriY4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/SorE7ZPZIqD5pBy9oKeSOEC0Q5k.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/xFtzow8wtMpaEQuIGgCbt25Qorg.woff2`,
              weight: `300`,
            },
          ],
        },
      ]),
      (bt = [
        `.framer-RQNyq .framer-styles-preset-oh30q:not(.rich-text-wrapper), .framer-RQNyq .framer-styles-preset-oh30q.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 300; --framer-letter-spacing: 0.03em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-b90df2b5-0220-4015-b318-c7544e3e4fd4, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (xt = `framer-RQNyq`);
  }),
  Ct,
  wt,
  Tt,
  Et = e(() => {
    I(),
      M.loadFonts([]),
      (Ct = [{ explicitInter: !0, fonts: [] }]),
      (wt = [
        `.framer-B3bsc .framer-styles-preset-1eahpii:not(.rich-text-wrapper), .framer-B3bsc .framer-styles-preset-1eahpii.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48)); --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; transition: color 0.4s cubic-bezier(0.12, 0.23, 0.5, 1) 0s; }`,
      ]),
      (Tt = `framer-B3bsc`);
  }),
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt = e(() => {
    r(),
      I(),
      y(),
      i(),
      (Dt = [`DZvrXa0YP`]),
      (Ot = `framer-ZifpV`),
      (kt = { DZvrXa0YP: `framer-v-1jtqse8` }),
      (At = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (jt = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (Mt = b(h)),
      (Nt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Pt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ft = t(function (e, t) {
        let { activeLocale: r, setLocale: i } = B(),
          { style: a, className: o, layoutId: l, variant: u, ...d } = Nt(e),
          {
            baseVariant: f,
            classNames: p,
            clearLoadingGesture: m,
            gestureHandlers: h,
            gestureVariant: g,
            isLoading: v,
            setGestureState: y,
            setVariant: ee,
            variants: x,
          } = V({
            cycleOrder: Dt,
            defaultVariant: `DZvrXa0YP`,
            variant: u,
            variantClassNames: kt,
          }),
          S = Pt(e, x),
          C = c(null),
          w = n(),
          T = [],
          E = R();
        return s(_, {
          id: l ?? w,
          children: s(Mt, {
            animate: x,
            initial: !1,
            children: s(jt, {
              value: At,
              children: s(b.div, {
                ...d,
                ...h,
                className: j(Ot, ...T, `framer-1jtqse8`, o, p),
                "data-framer-name": `Variant 1`,
                layoutDependency: S,
                layoutId: `DZvrXa0YP`,
                ref: t ?? C,
                style: {
                  boxShadow: `inset 0px 0.5px 0px 0px var(--token-2c81481e-38cd-4c47-96da-a9e57d1ddd77, rgba(255, 255, 255, 0.16))`,
                  ...a,
                },
              }),
            }),
          }),
        });
      })),
      (It = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ZifpV.framer-uzji1d, .framer-ZifpV .framer-uzji1d { display: block; }`,
        `.framer-ZifpV.framer-1jtqse8 { height: 1px; overflow: hidden; position: relative; width: 960px; }`,
      ]),
      (Lt = H(Ft, It, `framer-ZifpV`)),
      (Rt = Lt),
      (Lt.displayName = `Divider`),
      (Lt.defaultProps = { height: 1, width: 960 }),
      k(Lt, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      });
  });
function Q(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn = e(() => {
    r(),
      I(),
      y(),
      i(),
      St(),
      Et(),
      zt(),
      (Bt = re(U(b.div))),
      (Vt = N(Rt)),
      (Ht = { wXiuOqYPn: { hover: !0, pressed: !0 } }),
      (Ut = `framer-HT5vw`),
      (Wt = { wXiuOqYPn: `framer-v-amwl45` }),
      (Gt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Kt = {
        damping: 80,
        delay: 0.2,
        mass: 1,
        stiffness: 200,
        type: `spring`,
      }),
      (qt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Kt,
        x: 0,
        y: 0,
      }),
      (Jt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Yt = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (Xt = b.create(h)),
      (Zt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Qt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      ($t = t(function (e, t) {
        let r = c(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: l } = B(),
          u = R(),
          { style: d, className: p, layoutId: m, variant: g, ...v } = Zt(e),
          {
            baseVariant: y,
            classNames: ee,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: T,
            isLoading: E,
            setGestureState: k,
            setVariant: A,
            variants: M,
          } = V({
            defaultVariant: `wXiuOqYPn`,
            enabledGestures: Ht,
            ref: i,
            variant: g,
            variantClassNames: Wt,
          }),
          N = Qt(e, M),
          P = [Tt, xt],
          F = j(Ut, ...P);
        return s(_, {
          id: m ?? a,
          children: s(Xt, {
            animate: M,
            initial: !1,
            children: s(Yt, {
              value: Gt,
              children: f(b.div, {
                ...v,
                ...C,
                className: j(F, `framer-amwl45`, p, ee),
                "data-framer-name": `Menu`,
                layoutDependency: N,
                layoutId: `wXiuOqYPn`,
                ref: i,
                style: { backgroundColor: `rgb(0, 0, 0)`, ...d },
                ...Q(
                  {
                    "wXiuOqYPn-hover": { "data-framer-name": void 0 },
                    "wXiuOqYPn-pressed": { "data-framer-name": void 0 },
                  },
                  y,
                  T
                ),
                children: [
                  s(Bt, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: qt,
                    className: `framer-1bjgd66`,
                    "data-framer-appear-id": `1bjgd66`,
                    "data-framer-name": `Auth`,
                    initial: Jt,
                    layoutDependency: N,
                    layoutId: `eeWBtSiWK`,
                    optimized: !0,
                    children: f(b.div, {
                      className: `framer-1ftggzs`,
                      "data-framer-name": `Items`,
                      layoutDependency: N,
                      layoutId: `zMt3DxmXv`,
                      children: [
                        s(D, {
                          __fromCanvasComponent: !0,
                          children: s(h, {
                            children: s(b.p, {
                              style: {
                                "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                "--framer-font-size": `24px`,
                                "--framer-font-weight": `300`,
                                "--framer-line-height": `120%`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255)))`,
                              },
                              children: s(w, {
                                // href: `tapflow.co/auth/signin`,
                                href: ``,
                                motionChild: !0,
                                nodeId: `PDE3PUf6l`,
                                openInNewTab: !1,
                                scopeId: `zkzDy2SkZ`,
                                smoothScroll: !1,
                                children: s(b.a, {
                                  className: `framer-styles-preset-1eahpii`,
                                  "data-styles-preset": `pWnECMXPj`,
                                  // children: `Log in`,
                                  children: `Coming Soon`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-l6nurl`,
                          fonts: [`FR;InterDisplay-Light`],
                          layoutDependency: N,
                          layoutId: `PDE3PUf6l`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))`,
                          },
                          variants: {
                            "wXiuOqYPn-hover": {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                            },
                            "wXiuOqYPn-pressed": {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Q(
                            {
                              "wXiuOqYPn-hover": {
                                children: s(h, {
                                  children: s(b.p, {
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `120%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                    },
                                    children: s(w, {
                                      // href: `tapflow.co/auth/signin`,
                                      href: ``,
                                      motionChild: !0,
                                      nodeId: `PDE3PUf6l`,
                                      openInNewTab: !1,
                                      scopeId: `zkzDy2SkZ`,
                                      smoothScroll: !1,
                                      children: s(b.a, {
                                        className: `framer-styles-preset-1eahpii`,
                                        "data-styles-preset": `pWnECMXPj`,
                                        children: `Coming Soon`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              "wXiuOqYPn-pressed": {
                                children: s(h, {
                                  children: s(b.p, {
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `120%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                    },
                                    children: s(w, {
                                      // href: `tapflow.co/auth/signin`,
                                      href: ``,
                                      motionChild: !0,
                                      nodeId: `PDE3PUf6l`,
                                      openInNewTab: !1,
                                      scopeId: `zkzDy2SkZ`,
                                      smoothScroll: !1,
                                      children: s(b.a, {
                                        className: `framer-styles-preset-1eahpii`,
                                        "data-styles-preset": `pWnECMXPj`,
                                        // children: `Log in`,
                                        children: `Coming Soon`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            y,
                            T
                          ),
                        }),
                        s(D, {
                          __fromCanvasComponent: !0,
                          children: s(h, {
                            children: s(b.p, {
                              style: {
                                "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                "--framer-font-size": `24px`,
                                "--framer-font-weight": `300`,
                                "--framer-line-height": `120%`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgba(225, 199, 237, 0.96))`,
                              },
                              children: `✦ Claim invite ✦`,
                            }),
                          }),
                          className: `framer-1o24gyw`,
                          fonts: [`FR;InterDisplay-Light`],
                          layoutDependency: N,
                          layoutId: `ZMMB1zCVr`,
                          style: {
                            "--extracted-r6o4lv": `rgba(225, 199, 237, 0.96)`,
                          },
                          variants: {
                            "wXiuOqYPn-hover": {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                            },
                            "wXiuOqYPn-pressed": {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Q(
                            {
                              "wXiuOqYPn-hover": {
                                children: s(h, {
                                  children: s(b.p, {
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `120%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                    },
                                    children: `✦ Claim invite ✦`,
                                  }),
                                }),
                              },
                              "wXiuOqYPn-pressed": {
                                children: s(h, {
                                  children: s(b.p, {
                                    style: {
                                      "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                      "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-line-height": `120%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                    },
                                    children: `✦ Claim invite ✦`,
                                  }),
                                }),
                              },
                            },
                            y,
                            T
                          ),
                        }),
                      ],
                    }),
                  }),
                  f(Bt, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: qt,
                    className: `framer-5u7l02`,
                    "data-framer-appear-id": `5u7l02`,
                    "data-framer-name": `Main`,
                    initial: Jt,
                    layoutDependency: N,
                    layoutId: `xIVekztj4`,
                    optimized: !0,
                    children: [
                      s(x, {
                        height: 1,
                        width: `calc(${u?.width || `100vw`} - 48px)`,
                        y:
                          (u?.y || 0) +
                          0 +
                          (((u?.height || 800) - 140 - 880) / 2 + 120 + 0) +
                          0 +
                          0,
                        children: s(O, {
                          className: `framer-2f1cp0-container`,
                          layoutDependency: N,
                          layoutId: `U8OQHhXFj-container`,
                          nodeId: `U8OQHhXFj`,
                          rendersWithMotion: !0,
                          scopeId: `zkzDy2SkZ`,
                          style: { opacity: 0.7 },
                          children: s(Rt, {
                            height: `100%`,
                            id: `U8OQHhXFj`,
                            layoutId: `U8OQHhXFj`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                      s(D, {
                        __fromCanvasComponent: !0,
                        children: s(h, {
                          children: s(b.p, {
                            style: {
                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                              "--framer-font-size": `24px`,
                              "--framer-font-weight": `300`,
                              "--framer-line-height": `120%`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                            },
                            children: s(w, {
                              href: { webPageId: `Z7s0mVtRR` },
                              motionChild: !0,
                              nodeId: `jDFEhyQdR`,
                              openInNewTab: !1,
                              scopeId: `zkzDy2SkZ`,
                              smoothScroll: !1,
                              children: s(b.a, {
                                className: `framer-styles-preset-1eahpii`,
                                "data-styles-preset": `pWnECMXPj`,
                                children: `Home`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-qu71s8`,
                        fonts: [`FR;InterDisplay-Light`],
                        layoutDependency: N,
                        layoutId: `jDFEhyQdR`,
                        style: {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                        },
                        variants: {
                          "wXiuOqYPn-hover": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                          "wXiuOqYPn-pressed": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            "wXiuOqYPn-hover": {
                              children: s(h, {
                                children: s(b.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: { webPageId: `Z7s0mVtRR` },
                                    motionChild: !0,
                                    nodeId: `jDFEhyQdR`,
                                    openInNewTab: !1,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `Home`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "wXiuOqYPn-pressed": {
                              children: s(h, {
                                children: s(b.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: { webPageId: `Z7s0mVtRR` },
                                    motionChild: !0,
                                    nodeId: `jDFEhyQdR`,
                                    openInNewTab: !1,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `Home`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          y,
                          T
                        ),
                      }),
                      s(D, {
                        __fromCanvasComponent: !0,
                        children: s(h, {
                          children: s(b.p, {
                            style: {
                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                              "--framer-font-size": `24px`,
                              "--framer-font-weight": `300`,
                              "--framer-line-height": `120%`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                            },
                            children: s(w, {
                              href: { webPageId: `Ypsar2ozb` },
                              motionChild: !0,
                              nodeId: `KH1VHZKSw`,
                              openInNewTab: !1,
                              scopeId: `zkzDy2SkZ`,
                              smoothScroll: !1,
                              children: s(b.a, {
                                className: `framer-styles-preset-1eahpii`,
                                "data-styles-preset": `pWnECMXPj`,
                                children: `Changelog`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-fkci60`,
                        fonts: [`FR;InterDisplay-Light`],
                        layoutDependency: N,
                        layoutId: `KH1VHZKSw`,
                        style: {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                        },
                        variants: {
                          "wXiuOqYPn-hover": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                          "wXiuOqYPn-pressed": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            "wXiuOqYPn-hover": {
                              children: s(h, {
                                children: s(b.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: { webPageId: `Ypsar2ozb` },
                                    motionChild: !0,
                                    nodeId: `KH1VHZKSw`,
                                    openInNewTab: !1,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `Changelog`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "wXiuOqYPn-pressed": {
                              children: s(h, {
                                children: s(b.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: { webPageId: `Ypsar2ozb` },
                                    motionChild: !0,
                                    nodeId: `KH1VHZKSw`,
                                    openInNewTab: !1,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `Changelog`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          y,
                          T
                        ),
                      }),
                      s(D, {
                        __fromCanvasComponent: !0,
                        children: s(h, {
                          children: s(b.p, {
                            style: {
                              "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                              "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                              "--framer-font-size": `24px`,
                              "--framer-font-weight": `300`,
                              "--framer-line-height": `120%`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                            },
                            children: s(w, {
                              href: { webPageId: `iLZYGxuPR` },
                              motionChild: !0,
                              nodeId: `ect4WtFov`,
                              openInNewTab: !1,
                              scopeId: `zkzDy2SkZ`,
                              smoothScroll: !1,
                              children: s(b.a, {
                                className: `framer-styles-preset-1eahpii`,
                                "data-styles-preset": `pWnECMXPj`,
                                children: `Contact`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-100g3bb`,
                        fonts: [`FR;InterDisplay-Light`],
                        layoutDependency: N,
                        layoutId: `ect4WtFov`,
                        style: {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                        },
                        variants: {
                          "wXiuOqYPn-hover": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                          "wXiuOqYPn-pressed": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            "wXiuOqYPn-hover": {
                              children: s(h, {
                                children: s(b.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: { webPageId: `iLZYGxuPR` },
                                    motionChild: !0,
                                    nodeId: `ect4WtFov`,
                                    openInNewTab: !1,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "wXiuOqYPn-pressed": {
                              children: s(h, {
                                children: s(b.p, {
                                  style: {
                                    "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUxpZ2h0`,
                                    "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: { webPageId: `iLZYGxuPR` },
                                    motionChild: !0,
                                    nodeId: `ect4WtFov`,
                                    openInNewTab: !1,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          y,
                          T
                        ),
                      }),
                      s(x, {
                        height: 1,
                        width: `calc(${u?.width || `100vw`} - 48px)`,
                        y:
                          (u?.y || 0) +
                          0 +
                          (((u?.height || 800) - 140 - 880) / 2 + 120 + 0) +
                          0 +
                          529,
                        children: s(O, {
                          className: `framer-7xcb5l-container`,
                          layoutDependency: N,
                          layoutId: `JsTiGXlzZ-container`,
                          nodeId: `JsTiGXlzZ`,
                          rendersWithMotion: !0,
                          scopeId: `zkzDy2SkZ`,
                          style: { opacity: 0.7 },
                          children: s(Rt, {
                            height: `100%`,
                            id: `JsTiGXlzZ`,
                            layoutId: `JsTiGXlzZ`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                  f(Bt, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: qt,
                    className: `framer-1uar6kw`,
                    "data-framer-appear-id": `1uar6kw`,
                    "data-framer-name": `Social`,
                    initial: Jt,
                    layoutDependency: N,
                    layoutId: `Ro8lNxMk6`,
                    optimized: !0,
                    children: [
                      s(D, {
                        __fromCanvasComponent: !0,
                        children: s(h, {
                          children: s(b.p, {
                            className: `framer-styles-preset-oh30q`,
                            "data-styles-preset": `FwmuxBMQR`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                            },
                            children: s(w, {
                              href: `linkedin.com`,
                              motionChild: !0,
                              nodeId: `NDAVIMrI3`,
                              openInNewTab: !0,
                              scopeId: `zkzDy2SkZ`,
                              smoothScroll: !1,
                              children: s(b.a, {
                                className: `framer-styles-preset-1eahpii`,
                                "data-styles-preset": `pWnECMXPj`,
                                children: `LinkedIn`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-1gryoek`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `NDAVIMrI3`,
                        style: {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                        },
                        variants: {
                          "wXiuOqYPn-hover": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                          "wXiuOqYPn-pressed": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            "wXiuOqYPn-hover": {
                              children: s(h, {
                                children: s(b.p, {
                                  className: `framer-styles-preset-oh30q`,
                                  "data-styles-preset": `FwmuxBMQR`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: `linkedin.com`,
                                    motionChild: !0,
                                    nodeId: `NDAVIMrI3`,
                                    openInNewTab: !0,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "wXiuOqYPn-pressed": {
                              children: s(h, {
                                children: s(b.p, {
                                  className: `framer-styles-preset-oh30q`,
                                  "data-styles-preset": `FwmuxBMQR`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: `linkedin.com`,
                                    motionChild: !0,
                                    nodeId: `NDAVIMrI3`,
                                    openInNewTab: !0,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          y,
                          T
                        ),
                      }),
                      s(D, {
                        __fromCanvasComponent: !0,
                        children: s(h, {
                          children: s(b.p, {
                            className: `framer-styles-preset-oh30q`,
                            "data-styles-preset": `FwmuxBMQR`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                            },
                            children: s(w, {
                              href: `twitter.com`,
                              motionChild: !0,
                              nodeId: `gDYj0YbBJ`,
                              openInNewTab: !0,
                              scopeId: `zkzDy2SkZ`,
                              smoothScroll: !1,
                              children: s(b.a, {
                                className: `framer-styles-preset-1eahpii`,
                                "data-styles-preset": `pWnECMXPj`,
                                children: `X (Twitter)`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-1u84vvk`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `gDYj0YbBJ`,
                        style: {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                        },
                        variants: {
                          "wXiuOqYPn-hover": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                          "wXiuOqYPn-pressed": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.4)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            "wXiuOqYPn-hover": {
                              children: s(h, {
                                children: s(b.p, {
                                  className: `framer-styles-preset-oh30q`,
                                  "data-styles-preset": `FwmuxBMQR`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: `twitter.com`,
                                    motionChild: !0,
                                    nodeId: `gDYj0YbBJ`,
                                    openInNewTab: !0,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `X (Twitter)`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "wXiuOqYPn-pressed": {
                              children: s(h, {
                                children: s(b.p, {
                                  className: `framer-styles-preset-oh30q`,
                                  "data-styles-preset": `FwmuxBMQR`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))`,
                                  },
                                  children: s(w, {
                                    href: `twitter.com`,
                                    motionChild: !0,
                                    nodeId: `gDYj0YbBJ`,
                                    openInNewTab: !0,
                                    scopeId: `zkzDy2SkZ`,
                                    smoothScroll: !1,
                                    children: s(b.a, {
                                      className: `framer-styles-preset-1eahpii`,
                                      "data-styles-preset": `pWnECMXPj`,
                                      children: `X (Twitter)`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          y,
                          T
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (en = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-HT5vw.framer-yev4ph, .framer-HT5vw .framer-yev4ph { display: block; }`,
        `.framer-HT5vw.framer-amwl45 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: hidden; padding: 0px 24px 140px 24px; position: relative; width: 400px; }`,
        `.framer-HT5vw .framer-1bjgd66 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 120px; justify-content: center; overflow: visible; padding: 0px 0px 20px 0px; position: relative; width: 100%; }`,
        `.framer-HT5vw .framer-1ftggzs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-HT5vw .framer-l6nurl, .framer-HT5vw .framer-1o24gyw { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-HT5vw .framer-5u7l02 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HT5vw .framer-2f1cp0-container, .framer-HT5vw .framer-7xcb5l-container { flex: none; height: 1px; position: relative; width: 100%; }`,
        `.framer-HT5vw .framer-qu71s8, .framer-HT5vw .framer-fkci60, .framer-HT5vw .framer-100g3bb, .framer-HT5vw .framer-1gryoek, .framer-HT5vw .framer-1u84vvk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-HT5vw .framer-1uar6kw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: visible; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        ...wt,
        ...bt,
      ]),
      (tn = H($t, en, `framer-HT5vw`)),
      (nn = tn),
      (tn.displayName = `Navigation / Menu: Phone`),
      (tn.defaultProps = { height: 800, width: 400 }),
      k(
        tn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/MaMAn5Jp5gJg1z3VaLH65QwWPLc.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/fEqgEChcTaneQFxeugexHq7Bk.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/nL7d8Ph0ViwUQorApF89PoAagQI.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/YOHXUQlY1iC2t7qT4HeLSoBDtn4.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/TfzHIi6ZmZDuhnIFGcgM6Ipuim4.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/6e1qKhy2mljzCRhlGpuCksCGjGI.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/ub5XwqqEAMrXQz31ej6fNqbxnBc.woff2`,
                weight: `300`,
              },
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
          ...Vt,
          ...P(Ct),
          ...P(yt),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function an(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn = e(() => {
    r(),
      I(),
      y(),
      i(),
      (on = [`HisUdmQ9F`, `EyQ28nQyS`]),
      (sn = `framer-D6knu`),
      (cn = { EyQ28nQyS: `framer-v-l2g0yc`, HisUdmQ9F: `framer-v-x4itgw` }),
      (ln = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (un = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (dn = b.create(h)),
      (fn = { Close: `EyQ28nQyS`, Open: `HisUdmQ9F` }),
      (pn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: fn[r.variant] ?? r.variant ?? `HisUdmQ9F`,
      })),
      (mn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (hn = t(function (e, t) {
        let r = c(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: l } = B(),
          u = R(),
          { style: d, className: p, layoutId: m, variant: h, ...g } = pn(e),
          {
            baseVariant: v,
            classNames: y,
            clearLoadingGesture: ee,
            gestureHandlers: x,
            gestureVariant: S,
            isLoading: C,
            setGestureState: w,
            setVariant: T,
            variants: E,
          } = V({
            cycleOrder: on,
            defaultVariant: `HisUdmQ9F`,
            ref: i,
            variant: h,
            variantClassNames: cn,
          }),
          D = mn(e, E),
          { activeVariantCallback: O, delay: k } = L(v),
          A = O(async (...e) => {
            w({ isPressed: !1 }), T(`EyQ28nQyS`);
          }),
          M = O(async (...e) => {
            w({ isPressed: !1 }), T(`HisUdmQ9F`);
          }),
          N = [],
          P = j(sn, ...N);
        return s(_, {
          id: m ?? a,
          children: s(dn, {
            animate: E,
            initial: !1,
            children: s(un, {
              value: ln,
              children: f(b.div, {
                ...g,
                ...x,
                className: j(P, `framer-x4itgw`, p, y),
                "data-framer-name": `Open`,
                "data-highlight": !0,
                layoutDependency: D,
                layoutId: `HisUdmQ9F`,
                onTap: A,
                ref: i,
                style: { ...d },
                ...an(
                  { EyQ28nQyS: { "data-framer-name": `Close`, onTap: M } },
                  v,
                  S
                ),
                children: [
                  s(b.div, {
                    className: `framer-1rup4we`,
                    "data-framer-name": `Line`,
                    layoutDependency: D,
                    layoutId: `Y6v8fLmiq`,
                    style: {
                      backgroundColor: `var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))`,
                      rotate: 0,
                    },
                    variants: { EyQ28nQyS: { rotate: -45 } },
                  }),
                  s(b.div, {
                    className: `framer-16ln8w7`,
                    "data-framer-name": `Line`,
                    layoutDependency: D,
                    layoutId: `WDhh61_qL`,
                    style: {
                      backgroundColor: `var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))`,
                      rotate: 0,
                    },
                    variants: { EyQ28nQyS: { rotate: 45 } },
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (gn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-D6knu.framer-14tn57g, .framer-D6knu .framer-14tn57g { display: block; }`,
        `.framer-D6knu.framer-x4itgw { cursor: pointer; gap: 0px; height: 24px; overflow: visible; position: relative; width: 26px; }`,
        `.framer-D6knu .framer-1rup4we { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(66.66666666666669% - 2px / 2); width: 20px; }`,
        `.framer-D6knu .framer-16ln8w7 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(33.33333333333336% - 2px / 2); width: 20px; }`,
        `.framer-D6knu.framer-v-l2g0yc.framer-x4itgw { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 26px); }`,
        `.framer-D6knu.framer-v-l2g0yc .framer-1rup4we, .framer-D6knu.framer-v-l2g0yc .framer-16ln8w7 { top: calc(50.00000000000002% - 2px / 2); }`,
      ]),
      (_n = H(hn, gn, `framer-D6knu`)),
      (vn = _n),
      (_n.displayName = `Navigation / _icon`),
      (_n.defaultProps = { height: 26, width: 26 }),
      A(_n, {
        variant: {
          options: [`HisUdmQ9F`, `EyQ28nQyS`],
          optionTitles: [`Open`, `Close`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      k(_n, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      });
  });
function $(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = e(() => {
    r(),
      I(),
      y(),
      i(),
      je(),
      vt(),
      rn(),
      yn(),
      (bn = N(Z)),
      (xn = N(vn)),
      (Sn = N(nn)),
      (Cn = [`fYVgS8NCd`, `xVCO5kcBX`, `QtLCLfH8_`, `K9ye4z1sg`]),
      (wn = `framer-BtO5q`),
      (Tn = {
        fYVgS8NCd: `framer-v-v5jef7`,
        K9ye4z1sg: `framer-v-nlrie7`,
        QtLCLfH8_: `framer-v-8gk3nt`,
        xVCO5kcBX: `framer-v-1swrfui`,
      }),
      (En = { duration: 0, type: `tween` }),
      (Dn = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (On = b.create(h)),
      (kn = {
        "Phone: Open": `K9ye4z1sg`,
        Desktop: `fYVgS8NCd`,
        Phone: `QtLCLfH8_`,
        Tablet: `xVCO5kcBX`,
      }),
      (An = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kn[r.variant] ?? r.variant ?? `fYVgS8NCd`,
      })),
      (jn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Mn = t(function (e, t) {
        let r = c(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: l } = B(),
          u = R(),
          {
            style: d,
            className: p,
            layoutId: m,
            variant: g,
            s4QYqX_Ju: v,
            UU0IU6Qs2: y,
            XiCzUhcM5F5glnIxIK: ee,
            ...S
          } = An(e),
          {
            baseVariant: T,
            classNames: k,
            clearLoadingGesture: A,
            gestureHandlers: M,
            gestureVariant: N,
            isLoading: P,
            setGestureState: te,
            setVariant: I,
            variants: z,
          } = V({
            cycleOrder: Cn,
            defaultVariant: `fYVgS8NCd`,
            ref: i,
            variant: g,
            variantClassNames: Tn,
          }),
          H = jn(e, z),
          { activeVariantCallback: U, delay: re } = L(T),
          ie = U(async (...e) => {
            I(`K9ye4z1sg`);
          }),
          W = U(async (...e) => {
            I(`QtLCLfH8_`);
          }),
          G = U(async (...e) => {
            if (v) {
              let t = await v(...e);
              if (t === !1) return !1;
            }
          }),
          ae = U(async (...e) => {
            if (y) {
              let t = await y(...e);
              if (t === !1) return !1;
            }
          }),
          K = [Ae],
          q = j(wn, ...K),
          oe = () => T !== `K9ye4z1sg`,
          se = () => T === `K9ye4z1sg`,
          J = () => ![`QtLCLfH8_`, `K9ye4z1sg`].includes(T),
          Y = ne(),
          ce = () => !![`QtLCLfH8_`, `K9ye4z1sg`].includes(T),
          le = () => T === `QtLCLfH8_`;
        return s(_, {
          id: m ?? a,
          children: s(On, {
            animate: z,
            initial: !1,
            children: s(Dn, {
              ...$(
                { K9ye4z1sg: { value: En }, QtLCLfH8_: { value: En } },
                T,
                N
              ),
              children: f(b.nav, {
                ...S,
                ...M,
                className: j(q, `framer-v5jef7`, p, k),
                "data-framer-name": `Desktop`,
                layoutDependency: H,
                layoutId: `fYVgS8NCd`,
                ref: i,
                style: {
                  backdropFilter: `blur(0px)`,
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  WebkitBackdropFilter: `blur(0px)`,
                  ...d,
                },
                variants: {
                  K9ye4z1sg: {
                    backdropFilter: `blur(100px)`,
                    background: `linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)`,
                    backgroundColor: `rgb(0, 0, 0)`,
                    WebkitBackdropFilter: `blur(100px)`,
                  },
                },
                ...$(
                  {
                    K9ye4z1sg: { "data-framer-name": `Phone: Open` },
                    QtLCLfH8_: { "data-framer-name": `Phone` },
                    xVCO5kcBX: { "data-framer-name": `Tablet` },
                  },
                  T,
                  N
                ),
                children: [
                  f(b.div, {
                    className: `framer-4j4vvm`,
                    "data-framer-name": `Navigation`,
                    layoutDependency: H,
                    layoutId: `nFqqO3tu2`,
                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    variants: {
                      K9ye4z1sg: { backgroundColor: `rgba(217, 217, 217, 0)` },
                    },
                    children: [
                      s(b.div, {
                        className: `framer-5q1umm`,
                        "data-framer-name": `Left`,
                        layoutDependency: H,
                        layoutId: `AijVkjry0`,
                        style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                        variants: {
                          K9ye4z1sg: { backgroundColor: `rgba(0, 0, 0, 0)` },
                        },
                        children: s(w, {
                          href: { webPageId: `Z7s0mVtRR` },
                          motionChild: !0,
                          nodeId: `ajLQ0dHSU`,
                          openInNewTab: !1,
                          scopeId: `nyDxmLt7o`,
                          children: f(b.a, {
                            "aria-label": `Home`,
                            className: `framer-gsgf7v framer-1prae73`,
                            "data-framer-name": `Logo`,
                            layoutDependency: H,
                            layoutId: `ajLQ0dHSU`,
                            children: [
                              oe() &&
                                s(C, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 111.5,
                                    intrinsicWidth: 267,
                                    loading: F(
                                      (u?.y || 0) +
                                        (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                        0 +
                                        12 +
                                        0
                                    ),
                                    pixelHeight: 287,
                                    pixelWidth: 1001,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `100px`,
                                    src: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512`,
                                    srcSet: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w`,
                                  },
                                  className: `framer-1woe2r0`,
                                  "data-framer-name": `tapflow`,
                                  layoutDependency: H,
                                  layoutId: `qOxdmRCEq`,
                                  ...$(
                                    {
                                      QtLCLfH8_: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 111.5,
                                          intrinsicWidth: 267,
                                          loading: F(
                                            (u?.y || 0) +
                                              (0 +
                                                ((u?.height || 52) - 0 - 52) /
                                                  2) +
                                              0 +
                                              11 +
                                              0
                                          ),
                                          pixelHeight: 287,
                                          pixelWidth: 1001,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `105px`,
                                          src: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512`,
                                          srcSet: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w`,
                                        },
                                      },
                                    },
                                    T,
                                    N
                                  ),
                                }),
                              se() &&
                                s(C, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 111.5,
                                    intrinsicWidth: 267,
                                    pixelHeight: 287,
                                    pixelWidth: 1001,
                                    positionX: `center`,
                                    positionY: `center`,
                                    src: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512`,
                                    srcSet: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w`,
                                  },
                                  className: `framer-1xzqgzt`,
                                  "data-framer-name": `tapflow`,
                                  layoutDependency: H,
                                  layoutId: `pQJipsh6q`,
                                  ...$(
                                    {
                                      K9ye4z1sg: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 111.5,
                                          intrinsicWidth: 267,
                                          loading: F(
                                            (u?.y || 0) + 0 + 0 + 0 + 11 + 0
                                          ),
                                          pixelHeight: 287,
                                          pixelWidth: 1001,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `105px`,
                                          src: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512`,
                                          srcSet: `https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w`,
                                        },
                                      },
                                    },
                                    T,
                                    N
                                  ),
                                }),
                            ],
                          }),
                        }),
                      }),
                      J() &&
                        f(b.div, {
                          className: `framer-1ni7j8s`,
                          "data-framer-name": `Center`,
                          layoutDependency: H,
                          layoutId: `lxFcEQFTM`,
                          style: { opacity: 0 },
                          children: [
                            s(E, {
                              links: [
                                {
                                  href: { webPageId: `Ypsar2ozb` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `Ypsar2ozb` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                s(x, {
                                  height: 28,
                                  y:
                                    (u?.y || 0) +
                                    (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                    0 +
                                    12,
                                  children: s(O, {
                                    className: `framer-fpbs8u-container`,
                                    layoutDependency: H,
                                    layoutId: `CzGZlISh4-container`,
                                    nodeId: `CzGZlISh4`,
                                    rendersWithMotion: !0,
                                    scopeId: `nyDxmLt7o`,
                                    children: s(Z, {
                                      height: `100%`,
                                      id: `CzGZlISh4`,
                                      Kr62I1Ee9: e[0],
                                      layoutId: `CzGZlISh4`,
                                      Mv16WKTEe: `Changelog`,
                                      NctncU19N: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
                                      r9wjJW8ZN: !1,
                                      style: { height: `100%` },
                                      variant: `qZMGAGPE0`,
                                      width: `100%`,
                                      XiCzUhcM5: !1,
                                      xkpUt4F21: `New`,
                                      ...$(
                                        { xVCO5kcBX: { Kr62I1Ee9: e[1] } },
                                        T,
                                        N
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            s(E, {
                              links: [
                                {
                                  href: { webPageId: `SfANFKzD6` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `SfANFKzD6` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                s(x, {
                                  height: 28,
                                  y:
                                    (u?.y || 0) +
                                    (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                    0 +
                                    12,
                                  children: s(O, {
                                    className: `framer-10hck1u-container`,
                                    layoutDependency: H,
                                    layoutId: `NVeQTcDoK-container`,
                                    nodeId: `NVeQTcDoK`,
                                    rendersWithMotion: !0,
                                    scopeId: `nyDxmLt7o`,
                                    children: s(Z, {
                                      height: `100%`,
                                      id: `NVeQTcDoK`,
                                      Kr62I1Ee9: e[0],
                                      layoutId: `NVeQTcDoK`,
                                      Mv16WKTEe: `Blog`,
                                      NctncU19N: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
                                      r9wjJW8ZN: !1,
                                      style: { height: `100%` },
                                      variant: `qZMGAGPE0`,
                                      width: `100%`,
                                      XiCzUhcM5: !1,
                                      xkpUt4F21: `New`,
                                      ...$(
                                        { xVCO5kcBX: { Kr62I1Ee9: e[1] } },
                                        T,
                                        N
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      J() &&
                        f(b.div, {
                          className: `framer-112u9ki`,
                          "data-framer-name": `Right`,
                          layoutDependency: H,
                          layoutId: `ClfRKToaZ`,
                          children: [
                            s(x, {
                              height: 28,
                              y:
                                (u?.y || 0) +
                                (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                0 +
                                12,
                              children: s(O, {
                                className: `framer-7572t-container`,
                                layoutDependency: H,
                                layoutId: `qiJUYp81T-container`,
                                nodeId: `qiJUYp81T`,
                                rendersWithMotion: !0,
                                scopeId: `nyDxmLt7o`,
                                children: s(Z, {
                                  height: `100%`,
                                  id: `qiJUYp81T`,
                                  Kr62I1Ee9: ``,
                                  layoutId: `qiJUYp81T`,
                                  Mv16WKTEe: `Coming Soon`,
                                  NctncU19N: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
                                  r9wjJW8ZN: !1,
                                  style: { height: `100%` },
                                  variant: `qZMGAGPE0`,
                                  width: `100%`,
                                  XiCzUhcM5: !1,
                                  xkpUt4F21: `New`,
                                }),
                              }),
                            }),
                            s(x, {
                              height: 28,
                              y:
                                (u?.y || 0) +
                                (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                0 +
                                12,
                              children: s(O, {
                                className: `framer-7572t-container`,
                                layoutDependency: H,
                                layoutId: `qiJUYp81T-container`,
                                nodeId: `qiJUYp81T`,
                                rendersWithMotion: !0,
                                scopeId: `nyDxmLt7o`,
                                children: s(Z, {
                                  height: `100%`,
                                  id: `qiJUYp81T`,
                                  Kr62I1Ee9: `tapflow.co/auth/signin`,
                                  layoutId: `qiJUYp81T`,
                                  Mv16WKTEe: `Log in`,
                                  NctncU19N: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
                                  r9wjJW8ZN: !1,
                                  style: { height: `100%` },
                                  variant: `qZMGAGPE0`,
                                  width: `100%`,
                                  XiCzUhcM5: !1,
                                  xkpUt4F21: `New`,
                                }),
                              }),
                            }),
                            s(x, {
                              height: 28,
                              y:
                                (u?.y || 0) +
                                (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                0 +
                                12,
                              children: s(O, {
                                className: `framer-1derri5-container`,
                                layoutDependency: H,
                                layoutId: `zOcXcQqG7-container`,
                                nodeId: `zOcXcQqG7`,
                                rendersWithMotion: !0,
                                scopeId: `nyDxmLt7o`,
                                children: s(Z, {
                                  height: `100%`,
                                  id: `zOcXcQqG7`,
                                  Kr62I1Ee9: `tapflow.co/auth/invite`,
                                  layoutId: `zOcXcQqG7`,
                                  Mv16WKTEe: `Claim invite`,
                                  NctncU19N: `var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))`,
                                  r9wjJW8ZN: !1,
                                  style: { height: `100%` },
                                  variant: `symjmldSc`,
                                  width: `100%`,
                                  XiCzUhcM5: !1,
                                  xkpUt4F21: `New`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ce() &&
                        s(b.div, {
                          className: `framer-1gfcht1`,
                          "data-framer-name": `Mobile icon`,
                          layoutDependency: H,
                          layoutId: `ZJl18ybwh`,
                          ...$(
                            {
                              K9ye4z1sg: { "data-highlight": !0, onTap: W },
                              QtLCLfH8_: { "data-highlight": !0, onTap: ie },
                            },
                            T,
                            N
                          ),
                          children: s(x, {
                            height: 24,
                            width: `24px`,
                            ...$(
                              {
                                K9ye4z1sg: {
                                  width: `26px`,
                                  y: (u?.y || 0) + 0 + 0 + 0 + 14,
                                },
                                QtLCLfH8_: {
                                  width: `26px`,
                                  y:
                                    (u?.y || 0) +
                                    (0 + ((u?.height || 52) - 0 - 52) / 2) +
                                    0 +
                                    14,
                                },
                              },
                              T,
                              N
                            ),
                            children: s(O, {
                              className: `framer-kyccc7-container`,
                              layoutDependency: H,
                              layoutId: `uIIiVQFab-container`,
                              nodeId: `uIIiVQFab`,
                              rendersWithMotion: !0,
                              scopeId: `nyDxmLt7o`,
                              children: s(vn, {
                                height: `100%`,
                                id: `uIIiVQFab`,
                                layoutId: `uIIiVQFab`,
                                style: { height: `100%`, width: `100%` },
                                variant: `HisUdmQ9F`,
                                width: `100%`,
                                ...$(
                                  { K9ye4z1sg: { variant: `EyQ28nQyS` } },
                                  T,
                                  N
                                ),
                              }),
                            }),
                          }),
                        }),
                      le() &&
                        s(w, {
                          href: `https://tapflow.co/auth/signin?_gl=1*z42apk*_ga*NDg1NDA0NzA0LjE3NDgzNDI0OTE.*_ga_FY7WMHDS49*czE3NDgzNjQwMDAkbzMkZzEkdDE3NDgzNjQwMDEkajU5JGwwJGgxNTQ2NDg3NTA0JGRaR2syT3hFSUhaQnluclBMZXV6dklZV0xvYU9tREdCMndn`,
                          motionChild: !0,
                          nodeId: `gWLa5ExkS`,
                          openInNewTab: ee,
                          scopeId: `nyDxmLt7o`,
                          smoothScroll: !0,
                          children: s(b.a, {
                            className: `framer-jcbcv8 framer-1prae73`,
                            "data-framer-name": `Ghost`,
                            "data-highlight": !0,
                            layoutDependency: H,
                            layoutId: `gWLa5ExkS`,
                            onMouseEnter: ae,
                            onTap: G,
                            style: {
                              backdropFilter: `blur(40px)`,
                              backgroundColor: `rgba(255, 255, 255, 0.12)`,
                              borderBottomLeftRadius: 9.4,
                              borderBottomRightRadius: 9.4,
                              borderTopLeftRadius: 9.4,
                              borderTopRightRadius: 9.4,
                              WebkitBackdropFilter: `blur(40px)`,
                            },
                            children: s(D, {
                              __fromCanvasComponent: !0,
                              children: s(h, {
                                children: s(b.p, {
                                  className: `framer-styles-preset-ijyc80`,
                                  "data-styles-preset": `x7cZ6t6HM`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.55))`,
                                  },
                                  children: `Log in`,
                                }),
                              }),
                              className: `framer-svjrin`,
                              fonts: [`Inter`],
                              layoutDependency: H,
                              layoutId: `gWLa5ExkSESG37723E`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.55)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                    ],
                  }),
                  se() &&
                    s(x, {
                      ...$(
                        {
                          K9ye4z1sg: {
                            height: 800,
                            width: u?.width || `100vw`,
                            y: (u?.y || 0) + 0 + 52,
                          },
                        },
                        T,
                        N
                      ),
                      children: s(O, {
                        className: `framer-i6u3r4-container`,
                        layoutDependency: H,
                        layoutId: `HQZuw3OFR-container`,
                        nodeId: `HQZuw3OFR`,
                        rendersWithMotion: !0,
                        scopeId: `nyDxmLt7o`,
                        children: s(nn, {
                          height: `100%`,
                          id: `HQZuw3OFR`,
                          layoutId: `HQZuw3OFR`,
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (Nn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-BtO5q.framer-1prae73, .framer-BtO5q .framer-1prae73 { display: block; }`,
        `.framer-BtO5q.framer-v5jef7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 960px; }`,
        `.framer-BtO5q .framer-4j4vvm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 52px; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-BtO5q .framer-5q1umm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 100px; position: relative; width: 1px; }`,
        `.framer-BtO5q .framer-gsgf7v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-BtO5q .framer-1woe2r0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 28px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100px; }`,
        `.framer-BtO5q .framer-1xzqgzt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 105px; }`,
        `.framer-BtO5q .framer-1ni7j8s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-BtO5q .framer-fpbs8u-container, .framer-BtO5q .framer-10hck1u-container, .framer-BtO5q .framer-7572t-container, .framer-BtO5q .framer-1derri5-container { flex: none; height: 28px; position: relative; width: auto; }`,
        `.framer-BtO5q .framer-112u9ki { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: flex-end; overflow: visible; padding: 0px 100px 0px 0px; position: relative; width: 1px; }`,
        `.framer-BtO5q .framer-1gfcht1 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 56px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 56px; }`,
        `.framer-BtO5q .framer-kyccc7-container { flex: none; height: 24px; pointer-events: none; position: relative; width: 24px; }`,
        `.framer-BtO5q .framer-jcbcv8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 28px; justify-content: center; overflow: visible; padding: 0px 10px 0px 10px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-BtO5q .framer-svjrin { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-BtO5q .framer-i6u3r4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-BtO5q.framer-v-1swrfui .framer-4j4vvm { max-width: unset; }`,
        `.framer-BtO5q.framer-v-1swrfui .framer-5q1umm { padding: 0px 0px 0px 40px; }`,
        `.framer-BtO5q.framer-v-1swrfui .framer-112u9ki { padding: 0px 40px 0px 0px; }`,
        `.framer-BtO5q.framer-v-8gk3nt.framer-v5jef7 { width: 400px; }`,
        `.framer-BtO5q.framer-v-8gk3nt .framer-4j4vvm { order: 0; padding: 0px 4px 0px 0px; position: sticky; top: 0px; }`,
        `.framer-BtO5q.framer-v-8gk3nt .framer-5q1umm { order: 0; padding: 0px 0px 0px 16px; }`,
        `.framer-BtO5q.framer-v-8gk3nt .framer-1woe2r0 { height: 30px; width: 105px; }`,
        `.framer-BtO5q.framer-v-8gk3nt .framer-1gfcht1 { cursor: pointer; height: var(--framer-aspect-ratio-supported, 52px); order: 4; width: 52px; }`,
        `.framer-BtO5q.framer-v-8gk3nt .framer-kyccc7-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 26px); order: 0; width: 26px; }`,
        `.framer-BtO5q.framer-v-8gk3nt .framer-jcbcv8 { order: 3; }`,
        `.framer-BtO5q.framer-v-nlrie7.framer-v5jef7 { flex-direction: column; justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; width: 400px; }`,
        `.framer-BtO5q.framer-v-nlrie7 .framer-4j4vvm { flex: none; padding: 0px 4px 0px 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-BtO5q.framer-v-nlrie7 .framer-5q1umm { padding: 0px 0px 0px 16px; }`,
        `.framer-BtO5q.framer-v-nlrie7 .framer-1gfcht1 { cursor: pointer; height: var(--framer-aspect-ratio-supported, 52px); width: 52px; }`,
        `.framer-BtO5q.framer-v-nlrie7 .framer-kyccc7-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 26px); width: 26px; }`,
        `.framer-BtO5q.framer-v-nlrie7 .framer-i6u3r4-container { flex: none; width: 100%; }`,
        ...ke,
      ]),
      (Pn = H(Mn, Nn, `framer-BtO5q`)),
      (Fn = Pn),
      (Pn.displayName = `Navigation / Header`),
      (Pn.defaultProps = { height: 52, width: 960 }),
      A(Pn, {
        variant: {
          options: [`fYVgS8NCd`, `xVCO5kcBX`, `QtLCLfH8_`, `K9ye4z1sg`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Phone: Open`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      k(
        Pn,
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
          ...bn,
          ...xn,
          ...Sn,
          ...P(Oe),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  Ln = e(() => {
    q(),
      Y(),
      ce(),
      le(),
      ue(),
      de(),
      X(),
      me(),
      he(),
      ge(),
      _e(),
      be(),
      xe(),
      Te();
  }),
  Rn = e(() => {
    I(), i(), q();
  }),
  zn = e(() => {
    i(), I();
  }),
  Bn = e(() => {
    q(),
      Y(),
      ce(),
      le(),
      ue(),
      de(),
      X(),
      me(),
      he(),
      ge(),
      Rn(),
      zn(),
      xe(),
      Te();
  }),
  Vn,
  Hn,
  Un,
  Wn,
  Gn = e(() => {
    Bn(),
      (Vn = {
        ...ie,
        ...W,
        textAlign: `center`,
        padding: 15,
        width: 200,
        height: 100,
        overflow: `hidden`,
      }),
      (Hn = {
        ...Vn,
        color: `#09f`,
        background: `rgb(0, 153, 255, 0.1)`,
        borderColor: `#09f`,
      }),
      (Un = { fontSize: 12, fontWeight: 600, margin: 0 }),
      (Wn = {
        fontSize: 12,
        maxWidth: 200,
        lineHeight: 1.4,
        margin: `5px 0 0 0`,
      });
  });
function Kn({ url: e, type: t, theme: n, style: r, ...i }) {
  let a = u(() => {
    var r;
    let [, i] = (r = e.match(Jn)) ?? [null, ``];
    return i
      ? `https://api.producthunt.com/widgets/embed-image/v1/${qn[t]}?post_id=${i}&theme=${n}`
      : null;
  }, [e, t, n]);
  return s(b.div, {
    style: {
      ...r,
      ...ie,
      placeContent: `center`,
      placeItems: `center`,
      overflow: `hidden`,
    },
    ...i,
    children: a
      ? s(b.a, {
          href: e,
          target: `_blank`,
          style: { ...r, width: 250, height: 54 },
          ...i,
          children: s(`img`, {
            src: a,
            alt: `Product Hunt Badge`,
            width: `250`,
            height: `54`,
          }),
        })
      : f(b.div, {
          style: { ...Vn, ...r },
          ...i,
          children: [
            s(`h1`, { style: Un, children: `Product Hunt` }),
            s(`p`, {
              style: Wn,
              children: `Set a product URL in the Properties.`,
            }),
          ],
        }),
  });
}
var qn,
  Jn,
  Yn = e(() => {
    r(),
      I(),
      Ln(),
      i(),
      Gn(),
      (qn = {
        featured: `featured.svg`,
        top: `top-post-badge.svg`,
        review: `review.svg`,
      }),
      (Jn = /^https?:\/\/(?:www\.)?producthunt\.com\/posts\/([^\/]*)/),
      A(Kn, {
        url: {
          type: S.String,
          title: `URL`,
          placeholder: `https://www.producthunt.com/posts/***`,
          defaultValue: `https://www.producthunt.com/posts/framer-for-web`,
        },
        type: {
          type: S.Enum,
          title: `Type`,
          options: [`featured`, `top`, `review`],
          optionTitles: [`Featured`, `Top Post Daily`, `Leave a Review`],
          defaultValue: `featured`,
        },
        theme: {
          type: S.Enum,
          options: [`light`, `dark`],
          optionTitles: [`Light`, `Dark`],
          displaySegmentedControl: !0,
        },
      });
  });
function Xn(e) {
  console.log(e);
  try {
    return new URL(e), e;
  } catch {
    try {
      return new URL(`https://${e}`), `https://${e}`;
    } catch {}
  }
}
function Zn(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Qn(e) {
  return e.buttonShadow
    ? `${e.buttonShadow.shadowX}px ${e.buttonShadow.shadowY}px ${e.buttonShadow.shadowBlur}px ${e.buttonShadow.shadowColor}`
    : `none`;
}
function $n(...e) {
  let t = [];
  return e.forEach((e) => e && t.push(e)), t.join(`, `);
}
var er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur = e(() => {
    a(),
      r(),
      i(),
      I(),
      y(),
      (er =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      (tr = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/),
      (nr = (e) => er.test(String(e).toLowerCase())),
      (rr = (e) => {
        let [, t, n] = e.replace(`&amp;`, `&`).match(tr) ?? [null, null, null];
        return [t, n ? new URLSearchParams(n) : null];
      }),
      (ir = `v1`),
      (ar = H(
        function ({
          service: e,
          redirectAs: t,
          mailchimpURL: n,
          loopsID: r,
          loopsUserGroup: i,
          loopsMailingList: a,
          formsparkID: o,
          getwaitlistAPI: c,
          convertkitAPI: l,
          convertkitFormID: u,
          input: p,
          button: h,
          font: _,
          layout: v,
          link: y,
          gap: x,
          style: S,
          onSubmit: C,
        }) {
          let [w, T] = g(``),
            [E, D] = g(!1),
            [O, k] = g(!1),
            [A, j] = g(!1),
            {
              paddingPerSide: M,
              paddingTop: N,
              paddingRight: P,
              paddingBottom: F,
              paddingLeft: I,
              padding: L,
              borderRadius: R,
              borderObject: z,
              focusObject: B,
              shadowObject: V,
              height: H,
              fixedHeight: U,
            } = p,
            {
              buttonPaddingPerSide: re,
              buttonPaddingTop: ie,
              buttonPaddingRight: W,
              buttonPaddingBottom: G,
              buttonPaddingLeft: ae,
              buttonPadding: K,
            } = h,
            q = M
              ? `${N}px ${
                  h.isDocked ? P + h.widthWhenDocked : P
                }px ${F}px ${I}px`
              : `${L}px ${
                  h.isDocked ? L + h.widthWhenDocked : L
                }px ${L}px ${L}px`,
            oe = re
              ? `${h.isDocked ? 0 : ie}px ${W}px ${
                  h.isDocked ? 0 : G
                }px ${ae}px`
              : `${h.isDocked ? 0 : K}px ${K}px ${h.isDocked ? 0 : K}px ${K}px`,
            se = ne(),
            J = () => {
              if ((k(!1), j(!1), T(``), t === `link` && y && !E)) {
                let [e, t] = y.split(`#`),
                  n = e.split(`?`)[0] || ``,
                  { routeId: r, pathVariables: i } = te(se.routes, n);
                if ((r && se.navigate(r, t, i), !Zn(y))) {
                  let e = Xn(y);
                  e && m !== void 0 && m.open(e, `_blank`);
                }
              }
            },
            Y = d(
              (e) => (e === `` || !nr(e) ? (D(!0), X.start(`error`), !1) : !0),
              [nr]
            ),
            ce = d((e) => {
              D(!1), T(e.target.value);
            }, []),
            le = d((e) => {
              j(!0);
            }, []),
            ue = d((e) => {
              j(!1), D(!1);
            }, []),
            de = d(
              (s) => {
                if ((s.preventDefault(), !O)) {
                  if ((k(!0), e === `mailchimp`)) {
                    let [e, r] = rr(n);
                    if (!Y(w) || !e || !r) {
                      k(!1);
                      return;
                    }
                    r.set(`MERGE0`, w),
                      fetch(`https://${e}/subscribe/post`, {
                        method: `POST`,
                        mode: `no-cors`,
                        headers: {
                          "Content-Type": `application/x-www-form-urlencoded;charset=UTF-8`,
                        },
                        body: r.toString(),
                      })
                        .then((e) => {
                          J(), t === `overlay` && C?.();
                        })
                        .catch((e) => {
                          console.error(e), k(!1), D(!0), X.start(`error`);
                        });
                  }
                  if (e === `loops`) {
                    if (!Y(w)) {
                      k(!1);
                      return;
                    }
                    let e = `email=${encodeURIComponent(w)}`,
                      n = `userGroup=${encodeURIComponent(i)}`,
                      o = `mailingLists=${encodeURIComponent(a)}`,
                      s = !!a && a !== ` `,
                      c = !!i && i !== ` `,
                      l = e;
                    c && (l += `&${n}`),
                      s && (l += `&${o}`),
                      fetch(`https://app.loops.so/api/newsletter-form/${r}`, {
                        method: `POST`,
                        mode: `no-cors`,
                        headers: {
                          "Content-Type": `application/x-www-form-urlencoded`,
                        },
                        body: l,
                      })
                        .then(() => {
                          J(), t === `overlay` && C?.();
                        })
                        .catch((e) => {
                          console.error(e), k(!1), D(!0), X.start(`error`);
                        });
                  }
                  if (e === `formspark`) {
                    if (!Y(w)) {
                      k(!1);
                      return;
                    }
                    let e = new FormData(s.target),
                      t = Object.fromEntries(e.entries());
                    fetch(`https://api.formspark.io/${o}`, {
                      method: `POST`,
                      headers: {
                        "Content-Type": `application/json`,
                        Accept: `application/json`,
                      },
                      body: JSON.stringify(t),
                    })
                      .then(() => {
                        J(), C?.();
                      })
                      .catch((e) => {
                        console.error(e), k(!1), D(!0), X.start(`error`);
                      });
                  }
                  if (e === `getwaitlist`) {
                    if (!Y(w)) {
                      k(!1);
                      return;
                    }
                    let e = new FormData(s.target),
                      n = Object.fromEntries(e.entries());
                    (n.referral_link = document.URL),
                      fetch(
                        `https://api.getwaitlist.com/api/v1
/waiter/`,
                        {
                          method: `POST`,
                          headers: {
                            "Content-Type": `application/json`,
                            Accept: `application/json`,
                          },
                          body: JSON.stringify(n),
                        }
                      )
                        .then(() => {
                          J(), t === `overlay` && C?.();
                        })
                        .catch((e) => {
                          console.error(e), k(!1), D(!0), X.start(`error`);
                        });
                  }
                  if (e === `convertkit`) {
                    if (!Y(w)) {
                      k(!1);
                      return;
                    }
                    let e = new FormData(s.target),
                      n = Object.fromEntries(e.entries());
                    (n.referral_link = document.URL),
                      (n.api_key = l),
                      fetch(
                        `https://api.convertkit.com/v3/forms/${u}/subscribe`,
                        {
                          method: `POST`,
                          headers: {
                            "Content-Type": `application/json`,
                            Accept: `application/json`,
                          },
                          body: JSON.stringify(n),
                        }
                      )
                        .then(() => {
                          J(), t === `overlay` && C?.();
                        })
                        .catch((e) => {
                          console.error(e), k(!1), D(!0), X.start(`error`);
                        });
                  }
                }
              },
              [n, o, u, w, C, Y, O]
            ),
            X = ee(),
            fe = p.focusObject
              ? `inset 0 0 0 ${B.focusWidthFrom}px ${B.focusColor}`
              : null,
            pe = p.focusObject
              ? `inset 0 0 0 ${B.focusWidthTo}px ${B.focusColor}`
              : null,
            me = p.shadowObject
              ? `${V.shadowX}px ${V.shadowY}px ${V.shadowBlur}px ${V.shadowColor}`
              : null,
            he = p.borderObject
              ? `inset 0 0 0 ${z.borderWidth}px ${z.borderColor}`
              : null,
            ge = {
              default: { x: 0 },
              error: { x: [0, -4, 4, 0], transition: { duration: 0.2 } },
            },
            _e = {
              default: { boxShadow: $n(fe, me, he) },
              focused: { boxShadow: $n(pe, me, he) },
            };
          return s(b.div, {
            style: {
              ...S,
              ...cr,
              "--framer-custom-placeholder-color": p.placeholderColor,
            },
            variants: ge,
            animate: X,
            children: f(`form`, {
              style: {
                width: `100%`,
                height: `auto`,
                display: `flex`,
                position: `relative`,
                flexDirection: v === `vertical` ? `column` : `row`,
                color: h.color,
                gap: h.isDocked ? 0 : x,
              },
              onSubmit: de,
              method: `POST`,
              children: [
                e === `getwaitlist` &&
                  s(`input`, { type: `hidden`, name: `api_key`, value: c }),
                e === `convertkit` &&
                  s(`input`, { type: `hidden`, name: `api_key`, value: l }),
                s(b.input, {
                  type: `email`,
                  name: `email`,
                  placeholder: p.placeholder,
                  value: w,
                  className: `${ir} framer-custom-input`,
                  onChange: ce,
                  onFocus: le,
                  onBlur: ue,
                  autoComplete: `off`,
                  autoCapitalize: `off`,
                  autoCorrect: `off`,
                  spellCheck: `false`,
                  style: {
                    ...sr,
                    padding: q,
                    borderRadius: R,
                    fontSize: 16,
                    ..._,
                    background: p.fill,
                    height: H ? `auto` : U,
                    color: p.color,
                    boxShadow: $n(fe, me, he),
                  },
                  variants: _e,
                  initial: !1,
                  animate: A ? `focused` : `default`,
                  transition: { duration: 0.3 },
                  "data-1p-ignore": !0,
                }),
                !h.shouldAppear &&
                  O &&
                  s(or, {
                    shouldAppear: h.shouldAppear,
                    paddingPerSide: M,
                    paddingTop: N,
                    paddingRight: P,
                    padding: L,
                    color: p.color,
                  }),
                h.shouldAppear &&
                  f(`div`, {
                    style: {
                      position: h.isDocked ? `absolute` : `relative`,
                      top: h.isDocked ? h.insetWhenDocked : 0,
                      right: h.isDocked ? h.insetWhenDocked : 0,
                      bottom: h.isDocked ? h.insetWhenDocked : 0,
                    },
                    children: [
                      s(b.input, {
                        type: `submit`,
                        value: h.label,
                        style: {
                          ...sr,
                          width: h.isDocked ? h.widthWhenDocked : `100%`,
                          height: H ? `100%` : U,
                          cursor: `pointer`,
                          padding: oe,
                          borderRadius: h.isDocked ? R - h.insetWhenDocked : R,
                          fontSize: 16,
                          ...h.buttonFont,
                          background: h.fill,
                          color: h.color,
                          zIndex: 1,
                          boxShadow: Qn(h),
                        },
                      }),
                      O &&
                        s(`div`, {
                          style: {
                            borderRadius: h.isDocked
                              ? R - h.insetWhenDocked
                              : R,
                            position: `absolute`,
                            display: `flex`,
                            justifyContent: `center`,
                            alignItems: `center`,
                            width: `100%`,
                            height: `100%`,
                            inset: 0,
                            zIndex: 2,
                            color: h.color,
                            background: h.fill,
                          },
                          children: s(or, { color: h.color }),
                        }),
                    ],
                  }),
              ],
            }),
          });
        },
        [
          `.${ir}.framer-custom-input::placeholder { color: var(--framer-custom-placeholder-color) !important; }`,
        ]
      )),
      (or = (e) => {
        let t = e.shouldAppear
          ? {}
          : {
              position: `absolute`,
              top: `calc(50% - 8px)`,
              right: e.paddingPerSide ? e.paddingRight : e.padding,
            };
        return s(b.div, {
          style: { height: 16, width: 16, ...t },
          initial: { rotate: 0 },
          animate: { rotate: 360 },
          transition: { duration: 1, repeat: 1 / 0 },
          children: s(b.div, {
            initial: { scale: 0 },
            animate: { scale: 1 },
            children: f(`svg`, {
              xmlns: `http://www.w3.org/2000/svg`,
              width: `16`,
              height: `16`,
              style: { fill: `currentColor`, color: e.color },
              children: [
                s(`path`, {
                  d: `M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z`,
                  fill: `currentColor`,
                  opacity: `0.2`,
                }),
                s(`path`, {
                  d: `M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z`,
                  fill: `currentColor`,
                }),
              ],
            }),
          }),
        });
      }),
      A(ar, {
        service: {
          title: `Service`,
          type: S.Enum,
          options: [
            `loops`,
            `formspark`,
            `mailchimp`,
            `getwaitlist`,
            `convertkit`,
          ],
          optionTitles: [
            `Loops`,
            `FormSpark`,
            `MailChimp`,
            `Get Waitlist`,
            `ConvertKit`,
          ],
          defaultValue: `loops`,
        },
        mailchimpURL: {
          title: `URL`,
          placeholder: `https://***.us6.list-manage.com/subscribe/post?u=***`,
          type: S.String,
          hidden: (e) => e.service !== `mailchimp`,
        },
        loopsID: {
          title: `ID`,
          placeholder: `klm2jxy0i98abzr01pq7defg5`,
          type: S.String,
          hidden: (e) => e.service !== `loops`,
        },
        loopsUserGroup: {
          title: `User Group`,
          type: S.String,
          placeholder: `Title`,
          optional: !0,
          hidden: (e) => e.service !== `loops`,
        },
        loopsMailingList: {
          title: `Mailing List`,
          type: S.String,
          placeholder: `cm3q41c5v02ii1lml14om2wtr`,
          optional: !0,
          hidden: (e) => e.service !== `loops`,
        },
        formsparkID: {
          title: `ID`,
          placeholder: `7PbPpGN3`,
          type: S.String,
          hidden: (e) => e.service !== `formspark`,
        },
        getwaitlistAPI: {
          title: `ID`,
          placeholder: `9148`,
          type: S.String,
          hidden: (e) => e.service !== `getwaitlist`,
        },
        convertkitAPI: {
          title: `API Key`,
          placeholder: `5opis1WK6xnVsBwrOINUpe`,
          type: S.String,
          hidden: (e) => e.service !== `convertkit`,
        },
        convertkitFormID: {
          title: `Form ID`,
          placeholder: `1043389`,
          type: S.String,
          hidden: (e) => e.service !== `convertkit`,
        },
        redirectAs: {
          title: `Success`,
          type: S.Enum,
          options: [`link`, `overlay`],
          optionTitles: [`Open Link`, `Show Overlay`],
          defaultValue: `link`,
        },
        link: {
          title: `Redirect`,
          type: S.Link,
          hidden: (e) => e.redirectAs === `overlay`,
        },
        onSubmit: {
          title: `Submit`,
          type: S.EventHandler,
          hidden: (e) => e.redirectAs === `link`,
        },
        layout: {
          title: `Layout`,
          type: S.Enum,
          options: [`horizontal`, `vertical`],
          displaySegmentedControl: !0,
          hidden: (e) => e.button.isDocked,
        },
        font: { type: S.Font, title: `Font`, controls: `extended` },
        input: {
          title: `Input`,
          type: S.Object,
          controls: {
            placeholder: {
              title: `Placeholder`,
              type: S.String,
              defaultValue: `name@email.com`,
            },
            placeholderColor: {
              title: ` `,
              type: S.Color,
              defaultValue: `rgba(0, 0, 0, 0.3)`,
            },
            fill: { title: `Fill`, type: S.Color, defaultValue: `#EBEBEB` },
            color: { title: `Text`, type: S.Color, defaultValue: `#000` },
            height: {
              title: `Height`,
              type: S.Boolean,
              enabledTitle: `Auto`,
              disabledTitle: `Fixed`,
            },
            fixedHeight: {
              title: ` `,
              type: S.Number,
              displayStepper: !0,
              min: 0,
              defaultValue: 50,
              hidden: (e) => e.height,
            },
            padding: {
              title: `Padding`,
              type: S.FusedNumber,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`Padding`, `Padding per side`],
              defaultValue: 15,
              valueKeys: [
                `paddingTop`,
                `paddingRight`,
                `paddingBottom`,
                `paddingLeft`,
              ],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            borderRadius: {
              title: `Radius`,
              type: S.Number,
              displayStepper: !0,
              min: 0,
              defaultValue: 8,
            },
            focusObject: {
              type: S.Object,
              title: `Focus`,
              optional: !0,
              controls: {
                focusWidthFrom: {
                  title: `From`,
                  type: S.Number,
                  displayStepper: !0,
                  defaultValue: 0,
                },
                focusWidthTo: {
                  title: `To`,
                  type: S.Number,
                  displayStepper: !0,
                  defaultValue: 2,
                },
                focusColor: {
                  title: `Color`,
                  type: S.Color,
                  defaultValue: `#09F`,
                },
              },
            },
            borderObject: {
              type: S.Object,
              title: `Border`,
              optional: !0,
              controls: {
                borderWidth: {
                  title: `Width`,
                  type: S.Number,
                  displayStepper: !0,
                  defaultValue: 1,
                },
                borderColor: {
                  title: `Color`,
                  type: S.Color,
                  defaultValue: `rgba(200,200,200,0.5)`,
                },
              },
            },
            shadowObject: {
              type: S.Object,
              title: `Shadow`,
              optional: !0,
              controls: {
                shadowColor: {
                  title: `Color`,
                  type: S.Color,
                  defaultValue: `rgba(0,0,0,0.25)`,
                },
                shadowX: {
                  title: `Shadow X`,
                  type: S.Number,
                  min: -100,
                  max: 100,
                  defaultValue: 0,
                },
                shadowY: {
                  title: `Shadow Y`,
                  type: S.Number,
                  min: -100,
                  max: 100,
                  defaultValue: 2,
                },
                shadowBlur: {
                  title: `Shadow B`,
                  type: S.Number,
                  min: 0,
                  max: 100,
                  defaultValue: 4,
                },
              },
            },
          },
        },
        button: {
          title: `Button`,
          type: S.Object,
          controls: {
            shouldAppear: { title: `Show`, type: S.Boolean, defaultValue: !0 },
            label: {
              title: `Label`,
              type: S.String,
              defaultValue: `Subscribe`,
            },
            buttonFont: { type: S.Font, title: `Font`, controls: `extended` },
            fill: { title: `Fill`, type: S.Color, defaultValue: `#333` },
            color: { title: `Text`, type: S.Color, defaultValue: `#FFF` },
            isDocked: { title: `Docked`, type: S.Boolean, defaultValue: !1 },
            widthWhenDocked: {
              title: `Width`,
              type: S.Number,
              min: 0,
              defaultValue: 100,
              displayStepper: !0,
              hidden: (e) => !e.isDocked,
            },
            insetWhenDocked: {
              title: `Inset`,
              type: S.Number,
              min: 0,
              defaultValue: 5,
              displayStepper: !0,
              hidden: (e) => !e.isDocked,
            },
            buttonPadding: {
              title: `Padding`,
              type: S.FusedNumber,
              toggleKey: `buttonPaddingPerSide`,
              toggleTitles: [`Padding`, `Padding per side`],
              defaultValue: 15,
              valueKeys: [
                `buttonPaddingTop`,
                `buttonPaddingRight`,
                `buttonPaddingBottom`,
                `buttonPaddingLeft`,
              ],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            buttonShadow: {
              type: S.Object,
              title: `Shadow`,
              optional: !0,
              controls: {
                shadowColor: {
                  title: `Color`,
                  type: S.Color,
                  defaultValue: `rgba(0,0,0,0.25)`,
                },
                shadowX: {
                  title: `Shadow X`,
                  type: S.Number,
                  min: -100,
                  max: 100,
                  defaultValue: 0,
                },
                shadowY: {
                  title: `Shadow Y`,
                  type: S.Number,
                  min: -100,
                  max: 100,
                  defaultValue: 2,
                },
                shadowBlur: {
                  title: `Shadow B`,
                  type: S.Number,
                  min: 0,
                  max: 100,
                  defaultValue: 4,
                },
              },
            },
          },
        },
        gap: {
          title: `Gap`,
          type: S.Number,
          displayStepper: !0,
          min: 0,
          defaultValue: 10,
          hidden: (e) => e.button.isDocked,
        },
      }),
      (sr = {
        WebkitAppearance: `none`,
        appearance: `none`,
        width: `100%`,
        height: `auto`,
        outline: `none`,
        border: `none`,
      }),
      (cr = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (lr = ar);
  });
function dr(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr = e(() => {
    r(),
      I(),
      y(),
      i(),
      Yn(),
      ur(),
      St(),
      Et(),
      (fr = N(Kn)),
      (pr = N(lr)),
      (mr = [`UDF2xq7Bi`, `aeBB4p3ZD`]),
      (hr = `framer-Vs9iO`),
      (gr = { aeBB4p3ZD: `framer-v-1f30o6c`, UDF2xq7Bi: `framer-v-p42k7t` }),
      (_r = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (vr = ({ value: e, children: t }) => {
        let n = l(v),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(v.Provider, { value: i, children: t });
      }),
      (yr = b.create(h)),
      (br = { Desktop: `UDF2xq7Bi`, Phone: `aeBB4p3ZD` }),
      (xr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: br[r.variant] ?? r.variant ?? `UDF2xq7Bi`,
      })),
      (Sr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Cr = t(function (e, t) {
        let r = c(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: l } = B(),
          u = R(),
          { style: d, className: p, layoutId: m, variant: g, ...v } = xr(e),
          {
            baseVariant: y,
            classNames: ee,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: T,
            isLoading: E,
            setGestureState: k,
            setVariant: A,
            variants: M,
          } = V({
            cycleOrder: mr,
            defaultVariant: `UDF2xq7Bi`,
            ref: i,
            variant: g,
            variantClassNames: gr,
          }),
          N = Sr(e, M),
          P = [xt, Tt],
          F = j(hr, ...P);
        return s(_, {
          id: m ?? a,
          children: s(yr, {
            animate: M,
            initial: !1,
            children: s(vr, {
              value: _r,
              children: f(b.footer, {
                ...v,
                ...C,
                className: j(F, `framer-p42k7t`, p, ee),
                "data-framer-name": `Desktop`,
                layoutDependency: N,
                layoutId: `UDF2xq7Bi`,
                ref: i,
                style: { backgroundColor: `rgb(0, 0, 0)`, ...d },
                ...dr({ aeBB4p3ZD: { "data-framer-name": `Phone` } }, y, T),
                children: [
                  s(b.div, {
                    className: `framer-1ksnwjy`,
                    "data-framer-name": `Footer`,
                    layoutDependency: N,
                    layoutId: `O9DeQEHTa`,
                    style: {
                      backgroundColor: `rgba(255, 255, 255, 0)`,
                      borderBottomLeftRadius: 40,
                      borderBottomRightRadius: 40,
                      borderTopLeftRadius: 40,
                      borderTopRightRadius: 40,
                    },
                    children: s(b.div, {
                      className: `framer-1gsg2v9`,
                      "data-framer-name": `Column`,
                      layoutDependency: N,
                      layoutId: `jpOuOTjaX`,
                      children: s(b.div, {
                        className: `framer-dwycy3`,
                        "data-framer-name": `Row`,
                        layoutDependency: N,
                        layoutId: `Nz_0lUglz`,
                        children: f(b.div, {
                          className: `framer-tucbhz`,
                          layoutDependency: N,
                          layoutId: `n74nbR2Eu`,
                          children: [
                            f(b.div, {
                              className: `framer-uy29qe`,
                              layoutDependency: N,
                              layoutId: `IHBPwDoP6`,
                              children: [
                                f(b.div, {
                                  className: `framer-fpkhay`,
                                  "data-framer-name": `Sitemap`,
                                  layoutDependency: N,
                                  layoutId: `M_sk6g8EZ`,
                                  children: [
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          children: s(w, {
                                            href: { webPageId: `Z7s0mVtRR` },
                                            motionChild: !0,
                                            nodeId: `e3_DSfGLe`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `OPJJq0QP0`,
                                            smoothScroll: !1,
                                            children: s(b.a, {
                                              className: `framer-styles-preset-1eahpii`,
                                              "data-styles-preset": `pWnECMXPj`,
                                              children: `Home`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1s974iv`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `e3_DSfGLe`,
                                      style: {
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          children: s(w, {
                                            href: { webPageId: `Ypsar2ozb` },
                                            motionChild: !0,
                                            nodeId: `OaS3A4H6p`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `OPJJq0QP0`,
                                            smoothScroll: !1,
                                            children: s(b.a, {
                                              className: `framer-styles-preset-1eahpii`,
                                              "data-styles-preset": `pWnECMXPj`,
                                              children: `Changelog`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1bainrm`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `OaS3A4H6p`,
                                      style: {
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          children: s(w, {
                                            href: { webPageId: `iLZYGxuPR` },
                                            motionChild: !0,
                                            nodeId: `onHyG_130`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `OPJJq0QP0`,
                                            smoothScroll: !1,
                                            children: s(b.a, {
                                              className: `framer-styles-preset-1eahpii`,
                                              "data-styles-preset": `pWnECMXPj`,
                                              children: `Contact`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-16899xq`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `onHyG_130`,
                                      style: {
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(b.div, {
                                  className: `framer-it8err`,
                                  "data-framer-name": `Legal`,
                                  layoutDependency: N,
                                  layoutId: `JADlPKjvy`,
                                  children: [
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          children: s(w, {
                                            href: {
                                              pathVariables: {
                                                oNC7XILjD: `terms`,
                                              },
                                              unresolvedPathSlugs: {
                                                oNC7XILjD: {
                                                  collectionId: `kB5JQlUFw`,
                                                  collectionItemId: `zzwT7Ecnc`,
                                                },
                                              },
                                              webPageId: `ZFYIZTF16`,
                                            },
                                            motionChild: !0,
                                            nodeId: `uTd820ROK`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `OPJJq0QP0`,
                                            smoothScroll: !1,
                                            children: s(b.a, {
                                              className: `framer-styles-preset-1eahpii`,
                                              "data-styles-preset": `pWnECMXPj`,
                                              children: `Terms`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-izhv8u`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `uTd820ROK`,
                                      style: {
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          children: s(w, {
                                            href: {
                                              pathVariables: {
                                                oNC7XILjD: `privacy`,
                                              },
                                              unresolvedPathSlugs: {
                                                oNC7XILjD: {
                                                  collectionId: `kB5JQlUFw`,
                                                  collectionItemId: `QptZngUYr`,
                                                },
                                              },
                                              webPageId: `ZFYIZTF16`,
                                            },
                                            motionChild: !0,
                                            nodeId: `A3dcv3ue4`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `OPJJq0QP0`,
                                            smoothScroll: !1,
                                            children: s(b.a, {
                                              className: `framer-styles-preset-1eahpii`,
                                              "data-styles-preset": `pWnECMXPj`,
                                              children: `Privacy `,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-yyq4ns`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `A3dcv3ue4`,
                                      style: {
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s(x, {
                              children: s(O, {
                                className: `framer-1yd6yob-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: N,
                                layoutId: `g96h0w7vw-container`,
                                nodeId: `g96h0w7vw`,
                                rendersWithMotion: !0,
                                scopeId: `OPJJq0QP0`,
                                children: s(Kn, {
                                  height: `100%`,
                                  id: `g96h0w7vw`,
                                  layoutId: `g96h0w7vw`,
                                  theme: `dark`,
                                  type: `featured`,
                                  url: `https://www.producthunt.com/posts/tapflow-2-0`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            f(b.div, {
                              className: `framer-ozn9p4`,
                              "data-framer-name": `Subscription`,
                              layoutDependency: N,
                              layoutId: `YvB8estc0`,
                              children: [
                                f(b.div, {
                                  className: `framer-sonpd6`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: N,
                                  layoutId: `xDEoX0VjX`,
                                  children: [
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          children: s(b.strong, {
                                            children: `Newsletter (rare, but good)`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1nqdaa7`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      layoutDependency: N,
                                      layoutId: `XlWGtPMxI`,
                                      style: {
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      variants: {
                                        aeBB4p3ZD: {
                                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                        },
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...dr(
                                        {
                                          aeBB4p3ZD: {
                                            children: s(h, {
                                              children: s(b.p, {
                                                className: `framer-styles-preset-oh30q`,
                                                "data-styles-preset": `FwmuxBMQR`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                },
                                                children: `Newsletter (rare, but good)`,
                                              }),
                                            }),
                                            fonts: [`Inter`],
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    s(D, {
                                      __fromCanvasComponent: !0,
                                      children: s(h, {
                                        children: s(b.p, {
                                          className: `framer-styles-preset-oh30q`,
                                          "data-styles-preset": `FwmuxBMQR`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48)))`,
                                          },
                                          children: `Insights, launches, and behind-the-scenes plays from top creators. Useful ideas you can learn from — only when there’s something good to share.`,
                                        }),
                                      }),
                                      className: `framer-68s0tl`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `TQmXSXoVA`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(b.div, {
                                  className: `framer-igeii7`,
                                  "data-framer-name": `Input`,
                                  layoutDependency: N,
                                  layoutId: `BBhfr6uuU`,
                                  children: s(x, {
                                    children: s(O, {
                                      className: `framer-j1t6qc-container`,
                                      "data-framer-name": `Subscription`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: N,
                                      layoutId: `emcnd7TiN-container`,
                                      name: `Subscription`,
                                      nodeId: `emcnd7TiN`,
                                      rendersWithMotion: !0,
                                      scopeId: `OPJJq0QP0`,
                                      children: s(lr, {
                                        button: {
                                          buttonFont: {
                                            fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `120%`,
                                          },
                                          buttonPadding: 0,
                                          buttonPaddingBottom: 0,
                                          buttonPaddingLeft: 16,
                                          buttonPaddingPerSide: !0,
                                          buttonPaddingRight: 16,
                                          buttonPaddingTop: 0,
                                          color: `rgb(255, 255, 255)`,
                                          fill: `rgba(255, 255, 255, 0.2)`,
                                          insetWhenDocked: 0,
                                          isDocked: !1,
                                          label: `Subscribe`,
                                          shouldAppear: !0,
                                          widthWhenDocked: 120,
                                        },
                                        convertkitAPI: `kit_2074651f2175b9ec7c43e5bca5742dee`,
                                        convertkitFormID: ``,
                                        font: {
                                          fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 300,
                                          letterSpacing: `0.03em`,
                                          lineHeight: `100%`,
                                        },
                                        formsparkID: `Tu7ynGXIv`,
                                        gap: 8,
                                        getwaitlistAPI: ``,
                                        height: `100%`,
                                        id: `emcnd7TiN`,
                                        input: {
                                          borderRadius: 12,
                                          color: `var(--token-c231b950-0423-4991-bb61-2e0a15fbd93a, rgba(255, 255, 255, 0.96))`,
                                          fill: `rgba(255, 255, 255, 0.08)`,
                                          fixedHeight: 40,
                                          focusObject: {
                                            focusColor: `var(--token-2c81481e-38cd-4c47-96da-a9e57d1ddd77, rgba(255, 255, 255, 0.16))`,
                                            focusWidthFrom: 0,
                                            focusWidthTo: 1,
                                          },
                                          height: !1,
                                          padding: 16,
                                          paddingBottom: 0,
                                          paddingLeft: 16,
                                          paddingPerSide: !0,
                                          paddingRight: 16,
                                          paddingTop: 0,
                                          placeholder: `Enter email`,
                                          placeholderColor: `var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48))`,
                                        },
                                        layout: `horizontal`,
                                        layoutId: `emcnd7TiN`,
                                        loopsID: ``,
                                        loopsMailingList: ``,
                                        loopsUserGroup: ``,
                                        mailchimpURL: ``,
                                        name: `Subscription`,
                                        redirectAs: `overlay`,
                                        service: `formspark`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  s(b.div, {
                    className: `framer-18v8cwy`,
                    "data-framer-name": `Credits`,
                    layoutDependency: N,
                    layoutId: `Nj6bCXOmJ`,
                    style: { opacity: 0.24 },
                    children: s(D, {
                      __fromCanvasComponent: !0,
                      children: s(h, {
                        children: s(b.p, {
                          className: `framer-styles-preset-oh30q`,
                          "data-styles-preset": `FwmuxBMQR`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255)))`,
                          },
                          children: `Tapflow © 2025 — Knowledge, thoughtfully made.`,
                        }),
                      }),
                      className: `framer-1iuyfoc`,
                      "data-framer-name": `Sign up now for TOP SECRET\xA0news`,
                      fonts: [`Inter`],
                      layoutDependency: N,
                      layoutId: `d0L2e8_mm`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (wr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Vs9iO.framer-w964ra, .framer-Vs9iO .framer-w964ra { display: block; }`,
        `.framer-Vs9iO.framer-p42k7t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1140px; }`,
        `.framer-Vs9iO .framer-1ksnwjy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Vs9iO .framer-1gsg2v9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 40px 0px 40px 0px; position: relative; width: 1px; }`,
        `.framer-Vs9iO .framer-dwycy3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 152px; justify-content: flex-start; max-height: 100%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Vs9iO .framer-tucbhz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Vs9iO .framer-uy29qe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Vs9iO .framer-fpkhay, .framer-Vs9iO .framer-zcq6xp, .framer-Vs9iO .framer-it8err { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 16px 0px 0px; position: relative; width: min-content; }`,
        `.framer-Vs9iO .framer-1s974iv, .framer-Vs9iO .framer-1bainrm, .framer-Vs9iO .framer-16899xq, .framer-Vs9iO .framer-1ebde5n, .framer-Vs9iO .framer-1n23z5m, .framer-Vs9iO .framer-izhv8u, .framer-Vs9iO .framer-yyq4ns { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Vs9iO .framer-1yd6yob-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-Vs9iO .framer-ozn9p4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; max-width: 440px; min-width: 320px; overflow: visible; padding: 0px; position: relative; width: 440px; }`,
        `.framer-Vs9iO .framer-sonpd6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; max-width: 400px; overflow: visible; padding: 0px 0px 0px 14px; position: relative; width: 100%; }`,
        `.framer-Vs9iO .framer-1nqdaa7, .framer-Vs9iO .framer-68s0tl { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Vs9iO .framer-igeii7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Vs9iO .framer-j1t6qc-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Vs9iO .framer-18v8cwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 24px 60px 24px 60px; position: relative; width: min-content; }`,
        `.framer-Vs9iO .framer-1iuyfoc { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 440px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Vs9iO.framer-v-1f30o6c.framer-p42k7t { height: 547px; width: 400px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-1ksnwjy { flex-direction: column; height: 81%; padding: 32px 0px 0px 0px; width: 401px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-1gsg2v9 { flex: none; gap: 40px; justify-content: flex-start; padding: 0px 32px 32px 32px; width: min-content; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-dwycy3 { gap: 80px; width: 337px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-tucbhz { flex: none; flex-direction: column; gap: 54px; justify-content: flex-start; width: min-content; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-uy29qe { gap: 36px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-fpkhay, .framer-Vs9iO.framer-v-1f30o6c .framer-zcq6xp, .framer-Vs9iO.framer-v-1f30o6c .framer-it8err { gap: 4px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-ozn9p4 { width: min-content; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-sonpd6 { padding: 0px; width: 337px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-igeii7 { width: 337px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-j1t6qc-container { width: 109%; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-18v8cwy { padding: 12px 0px 20px 0px; }`,
        `.framer-Vs9iO.framer-v-1f30o6c .framer-1iuyfoc { width: 400px; }`,
        ...bt,
        ...wt,
      ]),
      (Tr = H(Cr, wr, `framer-Vs9iO`)),
      (Er = Tr),
      (Tr.displayName = `.footer-content`),
      (Tr.defaultProps = { height: 299.5, width: 1140 }),
      A(Tr, {
        variant: {
          options: [`UDF2xq7Bi`, `aeBB4p3ZD`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      k(
        Tr,
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
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/MaMAn5Jp5gJg1z3VaLH65QwWPLc.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/fEqgEChcTaneQFxeugexHq7Bk.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/nL7d8Ph0ViwUQorApF89PoAagQI.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/YOHXUQlY1iC2t7qT4HeLSoBDtn4.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/TfzHIi6ZmZDuhnIFGcgM6Ipuim4.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/6e1qKhy2mljzCRhlGpuCksCGjGI.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/ub5XwqqEAMrXQz31ej6fNqbxnBc.woff2`,
                weight: `300`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2`,
                weight: `500`,
              },
              {
                family: `Inter Display`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
                weight: `500`,
              },
            ],
          },
          ...fr,
          ...pr,
          ...P(yt),
          ...P(Ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  Or,
  kr,
  Ar,
  jr = e(() => {
    I(),
      M.loadFonts([
        `FR;InterDisplay-Light`,
        `FR;InterDisplay-SemiBold`,
        `FR;InterDisplay-SemiBoldItalic`,
        `FR;InterDisplay-LightItalic`,
      ]),
      (Or = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/MaMAn5Jp5gJg1z3VaLH65QwWPLc.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/fEqgEChcTaneQFxeugexHq7Bk.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/nL7d8Ph0ViwUQorApF89PoAagQI.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/YOHXUQlY1iC2t7qT4HeLSoBDtn4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/TfzHIi6ZmZDuhnIFGcgM6Ipuim4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/6e1qKhy2mljzCRhlGpuCksCGjGI.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/ub5XwqqEAMrXQz31ej6fNqbxnBc.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/JVGAsgKKXCCsDQ3MCrxIs5u1U.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/GeFYhvsobZhw8u0Xza2zCmC8Cw.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8dxmIktsyEgZt0OloSu5gz6TgLI.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/f2kclCrwmFV8YeznrosrT3kcjE.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/HTPyW5jOpXfwIja9CrgNJUDriY4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/SorE7ZPZIqD5pBy9oKeSOEC0Q5k.woff2`,
              weight: `300`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/xFtzow8wtMpaEQuIGgCbt25Qorg.woff2`,
              weight: `300`,
            },
          ],
        },
      ]),
      (kr = [
        `.framer-yQnRl .framer-styles-preset-14qgaa:not(.rich-text-wrapper), .framer-yQnRl .framer-styles-preset-14qgaa.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1299px) and (min-width: 0px) { .framer-yQnRl .framer-styles-preset-14qgaa:not(.rich-text-wrapper), .framer-yQnRl .framer-styles-preset-14qgaa.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 300; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ar = `framer-yQnRl`);
  });
function Mr(e, t) {
  return {
    customHTMLHeadEnd: `<!-- Amplitude Analytics Script -->
<script src="https://cdn.amplitude.com/libs/analytics-browser-2.10.0-min.js.gz"></script>
<script>
  window.amplitude.init("3c368da9969d259557b9201028df6127", {
      autocapture: { elementInteractions: true, pageViews: true, sessions: true }
  });
</script>

<!-- Google tag (gtag.js) -->
<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-FY7WMHDS49"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FY7WMHDS49');
</script>

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1137347597326141');
fbq('track', 'PageView');
</script>
<noscript></noscript>`,
    description: `Tapflow lets tech professionals create and sell digital guides, workflows, and courses in minutes—package hard-won knowledge, ship, get paid.`,
    favicon: `https://framerusercontent.com/assets/WGcSfufeSAF5YUmMIQDthxsT8.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/SXxNS58LzxoYTTCyVV0dIDvGPw.png`,
    title: `Tapflow`,
  };
}
var Nr = e(() => {});
export {
  Ee as ColorsSelection,
  Z as F5glnIxIK_default,
  Rt as FeZ5AYXoK_default,
  lr as Input_default,
  Er as OPJJq0QP0_default,
  Ce as borderRadiusControl,
  Ar as className,
  Tt as className$1,
  xt as className$2,
  Pe as className$3,
  kr as css,
  wt as css$1,
  bt as css$2,
  Ne as css$3,
  G as defaultEvents,
  Or as fonts,
  Ct as fonts$1,
  yt as fonts$2,
  Me as fonts$3,
  De as init_Color,
  vt as init_F5glnIxIK,
  zt as init_FeZ5AYXoK,
  St as init_FwmuxBMQR,
  ur as init_Input,
  Dr as init_OPJJq0QP0,
  jr as init_ZIat6mjgN,
  le as init_colorFromToken,
  q as init_constants,
  Fe as init_dj_MW1Noe,
  me as init_isBrowser,
  ue as init_isMotionValue,
  In as init_nyDxmLt7o,
  Et as init_pWnECMXPj,
  Te as init_propUtils,
  Nr as init_siteMetadata,
  ge as init_useAutoMotionValue,
  ce as init_useConstant,
  xe as init_useControlledState,
  _e as init_useFontControls,
  he as init_useOnChange,
  Y as init_useOnNavigationTargetChange,
  be as init_useRenderTarget,
  de as init_useUniqueClassName,
  X as init_variantUtils,
  Mr as metadata,
  Fn as nyDxmLt7o_default,
  pe as useIsBrowserSafari,
  ye as useIsOnCanvas,
  oe as useOnEnter,
  se as useOnExit,
  Se as useRadius,
  ve as useRenderTarget,
};
//# sourceMappingURL=shared-lib.r4QOIZLn.mjs.map
