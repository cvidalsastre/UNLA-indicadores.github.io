(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Investigadores"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/Investigadores.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/investigacion/ids/Investigadores.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat-map */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.set */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mdiDownload: _mdi_js__WEBPACK_IMPORTED_MODULE_9__["mdiDownload"]
    };
  },
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['investigadoresCargos'])), {}, {
    cantidadInvestigadores: function cantidadInvestigadores() {
      return Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(new Set(this.investigadoresCargos.flatMap(function (i) {
        return i.legajo;
      }))).length;
    }
  }),
  methods: {
    downloadIndicador: function downloadIndicador(indicador) {
      this.$store.dispatch('createPng', indicador);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/investigacion/Investigadores.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/investigacion/Investigadores.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var DedicacionTipo = function DedicacionTipo() {
  return Promise.all(/*! import() | InvestigacionDedicacionTipo */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("InvestigacionDedicacionTipo")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/DedicacionTipo.vue */ "./src/components/investigacion/ids/DedicacionTipo.vue"));
};

var Cargos = function Cargos() {
  return Promise.all(/*! import() | Cargos */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("Cargos")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/Cargos.vue */ "./src/components/investigacion/ids/Cargos.vue"));
};

var Investigadores = function Investigadores() {
  return Promise.all(/*! import() | Investigadores */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("Investigadores")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/Investigadores.vue */ "./src/components/investigacion/ids/Investigadores.vue"));
};

var TipoNivel = function TipoNivel() {
  return Promise.all(/*! import() | TipoNivel */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("TipoNivel")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/TipoNivel.vue */ "./src/components/investigacion/ids/TipoNivel.vue"));
};

var Genero = function Genero() {
  return Promise.all(/*! import() | Genero */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("Genero")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/Genero.vue */ "./src/components/investigacion/ids/Genero.vue"));
};

var FranjaEtaria = function FranjaEtaria() {
  return Promise.all(/*! import() | FranjaEtaria */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("FranjaEtaria")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/FranjaEtaria.vue */ "./src/components/investigacion/ids/FranjaEtaria.vue"));
};

var GeneroCategoriaDedicacion = function GeneroCategoriaDedicacion() {
  return Promise.all(/*! import() | GeneroCategoriaDedicacion */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("GeneroCategoriaDedicacion")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/GeneroCategoriaDedicacion.vue */ "./src/components/investigacion/ids/GeneroCategoriaDedicacion.vue"));
};

