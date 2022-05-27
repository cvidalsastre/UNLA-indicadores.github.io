(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NodocentesFranjaEtaria"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
  computed: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(['dark', 'colors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['nodocentesCargos', 'mobileSize'])), {}, {
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
        isStacked: true,
        title: '',
        backgroundColor: {
          fill: 'transparent'
        },
        height: 350,
        colors: this.colors,
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
            f: 'Cat 1 CCT 366/06'
          }, {
            v: this.categoriaData.cat1.sesentaycinco,
            f: this.categoriaData.cat1.sesentaycinco
          }, {
            v: this.categoriaData.cat1.sesentaycuatro,
            f: this.categoriaData.cat1.sesentaycuatro
          }, {
            v: this.categoriaData.cat1.cincuentaycuatro,
            f: this.categoriaData.cat1.cincuentaycuatro
          }, {
            v: this.categoriaData.cat1.cuarentaycuatro,
            f: this.categoriaData.cat1.cuarentaycuatro
          }, {
            v: this.categoriaData.cat1.treintaycuatro,
            f: this.categoriaData.cat1.treintaycuatro
          }, {
            v: this.categoriaData.cat1.veinticinco,
            f: this.categoriaData.cat1.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Cat 2 CCT 366/06'
          }, {
            v: this.categoriaData.cat2.sesentaycinco,
            f: this.categoriaData.cat2.sesentaycinco
          }, {
            v: this.categoriaData.cat2.sesentaycuatro,
            f: this.categoriaData.cat2.sesentaycuatro
          }, {
            v: this.categoriaData.cat2.cincuentaycuatro,
            f: this.categoriaData.cat2.cincuentaycuatro
          }, {
            v: this.categoriaData.cat2.cuarentaycuatro,
            f: this.categoriaData.cat2.cuarentaycuatro
          }, {
            v: this.categoriaData.cat2.treintaycuatro,
            f: this.categoriaData.cat2.treintaycuatro
          }, {
            v: this.categoriaData.cat2.veinticinco,
            f: this.categoriaData.cat2.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Cat 3 CCT 366/06'
          }, {
            v: this.categoriaData.cat3.sesentaycinco,
            f: this.categoriaData.cat3.sesentaycinco
          }, {
            v: this.categoriaData.cat3.sesentaycuatro,
            f: this.categoriaData.cat3.sesentaycuatro
          }, {
            v: this.categoriaData.cat3.cincuentaycuatro,
            f: this.categoriaData.cat3.cincuentaycuatro
          }, {
            v: this.categoriaData.cat3.cuarentaycuatro,
            f: this.categoriaData.cat3.cuarentaycuatro
          }, {
            v: this.categoriaData.cat3.treintaycuatro,
            f: this.categoriaData.cat3.treintaycuatro
          }, {
            v: this.categoriaData.cat3.veinticinco,
            f: this.categoriaData.cat3.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Cat 4 CCT 366/06'
          }, {
            v: this.categoriaData.cat4.sesentaycinco,
            f: this.categoriaData.cat4.sesentaycinco
          }, {
            v: this.categoriaData.cat4.sesentaycuatro,
            f: this.categoriaData.cat4.sesentaycuatro
          }, {
            v: this.categoriaData.cat4.cincuentaycuatro,
            f: this.categoriaData.cat4.cincuentaycuatro
          }, {
            v: this.categoriaData.cat4.cuarentaycuatro,
            f: this.categoriaData.cat4.cuarentaycuatro
          }, {
            v: this.categoriaData.cat4.treintaycuatro,
            f: this.categoriaData.cat4.treintaycuatro
          }, {
            v: this.categoriaData.cat4.veinticinco,
            f: this.categoriaData.cat4.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Cat 5 CCT 366/06'
          }, {
            v: this.categoriaData.cat5.sesentaycinco,
            f: this.categoriaData.cat5.sesentaycinco
          }, {
            v: this.categoriaData.cat5.sesentaycuatro,
            f: this.categoriaData.cat5.sesentaycuatro
          }, {
            v: this.categoriaData.cat5.cincuentaycuatro,
            f: this.categoriaData.cat5.cincuentaycuatro
          }, {
            v: this.categoriaData.cat5.cuarentaycuatro,
            f: this.categoriaData.cat5.cuarentaycuatro
          }, {
            v: this.categoriaData.cat5.treintaycuatro,
            f: this.categoriaData.cat5.treintaycuatro
          }, {
            v: this.categoriaData.cat5.veinticinco,
            f: this.categoriaData.cat5.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Cat 6 CCT 366/06'
          }, {
            v: this.categoriaData.cat6.sesentaycinco,
            f: this.categoriaData.cat6.sesentaycinco
          }, {
            v: this.categoriaData.cat6.sesentaycuatro,
            f: this.categoriaData.cat6.sesentaycuatro
          }, {
            v: this.categoriaData.cat6.cincuentaycuatro,
            f: this.categoriaData.cat6.cincuentaycuatro
          }, {
            v: this.categoriaData.cat6.cuarentaycuatro,
            f: this.categoriaData.cat6.cuarentaycuatro
          }, {
            v: this.categoriaData.cat6.treintaycuatro,
            f: this.categoriaData.cat6.treintaycuatro
          }, {
            v: this.categoriaData.cat6.veinticinco,
            f: this.categoriaData.cat6.veinticinco
          }]
        }, {
          c: [{
            v: 0,
            f: 'Cat 7 CCT 366/06'
          }, {
            v: this.categoriaData.cat7.sesentaycinco,
            f: this.categoriaData.cat7.sesentaycinco
          }, {
            v: this.categoriaData.cat7.sesentaycuatro,
            f: this.categoriaData.cat7.sesentaycuatro
          }, {
            v: this.categoriaData.cat7.cincuentaycuatro,
            f: this.categoriaData.cat7.cincuentaycuatro
          }, {
            v: this.categoriaData.cat7.cuarentaycuatro,
            f: this.categoriaData.cat7.cuarentaycuatro
          }, {
            v: this.categoriaData.cat7.treintaycuatro,
            f: this.categoriaData.cat7.treintaycuatro
          }, {
            v: this.categoriaData.cat7.veinticinco,
            f: this.categoriaData.cat7.veinticinco
          }]
        }]
      };
    },
    categoriaData: function categoriaData() {
      // "Cat 1 CCT 366/06"
      // "Cat 2 CCT 366/06"
      // "Cat 3 CCT 366/06"
      // "Cat 4 CCT 366/06"
      // "Cat 5 CCT 366/06"
      // "Cat 6 CCT 366/06"
      // "Cat 7 CCT 366/06"
      return this.nodocentesCargos.reduce(function (acc, cur) {
        var subr1 = new RegExp('SubR: Cat 1', 'gm');
        var subr2 = new RegExp('SubR: Cat 2', 'gm');
        var subr3 = new RegExp('SubR: Cat 3', 'gm');
        var subr4 = new RegExp('SubR: Cat 4', 'gm');
        var subr5 = new RegExp('SubR: Cat 5', 'gm');
        var subr6 = new RegExp('SubR: Cat 6', 'gm');
        var cate1 = subr1.test(cur.subrogancia) || cur.descripcion_categoria === 'Cat 1 CCT 366/06';
        var cate2 = subr2.test(cur.subrogancia) || cur.descripcion_categoria === 'Cat 2 CCT 366/06';
        var cate3 = subr3.test(cur.subrogancia) || cur.descripcion_categoria === 'Cat 3 CCT 366/06';
        var cate4 = subr4.test(cur.subrogancia) || cur.descripcion_categoria === 'Cat 4 CCT 366/06';
        var cate5 = subr5.test(cur.subrogancia) || cur.descripcion_categoria === 'Cat 5 CCT 366/06';
        var cate6 = subr6.test(cur.subrogancia) || cur.descripcion_categoria === 'Cat 6 CCT 366/06';
        var cate7 = cur.descripcion_categoria === 'Cat 7 CCT 366/06';
        var edadNum = Number(cur.edad);
        var edad = edadNum <= 25 ? 'veinticinco' : edadNum <= 34 ? 'treintaycuatro' : edadNum <= 44 ? 'cuarentaycuatro' : edadNum <= 54 ? 'cincuentaycuatro' : edadNum <= 64 ? 'sesentaycuatro' : 'sesentaycinco';
        return cate1 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat1: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat1), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat1[edad] + 1))
        }) : cate2 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat2: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat2), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat2[edad] + 1))
        }) : cate3 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat3: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat3), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat3[edad] + 1))
        }) : cate4 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat4: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat4), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat4[edad] + 1))
        }) : cate5 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat5: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat5), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat5[edad] + 1))
        }) : cate6 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat6: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat6), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat6[edad] + 1))
        }) : cate7 ? Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc), {}, {
          cat7: Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, acc.cat7), {}, Object(_home_peron_dev_unla_dev_UNLA_indicadores_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, edad, acc.cat7[edad] + 1))
        }) : acc;
      }, {
        cat1: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        cat2: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        cat3: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        cat4: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        cat5: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        cat6: {
          sesentaycinco: 0,
          sesentaycuatro: 0,
          cincuentaycuatro: 0,
          cuarentaycuatro: 0,
          treintaycuatro: 0,
          veinticinco: 0
        },
        cat7: {
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
      return v === 'cat1' ? 'Cat 1 CCT 366/06' : v === 'cat2' ? 'Cat 2 CCT 366/06' : v === 'cat3' ? 'Cat 3 CCT 366/06' : v === 'cat4' ? 'Cat 4 CCT 366/06' : v === 'cat5' ? 'Cat 5 CCT 366/06' : v === 'cat6' ? 'Cat 6 CCT 366/06' : v === 'cat7' ? 'Cat 7 CCT 366/06' : v;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=template&id=035a756f&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=template&id=035a756f& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      { attrs: { id: "nodocentes-franja-etaria" } },
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
                  _vm._v(" Categoría y Franja Etaria. ")
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
                                              "nodocentes-franja-etaria"
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

/***/ "./src/components/gestion/nodocentes/FranjaEtaria.vue":
/*!************************************************************!*\
  !*** ./src/components/gestion/nodocentes/FranjaEtaria.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FranjaEtaria_vue_vue_type_template_id_035a756f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FranjaEtaria.vue?vue&type=template&id=035a756f& */ "./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=template&id=035a756f&");
/* harmony import */ var _FranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FranjaEtaria.vue?vue&type=script&lang=js& */ "./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=script&lang=js&");
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
  _FranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FranjaEtaria_vue_vue_type_template_id_035a756f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FranjaEtaria_vue_vue_type_template_id_035a756f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_10__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/gestion/nodocentes/FranjaEtaria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FranjaEtaria.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FranjaEtaria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=template&id=035a756f&":
/*!*******************************************************************************************!*\
  !*** ./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=template&id=035a756f& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FranjaEtaria_vue_vue_type_template_id_035a756f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0fc7dfe0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FranjaEtaria.vue?vue&type=template&id=035a756f& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0fc7dfe0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/gestion/nodocentes/FranjaEtaria.vue?vue&type=template&id=035a756f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FranjaEtaria_vue_vue_type_template_id_035a756f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0fc7dfe0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FranjaEtaria_vue_vue_type_template_id_035a756f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=NodocentesFranjaEtaria.js.map