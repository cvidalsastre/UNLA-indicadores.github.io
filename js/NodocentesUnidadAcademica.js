(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NodocentesUnidadAcademica"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(['dark', 'colors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['nodocentesCargos', 'mobileSize'])), {}, {
    barChartOptions: function barChartOptions() {
      return {
        chartArea: {
          left: 300,
          right: 20,
          top: 20,
          bottom: 20
        },
        // tooltip: {
        //   isHtml: true,
        //   textStyle: { color: 'white', bold: false }
        // },
        colors: this.colors,
        title: '',
        backgroundColor: {
          fill: 'transparent'
        },
        height: 400,
        legend: {
          position: 'none',
          maxLines: 3,
          textStyle: {
            color: this.dark ? '#FFF' : '#000'
          }
        },
        isStacked: true,
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
          id: 'Unidad Académica',
          label: 'UnidadAcademica',
          type: 'string'
        }, {
          id: 'Habilitados',
          label: 'Habilitados',
          type: 'number'
        }, {
          id: 'Liquidados',
          label: 'Liquidados',
          type: 'number'
        }],
        rows: [{
          c: [{
            v: 0,
            f: 'ICI'
          }, {
            v: this.unidadAcademicaData.ICI.habilitados,
            f: this.unidadAcademicaData.ICI.habilitados
          }, {
            v: this.unidadAcademicaData.ICI.liquidados,
            f: this.unidadAcademicaData.ICI.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDH'
          }, {
            v: this.unidadAcademicaData.IDH.habilitados,
            f: this.unidadAcademicaData.IDH.habilitados
          }, {
            v: this.unidadAcademicaData.IDH.liquidados,
            f: this.unidadAcademicaData.IDH.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'IDEI'
          }, {
            v: this.unidadAcademicaData.IDEI.habilitados,
            f: this.unidadAcademicaData.IDEI.habilitados
          }, {
            v: this.unidadAcademicaData.IDEI.liquidados,
            f: this.unidadAcademicaData.IDEI.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'ICO'
          }, {
            v: this.unidadAcademicaData.ICO.habilitados,
            f: this.unidadAcademicaData.ICO.habilitados
          }, {
            v: this.unidadAcademicaData.ICO.liquidados,
            f: this.unidadAcademicaData.ICO.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. Académica'
          }, {
            v: this.unidadAcademicaData.ACAD.habilitados,
            f: this.unidadAcademicaData.ACAD.habilitados
          }, {
            v: this.unidadAcademicaData.ACAD.liquidados,
            f: this.unidadAcademicaData.ACAD.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. de Cultura y Medios'
          }, {
            v: this.unidadAcademicaData.CULT.habilitados,
            f: this.unidadAcademicaData.CULT.habilitados
          }, {
            v: this.unidadAcademicaData.CULT.liquidados,
            f: this.unidadAcademicaData.CULT.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. de Investigación'
          }, {
            v: this.unidadAcademicaData.INVE.habilitados,
            f: this.unidadAcademicaData.INVE.habilitados
          }, {
            v: this.unidadAcademicaData.INVE.liquidados,
            f: this.unidadAcademicaData.INVE.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. Legal y Técnica'
          }, {
            v: this.unidadAcademicaData.SLYT.habilitados,
            f: this.unidadAcademicaData.SLYT.habilitados
          }, {
            v: this.unidadAcademicaData.SLYT.liquidados,
            f: this.unidadAcademicaData.SLYT.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Vicerrectorado'
          }, {
            v: this.unidadAcademicaData.VICE.habilitados,
            f: this.unidadAcademicaData.VICE.habilitados
          }, {
            v: this.unidadAcademicaData.VICE.liquidados,
            f: this.unidadAcademicaData.VICE.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. Administrativa'
          }, {
            v: this.unidadAcademicaData.ADMI.habilitados,
            f: this.unidadAcademicaData.ADMI.habilitados
          }, {
            v: this.unidadAcademicaData.ADMI.liquidados,
            f: this.unidadAcademicaData.ADMI.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. General'
          }, {
            v: this.unidadAcademicaData.GRAL.habilitados,
            f: this.unidadAcademicaData.GRAL.habilitados
          }, {
            v: this.unidadAcademicaData.GRAL.liquidados,
            f: this.unidadAcademicaData.GRAL.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Auditoría Interna'
          }, {
            v: this.unidadAcademicaData.AUDI.habilitados,
            f: this.unidadAcademicaData.AUDI.habilitados
          }, {
            v: this.unidadAcademicaData.AUDI.liquidados,
            f: this.unidadAcademicaData.AUDI.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. de Desarrollo Tecnológico y Social'
          }, {
            v: this.unidadAcademicaData.SERV.habilitados,
            f: this.unidadAcademicaData.SERV.habilitados
          }, {
            v: this.unidadAcademicaData.SERV.liquidados,
            f: this.unidadAcademicaData.SERV.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Sec. de Planeamiento y Desarrollo Universitario'
          }, {
            v: this.unidadAcademicaData.DESA.habilitados,
            f: this.unidadAcademicaData.DESA.habilitados
          }, {
            v: this.unidadAcademicaData.DESA.liquidados,
            f: this.unidadAcademicaData.DESA.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Escuela Secundaria'
          }, {
            v: this.unidadAcademicaData.ACSE.habilitados,
            f: this.unidadAcademicaData.ACSE.habilitados
          }, {
            v: this.unidadAcademicaData.ACSE.liquidados,
            f: this.unidadAcademicaData.ACSE.liquidados
          }]
        }, {
          c: [{
            v: 0,
            f: 'Rectorado'
          }, {
            v: this.unidadAcademicaData.RECT.habilitados,
            f: this.unidadAcademicaData.RECT.habilitados
          }, {
            v: this.unidadAcademicaData.RECT.liquidados,
            f: this.unidadAcademicaData.RECT.liquidados
          }]
        }]
      };
    },
    unidadAcademicaData: function unidadAcademicaData() {
      // "ICI"
      // "IDH"
      // "IDEI"
      // "ICO"
      // "ACAD"
      // "CULT"
      // "INVE"
      // 'UByD' biblioteca depende de INVE
      // "SLYT"
      // "VICE"
      // "ADMI"
      // "GRAL"
      // "AUDI"
      // "SERV"
      // "DESA"
      // "SEGE"
      // "ACSE"
      // "RECT"
      return this.nodocentesCargos.reduce(function (acc, cur) {
        var ICI = cur.unidad_academica === 'ICI';
        var IDH = cur.unidad_academica === 'IDH';
        var IDEI = cur.unidad_academica === 'IDEI';
        var ICO = cur.unidad_academica === 'ICO';
        var ACAD = cur.unidad_academica === 'ACAD';
        var CULT = cur.unidad_academica === 'CULT';
        var INVE = cur.unidad_academica === 'INVE' || cur.unidad_academica === 'UByD';
        var SLYT = cur.unidad_academica === 'SLYT';
        var VICE = cur.unidad_academica === 'VICE';
        var ADMI = cur.unidad_academica === 'ADMI';
        var GRAL = cur.unidad_academica === 'GRAL' || cur.unidad_academica === 'SEGE';
        var AUDI = cur.unidad_academica === 'AUDI';
        var SERV = cur.unidad_academica === 'SERV';
        var DESA = cur.unidad_academica === 'DESA';
        var ACSE = cur.unidad_academica === 'ACSE';
        var RECT = cur.unidad_academica === 'RECT';
        var subr1 = new RegExp('SubR: Cat 1', 'gm');
        var subr2 = new RegExp('SubR: Cat 2', 'gm');
        var subr3 = new RegExp('SubR: Cat 3', 'gm');
        var subr4 = new RegExp('SubR: Cat 4', 'gm');
        var subr5 = new RegExp('SubR: Cat 5', 'gm');
        var subr6 = new RegExp('SubR: Cat 6', 'gm');
        var subrogado = subr1.test(cur.subrogancia) || subr2.test(cur.subrogancia) || subr3.test(cur.subrogancia) || subr4.test(cur.subrogancia) || subr5.test(cur.subrogancia) || subr6.test(cur.subrogancia);

        var parseHabilitadosLiquidados = function parseHabilitadosLiquidados(ua) {
          return subrogado ? {
            habilitados: ua.habilitados,
            liquidados: ua.liquidados + 1
          } : {
            liquidados: ua.liquidados,
            habilitados: ua.habilitados + 1
          };
        };

        return ICI ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          ICI: parseHabilitadosLiquidados(acc.ICI)
        }) : IDH ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          IDH: parseHabilitadosLiquidados(acc.IDH)
        }) : IDEI ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          IDEI: parseHabilitadosLiquidados(acc.IDEI)
        }) : ICO ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          ICO: parseHabilitadosLiquidados(acc.ICO)
        }) : ACAD ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          ACAD: parseHabilitadosLiquidados(acc.ACAD)
        }) : CULT ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          CULT: parseHabilitadosLiquidados(acc.CULT)
        }) : INVE ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          INVE: parseHabilitadosLiquidados(acc.INVE)
        }) : SLYT ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          SLYT: parseHabilitadosLiquidados(acc.SLYT)
        }) : VICE ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          VICE: parseHabilitadosLiquidados(acc.VICE)
        }) : ADMI ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          ADMI: parseHabilitadosLiquidados(acc.ADMI)
        }) : GRAL ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          GRAL: parseHabilitadosLiquidados(acc.GRAL)
        }) : AUDI ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          AUDI: parseHabilitadosLiquidados(acc.AUDI)
        }) : SERV ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          SERV: parseHabilitadosLiquidados(acc.SERV)
        }) : DESA ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          DESA: parseHabilitadosLiquidados(acc.DESA)
        }) : ACSE ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          ACSE: parseHabilitadosLiquidados(acc.ACSE)
        }) : RECT ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, acc), {}, {
          RECT: parseHabilitadosLiquidados(acc.RECT)
        }) : acc;
      }, {
        ICI: {
          habilitados: 0,
          liquidados: 0
        },
        IDH: {
          habilitados: 0,
          liquidados: 0
        },
        IDEI: {
          habilitados: 0,
          liquidados: 0
        },
        ICO: {
          habilitados: 0,
          liquidados: 0
        },
        ACAD: {
          habilitados: 0,
          liquidados: 0
        },
        CULT: {
          habilitados: 0,
          liquidados: 0
        },
        INVE: {
          habilitados: 0,
          liquidados: 0
        },
        SLYT: {
          habilitados: 0,
          liquidados: 0
        },
        VICE: {
          habilitados: 0,
          liquidados: 0
        },
        ADMI: {
          habilitados: 0,
          liquidados: 0
        },
        GRAL: {
          habilitados: 0,
          liquidados: 0
        },
        AUDI: {
          habilitados: 0,
          liquidados: 0
        },
        SERV: {
          habilitados: 0,
          liquidados: 0
        },
        DESA: {
          habilitados: 0,
          liquidados: 0
        },
        ACSE: {
          habilitados: 0,
          liquidados: 0
        },
        RECT: {
          habilitados: 0,
          liquidados: 0
        }
      });
    }
  }),
  methods: {
    parseUnidadAcademica: function parseUnidadAcademica(v) {
      return v === 'ICI' ? 'ICI' : v === 'IDH' ? 'IDH' : v === 'IDEI' ? 'IDEI' : v === 'ICO' ? 'ICO' : v === 'ACAD' ? 'Secretaría Académica' : v === 'CULT' ? 'Secretaría de Cultura y Medios' : v === 'INVE' ? 'Secretaría de Investigación' : v === 'SLYT' ? 'Secretaría Legal y Técnica' : v === 'VICE' ? 'Vicerrectorado' : v === 'ADMI' ? 'Secretaría Administración' : v === 'GRAL' ? 'Secretaría General' : v === 'AUDI' ? 'Auditoría Interna' : v === 'SERV' ? 'Secretaría de Desarrollo Tecnológico y Social' : v === 'DESA' ? 'Secretaría de Planeamiento y Desarrollo Universitario' : v === 'ACSE' ? 'Escuela Secundaria' : v === 'RECT' ? 'Rectorado' : v;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=template&id=6d0d988c&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=template&id=6d0d988c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      { attrs: { id: "nodocentes-unidadgestion" } },
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
                  _vm._v(
                    " Cargos habilitados y liquidados por Unidad de Gestión. "
                  )
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
                                              "nodocentes-unidadgestion"
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
        _c("v-card-subtitle", [_vm._v("Distribución de los/as No Docentes.")]),
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
                            _vm._v(" Unidad Académica ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" Cargos habilitados ")
                          ]),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(" Cargos liquidados ")
                          ])
                        ])
                      ]),
                      _c(
                        "tbody",
                        _vm._l(_vm.unidadAcademicaData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(_vm._s(_vm.parseUnidadAcademica(index)))
                            ]),
                            _c("td", [_vm._v(_vm._s(item.habilitados))]),
                            _c("td", [_vm._v(_vm._s(item.liquidados))])
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

