import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-filters',
  templateUrl: './home-filters.component.html',
  styleUrls: ['./home-filters.component.scss'],
})
export class HomeFiltersComponent implements OnInit {
  filters = {
    commonFilters: {
      technical: true,
      functional: true,
      security: false,
    },
    dateFilters: {
      all: true,
      from: '',
      to: '',
    },
  };

  constructor() {}

  ngOnInit() {}

  get allClicked() {
    const { commonFilters } = this.filters;
    const { functional, technical, security } = commonFilters;
    return functional && technical && security;
  }

  updateCommonFilters = filterName => {
    const { commonFilters } = this.filters;
    const newFilter = { [filterName]: !commonFilters[filterName] };
    const newCommonFilters = { commonFilters: { ...commonFilters, ...newFilter } };
    this.filters = { ...this.filters, ...newCommonFilters };
  };

  toggleAll = () => {
    const newCommonFilters = {
      commonFilters: {
        technical: !this.allClicked,
        functional: !this.allClicked,
        security: !this.allClicked,
      },
    };
    this.filters = { ...this.filters, ...newCommonFilters };
  };
}
