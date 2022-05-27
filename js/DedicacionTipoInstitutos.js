(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DedicacionTipoInstitutos"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");



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
      mdiDownload: _mdi_js__WEBPACK_IMPORTED_MODULE_4__["mdiDownload"]
    };
  },
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])(['dark', 'colors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['docentes', 'mobileSize'])), {}, {
    barChartData: function barChartData() {
      return {
        cols: [{
          id: 'Tipo de dedicación por Instituto',
          label: 'Tipo de dedicación por Instituto',
          type: 'string'
        }, {
          type: 'string',
          role: 'tooltip',
          p: {
            html: true
          }
        }, {
          id: 'Exclusiva',
          label: 'Exclusiva',
          type: 'number'
        }, {
          role: 'annotation'
        }, {
          id: 'Semi-exclusiva',
          label: 'Semi-exclusiva',
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
            f: 'ICI'
          }, {
            v: 0,
            f: this.createTooltip('ICI', this.dedicacionTipoInstitutosData.ICI)
          }, {
            v: this.dedicacionTipoInstitutosData.ICI.exc,
            f: this.dedicacionTipoInstitutosData.ICI.exc
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.ICI.exc))
          }, {
            v: this.dedicacionTipoInstitutosData.ICI.sem,
            f: this.dedicacionTipoInstitutosData.ICI.sem
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.ICI.sem))
          }, {
            v: this.dedicacionTipoInstitutosData.ICI.sim,
            f: this.dedicacionTipoInstitutosData.ICI.sim
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.ICI.sim))
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDH'
          }, {
            v: 0,
            f: this.createTooltip('IDH', this.dedicacionTipoInstitutosData.IDH)
          }, {
            v: this.dedicacionTipoInstitutosData.IDH.exc,
            f: this.dedicacionTipoInstitutosData.IDH.exc
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.IDH.exc))
          }, {
            v: this.dedicacionTipoInstitutosData.IDH.sem,
            f: this.dedicacionTipoInstitutosData.IDH.sem
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.IDH.sem))
          }, {
            v: this.dedicacionTipoInstitutosData.IDH.sim,
            f: this.dedicacionTipoInstitutosData.IDH.sim
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.IDH.sim))
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDEI'
          }, {
            v: 0,
            f: this.createTooltip('IDEI', this.dedicacionTipoInstitutosData.IDEI)
          }, {
            v: this.dedicacionTipoInstitutosData.IDEI.exc,
            f: this.dedicacionTipoInstitutosData.IDEI.exc
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.IDEI.exc))
          }, {
            v: this.dedicacionTipoInstitutosData.IDEI.sem,
            f: this.dedicacionTipoInstitutosData.IDEI.sem
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.IDEI.sem))
          }, {
            v: this.dedicacionTipoInstitutosData.IDEI.sim,
            f: this.dedicacionTipoInstitutosData.IDEI.sim
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.IDEI.sim))
          }]
        }, {
          c: [{
            v: 0,
            f: 'ICO'
          }, {
            v: 0,
            f: this.createTooltip('ICO', this.dedicacionTipoInstitutosData.ICO)
          }, {
            v: this.dedicacionTipoInstitutosData.ICO.exc,
            f: this.dedicacionTipoInstitutosData.ICO.exc
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.ICO.exc))
          }, {
            v: this.dedicacionTipoInstitutosData.ICO.sem,
            f: this.dedicacionTipoInstitutosData.ICO.sem
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.ICO.sem))
          }, {
            v: this.dedicacionTipoInstitutosData.ICO.sim,
            f: this.dedicacionTipoInstitutosData.ICO.sim
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.dedicacionTipoInstitutosData.ICO.sim))
          }]
        }]
      };
    },
    barChartOptions: function barChartOptions() {
      return {
        chartArea: {
          left: 40,
          right: 40,
          top: 40,
          bottom: 20
        },
        // colors: state.colores.investigadoresSexo,
        focusTarget: 'category',
        tooltip: {
          isHtml: true // textStyle: { color: 'white', bold: false }

        },
        colors: this.colors,
        // title: '',
        backgroundColor: {
          fill: 'transparent'
        },
        height: 350,
        isStacked: true,
        legend: {
          position: 'top',
          maxLines: 3,
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        },
        bar: {
          groupWidth: '40%'
        },
        annotations: {
          // style: 'line'
          highContrast: false,
          textStyle: {
            color: 'white',
            //   opacity: 0.9,
            fontSize: 13
          }
        },
        hAxis: {
          textStyle: {
            color: this.dark ? '#FFF' : '#000' // fontSize: 14

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
    dedicacionTipoInstitutosData: function dedicacionTipoInstitutosData() {
      return this.docentes.reduce(function (acc, cur) {
        var exclusiva = cur.descripcion_dedicacion === 'Exclusiva';
        var semiexclusiva = cur.descripcion_dedicacion === 'Semi-Exclusiva' || cur.descripcion_dedicacion === 'Semi - Excl Conven';
        var simple = cur.descripcion_dedicacion === 'Simple';
        return cur.unidad_academica === 'ICI' ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, {
          ICI: exclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.ICI), {}, {
            exc: acc.ICI.exc + 1,
            total: acc.ICI.total + 1
          }) : semiexclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.ICI), {}, {
            sem: acc.ICI.sem + 1,
            total: acc.ICI.total + 1
          }) : simple ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.ICI), {}, {
            sim: acc.ICI.sim + 1,
            total: acc.ICI.total + 1
          }) : acc
        }) : cur.unidad_academica === 'IDH' ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, {
          IDH: exclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.IDH), {}, {
            exc: acc.IDH.exc + 1,
            total: acc.IDH.total + 1
          }) : semiexclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.IDH), {}, {
            sem: acc.IDH.sem + 1,
            total: acc.IDH.total + 1
          }) : simple ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.IDH), {}, {
            sim: acc.IDH.sim + 1,
            total: acc.IDH.total + 1
          }) : acc
        }) : cur.unidad_academica === 'IDEI' ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, {
          IDEI: exclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.IDEI), {}, {
            exc: acc.IDEI.exc + 1,
            total: acc.IDEI.total + 1
          }) : semiexclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.IDEI), {}, {
            sem: acc.IDEI.sem + 1,
            total: acc.IDEI.total + 1
          }) : simple ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.IDEI), {}, {
            sim: acc.IDEI.sim + 1,
            total: acc.IDEI.total + 1
          }) : acc
        }) : cur.unidad_academica === 'ICO' ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, {
          ICO: exclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.ICO), {}, {
            exc: acc.ICO.exc + 1,
            total: acc.ICO.total + 1
          }) : semiexclusiva ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.ICO), {}, {
            sem: acc.ICO.sem + 1,
            total: acc.ICO.total + 1
          }) : simple ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc.ICO), {}, {
            sim: acc.ICO.sim + 1,
            total: acc.ICO.total + 1
          }) : acc
        }) : acc;
      }, {
        ICI: {
          exc: 0,
          sem: 0,
          sim: 0,
          total: 0
        },
        IDH: {
          exc: 0,
          sem: 0,
          sim: 0,
          total: 0
        },
        IDEI: {
          exc: 0,
          sem: 0,
          sim: 0,
          total: 0
        },
        ICO: {
          exc: 0,
          sem: 0,
          sim: 0,
          total: 0
        }
      });
    }
  }),
  methods: {
    downloadIndicador: function downloadIndicador(indicador) {
      this.$store.dispatch('createPng', indicador);
    },
    createTooltip: function createTooltip(title, value) {
      return "<div style=\"min-width: 370px; padding: 10px 10px 10px 10px; font-size: 13px; color: black;\">\n      <h3>".concat(title, "</h3>\n      <ul>\n      <li>Exclusiva: ").concat(value.exc, "</li>\n      <li>Semi-exclusiva: ").concat(value.sem, "</li>\n      <li>Simple: ").concat(value.sim, "</li>\n      <li>Total: ").concat(value.total, "</li>\n      </li>\n      </ul></div>");
    },
    hiddeAnnotation: function hiddeAnnotation(v) {
      return v <= 6 ? '' : "".concat(v);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      { attrs: { id: "gestion-docentes-dedicacion-tipo-instituto" } },
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
                  _vm._v(" Tipo de dedicación por Instituto. ")
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
                                              "gestion-docentes-dedicacion-tipo-instituto"
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
                        _c("th", [_vm._v(" Dedicación ")]),
                        _c("th", [_vm._v(" ICI ")]),
                        _c("th", [_vm._v(" IDH ")]),
                        _c("th", [_vm._v(" IDEI ")]),
                        _c("th", [_vm._v(" ICO ")])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Exclusiva")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICI.exc)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDH.exc)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDEI.exc)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICO.exc)
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("Semi-exclusiva")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICI.sem)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDH.sem)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDEI.sem)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICO.sem)
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("Simple")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICI.sim)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDH.sim)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDEI.sim)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICO.sim)
                          )
                        ])
                      ]),
                      _c("tr", { staticClass: "font-weight-bold" }, [
                        _c("td", [_vm._v("Total")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICI.total)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDH.total)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.IDEI.total)
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.dedicacionTipoInstitutosData.ICO.total)
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

/***/ "./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue":
/*!************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DedicacionTipoInstitutos_vue_vue_type_template_id_e9a2bbf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0& */ "./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0&");
/* harmony import */ var _DedicacionTipoInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DedicacionTipoInstitutos.vue?vue&type=script&lang=js& */ "./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=script&lang=js&");
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
  _DedicacionTipoInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DedicacionTipoInstitutos_vue_vue_type_template_id_e9a2bbf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DedicacionTipoInstitutos_vue_vue_type_template_id_e9a2bbf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DedicacionTipoInstitutos.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0&":
/*!*******************************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoInstitutos_vue_vue_type_template_id_e9a2bbf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/DedicacionTipoInstitutos.vue?vue&type=template&id=e9a2bbf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoInstitutos_vue_vue_type_template_id_e9a2bbf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DedicacionTipoInstitutos_vue_vue_type_template_id_e9a2bbf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=DedicacionTipoInstitutos.js.map