var CategoriaFranjaEtaria = function CategoriaFranjaEtaria() {
  return Promise.all(/*! import() | CategoriaFranjaEtaria */[__webpack_require__.e("chunk-vendors~._data_plantaDocente.json~d01c8608"), __webpack_require__.e("chunk-vendors~._node_modules_@"), __webpack_require__.e("chunk-vendors~._node_modules_@mdi_js_mdi.js~94ed8877"), __webpack_require__.e("chunk-vendors~._node_modules_html2canvas_dist_html2canvas.js~c0e9d0c2"), __webpack_require__.e("chunk-vendors~._node_modules_r"), __webpack_require__.e("CategoriaFranjaEtaria")]).then(__webpack_require__.bind(null, /*! @/components/investigacion/ids/CategoriaFranjaEtaria.vue */ "./src/components/investigacion/ids/CategoriaFranjaEtaria.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DedicacionTipo: DedicacionTipo,
    Cargos: Cargos,
    Investigadores: Investigadores,
    TipoNivel: TipoNivel,
    Genero: Genero,
    FranjaEtaria: FranjaEtaria,
    GeneroCategoriaDedicacion: GeneroCategoriaDedicacion,
    CategoriaFranjaEtaria: CategoriaFranjaEtaria
  },
  data: function data() {
    return {
      firstRow: false,
      secondRow: false
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/Investigadores.vue?vue&type=template&id=79ef204a&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/investigacion/ids/Investigadores.vue?vue&type=template&id=79ef204a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-card", { attrs: { height: "100%", "min-height": "240px" } }, [
    _c(
      "div",
      { attrs: { id: "investigacion-investigadores" } },
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
                  _vm._v(" Cantidad de investigadores. ")
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
                                              "investigacion-investigadores"
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
              "v-row",
              { attrs: { justify: "space-between", align: "center" } },
              [
                _c(
                  "v-col",
                  { staticClass: "display-1", attrs: { cols: "8" } },
                  [_vm._v(" " + _vm._s(_vm.cantidadInvestigadores) + " IDs ")]
                ),
                _c(
                  "v-col",
                  { staticClass: "pa-0", attrs: { cols: "2" } },
                  [
                    _c(
                      "v-avatar",
                      { attrs: { color: "info", rounded: "", size: 60 } },
                      [
                        _c("v-icon", { attrs: { dark: "", large: "" } }, [
                          _vm._v(" mdi-account-search ")
                        ])
                      ],
                      1
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
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/investigacion/Investigadores.vue?vue&type=template&id=7bd7c29d&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/investigacion/Investigadores.vue?vue&type=template&id=7bd7c29d& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "v-card",
        { attrs: { flat: "", color: "transparent" } },
        [
          _c("v-card-title", [
            _vm._v(" Indicadores de I+D - Investigadores/as docentes. ")
          ]),
          _c("v-divider", { staticClass: "ml-4 mr-3" }),
          _c(
            "v-card-text",
            { staticClass: "pt-1" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "auto" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "pa-2",
                              attrs: { cols: "12", sm: "12", md: "6" }
                            },
                            [_c("Cargos")],
                            1
                          ),
                          _c(
                            "v-col",
                            {
                              staticClass: "pa-2",
                              attrs: { cols: "12", sm: "12", md: "6" }
                            },
                            [_c("Investigadores")],
                            1
                          ),
                          _c(
                            "v-col",
                            {
                              staticClass: "pa-2",
                              attrs: { cols: "12", sm: "12", md: "6" }
                            },
                            [_c("DedicacionTipo")],
                            1
                          ),
                          _c(
                            "v-col",
                            {
                              staticClass: "pa-2",
                              attrs: { cols: "12", sm: "12", md: "6" }
                            },
                            [_c("TipoNivel")],
                            1
                          )
                        ],
                        1
                      ),
                      !_vm.firstRow
                        ? _c(
                            "v-row",
                            { attrs: { justify: "center", align: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-center",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("v-progress-circular", {
                                    staticClass: "mr-3",
                                    attrs: {
                                      size: 35,
                                      width: 5,
                                      color: "accent",
                                      indeterminate: ""
                                    }
                                  }),
                                  _vm._v(" Cargando indicadores... ")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _c(
                        "v-lazy",
                        {
                          attrs: { "min-height": "200", width: "100%" },
                          model: {
                            value: _vm.firstRow,
                            callback: function($$v) {
                              _vm.firstRow = $$v
                            },
                            expression: "firstRow"
                          }
                        },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pa-2",
                                  attrs: { cols: "12", sm: "12", md: "6" }
                                },
                                [_c("FranjaEtaria")],
                                1
                              ),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pa-2",
                                  attrs: { cols: "12", sm: "12", md: "6" }
                                },
                                [_c("Genero")],
                                1
                              ),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pa-2",
                                  attrs: { cols: "12", sm: "12", md: "12" }
                                },
                                [_c("GeneroCategoriaDedicacion")],
                                1
                              ),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pa-2",
                                  attrs: { cols: "12", sm: "12", md: "12" }
                                },
                                [_c("CategoriaFranjaEtaria")],
                                1
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
                ],
                1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/investigacion/ids/Investigadores.vue":
/*!*************************************************************!*\
  !*** ./src/components/investigacion/ids/Investigadores.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Investigadores_vue_vue_type_template_id_79ef204a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Investigadores.vue?vue&type=template&id=79ef204a& */ "./src/components/investigacion/ids/Investigadores.vue?vue&type=template&id=79ef204a&");
/* harmony import */ var _Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Investigadores.vue?vue&type=script&lang=js& */ "./src/components/investigacion/ids/Investigadores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Investigadores_vue_vue_type_template_id_79ef204a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Investigadores_vue_vue_type_template_id_79ef204a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/investigacion/ids/Investigadores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/investigacion/ids/Investigadores.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/components/investigacion/ids/Investigadores.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Investigadores.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/Investigadores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/investigacion/ids/Investigadores.vue?vue&type=template&id=79ef204a&":
/*!********************************************************************************************!*\
  !*** ./src/components/investigacion/ids/Investigadores.vue?vue&type=template&id=79ef204a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_template_id_79ef204a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Investigadores.vue?vue&type=template&id=79ef204a& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/investigacion/ids/Investigadores.vue?vue&type=template&id=79ef204a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_template_id_79ef204a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_template_id_79ef204a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/investigacion/Investigadores.vue":
/*!****************************************************!*\
  !*** ./src/views/investigacion/Investigadores.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Investigadores_vue_vue_type_template_id_7bd7c29d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Investigadores.vue?vue&type=template&id=7bd7c29d& */ "./src/views/investigacion/Investigadores.vue?vue&type=template&id=7bd7c29d&");
/* harmony import */ var _Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Investigadores.vue?vue&type=script&lang=js& */ "./src/views/investigacion/Investigadores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VLazy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VLazy */ "./node_modules/vuetify/lib/components/VLazy/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Investigadores_vue_vue_type_template_id_7bd7c29d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Investigadores_vue_vue_type_template_id_7bd7c29d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__["VDivider"],VLazy: vuetify_lib_components_VLazy__WEBPACK_IMPORTED_MODULE_7__["VLazy"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/investigacion/Investigadores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/investigacion/Investigadores.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/views/investigacion/Investigadores.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Investigadores.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/investigacion/Investigadores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/investigacion/Investigadores.vue?vue&type=template&id=7bd7c29d&":
/*!***********************************************************************************!*\
  !*** ./src/views/investigacion/Investigadores.vue?vue&type=template&id=7bd7c29d& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_template_id_7bd7c29d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Investigadores.vue?vue&type=template&id=7bd7c29d& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/investigacion/Investigadores.vue?vue&type=template&id=7bd7c29d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_template_id_7bd7c29d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Investigadores_vue_vue_type_template_id_7bd7c29d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=Investigadores.js.map