(function (t) {
  function e(e) {
    for (
      var n, s, o = e[0], c = e[1], u = e[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (s = o[d]), r[s] && f.push(r[s][0]), (r[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    l && l(e);
    while (f.length) f.shift()();
    return i.push.apply(i, u || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== r[c] && (n = !1);
      }
      n && (i.splice(e--, 1), (t = s((s.s = a[0]))));
    }
    return t;
  }
  var n = {},
    r = { 1: 0 },
    i = [];
  function s(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = t),
    (s.c = n),
    (s.d = function (t, e, a) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (s.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (s.t = function (t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var n in t)
          s.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default'];
            }
          : function () {
              return t;
            };
      return s.d(e, 'a', e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = '');
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var u = 0; u < o.length; u++) e(o[u]);
  var l = c;
  i.push([26, 0]), a();
})({
  '/Dpa': function (t, e, a) {
    'use strict';
    var n = a('VZpO'),
      r = a.n(n);
    r.a;
  },
  '/vJE': function (t, e, a) {
    'use strict';
    var n = a('yuKf'),
      r = a.n(n);
    r.a;
  },
  '0Bu0': function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'grd-row-col-3-6' }, [
          a('table', { staticClass: 'p1' }, [
            a('tr', [
              a('th', [t._v('amount of trades')]),
              a('td', [t._v(t._s(t.report.trades))]),
            ]),
            a('tr', [
              a('th', [t._v('sharpe ratio')]),
              a('td', [t._v(t._s(t.round2(t.report.sharpe)))]),
            ]),
            a('tr', [
              a('th', [t._v('start balance')]),
              a('td', [
                t._v(
                  t._s(t.round(t.report.startBalance)) +
                    ' ' +
                    t._s(t.report.currency)
                ),
              ]),
            ]),
            a('tr', [
              a('th', [t._v('final balance')]),
              a('td', [
                t._v(
                  t._s(t.round(t.report.balance)) +
                    ' ' +
                    t._s(t.report.currency)
                ),
              ]),
            ]),
            t._m(0),
          ]),
          a(
            'div',
            { staticClass: 'big txt--right price', class: t.profitClass },
            [t._v(t._s(t.round(t.report.relativeProfit)) + '%')]
          ),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('tr', [a('th', [t._v('simulated profit')])]);
        },
      ],
      i = {
        props: ['report'],
        methods: {
          round2: function (t) {
            return (+t).toFixed(2);
          },
          round: function (t) {
            return (+t).toFixed(5);
          },
        },
        computed: {
          profitClass: function () {
            return this.report.relativeProfit > 0 ? 'profit' : 'loss';
          },
        },
      },
      s = i,
      o = (a('tr8z'), a('KHd+')),
      c = Object(o['a'])(s, n, r, !1, null, null, null);
    e['a'] = c.exports;
  },
  '0zrD': function (t, e, a) {
    'use strict';
    var n = a('jf14'),
      r = a.n(n);
    r.a;
  },
  26: function (t, e, a) {
    t.exports = a('Vtdi');
  },
  '2A8w': function (t, e, a) {
    'use strict';
    var n = a('TDb6'),
      r = a.n(n);
    r.a;
  },
  '2Yda': function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'contain my2' },
          [
            a('h3', [t._v('Start a new gekko')]),
            a('gekko-config-builder', { on: { config: t.updateConfig } }),
            a('div', { staticClass: 'hr' }),
            t.config.valid
              ? a(
                  'div',
                  { staticClass: 'txt--center' },
                  [
                    t.pendingStratrunner
                      ? t._e()
                      : a(
                          'a',
                          {
                            staticClass: 'w100--s my1 btn--primary',
                            attrs: { href: '#' },
                            on: {
                              click: function (e) {
                                return e.preventDefault(), t.start(e);
                              },
                            },
                          },
                          [t._v('Start')]
                        ),
                    t.pendingStratrunner ? a('spinner') : t._e(),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      r = [],
      i = (a('Z2Ku'), a('L9s1'), a('dRSK'), a('LvDl')),
      s = a.n(i),
      o = a('Kw5r'),
      c = a('wiDz'),
      u = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'grd contain' },
          [
            a('div', { staticClass: 'grd-row' }, [
              a(
                'div',
                { staticClass: 'grd-row-col-3-6 mx1' },
                [
                  a('h3', [t._v('Market')]),
                  a('market-picker', {
                    attrs: { 'only-tradable': t.isTradebot },
                    on: { market: t.updateMarketConfig },
                  }),
                ],
                1
              ),
              a(
                'div',
                { staticClass: 'grd-row-col-3-6 mx1' },
                [a('type-picker', { on: { type: t.updateType } })],
                1
              ),
            ]),
            'market watcher' !== t.type
              ? [
                  a('div', { staticClass: 'hr' }),
                  a('strat-picker', {
                    staticClass: 'contain my2',
                    on: { stratConfig: t.updateStrat },
                  }),
                  'paper trader' === t.type
                    ? a('div', { staticClass: 'hr' })
                    : t._e(),
                  'paper trader' === t.type
                    ? a('paper-trader', {
                        on: { settings: t.updatePaperTrader },
                      })
                    : t._e(),
                ]
              : t._e(),
          ],
          2
        );
      },
      l = [],
      d = (a('91GP'), a('6BxS')),
      f = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          [
            a('h3', [t._v('Type')]),
            [
              a('label', { staticClass: 'wrapper', attrs: { for: 'type' } }, [
                t._v('What do you want to do with gekko?'),
              ]),
              a(
                'form',
                { staticClass: 'radio grd' },
                t._l(t.types, function (e, n) {
                  return a('div', { staticClass: 'grd-row m1' }, [
                    a('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.selectedTypeIndex,
                          expression: 'selectedTypeIndex',
                        },
                      ],
                      staticClass: 'grd-row-col-1-6',
                      attrs: { type: 'radio' },
                      domProps: {
                        value: n,
                        checked: t._q(t.selectedTypeIndex, n),
                      },
                      on: {
                        change: function (e) {
                          t.selectedTypeIndex = n;
                        },
                      },
                    }),
                    a(
                      'label',
                      { staticClass: 'grd-row-col-5-6', attrs: { for: n } },
                      [t._v(t._s(e))]
                    ),
                  ]);
                })
              ),
            ],
          ],
          2
        );
      },
      h = [],
      m = {
        created: function () {
          this.emitType();
        },
        data: function () {
          return {
            types: ['paper trader', 'market watcher', 'tradebot'],
            selectedTypeIndex: 0,
          };
        },
        methods: {
          emitType: function () {
            this.$emit('type', this.type);
          },
        },
        watch: {
          type: function () {
            this.emitType();
          },
        },
        computed: {
          type: function () {
            return this.types[this.selectedTypeIndex];
          },
        },
      },
      v = m,
      p = (a('wVPO'), a('KHd+')),
      g = Object(p['a'])(v, f, h, !1, null, null, null),
      _ = g.exports,
      k = a('6Wkr'),
      y = a('rloZ'),
      w = {
        created: function () {
          var t = this;
          Object(c['a'])('configPart/candleWriter', function (e, a) {
            t.candleWriter = toml.parse(a.part);
          }),
            Object(c['a'])('configPart/performanceAnalyzer', function (e, a) {
              (t.performanceAnalyzer = toml.parse(a.part)),
                (t.performanceAnalyzer.enabled = !0);
            });
        },
        data: function () {
          return {
            market: {},
            range: {},
            type: '',
            strat: {},
            paperTrader: {},
            candleWriter: {},
            performanceAnalyzer: {},
          };
        },
        components: {
          marketPicker: d['a'],
          typePicker: _,
          stratPicker: k['a'],
          paperTrader: y['a'],
        },
        computed: {
          isTradebot: function () {
            return 'tradebot' === this.type;
          },
          config: function () {
            var t = {};
            return (
              Object.assign(
                t,
                this.market,
                this.strat,
                { paperTrader: this.paperTrader },
                { candleWriter: this.candleWriter },
                { type: this.type },
                { performanceAnalyzer: this.performanceAnalyzer }
              ),
              this.isTradebot &&
                (delete t.paperTrader, (t.trader = { enabled: !0 })),
              (t.valid = this.validConfig(t)),
              t
            );
          },
        },
        methods: {
          validConfig: function (t) {
            if ('market watcher' === t.type) return !0;
            if (!t.tradingAdvisor) return !1;
            if (s.a.isNaN(t.tradingAdvisor.candleSize)) return !1;
            if (0 == t.tradingAdvisor.candleSize) return !1;
            var e = t.tradingAdvisor.method;
            return !s.a.isEmpty(t[e]);
          },
          updateMarketConfig: function (t) {
            (this.market = t), this.emitConfig();
          },
          updateType: function (t) {
            (this.type = t), this.emitConfig();
          },
          updateStrat: function (t) {
            (this.strat = t), this.emitConfig();
          },
          updatePaperTrader: function (t) {
            (this.paperTrader = t),
              (this.paperTrader.enabled = !0),
              this.emitConfig();
          },
          emitConfig: function () {
            this.$emit('config', this.config);
          },
        },
      },
      b = w,
      C = (a('YEdZ'), Object(p['a'])(b, u, l, !1, null, null, null)),
      x = C.exports,
      S = a('MB/c'),
      T = {
        components: { gekkoConfigBuilder: x, spinner: S['a'] },
        data: function () {
          return { pendingStratrunner: !1, config: {} };
        },
        computed: {
          gekkos: function () {
            return this.$store.state.gekkos;
          },
          watchConfig: function () {
            var t = s.a.pick(this.config, 'watch', 'candleWriter'),
              e = o['a'].util.extend({}, t);
            return (e.type = 'market watcher'), (e.mode = 'realtime'), e;
          },
          requiredHistoricalData: function () {
            if (this.config.tradingAdvisor && this.config.valid) {
              var t = this.config.tradingAdvisor;
              return t.candleSize * t.historySize;
            }
          },
          gekkoConfig: function () {
            var t;
            if (this.existingMarketWatcher) {
              if (this.requiredHistoricalData) {
                var e = moment()
                    .utc()
                    .startOf('minute')
                    .subtract(this.requiredHistoricalData, 'minutes')
                    .unix(),
                  a = moment
                    .utc(this.existingMarketWatcher.events.initial.candle.start)
                    .unix();
                t = moment.unix(Math.max(e, a)).utc().format();
              } else t = moment().utc().startOf('minute').format();
              var n = o['a'].util.extend(
                { market: { type: 'leech', from: t }, mode: 'realtime' },
                this.config
              );
              return n;
            }
          },
          existingMarketWatcher: function () {
            var t = o['a'].util.extend({}, this.watchConfig.watch);
            return s.a.find(this.gekkos, { config: { watch: t } });
          },
          exchange: function () {
            return this.watchConfig.watch.exchange;
          },
          existingTradebot: function () {
            var t = this;
            return s.a.find(this.gekkos, function (e) {
              return (
                'tradebot' === e.logType &&
                e.config.watch.exchange === t.exchange
              );
            });
          },
          availableApiKeys: function () {
            return this.$store.state.apiKeys;
          },
        },
        watch: {
          existingMarketWatcher: function (t, e) {
            var a = this;
            if (this.pendingStratrunner) {
              var n = this.existingMarketWatcher;
              n.events.latest.candle &&
                ((this.pendingStratrunner = !1),
                this.startGekko(function (t, e) {
                  a.$router.push({ path: '/live-gekkos/'.concat(e.id) });
                }));
            }
          },
        },
        methods: {
          updateConfig: function (t) {
            this.config = t;
          },
          start: function () {
            var t = this;
            if ('tradebot' === this.config.type) {
              if (this.existingTradebot) {
                var e = 'You already have a tradebot running on this exchange';
                return (
                  (e += ', you can only run one tradebot per exchange.'),
                  alert(e)
                );
              }
              if (!this.availableApiKeys.includes(this.exchange))
                return alert(
                  'Please first configure API keys for this exchange in the config page.'
                );
            }
            'market watcher' === this.config.type
              ? this.existingMarketWatcher
                ? (alert(
                    'This market is already being watched, redirecting you now...'
                  ),
                  this.$router.push({
                    path: '/live-gekkos/'.concat(this.existingMarketWatcher.id),
                  }))
                : this.startWatcher(function (e, a) {
                    t.$router.push({ path: '/live-gekkos/'.concat(a.id) });
                  })
              : this.existingMarketWatcher
              ? this.startGekko(this.routeToGekko)
              : this.startWatcher(function (e, a) {
                  t.pendingStratrunner = a.id;
                });
          },
          routeToGekko: function (t, e) {
            if (t || e.error) return console.error(t, e.error);
            this.$router.push({ path: '/live-gekkos/'.concat(e.id) });
          },
          startWatcher: function (t) {
            Object(c['b'])('startGekko', this.watchConfig, t);
          },
          startGekko: function (t) {
            Object(c['b'])('startGekko', this.gekkoConfig, t);
          },
        },
      },
      E = T,
      P = (a('2A8w'), Object(p['a'])(E, n, r, !1, null, null, null));
    e['a'] = P.exports;
  },
  '2rY9': function (t, e, a) {
    'use strict';
    var n = a('SWS5'),
      r = a.n(n);
    r.a;
  },
  '5/bm': function (t, e, a) {},
  '5shn': function (t, e, a) {
    'use strict';
    var n = a('DlQD'),
      r = a.n(n),
      i = r.a,
      s = new i.Renderer();
    (s.link = function (t, e, a) {
      var n, r, i;
      return (
        (n = /^https?:\/\/.+$/.test(t)),
        (r = n || 'newWindow' === e),
        (i = '<a href="' + t + '"'),
        r && (i += ' target="_blank"'),
        e && 'newWindow' !== e && (i += ' title="' + e + '"'),
        i + '>' + a + '</a>'
      );
    }),
      i.setOptions({ renderer: s }),
      (e['a'] = i);
  },
  '6BxS': function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', [
          a('div', { staticClass: 'mx1' }, [
            a('label', { staticClass: 'wrapper', attrs: { for: 'exchange' } }, [
              t._v('Exchange:'),
            ]),
            a('div', { staticClass: 'custom-select button' }, [
              a(
                'select',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: t.exchange,
                      expression: 'exchange',
                    },
                  ],
                  on: {
                    change: function (e) {
                      var a = Array.prototype.filter
                        .call(e.target.options, function (t) {
                          return t.selected;
                        })
                        .map(function (t) {
                          var e = '_value' in t ? t._value : t.value;
                          return e;
                        });
                      t.exchange = e.target.multiple ? a : a[0];
                    },
                  },
                },
                t._l(t.exchanges, function (e, n) {
                  return a('option', [t._v(t._s(n))]);
                })
              ),
            ]),
          ]),
          a('div', { staticClass: 'grd-row' }, [
            a('div', { staticClass: 'grd-row-col-3-6 mx1' }, [
              a('label', { attrs: { for: 'currency' } }, [t._v('Currency:')]),
              a('div', { staticClass: 'custom-select button' }, [
                a(
                  'select',
                  {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.currency,
                        expression: 'currency',
                      },
                    ],
                    on: {
                      change: function (e) {
                        var a = Array.prototype.filter
                          .call(e.target.options, function (t) {
                            return t.selected;
                          })
                          .map(function (t) {
                            var e = '_value' in t ? t._value : t.value;
                            return e;
                          });
                        t.currency = e.target.multiple ? a : a[0];
                      },
                    },
                  },
                  t._l(t.currencies, function (e) {
                    return a('option', [t._v(t._s(e))]);
                  })
                ),
              ]),
            ]),
            a('div', { staticClass: 'grd-row-col-3-6 mx1' }, [
              a('label', { attrs: { for: 'asset' } }, [t._v('Asset:')]),
              a('div', { staticClass: 'custom-select button' }, [
                a(
                  'select',
                  {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.asset,
                        expression: 'asset',
                      },
                    ],
                    on: {
                      change: function (e) {
                        var a = Array.prototype.filter
                          .call(e.target.options, function (t) {
                            return t.selected;
                          })
                          .map(function (t) {
                            var e = '_value' in t ? t._value : t.value;
                            return e;
                          });
                        t.asset = e.target.multiple ? a : a[0];
                      },
                    },
                  },
                  t._l(t.assets, function (e) {
                    return a('option', [t._v(t._s(e))]);
                  })
                ),
              ]),
            ]),
          ]),
        ]);
      },
      r = [],
      i = (a('rGqo'), a('yt8O'), a('f3/d'), a('91GP'), a('LvDl')),
      s = a.n(i),
      o =
        (a('YIjs'),
        a('FhOJ'),
        a('wiDz'),
        {
          props: ['onlyTradable', 'onlyImportable'],
          data: function () {
            return { exchange: 'poloniex', currency: 'USDT', asset: 'BTC' };
          },
          created: function () {
            this.emitConfig();
          },
          computed: {
            exchanges: function () {
              var t = Object.assign({}, this.$store.state.exchanges);
              return (
                !s.a.isEmpty(t) &&
                (this.onlyTradable &&
                  s.a.each(t, function (e, a) {
                    e.tradable || delete t[a];
                  }),
                this.onlyImportable &&
                  s.a.each(t, function (e, a) {
                    e.importable || delete t[a];
                  }),
                t)
              );
            },
            markets: function () {
              return this.exchanges ? this.exchanges[this.exchange] : null;
            },
            assets: function () {
              return this.exchanges
                ? this.exchanges[this.exchange].markets[this.currency]
                : null;
            },
            currencies: function () {
              return this.exchanges
                ? s.a.keys(this.exchanges[this.exchange].markets)
                : null;
            },
            watchConfig: function () {
              return {
                watch: {
                  exchange: this.exchange,
                  currency: this.currency,
                  asset: this.asset,
                },
              };
            },
          },
          watch: {
            currency: function () {
              this.emitConfig();
            },
            asset: function () {
              this.emitConfig();
            },
            market: function () {
              this.emitConfig();
            },
            exchanges: function () {
              this.emitConfig();
            },
            exchange: function () {
              this.emitConfig();
            },
          },
          methods: {
            emitConfig: function () {
              this.$emit('market', this.watchConfig);
            },
          },
        }),
      c = o,
      u = a('KHd+'),
      l = Object(u['a'])(c, n, r, !1, null, null, null);
    e['a'] = l.exports;
  },
  '6Wkr': function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'grd' }, [
          a('div', { staticClass: 'grd-row' }, [
            a('div', { staticClass: 'grd-row-col-3-6 px1' }, [
              a('h3', [t._v('Strategy')]),
              a('div', [
                a(
                  'label',
                  { staticClass: 'wrapper', attrs: { for: 'strat' } },
                  [t._v('Strategy:')]
                ),
                a('div', { staticClass: 'custom-select button' }, [
                  a(
                    'select',
                    {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.strategy,
                          expression: 'strategy',
                        },
                      ],
                      on: {
                        change: function (e) {
                          var a = Array.prototype.filter
                            .call(e.target.options, function (t) {
                              return t.selected;
                            })
                            .map(function (t) {
                              var e = '_value' in t ? t._value : t.value;
                              return e;
                            });
                          t.strategy = e.target.multiple ? a : a[0];
                        },
                      },
                    },
                    t._l(t.strategies, function (e) {
                      return a('option', [t._v(t._s(e.name))]);
                    })
                  ),
                ]),
              ]),
              a('div', [
                a('label', { attrs: { for: 'candleSize' } }, [
                  t._v('Candle Size'),
                ]),
                a('div', { staticClass: 'grd-row' }, [
                  a('div', { staticClass: 'grd-row-col-3-6' }, [
                    a('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.rawCandleSize,
                          expression: 'rawCandleSize',
                        },
                      ],
                      domProps: { value: t.rawCandleSize },
                      on: {
                        input: function (e) {
                          e.target.composing ||
                            (t.rawCandleSize = e.target.value);
                        },
                      },
                    }),
                  ]),
                  a('div', { staticClass: 'grd-row-col-3-6 align' }, [
                    a('div', { staticClass: 'custom-select button' }, [
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.candleSizeUnit,
                              expression: 'candleSizeUnit',
                            },
                          ],
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.candleSizeUnit = e.target.multiple ? a : a[0];
                            },
                          },
                        },
                        [
                          a('option', [t._v('minutes')]),
                          a('option', [t._v('hours')]),
                          a('option', [t._v('days')]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              a('div', [
                a('label', { attrs: { for: 'historySize' } }, [
                  t._v(
                    'Warmup period (in ' +
                      t._s(t.rawCandleSize) +
                      ' ' +
                      t._s(t.singularCandleSizeUnit) +
                      ' candles):'
                  ),
                ]),
                a('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: t.historySize,
                      expression: 'historySize',
                    },
                  ],
                  domProps: { value: t.historySize },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.historySize = e.target.value);
                    },
                  },
                }),
                a('em', { staticClass: 'label-like' }, [
                  t._v(
                    '(will use ' +
                      t._s(
                        t.humanizeDuration(
                          t.candleSize * t.historySize * 1e3 * 60
                        )
                      ) +
                      ' of data as history)'
                  ),
                ]),
              ]),
            ]),
            a('div', { staticClass: 'grd-row-col-3-6 px1' }, [
              a('div', [
                a('h3', [t._v('Parameters')]),
                a('p', [t._v(t._s(t.strategy) + ' Parameters:')]),
                a('textarea', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: t.rawStratParams,
                      expression: 'rawStratParams',
                    },
                  ],
                  staticClass: 'params',
                  domProps: { value: t.rawStratParams },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.rawStratParams = e.target.value);
                    },
                  },
                }),
                t.rawStratParamsError
                  ? a('p', { staticClass: 'bg--red p1' }, [
                      t._v(t._s(t.rawStratParamsError.message)),
                    ])
                  : t._e(),
              ]),
            ]),
          ]),
        ]);
      },
      r = [],
      i = (a('dRSK'), a('LvDl')),
      s = a.n(i),
      o = a('wiDz'),
      c = {
        data: function () {
          return {
            strategies: [],
            candleSizeUnit: 'hours',
            rawCandleSize: 1,
            strategy: 'MACD',
            historySize: 10,
            rawStratParams: '',
            rawStratParamsError: !1,
            emptyStrat: !1,
            stratParams: {},
          };
        },
        created: function () {
          var t = this;
          Object(o['a'])('strategies', function (e, a) {
            (t.strategies = a),
              s.a.each(t.strategies, function (t) {
                t.empty = '' === t.params;
              }),
              (t.rawStratParams = s.a.find(t.strategies, {
                name: t.strategy,
              }).params),
              (t.emptyStrat = s.a.find(t.strategies, {
                name: t.strategy,
              }).empty),
              t.emitConfig();
          });
        },
        watch: {
          strategy: function (t) {
            (t = s.a.find(this.strategies, { name: t })),
              (this.rawStratParams = t.params),
              (this.emptyStrat = t.empty),
              this.emitConfig();
          },
          candleSize: function () {
            this.emitConfig();
          },
          historySize: function () {
            this.emitConfig();
          },
          rawStratParams: function () {
            this.emitConfig();
          },
        },
        computed: {
          candleSize: function () {
            return 'minutes' === this.candleSizeUnit
              ? this.rawCandleSize
              : 'hours' === this.candleSizeUnit
              ? 60 * this.rawCandleSize
              : 'days' === this.candleSizeUnit
              ? 60 * this.rawCandleSize * 24
              : void 0;
          },
          singularCandleSizeUnit: function () {
            return this.candleSizeUnit.slice(0, -1);
          },
          config: function () {
            var t = {
              tradingAdvisor: {
                enabled: !0,
                method: this.strategy,
                candleSize: +this.candleSize,
                historySize: +this.historySize,
              },
            };
            return (
              this.emptyStrat
                ? (t[this.strategy] = { __empty: !0 })
                : (t[this.strategy] = this.stratParams),
              t
            );
          },
        },
        methods: {
          humanizeDuration: function (t) {
            return window.humanizeDuration(t);
          },
          emitConfig: function () {
            this.parseParams(), this.$emit('stratConfig', this.config);
          },
          parseParams: function () {
            try {
              (this.stratParams = toml.parse(this.rawStratParams)),
                (this.rawStratParamsError = !1);
            } catch (t) {
              (this.rawStratParamsError = t), (this.stratParams = {});
            }
          },
        },
      },
      u = c,
      l = (a('tr8f'), a('KHd+')),
      d = Object(l['a'])(u, n, r, !1, null, null, null);
    e['a'] = d.exports;
  },
  '7LpK': function (t, e, a) {},
  '8KAT': function (t, e, a) {},
  '9RND': function (t) {
    t.exports = {
      name: 'gekko',
      version: '0.6.8',
      description:
        'A bitcoin trading bot for auto trading at various exchanges',
      keywords: ['trading', 'bot', 'bitcoin', 'TA', 'finance'],
      scripts: {
        test: './node_modules/.bin/mocha test/*.js --recursive test -u tdd --reporter spec',
        start: 'node ./gekko --config config.js --ui',
      },
      author: 'Mike van Rossum <mike@mvr.me>',
      dependencies: {
        async: '2.1.2',
        'bitfinex-api-node': '^1.2.1',
        'co-fs': '^1.2.0',
        commander: '^2.13.0',
        gekko: '0.0.9',
        'humanize-duration': '^3.10.0',
        koa: '^1.2.0',
        'koa-bodyparser': '^2.2.0',
        'koa-cors': '0.0.16',
        'koa-logger': '^1.3.0',
        'koa-router': '^5.4.0',
        'koa-static': '^2.0.0',
        lodash: '2.x',
        moment: '^2.20.1',
        opn: '^4.0.2',
        'promisify-node': '^0.5.0',
        'prompt-lite': '0.1.1',
        relieve: '^2.1.3',
        retry: '^0.10.1',
        semver: '5.4.1',
        sqlite3: '^4.0.4',
        'stats-lite': '^2.0.4',
        'tiny-promisify': '^0.1.1',
        toml: '^2.3.0',
        ws: '^6.0.0',
      },
      devDependencies: {
        chai: '^4.1.2',
        mocha: '^5.0.0',
        proxyquire: '^1.7.10',
        request: '^2.83.0',
        'request-promise': '^4.2.2',
        sinon: '^4.2.0',
      },
      engines: { node: '>=8.11.2' },
      license: 'MIT',
      repository: { type: 'git', url: 'https://github.com/askmike/gekko.git' },
    };
  },
  CyGp: function (t, e, a) {
    'use strict';
    var n = a('jTvs'),
      r = a.n(n);
    r.a;
  },
  EAJ1: function (t, e, a) {},
  EDI0: function (t, e, a) {},
  EfWa: function (t, e, a) {},
  FhOJ: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', [
          a('h3', [t._v('Daterange')]),
          a('div', [
            a('label', { attrs: { for: 'from' } }, [t._v('From')]),
            a('input', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: t.from,
                  expression: 'from',
                },
              ],
              domProps: { value: t.from },
              on: {
                input: function (e) {
                  e.target.composing || (t.from = e.target.value);
                },
              },
            }),
          ]),
          a('div', [
            a('label', { attrs: { for: 'to' } }, [t._v('To')]),
            a('input', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: t.to,
                  expression: 'to',
                },
              ],
              domProps: { value: t.to },
              on: {
                input: function (e) {
                  e.target.composing || (t.to = e.target.value);
                },
              },
            }),
          ]),
        ]);
      },
      r = [],
      i =
        (a('LvDl'),
        a('wiDz'),
        {
          data: function () {
            return { from: '', to: '' };
          },
          created: function () {
            var t = moment().startOf('minute'),
              e = t.clone().subtract(3, 'months');
            (this.to = this.fmt(t)),
              (this.from = this.fmt(e)),
              this.emitRange();
          },
          methods: {
            fmtTs: function (t) {
              return moment.unix(t).utc();
            },
            fmt: function (t) {
              return t.utc().format('YYYY-MM-DD HH:mm');
            },
            emitRange: function () {
              this.$emit('range', {
                from: this.fmtTs(this.from),
                to: this.fmtTs(this.to),
              });
            },
            emitManualEntry: function () {
              if (this.from.length < '4' || this.from.length < '4')
                return this.$emit('range', {});
              var t = moment.utc(this.from),
                e = moment.utc(this.to);
              t.isValid() && e.isValid()
                ? this.$emit('range', { from: this.fmt(t), to: this.fmt(e) })
                : this.$emit('range', {});
            },
          },
          watch: {
            from: function () {
              this.emitManualEntry();
            },
            to: function () {
              this.emitManualEntry();
            },
            config: function () {
              this.scanned = !1;
            },
            tab: function () {
              (this.scanned = !1), this.$emit('range', {});
            },
            selectedRangeIndex: function () {
              var t = this.ranges[this.selectedRangeIndex];
              t && this.emitRange(t);
            },
          },
        }),
      s = i,
      o = (a('TPp/'), a('KHd+')),
      c = Object(o['a'])(s, n, r, !1, null, null, null);
    e['a'] = c.exports;
  },
  'H+ir': function (t, e, a) {
    'use strict';
    var n = a('5/bm'),
      r = a.n(n);
    r.a;
  },
  Kd0R: function (t, e, a) {},
  'MB/c': function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'spinner' }, [
            a('div', { staticClass: 'rect1' }),
            a('div', { staticClass: 'rect2' }),
            a('div', { staticClass: 'rect3' }),
            a('div', { staticClass: 'rect4' }),
          ]);
        },
      ],
      i = {},
      s = i,
      o = (a('q431'), a('KHd+')),
      c = Object(o['a'])(s, n, r, !1, null, null, null);
    e['a'] = c.exports;
  },
  Pf3K: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { attrs: { id: 'app' } },
          [
            a('top'),
            a(
              'div',
              { staticClass: 'fill' },
              [a('router-view', { staticClass: 'view' })],
              1
            ),
            a('bottom'),
            a('modal'),
          ],
          1
        );
      },
      r = [],
      i = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', [
          a('div', { attrs: { id: 'top' } }),
          t._m(0),
          a('nav', { staticClass: 'bg--light-gray' }, [
            a(
              'div',
              { staticClass: 'menu contain' },
              [
                a(
                  'router-link',
                  { staticClass: 'py1', attrs: { to: '/home' } },
                  [t._v('Home')]
                ),
                
                //a(
                 // 'router-link',
                 // { staticClass: 'py1', attrs: { to: '/live-gekkos' } },
                  //[t._v('Live Gekkos')]
                //),
                a(
                  'router-link',
                  { staticClass: 'py1', attrs: { to: '/backtest' } },
                  [t._v('Backtest')]
                ),
                a(
                  'router-link',
                  { staticClass: 'py1', attrs: { to: '/data' } },
                  [t._v('Local data')]
                ),
                a(
                  'router-link',
                  { staticClass: 'py1', attrs: { to: '/config' } },
                  [t._v('Config')]
                ),
                a(
                  'a',
                  {
                    staticClass: 'py1',
                    attrs: {
                      href: 'https://gekko.wizb.it/docs/introduction/about_gekko.html',
                      target: '_blank',
                    },
                  },
                  [t._v('Documentation')]
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      s = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('header', { staticClass: 'bg--off-white grd' }, [
            a('div', { staticClass: 'contain grd-row' }, [
              a('h3', { staticClass: 'py1 px2 col-2' }, [t._v('GrowUP UI')]),
            ]),
          ]);
        },
      ],
      o = {},
      c = o,
      u = (a('uMTv'), a('KHd+')),
      l = Object(u['a'])(c, i, s, !1, null, null, null),
      d = l.exports,
      f = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('footer', { staticClass: 'p2 bg--off-white' }, [
          a('div', { staticClass: 'contain' }, [
            t._m(0),
            a('p', [
              t._v(
                'Using Gekko v' +
                  t._s(t.version.gekko) +
                  ' and Gekko UI v' +
                  t._s(t.version.ui) +
                  '.'
              ),
            ]),
          ]),
        ]);
      },
      h = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('p', [a('em', [t._v('Use Gekko at your own risk.')])]);
        },
      ],
      m = a('kiQV'),
      v = a('9RND'),
      p = v,
      g = m,
      _ = {
        data: function () {
          return { version: { gekko: p.version, ui: g.version } };
        },
      },
      k = _,
      y = Object(u['a'])(k, f, h, !1, null, null, null),
      w = y.exports,
      b = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return t.active
          ? a('div', [
              a('div', { attrs: { id: 'modal-background' } }),
              a('div', { staticClass: 'modal', attrs: { id: 'modal' } }, [
                a('div', {
                  staticClass: 'modal-guts',
                  domProps: { innerHTML: t._s(t.content) },
                }),
              ]),
            ])
          : t._e();
      },
      C = [],
      x = a('5shn'),
      S = {
        disconnected: Object(x['a'])(
          '\n\n## Disconnected\n\nSomething happened to either Gekko or the connection.\nPlease check the terminal where Gekko is running or\nyour network connection.\n\n*This message is shown when the UI is unable to open a websocket connection with the Gekko Server.*\n\n  '
        ),
      },
      T = {
        computed: {
          active: function () {
            return !this.$store.state.warnings.connected;
          },
          content: function () {
            return this.$store.state.warnings.connected ? '' : S.disconnected;
          },
        },
      },
      E = T,
      P = (a('TfKe'), Object(u['a'])(E, b, C, !1, null, null, null)),
      A = P.exports,
      j = { name: 'app', components: { top: d, bottom: w, modal: A } },
      D = j,
      O = (a('ZL7j'), Object(u['a'])(D, n, r, !1, null, null, null));
    e['a'] = O.exports;
  },
  Q2AE: function (t, e, a) {
    'use strict';
    var n = {};
    a.r(n),
      a.d(n, 'addImport', function () {
        return d;
      }),
      a.d(n, 'syncImports', function () {
        return f;
      }),
      a.d(n, 'updateImport', function () {
        return h;
      });
    var r = {};
    a.r(r),
      a.d(r, 'syncGekkos', function () {
        return C;
      }),
      a.d(r, 'addGekko', function () {
        return x;
      }),
      a.d(r, 'updateGekko', function () {
        return S;
      }),
      a.d(r, 'archiveGekko', function () {
        return T;
      }),
      a.d(r, 'errorGekko', function () {
        return E;
      }),
      a.d(r, 'deleteGekko', function () {
        return P;
      });
    var i = {};
    a.r(i),
      a.d(i, 'setGlobalWarning', function () {
        return A;
      });
    var s = {};
    a.r(s),
      a.d(s, 'syncApiKeys', function () {
        return j;
      }),
      a.d(s, 'syncExchanges', function () {
        return D;
      });
    a('VRzm');
    var o = a('Kw5r'),
      c = a('L2JU'),
      u = a('LvDl'),
      l = a.n(u),
      d =
        (a('INYr'),
        function (t, e) {
          return t.imports.push(e), t;
        }),
      f = function (t, e) {
        return (t.imports = e), t;
      },
      h = function (t, e) {
        var a = t.imports.findIndex(function (t) {
            return t.id === e.import_id;
          }),
          n = t.imports[a];
        if (!n) return t;
        var r = o['a'].util.extend(n, e.updates);
        return o['a'].set(t.imports, a, r), t;
      },
      m = a('oyJW'),
      v = a('yT7P'),
      p = a('iv4g'),
      g = (a('Z2Ku'), ['marketUpdate']),
      _ = ['marketStart', 'stratWarmupCompleted'],
      k = ['tradeCompleted', 'advice', 'roundtrip'],
      y = function (t, e) {
        var a = e.type,
          n = e.payload;
        return (
          (t = Object(v['a'])({}, t, { latestUpdate: new Date() })),
          k.includes(a) &&
            (t = t.events[a]
              ? Object(v['a'])({}, t, {
                  events: Object(v['a'])(
                    {},
                    t.events,
                    Object(m['a'])(
                      {},
                      a,
                      Object(p['a'])(t.events[a]).concat([n])
                    )
                  ),
                })
              : Object(v['a'])({}, t, {
                  events: Object(v['a'])(
                    {},
                    t.events,
                    Object(m['a'])({}, a, [n])
                  ),
                })),
          t.events.initial[a] ||
            g.includes(a) ||
            (t = Object(v['a'])({}, t, {
              events: Object(v['a'])({}, t.events, {
                initial: Object(v['a'])(
                  {},
                  t.events.initial,
                  Object(m['a'])({}, a, n)
                ),
              }),
            })),
          _.includes(a) ||
            (t = Object(v['a'])({}, t, {
              events: Object(v['a'])({}, t.events, {
                latest: Object(v['a'])(
                  {},
                  t.events.latest,
                  Object(m['a'])({}, a, n)
                ),
              }),
            })),
          t
        );
      },
      w = y,
      b = w,
      C = function (t, e) {
        return e ? ((t.gekkos = e.live), (t.archivedGekkos = e.archive), t) : t;
      },
      x = function (t, e) {
        return (
          (t.gekkos = Object(v['a'])(
            {},
            t.gekkos,
            Object(m['a'])({}, e.id, e)
          )),
          t
        );
      },
      S = function (t, e) {
        return e.id && l.a.has(t.gekkos, e.id)
          ? ((t.gekkos = Object(v['a'])(
              {},
              t.gekkos,
              Object(m['a'])({}, e.id, b(t.gekkos[e.id], e.event))
            )),
            t)
          : console.error('cannot update unknown gekko..');
      },
      T = function (t, e) {
        return l.a.has(t.gekkos, e)
          ? ((t.archivedGekkos = Object(v['a'])(
              {},
              t.archivedGekkos,
              Object(m['a'])(
                {},
                e,
                Object(v['a'])({}, t.gekkos[e], { stopped: !0, active: !1 })
              )
            )),
            (t.gekkos = l.a.omit(t.gekkos, e)),
            t)
          : console.error('cannot archive unknown gekko..');
      },
      E = function (t, e) {
        return l.a.has(t.gekkos, e.id)
          ? ((t.gekkos = Object(v['a'])(
              {},
              t.gekkos,
              Object(m['a'])(
                {},
                e.id,
                Object(v['a'])({}, t.gekkos[e.id], {
                  errored: !0,
                  errorMessage: e.error,
                })
              )
            )),
            t)
          : console.error('cannot error unknown gekko..');
      },
      P = function (t, e) {
        return l.a.has(t.archivedGekkos, e)
          ? ((t.archivedGekkos = l.a.omit(t.archivedGekkos, e)), t)
          : console.error('cannot delete unknown gekko..');
      },
      A = function (t, e) {
        return (t.warnings[e.key] = e.value), t;
      },
      j = function (t, e) {
        return o['a'].set(t, 'apiKeys', e), t;
      },
      D = function (t, e) {
        return o['a'].set(t, 'exchanges', e), t;
      };
    o['a'].use(c['a']);
    var O = !1,
      z = {};
    l.a.merge(z, n), l.a.merge(z, r), l.a.merge(z, i), l.a.merge(z, s);
    e['a'] = new c['a'].Store({
      state: {
        warnings: { connected: !0 },
        imports: [],
        gekkos: {},
        archivedGekkos: {},
        connection: { disconnected: !1, reconnected: !1 },
        apiKeys: [],
        exchanges: {},
      },
      mutations: z,
      strict: O,
    });
  },
  Q6eY: function (t, e, a) {
    'use strict';
    var n = a('SDwi'),
      r = a.n(n);
    r.a;
  },
  SDwi: function (t, e, a) {},
  SWS5: function (t, e, a) {},
  T0Mt: function (t, e, a) {
    'use strict';
    var n = a('pd3X'),
      r = a.n(n);
    r.a;
  },
  TDb6: function (t, e, a) {},
  'TPp/': function (t, e, a) {
    'use strict';
    var n = a('7LpK'),
      r = a.n(n);
    r.a;
  },
  TfKe: function (t, e, a) {
    'use strict';
    var n = a('ZpQ2'),
      r = a.n(n);
    r.a;
  },
  UeuA: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { class: { clickable: !t.isClicked }, attrs: { id: 'chartWrapper' } },
          [
            a('div', {
              staticClass: 'shield',
              on: {
                click: function (e) {
                  return e.preventDefault(), t.click(e);
                },
              },
            }),
            a('svg', {
              attrs: { id: 'chart', width: '960', height: t.height },
            }),
          ]
        );
      },
      r = [],
      i = a('k5N+'),
      s = a('LvDl'),
      o = a.n(s),
      c = function (t, e, a) {
        var n = function (t) {
            return o.a.isNumber(t)
              ? moment.unix(t).utc().toDate()
              : moment.utc(t).toDate();
          },
          r = e.map(function (t) {
            return { price: t.price, date: n(t.date), action: t.action };
          }),
          s = t.map(function (t) {
            return { price: t.open, date: n(t.start) };
          }),
          c = s.map(function (t) {
            return +t.date;
          }),
          u = s.map(function (t) {
            return +t.price;
          }),
          l = d3.select('#chart');
        l.attr('width', window.innerWidth - 20);
        var d = { top: 20, right: 20, bottom: 110, left: 40 },
          f = a - d.top - d.bottom,
          h = { top: a - 70, right: 20, bottom: 30, left: 40 },
          m = +l.attr('width') - d.left - d.right,
          v = a - h.top - h.bottom,
          p = d3.scaleUtc().range([0, m]),
          g = d3.scaleUtc().range([0, m]),
          _ = d3.scaleLinear().range([f, 0]),
          k = d3.scaleLinear().range([v, 0]),
          y = d3.axisBottom(p),
          w = d3.axisBottom(g),
          b = d3.axisLeft(_).ticks(a / 50),
          C = d3
            .brushX()
            .extent([
              [0, 0],
              [m, v],
            ])
            .on('brush end', j),
          x = d3
            .zoom()
            .scaleExtent([1, 100])
            .translateExtent([
              [0, 0],
              [m, f],
            ])
            .extent([
              [0, 0],
              [m, f],
            ])
            .on('zoom', O),
          S = d3
            .line()
            .x(function (t) {
              return p(t.date);
            })
            .y(function (t) {
              return _(t.price);
            }),
          T = d3
            .line()
            .x(function (t) {
              return g(t.date);
            })
            .y(function (t) {
              return k(t.price);
            });
        l.append('defs')
          .append('clipPath')
          .attr('id', 'clip')
          .append('rect')
          .attr('width', m)
          .attr('height', f);
        var E = l
            .append('g')
            .attr('class', 'focus')
            .attr('transform', 'translate(' + d.left + ',' + d.top + ')'),
          P = l
            .append('g')
            .attr('class', 'context')
            .attr('transform', 'translate(' + h.left + ',' + h.top + ')');
        p.domain(
          d3.extent(s, function (t) {
            return t.date;
          })
        ),
          _.domain([0.99 * d3.min(u), 1.01 * d3.max(u)]),
          g.domain(p.domain()),
          k.domain(_.domain()),
          E.append('path').datum(s).attr('class', 'line price').attr('d', S),
          E.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + f + ')')
            .call(y),
          E.append('g').attr('class', 'axis axis--y').call(b),
          P.append('path').datum(s).attr('class', 'line').attr('d', T),
          P.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + v + ')')
            .call(w);
        var A = l
          .append('g')
          .attr('transform', 'translate(' + d.left + ',' + d.top + ')')
          .selectAll('circle')
          .data(r)
          .enter()
          .append('circle')
          .attr('class', function (t) {
            return t.action;
          })
          .attr('cx', function (t) {
            return p(t.date);
          })
          .attr('cy', function (t) {
            return _(t.price);
          })
          .attr('r', 5);
        P.append('g')
          .selectAll('circle')
          .data(r)
          .enter()
          .append('circle')
          .attr('class', function (t) {
            return t.action;
          })
          .attr('cx', function (t) {
            return g(t.date);
          })
          .attr('cy', function (t) {
            return k(t.price);
          })
          .attr('r', 3);
        function j() {
          if (!d3.event.sourceEvent || 'zoom' !== d3.event.sourceEvent.type) {
            var t = d3.event.selection || g.range();
            p.domain(t.map(g.invert, g)),
              D(p.domain()),
              l.select('.axis--y').call(b),
              A.attr('cx', function (t) {
                return p(t.date);
              }).attr('cy', function (t) {
                return _(t.price);
              }),
              E.select('.line').attr('d', S),
              E.select('.axis--x').call(y),
              l
                .select('.zoom')
                .call(
                  x.transform,
                  d3.zoomIdentity.scale(m / (t[1] - t[0])).translate(-t[0], 0)
                );
          }
        }
        function D(t) {
          var e = Object(i['a'])(t, 2),
            a = e[0],
            n = e[1],
            r = o.a.sortedIndex(c, a),
            s = o.a.sortedIndex(c, n),
            l = u.slice(r, s);
          _.domain([0.9995 * d3.min(l), 1.0005 * d3.max(l)]);
        }
        function O() {
          if (!d3.event.sourceEvent || 'brush' !== d3.event.sourceEvent.type) {
            var t = d3.event.transform;
            D(t.rescaleX(g).domain()),
              l.select('.axis--y').call(b),
              p.domain(t.rescaleX(g).domain()),
              E.select('.line').attr('d', S),
              A.attr('cx', function (t) {
                return p(t.date);
              }).attr('cy', function (t) {
                return _(t.price);
              }),
              E.select('.axis--x').call(y),
              P.select('.brush').call(C.move, p.range().map(t.invertX, t));
          }
        }
        P.append('g').attr('class', 'brush').call(C).call(C.move, p.range()),
          l
            .append('rect')
            .attr('class', 'zoom')
            .attr('width', m)
            .attr('height', f)
            .attr('transform', 'translate(' + d.left + ',' + d.top + ')')
            .call(x);
      },
      u =
        (a('dRSK'),
        function (t) {
          d3.select('#chart')
            .append('text')
            .attr('class', 'message')
            .attr('x', 150)
            .attr('y', 150)
            .text(t);
        }),
      l = 4,
      d = {
        props: ['data', 'height'],
        data: function () {
          return { isClicked: !1 };
        },
        watch: {
          data: function () {
            this.render();
          },
        },
        created: function () {
          setTimeout(this.render, 100);
        },
        beforeDestroy: function () {
          this.remove();
        },
        methods: {
          click: function () {
            this.isClicked = !0;
          },
          render: function () {
            this.remove(),
              _.size(this.data.candles) < l
                ? u('Not enough data to spawn chart')
                : c(this.data.candles, this.data.trades, this.height);
          },
          remove: function () {
            d3.select('#chart').html('');
          },
        },
      },
      f = d,
      h = (a('T0Mt'), a('KHd+')),
      m = Object(h['a'])(f, n, r, !1, null, null, null);
    e['a'] = m.exports;
  },
  'Ug4+': function (t, e, a) {},
  VZpO: function (t, e, a) {},
  Vtdi: function (t, e, a) {
    'use strict';
    a.r(e),
      function (t) {
        a('VRzm');
        var e = a('Kw5r'),
          n = a('Pf3K'),
          r = a('jE9Z'),
          i = a('Q2AE'),
          s = a('bqjz'),
          o = a('ldlP'),
          c = a('dHeD'),
          u = a('jloR'),
          l = a('g298'),
          d = a('WqVH'),
          f = a('hGnM'),
          h = a('2Yda'),
          m = a('mf2E'),
          v = a('gYof');
        e['a'].use(r['a']);
        var p = new r['a']({
          mode: 'hash',
          base: t,
          routes: [
            { path: '/', redirect: '/home' },
            { path: '/home', component: o['a'] },
            { path: '/backtest', component: s['a'] },
            { path: '/config', component: d['a'] },
            { path: '/data', component: c['a'] },
            { path: '/data/importer', component: u['a'] },
            { path: '/data/importer/import/:id', component: l['a'] },
            { path: '/live-gekkos', component: f['a'] },
            { path: '/live-gekkos/new', component: h['a'] },
            { path: '/live-gekkos/:id', component: m['a'] },
          ],
        });
        Object(v['b'])(),
          new e['a']({
            router: p,
            store: i['a'],
            el: '#app',
            render: function (t) {
              return t(n['a']);
            },
          });
      }.call(this, '/');
  },
  WlXR: function (t, e, a) {
    'use strict';
    var n = a('jnJk'),
      r = a.n(n);
    r.a;
  },
  WqVH: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'contain' },
          [
            a('h2', [t._v('Config')]),
            a('div', { staticClass: 'hr' }),
            a('h3', [t._v('Available API keys')]),
            t.apiKeySets.length
              ? t._e()
              : a('p', [a('em', [t._v("You don't have any API keys yet.")])]),
            a(
              'ul',
              t._l(t.apiKeySets, function (e) {
                return a('li', [
                  t._v(t._s(e) + ' ('),
                  a(
                    'a',
                    {
                      attrs: { href: '#' },
                      on: {
                        click: function (a) {
                          a.preventDefault(), t.removeApiKey(e);
                        },
                      },
                    },
                    [t._v('remove')]
                  ),
                  t._v(')'),
                ]);
              })
            ),
            t.addApiToggle
              ? t._e()
              : a(
                  'a',
                  {
                    staticClass: 'btn--primary',
                    attrs: { href: '#' },
                    on: {
                      click: function (e) {
                        return e.preventDefault(), t.openAddApi(e);
                      },
                    },
                  },
                  [t._v('Add an API key')]
                ),
            t.addApiToggle
              ? [a('div', { staticClass: 'hr' }), a('apiConfigBuilder')]
              : t._e(),
            a('div', { staticClass: 'hr' }),
          ],
          2
        );
      },
      r = [],
      i = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'grd contain' }, [
          a('h3', [t._v('Add an API key')]),
          a('p', [
            t._v(
              'Make sure that the API key has the permissions to create and cancel orders and view balances.'
            ),
          ]),
          a('div', { staticClass: 'grd-row' }, [
            a(
              'div',
              { staticClass: 'grd-row-col-3-6 mx1' },
              [
                a('h3', [t._v('Exchange')]),
                a('exchange-picker', {
                  attrs: { 'only-tradable': 'true' },
                  on: { exchange: t.updateExchange },
                }),
              ],
              1
            ),
            a(
              'div',
              { staticClass: 'grd-row-col-3-6 mx1' },
              [
                a('h3', [t._v('Credentials')]),
                t._l(t.requires, function (e) {
                  return [
                    a('label', [t._v(t._s(e))]),
                    a('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.credentials[e],
                          expression: 'credentials[cred]',
                        },
                      ],
                      domProps: { value: t.credentials[e] },
                      on: {
                        input: function (a) {
                          a.target.composing ||
                            t.$set(t.credentials, e, a.target.value);
                        },
                      },
                    }),
                  ];
                }),
              ],
              2
            ),
          ]),
          a('div', { staticClass: 'txt--center' }, [
            a(
              'a',
              {
                staticClass: 'w100--s my1 btn--primary',
                attrs: { href: '#' },
                on: {
                  click: function (e) {
                    return e.preventDefault(), t.upload(e);
                  },
                },
              },
              [t._v('Add')]
            ),
          ]),
        ]);
      },
      s = [],
      o =
        (a('Z2Ku'),
        a('L9s1'),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', [
            a('div', { staticClass: 'mx1' }, [
              a(
                'label',
                { staticClass: 'wrapper', attrs: { for: 'exchange' } },
                [t._v('Exchange:')]
              ),
              a('div', { staticClass: 'custom-select button' }, [
                a(
                  'select',
                  {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.exchange,
                        expression: 'exchange',
                      },
                    ],
                    on: {
                      change: function (e) {
                        var a = Array.prototype.filter
                          .call(e.target.options, function (t) {
                            return t.selected;
                          })
                          .map(function (t) {
                            var e = '_value' in t ? t._value : t.value;
                            return e;
                          });
                        t.exchange = e.target.multiple ? a : a[0];
                      },
                    },
                  },
                  t._l(t.exchanges, function (e, n) {
                    return a('option', [t._v(t._s(n))]);
                  })
                ),
              ]),
            ]),
          ]);
        }),
      c = [],
      u = (a('f3/d'), a('91GP'), a('LvDl')),
      l = a.n(u),
      d = (a('YIjs'), a('FhOJ'), a('wiDz')),
      f = {
        props: ['onlyTradable', 'onlyImportable'],
        data: function () {
          return { exchange: 'poloniex' };
        },
        created: function () {
          this.emitExchange();
        },
        computed: {
          exchanges: function () {
            var t = Object.assign({}, this.$store.state.exchanges);
            return (
              !l.a.isEmpty(t) &&
              (this.onlyTradable &&
                l.a.each(t, function (e, a) {
                  e.tradable || delete t[a];
                }),
              this.onlyImportable &&
                l.a.each(t, function (e, a) {
                  e.importable || delete t[a];
                }),
              t)
            );
          },
        },
        watch: {
          exchanges: function () {
            this.emitExchange();
          },
          exchange: function () {
            this.emitExchange();
          },
        },
        methods: {
          emitExchange: function () {
            this.$emit('exchange', this.exchange);
          },
        },
      },
      h = f,
      m = a('KHd+'),
      v = Object(m['a'])(h, o, c, !1, null, null, null),
      p = v.exports,
      g = {
        data: function () {
          return { exchange: !1, credentials: {} };
        },
        components: { exchangePicker: p },
        computed: {
          apiKeySets: function () {
            return this.$store.state.apiKeys;
          },
          exchanges: function () {
            return this.$store.state.exchanges;
          },
          requires: function () {
            return this.exchanges && this.exchange
              ? this.exchanges[this.exchange].requires
              : [];
          },
          config: function () {
            var t = { exchange: this.exchange, values: this.credentials };
            return t;
          },
        },
        watch: {
          credentials: function () {
            this.emitConfig();
          },
        },
        methods: {
          updateExchange: function (t) {
            (this.credentials = {}), (this.exchange = t), this.emitConfig();
          },
          emitConfig: function () {
            this.$emit('config', this.config);
          },
          upload: function () {
            var t = this,
              e = this.config.exchange;
            (this.exchanges &&
              this.apiKeySets.includes(e) &&
              !confirm(
                'You already have API keys for '.concat(
                  e,
                  ' defined, do you want to overwrite them?'
                )
              )) ||
              Object(d['b'])('addApiKey', this.config, function (e, a) {
                if (e) return alert(e);
                t.credentials = {};
              });
          },
        },
      },
      _ = g,
      k = (a('aOB3'), Object(m['a'])(_, i, s, !1, null, null, null)),
      y = k.exports,
      w = {
        components: { apiConfigBuilder: y },
        data: function () {
          return { addApiToggle: !1 };
        },
        methods: {
          openAddApi: function () {
            this.addApiToggle = !0;
          },
          removeApiKey: function (t) {
            confirm('Are you sure you want to delete these API keys?') &&
              Object(d['b'])('removeApiKey', { exchange: t }, function (t, e) {
                if (t) return alert(t);
              });
          },
        },
        computed: {
          apiKeySets: function () {
            return this.$store.state.apiKeys;
          },
        },
        watch: {
          apiKeySets: function () {
            this.addApiToggle = !1;
          },
        },
      },
      b = w,
      C = Object(m['a'])(b, n, r, !1, null, null, null);
    e['a'] = C.exports;
  },
  YEdZ: function (t, e, a) {
    'use strict';
    var n = a('jVW9'),
      r = a.n(n);
    r.a;
  },
  YIjs: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          [
            a('h3', [t._v('Daterange')]),
            'scan' === t.tab
              ? [
                  t.scanned
                    ? t._e()
                    : a('div', { staticClass: 'txt--center' }, [
                        a(
                          'a',
                          {
                            staticClass: 'w100--s btn--primary scan-btn',
                            attrs: { href: '#' },
                            on: {
                              click: function (e) {
                                return e.preventDefault(), t.scan(e);
                              },
                            },
                          },
                          [t._v('Scan available data')]
                        ),
                      ]),
                  'fetching' == t.scanned
                    ? a('div', { staticClass: 'txt--center' }, [
                        a('p', { staticClass: 'scan-btn' }, [
                          t._v('Scanning..'),
                        ]),
                      ])
                    : t._e(),
                  1 == t.scanned
                    ? [
                        0 === t.ranges.length
                          ? [
                              a('p', [
                                a('strong', [
                                  t._v(
                                    'Unable to find any local data, do you have local data available for"' +
                                      t._s(t.config.watch.exchange) +
                                      ':' +
                                      t._s(t.config.watch.currency) +
                                      '/' +
                                      t._s(t.config.watch.asset) +
                                      '"?'
                                  ),
                                ]),
                              ]),
                            ]
                          : [
                              a(
                                'label',
                                {
                                  staticClass: 'wrapper',
                                  attrs: { for: 'exchange' },
                                },
                                [t._v('Run simulation over:')]
                              ),
                              a(
                                'form',
                                { staticClass: 'radio grd' },
                                t._l(t.ranges, function (e, n) {
                                  return a(
                                    'div',
                                    { staticClass: 'grd-row m1' },
                                    [
                                      a('input', {
                                        directives: [
                                          {
                                            name: 'model',
                                            rawName: 'v-model',
                                            value: t.selectedRangeIndex,
                                            expression: 'selectedRangeIndex',
                                          },
                                        ],
                                        staticClass: 'grd-row-col-1-6',
                                        attrs: { type: 'radio' },
                                        domProps: {
                                          value: n,
                                          checked: t._q(
                                            t.selectedRangeIndex,
                                            n
                                          ),
                                        },
                                        on: {
                                          change: function (e) {
                                            t.selectedRangeIndex = n;
                                          },
                                        },
                                      }),
                                      a(
                                        'label',
                                        {
                                          staticClass: 'grd-row-col-5-6',
                                          attrs: { for: n },
                                        },
                                        [t._v(t._s(t.printRange(e)))]
                                      ),
                                    ]
                                  );
                                })
                              ),
                            ],
                        a('p', [
                          a('em', [
                            a(
                              'a',
                              {
                                attrs: { href: '#' },
                                on: {
                                  click: function (e) {
                                    return e.preventDefault(), t.scan(e);
                                  },
                                },
                              },
                              [t._v('rescan')]
                            ),
                          ]),
                        ]),
                      ]
                    : t._e(),
                  a('p', { staticClass: 'txt--center' }, [
                    a('em', [
                      a(
                        'a',
                        {
                          attrs: { href: '#' },
                          on: {
                            click: function (e) {
                              e.preventDefault(), (t.tab = 'manual');
                            },
                          },
                        },
                        [t._v('Or manually set a daterange')]
                      ),
                    ]),
                  ]),
                ]
              : t._e(),
            'manual' === t.tab
              ? [
                  a('div', [
                    a('label', { attrs: { for: 'from' } }, [t._v('From:')]),
                    a('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.from,
                          expression: 'from',
                        },
                      ],
                      domProps: { value: t.from },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.from = e.target.value);
                        },
                      },
                    }),
                  ]),
                  a('div', [
                    a('label', { attrs: { for: 'to' } }, [t._v('To:')]),
                    a('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.to,
                          expression: 'to',
                        },
                      ],
                      domProps: { value: t.to },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.to = e.target.value);
                        },
                      },
                    }),
                  ]),
                  a('p', { staticClass: 'txt--center' }),
                  a('em', [
                    a(
                      'a',
                      {
                        attrs: { href: '#' },
                        on: {
                          click: function (e) {
                            e.preventDefault(), (t.tab = 'scan');
                          },
                        },
                      },
                      [t._v('Or scan for a daterange')]
                    ),
                  ]),
                ]
              : t._e(),
          ],
          2
        );
      },
      r = [],
      i = (a('LvDl'), a('wiDz')),
      s = {
        props: ['config'],
        data: function () {
          return {
            scanned: !1,
            ranges: [],
            selectedRangeIndex: -1,
            tab: 'scan',
            from: '',
            to: '',
          };
        },
        methods: {
          scan: function () {
            var t = this;
            (this.scanned = 'fetching'),
              (this.selectedRangeIndex = -1),
              Object(i['b'])('scan', this.config, function (e, a) {
                (t.scanned = !0), (t.ranges = a), (t.selectedRangeIndex = 0);
              });
          },
          printRange: function (t) {
            var e = function (t) {
                return t.format('YYYY-MM-DD HH:mm');
              },
              a = moment.unix(t.from),
              n = moment.unix(t.to),
              r = moment.duration(n.diff(a)).humanize();
            return ''.concat(e(a), ' to ').concat(e(n), ' (').concat(r, ')');
          },
          fmtTs: function (t) {
            return moment.unix(t).utc();
          },
          fmt: function (t) {
            return t.utc().format();
          },
          emitRange: function (t) {
            this.$emit('range', {
              from: this.fmtTs(t.from),
              to: this.fmtTs(t.to),
            });
          },
          emitManualEntry: function () {
            if (this.from.length < '4' || this.from.length < '4')
              return this.$emit('range', {});
            var t = moment.utc(this.from),
              e = moment.utc(this.to);
            t.isValid() && e.isValid()
              ? this.$emit('range', { from: this.fmt(t), to: this.fmt(e) })
              : this.$emit('range', {});
          },
          reset: function () {
            (this.scanned = !1), this.$emit('range', {});
          },
        },
        watch: {
          from: function () {
            this.emitManualEntry();
          },
          to: function () {
            this.emitManualEntry();
          },
          config: function () {
            this.reset();
          },
          tab: function () {
            this.reset();
          },
          selectedRangeIndex: function () {
            var t = this.ranges[this.selectedRangeIndex];
            t && this.emitRange(t);
          },
        },
      },
      o = s,
      c = (a('CyGp'), a('KHd+')),
      u = Object(c['a'])(o, n, r, !1, null, null, null);
    u.exports;
  },
  ZL7j: function (t, e, a) {
    'use strict';
    var n = a('EDI0'),
      r = a.n(n);
    r.a;
  },
  ZpQ2: function (t, e, a) {},
  aOB3: function (t, e, a) {
    'use strict';
    var n = a('8KAT'),
      r = a.n(n);
    r.a;
  },
  bqjz: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          [
            a('h2', { staticClass: 'contain' }, [t._v('Backtest')]),
            a('div', { staticClass: 'hr' }),
            a('config-builder', { on: { config: t.check } }),
            t.backtestable
              ? a('div', [
                  a('div', { staticClass: 'txt--center' }, [
                    'fetching' !== t.backtestState
                      ? a(
                          'a',
                          {
                            staticClass: 'w100--s my1 btn--primary',
                            attrs: { href: '#' },
                            on: {
                              click: function (e) {
                                return e.preventDefault(), t.run(e);
                              },
                            },
                          },
                          [t._v('Backtest')]
                        )
                      : t._e(),
                    'fetching' === t.backtestState
                      ? a(
                          'div',
                          { staticClass: 'scan-btn' },
                          [a('p', [t._v('Running backtest..')]), a('spinner')],
                          1
                        )
                      : t._e(),
                  ]),
                ])
              : t._e(),
            t.backtestResult && 'fetched' === t.backtestState
              ? a('result', { attrs: { result: t.backtestResult } })
              : t._e(),
          ],
          1
        );
      },
      r = [],
      i =
        (a('VRzm'),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'div',
            [
              a('dataset-picker', {
                staticClass: 'my2 contain',
                on: { dataset: t.updateDataset },
              }),
              a('div', { staticClass: 'hr' }),
              a('strat-picker', {
                staticClass: 'my2 contain',
                on: { stratConfig: t.updateStrat },
              }),
              a('div', { staticClass: 'hr' }),
              a('paper-trader', {
                staticClass: 'contain',
                on: { settings: t.updatePaperTrader },
              }),
              a('div', { staticClass: 'hr' }),
            ],
            1
          );
        }),
      s = [],
      o =
        (a('91GP'),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', [
            a('h3', [t._v('Select a dataset')]),
            'idle' === t.datasetScanstate
              ? a('div', { staticClass: 'txt--center my2' }, [
                  a(
                    'a',
                    {
                      staticClass: 'w100--s btn--primary scan-btn',
                      attrs: { href: '#' },
                      on: {
                        click: function (e) {
                          return e.preventDefault(), t.scan(e);
                        },
                      },
                    },
                    [t._v('Scan available data')]
                  ),
                ])
              : t._e(),
            'scanning' === t.datasetScanstate
              ? a('div', { staticClass: 'txt--center my2' }, [a('spinner')], 1)
              : t._e(),
            'scanned' === t.datasetScanstate
              ? a('div', { staticClass: 'my2' }, [
                  0 != t.datasets.length
                    ? a(
                        'div',
                        [
                          a('table', { staticClass: 'full' }, [
                            t._m(0),
                            a(
                              'tbody',
                              t._l(t.datasets, function (e, n) {
                                return a('tr', [
                                  a('td', { staticClass: 'radio' }, [
                                    a('input', {
                                      directives: [
                                        {
                                          name: 'model',
                                          rawName: 'v-model',
                                          value: t.setIndex,
                                          expression: 'setIndex',
                                        },
                                      ],
                                      attrs: {
                                        type: 'radio',
                                        name: 'dataset',
                                        id: e.id,
                                      },
                                      domProps: {
                                        value: n,
                                        checked: t._q(t.setIndex, n),
                                      },
                                      on: {
                                        change: function (e) {
                                          t.setIndex = n;
                                        },
                                      },
                                    }),
                                  ]),
                                  a('td', [
                                    a('label', { attrs: { for: e.id } }, [
                                      t._v(t._s(e.exchange)),
                                    ]),
                                  ]),
                                  a('td', [
                                    a('label', { attrs: { for: e.id } }, [
                                      t._v(t._s(e.currency)),
                                    ]),
                                  ]),
                                  a('td', [
                                    a('label', { attrs: { for: e.id } }, [
                                      t._v(t._s(e.asset)),
                                    ]),
                                  ]),
                                  a('td', [
                                    a('label', { attrs: { for: e.id } }, [
                                      t._v(t._s(t.fmt(e.from))),
                                    ]),
                                  ]),
                                  a('td', [
                                    a('label', { attrs: { for: e.id } }, [
                                      t._v(t._s(t.fmt(e.to))),
                                    ]),
                                  ]),
                                  a('td', [
                                    a('label', { attrs: { for: e.id } }, [
                                      t._v(
                                        t._s(
                                          t.humanizeDuration(e.to.diff(e.from))
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]);
                              })
                            ),
                          ]),
                          t.rangeVisible
                            ? t._e()
                            : a(
                                'a',
                                {
                                  staticClass: 'btn--primary',
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (e) {
                                      return e.preventDefault(), t.openRange(e);
                                    },
                                  },
                                },
                                [t._v('Adjust range')]
                              ),
                          t.rangeVisible
                            ? [
                                a('div', [
                                  a('label', { attrs: { for: 'customFrom' } }, [
                                    t._v('From:'),
                                  ]),
                                  a('input', {
                                    directives: [
                                      {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: t.customFrom,
                                        expression: 'customFrom',
                                      },
                                    ],
                                    domProps: { value: t.customFrom },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.customFrom = e.target.value);
                                      },
                                    },
                                  }),
                                ]),
                                a('div', [
                                  a('label', { attrs: { for: 'customTo' } }, [
                                    t._v('To:'),
                                  ]),
                                  a('input', {
                                    directives: [
                                      {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: t.customTo,
                                        expression: 'customTo',
                                      },
                                    ],
                                    domProps: { value: t.customTo },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.customTo = e.target.value);
                                      },
                                    },
                                  }),
                                ]),
                              ]
                            : t._e(),
                        ],
                        2
                      )
                    : a('em', [
                        t._v('No Data found '),
                        a('a', { attrs: { href: '#/data/importer' } }, [
                          t._v('Lets add some'),
                        ]),
                      ]),
                ])
              : t._e(),
          ]);
        }),
      c = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('thead', [
            a('tr', [
              a('th'),
              a('th', [t._v('exchange')]),
              a('th', [t._v('currency')]),
              a('th', [t._v('asset')]),
              a('th', [t._v('from')]),
              a('th', [t._v('to')]),
              a('th', [t._v('duration')]),
            ]),
          ]);
        },
      ],
      u = a('LvDl'),
      l = a.n(u),
      d = a('Kw5r'),
      f = a('wiDz'),
      h = a('MB/c'),
      m = a('spvI'),
      v = {
        components: { spinner: h['a'] },
        data: function () {
          return {
            setIndex: -1,
            customTo: !1,
            customFrom: !1,
            rangeVisible: !1,
            set: !1,
          };
        },
        mixins: [m['a']],
        methods: {
          humanizeDuration: function (t) {
            return window.humanizeDuration(t, { largest: 4 });
          },
          fmt: function (t) {
            return t.utc().format('YYYY-MM-DD HH:mm');
          },
          openRange: function () {
            if (-1 === this.setIndex)
              return alert('Select a dataset to adjust range');
            this.updateCustomRange(), (this.rangeVisible = !0);
          },
          updateCustomRange: function () {
            (this.customTo = this.fmt(this.set.to)),
              (this.customFrom = this.fmt(this.set.from));
          },
          emitSet: function (t) {
            var e;
            t &&
              (this.customTo
                ? ((e = d['a'].util.extend({}, t)),
                  (e.to = moment
                    .utc(this.customTo, 'YYYY-MM-DD HH:mm')
                    .format()),
                  (e.from = moment
                    .utc(this.customFrom, 'YYYY-MM-DD HH:mm')
                    .format()))
                : (e = t),
              this.$emit('dataset', e));
          },
        },
        watch: {
          setIndex: function () {
            (this.set = this.datasets[this.setIndex]),
              this.updateCustomRange(),
              this.emitSet(this.set);
          },
          customTo: function () {
            this.emitSet(this.set);
          },
          customFrom: function () {
            this.emitSet(this.set);
          },
        },
      },
      p = v,
      g = (a('ngcj'), a('KHd+')),
      _ = Object(g['a'])(p, o, c, !1, null, null, null),
      k = _.exports,
      y = a('6Wkr'),
      w = a('rloZ'),
      b = {
        created: function () {
          var t = this;
          Object(f['a'])('configPart/performanceAnalyzer', function (e, a) {
            (t.performanceAnalyzer = toml.parse(a.part)),
              (t.performanceAnalyzer.enabled = !0);
          });
        },
        data: function () {
          return {
            dataset: {},
            strat: {},
            paperTrader: {},
            performanceAnalyzer: {},
          };
        },
        components: {
          stratPicker: y['a'],
          datasetPicker: k,
          paperTrader: w['a'],
        },
        computed: {
          market: function () {
            return this.dataset.exchange
              ? {
                  exchange: this.dataset.exchange,
                  currency: this.dataset.currency,
                  asset: this.dataset.asset,
                }
              : {};
          },
          range: function () {
            return this.dataset.exchange
              ? { from: this.dataset.from, to: this.dataset.to }
              : {};
          },
          config: function () {
            var t = {};
            return (
              Object.assign(
                t,
                { watch: this.market },
                { paperTrader: this.paperTrader },
                this.strat,
                {
                  backtest: { daterange: this.range },
                  backtestResultExporter: {
                    enabled: !0,
                    writeToDisk: !1,
                    data: {
                      stratUpdates: !1,
                      roundtrips: !0,
                      stratCandles: !0,
                      stratCandleProps: ['open'],
                      trades: !0,
                    },
                  },
                },
                { performanceAnalyzer: this.performanceAnalyzer }
              ),
              (t.valid = this.validConfig(t)),
              (t.backtestResultExporter.enabled = !0),
              t
            );
          },
        },
        methods: {
          validConfig: function (t) {
            if (!t.backtest) return !1;
            if (!t.backtest.daterange) return !1;
            if (l.a.isEmpty(t.backtest.daterange)) return !1;
            if (!t.watch) return !1;
            if (!t.tradingAdvisor) return !1;
            var e = t.tradingAdvisor.method;
            if (l.a.isEmpty(t[e])) return !1;
            if (t.tradingAdvisor) {
              if (l.a.isNaN(t.tradingAdvisor.candleSize)) return !1;
              if (0 == t.tradingAdvisor.candleSize) return !1;
            }
            return !0;
          },
          updateDataset: function (t) {
            (this.dataset = t), this.$emit('config', this.config);
          },
          updateStrat: function (t) {
            (this.strat = t), this.$emit('config', this.config);
          },
          updatePaperTrader: function (t) {
            (this.paperTrader = t),
              (this.paperTrader.enabled = !0),
              this.$emit('config', this.config);
          },
        },
      },
      C = b,
      x = (a('Q6eY'), Object(g['a'])(C, i, s, !1, null, null, null)),
      S = x.exports,
      T = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          [
            a('div', { staticClass: 'hr contain' }),
            t._m(0),
            a('result-summary', {
              attrs: { report: t.result.performanceReport },
            }),
            a('div', { staticClass: 'hr contain' }),
            a('chart', { attrs: { data: t.candles, height: '500' } }),
            a('div', { staticClass: 'hr contain' }),
            a('roundtripTable', { attrs: { roundtrips: t.result.roundtrips } }),
          ],
          1
        );
      },
      E = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'contain' }, [
            a('h3', [t._v('Backtest result')]),
          ]);
        },
      ],
      P = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'contain' }, [
          a(
            'div',
            { staticClass: 'grd-row summary' },
            [
              a('div', { staticClass: 'grd-row-col-3-6' }, [
                a('table', { staticClass: 'p1' }, [
                  a('tr', [
                    a('th', [t._v('start time')]),
                    a('td', [t._v(t._s(t.report.startTime))]),
                  ]),
                  a('tr', [
                    a('th', [t._v('end time')]),
                    a('td', [t._v(t._s(t.report.endTime))]),
                  ]),
                  a('tr', [
                    a('th', [t._v('timespan')]),
                    a('td', [t._v(t._s(t.report.timespan))]),
                  ]),
                  a('tr', [
                    a('th', [t._v('start price')]),
                    a('td', [
                      t._v(
                        t._s(t.round(t.report.startPrice)) +
                          ' ' +
                          t._s(t.report.currency)
                      ),
                    ]),
                  ]),
                  a('tr', [
                    a('th', [t._v('end price')]),
                    a('td', [
                      t._v(
                        t._s(t.round(t.report.endPrice)) +
                          ' ' +
                          t._s(t.report.currency)
                      ),
                    ]),
                  ]),
                  a('tr', [
                    a('th', [t._v('market')]),
                    a('td', [t._v(t._s(t.round(t.report.market)) + '%')]),
                  ]),
                ]),
              ]),
              a('paperTradeSummary', { attrs: { report: t.report } }),
            ],
            1
          ),
        ]);
      },
      A = [],
      j = a('0Bu0'),
      D = {
        props: ['report'],
        components: { paperTradeSummary: j['a'] },
        methods: {
          round: function (t) {
            return (+t).toFixed(5);
          },
        },
        computed: {
          profitClass: function () {
            return this.report.relativeProfit > 0 ? 'profit' : 'loss';
          },
        },
      },
      O = D,
      z = (a('WlXR'), Object(g['a'])(O, P, A, !1, null, null, null)),
      $ = z.exports,
      M = a('UeuA'),
      G = a('vf3E'),
      I = {
        props: ['result'],
        data: function () {
          return {};
        },
        methods: {},
        components: { roundtripTable: G['a'], resultSummary: $, chart: M['a'] },
        computed: {
          candles: function () {
            return {
              candles: this.result.stratCandles,
              trades: this.result.trades,
            };
          },
        },
      },
      R = I,
      H = (a('wVP4'), Object(g['a'])(R, T, E, !1, null, null, null)),
      K = H.exports,
      Y = {
        data: function () {
          return {
            backtestable: !1,
            backtestState: 'idle',
            backtestResult: !1,
            config: !1,
          };
        },
        methods: {
          check: function (t) {
            if (((this.config = t), !t.valid)) return (this.backtestable = !1);
            this.backtestable = !0;
          },
          run: function () {
            var t = this;
            (this.backtestState = 'fetching'),
              Object(f['b'])('backtest', this.config, function (e, a) {
                (t.backtestState = 'fetched'), (t.backtestResult = a);
              });
          },
        },
        components: { configBuilder: S, result: K, spinner: h['a'] },
      },
      W = Y,
      N = Object(g['a'])(W, n, r, !1, null, null, null);
    e['a'] = N.exports;
  },
  dHeD: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'contain' }, [
          a('div', {
            staticClass: 'text',
            domProps: { innerHTML: t._s(t.intro) },
          }),
          a('div', { staticClass: 'hr' }),
          a('h2', [t._v('Available datasets')]),
          'idle' === t.datasetScanstate
            ? a('div', { staticClass: 'txt--center my2' }, [
                a(
                  'a',
                  {
                    staticClass: 'w100--s btn--primary scan-btn',
                    attrs: { href: '#' },
                    on: {
                      click: function (e) {
                        return e.preventDefault(), t.scan(e);
                      },
                    },
                  },
                  [t._v('Scan available data')]
                ),
              ])
            : t._e(),
          'scanning' === t.datasetScanstate
            ? a('div', { staticClass: 'txt--center my2' }, [a('spinner')], 1)
            : t._e(),
          'scanned' === t.datasetScanstate
            ? a(
                'div',
                { staticClass: 'my2' },
                [
                  t.unscannableMakets.length
                    ? a(
                        'div',
                        { staticClass: 'bg--orange p1 warning my1' },
                        [
                          t.viewUnscannable
                            ? t._e()
                            : a(
                                'p',
                                {
                                  staticClass: 'clickable',
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.preventDefault(),
                                        t.toggleUnscannable(e)
                                      );
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    'Some markets were unscannable, click here for details.'
                                  ),
                                ]
                              ),
                          t.viewUnscannable
                            ? [
                                a('p', [
                                  t._v(
                                    'Unable to find datasets in the following markets:'
                                  ),
                                ]),
                                t._l(t.unscannableMakets, function (e) {
                                  return a('div', { staticClass: 'mx2' }, [
                                    t._v(
                                      '- ' +
                                        t._s(e.exchange) +
                                        ':' +
                                        t._s(e.currency) +
                                        ':' +
                                        t._s(e.asset)
                                    ),
                                  ]);
                                }),
                              ]
                            : t._e(),
                        ],
                        2
                      )
                    : t._e(),
                  t.datasets.length
                    ? [
                        a('table', { staticClass: 'full data' }, [
                          t._m(0),
                          a(
                            'tbody',
                            t._l(t.datasets, function (e) {
                              return a('tr', [
                                a('td', [t._v(t._s(e.exchange))]),
                                a('td', [t._v(t._s(e.currency))]),
                                a('td', [t._v(t._s(e.asset))]),
                                a('td', [t._v(t._s(t.fmt(e.from)))]),
                                a('td', [t._v(t._s(t.fmt(e.to)))]),
                                a('td', [
                                  t._v(
                                    t._s(t.humanizeDuration(e.to.diff(e.from)))
                                  ),
                                ]),
                              ]);
                            })
                          ),
                        ]),
                      ]
                    : t._e(),
                  t.datasets.length
                    ? t._e()
                    : [
                        a('p', [
                          t._v(
                            "It looks like you don't have any local data yet."
                          ),
                        ]),
                      ],
                ],
                2
              )
            : t._e(),
          a(
            'div',
            { staticClass: 'my2' },
            [
              a('h2', [t._v('Import more data')]),
              a('p', { staticClass: 'text' }, [
                t._v(
                  'You can easily import more market data directly from exchanges using the importer.'
                ),
              ]),
              a(
                'router-link',
                {
                  staticClass: 'btn--primary',
                  attrs: { to: '/data/importer' },
                },
                [t._v('Go to the importer!')]
              ),
            ],
            1
          ),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('thead', [
            a('tr', [
              a('th', [t._v('exchange')]),
              a('th', [t._v('currency')]),
              a('th', [t._v('asset')]),
              a('th', [t._v('from')]),
              a('th', [t._v('to')]),
              a('th', [t._v('duration')]),
            ]),
          ]);
        },
      ],
      i = (a('VRzm'), a('MB/c')),
      s = a('5shn'),
      o = a('spvI'),
      c = Object(s['a'])(
        '\n\n## Local data\n\nGekko needs local market data in order to backtest strategies. The local\ndata can also be used in a warmup period when running a strategy against a\nlive market.\n\n'
      ),
      u = {
        mixins: [o['a']],
        components: { spinner: i['a'] },
        data: function () {
          return { intro: c, viewUnscannable: !1 };
        },
        methods: {
          toggleUnscannable: function () {
            this.viewUnscannable = !0;
          },
          humanizeDuration: function (t) {
            return window.humanizeDuration(t);
          },
          fmt: function (t) {
            return t.format('YYYY-MM-DD HH:mm');
          },
        },
      },
      l = u,
      d = (a('2rY9'), a('KHd+')),
      f = Object(d['a'])(l, n, r, !1, null, null, null);
    e['a'] = f.exports;
  },
  dW8q: function (t, e, a) {
    'use strict';
    var n = a('w3yp'),
      r = a.n(n);
    r.a;
  },
  daul: function (t, e, a) {
    'use strict';
    var n = a('Kd0R'),
      r = a.n(n);
    r.a;
  },
  g298: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'contain my2' }, [
          t.data && !t.data.done
            ? a(
                'div',
                [
                  a('h2', [t._v('Importing data..')]),
                  a('div', { staticClass: 'grd' }, [
                    a('div', { staticClass: 'grd-row' }, [
                      t._m(0),
                      a('div', { staticClass: 'grd-row-col-4-6' }, [
                        t._v(t._s(t.data.watch.exchange)),
                      ]),
                    ]),
                    a('div', { staticClass: 'grd-row' }, [
                      t._m(1),
                      a('div', { staticClass: 'grd-row-col-4-6' }, [
                        t._v(
                          t._s(t.data.watch.currency) +
                            '/' +
                            t._s(t.data.watch.asset)
                        ),
                      ]),
                    ]),
                  ]),
                  a('div', { staticClass: 'grd' }, [
                    a('div', { staticClass: 'grd-row' }, [
                      t._m(2),
                      a('div', { staticClass: 'grd-row-col-4-6' }, [
                        t._v(t._s(t.fmt(t.from))),
                      ]),
                    ]),
                    a('div', { staticClass: 'grd-row' }, [
                      t._m(3),
                      a('div', { staticClass: 'grd-row-col-4-6' }, [
                        t._v(t._s(t.fmt(t.to))),
                      ]),
                    ]),
                    t.initialized
                      ? a('div', { staticClass: 'grd-row' }, [
                          t._m(4),
                          a('div', { staticClass: 'grd-row-col-4-6' }, [
                            t._v(t._s(t.fmt(t.latest))),
                          ]),
                        ])
                      : t._e(),
                    t.initialized
                      ? a('div', { staticClass: 'grd-row' }, [
                          t._m(5),
                          a('div', { staticClass: 'grd-row-col-4-6' }, [
                            t._v(t._s(t.fromEnd)),
                          ]),
                        ])
                      : t._e(),
                  ]),
                  t.initialized ? t._e() : a('spinner'),
                  t.initialized
                    ? a(
                        'div',
                        { staticClass: 'contain' },
                        [a('progressBar', { attrs: { progress: t.progress } })],
                        1
                      )
                    : t._e(),
                  a('p', [
                    a(
                      'em',
                      [
                        t._v(
                          "(you don't have to wait until the import is done,you can already start "
                        ),
                        a('router-link', { attrs: { to: '/backtest' } }, [
                          t._v('backtesting'),
                        ]),
                        t._v(').'),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              )
            : t._e(),
          t.data && t.data.done
            ? a('div', { staticClass: 'txt--center' }, [
                a('h2', [t._v('Import done')]),
                a(
                  'p',
                  [
                    t._v(' Go and '),
                    a('router-link', { attrs: { to: '/backtest' } }, [
                      t._v('backtest'),
                    ]),
                    t._v(' with your new data!'),
                  ],
                  1
                ),
              ])
            : t._e(),
          t.data
            ? t._e()
            : a('div', { staticClass: 'txt--center' }, [
                a('h2', [t._v('ERROR: Unknown import')]),
                a('p', [a('I', [t._v("don't know this import..")])], 1),
              ]),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-2-6' }, [
            a('strong', [t._v('Market:')]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-2-6' }, [
            a('strong', [t._v('Currency/Asset:')]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-2-6' }, [
            a('strong', [t._v('From:')]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-2-6' }, [
            a('strong', [t._v('To:')]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-2-6' }, [
            a('strong', [t._v('Imported data until:')]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-2-6' }, [
            a('strong', [t._v('Remaining:')]),
          ]);
        },
      ],
      i = (a('dRSK'), a('LvDl')),
      s = a.n(i),
      o = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return t.progress
          ? a('div', { staticClass: 'progressbarWrapper' }, [
              a('p', [a('strong', [t._v(t._s(t.round(t.progress)) + '%')])]),
              a('div', { staticClass: 'progressbar' }, [
                a('div', { style: { width: t.progress + '%' } }),
              ]),
            ])
          : t._e();
      },
      c = [],
      u = {
        props: ['progress'],
        methods: {
          round: function (t) {
            return (+t).toFixed(2);
          },
        },
      },
      l = u,
      d = (a('/vJE'), a('KHd+')),
      f = Object(d['a'])(l, o, c, !1, null, null, null),
      h = f.exports,
      m = a('MB/c'),
      v = {
        components: { progressBar: h, spinner: m['a'] },
        computed: {
          data: function () {
            return s.a.find(this.$store.state.imports, {
              id: this.$route.params.id,
            });
          },
          initialized: function () {
            if (this.data && this.latest.isValid()) return !0;
          },
          latest: function () {
            if (this.data) return this.mom(this.data.latest);
          },
          fromEndMs: function () {
            if (this.data) return this.to.diff(this.latest);
          },
          fromEnd: function () {
            return this.latest ? humanizeDuration(this.fromEndMs) : 'LOADING';
          },
          from: function () {
            if (this.data) return this.mom(this.data.from);
          },
          to: function () {
            if (this.data) return this.mom(this.data.to);
          },
          timespan: function () {
            if (this.data) return this.to.diff(this.from);
          },
          progress: function () {
            if (this.data) {
              var t = this.timespan - this.fromEndMs;
              return (100 * t) / this.timespan;
            }
          },
        },
        methods: {
          fmt: function (t) {
            return t.format('YYYY-MM-DD HH:mm:ss');
          },
          mom: function (t) {
            return moment.utc(t);
          },
        },
      },
      p = v,
      g = (a('qDq4'), Object(d['a'])(p, n, r, !1, null, null, null));
    e['a'] = g.exports;
  },
  gYof: function (t, e, a) {
    'use strict';
    a('LvDl');
    var n = a('Kw5r'),
      r = a('r0f2'),
      i = (a('L2JU'), a('wiDz')),
      s = a('Q2AE'),
      o = function () {
        Object(i['a'])('imports', function (t, e) {
          s['a'].commit('syncImports', e);
        });
      },
      c = function () {
        C.$on('import_update', function (t) {
          s['a'].commit('updateImport', t);
        });
      },
      u = function () {
        o(), c();
      },
      l = function () {
        Object(i['a'])('gekkos', function (t, e) {
          var a = e;
          s['a'].commit('syncGekkos', a);
        });
      },
      d = function () {
        C.$on('gekko_new', function (t) {
          return s['a'].commit('addGekko', t.state);
        }),
          C.$on('gekko_event', function (t) {
            return s['a'].commit('updateGekko', t);
          }),
          C.$on('gekko_archived', function (t) {
            return s['a'].commit('archiveGekko', t.id);
          }),
          C.$on('gekko_error', function (t) {
            return s['a'].commit('errorGekko', t);
          }),
          C.$on('gekko_deleted', function (t) {
            return s['a'].commit('deleteGekko', t.id);
          });
      },
      f = function () {
        l(), d();
      },
      h = function () {},
      m = function () {
        C.$on('WS_STATUS_CHANGE', function (t) {
          return s['a'].commit('setGlobalWarning', {
            key: 'connected',
            value: t.connected,
          });
        });
      },
      v = function () {
        h(), m();
      },
      p = a('k5N+'),
      g =
        (a('rGqo'),
        function (t) {
          if (!t) return {};
          var e = t,
            a = {};
          return (
            e.forEach(function (t) {
              (a[t.slug] = a[t.slug] || { markets: {} }),
                t.markets.forEach(function (e) {
                  var n = Object(p['a'])(e['pair'], 2),
                    r = n[0],
                    i = n[1];
                  (a[t.slug].markets[r] = a[t.slug].markets[r] || []),
                    a[t.slug].markets[r].push(i);
                }),
                'exchangeMaxHistoryAge' in t &&
                  (a[t.slug].exchangeMaxHistoryAge = t.exchangeMaxHistoryAge),
                (a[t.slug].importable = !!t.providesFullHistory),
                (a[t.slug].tradable = !!t.tradable),
                (a[t.slug].requires = t.requires);
            }),
            a
          );
        }),
      _ = function () {
        Object(i['a'])('apiKeys', function (t, e) {
          s['a'].commit('syncApiKeys', e);
        }),
          Object(i['a'])('exchanges', function (t, e) {
            s['a'].commit('syncExchanges', g(e));
          });
      },
      k = function () {
        C.$on('apiKeys', function (t) {
          s['a'].commit('syncApiKeys', t.exchanges);
        });
      },
      y = function () {
        _(), k();
      },
      w = function () {
        u(), f(), v(), y();
      };
    a.d(e, 'a', function () {
      return C;
    }),
      a.d(e, 'b', function () {
        return S;
      });
    var b = null,
      C = new n['a']();
    C.$on('gekko_update', function (t) {
      return console.log(t);
    }),
      C.$on('import_update', function (t) {
        return console.log(t);
      }),
      C.$on('import_error', function (t) {
        alert('IMPORT ERROR: ' + t.error);
      });
    var x = { connected: !1 },
      S = function () {
        (b = new ReconnectingWebSocket(r['b'], null, {
          maxReconnectInterval: 4e3,
        })),
          setTimeout(function () {
            x.connected || (w(), C.$emit('WS_STATUS_CHANGE', x));
          }, 500),
          (b.onopen = function () {
            x.connected ||
              ((x.connected = !0), C.$emit('WS_STATUS_CHANGE', x), w());
          }),
          (b.onclose = function () {
            x.connected && ((x.connected = !1), C.$emit('WS_STATUS_CHANGE', x));
          }),
          (b.onerror = function () {
            x.connected && ((x.connected = !1), C.$emit('WS_STATUS_CHANGE', x));
          }),
          (b.onmessage = function (t) {
            var e = JSON.parse(t.data);
            C.$emit(e.type, e);
          });
      };
  },
  h8ks: function (t, e, a) {},
  hGnM: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'contain py2' },
          [
            a('h3', [t._v('Market watchers')]),
            t.watchers.length
              ? t._e()
              : a('div', { staticClass: 'text' }, [
                  a('p', [t._v("You don't have any market watchers.")]),
                ]),
            t.watchers.length
              ? a('table', { staticClass: 'full clickable' }, [
                  t._m(0),
                  a(
                    'tbody',
                    t._l(t.watchers, function (e) {
                      return a(
                        'tr',
                        {
                          staticClass: 'clickable',
                          on: {
                            click: function (a) {
                              t.$router.push({ path: '/live-gekkos/' + e.id });
                            },
                          },
                        },
                        [
                          a('td', [t._v(t._s(e.config.watch.exchange))]),
                          a('td', [t._v(t._s(e.config.watch.currency))]),
                          a('td', [t._v(t._s(e.config.watch.asset))]),
                          a('td', [t._v(t._s(t.status(e)))]),
                          a(
                            'td',
                            [
                              e.events.initial.candle
                                ? [
                                    t._v(
                                      t._s(t.fmt(e.events.initial.candle.start))
                                    ),
                                  ]
                                : t._e(),
                            ],
                            2
                          ),
                          a(
                            'td',
                            [
                              e.events.latest.candle
                                ? [
                                    t._v(
                                      t._s(t.fmt(e.events.latest.candle.start))
                                    ),
                                  ]
                                : t._e(),
                            ],
                            2
                          ),
                          a(
                            'td',
                            [
                              e.events.initial.candle && e.events.latest.candle
                                ? [
                                    t._v(
                                      t._s(
                                        t.timespan(
                                          e.events.latest.candle.start,
                                          e.events.initial.candle.start
                                        )
                                      )
                                    ),
                                  ]
                                : t._e(),
                            ],
                            2
                          ),
                        ]
                      );
                    })
                  ),
                ])
              : t._e(),
            a('h3', [t._v('Strat runners')]),
            t.stratrunners.length
              ? t._e()
              : a('div', { staticClass: 'text' }, [
                  a('p', [t._v("You don't have any stratrunners.")]),
                ]),
            t.stratrunners.length
              ? a('table', { staticClass: 'full' }, [
                  t._m(1),
                  a(
                    'tbody',
                    t._l(t.stratrunners, function (e) {
                      return a(
                        'tr',
                        {
                          staticClass: 'clickable',
                          on: {
                            click: function (a) {
                              t.$router.push({ path: '/live-gekkos/' + e.id });
                            },
                          },
                        },
                        [
                          a('td', [t._v(t._s(e.config.watch.exchange))]),
                          a('td', [t._v(t._s(e.config.watch.currency))]),
                          a('td', [t._v(t._s(e.config.watch.asset))]),
                          a('td', [t._v(t._s(t.status(e)))]),
                          a(
                            'td',
                            [
                              e.events.initial.candle && e.events.latest.candle
                                ? [
                                    t._v(
                                      t._s(
                                        t.timespan(
                                          e.events.latest.candle.start,
                                          e.events.initial.candle.start
                                        )
                                      )
                                    ),
                                  ]
                                : t._e(),
                            ],
                            2
                          ),
                          a('td', [t._v(t._s(e.config.tradingAdvisor.method))]),
                          a(
                            'td',
                            [
                              t.report(e) ? t._e() : [t._v('0')],
                              t.report(e)
                                ? [
                                    t._v(
                                      t._s(t.round(t.report(e).profit)) +
                                        ' ' +
                                        t._s(t.report(e).currency)
                                    ),
                                  ]
                                : t._e(),
                            ],
                            2
                          ),
                          a('td', [t._v(t._s(e.logType))]),
                          a(
                            'td',
                            [
                              e.events.tradeCompleted ? t._e() : [t._v('0')],
                              e.events.tradeCompleted
                                ? [t._v(t._s(e.events.tradeCompleted.length))]
                                : t._e(),
                            ],
                            2
                          ),
                        ]
                      );
                    })
                  ),
                ])
              : t._e(),
            a('div', { staticClass: 'hr' }),
            a('h2', [t._v('Start a new live Gekko')]),
            a(
              'router-link',
              {
                staticClass: 'btn--primary',
                attrs: { to: '/live-gekkos/new' },
              },
              [t._v('Start a new live Gekko!')]
            ),
          ],
          1
        );
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('thead', [
            a('tr', [
              a('th', [t._v('exchange')]),
              a('th', [t._v('currency')]),
              a('th', [t._v('asset')]),
              a('th', [t._v('status')]),
              a('th', [t._v('started at')]),
              a('th', [t._v('last update')]),
              a('th', [t._v('duration')]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('thead', [
            a('tr', [
              a('th', [t._v('exchange')]),
              a('th', [t._v('currency')]),
              a('th', [t._v('asset')]),
              a('th', [t._v('status')]),
              a('th', [t._v('duration')]),
              a('th', [t._v('strategy')]),
              a('th', [t._v('PnL')]),
              a('th', [t._v('type')]),
              a('th', [t._v('trades')]),
            ]),
          ]);
        },
      ],
      i =
        (a('a1Th'),
        a('rGqo'),
        a('yt8O'),
        {
          created: function () {
            var t = this;
            this.timer = setInterval(function () {
              t.now = moment();
            }, 1e3);
          },
          destroyed: function () {
            clearTimeout(this.timer);
          },
          data: function () {
            return { timer: !1, now: moment() };
          },
          computed: {
            stratrunners: function () {
              return _.values(this.$store.state.gekkos)
                .concat(_.values(this.$store.state.archivedGekkos))
                .filter(function (t) {
                  return (
                    'papertrader' === t.logType || 'tradebot' === t.logType
                  );
                });
            },
            watchers: function () {
              return _.values(this.$store.state.gekkos)
                .concat(_.values(this.$store.state.archivedGekkos))
                .filter(function (t) {
                  return 'watcher' === t.logType;
                });
            },
          },
          methods: {
            humanizeDuration: function (t) {
              return window.humanizeDuration(t);
            },
            moment: (function (t) {
              function e(e) {
                return t.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return t.toString();
                }),
                e
              );
            })(function (t) {
              return moment.utc(t);
            }),
            fmt: function (t) {
              return moment.utc(t).format('YYYY-MM-DD HH:mm');
            },
            round: function (t) {
              return (+t).toFixed(3);
            },
            timespan: function (t, e) {
              return this.humanizeDuration(this.moment(t).diff(this.moment(e)));
            },
            status: function (t) {
              return t.errored
                ? 'errored'
                : t.stopped
                ? 'stopped'
                : t.active
                ? 'running'
                : void console.log('unknown state:', t);
            },
            report: function (t) {
              return _.get(t, 'events.latest.performanceReport');
            },
          },
        }),
      s = i,
      o = (a('daul'), a('KHd+')),
      c = Object(o['a'])(s, n, r, !1, null, null, null);
    e['a'] = c.exports;
  },
  jTvs: function (t, e, a) {},
  jVW9: function (t, e, a) {},
  jf14: function (t, e, a) {},
  jloR: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'contain my2' },
          [
            a('div', {
              staticClass: 'text',
              domProps: { innerHTML: t._s(t.intro) },
            }),
            a('div', { staticClass: 'hr' }),
            a('h3', [t._v('Currently running imports')]),
            0 === t.imports.length
              ? a('p', [t._v("You currently don't have any imports running.")])
              : t._e(),
            t.imports.length
              ? a(
                  'ul',
                  t._l(t.imports, function (e) {
                    return a(
                      'li',
                      [
                        a(
                          'router-link',
                          { attrs: { to: '/data/importer/import/' + e.id } },
                          [
                            t._v(
                              t._s(e.watch.exchange) +
                                ':' +
                                t._s(e.watch.currency) +
                                '/' +
                                t._s(e.watch.asset)
                            ),
                          ]
                        ),
                      ],
                      1
                    );
                  })
                )
              : t._e(),
            a('div', { staticClass: 'hr' }),
            a('h3', [t._v('Start a new import')]),
            a('import-config-builder', { on: { config: t.updateConfig } }),
            a('div', { staticClass: 'hr' }),
            a('div', { staticClass: 'txt--center' }, [
              a(
                'a',
                {
                  staticClass: 'w100--s my1 btn--primary',
                  attrs: { href: '#' },
                  on: {
                    click: function (e) {
                      return e.preventDefault(), t.run(e);
                    },
                  },
                },
                [t._v('Import')]
              ),
            ]),
          ],
          1
        );
      },
      r = [],
      i = a('wiDz'),
      s = a('MB/c'),
      o = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'grd contain' }, [
          a('div', { staticClass: 'grd-row' }, [
            a(
              'div',
              { staticClass: 'grd-row-col-3-6 mx1' },
              [
                a('h3', [t._v('Market')]),
                a('market-picker', {
                  attrs: { 'only-importable': 'true' },
                  on: { market: t.updateMarketConfig },
                }),
              ],
              1
            ),
            a(
              'div',
              { staticClass: 'grd-row-col-3-6 mx1' },
              [a('range-creator', { on: { range: t.updateRange } })],
              1
            ),
          ]),
        ]);
      },
      c = [],
      u = (a('91GP'), a('6BxS')),
      l = a('FhOJ'),
      d =
        (a('LvDl'),
        {
          data: function () {
            return { market: {}, range: {} };
          },
          components: { marketPicker: u['a'], rangeCreator: l['a'] },
          computed: {
            config: function () {
              var t = {};
              return (
                Object.assign(
                  t,
                  this.market,
                  { importer: { daterange: this.range } },
                  { candleWriter: { enabled: !0 } }
                ),
                t
              );
            },
          },
          methods: {
            updateMarketConfig: function (t) {
              (this.market = t), this.emitConfig();
            },
            updateRange: function (t) {
              (this.range = t), this.emitConfig();
            },
            emitConfig: function () {
              this.$emit('config', this.config);
            },
          },
        }),
      f = d,
      h = (a('H+ir'), a('KHd+')),
      m = Object(h['a'])(f, o, c, !1, null, null, null),
      v = m.exports,
      p = a('5shn'),
      g = Object(p['a'])(
        '\n\n## Import data\n\nThe importer can download historical market data directly from the exchange.\n\n'
      ),
      _ = {
        components: { importConfigBuilder: v, spinner: s['a'] },
        data: function () {
          return { intro: g, config: {} };
        },
        computed: {
          imports: function () {
            return this.$store.state.imports;
          },
        },
        methods: {
          daysApart: function (t) {
            var e = moment(t.to),
              a = moment(t.from);
            return e.diff(a, 'days');
          },
          updateConfig: function (t) {
            this.config = t;
          },
          run: function () {
            var t = this,
              e = this.daysApart(this.config.importer.daterange);
            if (e < 1)
              return alert('You can only import at least one day of data..');
            var a = this.$store.state.exchanges[this.config.watch.exchange];
            if (
              'exchangeMaxHistoryAge' in a &&
              moment(this.config.importer.daterange.from) <
                moment().subtract(a.exchangeMaxHistoryAge, 'days')
            )
              return alert(
                'Your date from is too old for ' +
                  this.config.watch.exchange +
                  '. It supports only the last ' +
                  a.exchangeMaxHistoryAge +
                  ' days..'
              );
            Object(i['b'])('import', this.config, function (e, a) {
              if (e) return alert(e);
              t.$store.commit('addImport', a),
                t.$router.push({ path: '/data/importer/import/'.concat(a.id) });
            });
          },
        },
      },
      k = _,
      y = (a('yomC'), Object(h['a'])(k, n, r, !1, null, null, null));
    e['a'] = y.exports;
  },
  jnJk: function (t, e, a) {},
  kiQV: function (t) {
    t.exports = {
      name: 'gekko-vue-ui',
      version: '0.2.3',
      private: !0,
      scripts: {
        serve: 'vue-cli-service serve',
        build: 'vue-cli-service build',
      },
      dependencies: {
        marked: '^0.4.0',
        superagent: '^3.8.3',
        'superagent-no-cache': 'github:uditalias/superagent-no-cache',
        vue: '^2.5.16',
        'vue-router': '^3.0.1',
        vuex: '^3.0.1',
      },
      devDependencies: {
        '@vue/cli-plugin-babel': '^3.0.0-beta.15',
        '@vue/cli-service': '^3.0.0-beta.15',
        'babel-plugin-transform-commonjs-es2015-modules': '^4.0.1',
        'copy-webpack-plugin': '^4.5.2',
        pug: '^2.0.3',
        'pug-plain-loader': '^1.0.0',
        'vue-template-compiler': '^2.5.16',
      },
      postcss: { plugins: { autoprefixer: {} } },
      browserslist: ['> 1%', 'last 2 versions', 'not ie <= 8'],
    };
  },
  ldlP: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('section', { staticClass: 'contain grd-row' }, [
          a('div', {
            staticClass: 'grd-row-col-3-6',
            domProps: { innerHTML: t._s(t.left) },
          }),
          t._m(0),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'grd-row-col-3-6 txt--center' }, [
            a('img', { attrs: { src: 'static/gekko.jpg' } }),
            a('p', [
              a('em', [
                t._v('The most valuable commodity I know of is information.'),
              ]),
            ]),
          ]);
        },
      ],
      i = a('5shn'),
      s = Object(i['a'])(
        '\n\n## GrowUP\n\nGrowUP is a Bitcoin trading bot and backtesting platform that\nconnects to popular Bitcoin exchanges. It is written in javascript\nand runs on nodejs.\n\n[Find out more](https://gekko.wizb.it/).\n\n*GrowUP is 100% free (open source), if you paid for this you have been scammed.*\n\n'
      ),
      o = {
        data: function () {
          return { left: s };
        },
      },
      c = o,
      u = a('KHd+'),
      l = Object(u['a'])(c, n, r, !1, null, null, null);
    e['a'] = l.exports;
  },
  mf2E: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'my2' }, [
          t.data
            ? t._e()
            : a('div', { staticClass: 'contain' }, [
                a('h1', [t._v('Unknown Gekko instance')]),
                a('p', [t._v("Gekko doesn't know what gekko this is...")]),
              ]),
          t.data
            ? a(
                'div',
                [
                  a('h2', { staticClass: 'contain' }, [
                    t._v('Gekko ' + t._s(t.type)),
                  ]),
                  t.isArchived
                    ? a(
                        'div',
                        { staticClass: 'contain brdr--mid-gray p1 bg--orange' },
                        [
                          t._v(
                            'This is an archived Gekko, it is currently not running anymore.'
                          ),
                        ]
                      )
                    : t._e(),
                  t.data.errorMessage
                    ? a(
                        'div',
                        { staticClass: 'contain brdr--mid-gray p1 bg--orange' },
                        [
                          t._v(
                            'This is Gekko crashed with the following error: ' +
                              t._s(t.data.errorMessage)
                          ),
                        ]
                      )
                    : t._e(),
                  a('div', { staticClass: 'grd contain' }, [
                    a('div', { staticClass: 'grd-row' }, [
                      a('div', { staticClass: 'grd-row-col-3-6' }, [
                        a('h3', [t._v('Market')]),
                        a('div', { staticClass: 'grd-row' }, [
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v('Exchange'),
                          ]),
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v(t._s(t.config.watch.exchange)),
                          ]),
                        ]),
                        a('div', { staticClass: 'grd-row' }, [
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v('Currency'),
                          ]),
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v(t._s(t.config.watch.currency)),
                          ]),
                        ]),
                        a('div', { staticClass: 'grd-row' }, [
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v('Asset'),
                          ]),
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v(t._s(t.config.watch.asset)),
                          ]),
                        ]),
                        a('div', { staticClass: 'grd-row' }, [
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v('Type'),
                          ]),
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            t._v(t._s(t.type)),
                          ]),
                        ]),
                      ]),
                      a(
                        'div',
                        { staticClass: 'grd-row-col-3-6' },
                        [
                          a('h3', [t._v('Runtime')]),
                          t.isLoading ? a('spinner') : t._e(),
                          t.isLoading
                            ? t._e()
                            : [
                                t.initialEvents.candle
                                  ? a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-2-6' },
                                        [t._v('Watching since')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-4-6' },
                                        [
                                          t._v(
                                            t._s(
                                              t.fmt(
                                                t.initialEvents.candle.start
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : t._e(),
                                t.latestEvents.candle
                                  ? a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-2-6' },
                                        [t._v('Received data until')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-4-6' },
                                        [
                                          t._v(
                                            t._s(
                                              t.fmt(t.latestEvents.candle.start)
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : t._e(),
                                t.latestEvents.candle
                                  ? a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-2-6' },
                                        [t._v('Data spanning')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-4-6' },
                                        [
                                          t._v(
                                            t._s(
                                              t.humanizeDuration(
                                                t
                                                  .moment(
                                                    t.latestEvents.candle.start
                                                  )
                                                  .diff(
                                                    t.moment(
                                                      t.initialEvents.candle
                                                        .start
                                                    )
                                                  )
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : t._e(),
                                t.isStratrunner
                                  ? [
                                      a('div', { staticClass: 'grd-row' }, [
                                        a(
                                          'div',
                                          { staticClass: 'grd-row-col-2-6' },
                                          [t._v('Amount of trades')]
                                        ),
                                        a(
                                          'div',
                                          { staticClass: 'grd-row-col-4-6' },
                                          [t._v(t._s(t.trades.length))]
                                        ),
                                      ]),
                                      a('div', { staticClass: 'grd-row' }, [
                                        a(
                                          'div',
                                          { staticClass: 'grd-row-col-2-6' },
                                          [t._v('Candle size')]
                                        ),
                                        a(
                                          'div',
                                          { staticClass: 'grd-row-col-4-6' },
                                          [
                                            t._v(
                                              t._s(
                                                t.config.tradingAdvisor
                                                  .candleSize
                                              )
                                            ),
                                          ]
                                        ),
                                      ]),
                                      a('div', { staticClass: 'grd-row' }, [
                                        a(
                                          'div',
                                          { staticClass: 'grd-row-col-2-6' },
                                          [t._v('History size')]
                                        ),
                                        a(
                                          'div',
                                          { staticClass: 'grd-row-col-4-6' },
                                          [
                                            t._v(
                                              t._s(
                                                t.config.tradingAdvisor
                                                  .historySize
                                              )
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  : t._e(),
                              ],
                        ],
                        2
                      ),
                    ]),
                    t.warmupRemaining
                      ? a(
                          'div',
                          {
                            staticClass: 'contain brdr--mid-gray p1 bg--orange',
                          },
                          [
                            t._v(
                              'This stratrunner is still warming up for the next '
                            ),
                            a('i', [
                              t._v(
                                t._s(t.warmupRemaining.replace(',', ' and '))
                              ),
                            ]),
                            t._v(', it will not trade until it is warmed up.'),
                          ]
                        )
                      : t._e(),
                    t.isStratrunner
                      ? a('div', { staticClass: 'grd-row' }, [
                          a('div', { staticClass: 'grd-row-col-3-6' }, [
                            a('h3', [t._v('Strategy')]),
                            a('div', { staticClass: 'grd-row' }, [
                              a('div', { staticClass: 'grd-row-col-3-6' }, [
                                t._v('Name'),
                              ]),
                              a('div', { staticClass: 'grd-row-col-3-6' }, [
                                a('strong', [t._v(t._s(t.stratName))]),
                              ]),
                            ]),
                            t._v('Parameters'),
                            a('pre', [t._v(t._s(t.stratParams))]),
                          ]),
                          a(
                            'div',
                            { staticClass: 'grd-row-col-3-6' },
                            [
                              a('h3', [t._v('Profit report')]),
                              t.report
                                ? t._e()
                                : [
                                    a('p', [
                                      t.isArchived
                                        ? a('em', [
                                            t._v(
                                              'This Gekko never executed a trade..'
                                            ),
                                          ])
                                        : t._e(),
                                      t.isArchived
                                        ? t._e()
                                        : a('em', [
                                            t._v(
                                              'Waiting for at least one trade..'
                                            ),
                                          ]),
                                    ]),
                                  ],
                              t.report
                                ? [
                                    a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [t._v('Start balance')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [
                                          t._v(
                                            t._s(t.round(t.report.startBalance))
                                          ),
                                        ]
                                      ),
                                    ]),
                                    a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [t._v('Current balance')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [t._v(t._s(t.round(t.report.balance)))]
                                      ),
                                    ]),
                                    a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [t._v('Market')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [
                                          t._v(
                                            t._s(
                                              t.round(
                                                (t.report.market / 100) *
                                                  t.report.startPrice
                                              )
                                            ) +
                                              ' ' +
                                              t._s(t.config.watch.currency) +
                                              ' (' +
                                              t._s(t.round(t.report.market)) +
                                              ' %)'
                                          ),
                                        ]
                                      ),
                                    ]),
                                    a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [t._v('Profit')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [
                                          t._v(
                                            t._s(t.round(t.report.profit)) +
                                              ' ' +
                                              t._s(t.config.watch.currency) +
                                              ' (' +
                                              t._s(
                                                t.round(t.report.relativeProfit)
                                              ) +
                                              ' %)'
                                          ),
                                        ]
                                      ),
                                    ]),
                                    a('div', { staticClass: 'grd-row' }, [
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [t._v('Alpha')]
                                      ),
                                      a(
                                        'div',
                                        { staticClass: 'grd-row-col-3-6' },
                                        [
                                          t._v(
                                            t._s(t.round(t.report.alpha)) +
                                              ' ' +
                                              t._s(t.config.watch.currency)
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                : t._e(),
                            ],
                            2
                          ),
                        ])
                      : t._e(),
                    !t.isStratrunner || t.watcher || t.isArchived
                      ? t._e()
                      : a('p', [
                          t._v(
                            'WARNING: stale gekko, not attached to a watcher, please report '
                          ),
                          a(
                            'a',
                            {
                              attrs: {
                                href: 'https://github.com/askmike/gekko/issues',
                              },
                            },
                            [t._v('here')]
                          ),
                          t._v('.'),
                        ]),
                    t.isArchived
                      ? t._e()
                      : a('p', [
                          a(
                            'a',
                            {
                              staticClass: 'w100--s my1 btn--red',
                              on: { click: t.stopGekko },
                            },
                            [t._v('Stop Gekko')]
                          ),
                        ]),
                    t.isArchived
                      ? a('p', [
                          a(
                            'a',
                            {
                              staticClass: 'w100--s my1 btn--red',
                              on: { click: t.deleteGekko },
                            },
                            [t._v('Delete Gekko')]
                          ),
                        ])
                      : t._e(),
                    t.isStratrunner && t.watcher && !t.isArchived
                      ? a('p', [
                          a(
                            'em',
                            [
                              t._v('This gekko gets market data from '),
                              a(
                                'router-link',
                                {
                                  attrs: { to: '/live-gekkos/' + t.watcher.id },
                                },
                                [t._v('this market watcher')]
                              ),
                            ],
                            1
                          ),
                          t._v('.'),
                        ])
                      : t._e(),
                  ]),
                  t.isLoading
                    ? t._e()
                    : [
                        a('h3', { staticClass: 'contain' }, [
                          t._v('Market graph'),
                        ]),
                        'fetching' === t.candleFetch ? a('spinner') : t._e(),
                        'fetched' === t.candleFetch
                          ? [
                              a('chart', {
                                attrs: { data: t.chartData, height: 300 },
                              }),
                            ]
                          : t._e(),
                        t.isStratrunner
                          ? a('roundtrips', {
                              attrs: { roundtrips: t.roundtrips },
                            })
                          : t._e(),
                      ],
                ],
                2
              )
            : t._e(),
        ]);
      },
      r = [],
      i = (a('a1Th'), a('dRSK'), a('Kw5r')),
      s = a('LvDl'),
      o = a.n(s),
      c = a('wiDz'),
      u = a('MB/c'),
      l = a('UeuA'),
      d = a('vf3E'),
      f = a('0Bu0'),
      h = {
        created: function () {
          this.isLoading || this.getCandles();
        },
        components: {
          spinner: u['a'],
          chart: l['a'],
          paperTradeSummary: f['a'],
          roundtrips: d['a'],
        },
        data: function () {
          return { candleFetch: 'idle', candles: !1 };
        },
        computed: {
          id: function () {
            return this.$route.params.id;
          },
          gekkos: function () {
            return this.$store.state.gekkos;
          },
          archivedGekkos: function () {
            return this.$store.state.archivedGekkos;
          },
          data: function () {
            return (
              !!this.gekkos &&
              (o.a.has(this.gekkos, this.id)
                ? this.gekkos[this.id]
                : !!o.a.has(this.archivedGekkos, this.id) &&
                  this.archivedGekkos[this.id])
            );
          },
          config: function () {
            return o.a.get(this, 'data.config');
          },
          latestEvents: function () {
            return o.a.get(this, 'data.events.latest');
          },
          initialEvents: function () {
            return o.a.get(this, 'data.events.initial');
          },
          trades: function () {
            return o.a.get(this, 'data.events.tradeCompleted') || [];
          },
          roundtrips: function () {
            return o.a.get(this, 'data.events.roundtrip') || [];
          },
          isLive: function () {
            return o.a.has(this.gekkos, this.id);
          },
          type: function () {
            return this.data.logType;
          },
          isStratrunner: function () {
            return 'watcher' !== this.type;
          },
          isArchived: function () {
            return this.data.stopped;
          },
          warmupRemaining: function () {
            if (!this.isStratrunner) return !1;
            if (this.isArchived) return !1;
            if (this.initialEvents.stratWarmupCompleted) return !1;
            if (!this.initialEvents.candle) return !1;
            var t = o.a.get(this.config, 'tradingAdvisor.historySize');
            if (!t) return !1;
            var e = o.a.get(this.config, 'tradingAdvisor.candleSize') * t;
            return humanizeDuration(
              moment(this.initialEvents.candle.start)
                .add(e, 'm')
                .diff(moment()),
              { largest: 2 }
            );
          },
          chartData: function () {
            return { candles: this.candles, trades: this.trades };
          },
          report: function () {
            return o.a.get(this.latestEvents, 'performanceReport');
          },
          stratName: function () {
            if (this.data) return this.data.config.tradingAdvisor.method;
          },
          stratParams: function () {
            if (!this.data) return 'Loading...';
            var t = i['a'].util.extend({}, this.data.config[this.stratName]);
            return (
              delete t.__empty,
              o.a.isEmpty(t) ? 'No parameters' : JSON.stringify(t, null, 4)
            );
          },
          isLoading: function () {
            return (
              !this.data ||
              !o.a.get(this.data, 'events.initial.candle') ||
              !o.a.get(this.data, 'events.latest.candle')
            );
          },
          watcher: function () {
            var t = this;
            if (!this.isStratrunner) return !1;
            var e = i['a'].util.extend({}, this.data.config.watch);
            return o.a.find(this.gekkos, function (a) {
              return a.id !== t.id && o.a.isEqual(e, a.config.watch);
            });
          },
          hasLeechers: function () {
            var t = this;
            if (this.isStratrunner) return !1;
            var e = i['a'].util.extend({}, this.data.config.watch);
            return o.a.find(this.gekkos, function (a) {
              return a.id !== t.id && o.a.isEqual(e, a.config.watch);
            });
          },
        },
        watch: {
          'data.events.latest.candle.start': function () {
            setTimeout(this.getCandles, o.a.random(100, 2e3));
          },
        },
        methods: {
          round: function (t) {
            return (+t).toFixed(5);
          },
          humanizeDuration: function (t, e) {
            return window.humanizeDuration(t, e);
          },
          moment: (function (t) {
            function e(e) {
              return t.apply(this, arguments);
            }
            return (
              (e.toString = function () {
                return t.toString();
              }),
              e
            );
          })(function (t) {
            return moment.utc(t);
          }),
          fmt: function (t) {
            return moment.utc(t).format('YYYY-MM-DD HH:mm');
          },
          getCandles: function () {
            var t = this;
            if (!this.isLoading && 'fetching' !== this.candleFetch) {
              this.candleFetch = 'fetching';
              var e = this.data.events.latest.candle.start,
                a = this.data.events.initial.candle.start,
                n = 1;
              'watcher' !== this.type &&
                (n = this.data.config.tradingAdvisor.candleSize);
              var r = {
                watch: this.data.config.watch,
                daterange: { to: e, from: a },
                candleSize: n,
              };
              setTimeout(function () {
                Object(c['b'])('getCandles', r, function (e, a) {
                  if (
                    ((t.candleFetch = 'fetched'),
                    !a || a.error || !o.a.isArray(a))
                  )
                    return console.log(a);
                  t.candles = a.map(function (t) {
                    return (t.start = moment.unix(t.start).utc().format()), t;
                  });
                });
              }, o.a.random(150, 2500));
            }
          },
          stopGekko: function () {
            if (this.hasLeechers)
              return alert(
                'This Gekko is fetching market data for multiple stratrunners, stop these first.'
              );
            confirm('Are you sure you want to stop this Gekko?') &&
              Object(c['b'])(
                'stopGekko',
                { id: this.data.id },
                function (t, e) {
                  console.log('stopped gekko');
                }
              );
          },
          deleteGekko: function () {
            var t = this;
            if (!this.isArchived)
              return alert('This Gekko is still running, stop it first!');
            confirm('Are you sure you want to delete this Gekko?') &&
              Object(c['b'])(
                'deleteGekko',
                { id: this.data.id },
                function (e, a) {
                  t.$router.push({ path: '/live-gekkos/' });
                }
              );
          },
        },
      },
      m = h,
      v = (a('/Dpa'), a('KHd+')),
      p = Object(v['a'])(m, n, r, !1, null, null, null);
    e['a'] = p.exports;
  },
  ngcj: function (t, e, a) {
    'use strict';
    var n = a('EAJ1'),
      r = a.n(n);
    r.a;
  },
  nzng: function (t, e, a) {},
  pd3X: function (t, e, a) {},
  pyMo: function (t, e, a) {},
  q431: function (t, e, a) {
    'use strict';
    var n = a('ydmZ'),
      r = a.n(n);
    r.a;
  },
  qDq4: function (t, e, a) {
    'use strict';
    var n = a('nzng'),
      r = a.n(n);
    r.a;
  },
  r0f2: function (t, e, a) {
    'use strict';
    a.d(e, 'b', function () {
      return i;
    }),
      a.d(e, 'a', function () {
        return r;
      });
    var n,
      r,
      i,
      s = window.CONFIG.ui,
      o = ''
        .concat(s.host)
        .concat(80 === s.port ? '' : ':'.concat(s.port))
        .concat(s.path);
    (n = s.ssl ? 'https://'.concat(o) : 'http://'.concat(o)),
      (r = n + 'api/'),
      (i = s.ssl ? 'wss://'.concat(o, 'api') : 'ws://'.concat(o, 'api'));
  },
  rloZ: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'grd' }, [
          a(
            'div',
            { staticClass: 'px1' },
            [
              a('h3', [t._v('Paper trader')]),
              'closed' === t.toggle
                ? a(
                    'a',
                    {
                      staticClass: 'btn--primary',
                      attrs: { href: '#' },
                      on: {
                        click: function (e) {
                          return e.preventDefault(), t.switchToggle(e);
                        },
                      },
                    },
                    [t._v('Change paper trader settings')]
                  )
                : t._e(),
              'open' === t.toggle
                ? [
                    a('p', [t._v('Settings:')]),
                    a('textarea', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: t.rawPaperTraderParams,
                          expression: 'rawPaperTraderParams',
                        },
                      ],
                      staticClass: 'params',
                      domProps: { value: t.rawPaperTraderParams },
                      on: {
                        input: function (e) {
                          e.target.composing ||
                            (t.rawPaperTraderParams = e.target.value);
                        },
                      },
                    }),
                    t.rawPaperTraderParamsError
                      ? a('p', { staticClass: 'bg--red p1' }, [
                          t._v(t._s(t.rawPaperTraderParamsError.message)),
                        ])
                      : t._e(),
                  ]
                : t._e(),
            ],
            2
          ),
        ]);
      },
      r = [],
      i = (a('LvDl'), a('wiDz')),
      s = {
        created: function () {
          var t = this;
          Object(i['a'])('configPart/paperTrader', function (e, a) {
            t.rawPaperTraderParams = a.part;
          });
        },
        data: function () {
          return {
            rawPaperTraderParams: '',
            rawPaperTraderParamsError: !1,
            paperTraderParams: {},
            toggle: 'closed',
          };
        },
        watch: {
          rawPaperTraderParams: function () {
            this.emitConfig();
          },
        },
        methods: {
          switchToggle: function () {
            'open' === this.toggle
              ? (this.toggle = 'closed')
              : (this.toggle = 'open');
          },
          emitConfig: function () {
            this.parseParams(), this.$emit('settings', this.paperTraderParams);
          },
          parseParams: function () {
            try {
              (this.paperTraderParams = toml.parse(this.rawPaperTraderParams)),
                (this.paperTraderParams.reportRoundtrips = !0),
                (this.rawPaperTraderParamsError = !1);
            } catch (t) {
              (this.rawPaperTraderParamsError = t),
                (this.paperTraderParams = {});
            }
          },
        },
      },
      o = s,
      c = (a('0zrD'), a('KHd+')),
      u = Object(c['a'])(o, n, r, !1, null, null, null);
    e['a'] = u.exports;
  },
  spvI: function (t, e, a) {
    'use strict';
    a('Vd3H'), a('rGqo');
    var n = a('wiDz'),
      r = {
        data: function () {
          return {
            datasets: [],
            datasetScanstate: 'idle',
            unscannableMakets: [],
          };
        },
        methods: {
          scan: function () {
            var t = this;
            (this.datasetScanstate = 'scanning'),
              Object(n['b'])('scansets', {}, function (e, a) {
                (t.datasetScanstate = 'scanned'),
                  (t.unscannableMakets = a.errors);
                var n = [];
                a.datasets.forEach(function (t) {
                  t.ranges.forEach(function (e, a) {
                    n.push({
                      exchange: t.exchange,
                      currency: t.currency,
                      asset: t.asset,
                      from: moment.unix(e.from).utc(),
                      to: moment.unix(e.to).utc(),
                      id: t.exchange + t.asset + t.currency + a,
                    });
                  });
                }),
                  (n = n.filter(function (t) {
                    if (t.to.diff(t.from, 'hours') > 2) return !0;
                  })),
                  (n = n
                    .sort(function (t, e) {
                      var a = t.to.diff(t.from),
                        n = e.to.diff(e.from);
                      return a < n ? -1 : a > n ? 1 : 0;
                    })
                    .reverse()),
                  (t.datasets = n);
              });
          },
        },
      };
    e['a'] = r;
  },
  tr8f: function (t, e, a) {
    'use strict';
    var n = a('h8ks'),
      r = a.n(n);
    r.a;
  },
  tr8z: function (t, e, a) {
    'use strict';
    var n = a('Ug4+'),
      r = a.n(n);
    r.a;
  },
  uMTv: function (t, e, a) {
    'use strict';
    var n = a('pyMo'),
      r = a.n(n);
    r.a;
  },
  uXxc: function (t, e, a) {},
  vf3E: function (t, e, a) {
    'use strict';
    var n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', { staticClass: 'contain roundtrips' }, [
          a('h2', [t._v('Roundtrips')]),
          t.roundtrips.length
            ? a('table', [
                a(
                  'thead',
                  [
                    t._m(0),
                    t._l(t.roundtrips, function (e) {
                      return a(
                        'tr',
                        [
                          a('td', [t._v(t._s(t.fmt(e.entryAt)))]),
                          a('td', [t._v(t._s(t.fmt(e.exitAt)))]),
                          a('td', [t._v(t._s(t.diff(e.duration)))]),
                          a('td', [t._v(t._s(t.round(e.entryBalance)))]),
                          a('td', [t._v(t._s(t.round(e.exitBalance)))]),
                          -1 === Math.sign(e.pnl)
                            ? [
                                a('td', { staticClass: 'loss' }, [
                                  t._v(
                                    t._s(Math.sign(e.pnl) * e.pnl.toFixed(2))
                                  ),
                                ]),
                                a('td', { staticClass: 'loss' }, [
                                  t._v(t._s(e.profit.toFixed(2)) + '%'),
                                ]),
                              ]
                            : [
                                a('td', { staticClass: 'profit' }, [
                                  t._v(t._s(e.pnl.toFixed(2))),
                                ]),
                                a('td', { staticClass: 'profit' }, [
                                  t._v(t._s(e.profit.toFixed(2)) + '%'),
                                ]),
                              ],
                        ],
                        2
                      );
                    }),
                  ],
                  2
                ),
              ])
            : t._e(),
          t.roundtrips.length
            ? t._e()
            : a('div', [a('p', [t._v('Not enough data to display')])]),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('tr', [
            a('th', [t._v('Entry at (UTC)')]),
            a('th', [t._v('Exit at (UTC)')]),
            a('th', [t._v('Exposure')]),
            a('th', [t._v('Entry balance')]),
            a('th', [t._v('Exit balance')]),
            a('th', [t._v('P&L')]),
            a('th', [t._v('Profit')]),
          ]);
        },
      ],
      i = a('LvDl'),
      s = a.n(i),
      o = {
        props: ['roundtrips'],
        data: function () {
          return {};
        },
        methods: {
          diff: function (t) {
            return moment.duration(t).humanize();
          },
          humanizeDuration: function (t) {
            return window.humanizeDuration(t);
          },
          fmt: function (t) {
            var e;
            return (
              (e = s.a.isNumber(t) ? moment.unix(t) : moment(t).utc()),
              e.utc().format('YYYY-MM-DD HH:mm')
            );
          },
          round: function (t) {
            return (+t).toFixed(3);
          },
        },
      },
      c = o,
      u = (a('dW8q'), a('KHd+')),
      l = Object(u['a'])(c, n, r, !1, null, null, null);
    e['a'] = l.exports;
  },
  vwRV: function (t, e, a) {},
  w3yp: function (t, e, a) {},
  wVP4: function (t, e, a) {
    'use strict';
    var n = a('vwRV'),
      r = a.n(n);
    r.a;
  },
  wVPO: function (t, e, a) {
    'use strict';
    var n = a('uXxc'),
      r = a.n(n);
    r.a;
  },
  wiDz: function (t, e, a) {
    'use strict';
    a.d(e, 'b', function () {
      return u;
    }),
      a.d(e, 'a', function () {
        return l;
      });
    var n = a('24Ii'),
      r = a.n(n),
      i = a('TrxG'),
      s = a.n(i),
      o = a('r0f2'),
      c = function (t) {
        return function (e, a) {
          if (e) return t(e);
          if (!a.text) return t('no data');
          var n = JSON.parse(a.text);
          t(!1, n);
        };
      },
      u = function (t, e, a) {
        r.a
          .post(o['a'] + t)
          .use(s.a)
          .send(e)
          .end(c(a));
      },
      l = function (t, e) {
        r.a
          .get(o['a'] + t)
          .use(s.a)
          .end(c(e));
      };
  },
  ydmZ: function (t, e, a) {},
  yomC: function (t, e, a) {
    'use strict';
    var n = a('EfWa'),
      r = a.n(n);
    r.a;
  },
  yuKf: function (t, e, a) {},
});
//# sourceMappingURL=app.5e99ecf7.js.map
