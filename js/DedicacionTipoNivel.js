(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DedicacionTipoNivel"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mdiDownload: _mdi_js__WEBPACK_IMPORTED_MODULE_8__["mdiDownload"]
    };
  },
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(['dark', 'colors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['docentes', 'mobileSize'])), {}, {
    barChartData: function barChartData() {
      return {
        cols: [{
          id: 'Tipo de dedicación por nivel',
          label: 'Tipo de dedicación por nivel',
          type: 'string'
        }, {
          type: 'string',
          role: 'tooltip',
          p: {
            html: true
          }
        }, {
          id: 'IDs (exclusiva y semi-exclusiva)',
          label: 'IDs (exclusiva y semi-exclusiva)',
          type: 'number'
        }, {
          role: 'annotation'
        }, {
          id: 'Simple',
          label: 'Simple',
          type: 'number'
        }, {
          role: 'annotation'
        }],
        rows: [{
          c: [{
            v: 0,
            f: 'Profesores (A+B+C+Prof. Titular+Prof. Asociado+Prof. Adjunto)'
          }, {
            v: 0,
            f: this.createTooltip('Profesores (A+B+C+Prof. Titular+Prof. Asociado+Prof. Adjunto)', this.dedicacionTipoNivelData.prof)
          }, {
            v: this.dedicacionTipoNivelData.prof.ids.per,
            f: this.dedicacionTipoNivelData.prof.ids.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoNivelData.prof.ids.per))
          }, {
            v: this.dedicacionTipoNivelData.prof.sim.per,
            f: this.dedicacionTipoNivelData.prof.sim.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoNivelData.prof.sim.per))
          }]
        }, {
          c: [{
            v: 0,
            f: 'D1+JTP'
          }, {
            v: 0,
            f: this.createTooltip('D1+JTP', this.dedicacionTipoNivelData.jtp)
          }, {
            v: this.dedicacionTipoNivelData.jtp.ids.per,
            f: this.dedicacionTipoNivelData.jtp.ids.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoNivelData.jtp.ids.per))
          }, {
            v: this.dedicacionTipoNivelData.jtp.sim.per,
            f: this.dedicacionTipoNivelData.jtp.sim.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoNivelData.jtp.sim.per))
          }]
        }, {
          c: [{
            v: 0,
            f: 'D2+Ayudante de 1ra'
          }, {
            v: 0,
            f: this.createTooltip('D2+Ayudante de 1ra', this.dedicacionTipoNivelData.ayu)
          }, {
            v: this.dedicacionTipoNivelData.ayu.ids.per,
            f: this.dedicacionTipoNivelData.ayu.ids.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoNivelData.ayu.ids.per))
          }, {
            v: this.dedicacionTipoNivelData.ayu.sim.per,
            f: this.dedicacionTipoNivelData.ayu.sim.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoNivelData.ayu.sim.per))
          }]
        }]
      };
    },
    barChartOptions: function barChartOptions() {
      return {
        chartArea: {
          left: 200,
          right: 40,
          top: 40,
          bottom: 40
        },
        colors: this.colors,
        // colors: state.colores.investigadoresSexo,
        focusTarget: 'category',
        tooltip: {
          isHtml: true // textStyle: { color: 'white', bold: false }

        },
        // title: '',
        backgroundColor: {
          fill: 'transparent'
        },
        height: 350,
        isStacked: 'percent',
        legend: {
          position: 'top',
          maxLines: 3,
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        },
        bar: {
          groupWidth: '50%'
        },
        annotations: {
          // style: 'line'
          highContrast: false,
          textStyle: {
            color: 'white'
          }
        },
        hAxis: {
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          },
          slantedText: false
        },
        vAxis: {
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        }
      };
    },
    dedicacionTipoNivelData: function dedicacionTipoNivelData() {
      // PROFESORES
      //     "Niv A gr 13 cat 26",
      //     "Niv B gr 10 cat 20",
      //     "Niv B gr 10 cat 22",
      //     "Niv B gr 12 cat 24",
      //     "Niv B gr 12 cat 26",
      //     "Niv C gr 07 cat 14",
      //     "Niv C gr 07 cat 15",
      //     "Niv C gr 08 cat 16",
      //     "Niv C gr 08 cat 17",
      //     "Niv C gr 09 cat 18",
      //     "Profesor Asociado",
      //     "ASOCIADO SIMPLE",
      //     "Profesor Titular",
      //     "Profesor Adjunto",
      //     "ADJUNTO SIMPLE",
      // D1+JTP
      //     "Niv D1 gr 04 cat 08",
      //     "Niv D1 gr 04 cat 07",
      //     "Niv D1 gr 05 cat 09",
      //     "Jefe Trab. Practicos",
      //     "Jef Trab Pract NM",
      //     "JTP SIMPLE",
      // D2+ Ayudante de 1ra
      //     "Niv D2 gr 02 cat 03",
      //     "Niv D2 gr 03 cat 05",
      //     "Ayudante de 1ra.",
      //     "AYUDANTE DE 1º SIMPL",
      // otros
      //     "Cat 6 CCT 366/06",
      //     "Cat 5 CCT 366/06",
      //     "Cat 3 CCT 366/06",
      //     "Cat 2 CCT 366/06",
      //     "Cat 4 CCT 366/06",
      //     "Cat 1 CCT 366/06",
      //     "Cat 7 CCT 366/06",
      //     "Director Col Secund",
      //     "Vicedirector",
      //     "Regente",
      //     "Prof nivel medio",
      //     "Bibliotecario",
      //     "Secretario Universid",
      //     "Decano de Instituto",
      //     "Secretario Instituto",
      //     "PROF EQUIPO ORIENTAC",
      //     "Prof. Eq. Orientacio",
      //     "Jefe/Coord/Dir dept",
      //     "Rector",
      //     "Jefe Gral Taller EP",
      //     "Jef Gral Ens Pract",
      //     "Prest. Serv. Sec LyT",
      //     "Prest Serv Com Mem",
      //     "Prest. Serv. Genero",
      //     "Prest Serv Dep",
      //     "Prest. Serv. Deporte",
      //     "Contr.Pres.Serv ASJU",
      //     "Prest. Serv. Dep",
      //     "Cont. Proy. Esp.",
      //     "Prest. Serv. Multi",
      //     "AYUDANTE 2º SIMPLE",
      //     "Prest de Serv Medios",
      //     "Maestros Ens Practic",
      //     "Prest. Serv. Cult",
      //     "Contr Prest Serv Med",
      //     "CHOFER",
      //     "MAF PS E",
      //     "MAF PS C",
      //     "MAF PS D"
      var docentesNivel = this.docentes.reduce(function (acc, cur) {
        var nivA = new RegExp('Niv A', 'gm');
        var nivB = new RegExp('Niv B', 'gm');
        var nivC = new RegExp('Niv C', 'gm');
        var nivD1 = new RegExp('Niv D1', 'gm');
        var nivD2 = new RegExp('Niv D2', 'gm');
        var profesores = nivA.test(cur.descripcion_categoria) || nivB.test(cur.descripcion_categoria) || nivC.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Profesor Asociado' || cur.descripcion_categoria === 'ASOCIADO SIMPLE' || cur.descripcion_categoria === 'Profesor Titular' || cur.descripcion_categoria === 'Profesor Adjunto' || cur.descripcion_categoria === 'ADJUNTO SIMPLE';
        var d1jtp = nivD1.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Jefe Trab. Practicos' || cur.descripcion_categoria === 'Jef Trab Pract NM' || cur.descripcion_categoria === 'JTP SIMPLE';
        var d2ayu = nivD2.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Ayudante de 1ra.' || cur.descripcion_categoria === 'AYUDANTE DE 1º SIMPL';
        var excsem = cur.descripcion_dedicacion === 'Exclusiva' || cur.descripcion_dedicacion === 'Semi-Exclusiva' || cur.descripcion_dedicacion === 'Semi - Excl Conven';
        var simple = cur.descripcion_dedicacion === 'Simple';
        return profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          prof: {
            ids: acc.prof.ids + (excsem ? 1 : 0),
            sim: acc.prof.sim + (simple ? 1 : 0)
          }
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          jtp: {
            ids: acc.jtp.ids + (excsem ? 1 : 0),
            sim: acc.jtp.sim + (simple ? 1 : 0)
          }
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ayu: {
            ids: acc.ayu.ids + (excsem ? 1 : 0),
            sim: acc.ayu.sim + (simple ? 1 : 0)
          }
        }) : acc;
      }, {
        prof: {
          ids: 0,
          sim: 0
        },
        jtp: {
          ids: 0,
          sim: 0
        },
        ayu: {
          ids: 0,
          sim: 0
        }
      });
      return this.addPorcentajes(docentesNivel);
    }
  }),
  methods: {
    downloadIndicador: function downloadIndicador(indicador) {
      this.$store.dispatch('createPng', indicador);
    },
    addPorcentajes: function addPorcentajes(v) {
      return {
        prof: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.prof, v.prof.ids + v.prof.sim),
        jtp: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.jtp, v.jtp.ids + v.jtp.sim),
        ayu: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.ayu, v.ayu.ids + v.ayu.sim)
      };
    },
    createTooltip: function createTooltip(title, value) {
      return "<div style=\"min-width: 370px; padding: 10px 10px 10px 10px; font-size: 13px; color: black;\">\n      <h3>".concat(title, "</h3>\n      <ul>\n      <li>IDs (exculsiva y semi-exclusiva): ").concat(value.ids.per, "% (").concat(value.ids.abs, ")</li>\n      <li>Simple: ").concat(value.sim.per, "% (").concat(value.sim.abs, ")</li>\n      </li>\n      </ul></div>");
    },
    hiddeAnnotation: function hiddeAnnotation(v) {
      return v <= 7 ? '' : "".concat(v, "%");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=template&id=522c48de&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=template&id=522c48de& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-card", { attrs: { height: "100%" } }, [
    _c(
      "div",
      { attrs: { id: "gestion-docentes-dedicacion-tipo-nivel" } },
      [
        _c(
          "v-card-title",
          { staticClass: "breakword" },
          [
            _c(
              "v-row",
              { attrs: { "no-gutters": "" } },
              [
                _c("v-col", { attrs: { cols: "11" } }, [
                  _vm._v(" Tipo de dedicación por nivel / categoría. ")
                ]),
                _c(
                  "v-col",
                  { attrs: { cols: "1" } },
                  [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        attrs: {
                                          id: "downloadBtn",
                                          icon: "",
                                          fab: "",
                                          small: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.downloadIndicador(
                                              "gestion-docentes-dedicacion-tipo-nivel"
                                            )
                                          }
                                        }
                                      },
                                      "v-btn",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _c("v-icon", [
                                      _vm._v(_vm._s(_vm.mdiDownload))
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [_c("span", [_vm._v("Descargar indicador.")])]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _c("v-card-subtitle", [_vm._v("Distribución de los/as docentes.")]),
        _c(
          "v-card-text",
          [
            _c(
              "v-responsive",
              [
                _c("GChart", {
                  attrs: {
                    id: "charto",
                    data: _vm.barChartData,
                    options: _vm.barChartOptions,
                    type: "BarChart"
                  }
                })
              ],
              1
            ),
            _c(
              "v-responsive",
              { staticStyle: { width: "100%" } },
              [
                _c(
                  "v-simple-table",
                  { staticClass: "cellheading mt-2", attrs: { dense: "" } },
                  [
                    _c("thead", [
                      _c("tr", { staticClass: "caption" }, [
                        _c("th", { attrs: { rowspan: "2" } }, [
                          _vm._v(" Nivel / Categoría ")
                        ]),
                        _c("th", { attrs: { colspan: "2" } }, [
                          _vm._v(" IDs (exclusiva y semi-exclusiva) ")
                        ]),
                        _c("th", { attrs: { colspan: "2" } }, [
                          _vm._v(" Dedicación simple ")
                        ])
                      ]),
                      _c("tr", [
                        _c("th", [_vm._v("Valor Absoluto")]),
                        _c("th", [_vm._v("Procentaje")]),
                        _c("th", [_vm._v("Valor Absoluto")]),
                        _c("th", [_vm._v("Procentaje")])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [
                          _vm._v(
                            "Profesores (A+B+C+Prof. Titular+Prof. Asociado+Prof. Adjunto)"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.prof.ids.abs)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.prof.ids.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.prof.sim.abs)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.prof.sim.per) +
                              "%"
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("D1+JTP")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.jtp.ids.abs)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.jtp.ids.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.jtp.sim.abs)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.jtp.sim.per) +
                              "%"
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("D2+Ayudante de 1ra")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.ayu.ids.abs)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.ayu.ids.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.ayu.sim.abs)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoNivelData.ayu.sim.per) +
                              "%"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue":
/*!*******************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DedicacionTipoNivel_vue_vue_type_template_id_522c48de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DedicacionTipoNivel.vue?vue&type=template&id=522c48de& */ "./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=template&id=522c48de&");
/* harmony import */ var _DedicacionTipoNivel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DedicacionTipoNivel.vue?vue&type=script&lang=js& */ "./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DedicacionTipoNivel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DedicacionTipoNivel_vue_vue_type_template_id_522c48de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DedicacionTipoNivel_vue_vue_type_template_id_522c48de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoNivel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DedicacionTipoNivel.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoNivel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=template&id=522c48de&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=template&id=522c48de& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoNivel_vue_vue_type_template_id_522c48de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DedicacionTipoNivel.vue?vue&type=template&id=522c48de& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoNivel.vue?vue&type=template&id=522c48de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoNivel_vue_vue_type_template_id_522c48de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoNivel_vue_vue_type_template_id_522c48de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: calcPorcentaje, addPorcentajes, colorLuminance, unixDateToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPorcentaje", function() { return calcPorcentaje; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPorcentajes", function() { return addPorcentajes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorLuminance", function() { return colorLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unixDateToDate", function() { return unixDateToDate; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.from-entries */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");















/** Calcula los porcentajes y arregla la precision en dos digitos.
 * @param {number} num Parcial (numerador)
 * @param {number} den Total (denominador)
 * @returns {number} porcentaje
 */
var calcPorcentaje = function calcPorcentaje(num, den) {
  return Number(Number(Number(num) / Number(den) * 100).toFixed(2));
};
/** Calcula los porcentajes del objeto con los valores absolutos.
 * @param {categoria: number} valoresAbsolutosObj Valores absolutos por categoria
 * @param {number} total El valor total de porcentaje (100%)
 * @returns [{categoria: {abs: number, per: number}}] Array con valores absolutos y porcentaje por categoria.
 */

var calcPorcentajeObj = function calcPorcentajeObj(valoresAbsolutosObj, total) {
  var valoresAbsolutosArray = Object.entries(valoresAbsolutosObj);
  var porcentajesArray = valoresAbsolutosArray.map(function (valorAbsoluto) {
    return [valorAbsoluto[0], {
      abs: valorAbsoluto[1],
      per: calcPorcentaje(valorAbsoluto[1], total)
    }];
  });
  return porcentajesArray;
};
/** Corrige el redondeo cuando la suma de porcentajes parciales da menos de 100% por un error de precision.
 * @param [{categoria: {abs: number, per: number}}] valores Valores absolutos y porcentajes por categoria.
 * @returns [{categoria: {abs: number, per: number}}] Valores absolutos y porcentajes corregidos por categoria.
 * */


var corregirRedondeo = function corregirRedondeo(valoresPorCategoria) {
  var sumaPorcentajes = valoresPorCategoria.reduce(function (acc, cur) {
    return acc + Number(Number(cur[1].per).toFixed(2));
  }, 0); // A veces el redondeo no suma 100% por problemas de precision.
  // Calcula la diferencia de 100 y los suma al primer elem del array.

  var diferenciaDeCien = Number(Number(100 - sumaPorcentajes).toFixed(2));
  return [// primer elemento con la suma del resto decimal.
  [valoresPorCategoria[0][0], {
    abs: valoresPorCategoria[0][1].abs,
    per: Number(Number(valoresPorCategoria[0][1].per + diferenciaDeCien).toFixed(2))
  }]].concat(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__["default"])(valoresPorCategoria.slice(1)));
};
/** Funcion para agregar los porcentajes.
 * @param {{categoria: valorAbsoluto}} valoresAbsolutos Valores absolutos.
 * @param {number} total Valor total del porcentaje (100%).
 * @param {{sort: boolean, sinredondeo: boolean}} [options] Opciones.
 * @param {boolean} options.sort Si debe ordenar los resultados de mayor a menor.
 * @param {boolean} options.sinredondeo Si la suma de los porcentajes parciales no debe dar 100%.
 * @returns {Object} porcentajes Valores Absolutos y porcentajes.
 * @returns {Object} porcentajes.categoria Nombre de la categoria.
 * @returns {number} porcentajes.categoria.abs Valor absoluto.
 * @returns {number} porcentajes.categoria.per Porcentaje.
 */


var addPorcentajes = function addPorcentajes(valoresAbsolutosObj, total) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    sort: false,
    sinredondeo: false
  };

  if (total === 0) {
    var keys = Object.keys(valoresAbsolutosObj);
    var setToZero = keys.map(function (k) {
      return [[k], {
        abs: 0,
        per: 0
      }];
    });
    return Object.fromEntries(setToZero);
  } else {
    var conPorcentajes = calcPorcentajeObj(valoresAbsolutosObj, total);
    var conSumaParcial = options.sinredondeo ? conPorcentajes : corregirRedondeo(conPorcentajes);
    return options.sort ? Object.fromEntries(conSumaParcial.sort(function (a, b) {
      return b[1].abs - a[1].abs;
    })) : Object.fromEntries(conSumaParcial);
  }
};
var colorLuminance = function colorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0; // convert to decimal and change luminosity

  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};
var unixDateToDate = function unixDateToDate(unixdate) {
  var milisegundos = Number(unixdate) * 1000;
  var date = new Date(milisegundos);
  var format = date.toLocaleString('es-AR', {
    timeZoneName: 'short'
  });
  return format;
};

/***/ })

}]);
//# sourceMappingURL=DedicacionTipoNivel.js.map