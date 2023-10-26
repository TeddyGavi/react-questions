const buildTree = (response) => {
  const tree = [];
  const parent = {};

  for (let i = 0; i < response.length; i++) {
    parent[response[i].id] = response[i];
    parent[response[i].id].children = [];
     parent[response[i].id].isChecked = false;
  }

  for (let i = 0; i < response.length; i++) {
    if (response[i].parentId) {
      parent[response[i].parentId].children.push(response[i]);
    } else {
      tree.push(response[i]);
    }
  }

  return tree;
};
export default buildTree;
