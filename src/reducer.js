export function XY_POSITION_CHANGED(state, action, helpers) {
  const tempState = helpers.updatePositionProperties(action, state, helpers);
  return helpers.updateRenderedData(tempState, helpers);
}

export function GRIDDLE_LOADED_DATA_AFTER(state, action, helpers) {
  const tempState = helpers.updatePositionProperties({ yScrollPosition: 0, xScrollPosition: 0, force: true}, state, helpers, true);

  const columnProperties = state.get('renderProperties').get('columnProperties');

  //TODO: Clean this up and make this happen in core instead of here
  const sorted =  helpers
      .sortDataByColumns(tempState, helpers)
      .setIn(['pageProperties', 'currentPage'], 1)

  return helpers.updateRenderedData(sorted, helpers);
}

export function GRIDDLE_GET_PAGE_AFTER(state, action, helpers) {
  const tempState = helpers.updatePositionProperties(action, state, helpers);
  return helpers.updateRenderedData(tempState, helpers);
}

export function GRIDDLE_NEXT_PAGE_AFTER(state, action, helpers) {
  return helpers.updateRenderedData(state, helpers);
}

export function GRIDDLE_PREVIOUS_PAGE_AFTER(state, action, helpers) {
  return helpers.updateRenderedData(state, helpers);
}

export function GRIDDLE_FILTERED_AFTER(state, action, helpers) {
  state = helpers.setCurrentPosition(state, 0, 0);
  return helpers.updateRenderedData(state, helpers);
}

export function GRIDDLE_SORT_AFTER(state, action, helpers) {
  return helpers.updateRenderedData(state, helpers);
}

export function GRIDDLE_TOGGLE_COLUMN_AFTER(state, action, helpers) {
  return helpers.updateRenderedData(state, helpers);
}
