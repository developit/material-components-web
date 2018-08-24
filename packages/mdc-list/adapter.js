/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC List. Provides an interface for managing focus.
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCListAdapter {
  /** @return {number} */
  getListItemCount() {}

  /**
   * @return {number} */
  getFocusedElementIndex() {}

  /** @param {Element} node */
  getListItemIndex(node) {}

  /**
   * @param {number} index
   * @param {string} attribute
   * @param {string} value
   */
  setAttributeForElementIndex(index, attribute, value) {}

  /**
   * @param {number} index
   * @param {string} attribute
   */
  removeAttributeForElementIndex(index, attribute) {}

  /**
   * @param {number} index
   * @param {string} className
   */
  addClassForElementIndex(index, className) {}

  /**
   * @param {number} index
   * @param {string} className
   */
  removeClassForElementIndex(index, className) {}

  /**
   * Focuses list item at the index specified.
   * @param {number} index
   */
  focusItemAtIndex(index) {}

  /**
   * Checks if the provided element is contains the mdc-list-item class.
   * @param {Element} ele
   */
  isListItem(ele) {}

  /**
   * Sets the tabindex to the value specified for all button/a element children of
   * the list item at the index specified.
   * @param {number} listItemIndex
   * @param {number} tabIndexValue
   */
  setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}
}

export default MDCListAdapter;
