"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["app"],{

/***/ "./src/gamefunc.js":
/*!*************************!*\
  !*** ./src/gamefunc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
    return {
        length,
        hits: 0,
        sunk: false,
        coordinates: [],
        hit() {
            this.hits += 1;
        },
        isSunk() {
            if (this.hits === this.length) {
                this.sunk = true;
            }
        },
        setShipCoordinates(coords) {
            if (coords.length === this.length) {
                this.coordinates = coords; 
            } else {
                return false
            }
            return true
        }
    }
}

function Gameboard() {
    return {
        ships: [],
        misses: [],
        hits: [],
        addShip(ship, coords) {
            if (ship.length !== coords.length) {
                return false
            }
            ship.setShipCoordinates(coords);
            this.ships.push(ship);
            return true
        },
        receiveAttack(coord) {
            if (this.misses.includes(coord)) {
                console.log('already logged')
                return false
            }

            for (let i = 0; i < this.ships.length; i++) {
                if (this.ships[i].coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) {
                    this.hits.push(coord);
                    this.ships[i].hit();
                    this.ships[i].isSunk();
                    return true;
                }
            }
            this.misses.push(coord);
            console.log('missed')
            return false
        },
        checkForAllSunk() {
            for (let i = 0; i < this.ships.length; i++) {
                if (!this.ships[i].sunk) {
                    return false
                }
            }
            return true
        }
    }
}

function Player(type) {
    return {
        type,
        gameboard: Gameboard()
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamefunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamefunc.js */ "./src/gamefunc.js");


const gameboard = (0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
const ship = (0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
const coords = [[0,0], [0,1], [0,2]];
gameboard.addShip(ship, coords);
gameboard.receiveAttack([0,0]);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hFOEM7O0FBRTlDLGtCQUFrQix1REFBUztBQUMzQixhQUFhLGtEQUFJO0FBQ2pCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWZ1bmMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBjb29yZGluYXRlczogW10sXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFNoaXBDb29yZGluYXRlcyhjb29yZHMpIHtcbiAgICAgICAgICAgIGlmIChjb29yZHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZHM7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hpcHM6IFtdLFxuICAgICAgICBtaXNzZXM6IFtdLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgYWRkU2hpcChzaGlwLCBjb29yZHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmxlbmd0aCAhPT0gY29vcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcC5zZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRzKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pc3Nlcy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBsb2dnZWQnKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tpXS5jb29yZGluYXRlcy5zb21lKHggPT4geFswXSA9PT0gY29vcmRbMF0gJiYgeFsxXSA9PT0gY29vcmRbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGl0cy5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5taXNzZXMucHVzaChjb29yZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWlzc2VkJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjaGVja0ZvckFsbFN1bmsoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNbaV0uc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKHR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBnYW1lYm9hcmQ6IEdhbWVib2FyZCgpXG4gICAgfVxufSIsImltcG9ydCB7U2hpcCwgR2FtZWJvYXJkfSBmcm9tICcuL2dhbWVmdW5jLmpzJztcblxuY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5jb25zdCBzaGlwID0gU2hpcCgzKTtcbmNvbnN0IGNvb3JkcyA9IFtbMCwwXSwgWzAsMV0sIFswLDJdXTtcbmdhbWVib2FyZC5hZGRTaGlwKHNoaXAsIGNvb3Jkcyk7XG5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbMCwwXSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=