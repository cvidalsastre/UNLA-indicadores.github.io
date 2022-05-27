(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GeneroCategoriaDedicacion"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");





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
      mdiDownload: _mdi_js__WEBPACK_IMPORTED_MODULE_6__["mdiDownload"]
    };
  },
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(['dark', 'colors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['investigadoresCargos', 'mobileSize'])), {}, {
    barChartOptions: function barChartOptions() {
      return {
        chartArea: {
          left: 40,
          right: 20,
          top: 20,
          bottom: 40
        },
        // tooltip: {
        //   isHtml: true,
        //   textStyle: { color: 'white', bold: false }
        // },
        colors: [this.colors[0], this.colors[1], Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["colorLuminance"])(this.colors[0], 0.6), Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["colorLuminance"])(this.colors[1], 0.6)],
        // colors: ['#3306cc', '#a10912', '#3366cc', '#dc3912'],
        title: '',
        backgroundColor: {
          fill: 'transparent'
        },
        height: 350,
        // isStacked: 'absolute',
        legend: {
          position: 'top',
          maxLines: 3,
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        },
        bar: {
          groupWidth: '70%'
        },
        vAxis: {
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        },
        hAxis: {
          format: '0',
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        }
      };
    },
    barChartData: function barChartData() {
      return {
        cols: [{
          id: 'Franja etária',
          label: 'Franja etária',
          type: 'string'
        }, {
          id: 'FemeninoExc',
          label: 'Fem. Exclusiva',
          type: 'number'
        }, {
          id: 'MasculinoExc',
          label: 'Masc. Exclusiva',
          type: 'number'
        }, {
          id: 'FemeninoSem',
          label: 'Fem. Semiexclusiva',
          type: 'number'
        }, {
          id: 'MasculinoSem',
          label: 'Masc. Semiexclusiva',
          type: 'number'
        }],
        rows: [{
          c: [{
            v: 65,
            f: 'Profesores Titulares+A'
          }, {
            v: this.generoCategoriaDedicacionData.fem.tit.exc,
            f: this.generoCategoriaDedicacionData.fem.tit.exc
          }, {
            v: this.generoCategoriaDedicacionData.masc.tit.exc,
            f: this.generoCategoriaDedicacionData.masc.tit.exc
          }, {
            v: this.generoCategoriaDedicacionData.fem.tit.sem,
            f: this.generoCategoriaDedicacionData.fem.tit.sem
          }, {
            v: this.generoCategoriaDedicacionData.masc.tit.sem,
            f: this.generoCategoriaDedicacionData.masc.tit.sem
          }]
        }, {
          c: [{
            v: 65,
            f: 'Profesores Asociados+B'
          }, {
            v: this.generoCategoriaDedicacionData.fem.aso.exc,
            f: this.generoCategoriaDedicacionData.fem.aso.exc
          }, {
            v: this.generoCategoriaDedicacionData.masc.aso.exc,
            f: this.generoCategoriaDedicacionData.masc.aso.exc
          }, {
            v: this.generoCategoriaDedicacionData.fem.aso.sem,
            f: this.generoCategoriaDedicacionData.fem.aso.sem
          }, {
            v: this.generoCategoriaDedicacionData.masc.aso.sem,
            f: this.generoCategoriaDedicacionData.masc.aso.sem
          }]
        }, {
          c: [{
            v: 65,
            f: 'Profesores Adjuntos+C'
          }, {
            v: this.generoCategoriaDedicacionData.fem.adj.exc,
            f: this.generoCategoriaDedicacionData.fem.adj.exc
          }, {
            v: this.generoCategoriaDedicacionData.masc.adj.exc,
            f: this.generoCategoriaDedicacionData.masc.adj.exc
          }, {
            v: this.generoCategoriaDedicacionData.fem.adj.sem,
            f: this.generoCategoriaDedicacionData.fem.adj.sem
          }, {
            v: this.generoCategoriaDedicacionData.masc.adj.sem,
            f: this.generoCategoriaDedicacionData.masc.adj.sem
          }]
        }, {
          c: [{
            v: 65,
            f: 'JTP+D1'
          }, {
            v: this.generoCategoriaDedicacionData.fem.jtp.exc,
            f: this.generoCategoriaDedicacionData.fem.jtp.exc
          }, {
            v: this.generoCategoriaDedicacionData.masc.jtp.exc,
            f: this.generoCategoriaDedicacionData.masc.jtp.exc
          }, {
            v: this.generoCategoriaDedicacionData.fem.jtp.sem,
            f: this.generoCategoriaDedicacionData.fem.jtp.sem
          }, {
            v: this.generoCategoriaDedicacionData.masc.jtp.sem,
            f: this.generoCategoriaDedicacionData.masc.jtp.sem
          }]
        }, {
          c: [{
            v: 65,
            f: 'Ayudantes de 1ra+D2'
          }, {
            v: this.generoCategoriaDedicacionData.fem.ayu.exc,
            f: this.generoCategoriaDedicacionData.fem.ayu.exc
          }, {
            v: this.generoCategoriaDedicacionData.masc.ayu.exc,
            f: this.generoCategoriaDedicacionData.masc.ayu.exc
          }, {
            v: this.generoCategoriaDedicacionData.fem.ayu.sem,
            f: this.generoCategoriaDedicacionData.fem.ayu.sem
          }, {
            v: this.generoCategoriaDedicacionData.masc.ayu.sem,
            f: this.generoCategoriaDedicacionData.masc.ayu.sem
          }]
        }]
      };
    },
    generoCategoriaDedicacionData: function generoCategoriaDedicacionData() {
      return this.investigadoresCargos.reduce(function (acc, cur) {
        var nivA = new RegExp('Niv A', 'gm');
        var nivB = new RegExp('Niv B', 'gm');
        var nivC = new RegExp('Niv C', 'gm');
        var nivD1 = new RegExp('Niv D1', 'gm');
        var nivD2 = new RegExp('Niv D2', 'gm'); // const profesores = nivA.test(cur.descripcion_categoria) ||
        //   nivB.test(cur.descripcion_categoria) ||
        //   nivC.test(cur.descripcion_categoria) ||
        //   cur.descripcion_categoria === 'Profesor Asociado' ||
        //   cur.descripcion_categoria === 'ASOCIADO SIMPLE' ||
        //   cur.descripcion_categoria === 'Profesor Titular' ||
        //   cur.descripcion_categoria === 'Profesor Adjunto' ||
        //   cur.descripcion_categoria === 'ADJUNTO SIMPLE'

        var titular = nivA.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Profesor Titular';
        var asociado = nivB.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Profesor Asociado' || cur.descripcion_categoria === 'ASOCIADO SIMPLE';
        var adjunto = nivC.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Profesor Adjunto' || cur.descripcion_categoria === 'ADJUNTO SIMPLE';
        var d1jtp = nivD1.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Jefe Trab. Practicos' || cur.descripcion_categoria === 'Jef Trab Pract NM' || cur.descripcion_categoria === 'JTP SIMPLE';
        var d2ayu = nivD2.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Ayudante de 1ra.' || cur.descripcion_categoria === 'AYUDANTE DE 1º SIMPL';
        var exclusiva = cur.descripcion_dedicacion === 'Exclusiva';
        var semiexclusiva = cur.descripcion_dedicacion === 'Semi-Exclusiva' || cur.descripcion_dedicacion === 'Semi - Excl Conven';
        var femenino = cur.sexo === 'F';
        var masculino = cur.sexo === 'M';
        return femenino ? {
          masc: acc.masc,
          fem: titular ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.fem), {}, {
            tit: {
              exc: acc.fem.tit.exc + (exclusiva ? 1 : 0),
              sem: acc.fem.tit.sem + (semiexclusiva ? 1 : 0)
            }
          }) : asociado ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.fem), {}, {
            aso: {
              exc: acc.fem.aso.exc + (exclusiva ? 1 : 0),
              sem: acc.fem.aso.sem + (semiexclusiva ? 1 : 0)
            }
          }) : adjunto ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.fem), {}, {
            adj: {
              exc: acc.fem.adj.exc + (exclusiva ? 1 : 0),
              sem: acc.fem.adj.sem + (semiexclusiva ? 1 : 0)
            }
          }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.fem), {}, {
            jtp: {
              exc: acc.fem.jtp.exc + (exclusiva ? 1 : 0),
              sem: acc.fem.jtp.sem + (semiexclusiva ? 1 : 0)
            }
          }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.fem), {}, {
            ayu: {
              exc: acc.fem.ayu.exc + (exclusiva ? 1 : 0),
              sem: acc.fem.ayu.sem + (semiexclusiva ? 1 : 0)
            }
          }) : acc.fem
        } : masculino ? {
          fem: acc.fem,
          masc: titular ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.masc), {}, {
            tit: {
              exc: acc.masc.tit.exc + (exclusiva ? 1 : 0),
              sem: acc.masc.tit.sem + (semiexclusiva ? 1 : 0)
            }
          }) : asociado ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.masc), {}, {
            aso: {
              exc: acc.masc.aso.exc + (exclusiva ? 1 : 0),
              sem: acc.masc.aso.sem + (semiexclusiva ? 1 : 0)
            }
          }) : adjunto ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.masc), {}, {
            adj: {
              exc: acc.masc.adj.exc + (exclusiva ? 1 : 0),
              sem: acc.masc.adj.sem + (semiexclusiva ? 1 : 0)
            }
          }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.masc), {}, {
            jtp: {
              exc: acc.masc.jtp.exc + (exclusiva ? 1 : 0),
              sem: acc.masc.jtp.sem + (semiexclusiva ? 1 : 0)
            }
          }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc.masc), {}, {
            ayu: {
              exc: acc.masc.ayu.exc + (exclusiva ? 1 : 0),
              sem: acc.masc.ayu.sem + (semiexclusiva ? 1 : 0)
            }
          }) : acc.masc
        } : acc;
      }, {
        fem: {
          tit: {
            exc: 0,
            sem: 0
          },
          aso: {
            exc: 0,
            sem: 0
          },
          adj: {
            exc: 0,
            sem: 0
          },
          jtp: {
            exc: 0,
            sem: 0
          },
          ayu: {
            exc: 0,
            sem: 0
          }
        },
        masc: {
          tit: {
            exc: 0,
            sem: 0
          },
          aso: {
            exc: 0,
            sem: 0
          },
          adj: {
            exc: 0,
            sem: 0
          },
          jtp: {
            exc: 0,
            sem: 0
          },
          ayu: {
            exc: 0,
            sem: 0
          }
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      {
        attrs: {
          id: "investigacion-investigadores-genero-categoria-dedicacion"
        }
      },
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
                  _vm._v(" Género, categoría y dedicación. ")
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
                                              "investigacion-investigadores-genero-categoria-dedicacion"
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
        _c("v-card-subtitle", [
          _vm._v("Distribución de los/as investigadores/as.")
        ]),
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
                    type: "ColumnChart"
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
                          _vm._v(" Categoría ")
                        ]),
                        _c("th", { attrs: { colspan: "2" } }, [
                          _vm._v(" Femenino ")
                        ]),
                        _c("th", { attrs: { colspan: "2" } }, [
                          _vm._v(" Masculino ")
                        ])
                      ]),
                      _c("tr", [
                        _c("th", [_vm._v(" Dedicación Exclusiva ")]),
                        _c("th", [_vm._v(" Dedicación Semiexclusiva ")]),
                        _c("th", [_vm._v(" Dedicación Exclusiva ")]),
                        _c("th", [_vm._v(" Dedicación Semiexclusiva ")])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Profesores Titulares+A")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.tit.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.tit.sem
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.tit.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.tit.sem
                            )
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("Profesores Asociados+B")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.aso.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.aso.sem
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.aso.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.aso.sem
                            )
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("Profesores Adjuntos+C")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.adj.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.adj.sem
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.adj.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.adj.sem
                            )
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("JTP+D1")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.jtp.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.jtp.sem
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.jtp.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.jtp.sem
                            )
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("Ayudantes de 1ra+D2")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.ayu.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.fem.ayu.sem
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.ayu.exc
                            )
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.generoCategoriaDedicacionData.masc.ayu.sem
                            )
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

/***/ "./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue":
/*!************************************************************************!*\
  !*** ./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneroCategoriaDedicacion_vue_vue_type_template_id_22151817___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817& */ "./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817&");
/* harmony import */ var _GeneroCategoriaDedicacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneroCategoriaDedicacion.vue?vue&type=script&lang=js& */ "./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=script&lang=js&");
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
  _GeneroCategoriaDedicacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneroCategoriaDedicacion_vue_vue_type_template_id_22151817___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneroCategoriaDedicacion_vue_vue_type_template_id_22151817___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/investigacion/ids/GeneroCategoriaDedicacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneroCategoriaDedicacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneroCategoriaDedicacion.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneroCategoriaDedicacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneroCategoriaDedicacion_vue_vue_type_template_id_22151817___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue?vue&type=template&id=22151817&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneroCategoriaDedicacion_vue_vue_type_template_id_22151817___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneroCategoriaDedicacion_vue_vue_type_template_id_22151817___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=GeneroCategoriaDedicacion.js.map