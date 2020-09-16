/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/vaadin-grid-sort-mixin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {microTask} from '@polymer/polymer/lib/utils/async.js';

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export {SortMixin};

declare function SortMixin<T extends new (...args: any[]) => {}>(base: T): T & SortMixinConstructor;

interface SortMixinConstructor {
  new(...args: any[]): SortMixin;
}

export {SortMixinConstructor};

interface SortMixin {

  /**
   * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
   * @attr {boolean} multi-sort
   */
  multiSort: boolean;
  _sorters: GridSorter[];
  ready(): void;
  _mapSorters(): GridSorter[];
}

import {GridSorter} from '../@types/interfaces';