/***/ "./src/components/gestion/nodocentes/UnidadAcademica.vue":
/*!***************************************************************!*\
  !*** ./src/components/gestion/nodocentes/UnidadAcademica.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnidadAcademica_vue_vue_type_template_id_6d0d988c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnidadAcademica.vue?vue&type=template&id=6d0d988c& */ "./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=template&id=6d0d988c&");
/* harmony import */ var _UnidadAcademica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnidadAcademica.vue?vue&type=script&lang=js& */ "./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=script&lang=js&");
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
  _UnidadAcademica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnidadAcademica_vue_vue_type_template_id_6d0d988c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnidadAcademica_vue_vue_type_template_id_6d0d988c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/gestion/nodocentes/UnidadAcademica.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnidadAcademica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnidadAcademica.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnidadAcademica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=template&id=6d0d988c&":
/*!**********************************************************************************************!*\
  !*** ./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=template&id=6d0d988c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnidadAcademica_vue_vue_type_template_id_6d0d988c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnidadAcademica.vue?vue&type=template&id=6d0d988c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/UnidadAcademica.vue?vue&type=template&id=6d0d988c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnidadAcademica_vue_vue_type_template_id_6d0d988c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnidadAcademica_vue_vue_type_template_id_6d0d988c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=NodocentesUnidadAcademica.js.map