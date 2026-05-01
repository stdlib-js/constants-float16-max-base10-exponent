/** @license Apache-2.0 */

'use strict';

/**
* The maximum base 10 exponent for a half-precision floating-point number.
*
* @module @stdlib/constants-float16-max-base10-exponent
* @type {integer32}
*
* @example
* var FLOAT16_MAX_BASE10_EXPONENT = require( '@stdlib/constants-float16-max-base10-exponent' );
* // returns 4
*/


// MAIN //

/**
* The maximum base 10 exponent for a half-precision floating-point number.
*
* @constant
* @type {integer32}
* @default 4
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT16_MAX_BASE10_EXPONENT = 4|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_MAX_BASE10_EXPONENT;
