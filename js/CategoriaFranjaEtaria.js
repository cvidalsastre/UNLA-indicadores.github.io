(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CategoriaFranjaEtaria"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mdiDownload: _mdi_js__WEBPACK_IMPORTED_MODULE_8__["mdiDownload"]
    };
  },
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(['dark', 'colors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['investigadoresCargos', 'mobileSize'])), {}, {
    barChartOptions: function barChartOptions() {
      return {
        chartArea: {
          left: 130,
          right: 20,
          top: 40,
          bottom: 20
        },
        // tooltip: {
        //   isHtml: true,
        //   textStyle: { color: 'white', bold: false }
        // },
        colors: this.colors,
        isStacked: true,
        title: '',
        backgroundColor: {
          fill: 'transparent'
        },
        height: 350,
        // colors: ['#dc3912'],
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
          id: 'Categoria',
          label: 'Cargos',
          type: 'string'
        }, {
          id: 'Mayores de 65 años',
          label: 'Mayores de 65 años',
          type: 'number'
        }, {
          id: 'De 55 a 64 años',
          label: 'De 55 a 64 años',
          type: 'number'
        }, {
          id: 'De 45 a 54 años',
          label: 'De 45 a 54 años',
          type: 'number'
        }, {
          id: 'De 35 a 44 años',
          label: 'De 35 a 44 años',
          type: 'number'
        }, {
          id: 'De 25 a 34 años',
          label: 'De 25 a 34 años',
          type: 'number'
        }, {
          id: 'Menores de 25 años',
          label: 'Menores de 25 años',
          type: 'number'
        }],
        rows: [{
          c: [{
            v: 0,
            f: 'Profesores (Prof. Titular+Prof. Asociado+Prof. Adjunto+A+B+C)'
          }, {
            v: this.categoriaData.prof.sesentaycinco,
            f: this.categoriaData.prof.sesentaycinco
          }, {
            v: this.categoriaData.prof.sesentaycuatro,
            f: this.categoriaData.prof.sesentaycuatro
          }, {
            v: this.categoriaData.prof.cincuentaycuatro,
            f: this.categoriaData.prof.cincuentaycuatro
          }, {
            v: this.categoriaData.prof.cuarentaycuatro,
            f: this.categoriaData.prof.cuarentaycuatro
          }, {
            v: this.categoriaData.prof.treintaycuatro,
            f: this.categoriaData.prof.treintaycuatro
          }, {
            v: this.categoriaData.prof.veinticinco,
            f: this.categoriaData.prof.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'JTP+D1'
          }, {
            v: this.categoriaData.jtp.sesentaycinco,
            f: this.categoriaData.jtp.sesentaycinco
          }, {
            v: this.categoriaData.jtp.sesentaycuatro,
            f: this.categoriaData.jtp.sesentaycuatro
          }, {
            v: this.categoriaData.jtp.cincuentaycuatro,
            f: this.categoriaData.jtp.cincuentaycuatro
          }, {
            v: this.categoriaData.jtp.cuarentaycuatro,
            f: this.categoriaData.jtp.cuarentaycuatro
          }, {
            v: this.categoriaData.jtp.treintaycuatro,
            f: this.categoriaData.jtp.treintaycuatro
          }, {
            v: this.categoriaData.jtp.veinticinco,
            f: this.categoriaData.jtp.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Ayudante de 1ra+D2'
          }, {
            v: this.categoriaData.ayu.sesentaycinco,
            f: this.categoriaData.ayu.sesentaycinco
          }, {
            v: this.categoriaData.ayu.sesentaycuatro,
            f: this.categoriaData.ayu.sesentaycuatro
          }, {
            v: this.categoriaData.ayu.cincuentaycuatro,
            f: this.categoriaData.ayu.cincuentaycuatro
          }, {
            v: this.categoriaData.ayu.cuarentaycuatro,
            f: this.categoriaData.ayu.cuarentaycuatro
          }, {
            v: this.categoriaData.ayu.treintaycuatro,
            f: this.categoriaData.ayu.treintaycuatro
          }, {
            v: this.categoriaData.ayu.veinticinco,
            f: this.categoriaData.ayu.veinticinco
          }]
        }]
      };
    },
    categoriaData: function categoriaData() {
      // "Profesores (Prof. Titular+Prof. Asociado+Prof. Adjunto+A+B+C)"
      // "JTP+D1"
      // "Ayudante de 1ra+D2"
      // "Cat 4 CCT 366/06"
      // "Cat 5 CCT 366/06"
      // "Cat 6 CCT 366/06"
      // "Cat 7 CCT 366/06"
      return this.investigadoresCargos.reduce(function (acc, cur) {
        var nivA = new RegExp('Niv A', 'gm');
        var nivB = new RegExp('Niv B', 'gm');
        var nivC = new RegExp('Niv C', 'gm');
        var nivD1 = new RegExp('Niv D1', 'gm');
        var nivD2 = new RegExp('Niv D2', 'gm');
        var profesores = nivA.test(cur.descripcion_categoria) || nivB.test(cur.descripcion_categoria) || nivC.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Profesor Asociado' || cur.descripcion_categoria === 'ASOCIADO SIMPLE' || cur.descripcion_categoria === 'Profesor Titular' || cur.descripcion_categoria === 'Profesor Adjunto' || cur.descripcion_categoria === 'ADJUNTO SIMPLE';
        var d1jtp = nivD1.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Jefe Trab. Practicos' || cur.descripcion_categoria === 'Jef Trab Pract NM' || cur.descripcion_categoria === 'JTP SIMPLE';
        var d2ayu = nivD2.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Ayudante de 1ra.' || cur.descripcion_categoria === 'AYUDANTE DE 1º SIMPL';
        var edadNum = Number(cur.edad);
        var edad = edadNum <= 25 ? 'veinticinco' : edadNum <= 34 ? 'treintaycuatro' : edadNum <= 44 ? 'cuarentaycuatro' : edadNum <= 54 ? 'cincuentaycuatro' : edadNum <= 64 ? 'sesentaycuatro' : 'sesentaycinco';
        return profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          prof: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.prof), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.prof[edad] + 1))
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          jtp: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.jtp), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.jtp[edad] + 1))
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          ayu: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.ayu), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.ayu[edad] + 1))
        }) : acc;
      }, {
        prof: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        jtp: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        ayu: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        }
      });
    }
  }),
  methods: {
    parseCategoria: function parseCategoria(v) {
      return v === 'prof' ? 'Profesores (Prof. Titular+Prof. Asociado+Prof. Adjunto+A+B+C)' : v === 'jtp' ? 'JTP+D1' : v === 'ayu' ? 'Ayudante de 1ra+D2' : v;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      { attrs: { id: "investigacion-investigadores-categoria-franjaetaria" } },
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
                  _vm._v(" Categoría Investigador-docente y Franja Etaria. ")
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
                                              "investigacion-investigadores-categoria-franjaetaria"
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
                    type: "BarChart"
                  }
                })
              ],
              1
            ),
            _c("v-simple-table", {
              attrs: { dense: "" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function() {
                    return [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" Categoría ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" Mayores de 65 años ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" De 55 a 64 años ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" De 45 a 54 años ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" De 35 a 44 años ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" De 25 a 34 años ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" Menores de 25 años ")
                          ])
                        ])
                      ]),
                      _c(
                        "tbody",
                        _vm._l(_vm.categoriaData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(_vm._s(_vm.parseCategoria(index)))
                            ]),
                            _c("td", [_vm._v(_vm._s(item.sesentaycinco))]),
                            _c("td", [_vm._v(_vm._s(item.sesentaycuatro))]),
                            _c("td", [_vm._v(_vm._s(item.cincuentaycuatro))]),
                            _c("td", [_vm._v(_vm._s(item.cuarentaycuatro))]),
                            _c("td", [_vm._v(_vm._s(item.treintaycuatro))]),
                            _c("td", [_vm._v(_vm._s(item.veinticinco))])
                          ])
                        }),
                        0
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
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

/***/ "./src/components/investigacion/ids/CategoriaFranjaEtaria.vue":
/*!********************************************************************!*\
  !*** ./src/components/investigacion/ids/CategoriaFranjaEtaria.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriaFranjaEtaria_vue_vue_type_template_id_5c0c07a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8& */ "./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8&");
/* harmony import */ var _CategoriaFranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriaFranjaEtaria.vue?vue&type=script&lang=js& */ "./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=script&lang=js&");
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
  _CategoriaFranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriaFranjaEtaria_vue_vue_type_template_id_5c0c07a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriaFranjaEtaria_vue_vue_type_template_id_5c0c07a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/investigacion/ids/CategoriaFranjaEtaria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaFranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriaFranjaEtaria.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaFranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8&":
/*!***************************************************************************************************!*\
  !*** ./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaFranjaEtaria_vue_vue_type_template_id_5c0c07a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/CategoriaFranjaEtaria.vue?vue&type=template&id=5c0c07a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaFranjaEtaria_vue_vue_type_template_id_5c0c07a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaFranjaEtaria_vue_vue_type_template_id_5c0c07a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=CategoriaFranjaEtaria.js.map