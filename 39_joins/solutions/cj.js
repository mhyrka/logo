function join (left, right, foreignKey, primaryKey, newKey) {
  const rightByPrimaryKey = right.reduce((rightByPrimaryKey, rightEntity) => {
    const entityPrimaryKey = rightEntity[primaryKey];
    rightByPrimaryKey[entityPrimaryKey] = rightEntity;
    return rightByPrimaryKey;
  }, {}); // create an object where the keys are the id and the values are the entities from the right array

  return left.map(entity => {
    entity = Object.assign({}, entity); // copy entity so we don't modify the original
    const rightPrimaryKey = entity[foreignKey];
    entity[newKey] = rightByPrimaryKey[rightPrimaryKey]; // set the state property
    delete entity[foreignKey]; // remove the state_id property
    return entity;
  });
}

var cities = [
  {id: 1, name: 'Denver', state_id: 1},
  {id: 2, name: 'Milwaukee', state_id: 3},
  {id: 9, name: 'Pella', state_id: 9},
  {id: 4, name: 'Jasper', state_id: 7},
  {id: 11, name: 'Greenville', state_id: 10},
  {id: 8, name: 'West Lafayette', state_id: 7},
  {id: 45, name: 'Chicago', state_id: 22}
];

var states = [
  {id: 1, name: 'Colorado'},
  {id: 3, name: 'Wisconsin'},
  {id: 9, name: 'Iowa'},
  {id: 7, name: 'Indiana'},
  {id: 22, name: 'Illinois'},
  {id: 10, name: 'South Carolina'}
];

var result = join(cities, states, 'state_id', 'id', 'state');
console.log(result);
