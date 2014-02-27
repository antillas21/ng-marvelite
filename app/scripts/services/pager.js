'use strict';

angular.module('ngMarveliteApp')
.service('Pager', function Pager() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  return function(options) {
    this.pageSize = options.limit;
    this.totalRecords = options.total;
    this.offset = options.offset;

    this.pagesTotal = function() {
      return Math.ceil(this.totalRecords / this.pageSize);
    };

    this.currentPage = function() {
      return Math.ceil(this.offset / this.pageSize) + 1;
    };

    this.nextPage = function() {
      return this.currentPage() + 1;
    };

    this.prevPage = function() {
      return this.currentPage() - 1;
    };

    this.showNext = function() {
      return this.nextPage() <= this.pagesTotal();
    };

    this.showPrev = function() {
      return this.prevPage() >= 1;
    };
  };
});
