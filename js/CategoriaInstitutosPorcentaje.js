(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CategoriaInstitutosPorcentaje"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
          id: 'Categoría por Instituto',
          label: 'Categoría por Instituto',
          type: 'string'
        }, {
          type: 'string',
          role: 'tooltip',
          p: {
            html: true
          }
        }, {
          id: 'Profesores (A+B+C+Prof. Titular+Prof. Asociado+Prof. Adjunto)',
          label: 'Profesores (A+B+C+Prof. Titular+Prof. Asociado+Prof. Adjunto)',
          type: 'number'
        }, {
          role: 'annotation'
        }, {
          id: 'D1+JTP',
          label: 'D1+JTP',
          type: 'number'
        }, {
          role: 'annotation'
        }, {
          id: 'D2+Ayudante de 1ra',
          label: 'D2+Ayudante de 1ra',
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
            f: this.createTooltip('ICI', this.categoriaInstitutosData.ICI)
          }, {
            v: this.categoriaInstitutosData.ICI.prof.per,
            f: this.categoriaInstitutosData.ICI.prof.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICI.prof.per))
          }, {
            v: this.categoriaInstitutosData.ICI.jtp.per,
            f: this.categoriaInstitutosData.ICI.jtp.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICI.jtp.per))
          }, {
            v: this.categoriaInstitutosData.ICI.ayu.per,
            f: this.categoriaInstitutosData.ICI.ayu.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICI.ayu.per))
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDH'
          }, {
            v: 0,
            f: this.createTooltip('IDH', this.categoriaInstitutosData.IDH)
          }, {
            v: this.categoriaInstitutosData.IDH.prof.per,
            f: this.categoriaInstitutosData.IDH.prof.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDH.prof.per))
          }, {
            v: this.categoriaInstitutosData.IDH.jtp.per,
            f: this.categoriaInstitutosData.IDH.jtp.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDH.jtp.per))
          }, {
            v: this.categoriaInstitutosData.IDH.ayu.per,
            f: this.categoriaInstitutosData.IDH.ayu.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDH.ayu.per))
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDEI'
          }, {
            v: 0,
            f: this.createTooltip('IDEI', this.categoriaInstitutosData.IDEI)
          }, {
            v: this.categoriaInstitutosData.IDEI.prof.per,
            f: this.categoriaInstitutosData.IDEI.prof.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDEI.prof.per))
          }, {
            v: this.categoriaInstitutosData.IDEI.jtp.per,
            f: this.categoriaInstitutosData.IDEI.jtp.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDEI.jtp.per))
          }, {
            v: this.categoriaInstitutosData.IDEI.ayu.per,
            f: this.categoriaInstitutosData.IDEI.ayu.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDEI.ayu.per))
          }]
        }, {
          c: [{
            v: 0,
            f: 'ICO'
          }, {
            v: 0,
            f: this.createTooltip('ICO', this.categoriaInstitutosData.ICO)
          }, {
            v: this.categoriaInstitutosData.ICO.prof.per,
            f: this.categoriaInstitutosData.ICO.prof.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICO.prof.per))
          }, {
            v: this.categoriaInstitutosData.ICO.jtp.per,
            f: this.categoriaInstitutosData.ICO.jtp.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICO.jtp.per))
          }, {
            v: this.categoriaInstitutosData.ICO.ayu.per,
            f: this.categoriaInstitutosData.ICO.ayu.per
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICO.ayu.per))
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
    categoriaInstitutosData: function categoriaInstitutosData() {
      var docentesTipo = this.docentes.reduce(function (acc, cur) {
        var nivA = new RegExp('Niv A', 'gm');
        var nivB = new RegExp('Niv B', 'gm');
        var nivC = new RegExp('Niv C', 'gm');
        var nivD1 = new RegExp('Niv D1', 'gm');
        var nivD2 = new RegExp('Niv D2', 'gm');
        var profesores = nivA.test(cur.descripcion_categoria) || nivB.test(cur.descripcion_categoria) || nivC.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Profesor Asociado' || cur.descripcion_categoria === 'ASOCIADO SIMPLE' || cur.descripcion_categoria === 'Profesor Titular' || cur.descripcion_categoria === 'Profesor Adjunto' || cur.descripcion_categoria === 'ADJUNTO SIMPLE';
        var d1jtp = nivD1.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Jefe Trab. Practicos' || cur.descripcion_categoria === 'Jef Trab Pract NM' || cur.descripcion_categoria === 'JTP SIMPLE';
        var d2ayu = nivD2.test(cur.descripcion_categoria) || cur.descripcion_categoria === 'Ayudante de 1ra.' || cur.descripcion_categoria === 'AYUDANTE DE 1º SIMPL';
        var ICI = cur.unidad_academica === 'ICI';
        var IDH = cur.unidad_academica === 'IDH';
        var IDEI = cur.unidad_academica === 'IDEI';
        var ICO = cur.unidad_academica === 'ICO';
        return ICI ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICI), {}, {
            prof: acc.ICI.prof + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICI), {}, {
            jtp: acc.ICI.jtp + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICI), {}, {
            ayu: acc.ICI.ayu + 1
          })
        }) : acc : IDH ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDH: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDH), {}, {
            prof: acc.IDH.prof + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDH: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDH), {}, {
            jtp: acc.IDH.jtp + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDH: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDH), {}, {
            ayu: acc.IDH.ayu + 1
          })
        }) : acc : IDEI ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDEI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDEI), {}, {
            prof: acc.IDEI.prof + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDEI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDEI), {}, {
            jtp: acc.IDEI.jtp + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDEI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDEI), {}, {
            ayu: acc.IDEI.ayu + 1
          })
        }) : acc : ICO ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICO: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICO), {}, {
            prof: acc.ICO.prof + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICO: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICO), {}, {
            jtp: acc.ICO.jtp + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICO: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICO), {}, {
            ayu: acc.ICO.ayu + 1
          })
        }) : acc : acc;
      }, {
        ICI: {
          prof: 0,
          jtp: 0,
          ayu: 0
        },
        IDH: {
          prof: 0,
          jtp: 0,
          ayu: 0
        },
        IDEI: {
          prof: 0,
          jtp: 0,
          ayu: 0
        },
        ICO: {
          prof: 0,
          jtp: 0,
          ayu: 0
        }
      });
      return this.addPorcentajes(docentesTipo);
    }
  }),
  methods: {
    downloadIndicador: function downloadIndicador(indicador) {
      this.$store.dispatch('createPng', indicador);
    },
    addPorcentajes: function addPorcentajes(v) {
      return {
        ICI: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.ICI, v.ICI.prof + v.ICI.jtp + v.ICI.ayu),
        IDH: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.IDH, v.IDH.prof + v.IDH.jtp + v.IDH.ayu),
        IDEI: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.IDEI, v.IDEI.prof + v.IDEI.jtp + v.IDEI.ayu),
        ICO: Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["addPorcentajes"])(v.ICO, v.ICO.prof + v.ICO.jtp + v.ICO.ayu)
      };
    },
    createTooltip: function createTooltip(title, value) {
      return "<div style=\"min-width: 370px; padding: 10px 10px 10px 10px; font-size: 13px; color: black;\">\n      <h3>".concat(title, "</h3>\n      <ul>\n      <li>Profesores (A+B+C+Prof. Titular+Prof. Asociado+Prof. Adjunto): ").concat(value.prof.per, "% (").concat(value.prof.abs, ")</li>\n      <li>D1+JTP: ").concat(value.jtp.per, "% (").concat(value.jtp.abs, ")</li>\n      <li>D2+Ayudante de 1ra: ").concat(value.ayu.per, "% (").concat(value.ayu.abs, ")</li>\n      </li>\n      </ul></div>");
    },
    hiddeAnnotation: function hiddeAnnotation(v) {
      return v <= 6 ? '' : "".concat(v, "%");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      { attrs: { id: "gestion-docentes-categoria-instituto-porcentaje" } },
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
                  _vm._v(" Categoría por Instituto. ")
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
                                              "gestion-docentes-categoria-instituto-porcentaje"
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
                        _c("th", [_vm._v(" Categoría ")]),
                        _c("th", [_vm._v(" ICI ")]),
                        _c("th", [_vm._v(" IDH ")]),
                        _c("th", [_vm._v(" IDEI ")]),
                        _c("th", [_vm._v(" ICO ")])
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
                            _vm._s(_vm.categoriaInstitutosData.ICI.prof.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.IDH.prof.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.IDEI.prof.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.ICO.prof.per) +
                              "%"
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("D1+JTP")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.ICI.jtp.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.IDH.jtp.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.IDEI.jtp.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.ICO.jtp.per) +
                              "%"
                          )
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("D2+Ayudante de 1ra")]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.ICI.ayu.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.IDH.ayu.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.IDEI.ayu.per) +
                              "%"
                          )
                        ]),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.categoriaInstitutosData.ICO.ayu.per) +
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

/***/ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue":
/*!*****************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriaInstitutosPorcentaje_vue_vue_type_template_id_46212581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581& */ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581&");
/* harmony import */ var _CategoriaInstitutosPorcentaje_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js& */ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js&");
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
  _CategoriaInstitutosPorcentaje_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriaInstitutosPorcentaje_vue_vue_type_template_id_46212581___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriaInstitutosPorcentaje_vue_vue_type_template_id_46212581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutosPorcentaje_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutosPorcentaje_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581&":
/*!************************************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutosPorcentaje_vue_vue_type_template_id_46212581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutosPorcentaje.vue?vue&type=template&id=46212581&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutosPorcentaje_vue_vue_type_template_id_46212581___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutosPorcentaje_vue_vue_type_template_id_46212581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=CategoriaInstitutosPorcentaje.js.map