"use strict";
(self["webpackChunkjudgement"] = self["webpackChunkjudgement"] || []).push([["app-9a8b795a"],{

/***/ "app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".isCorrect {\n  background-color: antiquewhite;\n  width: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,WAAW;AACb","sourcesContent":[".isCorrect {\n  background-color: antiquewhite;\n  width: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<template>\n  <require from=\"./app.css\"></require>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#\">Judgetrainer</a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-bs-toggle=\"collapse\"\n        data-bs-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" click.delegate=\"reset()\">\n              Neue Runde</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" click.delegate=\"stream()\"> Test</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" click.delegate=\"awQuiz()\">\n              AnwärterQuiz (60)</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" click.delegate=\"assiQuiz()\">\n              AssistentenQuiz (80)</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" click.delegate=\"pruefung()\">\n              Prüfungsfragen</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" click.delegate=\"shuffle()\">\n              Fragen mischen</a\n            >\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a\n              class=\"nav-link dropdown-toggle\"\n              href=\"#\"\n              id=\"navbarDropdown\"\n              role=\"button\"\n              data-bs-toggle=\"dropdown\"\n              aria-expanded=\"false\"\n            >\n              Kategorien\n            </a>\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <li>\n                <a\n                  class=\"dropdown-item\"\n                  href=\"#\"\n                  click.delegate=\"filterQuestions('null')\"\n                  >Alle Kategorien</a\n                >\n                <a\n                  class=\"dropdown-item\"\n                  href=\"#\"\n                  repeat.for=\"cat of categories\"\n                  click.delegate=\"filterQuestions(cat)\"\n                  >${cat}</a\n                >\n              </li>\n            </ul>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a\n              class=\"nav-link dropdown-toggle\"\n              href=\"#\"\n              id=\"navbarDropdown\"\n              role=\"button\"\n              data-bs-toggle=\"dropdown\"\n              aria-expanded=\"false\"\n            >\n              AssiKategorien\n            </a>\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <li>\n                <a\n                  class=\"dropdown-item\"\n                  href=\"#\"\n                  click.delegate=\"filterQuestions('null')\"\n                  >Alle Kategorien</a\n                >\n                <a\n                  class=\"dropdown-item\"\n                  href=\"#\"\n                  repeat.for=\"cat of assiCategories\"\n                  click.delegate=\"filterAssiQuestions(cat)\"\n                  >${cat}</a\n                >\n              </li>\n            </ul>\n          </li>\n        </ul>\n        <form class=\"d-flex\"></form>\n        <form class=\"d-flex\">\n          <input\n            type=\"text\"\n            id=\"inputSearch\"\n            value.bind=\"searchTerm\"\n            class=\"form-control me-2\"\n            type=\"search\"\n            placeholder=\"Frage suchen\"\n            aria-label=\"Search\"\n          />\n          <button\n            type=\"submit\"\n            click.delegate=\"search()\"\n            class=\"btn btn-outline-success\"\n          >\n            Suchen\n          </button>\n        </form>\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\" role=\"presentation\">\n        <button\n          class=\"nav-link active\"\n          id=\"quiz-tab\"\n          data-bs-toggle=\"tab\"\n          data-bs-target=\"#quiz\"\n          type=\"button\"\n          role=\"tab\"\n          aria-controls=\"quiz\"\n          aria-selected=\"true\"\n        >\n          ${mode} Quiz\n        </button>\n      </li>\n      <li class=\"nav-item\" role=\"presentation\">\n        <button\n          class=\"nav-link\"\n          id=\"rassen-tab\"\n          data-bs-toggle=\"tab\"\n          data-bs-target=\"#rassen\"\n          type=\"button\"\n          role=\"tab\"\n          aria-controls=\"rassen\"\n          aria-selected=\"false\"\n        >\n          Retriever Rassen\n        </button>\n      </li>\n      <li class=\"nav-item\" role=\"presentation\">\n        <button\n          class=\"nav-link\"\n          id=\"rassen-tab\"\n          data-bs-toggle=\"tab\"\n          data-bs-target=\"#Prüfungsablauf\"\n          type=\"button\"\n          role=\"tab\"\n          aria-controls=\"Prüfungsablauf\"\n          aria-selected=\"false\"\n        >\n          Prüfungsablauf\n        </button>\n      </li>\n    </ul>\n    <div class=\"tab-content\" id=\"myTabContent\">\n      <div\n        class=\"tab-pane fade show active\"\n        id=\"quiz\"\n        role=\"tabpanel\"\n        aria-labelledby=\"home-tab\"\n      >\n        <div class=\"row gx-5\">\n          <label class=\"col-form-label\"\n            >${frage.Kategorie} &gt; Frage\n            ${position}/${questions.length}:</label\n          >\n\n          <label class=\"col-form-label\">${frage.Frage}</label>\n        </div>\n        <div class=\"row gx-5\">\n          <div class=\"input-group mb-3\">\n            <button\n              click.delegate=\"next()\"\n              value=\"nächste Frage\"\n              disabled.bind=\"gameOver\"\n              class=\"btn btn-outline-secondary\"\n            >\n              nächste Frage\n            </button>\n            <!-- <button click.delegate=\"previous()\" value=\"vorherige Frage\">\n          vorherige Frage\n        </button> -->\n            <button\n              click.delegate=\"solution()\"\n              value=\"Lösung anzeigen\"\n              disabled.bind=\"gameOver\"\n              class=\"btn btn-outline-secondary\"\n            >\n              Lösung anzeigen\n            </button>\n          </div>\n        </div>\n        <div class=\"row\">\n          <table\n            class=\"table table-sm\"\n            style=\"background-color: rgb(238, 234, 228)\"\n          >\n            <tr>\n              <th>Antworten</th>\n            </tr>\n            <tr\n              repeat.for=\"antwort of frage.Antworten\"\n              class.bind=\"showSolution && antwort.richtig?'isCorrect': ''\"\n            >\n              <td>\n                <div class=\"form-check\">\n                  <input\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                    model.bind=\"antwort\"\n                    checked.bind=\"checkedAnswers\"\n                  />\n                  <label class=\"form-check-label\" for=\"flexCheckDefault\">\n                    ${antwort.text}\n                  </label>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"row\">${correctAnswers}% richtige Antworten</div>\n\n        <div class=\"row\" if.bind=\"wrongAnswers.length>0 && gameOver\">\n          <button\n            class=\"btn btn-outline-secondary\"\n            click.delegate=\"filterQuestions('wrong')\"\n          >\n            Falsche Antworten\n          </button>\n        </div>\n        <div if.bind=\"gameOver\">keine weiteren Fragen!</div>\n        ...\n      </div>\n      <div\n        class=\"tab-pane fade show\"\n        id=\"rassen\"\n        role=\"tabpanel\"\n        aria-labelledby=\"home-tab\"\n      >\n        <div class=\"row\">\n          <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"accordion-item\">\n              <h2 class=\"accordion-header\" id=\"headingOne\">\n                <button\n                  class=\"accordion-button\"\n                  type=\"button\"\n                  data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#collapseOne\"\n                  aria-expanded=\"true\"\n                  aria-controls=\"collapseOne\"\n                >\n                  Labrador Retriever\n                </button>\n              </h2>\n              <div\n                id=\"collapseOne\"\n                class=\"accordion-collapse collapse show\"\n                aria-labelledby=\"headingOne\"\n                data-bs-parent=\"#accordionExample\"\n              >\n                <div class=\"accordion-body\">\n                  sehr rege; Ausgeglichen, sehr aufgeweckt. weiches Maul;\n                  begeisternde Wasserfreudigkeit. Anpassungsfähiger,\n                  hingebungsvoller Begleiter. Intelligent, eifrig und willig,\n                  mit großem Bedürfnis seinem Besitzer Freude zu bereiten. Von\n                  freundlichem Naturell, mit keinerlei Anzeichen von\n                  Aggressivität oder deutlicher Scheue.\n                </div>\n              </div>\n            </div>\n            <div class=\"accordion-item\">\n              <h2 class=\"accordion-header\" id=\"headingTwo\">\n                <button\n                  class=\"accordion-button collapsed\"\n                  type=\"button\"\n                  data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#collapseTwo\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"collapseTwo\"\n                >\n                  Golden Retriever\n                </button>\n              </h2>\n              <div\n                id=\"collapseTwo\"\n                class=\"accordion-collapse collapse\"\n                aria-labelledby=\"headingTwo\"\n                data-bs-parent=\"#accordionExample\"\n              >\n                <div class=\"accordion-body\">\n                  lebhaft, kraftvoll, ausgeglichene Bewegung; kernig bei\n                  freundlichem Ausdruck. Wille zum Gehorsam, intelligent mit\n                  natürlicher Anlage zu arbeiten. Freundlich, liebenswürdig und\n                  zutraulich.\n                </div>\n              </div>\n            </div>\n            <div class=\"accordion-item\">\n              <h2 class=\"accordion-header\" id=\"headingThree\">\n                <button\n                  class=\"accordion-button collapsed\"\n                  type=\"button\"\n                  data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#collapseThree\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"collapseThree\"\n                >\n                  Flat Coated Retriever\n                </button>\n              </h2>\n              <div\n                id=\"collapseThree\"\n                class=\"accordion-collapse collapse\"\n                aria-labelledby=\"headingThree\"\n                data-bs-parent=\"#accordionExample\"\n              >\n                <div class=\"accordion-body\">\n                  aufgeweckt, rege, Rundherum aus- gestattet mit den natürlichen\n                  Eigenschaften eines Jagdhundes; Optimismus und Freundlichkeit\n                  wird durch enthusiastische Rutenbewegung demonstriert.\n                  Selbstsicher und freundlich.\n                </div>\n              </div>\n            </div>\n            <div class=\"accordion-item\">\n              <h2 class=\"accordion-header\" id=\"headingFour\">\n                <button\n                  class=\"accordion-button collapsed\"\n                  type=\"button\"\n                  data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#collapseFour\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"collapseFour\"\n                >\n                  Nova Scotia Duck Tolling Retriever\n                </button>\n              </h2>\n              <div\n                id=\"collapseFour\"\n                class=\"accordion-collapse collapse\"\n                aria-labelledby=\"headingFour\"\n                data-bs-parent=\"#accordionExample\"\n              >\n                <div class=\"accordion-body\">\n                  mit einem hohen Maß von Flinkheit, Wachsamkeit und\n                  Entschlossenheit. Der Toller ist sehr intelligent, sehr\n                  gelehrig und hat große Ausdauer. Als starker und befähigter\n                  Schwimmer ist er ein talentierter und verlässlicher\n                  Apportierer zu Wasser und zu Land, jederzeit bereit,\n                  schwungvoll zu agieren, sobald auch nur das geringste\n                  Anzeichen zur Notwendigkeit des Apportierens gegeben ist. Sein\n                  ausgeprägter Apportiersinn und sein Spieltrieb sind die\n                  unentbehrlichen Grundlagen für seine Lockfähigkeit.\n                </div>\n              </div>\n            </div>\n\n            <div class=\"accordion-item\">\n              <h2 class=\"accordion-header\" id=\"headingFive\">\n                <button\n                  class=\"accordion-button collapsed\"\n                  type=\"button\"\n                  data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#collapseFive\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"collapseFive\"\n                >\n                  Chesapeake Bay Retriever\n                </button>\n              </h2>\n              <div\n                id=\"collapseFive\"\n                class=\"accordion-collapse collapse\"\n                aria-labelledby=\"headingFive\"\n                data-bs-parent=\"#accordionExample\"\n              >\n                <div class=\"accordion-body\">\n                  Der Chesapeake wird wegen seines aufgeweckten und fröhlichen\n                  Wesens geschätzt, wegen seiner Intelligenz, seines ruhigen\n                  situationsgerechten Verhaltens und seiner anhänglichen,\n                  beschützerischen Natur. Mut, Arbeitsfreudigkeit,\n                  Aufgewecktheit, Nase, Intelligenz, Liebe zum Wasser,\n                  allgemeine Qualität und, allem voran, Veranlagung sollten bei\n                  Auswahl und Zucht des Chesapeake-Bay-Retrievers erste\n                  Beachtung erfahren. Übermäßige Scheu oder übermäßig aggressive\n                  Neigungen sind nicht erwünscht in der Rasse, weder als\n                  Jagdgebrauchs- noch als Familienhund.\n                </div>\n              </div>\n            </div>\n            <div class=\"accordion-item\">\n              <h2 class=\"accordion-header\" id=\"headingSix\">\n                <button\n                  class=\"accordion-button collapsed\"\n                  type=\"button\"\n                  data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#collapseSix\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"collapseSix\"\n                >\n                  Curly Coated Retriever\n                </button>\n              </h2>\n              <div\n                id=\"collapseSix\"\n                class=\"accordion-collapse collapse\"\n                aria-labelledby=\"headingSix\"\n                data-bs-parent=\"#accordionExample\"\n              >\n                <div class=\"accordion-body\">\n                  Intelligent, ausgeglichen, verlässlich. Mutig, freundlich,\n                  selbstbewusst und unabhängig; kann den Eindruck von\n                  zurückhaltend erwecken.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"tab-pane fade show\"\n        id=\"Prüfungsablauf\"\n        role=\"tabpanel\"\n        aria-labelledby=\"home-tab\"\n      >\n        <div class=\"row gx-5\">\n          <div class=\"input-group mb-3\">\n            <table>\n              <thead>\n                <th>Station</th>\n                <th>Verhalten</th>\n              </thead>\n              <tr>\n                <td>1.a) Befragung & Kontaktaufnahme</td>\n                <td>Sozialkontakt, Beschwichtigungsv, Aggressionsverhalten</td>\n              </tr>\n              <tr>\n                <td>1.b) Chipablesen</td>\n                <td>Aggressionsverhalten</td>\n              </tr>\n              <tr>\n                <td>2. Verhalten beim Spaziergang mit dem Hundeführer</td>\n                <td>Aktivität</td>\n              </tr>\n              <tr>\n                <td>3. Verhalten in einer Menschengruppe von 6 Personen</td>\n                <td>\n                  Sozialverhalten, Beschwichtigungsverhalten,\n                  Aggressionsverhalten\n                </td>\n              </tr>\n              <tr>\n                <td>4. Verhalten bei Berührung durch Fremde</td>\n                <td>\n                  Sozialverhalten, Beschwichtigungsverhalten,\n                  Aggressionsverhalten\n                </td>\n              </tr>\n              <tr>\n                <td>5. Spiel mit Vorführer a) ohne Gegenstand</td>\n                <td>\n                  Spielverhalten, Beschwichtigungsverhalten,\n                  Aggressionsverhalten\n                </td>\n              </tr>\n              <tr>\n                <td>5. Spiel mit Vorführer b) mit Gegenstand</td>\n                <td>Spielverhalten, Beuteverhalten, Aggressionsverhalten</td>\n              </tr>\n              <tr>\n                <td>5. Spiel mit Vorführer c) Werfen eines Gegenstandes</td>\n                <td>Beuteverhalten, Tragen/Zutragen, Suchverhalten</td>\n              </tr>\n              <tr>\n                <td>6. Parcours dreimal in der Reihenfolge:</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>haptisch</td>\n                <td>\n                  Schreckhaftigkeit, Beschwichtigungsverhalten,\n                  Neugierverhalten, Aktivität\n                </td>\n              </tr>\n              <tr>\n                <td>akustisch</td>\n                <td>\n                  Schreckhaftigkeit, Beschwichtigungsverhalten,\n                  Neugierverhalten, Aktivität\n                </td>\n              </tr>\n              <tr>\n                <td>optisch</td>\n                <td>\n                  Schreckhaftigkeit, Beschwichtigungsverhalten,\n                  Neugierverhalten, Aktivität\n                </td>\n              </tr>\n              <tr>\n                <td>7. Schuss in 100m, 50m, 20m</td>\n                <td>Schreckhaftigkeit, Beschwichtigungsverhalten</td>\n              </tr>\n            </table>\n            <div class=\"row\">\n              <h2>Nichtbestanden bei:</h2>\n              <div class=\"row\">\n                Code 5 (Ix5): 1maliges Auftreten in den Bereichen:\n                Aggressionsverhalten oder Schussscheue (Schreckhaftigkeit auch\n                beim Schuss) oder Schreckhaftigkeit oder Ängstlichkeit oder\n                Unsicherheit\n              </div>\n              <div class=\"row\">\n                Code 4 (IIx4): 2maliges Auftreten im Bereich\n                Aggressionsverhalten\n              </div>\n              <div class=\"row\">\n                Code 4 (IIIx4): 3maliges Auftreten in den Bereichen\n                Beschwichtigungsverhalten gegenüber Menschen oder 3maliges\n                Auftreten im Bereich Beschwichtigungsverhalten gegenüber der\n                unbelebten Umwelt oder 3maliges Auftreten im Bereich\n                Schreckhaftigkeit (außer Schuss)\n              </div>\n              <div class=\"row\">\n                Code 3 (IIIx3): 3maliges Auftreten in allen Testsituationen der\n                Verhaltensbeurteilung im Bereich Aggression\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _fragen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragen */ 3558);
/* harmony import */ var _awQuiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awQuiz */ 3050);
/* harmony import */ var _assiQuiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assiQuiz */ 6382);
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/ol.css */ 9789);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var App = (function () {
    function App() {
        this.message = "Hello Worldi!";
        this.questions = _fragen__WEBPACK_IMPORTED_MODULE_0__.fragen;
        this.awQuizQuestions = _awQuiz__WEBPACK_IMPORTED_MODULE_1__.awQuiz;
        this.assiQuizQuestions = _assiQuiz__WEBPACK_IMPORTED_MODULE_2__.assiQuiz;
        this.wrongAnswers = [];
        this.frage = this.questions.at(0);
        this.showSolution = false;
        this.categories = [];
        this.assiCategories = [];
        this.selectedCategory = null;
        this.position = 0;
        this.searchTerm = "";
        this.checkedAnswers = [];
        this.correct = 0;
        this.quizMode = "dd";
        this.questions = _fragen__WEBPACK_IMPORTED_MODULE_0__.fragen;
        this.categories = this.calculateCategories();
        this.assiCategories = this.calculateAssiCategories();
    }
    App.prototype.next = function () {
        if (this.isAnswerCorrect()) {
            this.showSolution = false;
            this.checkedAnswers = [];
            if (this.position < this.questions.length) {
                this.position++;
            }
            this.frage = this.questions.at(this.position);
            this.frage.Antworten = this.shuffleArray(this.frage.Antworten, this.frage.Antworten.length);
        }
        else {
            this.showSolution = true;
        }
    };
    Object.defineProperty(App.prototype, "mode", {
        get: function () {
            return this.quizMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App.prototype, "gameOver", {
        get: function () {
            return this.position === this.questions.length;
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.search = function () {
        var _this = this;
        this.questions = this.questions.filter(function (q) {
            if (q.Frage) {
                return q.Frage.toLowerCase().includes(_this.searchTerm.toLowerCase());
            }
        });
        this.position = 0;
        this.frage = this.questions[0];
    };
    App.prototype.isAnswerCorrect = function () {
        var _this = this;
        var isCorrect = true;
        if (this.checkedAnswers.length === 0) {
            if (this.wrongAnswers.length === 0) {
                this.wrongAnswers.push(__assign({}, this.frage));
            }
            else if (this.wrongAnswers.filter(function (wrong) {
                return wrong.Frage.includes(_this.frage.Frage);
            }).length === 0) {
                this.wrongAnswers.push(__assign({}, this.frage));
            }
            isCorrect = false;
        }
        for (var index = 0; index < this.checkedAnswers.length; index++) {
            var userAnswer = this.checkedAnswers[index];
            for (var index2 = 0; index2 < this.frage.Antworten.length; index2++) {
                var correctAnswer = this.frage.Antworten[index2];
                if (userAnswer.text === correctAnswer.text && !correctAnswer.richtig) {
                    if (this.wrongAnswers.length === 0) {
                        this.wrongAnswers.push(__assign({}, this.frage));
                    }
                    else if (this.wrongAnswers.filter(function (wrong) { return wrong.Frage === _this.frage.Frage; }).length === 0) {
                        console.log("frage not found");
                        this.wrongAnswers.push(__assign({}, this.frage));
                    }
                    isCorrect = false;
                }
            }
        }
        return isCorrect;
    };
    Object.defineProperty(App.prototype, "correctAnswers", {
        get: function () {
            if (this.position === 0) {
                return 0;
            }
            var amount = 100 - (this.wrongAnswers.length / (this.position + 1)) * 100;
            return Math.floor(amount);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App.prototype, "questionNo", {
        get: function () {
            if (this.position === 0) {
                return 1;
            }
            else if (this.position === this.questions.length) {
                return this.position - 1;
            }
            else {
                return this.position;
            }
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.calculateCategories = function () {
        var unique = __spreadArray([], Array.from(new Set(this.questions.map(function (item) { return item.Kategorie; }))), true);
        console.log("unique questions");
        console.log(unique);
        return unique;
    };
    App.prototype.calculateAssiCategories = function () {
        var unique = __spreadArray([], Array.from(new Set(this.assiQuizQuestions.map(function (item) { return item.Kategorie; }))), true);
        console.log("unique questions");
        console.log(unique);
        return unique;
    };
    App.prototype.filterQuestions = function (cat) {
        var _this = this;
        console.log("filterQuestions called: " + this.selectedCategory);
        this.showSolution = false;
        this.position = 0;
        this.selectedCategory = cat;
        if (this.selectedCategory === "null") {
            console.log("selected categorie is null");
            this.questions = _fragen__WEBPACK_IMPORTED_MODULE_0__.fragen;
            this.frage = this.questions[0];
            return;
        }
        if (cat === "wrong") {
            console.log("selected categorie is wrong answers");
            console.log(this.wrongAnswers);
            this.questions = this.wrongAnswers;
            this.frage = this.questions[0];
            return;
        }
        this.questions = _fragen__WEBPACK_IMPORTED_MODULE_0__.fragen;
        this.questions = this.questions.filter(function (q) { return q.Kategorie === _this.selectedCategory; });
        this.frage = this.questions[0];
    };
    App.prototype.filterAssiQuestions = function (cat) {
        var _this = this;
        console.log("filterQuestions called: " + this.selectedCategory);
        this.showSolution = false;
        this.position = 0;
        this.selectedCategory = cat;
        if (this.selectedCategory === "null") {
            console.log("selected categorie is null");
            this.questions = this.assiQuizQuestions;
            this.frage = this.questions[0];
            return;
        }
        if (cat === "wrong") {
            console.log("selected categorie is wrong answers");
            console.log(this.wrongAnswers);
            this.questions = this.wrongAnswers;
            this.frage = this.questions[0];
            return;
        }
        this.questions = this.assiQuizQuestions;
        this.questions = this.questions.filter(function (q) { return q.Kategorie === _this.selectedCategory; });
        this.frage = this.questions[0];
    };
    App.prototype.shuffle = function () {
        this.showSolution = false;
        this.shuffleArray(this.questions, this.questions.length);
    };
    App.prototype.awQuiz = function () {
        this.quizMode = "anwärter";
        this.questions = this.shuffleArray(this.awQuizQuestions, 60);
        this.frage = this.questions[0];
    };
    App.prototype.assiQuiz = function () {
        this.quizMode = "assistenten";
        var filtered = this.assiQuizQuestions.filter(function (frage) {
            return frage.Kategorie !== "Lernverhalten/Ausbildung";
        });
        this.questions = this.shuffleArray(filtered, 80);
        this.frage = this.questions[0];
    };
    App.prototype.pruefung = function () {
        this.quizMode = "pruefung";
        var filtered = this.assiQuizQuestions.filter(function (frage) {
            return frage.Frage.includes("--p");
        });
        this.questions = this.shuffleArray(filtered, filtered.length - 1);
        this.frage = this.questions[0];
    };
    App.prototype.shuffleArray = function (array, lenght) {
        var _a;
        this.showSolution = false;
        console.log("shuffle all: ");
        var currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            _a = [
                array[randomIndex],
                array[currentIndex],
            ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array.slice(0, lenght);
    };
    App.prototype.solution = function () {
        this.showSolution = true;
    };
    App.prototype.reset = function () {
        this.showSolution = false;
        this.questions = _fragen__WEBPACK_IMPORTED_MODULE_0__.fragen;
        this.frage = this.questions.at(0);
        this.wrongAnswers = [];
        this.searchTerm = "";
        this.position = 0;
        this.selectedCategory = null;
    };
    __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_4__.computedFrom)("quizMode"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], App.prototype, "mode", null);
    __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_4__.computedFrom)("position"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], App.prototype, "gameOver", null);
    __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_4__.computedFrom)("position"),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], App.prototype, "correctAnswers", null);
    __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_4__.computedFrom)("position"),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], App.prototype, "questionNo", null);
    return App;
}());



/***/ }),

/***/ 1407:
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"debug":true,"testing":true}');

/***/ })

}]);
//# sourceMappingURL=app-9a8b795a.09df464c778910d25d44.bundle.js.map