(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CategoriaInstitutos"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mdiDownload: _mdi_js__WEBPACK_IMPORTED_MODULE_7__["mdiDownload"]
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
            v: this.categoriaInstitutosData.ICI.prof,
            f: this.categoriaInstitutosData.ICI.prof
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICI.prof))
          }, {
            v: this.categoriaInstitutosData.ICI.jtp,
            f: this.categoriaInstitutosData.ICI.jtp
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICI.jtp))
          }, {
            v: this.categoriaInstitutosData.ICI.ayu,
            f: this.categoriaInstitutosData.ICI.ayu
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICI.ayu))
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDH'
          }, {
            v: 0,
            f: this.createTooltip('IDH', this.categoriaInstitutosData.IDH)
          }, {
            v: this.categoriaInstitutosData.IDH.prof,
            f: this.categoriaInstitutosData.IDH.prof
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDH.prof))
          }, {
            v: this.categoriaInstitutosData.IDH.jtp,
            f: this.categoriaInstitutosData.IDH.jtp
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDH.jtp))
          }, {
            v: this.categoriaInstitutosData.IDH.ayu,
            f: this.categoriaInstitutosData.IDH.ayu
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDH.ayu))
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDEI'
          }, {
            v: 0,
            f: this.createTooltip('IDEI', this.categoriaInstitutosData.IDEI)
          }, {
            v: this.categoriaInstitutosData.IDEI.prof,
            f: this.categoriaInstitutosData.IDEI.prof
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDEI.prof))
          }, {
            v: this.categoriaInstitutosData.IDEI.jtp,
            f: this.categoriaInstitutosData.IDEI.jtp
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDEI.jtp))
          }, {
            v: this.categoriaInstitutosData.IDEI.ayu,
            f: this.categoriaInstitutosData.IDEI.ayu
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.IDEI.ayu))
          }]
        }, {
          c: [{
            v: 0,
            f: 'ICO'
          }, {
            v: 0,
            f: this.createTooltip('ICO', this.categoriaInstitutosData.ICO)
          }, {
            v: this.categoriaInstitutosData.ICO.prof,
            f: this.categoriaInstitutosData.ICO.prof
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICO.prof))
          }, {
            v: this.categoriaInstitutosData.ICO.jtp,
            f: this.categoriaInstitutosData.ICO.jtp
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICO.jtp))
          }, {
            v: this.categoriaInstitutosData.ICO.ayu,
            f: this.categoriaInstitutosData.ICO.ayu
          }, {
            v: 0,
            f: "".concat(this.hiddeAnnotation(this.categoriaInstitutosData.ICO.ayu))
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
    categoriaInstitutosData: function categoriaInstitutosData() {
      return this.docentes.reduce(function (acc, cur) {
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
            prof: acc.ICI.prof + 1,
            total: acc.ICI.total + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICI), {}, {
            jtp: acc.ICI.jtp + 1,
            total: acc.ICI.total + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICI), {}, {
            ayu: acc.ICI.ayu + 1,
            total: acc.ICI.total + 1
          })
        }) : acc : IDH ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDH: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDH), {}, {
            prof: acc.IDH.prof + 1,
            total: acc.IDH.total + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDH: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDH), {}, {
            jtp: acc.IDH.jtp + 1,
            total: acc.IDH.total + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDH: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDH), {}, {
            ayu: acc.IDH.ayu + 1,
            total: acc.IDH.total + 1
          })
        }) : acc : IDEI ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDEI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDEI), {}, {
            prof: acc.IDEI.prof + 1,
            total: acc.IDEI.total + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDEI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDEI), {}, {
            jtp: acc.IDEI.jtp + 1,
            total: acc.IDEI.total + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          IDEI: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.IDEI), {}, {
            ayu: acc.IDEI.ayu + 1,
            total: acc.IDEI.total + 1
          })
        }) : acc : ICO ? profesores ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICO: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICO), {}, {
            prof: acc.ICO.prof + 1,
            total: acc.ICO.total + 1
          })
        }) : d1jtp ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICO: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICO), {}, {
            jtp: acc.ICO.jtp + 1,
            total: acc.ICO.total + 1
          })
        }) : d2ayu ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc), {}, {
          ICO: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, acc.ICO), {}, {
            ayu: acc.ICO.ayu + 1,
            total: acc.ICO.total + 1
          })
        }) : acc : acc;
      }, {
        ICI: {
          prof: 0,
          jtp: 0,
          ayu: 0,
          total: 0
        },
        IDH: {
          prof: 0,
          jtp: 0,
          ayu: 0,
          total: 0
        },
        IDEI: {
          prof: 0,
          jtp: 0,
          ayu: 0,
          total: 0
        },
        ICO: {
          prof: 0,
          jtp: 0,
          ayu: 0,
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
      return "<div style=\"min-width: 370px; padding: 10px 10px 10px 10px; font-size: 13px; color: black;\">\n      <h3>".concat(title, "</h3>\n      <ul>\n      <li>Profesores (A+B+C+Prof. Titular+Prof. <br>Asociado+Prof. Adjunto): ").concat(value.prof, "</li>\n      <li>D1+JTP: ").concat(value.jtp, "</li>\n      <li>D2+Ayudante de 1ra: ").concat(value.ayu, "</li>\n      <li>Total: ").concat(value.total, "</li>\n      </li>\n      </ul></div>");
    },
    hiddeAnnotation: function hiddeAnnotation(v) {
      return v <= 6 ? '' : "".concat(v);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=template&id=3a279a40&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=template&id=3a279a40& ***!
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
      { attrs: { id: "gestion-docentes-categoria-instituto" } },
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
                                              "gestion-docentes-categoria-instituto"
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
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICI.prof))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDH.prof))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDEI.prof))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICO.prof))
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("D1+JTP")]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICI.jtp))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDH.jtp))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDEI.jtp))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICO.jtp))
                        ])
                      ]),
                      _c("tr", [
                        _c("td", [_vm._v("D2+Ayudante de 1ra")]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICI.ayu))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDH.ayu))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDEI.ayu))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICO.ayu))
                        ])
                      ]),
                      _c("tr", { staticClass: "font-weight-bold" }, [
                        _c("td", [_vm._v("Total")]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICI.total))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDH.total))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.IDEI.total))
                        ]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.categoriaInstitutosData.ICO.total))
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

/***/ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue":
/*!*******************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriaInstitutos_vue_vue_type_template_id_3a279a40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriaInstitutos.vue?vue&type=template&id=3a279a40& */ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=template&id=3a279a40&");
/* harmony import */ var _CategoriaInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriaInstitutos.vue?vue&type=script&lang=js& */ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=script&lang=js&");
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
  _CategoriaInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriaInstitutos_vue_vue_type_template_id_3a279a40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriaInstitutos_vue_vue_type_template_id_3a279a40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriaInstitutos.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=template&id=3a279a40&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=template&id=3a279a40& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutos_vue_vue_type_template_id_3a279a40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriaInstitutos.vue?vue&type=template&id=3a279a40& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/docentesUniversitarios/CategoriaInstitutos.vue?vue&type=template&id=3a279a40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutos_vue_vue_type_template_id_3a279a40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriaInstitutos_vue_vue_type_template_id_3a279a40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=CategoriaInstitutos.js.map