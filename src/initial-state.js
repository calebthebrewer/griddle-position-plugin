import Immutable from 'immutable';

export default function initialState(config = {}) {
  return Immutable.fromJS({
    currentPosition: {
      xScrollChangePosition: 0,
      yScrollChangePosition: 0,
      renderedStartDisplayIndex: 0,
      renderedEndDisplayIndex: 20,
      visibleDataLength: 20
    },
    positionConfig: {
      tableHeight: 500,
      tableWidth: null,
      rowHeight: 20,
      defaultColumnWidth: null,
      infiniteScrollLoadTreshold: 50,
      fixedHeader: true,
      ...config
    },
    renderedData: []
  });
}