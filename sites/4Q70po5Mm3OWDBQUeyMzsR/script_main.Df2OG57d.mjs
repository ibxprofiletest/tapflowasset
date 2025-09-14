import { __esmMin as e } from "./rolldown-runtime.CL7h_VhF.mjs";
import {
  B as t,
  Z as n,
  d as r,
  init_client as i,
  init_npm_react_18_2 as a,
  init_npm_react_dom_18_2 as o,
  init_ssg_sandbox_shims as s,
  r as c,
  window as l,
} from "./react.Bo_x0BtE.mjs";
import {
  ErrorPlaceholder as u,
  GracefullyDegradingErrorBoundary as d,
  LibraryFeaturesProvider as f,
  PageEffectsProvider as p,
  PageRoot as m,
  inferInitialRouteFromPath as h,
  init_framer_QIGYLLGG as g,
  installFlexboxGapWorkaroundIfNeeded as _,
  lazy as v,
  markHydrationStart as y,
  patchRoutesForABTesting as b,
  removeHiddenBreakpointLayersV2 as x,
  turnOffReactEventHandling as S,
  withPerformanceMarks as C,
  yieldToMain as w,
} from "./framer.y4n5MTq4.mjs";
async function T({ routeId: e, pathVariables: n, localeId: r }) {
  let i = O[e].page.preload(),
    a = t(m, {
      isWebsite: !0,
      routeId: e,
      pathVariables: n,
      routes: O,
      collectionUtils: A,
      framerSiteId: j,
      notFoundPage: v(() =>
        import(`./f3fuhSozsyATbh0WEpSfKNpd0iB9gY04pgg0LSoHIGY.CZn9AXd-.mjs`)
      ),
      isReducedMotion: void 0,
      localeId: r,
      locales: k,
      preserveQueryParams: !0,
      siteCanonicalURL: `https://www.tapflow.ai`,
    }),
    o = t(f, {
      children: a,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        editorBarExperimentalEmailLinkToCanvas: !1,
        editorBarOnPageEditing: !1,
        editorBarSendEmails: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    s = t(d, { children: o }),
    c = t(p, { children: s, value: { routes: {} } });
  return await i, c;
}
function E() {
  M && l.__framer_events.push(arguments);
}
async function D(e, t) {
  function i(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        r
      );
    E(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
          ? e.stack
          : null,
      }
    );
  }
  try {
    let a, o, s, u;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      (a = e.routeId),
        (o = e.localeId),
        (s = e.pathVariables),
        (u = e.breakpoints),
        (a = b(O, a));
    } else {
      b(O, void 0);
      let e = h(O, decodeURIComponent(location.pathname), !0, k);
      (a = e.routeId), (o = e.localeId), (s = e.pathVariables);
    }
    let d = T({ routeId: a, localeId: o, pathVariables: s });
    l !== void 0 &&
      (async () => {
        let e = O[a],
          t = `default`,
          n = k.find(({ id: e }) => (o ? e === o : e === t)).code,
          r = null;
        if (e?.collectionId && A) {
          let t = await A[e.collectionId]?.(),
            [i] = Object.values(s);
          t &&
            typeof i == `string` &&
            (r = (await t.getRecordIdBySlug(i, n || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          c = i.timeZone,
          u = i.locale;
        await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: j ?? null,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? a,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: c,
              locale: u,
            },
            `eager`,
          ]),
          await w({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: n || null },
            })
          );
      })();
    let f = await d;
    if (e) {
      C(`framer-rewrite-breakpoints`, () => {
        x(u), l.__framer_onRewriteBreakpoints?.(u);
      });
      let e = n;
      e(() => {
        y(), S(), r(t, f, { onRecoverableError: i });
      });
    } else c(t, { onRecoverableError: i }).render(f);
  } catch (e) {
    throw (i(e, void 0, !1), e);
  }
}
var O,
  k,
  A,
  j,
  M,
  N = e(() => {
    if (
      (s(),
      g(),
      a(),
      o(),
      i(),
      (O = {
        Z7s0mVtRR: {
          elements: {
            BOz64z3vz: `hero`,
            CkMUn9p_g: `intro-3`,
            cQocWcnEg: `intro-2`,
            kxVuIqS_9: `intro`,
            SwrrYTWYy: `navigation`,
            WTeqxoVZX: `intro-1`,
          },
          page: v(() =>
            import(`./4qXG8v7ydvQ_bY5_rFCYqgiL6z4wjDMarqErxMAR1Mk.Cy3As_aj.mjs`)
          ),
          path: `/`,
        },
        iMu8KsCPo: {
          elements: {
            FYSSJAlgj: `navigation`,
            geDaTJ1fy: `photos`,
            x2M85pYmH: `jobs`,
          },
          page: v(() =>
            import(`./NFymrXEFGxTvienSN_VQCRIyW6IyEtD77_zddsNz6Uo.CpgSNpr8.mjs`)
          ),
          path: `/inactive/careers`,
        },
        IfRxmqECe: {
          elements: { hxg1cSBXE: `navigation` },
          page: v(() =>
            import(`./MIZCF2CEvOuhg9U9kMbJWVnBXM4aqn_rYrNVjXDEsag.CIncjRSJ.mjs`)
          ),
          path: `/inactive/about`,
        },
        iLZYGxuPR: {
          elements: { kJM_MfVEP: `navigation` },
          page: v(() =>
            import(`./RxZTuftgkj_TMeXREM9b5rq9Y9DzGgvneOUSQDf2M8w.CVZEJu5O.mjs`)
          ),
          path: `/contact`,
        },
        AmHHs7fIb: {
          elements: { S81jCLEJ5: `navigation`, WNdFJirK8: `faq` },
          page: v(() =>
            import(`./VGEvxDiocF0gWuWaKpEq2NWGS90roHT6q5EJASkF6OI.e3uS-e2U.mjs`)
          ),
          path: `/inactive/pricing`,
        },
        aMsBLPU9g: {
          elements: { Xld1ztgo7: `navigation` },
          page: v(() =>
            import(`./S487tF8Er5-gp2G1zsoK5mJ5_ksHWyOb0gF_AJP95YE.CDCalvbJ.mjs`)
          ),
          path: `/inactive/features`,
        },
        CdS7tnkbe: {
          elements: {
            AYZlURnmX: `hero`,
            bLPqHanYY: `intro`,
            qRmlAJ3_d: `navigation`,
          },
          page: v(() =>
            import(`./JBx1qFlO1QPGuxShw5ZrwVaySExpzFcBP06CWcCmouo.Cdpord0F.mjs`)
          ),
          path: `/inactive/home-alt`,
        },
        vCQs_insR: {
          elements: { jf8PXFYD6: `navigation` },
          page: v(() =>
            import(`./f3fuhSozsyATbh0WEpSfKNpd0iB9gY04pgg0LSoHIGY.CZn9AXd-.mjs`)
          ),
          path: `/404`,
        },
        SfANFKzD6: {
          elements: { HD1KcgNpJ: `navigation` },
          page: v(() =>
            import(`./VYwRDtYthurezM6euIw7BVLjqc4iOfXLJHLugt4CTts.EmRHF71X.mjs`)
          ),
          path: `/blog`,
        },
        HdRlpbtgm: {
          elements: { BAO5Uysx8: `navigation` },
          page: v(() =>
            import(`./NVfTnHTAMwipOETYJTXxowxsNc-gOTpZ2EcFfA311LI.CvbdxBtU.mjs`)
          ),
          path: `/blog/category-1`,
        },
        al24I5tWk: {
          elements: { zP2EqF49x: `navigation` },
          page: v(() =>
            import(`./2a9tGMY3MhQcSsSDvMavhwef28fF8esFNeTlLh_tiWA.CSNCia0z.mjs`)
          ),
          path: `/blog/category-2`,
        },
        nbMLRi0TU: {
          elements: { By6F0iUnK: `navigation` },
          page: v(() =>
            import(`./KqNkc1l54qeTtJiZch_UqmA0GfvuZjofRb0ADWOWuOk.kcfRQ_nG.mjs`)
          ),
          path: `/blog/category-3`,
        },
        Ypsar2ozb: {
          elements: { kqblstxlJ: `navigation` },
          page: v(() =>
            import(`./5LZpjqqaX_ZkxUJKwK-w4Cv8wmzKdA9IYqS_zrYgmwo.D7MfLOMe.mjs`)
          ),
          path: `/changelog`,
        },
        hDW65SJmW: {
          collectionId: `HDwwXKzyg`,
          elements: { pHtQav5Tf: `navigation` },
          page: v(() =>
            import(`./jYh1sAQ8a_mLQpL1wnqc7P4_rscFRgObSn6HTVuHsd0.BLguKSm1.mjs`)
          ),
          path: `/blog/:y0Pv8yrMl`,
        },
        N0znQG7pY: {
          collectionId: `nB96Q78HN`,
          elements: { BpxUjxJlf: `navigation` },
          page: v(() =>
            import(`./tjBxgzO6DHmXA64q5G5MtOw7M10gzc-rPB7Q6mipnBM.B43qF7vU.mjs`)
          ),
          path: `/changelog/:uNeu5wgUw`,
        },
        ZFYIZTF16: {
          collectionId: `kB5JQlUFw`,
          elements: { sVrIPIRno: `navigation` },
          page: v(() =>
            import(`./cXdZ_zUGfXJAr03lvxP-9KyvamKsBRj9suPGUrL3MUY.qJVlJ5VN.mjs`)
          ),
          path: `/legal/:oNC7XILjD`,
        },
        lrDNs_AfK: {
          collectionId: `qq4dAYwWW`,
          elements: { UBu9dCU3L: `navigation` },
          page: v(() =>
            import(`./GhYW6vbeQ-_Tkup2FutRj-Y8DSydL9X1V5VHD92oSZk.BS0Y0gP8.mjs`)
          ),
          path: `/inactive/careers/:fPNsS3Ey6`,
        },
        jyt6dJydg: { page: v(() => import(`./jyt6dJydg.B1gyuc0I.mjs`)) },
      }),
      (k = [{ code: `en`, id: `default`, name: `English`, slug: `` }]),
      (A = {
        HDwwXKzyg: async () =>
          (
            await import(
              `./LRsAGUd6_sSMbDTqR0pQvgdrkAmWWCcSC_0a9kB3LFo.BA7u_B7S.mjs`
            )
          )?.utils,
        kB5JQlUFw: async () =>
          (
            await import(
              `./act-BqysnMMy9GHlz8TzFEZK9HG7B4AVHz8WGRnZGWc.Bq1viTaZ.mjs`
            )
          )?.utils,
        nB96Q78HN: async () =>
          (
            await import(
              `./mm98-fSbgj4PQYyi-ae5G6KtQs2KILiheE9r2JESPkg.J_bMNwYa.mjs`
            )
          )?.utils,
        qq4dAYwWW: async () =>
          (
            await import(
              `./aK6-7KKjzx9rozPiI8y5Rx7UHCXvd_qV-StPA_9SI6Q.DGbr9dGx.mjs`
            )
          )?.utils,
      }),
      (j = `d7e3fc0519f107fb471ea65399d0ef306a3c85881771f3d5959cd0f46dca955a`),
      (M = typeof document < `u`),
      M)
    ) {
      (l.__framer_importFromPackage = (e, n) => () =>
        t(u, {
          error: `Package component not supported: "` + n + `" in "` + e + `"`,
        })),
        (l.process = {
          ...l.process,
          env: {
            ...(l.process ? l.process.env : void 0),
            NODE_ENV: `production`,
          },
        }),
        (l.__framer_events = l.__framer_events || []),
        _();
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? D(!0, e) : D(!1, e);
    }
  });
N();
export { T as getPageRoot };
//# sourceMappingURL=script_main.Df2OG57d.mjs.map
